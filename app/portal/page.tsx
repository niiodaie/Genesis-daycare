'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

// Optional (will be undefined in sandbox / until you configure)
import { supabase } from '@/lib/supabaseClient';

// Sandbox/session + mock data
import { useUser } from '@/lib/useUser';
import { children as mockChildren, memory } from '@/lib/mockData';

type Child = { id: string; first_name: string; last_name: string; parentId?: string };
type Report = { id: string; date: string; summary?: string; child_id: string };

export default function PortalHome() {
  // Step-2 sandbox hook returns { session, loading }
  const { session, loading } = useUser();

  const [children, setChildren] = useState<Child[]>([]);
  const [reports, setReports] = useState<Report[]>([]);
  const isSupabaseReady = Boolean(supabase); // will be false in sandbox

  // Build sandbox data for the current role
  const sandboxChildren = useMemo<Child[]>(() => {
    if (!session) return [];
    if (session.role === 'parent') {
      return mockChildren
        .filter((c) => c.parentId === session.sub)
        .map((c) => ({ id: c.id, first_name: c.name.split(' ')[0], last_name: c.name.split(' ').slice(1).join(' ') || '' }));
    }
    // staff/admin -> all
    return mockChildren.map((c) => ({
      id: c.id,
      first_name: c.name.split(' ')[0],
      last_name: c.name.split(' ').slice(1).join(' ') || '',
    }));
  }, [session]);

  const sandboxReports = useMemo<Report[]>(() => {
    const list = memory.reports ?? [];
    // adapt to the Report type expected by the UI
    return list.map((r) => ({
      id: r.id,
      child_id: r.childId,
      date: r.date,
      summary: r.activities?.[0] || 'Daily Report',
    }));
  }, []);

  useEffect(() => {
    let cancelled = false;
    async function hydrate() {
      if (!session) {
        setChildren([]);
        setReports([]);
        return;
      }

      // If Supabase is not set up yet, just use sandbox data.
      if (!isSupabaseReady) {
        if (!cancelled) {
          setChildren(sandboxChildren);
          setReports(sandboxReports);
        }
        return;
      }

      // Supabase path (parent views). If views aren't there yet, fall back to sandbox.
      try {
        if (session.role === 'parent') {
          const { data: kids, error: kerr } = await supabase!
            .from('children_view_for_parent')
            .select('*');
          const { data: reps, error: rerr } = await supabase!
            .from('daily_reports_recent_for_parent')
            .select('*');

          if (!cancelled) {
            if (kerr || !kids) setChildren(sandboxChildren);
            else setChildren((kids as any[]) as Child[]);
            if (rerr || !reps) setReports(sandboxReports);
            else setReports((reps as any[]) as Report[]);
          }
        } else {
          // staff/admin (you can replace with real queries later)
          // Fallback to sandbox until real tables/views are hooked up
          if (!cancelled) {
            setChildren(sandboxChildren);
            setReports(sandboxReports);
          }
        }
      } catch {
        if (!cancelled) {
          setChildren(sandboxChildren);
          setReports(sandboxReports);
        }
      }
    }

    hydrate();
    return () => {
      cancelled = true;
    };
  }, [session, isSupabaseReady, sandboxChildren, sandboxReports]);

  // Group reports by child and limit to last 5 per child
  const groupedReports = useMemo(() => {
    return children.map((child) => {
      const childReports = reports
        .filter((r) => r.child_id === child.id)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 5);
      return { child, reports: childReports };
    });
  }, [children, reports]);

  if (loading) {
    return <div className="text-slate-600">Loading…</div>;
  }

  if (!session) {
    return (
      <div className="card">
        Please{' '}
        <Link href="/portal/login" className="text-royalRed font-semibold">
          sign in
        </Link>{' '}
        to view your portal.
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="card md:col-span-2">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xl font-bold">Recent Daily Reports</h2>
          {!isSupabaseReady && (
            <span className="text-xs text-slate-500">
              Sandbox data — connect Supabase to enable live reports
            </span>
          )}
        </div>

        <div className="mt-3 space-y-6">
          {groupedReports.every((g) => g.reports.length === 0) && (
            <p className="text-gray-600">No reports yet.</p>
          )}

          {groupedReports.map(({ child, reports: childReports }) => (
            <div key={child.id} className="border-b pb-4 last:border-b-0">
              <h3 className="font-semibold text-lg mb-3">
                {child.first_name} {child.last_name}
              </h3>

              <div className="grid gap-2">
                {childReports.length === 0 && (
                  <p className="text-gray-500 text-sm">No reports yet for this child.</p>
                )}

                {childReports.map((r) => (
                  <Link
                    key={r.id}
                    href={`/portal/report/${child.id}`}
                    className="border rounded-lg p-3 hover:bg-gray-50 block"
                  >
                    <div className="text-sm text-gray-500">
                      {new Date(r.date).toLocaleDateString()}
                    </div>
                    <div className="font-medium">{r.summary || 'Daily Report'}</div>
                  </Link>
                ))}

                {childReports.length > 0 && (
                  <Link
                    href={`/portal/child/${child.id}`}
                    className="text-royalRed text-sm font-medium hover:underline"
                  >
                    View all reports for {child.first_name} →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <h2 className="text-xl font-bold">Your Children</h2>
        {!isSupabaseReady && (
          <p className="text-xs text-slate-500 mt-1">
            Showing sandbox data until Supabase is connected.
          </p>
        )}
        <ul className="mt-3 grid gap-2">
          {children.map((c) => (
            <li key={c.id} className="flex items-center justify-between">
              <span>
                {c.first_name} {c.last_name}
              </span>
              <Link className="text-royalRed font-semibold" href={`/portal/child/${c.id}`}>
                View
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
