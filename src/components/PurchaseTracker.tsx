"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

import { trackPurchase } from "@/lib/analytics";

/**
 * Fires a GA4 `purchase` event once on the success page.
 * Fetches real order data from the Stripe session so we never fabricate
 * transaction IDs or guess values.
 */
export default function PurchaseTracker() {
  const searchParams = useSearchParams();
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;

    const sessionId = searchParams.get("session_id");
    if (!sessionId) return;

    fired.current = true;

    fetch(`/api/checkout/session?id=${encodeURIComponent(sessionId)}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!data) return;

        trackPurchase({
          transaction_id: data.transaction_id,
          value: data.value,
          currency: data.currency,
          items: data.items,
        });
      })
      .catch(() => {
        // Silently fail — purchase tracking is non-critical
      });
  }, [searchParams]);

  return null;
}
