import ContactForm from "@/components/ContactForm";
import MapEmbed from "@/components/MapEmbed";

export default function ContactPage() {
  const phone = process.env.NEXT_PUBLIC_PHONE || "+1-540-555-1212";
  const info = process.env.NEXT_PUBLIC_EMAIL_INFO || "info@genesisroyaltydaycare.com";
  const support = process.env.NEXT_PUBLIC_EMAIL_SUPPORT || "support@genesisroyaltydaycare.com";

  return (
    <div className="py-10">
      <h1 className="text-4xl font-extrabold font-display">Contact</h1>
      <p className="mt-4 text-gray-700">
        We’re here to help with enrollment, tuition, and questions. Call, email, or send us a message.
      </p>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="font-bold">Reach Us</h3>
          <p className="mt-2"><strong>Phone:</strong> <a className="text-royalRed" href={`tel:${phone}`}>{phone}</a></p>
          <p className="mt-1"><strong>Info:</strong> <a className="text-royalPurple" href={`mailto:${info}`}>{info}</a></p>
          <p className="mt-1"><strong>Support:</strong> <a className="text-royalPurple" href={`mailto:${support}`}>{support}</a></p>
          <p className="mt-4 text-gray-700"><strong>Address:</strong> 37018 Glendale St., Purcellville, VA 20132</p>
        </div>
        <ContactForm />
      </div>

      <div className="mt-8">
        <MapEmbed />
      </div>
    </div>
  );
}
