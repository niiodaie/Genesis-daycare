"use client";
import Link from "next/link";
import Logo from "@/components/Logo";
import { useState } from "react";
import { Phone } from "lucide-react";

const links = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/activities", label: "Daily Activities" },
  { href: "/book-tour", label: "Book a Tour" },
  { href: "/payments", label: "Payments" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
      <div className="container-p flex items-center justify-between py-4">
        <Logo />

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-semibold hover:text-royalRed">{l.label}</Link>
          ))}
          <Link href="/book-tour" className="btn btn-primary text-sm">Enroll Now</Link>
          <a href={`tel:${process.env.NEXT_PUBLIC_PHONE || ""}`} className="inline-flex items-center gap-2 font-semibold">
            <Phone className="w-4 h-4" /> Call
          </a>
        </nav>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="container-p py-4 grid gap-3">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="py-2 border-b" onClick={() => setOpen(false)}>{l.label}</Link>
            ))}
            <Link href="/book-tour" className="btn btn-primary text-center">Enroll Now</Link>
          </div>
        </div>
      )}
    </header>
  );
}
