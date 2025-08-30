'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useUser } from '@/lib/useUser';
import { supabase } from '@/lib/supabaseClient';

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  const { user } = useUser();
  const router = useRouter();

  const role =
    (user as any)?.app_metadata?.role || (user as any)?.user_metadata?.role || 'parent';

  const onLogout = async () => {
    try {
      await supabase?.auth.signOut();
    } finally {
      router.push('/portal/login'); // or /portal
      router.refresh();
    }
  };

  return (
    <div className="container-p">
      {/* Top actions row — only when authenticated */}
      {user ? (
        <div className="flex items-center justify-between py-4">
          <nav className="flex flex-wrap gap-3">
            <Link href="/portal" className="btn btn-outline">My Children</Link>

            {(role === 'staff' || role === 'admin') && (
              <Link href="/portal/staff/daily-report" className="btn btn-outline">
                Daily Report (Staff)
              </Link>
            )}

            <Link href="/portal/profile" className="btn btn-outline">Profile</Link>
            <button onClick={onLogout} className="btn btn-outline">Logout</button>
          </nav>

          <div className="text-sm text-slate-500">
            {user.email || 'Signed in'}
          </div>
        </div>
      ) : (
        // Guest view — keep it tidy
        <div className="flex items-center justify-end py-4">
          <Link href="/portal/login" className="btn btn-primary">Sign in</Link>
        </div>
      )}

      <main className="pb-10">{children}</main>
    </div>
  );
}
