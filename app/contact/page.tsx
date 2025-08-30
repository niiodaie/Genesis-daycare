// app/contact/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { Facebook, Instagram, Youtube, Twitter, Music2 } from "lucide-react"; // Music2 used as a TikTok stand-in

export const metadata: Metadata = {
  title: "Contact | Genesis Royalty Daycare Center",
  description:
    "We’re here to help with enrollment, tuition, and questions. Call, email, or send us a message.",
};

export default function ContactPage() {
  return (
    <div className="pb-16">
      <section className="container-p pt-8 md:pt-10">
        <h1 className="text-3xl md:text-4xl font-extrabold heading">Contact</h1>
        <p className="mt-2 max-w-2xl text-slate-700">
          We’re here to help with enrollment, tuition, and questions. Call, email, or send us a message.
        </p>
      </section>

      <section className="container-p mt-6 grid gap-6 lg:grid-cols-2 items-start">
        {/* Left: quick contact details */}
        <div className="card">
          <h2 className="text-xl font-bold">Reach Us</h2>
          <div className="mt-3 space-y-3 text-slate-700">
            <p>
              <span className="font-semibold">Phone:</span>{" "}
              <a href="tel:+15405551212" className="text-royalRed">
                +1-540-555-1212
              </a>
            </p>
            <p>
              <span className="font-semibold">Info:</span>{" "}
              <a href="mailto:info@genesisroyaltydaycare.com" className="text-royalRed">
                info@genesisroyaltydaycare.com
              </a>
            </p>
            <p>
              <span className="font-semibold">Support:</span>{" "}
              <a href="mailto:support@genesisroyaltydaycare.com" className="text-royalRed">
                support@genesisroyaltydaycare.com
              </a>
            </p>
            <p>
              <span className="font-semibold">Address:</span> 37018 Glendale St., Purcellville, VA 20132
            </p>
          </div>
        </div>

        {/* Right: working form */}
        <ContactForm />

        {/* Follow us — pinned under the form on large screens */}
        <div className="card lg:col-start-2">
          <h3 className="text-sm font-semibold text-slate-700">Follow us</h3>
          <p className="mt-1 text-xs text-slate-500">
            Get updates, photos, and announcements from Genesis Royalty.
          </p>

          <ul className="mt-3 flex items-center gap-2">
            {[
              { name: "Facebook",   href: "https://facebook.com/yourpage",            Icon: Facebook,  hover: "hover:text-[#1877F2]" },
              { name: "X (Twitter)", href: "https://x.com/yourhandle",                Icon: Twitter,   hover: "hover:text-black" },
              { name: "YouTube",    href: "https://youtube.com/@yourchannel",         Icon: Youtube,   hover: "hover:text-[#FF0000]" },
              { name: "TikTok",     href: "https://www.tiktok.com/@yourhandle",       Icon: Music2,    hover: "hover:text-black" },
              { name: "Instagram",  href: "https://instagram.com/yourhandle",         Icon: Instagram, hover: "hover:text-[#E1306C]" },
            ].map(({ name, href, Icon, hover }) => (
              <li key={name}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className={`group inline-flex h-9 w-9 items-center justify-center rounded-full border bg-white text-slate-700 transition focus-ring ${hover}`}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
