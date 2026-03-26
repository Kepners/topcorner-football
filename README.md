# TopCorner.football

E-commerce site selling CalcioKx football corner targets. Built with Next.js, Stripe Checkout, and Resend for transactional email.

## Getting Started

```bash
npm install
cp .env.local.example .env.local   # fill in your keys
npm run dev                         # http://localhost:3000
```

## Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Payments**: Stripe Checkout
- **Email**: Resend
- **Hosting**: Coolify on Contabo VPS (94.72.97.251)
- **Domain**: topcorner.football

## Deployment

Pushes to `main` auto-deploy via Coolify on the Contabo VPS.

```bash
git push origin main   # triggers Coolify build + deploy
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Stripe Checkout Docs](https://docs.stripe.com/checkout)
- [Resend Docs](https://resend.com/docs)
