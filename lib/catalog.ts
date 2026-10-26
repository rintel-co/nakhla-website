export type ProductIcon = "corn" | "milk" | "jar" | "bowl" | "can" | "pineapple" | "beans";

export type Product = {
  name: string;
  cat: string;
  brand: string;
  slug: string;
  icon: ProductIcon;
  image: string;
};

export const products: Product[] = [
  { name: "Al Azima Sweet Corn (Dura) 24×340", cat: "Canned", brand: "Al Azima", slug: "al-azima-sweet-corn-dura-24x340", icon: "corn", image: "https://nakhlaalbarari.com/wp-content/uploads/2026/06/AL-AZIMA-SWEET-CORN-DURA-24X340GRM-300x375.avif" },
  { name: "Al Azima Analogue Milk 48×170", cat: "Canned", brand: "Al Azima", slug: "al-azima-analogue-milk-48x170", icon: "milk", image: "https://nakhlaalbarari.com/wp-content/uploads/2026/06/AL-AZIMA-ANALOGUE-MILK-48X170ML-300x375.avif" },
  { name: "Al Azima Chick Peas Glass 12×580", cat: "Canned", brand: "Al Azima", slug: "al-azima-chick-peas-glass-12x580", icon: "jar", image: "https://nakhlaalbarari.com/wp-content/uploads/2026/06/AL-AZIMA-CHICK-PEAS-GLASS-12X580GM-300x375.avif" },
  { name: "Al Azima Chick Peas Glass 12×370", cat: "Canned", brand: "Al Azima", slug: "al-azima-chick-peas-glass-12x370", icon: "jar", image: "https://nakhlaalbarari.com/wp-content/uploads/2026/06/AL-AZIMA-CHICK-PEAS-GLASS-12X370GM-300x375.avif" },
  { name: "Al Azima Foul Mudammes 24×400", cat: "Canned", brand: "Al Azima", slug: "al-azima-foul-mudammes-24x400", icon: "bowl", image: "https://nakhlaalbarari.com/wp-content/uploads/2026/06/AL-AZIMA-FOUL-MUDAMMES-24X400GM-1-300x375.avif" },
  { name: "Al Azima Baked Beans 24×400", cat: "Canned", brand: "Al Azima", slug: "al-azima-baked-beans-24x400", icon: "can", image: "https://nakhlaalbarari.com/wp-content/uploads/2026/06/AL-AZIMA-BAKED-BEANS-24X400-GM-300x375.avif" },
  { name: "Al Azima Pineapple Slice 24×565", cat: "Canned", brand: "Al Azima", slug: "al-azima-pineapple-slice-24x565", icon: "pineapple", image: "https://nakhlaalbarari.com/wp-content/uploads/2026/06/AL-AZIMA-PINEAPPLE-SLICE-24X565GM-300x375.avif" },
  { name: "Al Azima Red Kidney Beans 24×400", cat: "Canned", brand: "Al Azima", slug: "al-azima-red-kidney-beans-24x400", icon: "beans", image: "https://nakhlaalbarari.com/wp-content/uploads/2026/06/AL-AZIMA-RED-KIDNEY-BEANS-24X400GM-1-300x375.avif" },
];

export const serviceGroups = [
  {
    name: "Food Products",
    summary: "Grocery lines for shops, hotels, and wholesale counters.",
    note: "We are having 3000 or more food products and are still counting. We deal with all top brands and distributors. We always ensure the quality, quantity, and availability of products.",
    items: [
      "Baby Food",
      "Baking & Jelly",
      "Can Food Products",
      "Chocolate",
      "Coffee",
      "Confectionary",
      "Cornflakes, Cereals & Oats",
      "Dry Fruit (Nuts)",
      "Grains",
      "Instant Powder",
      "Jam, Halawa, Sayil & Honey",
      "Juban, Qishta & Zubda",
      "Macaroni & Vermicelli",
      "Mayonnaise, Hot Sauce",
      "Milk (Evap, Powder)",
      "Oil, Ghee & Olive Oil",
      "Olive & Pickle",
      "Philippine & Indonesian Foods",
    ],
  },
  {
    name: "Frozen Foods",
    summary: "Explore frozen food products currently available in the supply range. Contact the team to enquire about availability.",
    note: "We offer a wide range of frozen foods, with 3000+ options and counting. Partnering with top brands and suppliers, we guarantee premium quality, reliable stock, and consistent availability.",
    items: ["Cold Frozen Items", "Poultry"],
  },
  {
    name: "Soft Drinks & Beverages",
    summary: "Explore available beverage categories and enquire about products and pack sizes.",
    note: "We provide a diverse selection of soft drinks and beverages, sourcing from leading brands and distributors. We prioritise quality, variety, and reliable availability.",
    items: ["Beera & Energy Drink", "Juice & Flavoured Milk"],
  },
  {
    name: "Non Food",
    summary: "Explore selected non-food products available through the business supply range.",
    note: "We offer a wide range of non-food products, sourced from top brands and suppliers. We focus on quality, variety, and consistent availability to meet your needs.",
    items: ["Charcoal", "Cosmetic (Personal Body Care)", "Detergent Cleaning Items", "Pampers & Tissue", "Plastic"],
  },
];

export const categories = [
  { name: "Rice", meta: "9 lines", color: "#fff0dc" },
  { name: "Pulses", meta: "15 lines", color: "#e5f6e8" },
  { name: "Spices", meta: "10 lines", color: "#ffe8e4" },
  { name: "Canned", meta: "20 lines", color: "#e7f1fb" },
  { name: "Sauce", meta: "18 lines", color: "#f7e8f3" },
  { name: "Oil", meta: "4 lines", color: "#f4f6e4" },
  { name: "Sugar", meta: "4 lines", color: "#fff6ea" },
  { name: "Drinks", meta: "7 lines", color: "#e5f6f4" },
  { name: "Others", meta: "12 lines", color: "#f3efe8" },
];

export const brands = [
  { name: "Al Azimo", src: "https://nakhlaalbarari.com/wp-content/uploads/2026/06/Al-Azimo.avif" },
  { name: "Bhai Bhai", src: "https://nakhlaalbarari.com/wp-content/uploads/2026/06/Bhai-Bhai.avif" },
  { name: "Bismi Bukhari", src: "https://nakhlaalbarari.com/wp-content/uploads/2026/06/Bismi-Bukhari.avif" },
  { name: "Ghazaal Al Barari", src: "https://nakhlaalbarari.com/wp-content/uploads/2026/06/Ghazaal-Al-Barari.avif" },
  { name: "Jawaher Almaas", src: "https://nakhlaalbarari.com/wp-content/uploads/2026/06/Jawaher-Almaas.avif" },
  { name: "Mama's Choice", src: "https://nakhlaalbarari.com/wp-content/uploads/2026/06/Mamas-Choice.avif" },
  { name: "Wag Wag", src: "https://nakhlaalbarari.com/wp-content/uploads/2026/06/wag-wag.avif" },
  { name: "Blue", src: "https://nakhlaalbarari.com/wp-content/uploads/2026/06/Blue.avif" },
  { name: "Kaneez", src: "https://nakhlaalbarari.com/wp-content/uploads/2026/06/kaneez.avif" },
  { name: "NB Fresh", src: "https://nakhlaalbarari.com/wp-content/uploads/2026/06/NB-Fresh.avif" },
  { name: "Rivaj", src: "https://nakhlaalbarari.com/wp-content/uploads/2026/06/Rivaj.avif" },
  { name: "Shifas", src: "https://nakhlaalbarari.com/wp-content/uploads/2026/06/Shifas.avif" },
];

export const branches = [
  { name: "Riyadh HQ", phone: "+966 555729077", address: "Al Masani Dist., Domat Al Jandal Street. Warehouses 26 and 27.", map: "https://maps.app.goo.gl/anTLTVx3jad5wwhQA" },
  { name: "Riyadh", phone: "+966 555729077", address: "Al Masani Dist., Domat Al Jandal Street, Riyadh.", map: "https://maps.app.goo.gl/CP7s8pQuqmb4mrhJ6" },
  { name: "Aziziyah", phone: "+966 541485467", address: "Al Basala Street, Riyadh 14512.", map: "https://maps.app.goo.gl/JDEEwrNRChwGug288" },
  { name: "Dammam", phone: "+966 567823172", address: "Muhammadiyah Street, Dammam.", map: "https://maps.app.goo.gl/RaAKm89WGHxNqxBLA" },
  { name: "Hail", phone: "+966 592512514", address: "King Khalid Road, behind NCB, Imam Shafi Street.", map: "https://maps.app.goo.gl/wa5yMYisNWX9NwFM6" },
  { name: "Hafar Al Batin", phone: "+966 599661665", address: "Al Baladiyah, Hafar Al Batin.", map: "https://maps.app.goo.gl/BWRK8pD2GvstN7A6A" },
  { name: "Qassim", phone: "+966 580056440", address: "Al Ramish Al Sufla, Al Yarmouk Dist., Buraidah.", map: "https://maps.app.goo.gl/wy2Fv6qV5oTkv4tW9" },
];

export const CATALOGUE_PDF = "https://nakhlaalbarari.com/wp-content/uploads/2026/06/Nakhla-Al-Barari-Product-Catalogue-.pdf";
export const PROFILE_PDF = "https://nakhlaalbarari.com/wp-content/uploads/2026/06/NB-Profile-.pdf";
export const WHATSAPP = "https://wa.me/966555729077";
