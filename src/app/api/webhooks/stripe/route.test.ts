import type Stripe from "stripe";
import { NextRequest } from "next/server";
import { beforeEach, describe, expect, it, vi } from "vitest";

const { products, getStripeMock } = vi.hoisted(() => ({
  products: {
    single: {
      name: "TopCorner Single Corner Target",
      description: "Single top-corner target for focused solo shooting work.",
      unitAmount: 1999,
    },
    double: {
      name: "TopCorner Double Corner Target",
      description:
        "Double pack for running both corners in team and striker sessions.",
      unitAmount: 3499,
    },
  },
  getStripeMock: vi.fn(),
}));

import { POST } from "./route";

const constructEventMock = vi.fn();
const listLineItemsMock = vi.fn();
const sendEmailMock = vi.fn();

vi.mock("resend", () => ({
  Resend: class {
    emails = {
      send: sendEmailMock,
    };
  },
}));

vi.mock("@/lib/stripe", () => {
  return {
    PRODUCTS: products,
    getStripe: getStripeMock,
  };
});

describe("POST /api/webhooks/stripe", () => {
  beforeEach(() => {
    process.env.STRIPE_WEBHOOK_SECRET = "whsec_test";
    process.env.RESEND_API_KEY = "re_test";
    process.env.OWNER_EMAIL = "owner@topcorner.football";
    process.env.RESEND_FROM_EMAIL = "TopCorner.football <orders@topcorner.football>";

    getStripeMock.mockReturnValue({
      webhooks: {
        constructEvent: constructEventMock,
      },
      checkout: {
        sessions: {
          listLineItems: listLineItemsMock,
        },
      },
    });
  });

  it("ignores non-TopCorner completed checkout sessions", async () => {
    constructEventMock.mockReturnValue({
      id: "evt_foreign",
      type: "checkout.session.completed",
      data: {
        object: {
          id: "cs_foreign",
          mode: "payment",
          amount_subtotal: 1500,
          amount_total: 1500,
          currency: "usd",
          success_url:
            "https://www.deletemytweets.app/download?session_id={CHECKOUT_SESSION_ID}",
          metadata: {},
        },
      },
    } as Stripe.Event);

    const req = new NextRequest(
      "https://www.topcorner.football/api/webhooks/stripe",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "stripe-signature": "sig_test",
        },
        body: JSON.stringify({ id: "evt_foreign" }),
      },
    );

    const response = await POST(req);

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({
      received: true,
      ignored: true,
    });
    expect(constructEventMock).toHaveBeenCalledWith(
      JSON.stringify({ id: "evt_foreign" }),
      "sig_test",
      "whsec_test",
    );
    expect(listLineItemsMock).not.toHaveBeenCalled();
    expect(sendEmailMock).not.toHaveBeenCalled();
  });

  it("sends owner and customer emails for a valid TopCorner order", async () => {
    const session = {
      id: "cs_topcorner",
      mode: "payment",
      amount_subtotal: products.single.unitAmount,
      amount_total: products.single.unitAmount,
      currency: "gbp",
      metadata: {
        productId: "single",
        productName: products.single.name,
      },
      customer_details: {
        name: "Alex Striker",
        email: "alex@example.com",
        phone: "07123456789",
        address: {
          line1: "10 High Street",
          line2: "",
          city: "London",
          postal_code: "SW1A 1AA",
          country: "GB",
        },
      },
    } as Stripe.Checkout.Session;

    constructEventMock.mockReturnValue({
      id: "evt_topcorner",
      type: "checkout.session.completed",
      data: {
        object: session,
      },
    } as Stripe.Event);

    listLineItemsMock.mockResolvedValue({
      data: [
        {
          description: products.single.name,
          quantity: 1,
        },
      ],
    });

    const req = new NextRequest(
      "https://www.topcorner.football/api/webhooks/stripe",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "stripe-signature": "sig_test",
        },
        body: JSON.stringify({ id: "evt_topcorner" }),
      },
    );

    const response = await POST(req);

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({ received: true });
    expect(listLineItemsMock).toHaveBeenCalledWith("cs_topcorner", { limit: 10 });
    expect(sendEmailMock).toHaveBeenCalledTimes(2);
    expect(sendEmailMock).toHaveBeenNthCalledWith(
      1,
      expect.objectContaining({
        from: "TopCorner.football <orders@topcorner.football>",
        to: "owner@topcorner.football",
        subject: `New order: ${products.single.name}`,
      }),
    );
    expect(sendEmailMock).toHaveBeenNthCalledWith(
      2,
      expect.objectContaining({
        from: "TopCorner.football <orders@topcorner.football>",
        to: "alex@example.com",
        subject: "Order confirmed - TopCorner.football",
      }),
    );
  });
});
