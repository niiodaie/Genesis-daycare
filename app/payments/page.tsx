"use client";
import { useEffect } from "react";

export default function PaymentsPage() {
  const stripeLink = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK || "#";
  const paypalMe = process.env.NEXT_PUBLIC_PAYPAL_ME || "#";
  const venmo = process.env.NEXT_PUBLIC_VENMO || "#";
  const cashapp = process.env.NEXT_PUBLIC_CASHAPP || "#";
  const zelle = process.env.NEXT_PUBLIC_ZELLE_TEXT || "Ask the office for Zelle details";

  useEffect(()=>{
    // Dynamically load PayPal script only if client ID present
    const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
    if (clientId) {
      const s = document.createElement("script");
      s.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=USD`;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <div className="py-10">
      <h1 className="text-4xl font-extrabold font-display">Payments</h1>
      <p className="mt-4 text-gray-700">Choose your preferred payment method. Monthly tuition, registration, and fees can be paid online.</p>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="font-bold">Credit / Debit / Apple Pay / Google Pay</h3>
          <p className="text-gray-600 mt-2">Secure checkout via Stripe Payment Link.</p>
          <a className="btn btn-primary mt-4" href={stripeLink} target="_blank" rel="noreferrer">Pay with Card</a>
        </div>
        <div className="card">
          <h3 className="font-bold">PayPal</h3>
          <p className="text-gray-600 mt-2">Use PayPal or bank-connected methods.</p>
          <a className="btn btn-primary mt-4" href={paypalMe} target="_blank" rel="noreferrer">Pay with PayPal</a>
          <div id="paypal-container" className="mt-4"></div>
        </div>
        <div className="card">
          <h3 className="font-bold">Venmo</h3>
          <a className="btn btn-outline mt-4" href={venmo} target="_blank" rel="noreferrer">Open Venmo</a>
        </div>
        <div className="card">
          <h3 className="font-bold">Cash App</h3>
          <a className="btn btn-outline mt-4" href={cashapp} target="_blank" rel="noreferrer">Open Cash App</a>
        </div>
        <div className="card md:col-span-2">
          <h3 className="font-bold">Zelle</h3>
          <p className="text-gray-700 mt-2">{zelle}</p>
        </div>
      </div>
    </div>
  );
}
