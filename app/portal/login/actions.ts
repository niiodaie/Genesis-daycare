'use server';

import { redirect } from 'next/navigation';
import { setSession } from '@/lib/auth';
import { demoUsers } from '@/lib/mockData';

export async function loginAction(formData: FormData) {
  const email = (formData.get('email') as string)?.trim().toLowerCase();
  const password = (formData.get('password') as string) ?? '';
  const next = (formData.get('next') as string) || '/portal';

  const user = demoUsers.find((u) => u.email === email && u.password === password);
  if (!user) {
    return { ok: false, message: 'Invalid credentials' };
  }

  setSession({ sub: user.id, role: user.role, name: user.name, email: user.email });
  redirect(next);
}
