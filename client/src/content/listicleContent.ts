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

export type Reason = {
  id: string;
  eyebrow: string;
  /** Absent on the unnumbered social proof block that follows the seven. */
  number?: string;
  headline: string;
  image?: ListicleImage;
  body: string[];
  stats?: { value: string; label: string }[];
  closing?: string;
};

export const brand = "DetoxMe";

export const hero = {
  headline: "7 Reasons Women Over 40 Are Switching To DetoxMe Chitosan",
  subheadline: "(Besides Finally Shifting The Belly That Wouldn't Move)",
  body:
    "Doing everything right and the middle still won't budge? Whether the diets stopped working or the weight came straight back after the shots, here's why thousands of women are switching to DetoxMe.",
  cta: "Save Up To 40% OFF",
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
    id: "obesogen-problem",
    eyebrow: "The Obesogen Problem",
    number: "01",
    headline: "The Chemicals In Plastic Are Driving The Pooch",
    image: {
      src: "/images/obesogens.webp",
      alt: "Diagram titled: what are microplastics doing to your weight? Three panels show plastic chemicals creating new fat cells, making existing fat cells bigger, and interfering with the hunger signal between the gut and the brain.",
      width: 1024,
      height: 1024,
      caption: "Conceptual mechanism illustration.",
    },
    body: [
      "Researchers call them obesogens. And the name is exactly what it sounds like, because these chemicals push the body to store fat regardless of how many calories are eaten.",
      "They're what make plastic soft or hard, but they don't stay in the plastic… They seep out of food packaging, water bottles, kitchen utensils, non-stick pans, even the plastic paint on the caps of glass bottles.",
      "So the calories and diets were never the problem. It was what's quietly hijacking the hormones.",
    ],
  },
  {
    id: "perimenopause-factor",
    eyebrow: "The Perimenopause Factor",
    number: "02",
    headline: "But Why At 40 And Not Before",
    image: {
      src: "/images/estrogen-receptors.webp",
      alt: "Two-panel comparison. Left, pre-menopause with estrogen high: estrogen molecules bind to hormone receptors, supporting healthy metabolism, mood, sleep and energy. Right, menopause with estrogen low: obesogens mimic estrogen and bind to those same receptors, disrupting hormonal balance.",
      width: 1536,
      height: 1024,
      caption: "Conceptual mechanism illustration.",
    },
    body: [
      "We've all been exposed to plastic chemicals our entire lives.",
      "But estrogen acts like a shield against these chemicals, by slotting into our natural receptors. So when estrogen falls, this shield thins and the nasty plastic chemicals can slot into the receptors estrogen used to connect to.",
      "It's why the pooch seems to appear overnight, because the protection is gone.",
    ],
  },
  {
    id: "impossible-to-avoid",
    eyebrow: "Impossible To Avoid",
    number: "03",
    headline: "Why Being Careful Isn't Enough",
    image: {
      src: "/images/everyday-exposure.webp",
      alt: "Everyday kitchen scene highlighting takeaway containers, plastic food storage, a plastic chopping board, kitchen utensils, bottled water and plastic bowls as sources of microplastic exposure.",
      width: 1536,
      height: 1024,
    },
    body: [
      "June 2025 the French food safety agency tested drinks in glass bottles against the same drinks in plastic, expecting glass to come out cleaner.",
      "But it didn't… Glass bottled cola, iced tea and beer came back at 100 particles per litre, five times higher than the plastic.",
      "So it was never about being careful enough. These chemicals are in the air in the kitchen, in the dust on the counter and in the food before it's bought.",
    ],
  },
  {
    id: "fat-gate",
    eyebrow: "The Fat Gate",
    number: "04",
    headline: "They Tell The Body To Build Fat Cells It Doesn't Need",
    image: {
      src: "/images/fat-gate.webp",
      alt: "Three panels titled how obesogens make weight loss so hard. They turn stem cells into fat cells no matter what, they slow down the fat-burning process, and fat gets in but can't get out.",
      width: 1535,
      height: 1024,
      caption: "Conceptual mechanism illustration.",
    },
    body: [
      "Normally the body only makes new fat cells when the existing ones are full.",
      "But obesogens push stem cells into becoming fat cells regardless of what's being eaten. So the body has more fat cells to be filled in the first place.",
      "And these chemicals slow the process that breaks stored fat back down for energy.",
      "So it's like opening the fat floodgates to let it in but not letting it out.",
      "And it's why the diets and exercise feel useless, because your fat cells are being chemically tricked.",
    ],
  },
  {
    id: "fullness-signal",
    eyebrow: "The Fullness Signal",
    number: "05",
    headline: "The 11pm Pantry Trip Isn't Willpower",
    image: {
      src: "/images/fullness-signal.webp",
      alt: "Three panels titled the 11pm pantry trip isn't willpower. Leptin sends the full signal to the brain, leptin does its job as a woman waves away snacks, then obesogens block the signal so it never arrives.",
      width: 1536,
      height: 1024,
      caption: "Conceptual mechanism illustration.",
    },
    body: [
      "Leptin is the hormone that tells the brain you've had enough.",
      "It's the reason someone can have their favourite snack put in front of them and feel almost sick looking at it. That's leptin doing its job.",
      "But obesogens interfere with the brain reading that signal.",
      "Which is why the pantry at eleven at night is a real thing that happens to women who ate a full dinner just hours earlier.",
      "So it was never a discipline problem. It's a signal that got blocked on the way up.",
    ],
  },
  {
    id: "japan-study",
    eyebrow: "The 2025 Japan Study",
    number: "06",
    headline: "Researchers Tested Everything",
    image: {
      src: "/images/chitosan-beakers.webp",
      alt: "Side-by-side beakers. Left: cloudy water with microplastic particles suspended. Right: clear water with the particles bound into clumps settled at the bottom.",
      width: 1536,
      height: 1024,
      caption: "Conceptual illustration of binding.",
    },
    body: [
      "In 2025 a Japanese research team tested everything against these microplastic particles to try to remove the chemicals they leach.",
      "The only solution was a natural fibre from shellfish called chitosan.",
      "And it cleared 115.6%. More came out than had gone in, which means it was pulling out particles that were already sitting in the body.",
      "And the reason is charge. Microplastic particles carry a negative one but chitosan carries a positive one, so it snaps onto them like a magnet.",
      "Collecting more as it travels through the body until it's far too big to be absorbed and gets removed in the stool.",
    ],
  },
  {
    id: "the-results",
    eyebrow: "The Results",
    number: "07",
    headline: "Results That Matter",
    body: [
      "Removing obesogens before they can absorb means fewer new fat cells, proper burning of existing stored fat and less cravings for unnecessary calories.",
      "So the stubborn pooch finally shifts, the excess arm and thigh fat drops and you no longer find yourself in the pantry at 11pm.",
      "Because finally the sneaky chemicals blocking progress are being flushed out before they have a chance to disrupt the body.",
    ],
  },
];

/**
 * Social proof, shown after the seven numbered reasons rather than as one of
 * them. It carries no number for that reason.
 */
export const lovedByThousands: Reason = {
    id: "loved-by-thousands",
    eyebrow: "Loved By Thousands",
    headline: "Trusted By Over 100,000 Women",
    image: {
      src: "/images/customer-grid.webp",
      alt: "Grid of eight customers holding a bottle of DetoxMe High Absorption Chitosan.",
      width: 1402,
      height: 1122,
    },
    body: ["Women who switched to DetoxMe report after 12 weeks:"],
    stats: [
      { value: "84%", label: "say the middle is no longer bigger at night than it was in the morning" },
      { value: "79%", label: "feel their clothes fitting differently" },
      { value: "76%", label: "notice the afternoon slump easing" },
      { value: "71%", label: "say the effort they put in finally shows" },
    ],
    closing:
      "With over 10,000 five-star reviews, DetoxMe is the choice for women who've done everything right and want to know why it stopped working.",
  };

export const trustBadges = [
  "Shellfish-Sourced",
  "Third-Party Tested",
  "No Stimulants",
  "90-Day Guarantee",
];

export const offer = {
  heading: "Clearing The Belly Made Simple",
  body: [
    "Chitosan at a studied dose, two capsules each morning with water. To catch the particles before they're absorbed, so the chemicals stop giving orders.",
    "Especially if you're over 40 and nothing else has worked.",
  ],
  image: {
    src: "/images/product-badges.webp",
    alt: "A bottle of DetoxMe High Absorption Chitosan, 1,200mg per serving, 60 capsules, alongside its four guarantees: shellfish-sourced premium marine-grade chitosan, third-party tested for purity and potency, 100% stimulant-free and non-habit forming, and a 90-day money-back guarantee.",
    width: 1536,
    height: 1024,
  } as ListicleImage | undefined,
  cta: "Save Up To 40% OFF",
  guarantee: "Try it today with a 90-Day Money Back Guarantee",
};

export type Review = {
  title: string;
  body: string;
  name: string;
  badge: string;
  image?: ListicleImage;
};

export const reviewsHeading = "Real Reviews From Women Who Finally Saw The Middle Move";

export const reviews: Review[] = [
  {
    title: "Jeans I hadn't worn in three years",
    body:
      "I'd tried everything. Keto, calorie counting, even the shots and it all came back. Three months on this and the jeans I'd put away actually button. I don't know what took me so long.",
    image: {
      src: "/images/review-karen.jpg",
      alt: "Karen's before and after side-view photographs, showing a reduction around the midsection.",
      width: 1080,
      height: 1080,
    },
    name: "Karen M.",
    badge: "Verified Purchase",
  },
  {
    title: "Finally an explanation that made sense",
    body:
      "Nobody had ever explained why my belly changed overnight at 43 when nothing else did. The bit about estrogen keeping the enzyme quiet, and that protection fading right as the chemicals ramped up, was the first thing that actually clicked.",
    image: {
      src: "/images/review-diane.jpg",
      alt: "Diane's before and after front-view photographs, showing a reduction around the midsection.",
      width: 554,
      height: 554,
    },
    name: "Diane R.",
    badge: "Verified Buyer",
  },
  {
    title: "I'd bought chitosan before and felt nothing",
    body:
      "Turns out the one I had was the cheap fat-blocker kind. Switched to this and noticed a difference in about four weeks. Wish I'd known about the deacetylation number years ago.",
    image: {
      src: "/images/review-lisa.webp",
      alt: "Lisa's before and after side-view photographs, showing a reduction around the midsection.",
      width: 700,
      height: 469,
    },
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
