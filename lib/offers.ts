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

/** Approved offer PDFs by branch. A branch is omitted until NB supplies that file. */
export const offerPdfs: Partial<Record<string, string>> = {};

export function offerBranchAnchor(name: string) {
  return `branch-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
}
