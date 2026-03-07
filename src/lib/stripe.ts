import Stripe from "stripe";

type ProductConfig = {
  name: string;
  description: string;
  unitAmount: number;
};

export const SHIPPING = {
  amount: 0,
  currency: "gbp",
  displayName: "Free UK Shipping",
  minBusinessDays: 2,
  maxBusinessDays: 5,
} as const;

let _stripe: Stripe | null = null;

export function getStripe(): Stripe {
  if (!_stripe) {
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error("Missing STRIPE_SECRET_KEY");
    }

    _stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2026-02-25.clover",
    });
  }

  return _stripe;
}

export const stripe = new Proxy({} as Stripe, {
  get(_target, prop) {
    return getStripe()[prop as keyof Stripe];
  },
});

export const PRODUCTS: Record<"single" | "double", ProductConfig> = {
  single: {
    name: "CalcioKx Single Corner Target",
    description: "Single top-corner target for focused solo shooting work.",
    unitAmount: 2500,
  },
  double: {
    name: "CalcioKx Double Corner Target",
    description:
      "Double pack for running both corners in team and striker sessions.",
    unitAmount: 4000,
  },
};
