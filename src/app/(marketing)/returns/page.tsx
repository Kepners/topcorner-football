import Link from "next/link";

import JsonLd from "@/components/JsonLd";
import { returnsSupportSteps, siteConfig } from "@/content/site";
import { absoluteUrl, buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Returns And Order Support",
  description:
    "Returns and order-support contact information for TopCorner.football, including how to get help before sending anything back.",
  path: "/returns",
  keywords: [
    "topcorner football returns",
    "football corner target return support",
    "order support topcorner football",
  ],
});

export default function ReturnsPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Returns", path: "/returns" },
  ]);

  const supportSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "TopCorner.football returns and order support",
    description:
      "Order-support page for returns, delivery issues, and buyer questions before sending a product back.",
    url: absoluteUrl("/returns"),
    inLanguage: "en-GB",
  };

  return (
    <>
      <JsonLd data={[breadcrumbSchema, supportSchema]} />

      <section className="mx-auto w-full max-w-6xl px-4 pb-18 pt-8 sm:px-6 lg:px-8 lg:pb-24">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-sky)]">
            Returns
          </p>
          <h1 className="mt-4 font-display text-5xl uppercase leading-[0.9] tracking-[0.08em] text-[var(--color-cream)] sm:text-6xl">
            Order support before anything is sent back.
          </h1>
          <p className="mt-5 text-base leading-8 text-[var(--color-mist)]">
            Use this page if you need help with a delivery issue, the wrong
            item, or a return request. The support team will point you to the
            right next step before any parcel is posted.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-white/10 bg-[var(--color-panel)] p-7">
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-sky)]">
              Best first step
            </p>
            <p className="mt-5 text-base leading-8 text-[var(--color-mist)]">
              Email <span className="text-[var(--color-cream)]">{siteConfig.supportEmail}</span>{" "}
              with your order number and a short description of the issue.
            </p>

            <ul className="mt-6 space-y-3 text-sm leading-7 text-[var(--color-mist)]">
              {returnsSupportSteps.map((step) => (
                <li key={step}>+ {step}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.02)] p-7">
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-sky)]">
              Useful links
            </p>
            <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--color-mist)]">
              <p>
                Need general delivery information first? Check the shipping page
                before you contact support.
              </p>
              <p>
                If your question is about fit, setup, or training use cases,
                the FAQ usually gives the fastest answer.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/shipping"
                className="rounded-full border border-[var(--color-gold)] bg-[var(--color-gold)] px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-ink)]"
              >
                Shipping info
              </Link>
              <Link
                href="/faq"
                className="rounded-full border border-white/15 px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-cream)]"
              >
                Read the FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
