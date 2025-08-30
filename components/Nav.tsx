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
      <div className="container-p flex items-center justify-between py-5">
        {/* BRAND — icon blown up in box + wordmark, all inside one Link */}
        <Link
          href="/"
          aria-label="Genesis Royalty Daycare — Home"
          className="flex items-center gap-4 md:gap-5 min-w-0"
        >
          <span
            className="
              relative overflow-hidden shrink-0
              rounded-2xl bg-white ring-2 ring-royalYellow/60 shadow-soft
              h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24
            "
          >
            <Image
              src="/logo-mark.png"
              alt="Genesis Royalty logo"
              fill
              priority
              sizes="(min-width:768px) 96px, (min-width:640px) 80px, 64px"
              className="
                object-contain object-center
                scale-[1.18]                         /* tweak 1.10–1.25 to fit box */
                [image-rendering:-webkit-optimize-contrast]
              "
            />
          </span>

          {/* Wordmark */}
          <span className="hidden sm:block leading-tight select-none">
            <span className="block text-2xl md:text-3xl font-extrabold tracking-tight text-royalRed">
              GENESIS
            </span>
            <span className="block -mt-1 text-xl md:text-2xl font-extrabold tracking-tight text-royalYellow">
              ROYALTY
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-semibold transition hover:text-royalRed ${
                isActive(l.href) ? "text-royalRed" : ""
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/book-tour" className="btn btn-primary text-sm">
            Enroll
          </Link>
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
                className={`py-2 border-b ${
                  isActive(l.href) ? "text-royalRed font-semibold" : ""
                }`}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/book-tour"
              className="btn btn-primary text-center"
              onClick={() => setOpen(false)}
            >
              Enroll
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
