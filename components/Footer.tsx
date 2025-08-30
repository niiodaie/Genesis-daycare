import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const email = process.env.NEXT_PUBLIC_EMAIL_INFO || "info@genesisroyaltydaycare.com";
  const phone = process.env.NEXT_PUBLIC_PHONE || "";
  const address = "37018 Glendale St., Purcellville, VA 20132";

  return (
    <footer className="bg-white border-t">
      {/* Top grid */}
      <div className="container-p py-12">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand + contact */}
          <div>
            <div className="flex items-center gap-3">
              <span className="relative h-12 w-12 rounded-xl bg-white ring-2 ring-royalYellow/60 shadow-soft overflow-hidden shrink-0">
                <Image
                  src="/logo-mark.png"
                  alt="Genesis Royalty logo"
                  fill
                  className="object-contain object-center scale-[1.1]"
                  sizes="48px"
                />
              </span>
              <div className="leading-none select-none">
                <div className="whitespace-nowrap font-extrabold tracking-tight">
                  <span className="text-royalRed">GENESIS</span>{" "}
                  <span className="text-royalYellow">ROYALTY</span>
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.35em] text-royalPurple/90">
                  Daycare Center
                </div>
              </div>
            </div>

            <p className="mt-4 text-slate-600">
              Royal standard of care in Purcellville, VA.
            </p>

            <ul className="mt-4 space-y-2 text-slate-700">
              <li className="flex gap-2">
                <MapPin className="h-4 w-4 mt-1 text-slate-400" />
                <span>{address}</span>
              </li>
              {email && (
                <li className="flex gap-2">
                  <Mail className="h-4 w-4 mt-1 text-slate-400" />
                  <a href={`mailto:${email}`} className="hover:text-royalRed">
                    {email}
                  </a>
                </li>
              )}
              {phone && (
                <li className="flex gap-2">
                  <Phone className="h-4 w-4 mt-1 text-slate-400" />
                  <a href={`tel:${phone}`} className="hover:text-royalRed">
                    {phone}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Explore */}
          <nav aria-label="Explore">
            <h3 className="text-sm font-bold text-slate-900 mb-3">Explore</h3>
            <ul className="space-y-2 text-slate-600">
              <li><Link className="hover:text-royalRed" href="/about">About</Link></li>
              <li><Link className="hover:text-royalRed" href="/programs">Programs</Link></li>
              <li><Link className="hover:text-royalRed" href="/activities">Daily Activities</Link></li>
              <li><Link className="hover:text-royalRed" href="/book-tour">Book a Tour</Link></li>
              <li><Link className="hover:text-royalRed" href="/payments">Payments</Link></li>
              <li><Link className="hover:text-royalRed" href="/contact">Contact</Link></li>
            </ul>
          </nav>

          {/* Parents */}
          <nav aria-label="Parents">
            <h3 className="text-sm font-bold text-slate-900 mb-3">Parents</h3>
            <ul className="space-y-2 text-slate-600">
              <li><Link className="hover:text-royalRed" href="/portal">Parent Portal</Link></li>
              <li><Link className="hover:text-royalRed" href="/policies">Policies</Link></li>
              <li><Link className="hover:text-royalRed" href="/faq">FAQ</Link></li>
              <li><Link className="hover:text-royalRed" href="/counseling">Online Counseling</Link></li>
              <li><Link className="hover:text-royalRed" href="/jobs">Jobs</Link></li>
            </ul>
          </nav>

          {/* Payments */}
          <nav aria-label="Payments">
            <h3 className="text-sm font-bold text-slate-900 mb-3">Payments</h3>
            <ul className="space-y-2 text-slate-600">
              <li><Link className="hover:text-royalRed" href="/payments#card">Credit/Debit</Link></li>
              <li><Link className="hover:text-royalRed" href="/payments#paypal">PayPal</Link></li>
              <li><Link className="hover:text-royalRed" href="/payments#venmo">Venmo</Link></li>
              <li><Link className="hover:text-royalRed" href="/payments#cashapp">Cash App</Link></li>
              <li><Link className="hover:text-royalRed" href="/payments#zelle">Zelle</Link></li>
              <li><Link className="hover:text-royalRed" href="/payments#applepay">Apple Pay</Link></li>
              <li><Link className="hover:text-royalRed" href="/payments#googlepay">Google Pay</Link></li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t">
        <div className="container-p py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <p>
            © {year} Genesis Royalty Daycare Center. All rights reserved.
          </p>
          <p>
            Powered by{" "}
            <a
              href="https://visnec-it.com"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-slate-700 hover:text-royalRed"
            >
              Visnec Global
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
