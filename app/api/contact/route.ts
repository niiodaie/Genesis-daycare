// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

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
    // honeypot fields
    company?: string;
    hp?: string;
  };

  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, phone, message, company, hp } = payload;

  // Honeypot: real users won't fill these – if filled, pretend success.
  if (company || hp) return NextResponse.json({ ok: true });

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Please provide name, email, and message." },
      { status: 400 }
    );
  }

  // Dev mode: no email provider set up yet
  if (!RESEND_API_KEY) {
    console.log("CONTACT (dev log):", { name, email, phone, message });
    return NextResponse.json({ ok: true, dev: true });
  }

  const resend = new Resend(RESEND_API_KEY);
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
    await resend.emails.send({
      from: CONTACT_FROM,
      to: CONTACT_TO,
      subject,
      text,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json(
      { ok: false, error: "Email failed to send. Please try again later." },
      { status: 500 }
    );
  }
}
