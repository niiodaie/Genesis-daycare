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
      <div className="container-p flex items-center justify-between py-3">
        {/* Logo + wordmark (Option A) */}
        <Link href="/" aria-label="Genesis Royalty Daycare — Home" className="flex items-center gap-3">
          <span className="grid place-items-center rounded-xl bg-white ring-2 ring-royalYellow/60 p-1 shadow-soft shrink-0">
            <Image
              src="/logo-mark.png"              // square icon in /public
              alt="Genesis Royalty logo"
              width={56}
              height={56}
              priority
              className="h-10 w-10 sm:h-12 sm:w-12 object-contain saturate-125 contrast-110 brightness-110"
            />
          </span>
          <span className="hidden sm:block leading-tight select-none">
            <span className="block text-lg sm:text-xl font-extrabold tracking-tight text-royalRed">GENESIS</span>
            <span className="block -mt-1 text-base sm:text-lg font-extrabold tracking-tight text-royalYellow">ROYALTY</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
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
          className="md:hidden"
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
        <div id="mobile-nav" className="md:hidden border-t bg-white">
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
