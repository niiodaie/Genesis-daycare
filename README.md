# Genesis Royalty Daycare — Website

Modern, responsive Next.js site for **Genesis Royalty Daycare Center LLC** with booking embeds, payment links, jobs, contact forms, sitemap, and Google Map.

## Quick Start

```bash
# 1) Install deps
npm i

# 2) Copy env and fill values
cp .env.local.example .env.local

# 3) Run locally
npm run dev
```

Deploy on **Vercel**. SSL is automatic.

## Features Checklist

- Stock-image hero carousel
- Booking & online counseling (via Calendly/Cal.com embeds)
- Payments: Stripe Payment Link (cards, ApplePay, GooglePay), PayPal, Venmo, Cash App, Zelle instructions
- Google Map embed
- Click-to-call / click-to-email
- Multi-device responsive design
- Sitemap + robots
- Contact form + Job application (via SMTP, configure in `.env.local`)
- 3 banners (carousel slides)
- Jobs page, Programs, Daily Activities, About, Contact
- Accessible, SEO-friendly

## Configure

Set these in `.env.local`:

- `NEXT_PUBLIC_PHONE`
- `NEXT_PUBLIC_EMAIL_INFO` and `NEXT_PUBLIC_EMAIL_SUPPORT`
- `NEXT_PUBLIC_CALENDLY_TOUR_URL`, `NEXT_PUBLIC_CALENDLY_COUNSEL_URL`
- `NEXT_PUBLIC_STRIPE_PAYMENT_LINK` (from Stripe Dashboard → Payment Links)
- `NEXT_PUBLIC_PAYPAL_ME` or `NEXT_PUBLIC_PAYPAL_CLIENT_ID`
- `NEXT_PUBLIC_VENMO`, `NEXT_PUBLIC_CASHAPP`, `NEXT_PUBLIC_ZELLE_TEXT`

### Email (SMTP)

To enable form delivery, add:
```
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
TO_EMAIL=owner@genesisroyaltydaycare.com
```
If omitted, the API returns `ok: true` and logs to console (no send).

## Business Email Setup (Info/Support)

Choose a provider (Google Workspace, Zoho, Fastmail). Create mailboxes:
- `info@genesisroyaltydaycare.com`
- `support@genesisroyaltydaycare.com`

Update DNS:
- MX records → provider
- SPF (TXT): `v=spf1 include:yourprovider -all`
- DKIM: add CNAME per provider
- DMARC (TXT): `v=DMARC1; p=quarantine; rua=mailto:postmaster@genesisroyaltydaycare.com`

## Post‑Launch Checklist

- [ ] Replace stock images with real photos (update `HeroCarousel.tsx`)
- [ ] Connect booking links
- [ ] Create Stripe Payment Link + PayPal.me + Venmo/Cash App/Zelle details
- [ ] Add Google Business Profile, Facebook page; link in footer
- [ ] Configure SMTP + test forms
- [ ] Verify sitemap at Google Search Console
- [ ] Accessibility pass (Lighthouse ≥ 90)

## Multilingual

This starter ships in English. To expand:
- Create localized page copies (e.g., `/es`, `/fr`) or integrate `next-intl`.
- For quick wins, add language toggle linking to translated routes.

## Security

- Deployed on Vercel with SSL
- Forms post to server routes; no secrets exposed client-side
- Keep dependencies updated

---

© Genesis Royalty Daycare Center LLC


### Hero Video
Set `NEXT_PUBLIC_HERO_VIDEO_URL` to an MP4/WebM URL. A placeholder is shown if not set.
