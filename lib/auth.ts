'use server';

import { cookies } from 'next/headers';

type Role = 'guardian' | 'staff' | 'admin';
export type SessionUser = { id: string; name: string; role: Role; childIds?: string[] };

const DEMO_USERS: Record<string, SessionUser> = {
  'parent1@example.com': { id: 'u1', name: 'Emma’s Mom', role: 'guardian', childIds: ['c1'] },
  'staff@example.com':   { id: 's1', name: 'Ms. Amina',   role: 'staff' }
};

export async function signIn(email: string) {
  const u = DEMO_USERS[email.toLowerCase()];
  if (!u) return { ok: false, error: 'Sandbox: use parent1@example.com or staff@example.com' };
  cookies().set('myg_session', JSON.stringify(u), { httpOnly: true, sameSite: 'lax', path: '/' });
  return { ok: true };
}
export async function signOut() { cookies().delete('myg_session'); }
export function getSession(): SessionUser | undefined {
  const raw = cookies().get('myg_session')?.value;
  try { return raw ? (JSON.parse(raw) as SessionUser) : undefined; } catch { return undefined; }
}
