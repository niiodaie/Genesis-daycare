'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { useUser } from '@/lib/useUser'

type Child = { id: string; first_name: string; last_name: string }
type Report = { id: string; date: string; summary: string; child_id: string }

export default function PortalHome() {
  const { user } = useUser()
  const [children, setChildren] = useState<Child[]>([])
  const [reports, setReports] = useState<Report[]>([])

  useEffect(() => {
    if (!supabase || !user) return
    // fetch children linked to this parent (via enrollments)
    supabase.from('children_view_for_parent').select('*').then(({ data }) => {
      setChildren((data as any) || [])
    })
    // recent reports
    supabase.from('daily_reports_recent_for_parent').select('*').then(({ data }) => {
      setReports((data as any) || [])
    })
  }, [user])

  // Group reports by child and limit to last 5 per child
  const groupedReports = children.map(child => {
    const childReports = reports
      .filter(r => r.child_id === child.id)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 5)
    return { child, reports: childReports }
  })

  if (!supabase) {
    return <div className="card">Configure Supabase env vars to enable the Portal.</div>
  }

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="card md:col-span-2">
        <h2 className="text-xl font-bold">Recent Daily Reports</h2>
        <div className="mt-3 space-y-6">
          {groupedReports.length === 0 && <p className="text-gray-600">No reports yet.</p>}
          {groupedReports.map(({ child, reports: childReports }) => (
            <div key={child.id} className="border-b pb-4 last:border-b-0">
              <h3 className="font-semibold text-lg mb-3">{child.first_name} {child.last_name}</h3>
              <div className="grid gap-2">
                {childReports.length === 0 && <p className="text-gray-500 text-sm">No reports yet for this child.</p>}
                {childReports.map((r) => (
                  <Link key={r.id} href={`/portal/report/${r.id}`} className="border rounded-lg p-3 hover:bg-gray-50 block">
                    <div className="text-sm text-gray-500">{new Date(r.date).toLocaleDateString()}</div>
                    <div className="font-medium">{r.summary || 'Daily Report'}</div>
                  </Link>
                ))}
                {childReports.length > 0 && (
                  <Link href={`/portal/child/${child.id}`} className="text-royalRed text-sm font-medium hover:underline">
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
        <ul className="mt-3 grid gap-2">
          {children.map((c) => (
            <li key={c.id} className="flex items-center justify-between">
              <span>{c.first_name} {c.last_name}</span>
              <Link className="text-royalRed font-semibold" href={`/portal/child/${c.id}`}>View</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
