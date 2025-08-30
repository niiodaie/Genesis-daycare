'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';

import { supabase } from '@/lib/supabaseClient';          // may be undefined in sandbox
import { useUser } from '@/lib/useUser';                  // sandbox/session hook
import { children as mockChildren, memory } from '@/lib/mockData';
import Breadcrumbs from '@/components/Breadcrumbs';

type Child = {
  id: string;
  first_name?: string;
  last_name?: string;
  name?: string;     // sandbox name (e.g. "Emma M.")
  parentId?: string; // sandbox owner
  dob?: string | null;
};

type Report = {
  id: string;
  child_id: string;
  date: string;
  summary?: string | null;
  meals?: string | null;
  nap?: string | null;
  activities?: string | null;
  notes?: string | null;
};

export default function ChildDetail() {
  const params = useParams() as { id: string };
  const childId = params.id;

  const { session, loading } = useUser();
  const isSupabaseReady = Boolean(supabase);

  const [child, setChild] = useState<Child | null>(null);
  const [reports, setReports] = useState<Report[]>([]);
  const [pending, setPending] = useState(true);

  // --- Sandbox helpers -------------------------------------------------------
  const sandboxChild: Child | null = useMemo(() => {
    const c = mockChildren.find((x) => x.id === childId) || null;
    if (!c) return null;
    const [first, ...rest] = c.name.split(' ');
    return {
      id: c.id,
      first_name: first,
      last_name: rest.join(' '),
      parentId: c.parentId,
      dob: c.dob ?? null,
    };
  }, [childId]);

  const sandboxReports: Report[] = useMemo(() => {
    const list = (memory.reports ?? []).filter((r) => r.childId === childId);
    return list
      .map((r) => ({
        id: r.id,
        child_id: r.childId,
        date: r.date,
        summary: r.activities?.[0] ?? 'Daily Report',
        meals: r.meals?.join(', ') ?? null,
        nap: r.nap ?? null,
        activities: r.activities?.join('\n') ?? null,
        notes: r.notes ?? null,
      }))
      .sort((a, b) => +new Date(b.date) - +new Date(a.date));
  }, [childId]);

  // --- Authorization helper --------------------------------------------------
  function canViewChild(c: Child | null): boolean {
    if (!session || !c) return false;
    if (session.role === 'parent') return c.parentId === session.sub; // sandbox path
    return ['staff', 'admin'].includes(session.role);
  }

  // --- Data load -------------------------------------------------------------
  useEffect(() => {
    let cancelled = false;

    async function load() {
      setPending(true);

      // Sandbox first (or fallback)
      if (!isSupabaseReady) {
        if (!cancelled) {
          setChild(sandboxChild);
          setReports(sandboxReports);
          setPending(false);
        }
        return;
      }

      try {
        const { data: kid, error: kerr } = await supabase!
          .from('children')
          .select('*')
          .eq('id', childId)
          .single();

        const { data: reps, error: rerr } = await supabase!
          .from('daily_reports')
          .select('*')
          .eq('child_id', childId)
          .order('date', { ascending: false });

        if (cancelled) return;

        // When tables not ready yet, fall back to sandbox
        setChild((kerr || !kid) ? sandboxChild : (kid as any));
        setReports((rerr || !reps) ? sandboxReports : ((reps as any[]) as Report[]));
      } catch {
        if (!cancelled) {
          setChild(sandboxChild);
          setReports(sandboxReports);
        }
      } finally {
        if (!cancelled) setPending(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [childId, isSupabaseReady, sandboxChild, sandboxReports]);

  // --- Loading / auth / 404 --------------------------------------------------
  if (loading || pending) return <div className="p-6 text-slate-600">Loading…</div>;
  if (!session) return notFound();
  if (!child) return notFound();
  if (!canViewChild(child)) return notFound();

  const breadcrumbItems = [
    { label: 'Portal', href: '/portal' },
    { label: `${child.first_name ?? ''} ${child.last_name ?? ''}`.trim() || 'Child' },
  ];

  return (
    <div className="grid gap-6">
      <Breadcrumbs items={breadcrumbItems} />

      <div className="card">
        <h1 className="text-2xl font-bold">
          {child.first_name} {child.last_name}
        </h1>
        <p className="text-gray-600">
          DOB:{' '}
          {child.dob ? new Date(child.dob).toLocaleDateString() : '—'}
        </p>
      </div>

      <div className="card">
        <h2 className="font-bold">Daily Reports</h2>
        <div className="mt-3 grid gap-3">
          {reports.length === 0 && (
            <p className="text-gray-600">No reports yet.</p>
          )}

          {reports.map((r) => (
            <Link
              key={r.id}
              href={`/portal/report/${r.id}`}
              className="border rounded-xl p-3 hover:bg-gray-50"
            >
              <div className="text-sm text-gray-500">
                {new Date(r.date).toLocaleDateString()}
              </div>
              <div className="font-semibold">{r.summary || 'Daily Report'}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
