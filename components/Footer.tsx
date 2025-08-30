// components/Footer.tsx
'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  const pathname = usePathname();
  const hideSocial = pathname?.startsWith("/contact"); // hide only on Contact

  const year = new Date().getFullYear();
  const email =
    process.env.NEXT_PUBLIC_EMAIL_INFO || "info@genesisroyaltydaycare.com";
  const phone = process.env.NEXT_PUBLIC_PHONE || "";
  const address = "37018 Glendale St., Purcellville, VA 20132";

  return (
    <footer className="bg-white border-t">
      <div className="container-p py-8">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Column 1: brand + contact */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <span className="relative h-10 w-10 shrink-0 rounded-xl ring-1 ring-royalYellow/50 bg-white shadow-soft overflow-hidden">
                <Image
                  src="/logo-mark.png"
                  alt="Genesis Royalty"
                  fill
                  className="object-contain p-1"
                />
              </span>
              <span className="leading-tight select-none">
                <span className="block font-extrabold text-royalRed">GENESIS</span>
                <span className="block -mt-1 font-extrabold text-royalYellow">
                  ROYALTY
                </span>
                <span className="block text-xs tracking-widest text-slate-500">
                  DAYCARE CENTER
                </span>
              </span>
            </Link>

            <div className="mt-3 space-y-1 text-sm text-slate-600">
              <p>{address}</p>
              {phone && (
                <p>
                  <span className="font-semibold">Phone: </span>
                  <a href={`tel:${phone}`} className="text-royalRed">
                    {phone}
                  </a>
                </p>
              )}
              <p>
                <span className="font-semibold">Email: </span>
                <a href={`mailto:${email}`} className="text-royalRed">
                  {email}
                </a>
              </p>
            </div>

            {/* Social icons row (hidden on /contact) */}
            {!hideSocial && <SocialLinks className="mt-4" size={28} />}
          </div>

          {/* Columns 2–4: your existing Explore / Parents / Payments sections */}
          {/* Column 2 (Explore) */}
          <div>
            <h4 className="font-semibold text-slate-900">Explore</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li><Link href="/about" className="hover:text-royalRed">About</Link></li>
              <li><Link href="/programs" className="hover:text-royalRed">Programs</Link></li>
              <li><Link href="/activities" className="hover:text-royalRed">Daily Activities</Link></li>
              <li><Link href="/book-tour" className="hover:text-royalRed">Book a Tour</Link></li>
              <li><Link href="/payments" className="hover:text-royalRed">Payments</Link></li>
              <li><Link href="/contact" className="hover:text-royalRed">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3 (Parents) */}
          <div>
            <h4 className="font-semibold text-slate-900">Parents</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li><Link href="/portal" className="hover:text-royalRed">MyGenesis</Link></li>
              <li><Link href="/policies" className="hover:text-royalRed">Policies</Link></li>
              <li><Link href="/faq" className="hover:text-royalRed">FAQ</Link></li>
              <li><Link href="/counseling" className="hover:text-royalRed">Online Counseling</Link></li>
              <li><Link href="/jobs" className="hover:text-royalRed">Jobs</Link></li>
            </ul>
          </div>

          {/* Column 4 (Payments) */}
          <div>
            <h4 className="font-semibold text-slate-900">Payments</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li><Link href="/payments#card" className="hover:text-royalRed">Credit/Debit</Link></li>
              <li><Link href="/payments#paypal" className="hover:text-royalRed">PayPal</Link></li>
              <li><Link href="/payments#venmo" className="hover:text-royalRed">Venmo</Link></li>
              <li><Link href="/payments#cashapp" className="hover:text-royalRed">Cash App</Link></li>
              <li><Link href="/payments#zelle" className="hover:text-royalRed">Zelle</Link></li>
              <li><Link href="/payments#applepay" className="hover:text-royalRed">Apple/Google Pay</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
<div className="mt-8 border-t pt-6 text-sm text-slate-500 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
  <span>© {year} Genesis Royalty Daycare Center. All rights reserved.</span>

  <span className="flex items-center gap-2">
    Powered by{" "}
    <a
      href="https://visnec-it.com"
      target="_blank"
      rel="noreferrer"
      className="hover:underline font-medium text-slate-700"
    >
      Visnec Global
    </a>
    <span aria-hidden>—</span>
    {/* Change "The" to "Your" if you prefer that voice */}
    <span className="whitespace-nowrap">
      The <span className="text-[0.85em]">Technology</span> Partner
    </span>
  </span>
</div>

