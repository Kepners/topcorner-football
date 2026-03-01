# TopCorner.football — Architecture

## System Overview

```
User → Vercel (Next.js) → Stripe Checkout → Success Page
                                    ↓
                              Stripe Webhook → Email (Resend)
```

## Tech Stack

| Layer | Technology | Reason |
|-------|-----------|--------|
| Frontend | Next.js 14 (App Router) | SSR, fast, SEO-friendly |
| Styling | Tailwind CSS | Rapid development, responsive |
| Payments | Stripe Checkout | Trusted, handles PCI compliance |
| Email | Resend | Simple transactional email |
| Hosting | Vercel | Zero-config Next.js deployment |
| Domain | topcorner.football | Porkbun DNS → Vercel |

## Data Flow

### Purchase Flow
```
1. User clicks "Buy Now"
2. POST /api/checkout → Creates Stripe Checkout Session
3. Redirect to Stripe-hosted checkout
4. User pays
5. Stripe redirects to /success?session_id=xxx
6. Stripe fires webhook to /api/webhooks/stripe
7. Webhook handler:
   - Logs order (console/file for MVP)
   - Sends confirmation email via Resend
8. Owner checks Stripe dashboard for orders
```

### API Routes
```
/api/checkout          POST  → Create Stripe Checkout session
/api/webhooks/stripe   POST  → Handle Stripe events
```

## File Structure (Next.js)

```
topcorner-football/
├── app/
│   ├── layout.tsx          # Root layout + fonts
│   ├── page.tsx            # Homepage
│   ├── success/
│   │   └── page.tsx        # Order success page
│   └── api/
│       ├── checkout/
│       │   └── route.ts    # Create checkout session
│       └── webhooks/
│           └── stripe/
│               └── route.ts # Stripe webhook handler
├── components/
│   ├── Hero.tsx
│   ├── ProductSection.tsx
│   ├── Navbar.tsx
│   └── Footer.tsx
├── lib/
│   ├── stripe.ts           # Stripe client
│   └── email.ts            # Resend client
├── public/
│   └── images/             # Product photos
├── .env.local              # Local env vars
└── vercel.json             # Vercel config
```

## Environment Variables

```env
# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Stripe Product
STRIPE_PRICE_ID=price_...         # Created in Stripe dashboard

# App
NEXT_PUBLIC_SITE_URL=https://topcorner.football

# Email (Resend)
RESEND_API_KEY=re_...
OWNER_EMAIL=kepners@gmail.com
```

## Deployment

1. Push to GitHub → auto-deploys to Vercel
2. Set env vars in Vercel dashboard
3. Add topcorner.football in Vercel domains
4. Update DNS at Porkbun to point to Vercel

---

*Created: March 2026*
