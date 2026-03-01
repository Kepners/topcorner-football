import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const body = await req.text();
  const sig = req.headers.get("stripe-signature")!;

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch {
    return NextResponse.json({ error: "Webhook signature failed" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const customerEmail = session.customer_details?.email;
    const productName = session.metadata?.productName;
    const amount = ((session.amount_total ?? 0) / 100).toFixed(2);

    // Notify owner
    await resend.emails.send({
      from: "TopCorner.football <orders@topcorner.football>",
      to: process.env.OWNER_EMAIL!,
      subject: `🎉 New order: ${productName}`,
      html: `
        <h2>New order received!</h2>
        <p><strong>Product:</strong> ${productName}</p>
        <p><strong>Total paid:</strong> £${amount}</p>
        <p><strong>Customer email:</strong> ${customerEmail ?? "not provided"}</p>
        <p><strong>Stripe session:</strong> ${session.id}</p>
        <p>Check your Stripe dashboard for shipping address and fulfillment.</p>
      `,
    });

    // Confirm to customer
    if (customerEmail) {
      await resend.emails.send({
        from: "TopCorner.football <orders@topcorner.football>",
        to: customerEmail,
        subject: "Order confirmed — TopCorner.football",
        html: `
          <h2>Thanks for your order!</h2>
          <p>We've received your order for <strong>${productName}</strong>.</p>
          <p>We'll get it packed and shipped to you shortly. UK delivery typically takes 2–5 working days.</p>
          <p>Any questions? Reply to this email.</p>
          <br/>
          <p>— TopCorner.football</p>
        `,
      });
    }
  }

  return NextResponse.json({ received: true });
}
