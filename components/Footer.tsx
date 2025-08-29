import Link from "next/link";

export default function Footer() {
  const phone = process.env.NEXT_PUBLIC_PHONE || "";
  const info = process.env.NEXT_PUBLIC_EMAIL_INFO || "info@genesisroyaltydaycare.com";

  return (
    <footer className="mt-20 border-t bg-white">
      <div className="container-p py-10 grid md:grid-cols-4 gap-8">
        <div>
          <div className="font-extrabold text-xl">
            <span className="text-royalRed">GENESIS</span>{" "}
            <span className="text-royalYellow">ROYALTY</span>
          </div>
          <p className="mt-3 text-sm text-gray-600">Royal standard of care in Purcellville, VA.</p>
          <p className="mt-2 text-sm text-gray-600">37018 Glendale St., Purcellville, VA 20132</p>
          <p className="mt-2">
            {phone && (<a className="text-royalRed font-semibold" href={`tel:${phone}`}>{phone}</a>)}<br/>
            <a className="text-royalPurple" href={`mailto:${info}`}>{info}</a>
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-3">Explore</h4>
          <ul className="grid gap-2 text-sm">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/programs">Programs</Link></li>
            <li><Link href="/activities">Daily Activities</Link></li>
            <li><Link href="/book-tour">Book a Tour</Link></li>
            <li><Link href="/counseling">Online Counseling</Link></li>
            <li><Link href="/payments">Payments</Link></li>
            <li><Link href="/portal">Parent Portal</Link></li>
            <li><Link href="/jobs">Jobs</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-3">Parents</h4>
          <ul className="grid gap-2 text-sm">
            <li><a href="#policies">Policies</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-3">Payments</h4>
          <ul className="grid gap-2 text-sm">
            <li><Link href="/payments">Credit/Debit</Link></li>
            <li><a href={process.env.NEXT_PUBLIC_PAYPAL_ME || "#"} target="_blank" rel="noreferrer">PayPal</a></li>
            <li><a href={process.env.NEXT_PUBLIC_VENMO || "#"} target="_blank" rel="noreferrer">Venmo</a></li>
            <li><a href={process.env.NEXT_PUBLIC_CASHAPP || "#"} target="_blank" rel="noreferrer">Cash App</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t">
        <div className="container-p py-6 text-sm text-gray-600 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Genesis Royalty Daycare Center LLC. All rights reserved.</p>
          <p>
            <a className="font-semibold hover:underline" href="https://visnec-it.com" target="_blank" rel="noreferrer">
              Powered by Visnec Global
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
