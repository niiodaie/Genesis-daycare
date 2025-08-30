import { loginAction } from './actions';
import { getSession } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default function LoginPage({ searchParams }: { searchParams: { next?: string } }) {
  const session = getSession();
  if (session) redirect('/portal');

  const next = searchParams?.next ?? '/portal';

  return (
    <div className="max-w-md mx-auto py-10">
      <h1 className="text-2xl font-bold">Sign in to MyGenesis</h1>
      <p className="text-slate-600 mt-2">Use the demo accounts while we connect Supabase:</p>
      <ul className="text-sm text-slate-600 mt-1 list-disc pl-5">
        <li>Parent: <code>parent@genesis.test</code> / <code>demo123</code></li>
        <li>Staff: <code>staff@genesis.test</code> / <code>demo123</code></li>
        <li>Admin: <code>admin@genesis.test</code> / <code>demo123</code></li>
      </ul>

      <form action={loginAction} className="mt-6 grid gap-4">
        <input type="hidden" name="next" value={next} />
        <div className="grid gap-2">
          <label className="text-sm font-semibold">Email</label>
          <input name="email" type="email" required className="border rounded-xl px-3 py-2" placeholder="you@example.com" />
        </div>
        <div className="grid gap-2">
          <label className="text-sm font-semibold">Password</label>
          <input name="password" type="password" required className="border rounded-xl px-3 py-2" />
        </div>
        <button className="btn btn-primary">Sign in</button>
      </form>
    </div>
  );
}
