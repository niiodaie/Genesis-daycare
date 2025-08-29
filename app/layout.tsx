import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Genesis Royalty Daycare Center LLC | Purcellville, VA",
  description: "Safe, nurturing, faith-aligned childcare for ages 6 weeks – 5 years. Full-time, part-time, preschool, after-school, and summer care.",
  openGraph: {
    title: "Genesis Royalty Daycare Center LLC",
    description: "Royal standard of care. Purcellville, VA.",
    type: "website",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://genesisroyaltydaycare.com",
  },
  icons: { icon: "/favicon.ico" }
};

function StructuredData() {
  const phone = process.env.NEXT_PUBLIC_PHONE || "+1-540-555-1212";
  const email = process.env.NEXT_PUBLIC_EMAIL_INFO || "info@genesisroyaltydaycare.com";
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://genesisroyaltydaycare.com";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ChildCare"],
    "name": "Genesis Royalty Daycare Center LLC",
    "description": "Safe, nurturing, faith-aligned childcare for ages 6 weeks – 5 years. Full-time, part-time, preschool, after-school, and summer care.",
    "url": siteUrl,
    "telephone": phone,
    "email": email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "37018 Glendale St.",
      "addressLocality": "Purcellville",
      "addressRegion": "VA",
      "postalCode": "20132",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "39.1370",
      "longitude": "-77.7164"
    },
    "openingHours": "Mo-Fr 06:30-18:30",
    "priceRange": "$$",
    "servesCuisine": "Child-friendly meals",
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Infant Care",
        "value": "6 weeks - 1 year"
      },
      {
        "@type": "LocationFeatureSpecification", 
        "name": "Toddler Program",
        "value": "1 - 2 years"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Preschool Program", 
        "value": "3 - 5 years"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "After-School Care",
        "value": "School-age children"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className="font-body">
        <Nav />
        <main className="container-p">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
