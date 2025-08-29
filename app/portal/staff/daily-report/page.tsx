'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { useUser } from '@/lib/useUser'

export default function DailyReportComposer() {
  const { user } = useUser()
  const [children, setChildren] = useState<any[]>([])
  const [state, setState] = useState<any>({ loading: false, ok: false, err: '' })

  useEffect(() => {
    if (!supabase) return
    supabase.from('children').select('id, first_name, last_name').order('first_name').then(({ data }) => setChildren(data || []))
  }, [])

  async function onSubmit(e: any) {
    e.preventDefault()
    setState({ loading: true })
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    try {
      if (!supabase) throw new Error('Missing Supabase config')
      const { error } = await supabase.from('daily_reports').insert([{
        child_id: payload.child_id,
        date: payload.date || new Date().toISOString(),
        meals: payload.meals,
        nap: payload.nap,
        activities: payload.activities,
        summary: payload.summary,
        notes: payload.notes
      }])
      if (error) throw error
      setState({ loading: false, ok: true })
      e.currentTarget.reset()
    } catch (e:any) {
      setState({ loading: false, ok: false, err: e.message })
    }
  }

  return (
    <div className="py-6 max-w-2xl">
      <h1 className="text-2xl font-bold">Create Daily Report (Staff)</h1>
      <form onSubmit={onSubmit} className="card mt-4 grid gap-3">
        <select name="child_id" required className="rounded-xl border px-4 py-3">
          <option value="">Select Child</option>
          {children.map(c => <option key={c.id} value={c.id}>{c.first_name} {c.last_name}</option>)}
        </select>
        <input type="date" name="date" className="rounded-xl border px-4 py-3"/>
        <input name="summary" placeholder="Short summary" className="rounded-xl border px-4 py-3"/>
        <textarea name="activities" placeholder="Activities" className="rounded-xl border px-4 py-3" rows={3}/>
        <textarea name="meals" placeholder="Meals & snacks" className="rounded-xl border px-4 py-3" rows={2}/>
        <textarea name="nap" placeholder="Nap/rest" className="rounded-xl border px-4 py-3" rows={2}/>
        <textarea name="notes" placeholder="Notes to parents" className="rounded-xl border px-4 py-3" rows={3}/>
        <button className="btn btn-primary" disabled={state.loading}>{state.loading ? 'Saving…' : 'Save Report'}</button>
        {state.ok && <p className="text-green-700">Saved!</p>}
        {state.err && <p className="text-red-600">{state.err}</p>}
        <p className="text-xs text-gray-500">Requires staff role via RLS; parents cannot create reports.</p>
      </form>
    </div>
  )
}
