// components/ContactForm.tsx
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      // honeypot fields
      company: String(formData.get("company") || "").trim(),
      hp: String(formData.get("hp") || "").trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus("error");
      setError("Please fill out your name, email, and message.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data?.error || "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch (err: any) {
      setStatus("error");
      setError(err?.message || "Message failed to send.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl bg-white shadow-soft border p-4 md:p-6">
      {/* Honeypots (hidden from users) */}
      <div className="hidden">
        <label>
          Company
          <input name="company" autoComplete="off" />
        </label>
        <input name="hp" autoComplete="off" />
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        <input
          name="name"
          type="text"
          placeholder="Your name"
          required
          className="rounded-xl border px-3 py-3"
          aria-label="Your name"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="rounded-xl border px-3 py-3"
          aria-label="Email address"
        />
      </div>

      <input
        name="phone"
        type="tel"
        placeholder="Phone (optional)"
        className="mt-3 rounded-xl border px-3 py-3 w-full"
        aria-label="Phone"
      />

      <textarea
        name="message"
        placeholder="How can we help?"
        required
        rows={6}
        className="mt-3 rounded-xl border px-3 py-3 w-full"
        aria-label="Your message"
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn btn-primary w-full mt-4"
      >
        {status === "loading" ? "Sending…" : "Send Message"}
      </button>

      <div className="mt-3 text-sm" aria-live="polite">
        {status === "success" && (
          <p className="text-emerald-700">
            Thanks! Your message was sent. We’ll get back to you within one business day.
          </p>
        )}
        {status === "error" && (
          <p className="text-rose-700">Oops—{error || "please try again."}</p>
        )}
      </div>
    </form>
  );
}
