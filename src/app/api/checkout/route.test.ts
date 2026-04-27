import { NextRequest } from "next/server";
import { beforeEach, describe, expect, it, vi } from "vitest";

const { products, shipping, getStripeMock } = vi.hoisted(() => ({
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
  shipping: {
    amount: 0,
    currency: "gbp",
    displayName: "Free UK Shipping",
    minBusinessDays: 2,
    maxBusinessDays: 5,
  },
  getStripeMock: vi.fn(),
}));

import { POST } from "./route";

const createSessionMock = vi.fn();

vi.mock("@/lib/stripe", () => {
  return {
    PRODUCTS: products,
    SHIPPING: shipping,
    getStripe: getStripeMock,
  };
});

describe("POST /api/checkout", () => {
  beforeEach(() => {
    getStripeMock.mockReturnValue({
      checkout: {
        sessions: {
          create: createSessionMock,
        },
      },
    });
  });

  it("returns 400 when the product id is invalid", async () => {
    const req = new NextRequest("https://www.topcorner.football/api/checkout", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ productId: "not-a-product" }),
    });

    const response = await POST(req);

    expect(response.status).toBe(400);
    await expect(response.json()).resolves.toEqual({ error: "Invalid product" });
    expect(createSessionMock).not.toHaveBeenCalled();
  });

  it("creates a hosted Checkout Session with the TopCorner product metadata", async () => {
    createSessionMock.mockResolvedValue({
      url: "https://checkout.stripe.com/pay/cs_test_123",
    });

    const req = new NextRequest("https://www.topcorner.football/api/checkout", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-forwarded-host": "www.topcorner.football",
        "x-forwarded-proto": "https",
      },
      body: JSON.stringify({ productId: "single" }),
    });

    const response = await POST(req);

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({
      url: "https://checkout.stripe.com/pay/cs_test_123",
    });

    expect(createSessionMock).toHaveBeenCalledWith({
      mode: "payment",
      customer_creation: "always",
      line_items: [
        {
          price_data: {
            currency: "gbp",
            product_data: {
              name: products.single.name,
              description: products.single.description,
            },
            unit_amount: products.single.unitAmount,
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
            display_name: shipping.displayName,
            type: "fixed_amount",
            fixed_amount: {
              amount: shipping.amount,
              currency: shipping.currency,
            },
            delivery_estimate: {
              minimum: {
                unit: "business_day",
                value: shipping.minBusinessDays,
              },
              maximum: {
                unit: "business_day",
                value: shipping.maxBusinessDays,
              },
            },
          },
        },
      ],
      branding_settings: {
        background_color: "#ffffff",
        border_style: "rounded",
        button_color: "#1B5E20",
        display_name: "TopCorner Football",
        logo: {
          type: "url",
          url: "https://www.topcorner.football/images/brand/topcorner-og.jpg",
        },
      },
      success_url:
        "https://www.topcorner.football/success?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "https://www.topcorner.football/product/single",
      metadata: {
        productId: "single",
        productName: products.single.name,
        productPrice: products.single.unitAmount.toString(),
      },
    });
  });
});
