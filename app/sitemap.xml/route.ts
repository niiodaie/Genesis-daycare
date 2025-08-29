import { NextResponse } from "next/server";
export function GET() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  const urls = ["", "/about", "/programs", "/activities", "/book-tour", "/counseling", "/payments", "/jobs", "/contact"];
  const items = urls.map(u => `<url><loc>${base + u}</loc></url>`).join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${items}</urlset>`;
  return new NextResponse(xml, { headers: { "Content-Type": "application/xml" } });
}
