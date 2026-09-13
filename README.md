# Lumina Commercial Cleaning — Marketing Site

Premium, lead-generating one-page marketing site for a commercial cleaning
business, built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and
Framer Motion.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** — sapphire/aqua/lime design system, glassmorphism utilities
- **Framer Motion** — scroll reveals, hero animations, global "water drop"
  click ripple effect
- **react-hook-form + zod** — client-side form validation
- **Resend** — transactional lead emails
- **Free `wa.me` click-to-chat link** — a floating WhatsApp button and a
  contact-panel link, no paid API required
- **Google reCAPTCHA v3** — spam protection (optional, degrades gracefully)
- **@vercel/analytics** + **@vercel/speed-insights**
- Schema.org `LocalBusiness` + `Service` JSON-LD, `sitemap.xml`, `robots.txt`

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Configuring lead notifications

Fill in `.env.local`:

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | API key from [resend.com](https://resend.com) |
| `LEAD_FROM_EMAIL` / `LEAD_TO_EMAIL` | Sending/receiving addresses for lead emails |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` / `RECAPTCHA_SECRET_KEY` | From the [reCAPTCHA admin console](https://www.google.com/recaptcha/admin) (v3) |

Any of these can be left blank during development — the API route logs a
warning and skips that channel instead of failing the request.

The form posts to `app/api/contact/route.ts`, which validates the payload,
verifies reCAPTCHA (if configured), and emails the lead via Resend.

WhatsApp is **not** wired through a paid API (Twilio/Meta cost money per
message). Instead, `lib/constants.ts` holds a `whatsapp` number used to build
free `https://wa.me/...` click-to-chat links — one in the floating button
(`components/WhatsAppButton.tsx`) and one in the contact section. Visitors
tap it and open a normal WhatsApp conversation with your business number, at
zero cost. Set your real number there (digits only, country code first, e.g.
`"15550102024"`).

## Customizing content

Nearly all copy lives in [`lib/constants.ts`](lib/constants.ts): company
name, contact details, services, process steps, testimonials, and quality
badges. Update that file first — most components read directly from it.

Structured data (Schema.org) is generated from the same file in
[`lib/structuredData.ts`](lib/structuredData.ts).

## Imagery

The hero and section visuals currently use CSS gradients, glassmorphism
panels, and abstract light accents rather than stock photography, so the
project ships with zero licensing dependencies. Swap in your own
professional photography (office interiors, cleaning crews, equipment) via
`next/image` for the highest-converting version of this site — see the
`glass-panel` showcase block in `components/Hero.tsx` for where to start.

## Design system

- Colors: `sapphire` (deep blue, backgrounds), `aqua` and `lime` (accents/CTAs)
  — defined in `tailwind.config.ts`.
- Typography: Inter (body) + Plus Jakarta Sans (headings), loaded via
  `next/font/google` in `app/layout.tsx`.
- Glassmorphism utilities: `.glass-panel`, `.glass-card` in `app/globals.css`.
- The "water drop" click ripple is a global effect mounted once in
  `app/layout.tsx` via `components/WaterDropEffect.tsx`; it respects
  `prefers-reduced-motion`.

## Production checklist

- [ ] Replace placeholder company name, address, phone, and service areas in `lib/constants.ts`
- [ ] Add real photography and an Open Graph image at `public/og-image.jpg`
- [ ] Set all environment variables in your hosting provider (e.g. Vercel)
- [ ] Verify your sending domain in Resend
- [ ] Run `npm run build` and check a Lighthouse report before launch
