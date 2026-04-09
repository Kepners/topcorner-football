/* ------------------------------------------------------------------ */
/*  GA4 analytics helpers — topcorner.football                        */
/*  Only fires when NEXT_PUBLIC_GA_MEASUREMENT_ID is set.             */
/* ------------------------------------------------------------------ */

type GtagCommand = "config" | "event" | "js" | "set";

declare global {
  interface Window {
    gtag?: (...args: [GtagCommand, ...unknown[]]) => void;
    dataLayer?: unknown[];
  }
}

/* ---- Event name constants ---- */

export const GA_EVENTS = {
  PAGE_VIEW: "page_view",

  // Commercial pages
  HOME_PAGE_VIEW: "home_page_view",
  PRODUCT_PAGE_VIEW: "product_page_view",
  PRODUCT_DETAIL_VIEW: "product_detail_view",
  ABOUT_PAGE_VIEW: "about_page_view",
  FAQ_PAGE_VIEW: "faq_page_view",
  GUIDES_PAGE_VIEW: "guides_page_view",
  BLOG_PAGE_VIEW: "blog_page_view",
  SHIPPING_PAGE_VIEW: "shipping_page_view",
  RETURNS_PAGE_VIEW: "returns_page_view",

  // Funnel
  BEGIN_CHECKOUT: "begin_checkout",
  OUTBOUND_STRIPE_CLICK: "outbound_stripe_click",
  PURCHASE: "purchase",
} as const;

/* ---- Named page-view map (pathname → event name) ---- */

const PAGE_VIEW_MAP: Record<string, string> = {
  "/": GA_EVENTS.HOME_PAGE_VIEW,
  "/product": GA_EVENTS.PRODUCT_PAGE_VIEW,
  "/product/single": GA_EVENTS.PRODUCT_DETAIL_VIEW,
  "/product/double": GA_EVENTS.PRODUCT_DETAIL_VIEW,
  "/about": GA_EVENTS.ABOUT_PAGE_VIEW,
  "/faq": GA_EVENTS.FAQ_PAGE_VIEW,
  "/guides": GA_EVENTS.GUIDES_PAGE_VIEW,
  "/blog": GA_EVENTS.BLOG_PAGE_VIEW,
  "/shipping": GA_EVENTS.SHIPPING_PAGE_VIEW,
  "/returns": GA_EVENTS.RETURNS_PAGE_VIEW,
};

/* ---- Helpers ---- */

const isDev = process.env.NODE_ENV === "development";

function log(event: string, params?: Record<string, unknown>) {
  if (isDev) {
    console.debug("[GA4]", event, params ?? "");
  }
}

function gtag(...args: [GtagCommand, ...unknown[]]) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag(...args);
}

/* ---- Public API ---- */

/** Fire a named page-view event based on the current pathname. */
export function trackPageView(pathname: string) {
  const named = PAGE_VIEW_MAP[pathname];
  if (named) {
    log(named, { page_path: pathname });
    gtag("event", named, { page_path: pathname });
  }

  // For product detail pages with dynamic variants
  if (pathname.startsWith("/product/") && pathname !== "/product") {
    const variant = pathname.split("/").pop();
    if (variant && variant !== "corner-target") {
      log(GA_EVENTS.PRODUCT_DETAIL_VIEW, { page_path: pathname, variant });
      gtag("event", GA_EVENTS.PRODUCT_DETAIL_VIEW, {
        page_path: pathname,
        variant,
      });
    }
  }
}

/** Fire begin_checkout + outbound_stripe_click when a Buy button is clicked. */
export function trackBeginCheckout(product: {
  id: "single" | "double";
  name: string;
  price: number;
  currency?: string;
}) {
  const currency = product.currency ?? "GBP";
  const params = {
    currency,
    value: product.price,
    items: [
      {
        item_id: product.id,
        item_name: product.name,
        price: product.price,
        quantity: 1,
      },
    ],
  };

  log(GA_EVENTS.BEGIN_CHECKOUT, params);
  gtag("event", GA_EVENTS.BEGIN_CHECKOUT, params);

  const locationParams = {
    product_id: product.id,
    product_name: product.name,
    page_path: typeof window !== "undefined" ? window.location.pathname : "",
    page_url: typeof window !== "undefined" ? window.location.href : "",
    page_search: typeof window !== "undefined" ? window.location.search : "",
  };

  log(GA_EVENTS.OUTBOUND_STRIPE_CLICK, locationParams);
  gtag("event", GA_EVENTS.OUTBOUND_STRIPE_CLICK, locationParams);
}

/** Fire purchase event on the success page. Only call with real Stripe data. */
export function trackPurchase(data: {
  transaction_id: string;
  value: number;
  currency: string;
  items: Array<{
    item_id: string;
    item_name: string;
    price: number;
    quantity: number;
  }>;
}) {
  log(GA_EVENTS.PURCHASE, data);
  gtag("event", GA_EVENTS.PURCHASE, data);
}
