import { Metadata } from "next";
import PaymentCard from "@/components/PaymentCard";
import CopyButton from "@/components/CopyButton";
import {
  CreditCard,
  QrCode,
  Wallet,
  DollarSign,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Payments | Genesis Royalty Daycare Center",
  description:
    "Pay tuition conveniently via card, PayPal, Venmo, Cash App, Zelle, Apple Pay, or Google Pay.",
};

const CFG = {
  CARD_LINK: process.env.NEXT_PUBLIC_PAY_LINK_CARD || "", // Stripe/Manus/Checkout link
  PAYPAL_LINK: process.env.NEXT_PUBLIC_PAYPAL_LINK || "https://paypal.me/YourBusiness",
  VENMO_HANDLE: process.env.NEXT_PUBLIC_VENMO || "@GenesisRoyalty",
  CASHAPP_TAG: process.env.NEXT_PUBLIC_CASHAPP || "$GenesisRoyalty",
  ZELLE_EMAIL: process.env.NEXT_PUBLIC_ZELLE || "billing@genesisroyaltydaycare.com",
  APPLE_GOOGLE_NOTE:
    "Apple Pay and Google Pay appear automatically on compatible devices during secure checkout.",
};

export default function PaymentsPage() {
  return (
    <div className="py-10">
      <header className="container-p mb-8">
        <span className="badge">Tuition & Fees</span>
        <h1 className="mt-2 text-3xl md:text-4xl font-bold">Simple, safe ways to pay</h1>
        <p className="mt-2 text-slate-600 max-w-2xl">
          Choose the method that’s easiest for you. Card payments are processed securely. Need help?{" "}
          <Link href="/contact" className="text-royalRed font-semibold">Contact us</Link>.
        </p>
      </header>

      <div className="container-p grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {/* Card / Apple / Google – Online */}
        <PaymentCard
          id="card"
          title="Credit / Debit Card"
          subtitle="Visa, MasterCard, American Express, Discover"
          icon={<CreditCard className="h-5 w-5 text-royalRed" />}
        >
          <div className="flex flex-wrap items-center gap-3">
            {CFG.CARD_LINK ? (
              <a href={CFG.CARD_LINK} target="_blank" rel="noreferrer" className="btn btn-primary">
                Pay with card <ArrowUpRight className="h-4 w-4" />
              </a>
            ) : (
              <div className="text-sm text-slate-500">
                Add <code>NEXT_PUBLIC_PAY_LINK_CARD</code> to enable this button.
              </div>
            )}

            {/* Card brand marks */}
            <div className="flex items-center gap-1 opacity-80">
              <Image src="/cards/visa.svg" alt="Visa" width={36} height={24} />
              <Image src="/cards/mastercard.svg" alt="Mastercard" width={36} height={24} />
              <Image src="/cards/amex.svg" alt="American Express" width={36} height={24} />
              <Image src="/cards/discover.svg" alt="Discover" width={36} height={24} />
            </div>
          </div>
          <p className="mt-3 text-xs text-slate-500 flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            Encrypted end-to-end. Apple Pay & Google Pay appear during checkout on supported devices.
          </p>
        </PaymentCard>

        {/* PayPal */}
        <PaymentCard
          id="paypal"
          title="PayPal"
          subtitle="Fast and familiar"
          icon={<Wallet className="h-5 w-5 text-royalYellow" />}
        >
          <a href={CFG.PAYPAL_LINK} target="_blank" rel="noreferrer" className="btn btn-outline">
            Pay with PayPal <ArrowUpRight className="h-4 w-4" />
          </a>
        </PaymentCard>

        {/* Venmo */}
        <PaymentCard
          id="venmo"
          title="Venmo"
          subtitle="Send to our official handle"
          icon={<DollarSign className="h-5 w-5 text-royalPurple" />}
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="font-semibold">{CFG.VENMO_HANDLE}</div>
              <CopyButton value={CFG.VENMO_HANDLE} className="mt-2" />
            </div>

            {/* Use the SVG placeholder we created */}
            <div className="rounded-xl border p-2">
              <Image
                src="/qr/venmo.svg"
                alt="Venmo QR"
                width={96}
                height={96}
                className="object-contain"
              />
            </div>
          </div>
        </PaymentCard>

        {/* Cash App */}
        <PaymentCard
          id="cashapp"
          title="Cash App"
          subtitle="Send to our $cashtag"
          icon={<DollarSign className="h-5 w-5 text-royalGreen" />}
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="font-semibold">{CFG.CASHAPP_TAG}</div>
              <CopyButton value={CFG.CASHAPP_TAG} className="mt-2" />
            </div>
            <div className="rounded-xl border p-2">
              <Image
                src="/qr/cashapp.svg"
                alt="Cash App QR"
                width={96}
                height={96}
                className="object-contain"
              />
            </div>
          </div>
        </PaymentCard>

        {/* Zelle */}
        <PaymentCard
          id="zelle"
          title="Zelle"
          subtitle="Direct bank transfer"
          icon={<QrCode className="h-5 w-5 text-royalTeal" />}
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="font-semibold">{CFG.ZELLE_EMAIL}</div>
              <CopyButton value={CFG.ZELLE_EMAIL} label="Copy email" className="mt-2" />
            </div>
            <div className="rounded-xl border p-2">
              <Image
                src="/qr/zelle.svg"
                alt="Zelle QR"
                width={96}
                height={96}
                className="object-contain"
              />
            </div>
          </div>
          <p className="mt-3 text-xs text-slate-500">Please include your child’s name in the memo.</p>
        </PaymentCard>

        {/* Apple/Google Pay */}
        <PaymentCard
          id="applepay"
          title="Apple Pay / Google Pay"
          subtitle="Quick checkout on supported devices"
          icon={<ShieldCheck className="h-5 w-5 text-royalRed" />}
        >
          <p className="text-sm text-slate-600">{CFG.APPLE_GOOGLE_NOTE}</p>
          {CFG.CARD_LINK && (
            <a href={CFG.CARD_LINK} target="_blank" rel="noreferrer" className="btn btn-outline mt-3">
              Open checkout <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </PaymentCard>
      </div>

      {/* Notes */}
      <div className="container-p mt-8">
        <div className="rounded-2xl border p-4 text-xs text-slate-600 bg-white">
          <p>
            <strong>Receipts:</strong> Your receipt will be emailed automatically. Need an itemized
            invoice? Request one via{" "}
            <Link href="/contact" className="text-royalRed font-semibold">Contact</Link>.
          </p>
          <p className="mt-2">
            <strong>Reference:</strong> Include your child’s name on all payments.
          </p>
        </div>
      </div>
    </div>
  );
}
