import Image from "next/image";
import Link from "next/link";

import BuyButton from "@/components/BuyButton";
import JsonLd from "@/components/JsonLd";
import {
  getProductVariantById,
  productCompareRows,
  productDetailContent,
} from "@/content/products";
import {
  productReviews,
  faqPageItems,
  merchantReturnPolicy,
  productReviewSummary,
  productVariants,
  shippingFacts,
} from "@/content/site";
import { absoluteUrl, buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Football Corner Targets",
  description:
    "Compare football corner target packs, including the CalcioKx single and double goal targets for solo drills and coach-led sessions.",
  path: "/product",
  keywords: [
    "football corner target",
    "football goal target",
    "top bins target",
    "calciokx single corner target",
    "calciokx double corner target",
    "football training target packs",
  ],
  image: "/images/products/hero-goal-target.jpg",
});

function formatPrice(value: number) {
  return `GBP ${value}`;
}

export default function ProductPage() {
  const singlePack = getProductVariantById("single");
  const pageFaqItems = faqPageItems.slice(0, 3);

  if (!singlePack) {
    return null;
  }

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Products", path: "/product" },
  ]);

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "TopCorner Product Reviews",
    itemListElement: productReviews.map((review, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: review.author,
        },
        datePublished: review.date,
        reviewRating: {
          "@type": "Rating",
          ratingValue: review.rating,
          bestRating: 5,
          worstRating: 1,
        },
        itemReviewed: {
          "@type": "Product",
          name: review.reviewedItem,
        },
        name: review.title,
        reviewBody: review.body,
        publisher: {
          "@type": "Organization",
          name: "TopCorner.football",
        },
      },
    })),
  };

  const productListSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "CalcioKx Corner Target Packs",
    description:
      "Browse the CalcioKx single and double corner target packs for solo sessions, coach-led drills, and group finishing work.",
    url: absoluteUrl("/product"),
    mainEntity: {
      "@type": "ItemList",
      itemListElement: productVariants.map((variant, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(`/product/${variant.id}`),
        item: {
          "@type": "Product",
          name: variant.name,
          sku: variant.sku,
          gtin13: variant.gtin13,
          image: absoluteUrl(variant.image),
          brand: {
            "@type": "Brand",
            name: "TopCorner",
          },
          offers: {
            "@type": "Offer",
            priceCurrency: "GBP",
            price: variant.priceValue.toFixed(2),
            url: absoluteUrl(`/product/${variant.id}`),
            availability: "https://schema.org/InStock",
            shippingDetails: {
              "@type": "OfferShippingDetails",
              shippingRate: {
                "@type": "MonetaryAmount",
                value: "0.00",
                currency: "GBP",
              },
              shippingDestination: {
                "@type": "DefinedRegion",
                addressCountry: "GB",
              },
              deliveryTime: {
                "@type": "ShippingDeliveryTime",
                handlingTime: {
                  "@type": "QuantitativeValue",
                  minValue: 1,
                  maxValue: 2,
                  unitCode: "DAY",
                },
                transitTime: {
                  "@type": "QuantitativeValue",
                  minValue: 2,
                  maxValue: 5,
                  unitCode: "DAY",
                },
              },
            },
            hasMerchantReturnPolicy: {
              "@type": "MerchantReturnPolicy",
              applicableCountry: "GB",
              returnPolicyCategory: merchantReturnPolicy.returnPolicyCategory,
              returnWindow: {
                "@type": "MerchantReturnFiniteReturnWindow",
                value: merchantReturnPolicy.returnWindowDays,
                unitCode: "DAY",
              },
              returnMethod: merchantReturnPolicy.returnMethod,
              returnFees: merchantReturnPolicy.returnFees,
              merchantReturnLink: absoluteUrl("/returns"),
            },
          },
          review: productReviews
            .filter((review) => review.reviewedItem.includes("Single") || review.reviewedItem.includes("Double"))
            .map((review) => ({
              "@type": "Review",
              author: {
                "@type": "Person",
                name: review.author,
              },
              datePublished: review.date,
              reviewRating: {
                "@type": "Rating",
                ratingValue: review.rating,
                bestRating: 5,
                worstRating: 1,
              },
              name: review.title,
              reviewBody: review.body,
              publisher: {
                "@type": "Organization",
                name: "TopCorner.football",
              },
            })),
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: productReviewSummary.ratingValue,
            reviewCount: productReviewSummary.reviewCount,
          },
        },
      })),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pageFaqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={[breadcrumbSchema, productListSchema, faqSchema, reviewSchema]} />

      <section className="mx-auto w-full max-w-7xl px-4 pb-14 pt-8 sm:px-6 lg:px-8 lg:pb-20">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-sky)]">
              Products
            </p>
            <h1 className="font-display text-5xl uppercase leading-[0.9] tracking-[0.08em] text-[var(--color-cream)] sm:text-6xl">
              Choose the pack that fits your sessions.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-[var(--color-mist)]">
              Start with one live corner for focused solo repetition, or step
              up to both corners ready at once for coach-led drills and group
              finishing work. This page is the fastest way to compare both
              CalcioKx packs and pick the right setup.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              "Free UK shipping included",
              "Dispatch target: 1-2 working days",
              "Secure checkout with Stripe",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[1.7rem] border border-white/10 bg-[var(--color-panel)] p-5 text-sm leading-7 text-[var(--color-cream)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {productVariants.map((variant) => {
            const detail = productDetailContent[variant.id];
            const detailHref = `/product/${variant.id}`;
            const compareAtValue =
              variant.id === "double" ? singlePack.priceValue * 2 : null;

            return (
              <article
                key={variant.id}
                className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-[var(--color-panel)] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.35)]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,196,71,0.08),transparent_28%)]" />

                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-sky)]">
                      {detail.eyebrow}
                    </p>
                    <h2 className="mt-3 font-display text-4xl uppercase tracking-[0.08em] text-[var(--color-cream)]">
                      {variant.name}
                    </h2>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--color-mist)]">
                      {variant.description}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-3">
                    {variant.badge ? (
                      <span className="rounded-full bg-[var(--color-gold)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-ink)]">
                        {variant.badge}
                      </span>
                    ) : null}
                    {detail.savingsLine ? (
                      <span className="rounded-full border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/10 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">
                        {detail.savingsLine}
                      </span>
                    ) : null}
                  </div>
                </div>

                <div className="relative mt-6 grid gap-6 md:grid-cols-[0.82fr_1.18fr]">
                  <div className="relative aspect-square overflow-hidden rounded-[1.7rem] bg-white">
                    <Image
                      src={variant.image}
                      alt={variant.name}
                      fill
                      className="object-contain p-6"
                    />
                  </div>

                  <div className="space-y-5">
                    <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-5">
                      <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-sky)]">
                        Offer
                      </p>
                      <p className="mt-3 font-display text-4xl uppercase tracking-[0.08em] text-[var(--color-gold)]">
                        {variant.priceLabel}
                      </p>
                      {compareAtValue ? (
                        <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[var(--color-mist)]">
                          <span className="line-through">
                            {formatPrice(compareAtValue)}
                          </span>{" "}
                          as two single packs
                        </p>
                      ) : null}
                      <p className="mt-3 text-xs uppercase tracking-[0.18em] text-[var(--color-cream)]">
                        {detail.offerLine}
                      </p>
                      <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[var(--color-sky)]">
                        {detail.unitLine}
                      </p>
                    </div>

                    <div className="rounded-[1.6rem] border border-white/10 bg-[rgba(255,255,255,0.03)] p-5">
                      <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-cream)]">
                        Why pick this pack
                      </p>
                      <p className="mt-3 text-sm leading-7 text-[var(--color-mist)]">
                        {detail.choiceLine}
                      </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3">
                      {detail.trustPoints.map((item) => (
                        <div
                          key={item}
                          className="rounded-[1.2rem] border border-white/10 bg-[rgba(255,255,255,0.03)] px-4 py-3 text-xs uppercase tracking-[0.18em] text-[var(--color-mist)]"
                        >
                          {item}
                        </div>
                      ))}
                    </div>

                    <ul className="space-y-3 text-sm leading-7 text-[var(--color-mist)]">
                      {variant.benefits.map((benefit) => (
                        <li key={benefit} className="flex gap-3">
                          <span className="text-[var(--color-gold)]">+</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <Link
                        href={detailHref}
                        className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-cream)] transition hover:border-white/30 hover:bg-white/8"
                      >
                        View pack details
                      </Link>
                      <BuyButton
                        productId={variant.id}
                        label={`Buy ${variant.shortName} - ${variant.priceLabel}`}
                      />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[rgba(255,255,255,0.02)] py-18 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-sky)]">
              Compare packs
            </p>
            <h2 className="mt-4 font-display text-4xl uppercase tracking-[0.12em] text-[var(--color-cream)] sm:text-5xl">
              Fast side-by-side comparison.
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--color-mist)]">
              If you want the lightest starting point, go single. If you want
              both corners active and the stronger price-per-target value, go
              double.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-[2rem] border border-white/10 bg-[var(--color-panel)]">
            <div className="grid grid-cols-[0.9fr_1fr_1fr] border-b border-white/10 px-6 py-5 text-xs uppercase tracking-[0.24em] text-[var(--color-sky)]">
              <div>Pack</div>
              <div>Single</div>
              <div>Double</div>
            </div>

            {productCompareRows.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[0.9fr_1fr_1fr] gap-4 border-b border-white/10 px-6 py-5 last:border-b-0"
              >
                <div className="text-xs uppercase tracking-[0.22em] text-[var(--color-cream)]">
                  {row.label}
                </div>
                <div className="text-sm leading-7 text-[var(--color-mist)]">
                  {row.single}
                </div>
                <div className="text-sm leading-7 text-[var(--color-mist)]">
                  {row.double}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-18 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-24">
        <div className="rounded-[2rem] border border-white/10 bg-[var(--color-panel)] p-7">
          <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-sky)]">
            Need a quick answer?
          </p>
          <h2 className="mt-4 font-display text-4xl uppercase tracking-[0.12em] text-[var(--color-cream)] sm:text-5xl">
            Simple buying rule.
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--color-mist)]">
            <p>
              Choose <span className="text-[var(--color-cream)]">Single</span>{" "}
              if you want one live corner, the lighter starting price, and a
              pack that is easy to move between sessions.
            </p>
            <p>
              Choose <span className="text-[var(--color-cream)]">Double</span>{" "}
              if you want both corners ready at once, better value per target,
              and less resetting during finishing patterns.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/product/single"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-cream)] transition hover:border-white/30"
            >
              View single pack
            </Link>
            <Link
              href="/product/double"
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-gold)] bg-[var(--color-gold)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-ink)] transition hover:brightness-105"
            >
              View double pack
            </Link>
          </div>
        </div>

          <div className="grid gap-5">
          <div className="rounded-[2rem] border border-white/10 bg-[var(--color-panel)] p-7">
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-sky)]">
              Delivery and checkout
            </p>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-[var(--color-mist)]">
              {shippingFacts.map((fact) => (
                <li key={fact}>+ {fact}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[var(--color-panel)] p-7">
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-sky)]">
              Common questions
            </p>
            <div className="mt-6 space-y-4">
              {pageFaqItems.map((item) => (
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
