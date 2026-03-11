import { NextRequest, NextResponse } from "next/server";

import { PRODUCTS, SHIPPING, getStripe } from "@/lib/stripe";

export const dynamic = "force-dynamic";

function getSiteUrl(req: NextRequest) {
  const forwardedProto = req.headers.get("x-forwarded-proto");
  const forwardedHost = req.headers.get("x-forwarded-host");
  const host = forwardedHost ?? req.headers.get("host");

  if (host) {
    const fallbackProtocol = host.includes("localhost") ? "http" : "https";

    return `${forwardedProto ?? fallbackProtocol}://${host}`;
  }

  return process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
}

export async function POST(req: NextRequest) {
  try {
    const { productId } = await req.json();

    if (!productId || !PRODUCTS[productId as keyof typeof PRODUCTS]) {
      return NextResponse.json({ error: "Invalid product" }, { status: 400 });
    }

    const product = PRODUCTS[productId as keyof typeof PRODUCTS];
    const siteUrl = getSiteUrl(req);
    const stripe = getStripe();

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_creation: "always",
      line_items: [
        {
          price_data: {
            currency: "gbp",
            product_data: {
              name: product.name,
              description: product.description,
            },
            unit_amount: product.unitAmount,
          },
          quantity: 1,
        },
      ],
      shipping_address_collection: {
        allowed_countries: ["GB"],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            display_name: SHIPPING.displayName,
            type: "fixed_amount",
            fixed_amount: {
              amount: SHIPPING.amount,
              currency: SHIPPING.currency,
            },
            delivery_estimate: {
              minimum: {
                unit: "business_day",
                value: SHIPPING.minBusinessDays,
              },
              maximum: {
                unit: "business_day",
                value: SHIPPING.maxBusinessDays,
              },
            },
          },
        },
      ],
      success_url: `${siteUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/product/${productId}`,
      metadata: {
        productId,
        productName: product.name,
        productPrice: product.unitAmount.toString(),
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to create checkout session";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
