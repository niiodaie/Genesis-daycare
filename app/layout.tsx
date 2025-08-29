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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-body">
        <Nav />
        <main className="container-p">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
