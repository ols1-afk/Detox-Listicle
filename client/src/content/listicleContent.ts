/**
 * All copy and assets for the listicle, kept as data rather than parsed out of
 * prose. Editing copy here cannot silently change how the page renders, and
 * adding a missing image is a one-line change to the relevant entry.
 */

export const PRODUCT_URL =
  "https://shopdetoxme.com/products/detoxme-weight-management-chitosan-1200mg";

export type ListicleImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Shown under the image when the visual is illustrative rather than photographic. */
  caption?: string;
  /**
   * Set for above-the-fold artwork. Such an image is the page's Largest
   * Contentful Paint element, so lazy-loading it delays the very thing the
   * visitor is waiting for.
   */
  priority?: boolean;
};

export type GradeComparison = {
  reject: { label: string; detail: string };
  accept: { label: string; detail: string };
};

export type Reason = {
  id: string;
  eyebrow: string;
  number: string;
  headline: string;
  image?: ListicleImage;
  body: string[];
  comparison?: GradeComparison;
  stats?: { value: string; label: string }[];
  closing?: string;
};

export const brand = "DetoxMe";

export const hero = {
  headline: "7 Reasons Women Over 40 Are Switching To DetoxMe Chitosan",
  subheadline: "(Besides Finally Shifting The Belly That Wouldn't Move)",
  body:
    "Doing everything right and the middle still won't budge? Whether the diets stopped working or the weight came straight back after the shots, here's why thousands of women are switching to DetoxMe.",
  cta: "Save Up To 70% OFF",
  socialProof: "10,000+ Reviews | 100,000+ Happy Customers",
  image: {
    src: "/images/hero-kitchen.webp",
    alt: "A woman in her forties standing in a bright kitchen, smiling and holding a bottle of DetoxMe High Absorption Chitosan.",
    width: 1402,
    height: 1122,
    priority: true,
  } as ListicleImage | undefined,
};

export const reasons: Reason[] = [
  {
    id: "cortisol-switch",
    eyebrow: "The Cortisol Switch",
    number: "01",
    headline: "Shut Off The Signal Telling Belly Fat To Stay Put",
    image: {
      src: "/images/cortisol-switch.webp",
      alt: "Two-panel diagram. Left: microplastic particles lodged in the gut lining with chemicals leaching out and the cortisol switch on. Right: chitosan capturing the particles with the cortisol switch off.",
      width: 1536,
      height: 1024,
      caption: "Conceptual mechanism illustration.",
    },
    body: [
      "Belly fat isn't like the rest of your body. It makes its own cortisol, right there in the tissue, using an enzyme called 11β-HSD1. And cortisol is the hormone that tells fat to stay exactly where it is.",
      "Microplastic particles get caught in the gut lining, and the chemicals seeping out of them drive that enzyme harder. DetoxMe binds those particles and carries them out before they're absorbed, so nothing is left driving the switch.",
    ],
  },
  {
    id: "magnetic-binding",
    eyebrow: "Magnetic Binding",
    number: "02",
    headline: "Pull The Particles Out Instead Of Just Avoiding More",
    image: {
      src: "/images/chitosan-beakers.webp",
      alt: "Side-by-side beakers. Left: cloudy water with microplastic particles suspended. Right: clear water with the particles bound into clumps settled at the bottom.",
      width: 1536,
      height: 1024,
      caption: "Conceptual illustration of binding.",
    },
    body: [
      "Switching to glass and filtering the water changes what arrives tomorrow. It does nothing about what's already lodged in your gut lining, seeping into you every day.",
      "Chitosan is one of the only fibres in nature carrying a positive charge, and microplastics carry a negative one. So it snaps onto them like a magnet, wraps them in a soft gel, and rolls through collecting more until the whole thing is far too big to be absorbed. Then it leaves in your stool.",
    ],
  },
  {
    id: "hormone-defence",
    eyebrow: "Hormone Defence",
    number: "03",
    headline: "Stop The Chemicals That Mimic Your Own Estrogen",
    image: {
      src: "/images/everyday-exposure.webp",
      alt: "Everyday kitchen scene highlighting takeaway containers, plastic food storage, a plastic chopping board, kitchen utensils, bottled water and plastic bowls as sources of microplastic exposure.",
      width: 1536,
      height: 1024,
    },
    body: [
      "The chemicals leaching from plastic are called phthalates and BPA, and they're shaped so closely to estrogen that your receptors can't tell them apart. Which lands hardest in your forties, right when your own estrogen is dropping and there's less of it competing.",
      "DetoxMe catches the particles in the gut before any of it reaches your bloodstream, so the interference stops at the door rather than being managed after the fact.",
    ],
  },
  {
    id: "steady-energy",
    eyebrow: "Steady Energy",
    number: "04",
    headline: "End The 3pm Crash That Sleep Doesn't Fix",
    image: {
      src: "/images/steady-energy.webp",
      alt: "A woman walking outdoors in the afternoon sunlight, beside a list of DetoxMe benefits: steady energy, clearer focus, a happy gut, healthy weight and natural detox.",
      width: 1254,
      height: 1254,
    },
    body: [
      "Cortisol is supposed to fall through the afternoon. When something keeps it elevated all day, the natural rhythm flattens out, which is why eight hours of sleep still leaves you flat by three.",
      "With the particles cleared and nothing driving the switch, cortisol follows the pattern it's meant to, and the afternoon stops being something to get through.",
    ],
  },
  {
    id: "pharmaceutical-grade",
    eyebrow: "Authentic Pharmaceutical Grade",
    number: "05",
    headline: 'Not "Cheap Fat Blocker" Like The Amazon Brands',
    // Rendered as markup rather than an image: it stays sharp at any size,
    // reads to screen readers, and needs no asset.
    comparison: {
      reject: { label: "Fat Blocker Grade", detail: "50-70% deacetylation" },
      accept: { label: "Pharmaceutical Grade", detail: "90%+ deacetylation" },
    },
    body: [
      "Most chitosan sold online is fat-blocker grade at 50 to 70% deacetylation. That number decides how strong the positive charge is, and at that level the charge is far too weak to hold onto anything. It passes straight through without binding a single particle.",
      "DetoxMe uses pharmaceutical-grade chitosan above 90% deacetylation, third-party tested. Which is the difference between chitosan that actually grips and chitosan that just sits in a capsule.",
    ],
  },
  {
    id: "perimenopause-factor",
    eyebrow: "The Perimenopause Factor",
    number: "06",
    headline: "Why This Started After 40 And Not Before",
    image: {
      src: "/images/estrogen-plastic-crossover.webp",
      alt: "Line graph showing estrogen levels falling with age while plastic exposure rises, the two lines crossing around age 40.",
      width: 1536,
      height: 1024,
      caption: "Conceptual illustration. Not based on direct clinical data.",
    },
    body: [
      "Estrogen kept that enzyme quiet for twenty years without you ever knowing it was there. As estrogen drops, that protection fades. And it fades at the exact moment plastic production has gone from 2 million tonnes a year to over 400 million.",
      "So the chemicals driving the enzyme up are arriving in higher volume than ever, right as the thing keeping it in check disappears. Nothing about your habits changed, which is why the same diet that worked at 32 does nothing at 47.",
    ],
  },
  {
    id: "loved-by-thousands",
    eyebrow: "Loved By Thousands",
    number: "07",
    headline: "Trusted By Over 100,000 Women",
    image: {
      src: "/images/customer-grid.webp",
      alt: "Grid of eight customers holding a bottle of DetoxMe High Absorption Chitosan.",
      width: 1402,
      height: 1122,
    },
    body: ["Real users, real results. Women who switched to DetoxMe report after 12 weeks:"],
    stats: [
      { value: "84%", label: "say the middle is no longer bigger at night than it was in the morning" },
      { value: "79%", label: "feel their clothes fitting differently" },
      { value: "76%", label: "notice the afternoon slump easing" },
      { value: "71%", label: "say the effort they put in finally shows" },
    ],
    closing:
      "With over 10,000 five-star reviews, DetoxMe is the choice for women who've done everything right and want to know why it stopped working.",
  },
];

export const trustBadges = [
  "Shellfish-Sourced",
  "Third-Party Tested",
  "No Stimulants",
  "90-Day Guarantee",
];

export const offer = {
  heading: "Clearing The Belly Made Simple",
  body:
    "Pharmaceutical-grade chitosan at 90%+ deacetylation, clinical dose, two capsules each morning. To clear the particles, stop the chemicals seeping in, and let the switch finally settle. Especially if you're over 40 and nothing else has worked.",
  image: {
    src: "/images/product-badges.webp",
    alt: "A bottle of DetoxMe High Absorption Chitosan, 1,200mg per serving, 60 capsules, alongside its four guarantees: shellfish-sourced premium marine-grade chitosan, third-party tested for purity and potency, 100% stimulant-free and non-habit forming, and a 90-day money-back guarantee.",
    width: 1536,
    height: 1024,
  } as ListicleImage | undefined,
  deal: "Buy 2 Get 1 Free For A Limited Time Only!",
  urgency: "This limited-time deal is in high demand and stock keeps selling out.",
  cta: "Save Up To 70% OFF",
  meta: ["Sell-Out Risk: High", "Free E-Book"],
  guarantee: "Try it today with a 90-Day Money Back Guarantee",
};

export type Review = {
  title: string;
  body: string;
  name: string;
  badge: string;
};

export const reviewsHeading = "Real Reviews From Women Who Finally Saw The Middle Move";

export const reviews: Review[] = [
  {
    title: "Jeans I hadn't worn in three years",
    body:
      "I'd tried everything. Keto, calorie counting, even the shots and it all came back. Three months on this and the jeans I'd put away actually button. I don't know what took me so long.",
    name: "Karen M.",
    badge: "Verified Purchase",
  },
  {
    title: "Finally an explanation that made sense",
    body:
      "Nobody had ever explained why my belly changed overnight at 43 when nothing else did. The bit about estrogen keeping the enzyme quiet, and that protection fading right as the chemicals ramped up, was the first thing that actually clicked.",
    name: "Diane R.",
    badge: "Verified Buyer",
  },
  {
    title: "I'd bought chitosan before and felt nothing",
    body:
      "Turns out the one I had was the cheap fat-blocker kind. Switched to this and noticed a difference in about four weeks. Wish I'd known about the deacetylation number years ago.",
    name: "Lisa P.",
    badge: "Verified Buyer",
  },
];

export const reviewSummary = {
  label: "Customer Reviews",
  score: "4.8",
  count: "10,284 reviews",
  cta: "Save 40% OFF + Free Shipping",
};

export const disclaimer =
  "Contains shellfish. Not suitable during pregnancy or when trying to conceive. Take separately from fat-soluble vitamins. These statements have not been evaluated by the FDA.";
