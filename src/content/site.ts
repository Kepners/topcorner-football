export type ProductVariant = {
  id: "single" | "double";
  name: string;
  shortName: string;
  sku: string;
  gtin13: string;
  priceLabel: string;
  priceValue: number;
  description: string;
  tagline: string;
  image: string;
  badge?: string;
  contents: string[];
  benefits: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ProductReview = {
  id: string;
  author: string;
  role: string;
  rating: number;
  title: string;
  body: string;
  date: string;
  reviewedItem: string;
};

export const siteConfig = {
  name: "TopCorner.football",
  brand: "TopCorner",
  brandSchema: "TopCorner",
  domain: "topcorner.football",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.topcorner.football",
  description:
    "Football corner targets and shooting training aids for players and coaches who want sharper finishing, better drills, and faster setup sessions.",
  defaultOgImage: "/images/brand/topcorner-og.jpg",
  customerDemoVideo: "/videos/customer-training-demo.mp4",
  supportEmail: "orders@topcorner.football",
  locale: "en_GB",
};

export const merchantReturnPolicy = {
  returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
  returnWindowDays: 30,
  returnMethod: "https://schema.org/ReturnByMail",
  returnFees: "https://schema.org/FreeReturn",
};

export const productReviewSummary = {
  ratingValue: 4.8,
  reviewCount: 10,
};

export const trustHighlights = [
  "4.8/5 average rating from 10 launch reviews",
  "Built for repeatable top-corner finishing in solo and coach-led sessions",
  "Free UK shipping with a 2-5 working day delivery target",
  "30-day returns support with secure Stripe checkout",
];

export const productReviews: ProductReview[] = [
  {
    id: "review-2026-01",
    author: "Liam Carter",
    role: "Under-18 Coach, Northside FC",
    rating: 5,
    title: "Makes every striker rep clearer",
    body: "Our boys knew exactly where to finish because the target is obvious. It helped us build a cleaner finishing routine in 30-second blocks.",
    date: "2026-03-04",
    reviewedItem: "TopCorner Single Corner Target",
  },
  {
    id: "review-2026-02",
    author: "Maya Singh",
    role: "Player, U19 Academy",
    rating: 5,
    title: "Simple setup, noticeable progress",
    body: "I can do solo sessions without wondering if I am improving. The target tells me if my approach and contact improved since the last set.",
    date: "2026-03-06",
    reviewedItem: "TopCorner Double Corner Target",
  },
  {
    id: "review-2026-03",
    author: "Coach Daniel Price",
    role: "SFA Academy Lead Coach",
    rating: 4,
    title: "Good fit for coach-led sessions",
    body: "The double pack is practical for small groups. Players train both corners with much less reset time and better focus on finishing quality.",
    date: "2026-03-07",
    reviewedItem: "TopCorner Double Corner Target",
  },
  {
    id: "review-2026-04",
    author: "Sophie Hale",
    role: "Parent, Weekend Striker",
    rating: 5,
    title: "Perfect for home practice",
    body: "Before this setup, my daughter blasted away without structure. Now she tracks top-corner reps, keeps better body shape, and is more consistent.",
    date: "2026-03-08",
    reviewedItem: "TopCorner Single Corner Target",
  },
  {
    id: "review-2026-05",
    author: "Callum Reid",
    role: "Assistant Coach, Junior Academy",
    rating: 5,
    title: "Clear target, cleaner habits",
    body: "We used this in final-third drills and players stopped snatching at shots. The fixed corner cue improved decision-making and placement quality.",
    date: "2026-03-09",
    reviewedItem: "TopCorner Double Corner Target",
  },
  {
    id: "review-2026-06",
    author: "Aiden Murphy",
    role: "Grassroots Striker",
    rating: 5,
    title: "Good for quick solo reps",
    body: "I can set this up before school sessions and get quality finishing work done without overthinking targets.",
    date: "2026-03-09",
    reviewedItem: "TopCorner Single Corner Target",
  },
  {
    id: "review-2026-07",
    author: "Natalie Brooks",
    role: "Coach, Community FC",
    rating: 4,
    title: "Useful for small group drills",
    body: "It keeps players focused on placement and we lose less time resetting. Good value for youth technical sessions.",
    date: "2026-03-09",
    reviewedItem: "TopCorner Double Corner Target",
  },
  {
    id: "review-2026-08",
    author: "Ethan Cole",
    role: "Academy Midfielder",
    rating: 5,
    title: "Makes finishing targets obvious",
    body: "The visual cue is clear even at speed, which helped me keep my shots cleaner in cut-back and near-post patterns.",
    date: "2026-03-10",
    reviewedItem: "TopCorner Single Corner Target",
  },
  {
    id: "review-2026-09",
    author: "Rebecca Shaw",
    role: "Parent, U14 Player",
    rating: 5,
    title: "Easy to install at home",
    body: "Setup is quick and my son now does structured reps instead of random shooting. It has improved focus and consistency.",
    date: "2026-03-10",
    reviewedItem: "TopCorner Single Corner Target",
  },
  {
    id: "review-2026-10",
    author: "Tom Ellis",
    role: "Academy Coach",
    rating: 5,
    title: "Strong fit for finishing circuits",
    body: "Both corners live at once keeps drills flowing. The players respond well because the target standard is obvious every rep.",
    date: "2026-03-10",
    reviewedItem: "TopCorner Double Corner Target",
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/guides", label: "Guides" },
  { href: "/product", label: "Products" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
];

export const supportLinks = [
  { href: "/shipping", label: "Shipping" },
  { href: "/returns", label: "Returns" },
];

export const productVariants: ProductVariant[] = [
  {
    id: "single",
    name: "TopCorner Single Corner Target",
    shortName: "Single",
    sku: "5065017325008",
    gtin13: "5065017325008",
    priceLabel: "GBP 25",
    priceValue: 25,
    description:
      "A single top-corner target for focused repetition on one side of the goal.",
    tagline: "One corner. One clear target. Fast reps.",
    image: "/images/products/ckx-single-isolated.jpg",
    contents: [
      "1 curved corner target",
      "3 hook-and-loop fixing straps",
      "Storage bag",
    ],
    benefits: [
      "Best for solo sessions and technical finishing work",
      "Fits round and square posts",
      "Ready in under 2 minutes",
    ],
  },
  {
    id: "double",
    name: "TopCorner Double Corner Target",
    shortName: "Double",
    sku: "5065017325015",
    gtin13: "5065017325015",
    priceLabel: "GBP 40",
    priceValue: 40,
    description:
      "A pair of corner targets that lets strikers and coaches work both sides of the goal without resetting.",
    tagline: "Both corners covered for realistic finishing patterns.",
    image: "/images/products/ckx-double-pack.jpg",
    badge: "Most popular",
    contents: [
      "2 curved corner targets",
      "6 hook-and-loop fixing straps",
      "Storage bag",
    ],
    benefits: [
      "Best for striker groups and coached shooting circuits",
      "Train near-post and far-post finishing in one setup",
      "Cuts down reset time between patterns",
    ],
  },
];

export const heroHighlights = [
  "Used by players, coaches, and football parents",
  "Fits most football goals in under 2 minutes",
  "Free UK shipping and secure Stripe checkout",
];

export const problemPoints = [
  {
    title: "Players are told to aim top corner, but train with no real target",
    body:
      "Without a fixed visual cue, many reps become guesswork and players focus on power over placement.",
  },
  {
    title: "Generic drill setups slow sessions and dilute finishing focus",
    body:
      "Cones can guide movement, but they do not define the final strike point where technique quality is decided.",
  },
  {
    title: "Solo sessions need instant feedback to build good habits",
    body:
      "A visible target gives every strike a clear pass/fail signal, so adjustment between reps is immediate.",
  },
];

export const solutionPoints = [
  "Creates an immediate visual cue in the hardest area for keepers to reach",
  "Attaches with straps, so there is no drilling, tying, or hardware setup",
  "Works for finishing drills, free kicks, and solo repetition",
  "Packs away quickly after training",
];

export const howItWorksSteps = [
  {
    step: "01",
    title: "Attach to the goal",
    body:
      "Place the target where the crossbar meets the upright and fix it with the supplied straps.",
  },
  {
    step: "02",
    title: "Run your finishing pattern",
    body:
      "Use it for one-touch finishing, cut-backs, curlers, or free-kick reps with a clear point of aim.",
  },
  {
    step: "03",
    title: "Track cleaner repetition",
    body:
      "Every rep has a visible standard, which makes session feedback sharper for both players and coaches.",
  },
];

export const homeBenefits = [
  "Improve shooting accuracy with a visible target zone",
  "Train with a setup that feels closer to match finishing",
  "Fits most football goals used by clubs, schools, and home setups",
  "Easy to install, remove, and store between sessions",
];

export const useCases = [
  {
    title: "Players",
    body:
      "Improve finishing accuracy in solo sessions with one visible corner target and repeatable rep tracking.",
  },
  {
    title: "Coaches",
    body:
      "Run faster shooting drills with both corners active and less time lost resetting markers between patterns.",
  },
  {
    title: "Parents",
    body:
      "Turn a garden or local pitch goal into structured shooting practice that feels purposeful and easy to repeat.",
  },
  {
    title: "Clubs",
    body:
      "Ideal for grassroots clubs and academies running high-volume shooting drills with clear quality benchmarks.",
  },
];

export const homeFaqs: FaqItem[] = [
  {
    question: "How do football corner targets work?",
    answer:
      "They attach to the top corner of the goal and give players a clear finishing zone to aim for during shooting drills, free kicks, and solo practice.",
  },
  {
    question: "Do corner targets improve shooting accuracy?",
    answer:
      "They help because the player is no longer aiming at a vague part of the goal. A fixed visual target makes repetition more deliberate and easier to coach.",
  },
  {
    question: "Will it fit my football goal?",
    answer:
      "The TopCorner target is designed to fit most standard round and square football goals using adjustable straps.",
  },
  {
    question: "What age players can use it?",
    answer:
      "It works for youth players, teenagers, and adults. Coaches can scale the drill intensity and distance to suit the age group.",
  },
  {
    question: "Is this only for strikers?",
    answer:
      "No. It is useful for wingers, attacking midfielders, free-kick takers, and any player working on placement.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most users can attach the target and start training in under 2 minutes.",
  },
];

export const faqPageItems: FaqItem[] = [
  ...homeFaqs,
  {
    question: "Can coaches use it for team sessions?",
    answer:
      "Yes. The double pack is especially useful for team training because players can work both sides of the goal without constant resets.",
  },
  {
    question: "What is included with each order?",
    answer:
      "Each pack includes the target frame, fixing straps, and a storage bag. The double pack includes two targets.",
  },
  {
    question: "Where do you ship?",
    answer:
      "The current checkout flow is set up for United Kingdom delivery only, with free shipping included at checkout.",
  },
];

export const productSpecs = [
  { label: "Material", value: "PVC frame with mesh net pocket" },
  { label: "Attachment", value: "Hook-and-loop strap system" },
  { label: "Goal fit", value: "Most standard round and square posts" },
  { label: "Setup time", value: "Under 2 minutes" },
  { label: "Origin", value: "Designed in the United Kingdom" },
  { label: "Shipping", value: "Free United Kingdom shipping" },
];

export const shippingFacts = [
  "Free UK shipping is included at checkout",
  "Dispatch target: 1-2 working days after order confirmation",
  "Typical delivery window: 2-5 working days",
  "Checkout currently collects UK addresses only",
];

export const shippingHighlights = [
  {
    title: "Shipping cost",
    body: "Free UK shipping is included in checkout for both the single and double packs.",
  },
  {
    title: "Delivery area",
    body: "Checkout currently accepts United Kingdom delivery addresses only.",
  },
  {
    title: "Dispatch window",
    body: "Orders are typically packed and dispatched within 1-2 working days after payment.",
  },
];

export const returnsSupportSteps = [
  "Email orders@topcorner.football with your order number and the issue you need help with.",
  "Wait for support to confirm the next step before sending any product back.",
  "Use the same email address from checkout where possible so the order can be matched quickly.",
];

export const aboutPrinciples = [
  {
    title: "Specific practice beats vague repetition",
    body:
      "The brand is built around one idea: a player improves faster when the session gives a precise target and a repeatable standard.",
  },
  {
    title: "Setup should never kill training momentum",
    body:
      "If a tool takes too long to install, players and coaches stop using it. The product is designed to go on quickly and come off quickly.",
  },
  {
    title: "Football training gear should feel purposeful",
    body:
      "A focused training product earns its place when it solves a real problem and stays simple enough to use every week.",
  },
];

export const blogLeadIn = {
  title: "Training guides",
  body:
    "Read practical articles on shooting technique, finishing drills, and solo sessions built around sharper top-corner repetition.",
};
