import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import BuyButton from "@/components/BuyButton";
import JsonLd from "@/components/JsonLd";
import {
  getProductVariantById,
  isProductVariantId,
  productDetailContent,
} from "@/content/products";
import { faqPageItems, productSpecs, productVariants, shippingFacts, siteConfig } from "@/content/site";
import { absoluteUrl, buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";

type ProductVariantPageProps = {
  params: Promise<{ variant: string }>;
};

function formatPrice(value: number) {
  return `GBP ${value}`;
}

function getImageClasses(fit?: "cover" | "contain", lightPanel?: boolean) {
  if (fit === "contain") {
    return `${lightPanel ? "bg-white " : ""}object-contain p-5`;
  }

  return "object-cover";
}

export function generateStaticParams() {
  return productVariants.map((variant) => ({ variant: variant.id }));
}

export async function generateMetadata({
  params,
}: ProductVariantPageProps): Promise<Metadata> {
  const { variant } = await params;

  if (!isProductVariantId(variant)) {
    return {};
  }

  const product = getProductVariantById(variant);
  const detail = productDetailContent[variant];

  if (!product) {
    return {};
  }

  return buildMetadata({
    title: `${product.shortName} Football Corner Target`,
    description: detail.metaDescription,
    path: `/product/${variant}`,
    keywords: [
      product.name.toLowerCase(),
      `${product.shortName.toLowerCase()} football corner target`,
      `${siteConfig.brand.toLowerCase()} ${variant} pack`,
      "football goal corner training target",
      "football corner target",
    ],
    image: detail.hero.src,
  });
}

export default async function ProductVariantPage({
  params,
}: ProductVariantPageProps) {
  const { variant } = await params;

  if (!isProductVariantId(variant)) {
    notFound();
  }

  const product = getProductVariantById(variant);

  if (!product) {
    notFound();
  }

  const detail = productDetailContent[variant];
  const otherVariantId = variant === "single" ? "double" : "single";
  const otherProduct = getProductVariantById(otherVariantId);
  const pageFaqItems = faqPageItems.slice(0, 4);
  const compareAtValue =
    variant === "double" ? (getProductVariantById("single")?.priceValue ?? 0) * 2 : null;

  if (!otherProduct) {
    notFound();
  }

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Products", path: "/product" },
    { name: product.name, path: `/product/${variant}` },
  ]);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    sku: product.sku,
    gtin13: product.gtin13,
    url: absoluteUrl(`/product/${variant}`),
    description: detail.metaDescription,
    brand: {
      "@type": "Brand",
      name: siteConfig.brand,
    },
    category: "Soccer training equipment",
    image: detail.gallery.map((image) => absoluteUrl(image.src)),
    offers: {
      "@type": "Offer",
      url: absoluteUrl(`/product/${variant}`),
      priceCurrency: "GBP",
      price: product.priceValue.toFixed(2),
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "Organization",
        name: siteConfig.name,
      },
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
    },
    additionalProperty: productSpecs.map((spec) => ({
      "@type": "PropertyValue",
      name: spec.label,
      value: spec.value,
    })),
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
      <JsonLd data={[breadcrumbSchema, productSchema, faqSchema]} />

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-24">
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.24em] text-[var(--color-sky)]">
          <Link href="/product" className="transition hover:text-[var(--color-cream)]">
            Products
          </Link>
          <span className="text-white/20">/</span>
          <span>{detail.eyebrow}</span>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.04fr_0.96fr]">
          <div className="space-y-5">
            <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-[var(--color-panel)]">
              <div className="pointer-events-none absolute right-4 top-4 z-10 flex h-24 w-24 items-center justify-center rounded-full border border-[var(--color-gold)]/60 bg-[rgba(8,10,13,0.88)] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-sm sm:h-28 sm:w-28">
                <div className="absolute inset-[6px] rounded-full border border-white/10" />
                <div className="relative h-7 w-16 sm:h-8 sm:w-[4.5rem]">
                  <Image
                    src="/images/brand/calciokx-wordmark.png"
                    alt="CalcioKx logo"
                    fill
                    sizes="112px"
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="relative aspect-[5/4]">
                <Image
                  src={detail.hero.src}
                  alt={detail.hero.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className={getImageClasses(detail.hero.fit, detail.hero.lightPanel)}
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {detail.gallery.slice(1, 3).map((image) => (
                <div
                  key={image.src}
                  className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-[var(--color-panel)]"
                >
                  <div className="relative aspect-square">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 640px) 24vw, 100vw"
                      className={getImageClasses(image.fit, image.lightPanel)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[2.2rem] border border-white/10 bg-[var(--color-panel)] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-[var(--color-sky)]">
                  {detail.eyebrow}
                </span>
                {product.badge ? (
                  <span className="rounded-full bg-[var(--color-gold)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-ink)]">
                    {product.badge}
                  </span>
                ) : null}
                {detail.savingsLine ? (
                  <span className="rounded-full border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/10 px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--color-gold)]">
                    {detail.savingsLine}
                  </span>
                ) : null}
              </div>

              <h1 className="mt-5 font-display text-5xl uppercase leading-[0.9] tracking-[0.08em] text-[var(--color-cream)] sm:text-6xl">
                {product.name}
              </h1>

              <p className="mt-4 text-base leading-8 text-[var(--color-mist)]">
                {product.tagline}
              </p>

              <div className="mt-6 rounded-[1.8rem] border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-sky)]">
                  Price
                </p>
                <p className="mt-3 font-display text-5xl uppercase tracking-[0.08em] text-[var(--color-gold)]">
                  {product.priceLabel}
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

              <p className="mt-6 text-sm leading-7 text-[var(--color-mist)]">
                {detail.choiceLine}
              </p>

              <div className="mt-6 grid gap-3">
                {detail.trustPoints.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.25rem] border border-white/10 bg-[rgba(255,255,255,0.03)] px-4 py-3 text-xs uppercase tracking-[0.18em] text-[var(--color-mist)]"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-7 grid gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-cream)]">
                    Included
                  </p>
                  <ul className="mt-3 space-y-2 text-sm leading-7 text-[var(--color-mist)]">
                    {product.contents.map((item) => (
                      <li key={item}>+ {item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-cream)]">
                    Best for
                  </p>
                  <ul className="mt-3 space-y-2 text-sm leading-7 text-[var(--color-mist)]">
                    {product.benefits.map((item) => (
                      <li key={item}>+ {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <BuyButton
                  productId={product.id}
                  label={`Buy ${product.shortName} - ${product.priceLabel}`}
                />
                <Link
                  href="/product"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-cream)] transition hover:border-white/30 hover:bg-white/8"
                >
                  Back to all packs
                </Link>
              </div>

              <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[var(--color-sky)]">
                Free UK shipping. UK checkout only. Secure Stripe payment.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[rgba(255,255,255,0.02)] py-18 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-sky)]">
              Product gallery
            </p>
            <h2 className="mt-4 font-display text-4xl uppercase tracking-[0.12em] text-[var(--color-cream)] sm:text-5xl">
              A closer look at the {product.shortName.toLowerCase()} pack.
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--color-mist)]">
              See the pack installed on the goal, viewed from distance, and
              broken down into the product details buyers usually check before
              they order.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {detail.gallery.map((image) => (
              <article
                key={image.src}
                className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-[var(--color-panel)]"
              >
                <div className="relative aspect-[5/4]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1280px) 28vw, (min-width: 768px) 44vw, 100vw"
                    className={getImageClasses(image.fit, image.lightPanel)}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-18 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-24">
        <div className="rounded-[2rem] border border-white/10 bg-[var(--color-panel)] p-7">
          <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-sky)]">
            Product details
          </p>
          <h2 className="mt-4 font-display text-4xl uppercase tracking-[0.12em] text-[var(--color-cream)] sm:text-5xl">
            What you check before buying.
          </h2>
          <dl className="mt-8 divide-y divide-white/10">
            {productSpecs.map((spec) => (
              <div key={spec.label} className="grid gap-3 py-4 sm:grid-cols-[0.42fr_0.58fr]">
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

        <div className="grid gap-5">
          <div className="rounded-[2rem] border border-white/10 bg-[var(--color-panel)] p-7">
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-sky)]">
              Delivery
            </p>
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
          </div>
        </div>
      </section>

      <section className="bg-[rgba(255,255,255,0.02)] py-18 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2.2rem] border border-white/10 bg-[var(--color-panel)] p-7 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-sky)]">
                  Also consider
                </p>
                <h2 className="mt-4 font-display text-4xl uppercase tracking-[0.12em] text-[var(--color-cream)] sm:text-5xl">
                  {detail.crossSell.title}
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--color-mist)]">
                  {detail.crossSell.body}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href={detail.crossSell.href}
                  className="inline-flex items-center justify-center rounded-full border border-[var(--color-gold)] bg-[var(--color-gold)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-ink)] transition hover:brightness-105"
                >
                  {detail.crossSell.label}
                </Link>
                <BuyButton
                  productId={otherProduct.id}
                  label={`Buy ${otherProduct.shortName} - ${otherProduct.priceLabel}`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
