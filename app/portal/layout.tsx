import Link from 'next/link';
import Image from 'next/image';
import { getSession } from '@/lib/auth';
import type { NavItem } from '@/lib/portalTypes';

const nav: NavItem[] = [
  { href: '/portal', label: 'My Children', roles: ['parent', 'admin', 'staff'] },
  { href: '/portal/staff/daily-report', label: 'Daily Report (Staff)', roles: ['staff', 'admin'] },
  { href: '/portal/profile', label: 'Profile', roles: ['parent', 'admin', 'staff'] },
  { href: '/portal/logout', label: 'Logout', roles: ['parent', 'admin', 'staff'] },
];

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  const session = getSession();

  return (
    <div className="min-h-[70vh]">
      <header className="border-b bg-white">
        <div className="container-p flex items-center justify-between py-4">
          <Link href="/portal" className="flex items-center gap-3">
            <span className="relative overflow-hidden rounded-xl ring-2 ring-royalYellow/60 shadow-soft h-10 w-10">
              <Image src="/logo-mark.png" alt="Genesis mark" fill className="object-contain" />
            </span>
            <div className="hidden sm:block leading-none">
              <div className="text-xl font-extrabold text-royalRed">GENESIS <span className="text-royalYellow">ROYALTY</span></div>
              <div className="text-[10px] font-extrabold tracking-[0.35em] text-royalPurple/80">DAYCARE CENTER</div>
            </div>
          </Link>

          <div className="text-sm">
            <div className="font-semibold">{session?.name ?? 'Guest'}</div>
            <div className="text-slate-500 capitalize">{session?.role}</div>
          </div>
        </div>
      </header>

      <nav className="container-p py-3">
        <div className="flex flex-wrap gap-3">
          {nav
            .filter((n) => !session || !n.roles || n.roles.includes(session.role))
            .map((n) => (
              <Link key={n.href} href={n.href} className="btn btn-outline text-sm">
                {n.label}
              </Link>
            ))}
        </div>
      </nav>

      <main className="container-p pb-12">{children}</main>
    </div>
  );
}
