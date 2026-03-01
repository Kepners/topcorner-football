import Stripe from "stripe";

// Lazy getter — avoids throwing at build time when env vars aren't present
let _stripe: Stripe | null = null;
export function getStripe(): Stripe {
  if (!_stripe) {
    _stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: "2026-02-25.clover",
    });
  }
  return _stripe;
}

// Keep named export for backwards compat with existing imports
export const stripe = new Proxy({} as Stripe, {
  get(_target, prop) {
    return getStripe()[prop as keyof Stripe];
  },
});

export const PRODUCTS = {
  single: {
    name: "CalcioKx Single Corner Target",
    priceId: process.env.STRIPE_PRICE_ID_SINGLE!,
  },
  double: {
    name: "CalcioKx Double Corner Target",
    priceId: process.env.STRIPE_PRICE_ID_DOUBLE!,
  },
};
