import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Order confirmed",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-[var(--color-ink)] px-4 py-16 text-[var(--color-cream)] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-[var(--color-panel)] p-8 sm:p-10">
        <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-sky)]">
          Order confirmed
        </p>
        <h1 className="mt-4 font-display text-5xl uppercase tracking-[0.08em] text-[var(--color-cream)] sm:text-6xl">
          Your order is in.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--color-mist)]">
          Thanks for ordering from TopCorner.football. We have received the
          payment and the order will move into packing and dispatch shortly.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-sky)]">
              What happens next
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-mist)]">
              <li>1. You should receive a confirmation email shortly.</li>
              <li>2. Orders are typically dispatched within 1-2 working days.</li>
              <li>3. UK delivery usually lands within 2-5 working days.</li>
            </ul>
          </div>

          <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-sky)]">
              While you wait
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--color-mist)]">
              The fastest next step is to browse the shooting guides so the
              first session with the target already has structure.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/blog"
            className="rounded-full border border-[var(--color-gold)] bg-[var(--color-gold)] px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-ink)]"
          >
            Read training guides
          </Link>
          <Link
            href="/product"
            className="rounded-full border border-white/15 px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-cream)]"
          >
            Back to product page
          </Link>
        </div>
      </div>
    </div>
  );
}
