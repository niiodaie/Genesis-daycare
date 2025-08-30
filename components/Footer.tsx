// components/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  const year = new Date().getFullYear();
  const email =
    process.env.NEXT_PUBLIC_EMAIL_INFO || "info@genesisroyaltydaycare.com";
  const phone = process.env.NEXT_PUBLIC_PHONE || "";
  const address = "37018 Glendale St., Purcellville, VA 20132";

  return (
    <footer className="bg-white border-t">
      {/* Top grid */}
      <div className="container-p py-8">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Column 1: brand + address */}
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
                <span className="block -mt-1 font-extrabold text-royalYellow">ROYALTY</span>
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

            {/* Social icons row */}
            <SocialLinks className="mt-4" size={28} />
          </div>

          {/* Columns 2–4: keep your Explore / Parents / Payments sections here */}
          {/* ... */}
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t pt-6 text-sm text-slate-500 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <span>© {year} Genesis Royalty Daycare Center. All rights reserved.</span>
          <span>
            Powered by{" "}
            <a
              href="https://visnec.com"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              Visnec Global
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
