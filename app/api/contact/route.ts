// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_TO = process.env.CONTACT_TO || "info@genesisroyaltydaycare.com";
const CONTACT_FROM =
  process.env.CONTACT_FROM || "Genesis Royalty <no-reply@genesisroyaltydaycare.com>";

export async function POST(req: NextRequest) {
  let payload: {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
    // honeypots
    company?: string;
    hp?: string;
  };

  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, phone, message, company, hp } = payload;

  // Honeypot: if filled, silently accept
  if (company || hp) return NextResponse.json({ ok: true });

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Please provide name, email, and message." },
      { status: 400 }
    );
  }

  // If no key set yet, just log and succeed (so demo still works)
  if (!RESEND_API_KEY) {
    console.log("CONTACT (dev log):", { name, email, phone, message });
    return NextResponse.json({ ok: true, dev: true });
  }

  const subject = `New website message from ${name}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "-"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: CONTACT_FROM,
        to: CONTACT_TO,
        subject,
        text,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend REST error:", err);
      return NextResponse.json(
        { ok: false, error: "Email failed to send. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Contact API error:", e);
    return NextResponse.json(
      { ok: false, error: "Email failed to send. Please try again later." },
      { status: 500 }
    );
  }
}
