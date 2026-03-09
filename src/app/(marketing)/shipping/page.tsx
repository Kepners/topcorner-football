import JsonLd from "@/components/JsonLd";
import { shippingFacts, shippingHighlights } from "@/content/site";
import { absoluteUrl, buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "UK Shipping Information",
  description:
    "Shipping details for TopCorner.football orders, including UK delivery coverage, dispatch timing, and checkout support.",
  path: "/shipping",
  keywords: [
    "topcorner football shipping",
    "football corner target shipping",
    "uk football training equipment delivery",
  ],
});

export default function ShippingPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Shipping", path: "/shipping" },
  ]);

  const shippingPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "TopCorner.football shipping information",
    description:
      "UK shipping details for TopCorner.football orders, including free delivery, dispatch timing, and checkout coverage.",
    url: absoluteUrl("/shipping"),
    inLanguage: "en-GB",
  };

  return (
    <>
      <JsonLd data={[breadcrumbSchema, shippingPageSchema]} />

      <section className="mx-auto w-full max-w-6xl px-4 pb-18 pt-8 sm:px-6 lg:px-8 lg:pb-24">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-sky)]">
            Shipping
          </p>
          <h1 className="mt-4 font-display text-5xl uppercase leading-[0.9] tracking-[0.08em] text-[var(--color-cream)] sm:text-6xl">
            UK shipping details before you order.
          </h1>
          <p className="mt-5 text-base leading-8 text-[var(--color-mist)]">
            This page covers the delivery information currently supported by
            checkout so buyers can confirm the basics before paying.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {shippingHighlights.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.8rem] border border-white/10 bg-[var(--color-panel)] p-7"
            >
              <h2 className="font-display text-3xl uppercase tracking-[0.08em] text-[var(--color-cream)]">
                {item.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--color-mist)]">
                {item.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-white/10 bg-[var(--color-panel)] p-7">
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-sky)]">
              Delivery facts
            </p>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-[var(--color-mist)]">
              {shippingFacts.map((fact) => (
                <li key={fact}>+ {fact}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.02)] p-7">
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-sky)]">
              Checkout support
            </p>
            <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--color-mist)]">
              <p>
                If you hit a delivery issue during checkout or need help with an
                order, email <span className="text-[var(--color-cream)]">orders@topcorner.football</span>.
              </p>
              <p>
                The current checkout flow only accepts United Kingdom delivery
                addresses, so international orders are not yet supported.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
