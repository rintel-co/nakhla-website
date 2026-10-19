import { phrase } from "@/lib/i18n/phrase";

/** Product detail page. Product names stay as listed in the catalogue. */
export const productCopyPhrases = {
  metaFallback: phrase("Product — Nakhla Al Barari"),
  brand: phrase("Brand"),
  category: phrase("Category"),
  pack: phrase("Pack"),
  similar: phrase("Similar products"),
  viewAll: phrase("View all"),
  requestQuote: phrase("Request a quote"),
  order: phrase("Price and delivery are confirmed with the branch. Add the line to a trade list, then send it from the site."),
  categoryLines: {
    Rice: phrase("Bagged rice for kitchens, hypermarkets, and grocery counters."),
    "Pulses Legumes & Beans": phrase("Lentils, dals, and dry staples packed for wholesale reorder."),
    Spices: phrase("Ground spices, whole spices, and masala for kitchens and shelves."),
    Sugar: phrase("Coarse and fine sugar in bag sizes for kitchens and stores."),
    "Canned Food": phrase("Canned and jarred vegetables, beans, fruit, fish, milk, and tomato for hotels and grocery."),
    Sauce: phrase("Table sauces, dressings, and spreads in retail and catering packs."),
    Oil: phrase("Olive oil and cooking oil for kitchens and counters."),
    Drinks: phrase("Ready-to-shelf basil seed drinks."),
    Others: phrase("Honey, milk powder, oats, salt, and other dry grocery lines stocked beside the main categories."),
  },
  categoryFallback: phrase("A wholesale grocery line."),
  summary: phrase("{categoryLine} {brandLine}"),
  meta: phrase("{name} by {brand}. Wholesale {category} from Nakhla Al Barari in Riyadh."),
};
