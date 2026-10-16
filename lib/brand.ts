import { brands, WHATSAPP } from "@/lib/catalog";
import { catalogue, catalogueBrands, type CatalogueItem } from "@/lib/catalogue";
import { brandLine } from "@/lib/product-copy";

const catalogueAlias: Record<string, string> = {
  "al azimo": "Al Azima",
  "nb fresh": "Fresh",
  "mamas choice": "Mama’s Choice",
};

export function normBrand(name: string) {
  return name.toLowerCase().replace(/[’']/g, "").replace(/\s+/g, " ").trim();
}

export function brandSlug(name: string) {
  return normBrand(name).replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function catalogueBrandName(name: string) {
  const key = normBrand(name);
  const aliased = catalogueAlias[key];
  if (aliased) return aliased;
  return catalogueBrands.find((brand) => normBrand(brand) === key) ?? null;
}

export function brandHref(name: string) {
  const catalogueName = catalogueBrandName(name);
  return `/products?brand=${encodeURIComponent(catalogueName ?? name)}#catalogue`;
}

export function brandLogo(name: string) {
  const catalogueName = catalogueBrandName(name);
  const key = normBrand(catalogueName ?? name);
  const logoKey = Object.entries(catalogueAlias).find(([, value]) => normBrand(value) === key)?.[0] ?? key;
  return brands.find((brand) => normBrand(brand.name) === logoKey || normBrand(brand.name) === key);
}

export function packDetail(name: string) {
  const times = name.match(/(\d+)\s*[×x]\s*(\d+(?:\.\d+)?)(\s*(?:kg|g|gm|ml|ltr|l)\b)?/i);
  if (times) {
    const unit = times[3]?.trim();
    return unit ? `${times[1]} × ${times[2]} ${unit}` : `${times[1]} × ${times[2]}`;
  }
  const bag = name.match(/(\d+(?:\.\d+)?)\s*(kg|g)\b/i);
  if (bag) return `${bag[1]} ${bag[2]}`;
  return null;
}

export function enquiryText(item: CatalogueItem) {
  const pack = packDetail(item.name);
  const lines = [`Enquiry about ${item.name}.`, `Brand: ${item.brand}.`, `Category: ${item.cats[0]}.`];
  if (pack) lines.push(`Pack: ${pack}.`);
  return lines.join("\n");
}

export function enquiryWhatsApp(item: CatalogueItem) {
  return `${WHATSAPP}?text=${encodeURIComponent(enquiryText(item))}`;
}

const brandFaqs: Record<string, { q: string; a: string }[]> = {
  "Al Azima": [
    {
      q: "Where is the Al Azima pack size shown?",
      a: "On the product name. Examples in the catalogue include Baked Beans 24×400, Chana Dal 6×400, Sugar Coarse 5kg and 10kg, and Extra Virgin Olive Oil 12×250 and 12×500.",
    },
    {
      q: "Which Al Azima lines are in the catalogue?",
      a: "Pulses and dals, ground spices, coarse and fine sugar, canned foods, hot sauce and peanut butter, olive oil and Shafaf oil, plus honey, oats, milk powder, salt, and fried onion.",
    },
  ],
  "Bhai Bhai": [
    {
      q: "Which Bhai Bhai rice bags are listed?",
      a: "Indian Sella and Pakistani Sella, each in 40 Kg, 4×10 Kg, and 8×5 Kg.",
    },
    {
      q: "Which other Bhai Bhai packs are listed?",
      a: "Fenugreek seeds 1×15 Kg. Corriander, curry, red chilli, and turmeric powders are listed at 15 Kg. Puffed rice (muri) is listed as 10×400 and 20×200.",
    },
  ],
  "Mama’s Choice": [
    {
      q: "Which Mama’s Choice sauce packs are listed?",
      a: "1000 Island, French, and Ranch dressings are 12×237. Ketchup is 4×5 and a squeeze pack 12×370. Mayonnaise is 12×325, 12×946, and 4×3.78. Rose water is 12×450. White vinegar is 12×473 and 4×3.78 Ltr.",
    },
    {
      q: "Which other Mama’s Choice lines are listed?",
      a: "Yellow peach halves 24×425, and cooking oil 4×5.",
    },
  ],
};

export function brandFaqsFor(name: string) {
  return brandFaqs[catalogueBrandName(name) ?? name] ?? [];
}

export function brandPages() {
  const slugs = new Set<string>();
  for (const name of catalogueBrands) slugs.add(brandSlug(name));
  for (const brand of brands) {
    if (!catalogueBrandName(brand.name)) slugs.add(brandSlug(brand.name));
  }
  return [...slugs].map((slug) => ({ slug }));
}

export function brandBySlug(slug: string) {
  const catalogueName = catalogueBrands.find((name) => brandSlug(name) === slug);
  if (catalogueName) {
    return {
      name: catalogueName,
      logo: brandLogo(catalogueName),
      products: catalogue.filter((item) => item.brand === catalogueName),
      intro: brandLine(catalogueName),
      faqs: brandFaqs[catalogueName] ?? [],
    };
  }
  const logo = brands.find((item) => brandSlug(item.name) === slug && !catalogueBrandName(item.name));
  if (!logo) return null;
  return {
    name: logo.name,
    logo,
    products: [] as CatalogueItem[],
    intro: "No products are listed under this name in the current catalogue.",
    faqs: [] as { q: string; a: string }[],
  };
}
