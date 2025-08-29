"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Phone } from "lucide-react";

const links = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/activities", label: "Daily Activities" },
  { href: "/book-tour", label: "Book a Tour" },
  { href: "/payments", label: "Payments" },
  { href: "/portal", label: "Parent Portal" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const phone = process.env.NEXT_PUBLIC_PHONE || "";

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
      <div className="container-p flex items-center justify-between py-4">
        {/* Logo — crisp, no stretching */}
        <Link href="/" aria-label="Genesis Royalty Daycare Home" className="flex items-center gap-2">
          <span className="relative h-10 w-10 shrink-0">
            <Image
              src="/logo.png"             // use the trimmed PNG in /public
              alt="Genesis Royalty Daycare"
              fill
              sizes="40px"
              priority
              className="object-contain"
            />
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-semibold hover:text-royalRed">
              {l.label}
            </Link>
          ))}
          <Link href="/book-tour" className="btn btn-primary text-sm">Enroll Now</Link>
          {phone && (
            <a href={`tel:${phone}`} className="inline-flex items-center gap-2 font-semibold">
              <Phone className="w-4 h-4" /> Call
            </a>
          )}
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <div className="w-6 h-0.5 bg-black mb-1" />
          <div className="w-6 h-0.5 bg-black mb-1" />
          <div className="w-6 h-0.5 bg-black" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="container-p py-4 grid gap-3">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="py-2 border-b" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <Link href="/book-tour" className="btn btn-primary text-center">Enroll Now</Link>
          </div>
        </div>
      )}
    </header>
  );
}
