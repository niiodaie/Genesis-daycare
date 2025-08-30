'use client';

import Link from 'next/link';
import { useUser } from '@/lib/useUser';

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  const { session } = useUser();
  const role = session?.role ?? 'Guest';
  const isStaff = role === 'staff' || role === 'admin';

  return (
    <>
      {/* Slim portal toolbar – no brand/logo */}
      <div className="border-b bg-white">
        <div className="container-p flex items-center justify-between py-3">
          <nav className="flex flex-wrap gap-3">
            <Link href="/portal" className="btn btn-outline">My Children</Link>
            {isStaff && (
              <Link href="/portal/staff/daily-report" className="btn btn-outline">
                Daily Report (Staff)
              </Link>
            )}
            <Link href="/portal/profile" className="btn btn-outline">Profile</Link>
            <Link href="/portal/logout" className="btn btn-outline">Logout</Link>
          </nav>

          <span className="text-sm text-slate-500">{role}</span>
        </div>
      </div>

      <main className="container-p py-6">{children}</main>
    </>
  );
}
