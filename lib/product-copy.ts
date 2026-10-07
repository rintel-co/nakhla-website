import type { CatalogueItem } from "@/lib/catalogue";

const categoryCopy: Record<string, string> = {
  Rice: "Bagged rice for kitchens, hypermarkets, and grocery counters.",
  "Pulses Legumes & Beans": "Lentils, dals, and dry staples packed for wholesale reorder.",
  Spices: "Ground spices, whole spices, and masala for kitchens and shelves.",
  Sugar: "Coarse and fine sugar in bag sizes for kitchens and stores.",
  "Canned Food": "Canned and jarred vegetables, beans, fruit, fish, milk, and tomato for hotels and grocery.",
  Sauce: "Table sauces, dressings, and spreads in retail and catering packs.",
  Oil: "Olive oil and cooking oil for kitchens and counters.",
  Drinks: "Ready-to-shelf basil seed drinks.",
  Others: "Honey, milk powder, oats, salt, and other dry grocery lines stocked beside the main categories.",
};

function brandLine(brand: string) {
  if (brand === "Al Azima") return "Al Azima is a house label in the Nakhla range.";
  if (brand === "Bhai Bhai") return "Bhai Bhai covers rice, spices, pulses, and puffed rice in this catalogue.";
  if (brand === "Kaneez") return "Kaneez is the premium rice label in the range.";
  if (brand === "Yes Sir") return "Yes Sir is the besan powder label stocked with the spices.";
  if (brand.startsWith("Mama")) return "Mama’s Choice covers sauces, dressings, oil, and canned fruit.";
  if (brand === "Royal Palm") return "Royal Palm is a canned tomato label beside the Al Azima tins.";
  if (brand === "Fresh") return "Fresh is the basil seed drink label in the soft-drinks range.";
  return `${brand} is a label distributed by Nakhla Al Barari.`;
}

const order = "Price and delivery are confirmed with the branch. Add the line to a trade list, then send it from the site.";

export function productCopy(item: CatalogueItem) {
  const category = item.cats[0] ?? "Others";
  const categoryLine = categoryCopy[category] ?? "A wholesale grocery line.";
  const brand = brandLine(item.brand);
  const summary = `${categoryLine} ${brand}`;
  const text = `${item.name} is a ${item.brand} line in ${category}. ${summary} ${order}`;
  const meta = `${item.name} by ${item.brand}. Wholesale ${category} from Nakhla Al Barari in Riyadh.`;
  return { text, summary, meta, category, categoryLine, brand, order };
}
