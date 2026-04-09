import { NextRequest, NextResponse } from "next/server";

import { getStripe } from "@/lib/stripe";

export const dynamic = "force-dynamic";

/**
 * GET /api/checkout/session?id=cs_xxx
 *
 * Returns minimal order data for client-side GA4 purchase tracking.
 * Only exposes non-sensitive fields: transaction id, amount, currency, items.
 */
export async function GET(req: NextRequest) {
  const sessionId = req.nextUrl.searchParams.get("id");

  if (!sessionId || !sessionId.startsWith("cs_")) {
    return NextResponse.json({ error: "Invalid session" }, { status: 400 });
  }

  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["line_items"],
    });

    if (session.payment_status !== "paid") {
      return NextResponse.json({ error: "Not paid" }, { status: 400 });
    }

    const items =
      session.line_items?.data.map((li) => ({
        item_id: session.metadata?.productId ?? li.description ?? "unknown",
        item_name: li.description ?? "TopCorner Corner Target",
        price: (li.amount_total ?? 0) / 100,
        quantity: li.quantity ?? 1,
      })) ?? [];

    return NextResponse.json({
      transaction_id: session.payment_intent as string,
      value: (session.amount_total ?? 0) / 100,
      currency: (session.currency ?? "gbp").toUpperCase(),
      items,
    });
  } catch {
    return NextResponse.json(
      { error: "Session not found" },
      { status: 404 },
    );
  }
}
