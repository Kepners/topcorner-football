import Link from "next/link";

import { navLinks } from "@/content/site";

export default function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[rgba(8,10,13,0.74)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-gold)]/50 bg-[var(--color-gold)]/10 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-gold)]">
            TC
          </span>
          <span className="leading-none">
            <span className="block font-display text-2xl uppercase tracking-[0.18em] text-[var(--color-cream)]">
              TopCorner
            </span>
            <span className="block text-[0.68rem] uppercase tracking-[0.36em] text-[var(--color-mist)]">
              topcorner.football
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm uppercase tracking-[0.18em] text-[var(--color-mist)] md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-[var(--color-cream)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/product"
          className="rounded-full border border-[var(--color-gold)] bg-[var(--color-gold)] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-ink)] transition hover:brightness-105"
        >
          Shop now
        </Link>
      </div>
    </header>
  );
}
