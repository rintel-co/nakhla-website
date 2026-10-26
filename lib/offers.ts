import { phrase, type Phrase } from "@/lib/i18n/phrase";

export type OfferBanner = {
  src: string;
  alt: Phrase;
  href?: string;
};

/** Leaflet covers for /offers. A banner without href is shown, not linked. */
export const offerBanners: OfferBanner[] = [
  {
    src: "https://bf1af2.akinoncloudcdn.com/cms/2026/10/20/727b88b0-9681-4b15-bc29-5d84e88831b6_size1920_cropCenter.jpg",
    href: "https://www.calameo.com/lulu/read/002539577f8d166055996?utm_campaign=48&utm_medium=bitly&utm_source=WP-FB-Official_AR%26EN",
    alt: phrase("7 Days Big Deal, 21 to 27 October 2026", "صفقة 7 أيام، من 21 إلى 27 أكتوبر 2026"),
  },
  {
    src: "https://bf1af2.akinoncloudcdn.com/cms/2026/10/20/8703c954-ccce-41dd-985a-1cced6ef48c9_size1920_cropCenter.jpg",
    href: "https://www.calameo.com/lulu/read/0025395778b622ba5859e",
    alt: phrase("4 Days Price Storm, 21 to 24 October 2026", "عاصفة الأسعار لمدة 4 أيام، من 21 إلى 24 أكتوبر 2026"),
  },
  {
    src: "https://bf1af2.akinoncloudcdn.com/cms/2026/08/31/80bb9c0b-f774-4d2d-ae73-94a8e4e17bc3_size1920_cropCenter.jpg",
    alt: phrase("LuLu Hypermarket now open near Haramain Train Station, Madinah", "لولو هايبرماركت الآن مفتوح قرب محطة قطار الحرمين في المدينة المنورة"),
  },
];

export type WeeklyOffer = {
  branch: string;
  weekStart: string;
  weekLabel: string;
  slug: string;
  percent: number;
};

export const weeklyOffers: WeeklyOffer[] = [
  { branch: "Riyadh HQ", weekStart: "2026-10-05", weekLabel: "5–11 Oct 2026", slug: "bhai-bhai-indian-sella-rice-40-kg", percent: 8 },
  { branch: "Riyadh HQ", weekStart: "2026-10-05", weekLabel: "5–11 Oct 2026", slug: "al-azima-sweet-corn-dura-24x340", percent: 12 },
  { branch: "Riyadh HQ", weekStart: "2026-10-05", weekLabel: "5–11 Oct 2026", slug: "al-azima-extra-virgin-olive-oil-12x250", percent: 10 },
  { branch: "Riyadh HQ", weekStart: "2026-09-28", weekLabel: "28 Sep–4 Oct 2026", slug: "al-azima-baked-beans-24x400", percent: 6 },

  { branch: "Riyadh", weekStart: "2026-10-05", weekLabel: "5–11 Oct 2026", slug: "kaneez-premium-rice-40kg", percent: 9 },
  { branch: "Riyadh", weekStart: "2026-10-05", weekLabel: "5–11 Oct 2026", slug: "al-azima-foul-mudammes-24x400", percent: 11 },
  { branch: "Riyadh", weekStart: "2026-10-05", weekLabel: "5–11 Oct 2026", slug: "fresh-basil-seed-drink-mango-24x290", percent: 15 },
  { branch: "Riyadh", weekStart: "2026-09-28", weekLabel: "28 Sep–4 Oct 2026", slug: "al-azima-hot-sauce-12x474", percent: 7 },

  { branch: "Aziziyah", weekStart: "2026-10-05", weekLabel: "5–11 Oct 2026", slug: "al-azima-chick-peas-glass-12x580", percent: 10 },
  { branch: "Aziziyah", weekStart: "2026-10-05", weekLabel: "5–11 Oct 2026", slug: "al-azima-sugar-coarse-10kg", percent: 5 },
  { branch: "Aziziyah", weekStart: "2026-10-05", weekLabel: "5–11 Oct 2026", slug: "al-azima-turmeric-pwdr-6x200", percent: 14 },
  { branch: "Aziziyah", weekStart: "2026-09-28", weekLabel: "28 Sep–4 Oct 2026", slug: "al-azima-cumin-pwdr-6x100", percent: 8 },

  { branch: "Dammam", weekStart: "2026-10-05", weekLabel: "5–11 Oct 2026", slug: "al-azima-green-peas-24x400", percent: 12 },
  { branch: "Dammam", weekStart: "2026-10-05", weekLabel: "5–11 Oct 2026", slug: "mamas-choice-mayonnaise-12x325", percent: 10 },
  { branch: "Dammam", weekStart: "2026-10-05", weekLabel: "5–11 Oct 2026", slug: "fresh-basil-seed-drink-lychee-24x290", percent: 15 },
  { branch: "Dammam", weekStart: "2026-09-28", weekLabel: "28 Sep–4 Oct 2026", slug: "mamas-choice-ketchup-squeeze-12x370", percent: 7 },

  { branch: "Hail", weekStart: "2026-10-05", weekLabel: "5–11 Oct 2026", slug: "al-azima-red-kidney-beans-24x400", percent: 11 },
  { branch: "Hail", weekStart: "2026-10-05", weekLabel: "5–11 Oct 2026", slug: "al-azima-milk-powder-6x1800", percent: 8 },
  { branch: "Hail", weekStart: "2026-10-05", weekLabel: "5–11 Oct 2026", slug: "bhai-bhai-puffed-rice-10x400", percent: 13 },
  { branch: "Hail", weekStart: "2026-09-28", weekLabel: "28 Sep–4 Oct 2026", slug: "al-azima-honey-12x400", percent: 9 },

  { branch: "Hafar Al Batin", weekStart: "2026-10-05", weekLabel: "5–11 Oct 2026", slug: "al-azima-light-meat-tuna-48x160", percent: 10 },
  { branch: "Hafar Al Batin", weekStart: "2026-10-05", weekLabel: "5–11 Oct 2026", slug: "al-azima-chana-dal-6x400", percent: 12 },
  { branch: "Hafar Al Batin", weekStart: "2026-10-05", weekLabel: "5–11 Oct 2026", slug: "al-azima-honey-12x400", percent: 11 },
  { branch: "Hafar Al Batin", weekStart: "2026-09-28", weekLabel: "28 Sep–4 Oct 2026", slug: "al-azima-white-oats-24x400", percent: 6 },

  { branch: "Qassim", weekStart: "2026-10-05", weekLabel: "5–11 Oct 2026", slug: "al-azima-pineapple-slice-24x565", percent: 14 },
  { branch: "Qassim", weekStart: "2026-10-05", weekLabel: "5–11 Oct 2026", slug: "al-azima-shafaf-oil-4x5", percent: 8 },
  { branch: "Qassim", weekStart: "2026-10-05", weekLabel: "5–11 Oct 2026", slug: "al-azima-cumin-pwdr-6x100", percent: 10 },
  { branch: "Qassim", weekStart: "2026-09-28", weekLabel: "28 Sep–4 Oct 2026", slug: "bhai-bhai-indian-sella-rice-40-kg", percent: 7 },
];

/** A stable mix of the leaflet covers for each branch. */
export function bannersForBranch(branch: string) {
  let seed = 0;
  for (const char of branch) seed = (seed + char.charCodeAt(0) * 17) % 997;
  const count = seed % 2 === 0 ? 2 : 1;
  return Array.from({ length: count }, (_, index) => offerBanners[(seed + index) % offerBanners.length]);
}

/** Approved offer PDFs by branch. A branch is omitted until NB supplies that file. */
export const offerPdfs: Partial<Record<string, string>> = {};

export function offerBranchAnchor(name: string) {
  return `branch-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
}
