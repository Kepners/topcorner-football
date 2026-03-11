"use client";

import { useState } from "react";

interface BuyButtonProps {
  productId: "single" | "double";
  label: string;
}

function getFriendlyCheckoutError(message?: string) {
  if (!message) {
    return "Checkout could not be started. Please try again.";
  }

  if (
    message.includes("Missing STRIPE_SECRET_KEY") ||
    message.includes("Invalid API Key") ||
    message.includes("provide an API key") ||
    message.includes("replace_me")
  ) {
    return "Checkout is not configured yet. Add a live Stripe secret key to enable purchases.";
  }

  return message;
}

export default function BuyButton({ productId, label }: BuyButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleClick = async () => {
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });
      const data = await res.json();

      if (res.ok && data.url) {
        window.location.href = data.url;
      } else {
        setError(getFriendlyCheckoutError(data.error));
        setLoading(false);
      }
    } catch {
      setError("Checkout could not be started. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={handleClick}
        disabled={loading}
        className="gold-cta w-full rounded-full border border-[var(--color-gold)] bg-[var(--color-gold)] px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.24em] transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Redirecting to checkout..." : label}
      </button>
      {error ? (
        <p className="text-xs leading-6 text-rose-300" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
