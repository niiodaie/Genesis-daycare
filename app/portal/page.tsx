'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useUser } from '@/lib/useUser';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

type Child = { id: string; first_name: string; last_name: string };
type Report = { id: string; date: string; summary?: string; child_id: string };

export default function PortalHome() {
  const { user } = useUser();

  if (!user) {
  return (
    <section className="container-p">
      <div className="card text-center py-10">
        <span className="badge">Welcome</span>
        <h1 className="mt-2 text-2xl md:text-3xl font-bold">Welcome to MyGenesis</h1>
        <p className="mt-2 text-slate-600">
          Sign in to explore your child’s activities, daily reports, and profile.
        </p>
        <div className="mt-5 flex justify-center gap-3">
          <Link href="/portal/login" className="btn btn-primary">Sign in</Link>
          <Link href="/contact" className="btn btn-outline">Need help?</Link>
        </div>
      </div>
    </section>
  );
}


  const [children, setChildren] = useState<Child[]>([]);
  const [reports, setReports] = useState<Report[]>([]);

  useEffect(() => {
    if (!supabase || !user) return;

    supabase
      .from('children_view_for_parent')
      .select('*')
      .then(({ data, error }) => {
        if (error) console.warn('children_view_for_parent', error);
        setChildren(Array.isArray(data) ? (data as Child[]) : []);
      });

    supabase
      .from('daily_reports_recent_for_parent')
      .select('*')
      .then(({ data, error }) => {
        if (error) console.warn('daily_reports_recent_for_parent', error);
        setReports(Array.isArray(data) ? (data as Report[]) : []);
      });
  }, [user]);

  const safeChildren = Array.isArray(children) ? children : [];
  const safeReports = Array.isArray(reports) ? reports : [];

  // Build a safe structure for rendering without destructuring pitfalls
  const grouped = useMemo(() => {
    return safeChildren.map((child) => {
      const items = safeReports
        .filter((r) => r && r.child_id === child.id)
        .sort(
          (a, b) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
        )
        .slice(0, 5);
      return { child, items };
    });
  }, [safeChildren, safeReports]);

  if (!supabase) {
    return (
      <div className="card">
        Configure Supabase env vars to enable the Portal.
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="card md:col-span-2">
        <h2 className="text-xl font-bold">Recent Daily Reports</h2>

        <div className="mt-3 space-y-6">
          {grouped.length === 0 && (
            <p className="text-gray-600">No reports yet.</p>
          )}

          {grouped.map((entry) => (
            <div
              key={entry.child.id}
              className="border-b pb-4 last:border-b-0"
            >
              <h3 className="font-semibold text-lg mb-3">
                {entry.child.first_name} {entry.child.last_name}
              </h3>

              <div className="grid gap-2">
                {entry.items.length === 0 && (
                  <p className="text-gray-500 text-sm">
                    No reports yet for this child.
                  </p>
                )}

                {entry.items.map((r) => (
                  <Link
                    key={r.id}
                    href={`/portal/report/${r.id}`}
                    className="border rounded-lg p-3 hover:bg-gray-50 block"
                  >
                    <div className="text-sm text-gray-500">
                      {new Date(r.date).toLocaleDateString()}
                    </div>
                    <div className="font-medium">
                      {r.summary || 'Daily Report'}
                    </div>
                  </Link>
                ))}

                {entry.items.length > 0 && (
                  <Link
                    href={`/portal/child/${entry.child.id}`}
                    className="text-royalRed text-sm font-medium hover:underline"
                  >
                    View all reports for {entry.child.first_name} →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <h2 className="text-xl font-bold">Your Children</h2>
        <ul className="mt-3 grid gap-2">
          {safeChildren.map((c) => (
            <li
              key={c.id}
              className="flex items-center justify-between"
            >
              <span>
                {c.first_name} {c.last_name}
              </span>
              <Link
                className="text-royalRed font-semibold"
                href={`/portal/child/${c.id}`}
              >
                View
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
