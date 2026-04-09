"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect, useRef } from "react";

import { trackPageView } from "@/lib/analytics";

const LEGACY_GA_ID = "G-FRJ07NK6TG";
const PRIMARY_GA_ID = "G-2J9LN647GT";
const configuredGaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const GA_ID =
  configuredGaId === LEGACY_GA_ID ? PRIMARY_GA_ID : configuredGaId ?? PRIMARY_GA_ID;

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const prevPath = useRef<string | null>(null);

  useEffect(() => {
    if (!GA_ID || pathname === prevPath.current) return;
    prevPath.current = pathname;

    // Fire named page-view events for commercial pages
    trackPageView(pathname);
  }, [pathname]);

  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
