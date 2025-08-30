import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { Facebook, Instagram, Youtube, Twitter, Music2 } from "lucide-react"; // Music2 as TikTok fallback


export default function Footer() {
  const year = new Date().getFullYear();
  const email = process.env.NEXT_PUBLIC_EMAIL_INFO || "info@genesisroyaltydaycare.com";
  const phone = process.env.NEXT_PUBLIC_PHONE || "";
  const address = "37018 Glendale St., Purcellville, VA 20132";

 const socials = [
  { name: "Facebook", href: "https://facebook.com/yourpage", Icon: Facebook, hover: "hover:text-[#1877F2]" },
  { name: "X (Twitter)", href: "https://x.com/yourhandle", Icon: Twitter, hover: "hover:text-black" },
  { name: "YouTube", href: "https://youtube.com/@yourchannel", Icon: Youtube, hover: "hover:text-[#FF0000]" },
  // If you have a TikTok SVG/icon later, swap Music2 with it.
  { name: "TikTok", href: "https://www.tiktok.com/@yourhandle", Icon: Music2, hover: "hover:text-[#000000]" },
  { name: "Instagram", href: "https://instagram.com/yourhandle", Icon: Instagram, hover: "hover:text-[#E1306C]" },
];
 

  return (
    <footer className="bg-white border-t">
      {/* Top grid (more compact) */}
      <div className="container-p py-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand + contact */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="relative h-10 w-10 rounded-lg bg-white ring-2 ring-royalYellow/60 shadow-soft overflow-hidden shrink-0">
                <Image
                  src="/logo-mark.png"
                  alt="Genesis Royalty logo"
                  fill
                  className="object-contain object-center scale-[1.08]"
                  sizes="40px"
                />
              </span>
              <div className="leading-none select-none">
                <div className="whitespace-nowrap font-extrabold tracking-tight text-[15px]">
                  <span className="text-royalRed">GENESIS</span>{" "}
                  <span className="text-royalYellow">ROYALTY</span>
                </div>
                <div className="mt-0.5 text-[10px] uppercase tracking-[0.3em] text-royalPurple/90">
                  Daycare Center
                </div>
              </div>
            </div>

            <p className="mt-3 text-slate-600 text-xs">
              Royal standard of care in Purcellville, VA.
            </p>

            <ul className="mt-3 space-y-1.5 text-slate-700 text-xs">
              <li className="flex gap-2">
                <MapPin className="h-3.5 w-3.5 mt-0.5 text-slate-400" />
                <span>{address}</span>
              </li>
              {email && (
                <li className="flex gap-2">
                  <Mail className="h-3.5 w-3.5 mt-0.5 text-slate-400" />
                  <a href={`mailto:${email}`} className="hover:text-royalRed">
                    {email}
                  </a>
                </li>
              )}
              {phone && (
                <li className="flex gap-2">
                  <Phone className="h-3.5 w-3.5 mt-0.5 text-slate-400" />
                  <a href={`tel:${phone}`} className="hover:text-royalRed">
                    {phone}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Explore */}
          <nav aria-label="Explore">
            <h3 className="text-slate-900 mb-2 text-xs font-bold">Explore</h3>
            <ul className="space-y-1.5 text-slate-600 text-xs leading-6">
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
            <h3 className="text-slate-900 mb-2 text-xs font-bold">Parents</h3>
            <ul className="space-y-1.5 text-slate-600 text-xs leading-6">
              <li><Link className="hover:text-royalRed" href="/portal">Parent Portal</Link></li>
              <li><Link className="hover:text-royalRed" href="/policies">Policies</Link></li>
              <li><Link className="hover:text-royalRed" href="/faq">FAQ</Link></li>
              <li><Link className="hover:text-royalRed" href="/counseling">Online Counseling</Link></li>
              <li><Link className="hover:text-royalRed" href="/jobs">Jobs</Link></li>
            </ul>
          </nav>

          {/* Payments */}
          <nav aria-label="Payments">
            <h3 className="text-slate-900 mb-2 text-xs font-bold">Payments</h3>
            <ul className="space-y-1.5 text-slate-600 text-xs leading-6">
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

      {/* Legal bar (compact) */}
      <div className="border-t">
        <div className="container-p py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-[11px] text-slate-500">
          <p>© {year} Genesis Royalty Daycare Center. All rights reserved.</p>
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
