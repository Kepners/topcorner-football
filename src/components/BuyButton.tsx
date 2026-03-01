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
      className="w-full bg-[#1B5E20] hover:bg-[#2E7D32] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-xl transition-colors text-center"
    >
      {loading ? "Redirecting to checkout..." : label}
    </button>
  );
}
