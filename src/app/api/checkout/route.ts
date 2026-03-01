import { NextRequest, NextResponse } from "next/server";
import { stripe, PRODUCTS } from "@/lib/stripe";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const { productId } = await req.json();

  if (!productId || !PRODUCTS[productId as keyof typeof PRODUCTS]) {
    return NextResponse.json({ error: "Invalid product" }, { status: 400 });
  }

  const product = PRODUCTS[productId as keyof typeof PRODUCTS];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price: product.priceId,
        quantity: 1,
      },
    ],
    shipping_address_collection: {
      allowed_countries: ["GB"],
    },
    shipping_options: [
      {
        shipping_rate: process.env.STRIPE_SHIPPING_RATE_ID!,
      },
    ],
    success_url: `${siteUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${siteUrl}/#products`,
    metadata: {
      productId,
      productName: product.name,
    },
  });

  return NextResponse.json({ url: session.url });
}
