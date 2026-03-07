"use client";

import { useState } from "react";

interface BuyButtonProps {
  productId: "single" | "double";
  label: string;
}

export default function BuyButton({ productId, label }: BuyButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Something went wrong. Please try again.");
        setLoading(false);
      }
    } catch {
      alert("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="w-full rounded-full border border-[var(--color-gold)] bg-[var(--color-gold)] px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-ink)] transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {loading ? "Redirecting to checkout..." : label}
    </button>
  );
}
