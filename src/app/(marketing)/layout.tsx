import type { ReactNode } from "react";

import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--color-ink)] text-[var(--color-cream)]">
      <SiteHeader />
      <main className="pt-20 sm:pt-24">{children}</main>
      <SiteFooter />
    </div>
  );
}
