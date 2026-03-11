import Link from "next/link";

import {
  navLinks,
  productReviewSummary,
  shippingFacts,
  siteConfig,
  supportLinks,
  trustHighlights,
} from "@/content/site";

export default function SiteFooter() {
  return (
    <footer className="relative border-t border-white/10 bg-[linear-gradient(180deg,rgba(9,12,16,0.96),rgba(8,10,13,0.98))] backdrop-blur-md">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.9fr_1.1fr] lg:px-8">
        <div className="space-y-4">
          <p className="font-display text-3xl uppercase tracking-[0.18em] text-[var(--color-cream)]">
            TopCorner.football
          </p>
          <p className="max-w-xl text-sm leading-7 text-[var(--color-mist)]">
            Football finishing tools and content built around one goal:
            helping players train with clearer targets and better repetition.
          </p>
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-sky)]">
            Official home of the TopCorner football corner target
          </p>
          <div className="rounded-[1.4rem] border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-gold)]">
              Customer proof
            </p>
            <p className="mt-3 font-display text-3xl uppercase tracking-[0.08em] text-[var(--color-cream)]">
              {productReviewSummary.ratingValue}/5
            </p>
            <p className="mt-2 text-sm leading-7 text-[var(--color-mist)]">
              Based on {productReviewSummary.reviewCount} early customer reviews from players,
              parents, and coaches.
            </p>
          </div>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-cream)]">
            Explore
          </p>
          <div className="space-y-3 text-sm text-[var(--color-mist)]">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link href={link.href} className="transition hover:text-[var(--color-cream)]">
                  {link.label}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-cream)]">
            Support
          </p>
          <div className="space-y-3 text-sm text-[var(--color-mist)]">
            <p>{shippingFacts[0]}</p>
            <p>{shippingFacts[2]}</p>
            <p>30-day returns support</p>
            {supportLinks.map((link) => (
              <div key={link.href}>
                <Link href={link.href} className="transition hover:text-[var(--color-cream)]">
                  {link.label}
                </Link>
              </div>
            ))}
            <p>Email: {siteConfig.supportEmail}</p>
          </div>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-cream)]">
            Trust
          </p>
          <div className="space-y-3 text-sm text-[var(--color-mist)]">
            {trustHighlights.map((item) => (
              <p key={item}>{item}</p>
            ))}
            <p>Need a club or coach order answer? Email {siteConfig.supportEmail}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-xs uppercase tracking-[0.18em] text-[var(--color-mist)] sm:px-6 lg:px-8">
        Copyright {new Date().getFullYear()} {siteConfig.name}
      </div>
    </footer>
  );
}
