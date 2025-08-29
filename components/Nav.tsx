"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/activities", label: "Daily Activities" },
  { href: "/book-tour", label: "Book a Tour" },
  { href: "/payments", label: "Payment" },
  { href: "/portal", label: "MyGenesis" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b shadow-sm">
      <div className="container-p flex items-center justify-between py-4 md:py-5">
        {/* BRAND — large icon + wordmark (Option A) */}
        <Link href="/" aria-label="Genesis Royalty Daycare — Home" className="flex items-center gap-4 md:gap-5 min-w-0">
          {/* Icon — larger, crisp, subtle ring (no heavy box) */}
          <span className="grid place-items-center rounded-2xl bg-white p-1.5 shadow-soft shrink-0 ring-1 ring-royalYellow/30">
            <Image
              src="/logo-mark.png"                              // square icon in /public
              alt="Genesis Royalty logo"
              width={80} height={80}                            // render size; crisp on retina
              priority
              className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 xl:h-20 xl:w-20 object-contain saturate-125 contrast-110 brightness-110"
            />
          </span>

          {/* Wordmark — big like the original site (hidden on xs) */}
          <span className="hidden sm:block leading-tight select-none truncate">
            <span className="block text-2xl md:text-3xl font-extrabold tracking-tight text-royalRed">
              GENESIS
            </span>
            <span className="block -mt-1 text-xl md:text-2xl font-extrabold tracking-tight text-royalYellow">
              ROYALTY
            </span>
          </span>
        </Link>

        {/* Desktop nav (start at lg so brand has more room on tablets) */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-semibold transition hover:text-royalRed ${isActive(l.href) ? "text-royalRed" : ""}`}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/book-tour" className="btn btn-primary text-sm">Enroll</Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <div className="w-6 h-0.5 bg-black mb-1" />
          <div className="w-6 h-0.5 bg-black mb-1" />
          <div className="w-6 h-0.5 bg-black" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-nav" className="lg:hidden border-t bg-white">
          <div className="container-p py-4 grid gap-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`py-2 border-b ${isActive(l.href) ? "text-royalRed font-semibold" : ""}`}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/book-tour" className="btn btn-primary text-center" onClick={() => setOpen(false)}>
              Enroll
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
