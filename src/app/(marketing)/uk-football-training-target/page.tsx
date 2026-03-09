import Link from "next/link";

import JsonLd from "@/components/JsonLd";
import { absoluteUrl, buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "UK Football Training Targets & Corner Target Training",
  description:
    "UK-focused football corner target guide for coaches, players, and solo training sessions.",
  path: "/uk-football-training-target",
  keywords: [
    "uk football corner target",
    "uk football training",
    "football corner target uk",
    "shooting training target uk",
    "topcorner uk shipping",
  ],
});

export default function UkFootballTrainingTargetPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "UK Football Training Target", path: "/uk-football-training-target" },
  ]);

  const geoSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "UK football training target guide",
    description:
      "UK-specific information for football finishing target setup, buying, and shipping support.",
    url: absoluteUrl("/uk-football-training-target"),
    inLanguage: "en-GB",
    audience: {
      "@type": "Audience",
      geographicArea: "Great Britain",
    },
  };

  return (
    <>
      <JsonLd data={[breadcrumbSchema, geoSchema]} />

      <section className="mx-auto w-full max-w-6xl px-4 pb-18 pt-8 sm:px-6 lg:px-8 lg:pb-24">
        <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-sky)]">
          UK Training
        </p>
        <h1 className="mt-4 font-display text-5xl uppercase leading-[0.9] tracking-[0.08em] text-[var(--color-cream)] sm:text-6xl">
          Train Finishing Better. Built for UK sessions.
        </h1>
        <div className="mt-5 max-w-3xl space-y-6 text-base leading-8 text-[var(--color-mist)]">
          <p>
            If you are searching in the UK for a football corner target, this is
            the product family built for quick setup and structured solo or coach
            sessions.
          </p>
          <p>
            Checkout is currently UK-only at the moment, with free shipping included
            at checkout and dispatch windows set for local delivery.
          </p>
          <p>
            For shipping details, see{" "}
            <Link
              href="/shipping"
              className="text-[var(--color-gold)] underline underline-offset-4"
            >
              shipping
            </Link>{" "}
            and for setup questions, see the{" "}
            <Link
              href="/faq"
              className="text-[var(--color-gold)] underline underline-offset-4"
            >
              FAQ
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
