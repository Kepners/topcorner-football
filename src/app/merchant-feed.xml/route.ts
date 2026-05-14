import { NextResponse } from "next/server";

import { productDetailContent } from "@/content/products";
import { productVariants, siteConfig } from "@/content/site";
import { absoluteUrl } from "@/lib/seo";

const GOOGLE_PRODUCT_CATEGORY =
  "Sporting Goods > Athletics > Soccer > Soccer Goal Accessories";
const PRODUCT_TYPE = "Football Training Equipment > Goal Targets";

function escapeXml(value: string | number) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function buildAdditionalImages(productId: keyof typeof productDetailContent) {
  return productDetailContent[productId].gallery
    .slice(0, 3)
    .map((image) => {
      return `<g:additional_image_link>${escapeXml(absoluteUrl(image.src))}</g:additional_image_link>`;
    })
    .join("\n");
}

function buildItem(product: (typeof productVariants)[number]) {
  const detail = productDetailContent[product.id];
  const description = `${product.description} Includes ${product.contents.join(
    ", ",
  )}. Fits most round and square goal posts with fast hook-and-loop straps.`;

  return `
  <item>
    <g:id>${escapeXml(product.sku)}</g:id>
    <g:title>${escapeXml(`${product.name} - Football Goal Shooting Target`)}</g:title>
    <g:description>${escapeXml(description)}</g:description>
    <g:link>${escapeXml(absoluteUrl(`/product/${product.id}`))}</g:link>
    <g:image_link>${escapeXml(absoluteUrl(detail.hero.src))}</g:image_link>
${buildAdditionalImages(product.id)}
    <g:availability>in_stock</g:availability>
    <g:price>${escapeXml(`${product.priceValue.toFixed(2)} GBP`)}</g:price>
    <g:condition>new</g:condition>
    <g:brand>${escapeXml(siteConfig.brand)}</g:brand>
    <g:gtin>${escapeXml(product.gtin13)}</g:gtin>
    <g:mpn>${escapeXml(product.sku)}</g:mpn>
    <g:google_product_category>${escapeXml(GOOGLE_PRODUCT_CATEGORY)}</g:google_product_category>
    <g:product_type>${escapeXml(PRODUCT_TYPE)}</g:product_type>
    <g:shipping>
      <g:country>GB</g:country>
      <g:service>Standard UK delivery</g:service>
      <g:price>5.00 GBP</g:price>
    </g:shipping>
  </item>`;
}

export function GET() {
  const updatedAt = "2026-05-14T00:00:00+00:00";
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
<channel>
  <title>${escapeXml(`${siteConfig.name} Product Feed`)}</title>
  <link>${escapeXml(siteConfig.url)}</link>
  <description>${escapeXml(siteConfig.description)}</description>
  <lastBuildDate>${updatedAt}</lastBuildDate>
${productVariants.map(buildItem).join("\n")}
</channel>
</rss>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
