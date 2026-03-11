# TopCorner.football - Architecture

## System Overview

```text
User -> Vercel (Next.js) -> Stripe Checkout -> Success Page
                                 |
                                 v
                          Stripe Webhook -> Email (Resend)
```

## Tech Stack

| Layer | Technology | Reason |
|-------|------------|--------|
| Frontend | Next.js 16 (App Router) | SSR, SEO, and modern App Router patterns |
| Styling | Tailwind CSS | Fast iteration and responsive layouts |
| Payments | Stripe Checkout | PCI-safe hosted checkout flow |
| Email | Resend | Transactional email delivery |
| Hosting | Vercel | Native Next.js deployment target |
| Domain | topcorner.football | DNS routed to Vercel |

## Data Flow

### Purchase Flow
```text
1. User clicks a buy CTA
2. POST /api/checkout creates a Stripe Checkout Session
3. Browser redirects to Stripe-hosted checkout
4. User pays
5. Stripe redirects to /success?session_id=...
6. Stripe sends a webhook to /api/webhooks/stripe
7. Webhook handler records the order and sends confirmation email
8. Owner reviews the order in Stripe
```

### API Routes
```text
/api/checkout          POST -> Create Stripe Checkout session
/api/webhooks/stripe   POST -> Handle Stripe events
```

## File Structure

```text
topcorner-football/
|- src/
|  |- app/
|  |  |- layout.tsx
|  |  |- api/
|  |  |  |- checkout/route.ts
|  |  |  |- webhooks/stripe/route.ts
|  |  |- success/page.tsx
|  |  |- (marketing)/
|  |- components/
|  |- content/
|  |- lib/
|- public/
|- docs/
|- vercel.json
```

## Environment Variables

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_SITE_URL=https://topcorner.football
RESEND_API_KEY=re_...
OWNER_EMAIL=kepners@gmail.com
```

## Deployment

1. Work happens on `main`.
2. Push to GitHub `main`.
3. GitHub `origin/main` auto-deploys to Vercel.
4. Verify the pushed commit exists on `origin/main`.
5. Confirm Vercel picked up the same commit for deployment.

## Branch Rule

`main` is the only branch of record for this repository.
There is no parallel `master` deployment workflow anymore.

---

*Updated: March 2026*
