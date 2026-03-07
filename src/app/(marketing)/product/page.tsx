import Image from "next/image";
import Link from "next/link";

import BuyButton from "@/components/BuyButton";
import JsonLd from "@/components/JsonLd";
import {
  faqPageItems,
  productSpecs,
  productVariants,
  shippingFacts,
  siteConfig,
} from "@/content/site";
import { absoluteUrl, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Football Goal Corner Training Target",
  description:
    "Shop the CalcioKx football goal corner training target for solo sessions, striker drills, and coach-led finishing practice.",
  path: "/product",
  keywords: [
    "football goal corner training target",
    "football corner target",
    "football training product",
    "improve shooting accuracy football",
  ],
  image: "/images/products/goal-installed-4.jpg",
});

export default function ProductPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "CalcioKx Football Goal Corner Training Target",
    description:
      "Football goal corner training target for players and coaches who want clearer finishing drills and better shooting accuracy.",
    brand: {
      "@type": "Brand",
      name: siteConfig.brand,
    },
    category: "Soccer training equipment",
    image: [
      absoluteUrl("/images/products/goal-installed-4.jpg"),
      absoluteUrl("/images/products/product-single-flat.jpg"),
      absoluteUrl("/images/products/product-double-flat.jpg"),
    ],
    offers: productVariants.map((variant) => ({
      "@type": "Offer",
      url: absoluteUrl("/product"),
      priceCurrency: "GBP",
      price: variant.priceValue.toFixed(2),
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      name: variant.name,
      seller: {
        "@type": "Organization",
        name: siteConfig.name,
      },
    })),
    additionalProperty: productSpecs.map((spec) => ({
      "@type": "PropertyValue",
      name: spec.label,
      value: spec.value,
    })),
  };

  return (
    <>
      <JsonLd data={productSchema} />

      <section className="mx-auto grid w-full max-w-7xl gap-12 px-4 pb-18 pt-8 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-24">
        <div className="space-y-7">
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-[var(--color-sky)]">
            Product page
          </div>
          <div className="space-y-5">
            <h1 className="font-display text-5xl uppercase leading-[0.9] tracking-[0.08em] text-[var(--color-cream)] sm:text-6xl">
              Football goal corner training target
            </h1>
            <p className="max-w-2xl text-base leading-8 text-[var(--color-mist)]">
              The CalcioKx corner target gives players and coaches a clean
              top-corner aim point for shooting drills, finishing circuits, and
              solo repetition. It straps onto the goal quickly and comes off
              just as fast when the session ends.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              "Fits most standard round and square posts",
              "Ready for use in under 2 minutes",
              "Available in single and double pack options",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-white/10 bg-[var(--color-panel)] p-5 text-sm leading-7 text-[var(--color-cream)]"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[var(--color-panel)] p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-sky)]">
              Why buyers care
            </p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--color-mist)]">
              <li>+ Clear top-corner target for more deliberate finishing work</li>
              <li>+ Faster setup than improvised cone or tape solutions</li>
              <li>+ Useful for clubs, schools, coaches, and home practice</li>
              <li>+ Supports product-led conversions from blog traffic</li>
            </ul>
          </div>
        </div>

        <div className="grid gap-5">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[var(--color-panel)]">
            <div className="relative aspect-[5/4]">
              <Image
                src="/images/products/goal-installed-4.jpg"
                alt="Football goal with corner target installed in the top corner"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[var(--color-panel)]">
              <div className="relative aspect-square">
                <Image
                  src="/images/products/product-single-flat.jpg"
                  alt="Single corner target product shot"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[var(--color-panel)]">
              <div className="relative aspect-square">
                <Image
                  src="/images/products/product-double-flat.jpg"
                  alt="Double corner target product shot"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[rgba(255,255,255,0.02)] py-18 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-sky)]">
              Choose your pack
            </p>
            <h2 className="mt-4 font-display text-4xl uppercase tracking-[0.12em] text-[var(--color-cream)] sm:text-5xl">
              Buy the format that matches your sessions.
            </h2>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {productVariants.map((variant) => (
              <article
                key={variant.id}
                className="rounded-[2rem] border border-white/10 bg-[var(--color-panel)] p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-sky)]">
                      {variant.shortName} pack
                    </p>
                    <h3 className="mt-3 font-display text-3xl uppercase tracking-[0.08em] text-[var(--color-cream)]">
                      {variant.name}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-mist)]">
                      {variant.tagline}
                    </p>
                  </div>
                  {variant.badge ? (
                    <span className="rounded-full bg-[var(--color-gold)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-ink)]">
                      {variant.badge}
                    </span>
                  ) : null}
                </div>

                <div className="mt-6 grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
                  <div className="relative aspect-square overflow-hidden rounded-[1.5rem] bg-white">
                    <Image
                      src={variant.image}
                      alt={variant.name}
                      fill
                      className="object-contain p-6"
                    />
                  </div>
                  <div className="space-y-5">
                    <div className="rounded-[1.4rem] border border-white/10 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-mist)]">
                        Price
                      </p>
                      <p className="mt-2 font-display text-4xl uppercase tracking-[0.08em] text-[var(--color-gold)]">
                        {variant.priceLabel}
                      </p>
                      <p className="mt-2 text-xs uppercase tracking-[0.22em] text-[var(--color-sky)]">
                        {variant.inventory}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-cream)]">
                        Included
                      </p>
                      <ul className="mt-3 space-y-2 text-sm leading-7 text-[var(--color-mist)]">
                        {variant.contents.map((item) => (
                          <li key={item}>+ {item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-cream)]">
                        Best for
                      </p>
                      <ul className="mt-3 space-y-2 text-sm leading-7 text-[var(--color-mist)]">
                        {variant.benefits.map((item) => (
                          <li key={item}>+ {item}</li>
                        ))}
                      </ul>
                    </div>

                    <BuyButton
                      productId={variant.id}
                      label={`Buy ${variant.shortName} - ${variant.priceLabel}`}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-18 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-24">
        <div>
          <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-sky)]">
            Technical details
          </p>
          <h2 className="mt-4 font-display text-4xl uppercase tracking-[0.12em] text-[var(--color-cream)] sm:text-5xl">
            Product details buyers want before checkout.
          </h2>
          <p className="mt-5 text-base leading-8 text-[var(--color-mist)]">
            Use this section to reduce hesitation. Buyers need to know the
            setup method, compatibility, shipping model, and whether the
            product fits their training environment.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[var(--color-panel)]">
          <dl className="divide-y divide-white/10">
            {productSpecs.map((spec) => (
              <div key={spec.label} className="grid gap-3 px-6 py-5 sm:grid-cols-[0.42fr_0.58fr]">
                <dt className="text-xs uppercase tracking-[0.24em] text-[var(--color-sky)]">
                  {spec.label}
                </dt>
                <dd className="text-sm leading-7 text-[var(--color-cream)]">
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-[rgba(255,255,255,0.02)] py-18 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-[var(--color-panel)] p-7">
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-sky)]">
              Shipping info
            </p>
            <h2 className="mt-4 font-display text-4xl uppercase tracking-[0.12em] text-[var(--color-cream)] sm:text-5xl">
              Simple delivery rules for the MVP.
            </h2>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-[var(--color-mist)]">
              {shippingFacts.map((fact) => (
                <li key={fact}>+ {fact}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[var(--color-panel)] p-7">
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-sky)]">
              Support questions
            </p>
            <div className="mt-6 space-y-4">
              {faqPageItems.slice(0, 4).map((item) => (
                <details
                  key={item.question}
                  className="rounded-[1.4rem] border border-white/10 bg-white/5 p-5"
                >
                  <summary className="cursor-pointer list-none text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-cream)]">
                    {item.question}
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-mist)]">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
            <Link
              href="/faq"
              className="mt-6 inline-flex text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-gold)]"
            >
              Read the full FAQ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
