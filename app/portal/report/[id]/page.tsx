'use client';

import { useEffect, useMemo, useState } from 'react';
import { useParams, notFound } from 'next/navigation';

import { supabase } from '@/lib/supabaseClient';          // may be undefined in sandbox
import { useUser } from '@/lib/useUser';                  // sandbox/session hook
import { children as mockChildren, memory } from '@/lib/mockData';
import Breadcrumbs from '@/components/Breadcrumbs';

type Child = { id: string; first_name?: string; last_name?: string; name?: string; parentId?: string };
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

export default function ReportDetail() {
  const params = useParams() as { id: string };
  const reportId = params.id;

  const { session, loading } = useUser();
  const isSupabaseReady = Boolean(supabase);

  const [report, setReport] = useState<Report | null>(null);
  const [child, setChild] = useState<Child | null>(null);
  const [pending, setPending] = useState(true);

  // Sandbox locate report + child
  const sandboxReport = useMemo<Report | null>(() => {
    const r = (memory.reports ?? []).find((x) => x.id === reportId);
    if (!r) return null;
    return {
      id: r.id,
      child_id: r.childId,
      date: r.date,
      summary: r.activities?.[0] ?? 'Daily Report',
      meals: r.meals?.join(', ') ?? null,
      nap: r.nap ?? null,
      activities: r.activities?.join('\n') ?? null,
      notes: r.notes ?? null,
    };
  }, [reportId]);

  const sandboxChild = useMemo<Child | null>(() => {
    if (!sandboxReport) return null;
    const c = mockChildren.find((x) => x.id === sandboxReport.child_id);
    if (!c) return null;
    const [first, ...rest] = c.name.split(' ');
    return { id: c.id, first_name: first, last_name: rest.join(' '), parentId: c.parentId };
  }, [sandboxReport]);

  // Authorization helper
  function canView(c: Child | null): boolean {
    if (!session || !c) return false;
    if (session.role === 'parent') return c.parentId === session.sub;
    return ['staff', 'admin'].includes(session.role);
  }

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setPending(true);

      if (!isSupabaseReady) {
        if (!cancelled) {
          setReport(sandboxReport);
          setChild(sandboxChild);
          setPending(false);
        }
        return;
      }

      try {
        const { data: rep, error: rerr } = await supabase!
          .from('daily_reports')
          .select('*, children(id, first_name, last_name)')
          .eq('id', reportId)
          .single();

        if (cancelled) return;

        if (rerr || !rep) {
          setReport(sandboxReport);
          setChild(sandboxChild);
        } else {
          setReport(rep as any);
          setChild((rep as any).children as Child);
        }
      } catch {
        if (!cancelled) {
          setReport(sandboxReport);
          setChild(sandboxChild);
        }
      } finally {
        if (!cancelled) setPending(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [reportId, isSupabaseReady, sandboxReport, sandboxChild]);

  // Loading / auth / 404
  if (loading || pending) return <div className="p-6 text-slate-600">Loading…</div>;
  if (!session) return notFound();
  if (!report || !child) return notFound();
  if (!canView(child)) return notFound();

  const breadcrumbItems = [
    { label: 'Portal', href: '/portal' },
    {
      label: `${child.first_name ?? ''} ${child.last_name ?? ''}`.trim() || 'Child',
      href: `/portal/child/${child.id}`,
    },
    { label: `Report — ${new Date(report.date).toLocaleDateString()}` },
  ];

  return (
    <div className="grid gap-6">
      <Breadcrumbs items={breadcrumbItems} />

      <div className="card">
        <h1 className="text-2xl font-bold">
          Daily Report — {new Date(report.date).toLocaleDateString()}
        </h1>

        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold">Meals & Snacks</h3>
            <p className="text-gray-700 whitespace-pre-wrap">{report.meals || '—'}</p>
          </div>
          <div>
            <h3 className="font-semibold">Nap / Rest</h3>
            <p className="text-gray-700 whitespace-pre-wrap">{report.nap || '—'}</p>
          </div>
          <div className="md:col-span-2">
            <h3 className="font-semibold">Activities</h3>
            <p className="text-gray-700 whitespace-pre-wrap">{report.activities || '—'}</p>
          </div>
          <div className="md:col-span-2">
            <h3 className="font-semibold">Notes</h3>
            <p className="text-gray-700 whitespace-pre-wrap">{report.notes || '—'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
