# Genesis Royalty Daycare — Website + Parent Portal

Modern, responsive Next.js site for **Genesis Royalty Daycare Center LLC** with booking embeds, payment links, jobs, contact forms, sitemap, Google Map, and secure Parent Portal.

## Quick Start

```bash
# 1) Install deps
npm i

# 2) Copy env and fill values
cp .env.local.example .env.local

# 3) Run locally
npm run dev

# 4) Build for production
npm run build
```

Deploy on **Vercel**. SSL is automatic.

## Environment Variables

Set these in `.env.local`:

### Basic Site Configuration
- `NEXT_PUBLIC_PHONE` - Phone number for click-to-call
- `NEXT_PUBLIC_EMAIL_INFO` - Main contact email
- `NEXT_PUBLIC_EMAIL_SUPPORT` - Support email
- `NEXT_PUBLIC_SITE_URL` - Full site URL for SEO

### Booking & Scheduling
- `NEXT_PUBLIC_CALENDLY_TOUR_URL` - Calendly link for tours
- `NEXT_PUBLIC_CALENDLY_COUNSEL_URL` - Calendly link for counseling

### Payment Integration
- `NEXT_PUBLIC_STRIPE_PAYMENT_LINK` - Stripe Payment Link URL
- `NEXT_PUBLIC_PAYPAL_ME` - PayPal.me link
- `NEXT_PUBLIC_VENMO` - Venmo username
- `NEXT_PUBLIC_CASHAPP` - Cash App username
- `NEXT_PUBLIC_ZELLE_TEXT` - Zelle instructions

### Hero Video
- `NEXT_PUBLIC_HERO_VIDEO_URL` - MP4/WebM video URL (optional)

### Email (SMTP) for Forms
```
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
TO_EMAIL=owner@genesisroyaltydaycare.com
```

### Parent Portal (Supabase)
- `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anonymous key

## Parent Portal Setup

The Parent Portal provides secure access for families to view daily reports and child information.

### 1. Supabase Configuration
1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Copy your project URL and anon key to `.env.local`
3. Run the SQL schema from `supabase_schema.sql` in Supabase SQL editor
4. Enable Row Level Security (RLS) on all tables

### 2. User Management
- **Staff/Admin**: Create accounts in Supabase Auth, add profile with `role='staff'` or `role='admin'`
- **Parents**: Create accounts in Supabase Auth, add profile with `role='parent'`
- **Children**: Add child records and link to parents via enrollments table

### 3. Portal Features
- **Dashboard**: Groups reports by child, shows last 5 per child
- **Child Pages**: Full report history for each child
- **Report Details**: Complete daily report with meals, nap, activities, notes
- **Staff Composer**: Create new daily reports (staff/admin only)
- **Breadcrumb Navigation**: Easy navigation between portal pages
- **User Menu**: Profile access and sign out

### 4. Security
- Row Level Security ensures parents only see their children's data
- Only staff/admin can create daily reports
- Secure authentication with Supabase Auth
- Security headers via middleware

## Features Checklist

### Marketing Site
- [x] Hero video placeholder with fallback
- [x] Logo integration in navigation
- [x] Responsive design (mobile/tablet/desktop)
- [x] Booking embeds (Calendly/Cal.com)
- [x] Payment integration (Stripe, PayPal, Venmo, Cash App, Zelle)
- [x] Google Map embed
- [x] Contact forms with SMTP delivery
- [x] Job application form
- [x] SEO optimization (sitemap, robots, JSON-LD)
- [x] Accessibility features

### Parent Portal
- [x] Secure login/logout
- [x] Parent dashboard with grouped reports
- [x] Child detail pages
- [x] Report detail pages
- [x] Staff report composer
- [x] Breadcrumb navigation
- [x] User menu with profile access
- [x] Row Level Security (RLS)

### Security & Performance
- [x] Security headers middleware
- [x] JSON-LD structured data
- [x] SSL/HTTPS (via Vercel)
- [x] TypeScript for type safety
- [x] Optimized builds

## Launch Checklist

### Pre-Launch
- [ ] Replace stock images with real daycare photos
- [ ] Set up business email accounts (info@, support@)
- [ ] Configure SMTP for form delivery
- [ ] Test all contact forms
- [ ] Set up Calendly/booking integration
- [ ] Create Stripe Payment Link
- [ ] Set up PayPal.me, Venmo, Cash App accounts
- [ ] Configure Supabase for Parent Portal
- [ ] Add initial staff and parent accounts
- [ ] Test portal functionality end-to-end

### Post-Launch
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Business Profile
- [ ] Create social media accounts (Facebook, Instagram)
- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Test accessibility compliance
- [ ] Monitor form submissions
- [ ] Train staff on portal usage
- [ ] Onboard first parent families

### Ongoing Maintenance
- [ ] Regular security updates
- [ ] Monitor portal usage and feedback
- [ ] Update content and photos seasonally
- [ ] Backup Supabase data regularly
- [ ] Review and update payment methods

## Business Email Setup

Choose a provider (Google Workspace, Zoho, Fastmail):

1. Create mailboxes:
   - `info@genesisroyaltydaycare.com`
   - `support@genesisroyaltydaycare.com`

2. Update DNS records:
   - MX records → your email provider
   - SPF (TXT): `v=spf1 include:yourprovider -all`
   - DKIM: add CNAME per provider instructions
   - DMARC (TXT): `v=DMARC1; p=quarantine; rua=mailto:postmaster@genesisroyaltydaycare.com`

## Multilingual Support

This starter ships in English. To expand:
- Create localized page copies (e.g., `/es`, `/fr`) 
- Integrate `next-intl` for dynamic translations
- Add language toggle in navigation
- Update sitemap to include localized routes

## Security Features

- **HTTPS**: Automatic SSL via Vercel
- **Security Headers**: X-Content-Type-Options, Referrer-Policy, Permissions-Policy
- **Form Security**: Server-side processing, no client-side secrets
- **Database Security**: Row Level Security (RLS) in Supabase
- **Authentication**: Secure email/password with Supabase Auth

---

© Genesis Royalty Daycare Center LLC | Powered by Visnec Global
