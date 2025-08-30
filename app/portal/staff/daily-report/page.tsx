import { children, memory } from '@/lib/mockData';
import { getSession } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default function DailyReportForm() {
  const session = getSession();
  if (!session || (session.role !== 'staff' && session.role !== 'admin')) {
    redirect('/portal');
  }

  async function action(formData: FormData) {
    'use server';
    const childId = String(formData.get('childId') || '');
    const date = String(formData.get('date') || '').slice(0, 10);
    const meals = String(formData.get('meals') || '').split('\n').map(s => s.trim()).filter(Boolean);
    const activities = String(formData.get('activities') || '').split('\n').map(s => s.trim()).filter(Boolean);
    const notes = String(formData.get('notes') || '').trim();
    const napsRaw = String(formData.get('naps') || '').split('\n').map(s => s.trim()).filter(Boolean);
    const naps = napsRaw.map((line) => {
      const [start, end] = line.split('-').map(s => s.trim());
      return { start, end };
    });

    const id = `r_${Date.now()}`;
    memory.reports.unshift({ id, childId, date, meals, naps, activities, notes });
  }

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold">New Daily Report</h1>
      <form action={action} className="grid gap-4 mt-4">
        <div className="grid gap-1">
          <label className="text-sm font-semibold">Child</label>
          <select name="childId" required className="border rounded-xl px-3 py-2">
            {children.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
        </div>
        <div className="grid gap-1">
          <label className="text-sm font-semibold">Date</label>
          <input type="date" name="date" required className="border rounded-xl px-3 py-2" />
        </div>
        <div className="grid gap-1">
          <label className="text-sm font-semibold">Meals (one per line)</label>
          <textarea name="meals" className="border rounded-xl px-3 py-2" rows={3}/>
        </div>
        <div className="grid gap-1">
          <label className="text-sm font-semibold">Naps (format: 12:30 - 13:45, one per line)</label>
          <textarea name="naps" className="border rounded-xl px-3 py-2" rows={3}/>
        </div>
        <div className="grid gap-1">
          <label className="text-sm font-semibold">Activities (one per line)</label>
          <textarea name="activities" className="border rounded-xl px-3 py-2" rows={3}/>
        </div>
        <div className="grid gap-1">
          <label className="text-sm font-semibold">Notes</label>
          <textarea name="notes" className="border rounded-xl px-3 py-2" rows={3}/>
        </div>
        <button className="btn btn-primary">Save Report</button>
        <p className="text-xs text-slate-500">Sandbox-only: stored in memory; will reset on redeploy.</p>
      </form>
    </div>
  );
}
