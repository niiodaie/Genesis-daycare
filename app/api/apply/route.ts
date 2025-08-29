import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, position, message } = await req.json();
    const to = process.env.TO_EMAIL || process.env.NEXT_PUBLIC_EMAIL_INFO || "info@genesisroyaltydaycare.com";
    if (!process.env.SMTP_HOST) {
      return NextResponse.json({ ok: true, note: "SMTP not configured; printing to console." });
    }
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
    });
    await transporter.sendMail({
      from: `"Job Application" <${process.env.SMTP_USER || "noreply@localhost"}>`,
      to,
      subject: "New Job Application",
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nPosition: ${position}\n\n${message}`,
    });
    return NextResponse.json({ ok: true });
  } catch (e:any) {
    return NextResponse.json({ ok: false, error: e?.message || "Unknown error" }, { status: 500 });
  }
}
