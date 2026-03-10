import { productVariants, type ProductVariant } from "@/content/site";

export type ProductVariantId = ProductVariant["id"];

export type ProductGalleryImage = {
  src: string;
  alt: string;
  fit?: "cover" | "contain";
  lightPanel?: boolean;
};

type ProductDetailContent = {
  eyebrow: string;
  metaDescription: string;
  offerLine: string;
  unitLine: string;
  savingsLine?: string;
  choiceLine: string;
  trustPoints: string[];
  hero: ProductGalleryImage;
  gallery: ProductGalleryImage[];
  crossSell: {
    href: string;
    label: string;
    title: string;
    body: string;
  };
};

export const productDetailContent: Record<ProductVariantId, ProductDetailContent> = {
  single: {
    eyebrow: "Single pack",
    metaDescription:
      "Shop the TopCorner single corner target for solo finishing sessions, one live top-corner target, and fast setup on most football goals.",
    offerLine: "Best starting point for solo reps",
    unitLine: "One live corner for focused repetition",
    choiceLine:
      "Choose the single pack if you want the lower entry price and one fixed target for home practice, solo work, or coach-led finishing stations.",
    trustPoints: [
      "1 target, 3 fixing straps, and carry bag",
      "Free UK shipping included",
      "Dispatch target: 1-2 working days",
    ],
    hero: {
      src: "/images/products/ckx-single-isolated.jpg",
      alt: "TopCorner single corner target product shot on a light background",
    },
    gallery: [
      {
        src: "/images/products/ckx-single-isolated.jpg",
        alt: "TopCorner single corner target product shot on a light background",
      },
      {
        src: "/images/products/ckx-single-installed-front.png",
        alt: "Front installed view of the TopCorner single target fitted to the goal corner",
      },
      {
        src: "/images/products/ckx-single-installed-angle.png",
        alt: "Angled outdoor photo showing the TopCorner single target attached to the goal",
      },
      {
        src: "/images/products/ckx-single-installed-square.jpg",
        alt: "Square close-up photo of the TopCorner single target on the goal frame",
      },
      {
        src: "/images/products/ckx-pack-components.jpg",
        alt: "TopCorner single pack contents laid out with straps, frame pieces, and carry bag",
        fit: "cover",
      },
      {
        src: "/images/products/ckx-detail-corner.jpg",
        alt: "Close-up of the TopCorner corner joint and strap attachment detail",
      },
      {
        src: "/images/products/ckx-single-installed-portrait.jpg",
        alt: "Portrait field photo showing the full installed TopCorner single target and post",
      },
    ],
    crossSell: {
      href: "/product/double",
      label: "View double pack",
      title: "Want both corners live?",
      body:
        "Move up to the double pack when you want near-post and far-post patterns ready in the same session, with a GBP 10 saving against two singles.",
    },
  },
  double: {
    eyebrow: "Double pack",
    metaDescription:
      "Shop the TopCorner double corner target pack for coach-led sessions, both corners live at once, and better value for group finishing drills.",
    offerLine: "Most popular pack for coach-led and group sessions",
    unitLine: "GBP 20 per target when you buy the double pack",
    savingsLine: "Save GBP 10 compared with buying two single packs",
    choiceLine:
      "Choose the double pack if you want both corners active without resetting between patterns. Around 70% of launch buyers choose this option for striker groups and repeated finishing circuits.",
    trustPoints: [
      "2 targets, 6 fixing straps, and carry bag",
      "Free UK shipping included",
      "Dispatch target: 1-2 working days",
    ],
    hero: {
      src: "/images/products/ckx-double-pack.jpg",
      alt: "TopCorner double pack with both targets and carry bag on a light background",
    },
    gallery: [
      {
        src: "/images/products/ckx-double-pack.jpg",
        alt: "TopCorner double pack with both targets and carry bag on a light background",
      },
      {
        src: "/images/products/ckx-single-installed-front.png",
        alt: "Front installed view showing how the TopCorner target sits on the goal corner",
      },
      {
        src: "/images/products/ckx-single-installed-angle.png",
        alt: "Angled outdoor photo showing the TopCorner target fitted on the goal",
      },
      {
        src: "/images/products/ckx-single-installed-square.jpg",
        alt: "Square close-up of the TopCorner target on the goal frame during training setup",
      },
      {
        src: "/images/products/ckx-detail-corner.jpg",
        alt: "Close-up product detail of the TopCorner corner joint and strap section",
      },
      {
        src: "/images/products/ckx-single-installed-portrait.jpg",
        alt: "Portrait installed view of the TopCorner target on a full goal post",
      },
    ],
    crossSell: {
      href: "/product/single",
      label: "View single pack",
      title: "Only need one live corner?",
      body:
        "The single pack keeps the setup lighter for solo sessions, smaller spaces, and players who want one clear target at the lower starting price.",
    },
  },
};

export const productCompareRows = [
  {
    label: "Price",
    single: "GBP 25",
    double: "GBP 40",
  },
  {
    label: "In the pack",
    single: "1 target, 3 straps, carry bag",
    double: "2 targets, 6 straps, carry bag",
  },
  {
    label: "Best for",
    single: "Solo sessions and technical repetition",
    double: "Coach-led drills and striker groups",
  },
  {
    label: "Goal coverage",
    single: "One live corner at a time",
    double: "Both top corners active",
  },
  {
    label: "Value angle",
    single: "Lower starting price",
    double: "Save GBP 10 vs two singles",
  },
  {
    label: "Delivery",
    single: "Free UK shipping",
    double: "Free UK shipping",
  },
];

export function isProductVariantId(value: string): value is ProductVariantId {
  return productVariants.some((variant) => variant.id === value);
}

export function getProductVariantById(variantId: string) {
  return productVariants.find((variant) => variant.id === variantId);
}
