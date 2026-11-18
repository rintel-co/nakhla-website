import type { Phrase } from "@/lib/i18n/phrase";

export type OfferBanner = {
  src: string;
  alt: Phrase;
  href?: string;
};

/** Leaflet covers for /offers. A banner without href is shown, not linked. */
export const offerBanners: OfferBanner[] = [];

export type WeeklyOffer = {
  branch: string;
  weekStart: string;
  weekLabel: string;
  slug: string;
  percent: number;
};

export const weeklyOffers: WeeklyOffer[] = [];

/** A stable mix of the leaflet covers for each branch. */
export function bannersForBranch(branch: string) {
  if (offerBanners.length === 0) return [];
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
