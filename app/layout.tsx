import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Poppins, Nunito } from "next/font/google";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://genesisroyaltydaycare.com";
const phone = process.env.NEXT_PUBLIC_PHONE || "+1-540-555-1212";
const email = process.env.NEXT_PUBLIC_EMAIL_INFO || "info@genesisroyaltydaycare.com";

const display = Poppins({ subsets: ["latin"], weight: ["600","700","800"], variable: "--font-display" });
const body = Nunito({ subsets: ["latin"], weight: ["400","500","600"], variable: "--font-body" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Genesis Royalty Daycare Center LLC | Purcellville, VA",
  description:
    "Safe, nurturing, faith-aligned childcare for ages 6 weeks – 5 years. Full-time, part-time, preschool, after-school, and summer care.",
  openGraph: {
    title: "Genesis Royalty Daycare Center LLC",
    description: "Royal standard of care. Purcellville, VA.",
    type: "website",
    url: siteUrl,
    siteName: "Genesis Royalty Daycare Center LLC",
    images: ["/logo-transparent.png"], // or another OG image
  },
  twitter: {
    card: "summary_large_image",
    title: "Genesis Royalty Daycare Center LLC",
    description: "Royal standard of care. Purcellville, VA.",
    images: ["/logo-transparent.png"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ChildCare"],
    name: "Genesis Royalty Daycare Center LLC",
    description:
      "Safe, nurturing, faith-aligned childcare for ages 6 weeks – 5 years. Full-time, part-time, preschool, after-school, and summer care.",
    url: siteUrl,
    telephone: phone,
    email,
    image: `${siteUrl}/logo-transparent.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "37018 Glendale St.",
      addressLocality: "Purcellville",
      addressRegion: "VA",
      postalCode: "20132",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 39.1370,
      longitude: -77.7164,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"],
        opens: "06:30",
        closes: "18:00", // adjust if you operate to 6:30 PM
      },
    ],
    priceRange: "$$",
    paymentAccepted: "Cash, Credit Card, PayPal, Apple Pay, Google Pay, Venmo, Zelle, Cash App",
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Infant Care", value: "6 weeks - 18 months" },
      { "@type": "LocationFeatureSpecification", name: "Toddler Program", value: "18 months - 3 years" },
      { "@type": "LocationFeatureSpecification", name: "Preschool Program", value: "3 - 5 years" },
      { "@type": "LocationFeatureSpecification", name: "After-School Care", value: "School-age children" },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body className="font-body">
        <Nav />
        {/* Full-bleed content; individual sections use .container-p */}
        <main className="gradient-splash">
          {children}
          </main>
        <Footer />
      </body>
    </html>
  );
}
