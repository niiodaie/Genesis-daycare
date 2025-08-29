'use client'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import Breadcrumbs from '@/components/Breadcrumbs'

export default function ChildDetail() {
  const params = useParams() as { id: string }
  const [reports, setReports] = useState<any[]>([])
  const [child, setChild] = useState<any>(null)

  useEffect(() => {
    if (!supabase) return
    supabase.from('children').select('*').eq('id', params.id).single().then(({ data }) => setChild(data))
    supabase.from('daily_reports').select('*').eq('child_id', params.id).order('date', { ascending: false }).then(({ data }) => setReports(data || []))
  }, [params.id])

  if (!supabase) return <div className="card">Configure Supabase to view child details.</div>

  const breadcrumbItems = [
    { label: 'Portal', href: '/portal' },
    { label: child ? `${child.first_name} ${child.last_name}` : 'Child Details' }
  ]

  return (
    <div className="grid gap-6">
      <Breadcrumbs items={breadcrumbItems} />
      
      <div className="card">
        <h1 className="text-2xl font-bold">{child?.first_name} {child?.last_name}</h1>
        <p className="text-gray-600">DOB: {child?.dob ? new Date(child.dob).toLocaleDateString() : '-'}</p>
      </div>

      <div className="card">
        <h2 className="font-bold">Daily Reports</h2>
        <div className="mt-3 grid gap-3">
          {reports.map(r => (
            <Link key={r.id} href={`/portal/report/${r.id}`} className="border rounded-xl p-3 hover:bg-gray-50">
              <div className="text-sm text-gray-500">{new Date(r.date).toLocaleDateString()}</div>
              <div className="font-semibold">{r.summary || 'Daily Report'}</div>
            </Link>
          ))}
          {reports.length === 0 && <p className="text-gray-600">No reports yet.</p>}
        </div>
      </div>
    </div>
  )
}
