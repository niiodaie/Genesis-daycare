// app/contact/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import SocialLinks from "@/components/SocialLinks";

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
            <p><span className="font-semibold">Phone:</span> <a href="tel:+15405551212" className="text-royalRed">+1-540-555-1212</a></p>
            <p><span className="font-semibold">Info:</span> <a href="mailto:info@genesisroyaltydaycare.com" className="text-royalRed">info@genesisroyaltydaycare.com</a></p>
            <p><span className="font-semibold">Support:</span> <a href="mailto:support@genesisroyaltydaycare.com" className="text-royalRed">support@genesisroyaltydaycare.com</a></p>
            <p><span className="font-semibold">Address:</span> 37018 Glendale St., Purcellville, VA 20132</p>
          </div>
        </div>

        {/* Right: working form */}
        <ContactForm />
      </section>

      {/* Follow us, same card style */}
      <section className="container-p mt-6">
        <div className="card">
          <SocialLinks withHeading />
        </div>
      </section>
    </div>
  );
}
