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
        <{/* Follow us (brand icons) */}
<section className="container-p mt-6">
  <div className="card">
    <h2 className="text-xl font-bold">Follow us</h2>
    <p className="mt-2 text-slate-600">
      Get updates, photos, and announcements from Genesis Royalty.
    </p>

    <div className="mt-4 flex flex-wrap gap-3">
      {[
        { href: "https://facebook.com/YourPage",  label: "Facebook", src: "/social/facebook.svg" },
        { href: "https://twitter.com/YourHandle", label: "X (Twitter)", src: "/social/x.svg" },
        { href: "https://youtube.com/@YourChannel", label: "YouTube", src: "/social/youtube.svg" },
        { href: "https://tiktok.com/@YourHandle", label: "TikTok", src: "/social/tiktok.svg" },
        { href: "https://instagram.com/YourHandle", label: "Instagram", src: "/social/instagram.svg" },
      ].map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className="group rounded-full border bg-white/80 p-2 transition hover:-translate-y-0.5 hover:shadow-soft"
        >
          {/* use <img> to avoid Next/Image domain config for local svgs */}
          <img
            src={s.src}
            alt={s.label}
            width={36}
            height={36}
            className="block"
          />
        </a>
      ))}
    </div>
  </div>
</section>
