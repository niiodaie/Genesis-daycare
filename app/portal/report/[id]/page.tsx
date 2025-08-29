'use client'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import Breadcrumbs from '@/components/Breadcrumbs'

export default function ReportDetail() {
  const params = useParams() as { id: string }
  const [report, setReport] = useState<any>(null)
  const [child, setChild] = useState<any>(null)

  useEffect(() => {
    if (!supabase) return
    supabase.from('daily_reports').select('*, children(first_name, last_name, id)').eq('id', params.id).single().then(({ data }) => {
      setReport(data)
      setChild(data?.children)
    })
  }, [params.id])

  if (!supabase) return <div className="card">Configure Supabase to view reports.</div>
  if (!report) return <div className="p-6">Loading…</div>

  const breadcrumbItems = [
    { label: 'Portal', href: '/portal' },
    { label: child ? `${child.first_name} ${child.last_name}` : 'Child', href: child ? `/portal/child/${child.id}` : undefined },
    { label: `Report - ${new Date(report.date).toLocaleDateString()}` }
  ]

  return (
    <div className="grid gap-6">
      <Breadcrumbs items={breadcrumbItems} />
      
      <div className="card">
        <h1 className="text-2xl font-bold">Daily Report — {new Date(report.date).toLocaleDateString()}</h1>
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold">Meals & Snacks</h3>
            <p className="text-gray-700 whitespace-pre-wrap">{report.meals || '-'}</p>
          </div>
          <div>
            <h3 className="font-semibold">Nap / Rest</h3>
            <p className="text-gray-700 whitespace-pre-wrap">{report.nap || '-'}</p>
          </div>
          <div className="md:col-span-2">
            <h3 className="font-semibold">Activities</h3>
            <p className="text-gray-700 whitespace-pre-wrap">{report.activities || '-'}</p>
          </div>
          <div className="md:col-span-2">
            <h3 className="font-semibold">Notes</h3>
            <p className="text-gray-700 whitespace-pre-wrap">{report.notes || '-'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
