import type Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

import { getStripe } from "@/lib/stripe";

export const dynamic = "force-dynamic";

function formatMoney(amount: number | null | undefined) {
  return `GBP ${((amount ?? 0) / 100).toFixed(2)}`;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatAddress(address?: Stripe.Address | null) {
  if (!address) {
    return "Not provided";
  }

  return [
    address.line1,
    address.line2,
    [address.city, address.postal_code].filter(Boolean).join(" "),
    address.state,
    address.country,
  ]
    .filter(Boolean)
    .join("<br />");
}

export async function POST(req: NextRequest) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!webhookSecret) {
    return NextResponse.json(
      { error: "Missing STRIPE_WEBHOOK_SECRET" },
      { status: 500 },
    );
  }

  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  if (!sig) {
    return NextResponse.json(
      { error: "Missing Stripe signature" },
      { status: 400 },
    );
  }

  const stripe = getStripe();
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch {
    return NextResponse.json(
      { error: "Webhook signature failed" },
      { status: 400 },
    );
  }

  if (event.type === "checkout.session.completed") {
    const resendApiKey = process.env.RESEND_API_KEY;
    const ownerEmail = process.env.OWNER_EMAIL;
    const session = event.data.object as Stripe.Checkout.Session;
    const lineItems = await stripe.checkout.sessions.listLineItems(session.id, {
      limit: 10,
    });

    const customerEmail = session.customer_details?.email;
    const customerName =
      session.collected_information?.shipping_details?.name ??
      session.customer_details?.name ??
      "Customer";
    const customerPhone = session.customer_details?.phone;
    const shippingAddress =
      session.collected_information?.shipping_details?.address ??
      session.customer_details?.address;
    const lineItemSummary =
      lineItems.data.length > 0
        ? lineItems.data
            .map((item) => {
              const quantity = item.quantity ?? 1;
              return `${escapeHtml(item.description ?? "TopCorner.football order")} x${quantity}`;
            })
            .join("<br />")
        : escapeHtml(session.metadata?.productName ?? "TopCorner.football order");
    const fromEmail =
      process.env.RESEND_FROM_EMAIL ||
      "TopCorner.football <orders@topcorner.football>";

    if (!resendApiKey) {
      console.error(
        "RESEND_API_KEY is not set — skipping all order emails for session",
        session.id,
      );
    } else {
      const resend = new Resend(resendApiKey);

      if (ownerEmail) {
        try {
          await resend.emails.send({
            from: fromEmail,
            to: ownerEmail,
            subject: `New order: ${session.metadata?.productName ?? "TopCorner.football"}`,
            html: `
              <h2>New order received</h2>
              <p><strong>Items:</strong><br />${lineItemSummary}</p>
              <p><strong>Total paid:</strong> ${formatMoney(session.amount_total)}</p>
              <p><strong>Customer:</strong> ${escapeHtml(customerName)}</p>
              <p><strong>Email:</strong> ${escapeHtml(customerEmail ?? "Not provided")}</p>
              <p><strong>Phone:</strong> ${escapeHtml(customerPhone ?? "Not provided")}</p>
              <p><strong>Shipping address:</strong><br />${formatAddress(shippingAddress)}</p>
              <p><strong>Stripe session:</strong> ${escapeHtml(session.id)}</p>
            `,
          });
        } catch (error) {
          console.error("Failed to send owner notification email", error);
        }
      } else {
        console.error(
          "OWNER_EMAIL is not set — skipping internal order notification for session",
          session.id,
        );
      }

      if (customerEmail) {
        try {
          await resend.emails.send({
            from: fromEmail,
            to: customerEmail,
            subject: "Order confirmed - TopCorner.football",
            html: `
              <h2>Thanks for your order</h2>
              <p>We have received your order for <strong>${escapeHtml(
                session.metadata?.productName ?? "your training target",
              )}</strong>.</p>
              <p>Total paid: <strong>${formatMoney(session.amount_total)}</strong></p>
              <p>We will ship to:</p>
              <p>${formatAddress(shippingAddress)}</p>
              <p>UK delivery typically takes 2-5 working days once dispatched.</p>
            `,
          });
        } catch (error) {
          console.error("Failed to send customer confirmation email", error);
        }
      }
    }
  }

  return NextResponse.json({ received: true });
}
