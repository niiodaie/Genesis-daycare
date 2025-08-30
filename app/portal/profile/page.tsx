import { getSession } from '@/lib/auth';

export default function ProfilePage() {
  const s = getSession();
  return (
    <div className="max-w-xl py-6">
      <h1 className="text-2xl font-bold">My Profile</h1>
      {!s ? (
        <p className="mt-3 text-slate-600">You’re signed out.</p>
      ) : (
        <dl className="mt-4 grid gap-3">
          <div>
            <dt className="text-sm text-slate-600">Name</dt>
            <dd className="font-semibold">{s.name}</dd>
          </div>
          <div>
            <dt className="text-sm text-slate-600">Email</dt>
            <dd className="font-semibold">{s.email}</dd>
          </div>
          <div>
            <dt className="text-sm text-slate-600">Role</dt>
            <dd className="font-semibold capitalize">{s.role}</dd>
          </div>
        </dl>
      )}
    </div>
  );
}
