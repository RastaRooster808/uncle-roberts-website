/**
 * content.ts — single source of truth for editable site copy.
 *
 * This is the "This Week" / facts layer until there's a real owner-facing
 * admin panel (Phase 2, Supabase-backed). Whoever runs the market can edit
 * this file directly and redeploy (git push → GitHub Pages rebuilds), or
 * hand it to whoever maintains the site.
 *
 * Every entry below is flagged VERIFIED (sourced from public listings /
 * photos of the actual market) or PLACEHOLDER (needs the family/market
 * staff to confirm or provide real material). Nothing here should be
 * treated as confirmed fact until a PLACEHOLDER is replaced.
 */

export const SITE = {
  address: '12-5038 Kalapana-Kapoho Beach Rd, Pāhoa, HI 96778', // VERIFIED — public listing
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('12-5038 Kalapana-Kapoho Beach Rd, Pāhoa, HI 96778'),
  facebookUrl: 'https://www.facebook.com/pages/Kalapana-uncle-Roberts-awa-bar/148739125185258', // VERIFIED
  instagramHandle: '@kaimu.community.makeke', // VERIFIED — from the market's own Instagram QR share screen
  instagramUrl: 'https://www.instagram.com/kaimu.community.makeke/', // VERIFIED
};

/** VERIFIED — read directly off the market's Instagram profile/bio screen. */
export const VISITOR_NOTES = [
  'Cash is safest — the market currently cannot process any SNAP/EBT transactions.',
];

export interface WeekRow {
  time: string;
  what: string;
}

export interface MarketDay {
  day: string;
  badge: string;
  rows: WeekRow[];
  cover: string;
  note: string;
  photo?: { src: string; alt: string };
}

export const MARKET_DAYS: MarketDay[] = [
  {
    day: 'Wednesday Night',
    badge: 'Wednesday · Kalapana',
    rows: [
      { time: '~4pm', what: 'Market opens — food, produce, crafts' }, // VERIFIED (general window)
      { time: '~6–9pm', what: 'Live music & dancing' }, // VERIFIED
      { time: '~10pm', what: 'Winds down' }, // VERIFIED (general window)
    ],
    cover: 'Varies — check Facebook for this week', // PLACEHOLDER — needs current confirmation
    note:
      "Hours, cover charge, and who's playing shift week to week. This panel is meant to be edited directly by whoever runs the market — until then, confirm on Facebook before you head out.",
    photo: {
      src: './images/live-music-band.jpg',
      alt: 'A live band playing guitar, mandolin, and upright bass under the awa bar pavilion, with the Hawaiʻi state flag behind them',
    },
  },
  {
    day: 'Saturday Market',
    badge: 'Saturday · 8am–12pm',
    rows: [
      { time: '8am–12pm', what: 'Farmers market — produce, crafts, plate lunch' }, // VERIFIED — confirmed directly
    ],
    cover: 'Free to browse the market',
    note: 'A quieter, daytime version of the market — no live music set, just produce, crafts, and food.',
  },
];

export type SourceTag = 'Documented History' | 'Family Oral History' | 'Later Development';

export interface TimelineNode {
  year: string;
  title: string;
  body: string;
  tag: SourceTag;
  /** True where a specific detail still needs the family to confirm or expand. */
  needsFamilyInput?: boolean;
}

/**
 * Sourced from independent research (see SOURCES below), cross-checked
 * against the family-provided outline. Tagged the way the family asked:
 * documented history vs. family oral history vs. later institutional
 * growth. Where a specific detail (a name, an exact date, an internal
 * decision) couldn't be independently confirmed, it's flagged
 * `needsFamilyInput` rather than stated as settled fact — the family
 * should review and correct every node here before this is called final.
 */
export const STORY_TIMELINE: TimelineNode[] = [
  {
    year: '1823',
    title: 'Kalapana, documented',
    body: 'Missionary William Ellis toured Hawaiʻi Island, passing through the Kaimū/Puna coast and recording one of the earliest written outside accounts of the area — part of a much older Hawaiian settlement landscape of fishing, farming, and canoe travel.',
    tag: 'Documented History',
  },
  {
    year: '1939',
    title: 'Robert Poʻokapu Keliʻihoʻomalu Sr. is born',
    body: 'Raised in the Kalapana/Kaimū area in a rural community where families fished, farmed, hunted, and leaned on ʻohana.',
    tag: 'Family Oral History',
  },
  {
    year: '1955–1958',
    title: 'Kaimū, then Pāhoa High',
    body: 'The family moved to Kaimū in 1955; Robert graduated Pāhoa High School in 1958.',
    tag: 'Family Oral History',
  },
  {
    year: 'Early 1960s',
    title: 'Army service, then home',
    body: 'Served in the U.S. Army, returned to Hawaiʻi in the early 1960s, and worked as a truck driver and later for Hawaiʻi County.',
    tag: 'Documented History',
  },
  {
    year: '1960s–1980s',
    title: 'A respected elder',
    body: 'Known throughout Puna as a farmer, veteran, county worker, Hawaiian sovereignty advocate, and kupuna — his home already a place where people were welcomed and fed.',
    tag: 'Documented History',
  },
  {
    year: '1990',
    title: "Pele's line stops at the driveway",
    body: 'Lava flows destroyed most of Kalapana and Kaimū, displacing roughly 500 people. The Keliʻihoʻomalu family home was one of the few spared — family accounts describe the flow turning away near the property where his wife, Kawehilani, had prayed.',
    tag: 'Documented History',
  },
  {
    year: 'Early 1990s–2000s',
    title: 'A small outlet, then the Awa Bar',
    body: 'After years rebuilding, Robert opened a small roadside outlet on the family property that grew into Uncle Robert\'s Awa (Kava) Bar, with live Hawaiian music.',
    tag: 'Later Development',
  },
  {
    year: '2006',
    title: 'Kalapana Cultural Tours',
    body: 'Two of his grandsons founded Kalapana Cultural Tours from the same property, guiding visitors to the active lava flow by hike and boat — bringing a new audience to the compound.',
    tag: 'Later Development',
  },
  {
    year: 'Early–mid 2010s',
    title: 'The market and Wednesday night',
    body: 'The farmers market and Wednesday-night music gathering grew up around the awa bar organically — family and friends supplying the labor, music, and infrastructure. Exactly who built what and when is a detail still owed to the family to confirm.',
    tag: 'Later Development',
    needsFamilyInput: true,
  },
  {
    year: '2010s',
    title: 'A rare surviving gathering place',
    body: 'Press and scholarship increasingly described the compound as one of the few surviving centers of community life in a coastline otherwise reshaped by lava.',
    tag: 'Documented History',
  },
  {
    year: 'February 15, 2015',
    title: 'Uncle Robert passes',
    body: 'Robert Keliʻihoʻomalu died at home in Kaimū. A three-day memorial at the family residence drew thousands, his memory was honored on the Hawaiʻi Senate floor, and he was buried on the family property.',
    tag: 'Documented History',
  },
  {
    year: '2015–Today',
    title: 'The ʻohana continues it',
    body: 'His children and grandchildren have kept the Wednesday market, music, and awa bar going in his memory — still ʻohana-run, still welcoming whoever shows up.',
    tag: 'Later Development',
  },
];

export interface Source {
  label: string;
  url: string;
}

/** Independent sources used to verify the timeline above. */
export const SOURCES: Source[] = [
  { label: 'WikiTree — Robert Keliihoomalu (abt. 1939–2015)', url: 'https://www.wikitree.com/wiki/Keliihoomalu-8' },
  { label: 'Big Island Video News — Memory of Uncle Robert Honored on Senate Floor (2015)', url: 'https://www.bigislandvideonews.com/2015/02/20/video-memory-of-uncle-robert-honored-on-senate-floor/' },
  { label: 'Keola Magazine — Talking Story with Uncle Robert Keliʻihoʻomalu', url: 'https://keolamagazine.com/people/uncle-robert-keliihoomalu/' },
  { label: "SFGate — Hawaii's Uncle Robert's Awa Bar is 'different than any other place'", url: 'https://www.sfgate.com/hawaii/article/hawaii-uncle-robert-awa-bar-big-island-17858327.php' },
  { label: 'The Washington Post — "Hole Where the Lava Missed" (2005)', url: 'https://www.washingtonpost.com/archive/politics/2005/10/09/hole-where-the-lava-missed/35e9e9f4-327f-4138-a1e2-22ddf49d3af8/' },
  { label: 'Hawaiian Memorial Park Mortuary — Robert Keliihoomalu obituary', url: 'https://www.hawaiianmemorialparkmortuary.com/obituaries/robert-keliihoomalu/obituary' },
  { label: 'HAWAIʻI Magazine — An Unforgettable Journey to Kalapana to See the Lava', url: 'https://www.hawaiimagazine.com/an-unforgettable-journey-to-kalapana-on-the-big-island-of-hawaii-to-see-the-lava/' },
  { label: 'West Hawaii Today — Hoʻolauleʻa in Kalapana (2013)', url: 'https://www.westhawaiitoday.com/2013/06/25/features/hoolaulea-in-kalapana/' },
];

export interface VendorCard {
  name: string;
  category: string;
  desc: string;
}

/**
 * PLACEHOLDER — example structure only. Real vendor list should come from
 * market staff; this is not a claim that these vendors are actually there.
 */
export const VENDOR_EXAMPLES: VendorCard[] = [
  { name: 'Example: Plate Lunch Vendor', category: 'Hawaiian', desc: 'Placeholder card — swap in a real vendor profile.' },
  { name: 'Example: Produce Table', category: 'Local Produce', desc: 'Placeholder card — swap in a real vendor profile.' },
  { name: 'Example: Smoothie Stand', category: 'Drinks', desc: 'Placeholder card — swap in a real vendor profile.' },
];

export interface MarketPhoto {
  src: string;
  alt: string;
  caption: string;
}

/** VERIFIED — real photos from the Saturday market (8am–12pm), confirmed by the person who shared them. */
export const MARKET_PHOTOS: MarketPhoto[] = [
  {
    src: './images/saturday-market-table.jpg',
    alt: 'Produce and handmade crafts on tables at the Saturday market',
    caption: 'Saturday market, 8am–12pm — produce and local crafts',
  },
  {
    src: './images/saturday-market-merch.jpg',
    alt: 'Tie-dye and Kalapana-themed t-shirts hanging at a vendor tent',
    caption: 'Local apparel at a Saturday vendor tent',
  },
  {
    src: './images/vendor-cards.jpg',
    alt: 'A vendor selling hand-painted greeting cards and framed art',
    caption: 'Hand-painted greeting cards and art, market day',
  },
  {
    src: './images/vendor-hats.jpg',
    alt: 'A vendor table covered in hats alongside local artwork',
    caption: 'One of the craft and apparel tents',
  },
];

export const AINA_GUIDANCE = [
  'Respect the land — this coastline is still reshaping itself; stay on marked paths.',
  'Respect residents — this is a living neighborhood, not a stage.',
  "Respect ʻohana — you're a guest at someone's gathering, not a customer at an attraction.",
  'Ask before photographing people, especially kūpuna and keiki.',
  'Pack out what you bring in.',
  'Follow posted parking and access directions.',
  'Be pono.',
];
