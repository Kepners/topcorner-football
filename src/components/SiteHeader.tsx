import Image from "next/image";
import Link from "next/link";

import ShopNowButton from "@/components/ShopNowButton";
import { navLinks } from "@/content/site";

export default function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[linear-gradient(180deg,rgba(10,14,19,0.88),rgba(10,14,19,0.64))] shadow-[0_18px_50px_rgba(0,0,0,0.3)] backdrop-blur-2xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative inline-flex h-11 w-11 overflow-hidden rounded-full border border-[var(--color-gold)]/50 bg-[var(--color-gold)]/10 shadow-[0_0_30px_rgba(255,196,71,0.16)]">
            <Image
              src="/images/brand/topcorner-og.jpg"
              alt="TopCorner Football logo"
              fill
              sizes="44px"
              className="object-cover"
            />
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

        <ShopNowButton
          href="/product#shop"
          className="gold-cta rounded-full border border-[var(--color-gold)] bg-[var(--color-gold)] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.22em] shadow-[0_10px_30px_rgba(255,196,71,0.22)] transition hover:brightness-105"
          label="Shop now"
        />
      </div>
    </header>
  );
}
