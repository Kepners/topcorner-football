# TopCorner.football — Product Specification

**Status:** CONFIRMED — Ready to build
**Updated:** March 2026

---

## Overview
TopCorner.football is a direct-to-consumer e-commerce website selling CalcioKx football corner targets. Two products, UK shipping only, Stripe payments.

---

## Products (CONFIRMED)

### Single Corner Target
- **Name**: CalcioKx 1x Curved Corner Target & Bag
- **SKU**: 5065017325008
- **Price**: £25.00
- **Stock**: 90 units
- **Contents**: 1x corner target + velcro straps + storage bag

### Double Corner Target
- **Name**: CalcioKx 2x Curved Corner Target & Bag
- **SKU**: 5065017325015
- **Price**: £40.00
- **Stock**: 40 units
- **Contents**: 2x corner targets + velcro straps + storage bag

### Product Details
- Black PVC curved frame with orange accent joints
- Black mesh net pocket
- Clips to goal post corners via velcro straps (3 straps included)
- Compatible with standard goal posts (round/square)
- Made in China, Designed in the United Kingdom
- Comes in branded storage bag

---

## Pricing & Shipping (CONFIRMED)
| Item | Price |
|------|-------|
| Single (1x) | £25.00 |
| Double (2x) | £40.00 |
| Shipping | £5.00 flat rate |
| Region | UK only |

---

## User Journey (MVP)
1. Land on homepage → hero + product showcase
2. Click product → see details, images, price
3. "Buy Now" → Stripe Checkout
4. Pay (card/Apple Pay/Google Pay) → success page
5. Owner gets Stripe notification + email

---

## Pages

### Homepage (`/`)
- Hero: bold headline, product in-situ on goal post, CTA
- Product cards: Single vs Double — image, name, price, buy button
- How it works: 3 steps (attach → aim → score)
- Key features: 3 highlights
- Footer: brand, contact, shipping info

### Success Page (`/success`)
- Thank you message
- Order summary
- Shipping timeline
- CTA: share / social

---

## Tech Stack
- Next.js 14 (App Router)
- Tailwind CSS
- Stripe Checkout (hosted)
- Resend (order confirmation email)
- Vercel (hosting)
- topcorner.football (domain)

---

## Environment Variables
```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
STRIPE_PRICE_ID_SINGLE=      # £25 product
STRIPE_PRICE_ID_DOUBLE=      # £40 product
STRIPE_SHIPPING_RATE_ID=     # £5 flat rate UK
NEXT_PUBLIC_SITE_URL=https://topcorner.football
RESEND_API_KEY=
OWNER_EMAIL=kepners@gmail.com
```

---

## Photos Available (F:\RhinocerosLime.Ltd\Images\)
- `DSC_1619.JPG` — single target installed on goal post, outdoor
- `DSC_1626.JPG` — wide shot, installed on goal, blue sky
- `DSC_1629.JPG` — close-up installed on post
- `DSC_1646.JPG` — product flat lay, white background (hero candidate)
- `DSC_1656.JPG` — close-up of orange joint/attachment mechanism
- `DSC_1683.JPG` — velcro straps on white background
- Various fotor-edited PNGs with transparent/white backgrounds

---

*Last updated: March 2026 — All details confirmed, ready to build.*
