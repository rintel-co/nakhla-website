export type ProductIcon = "corn" | "milk" | "jar" | "bowl" | "can" | "pineapple" | "beans";

export type Product = {
  name: string;
  cat: string;
  brand: string;
  slug: string;
  icon: ProductIcon;
};

export const products: Product[] = [
  { name: "Al Azima Sweet Corn (Dura) 24×340", cat: "Canned", brand: "Al Azima", slug: "al-azima-sweet-corn-dura-24x340", icon: "corn" },
  { name: "Al Azima Analogue Milk 48×170", cat: "Canned", brand: "Al Azima", slug: "al-azima-analogue-milk-48x170", icon: "milk" },
  { name: "Al Azima Chick Peas Glass 12×580", cat: "Canned", brand: "Al Azima", slug: "al-azima-chick-peas-glass-12x580", icon: "jar" },
  { name: "Al Azima Chick Peas Glass 12×370", cat: "Canned", brand: "Al Azima", slug: "al-azima-chick-peas-glass-12x370", icon: "jar" },
  { name: "Al Azima Foul Mudammes 24×400", cat: "Canned", brand: "Al Azima", slug: "al-azima-foul-mudammes-24x400", icon: "bowl" },
  { name: "Al Azima Baked Beans 24×400", cat: "Canned", brand: "Al Azima", slug: "al-azima-baked-beans-24x400", icon: "can" },
  { name: "Al Azima Pineapple Slice 24×565", cat: "Canned", brand: "Al Azima", slug: "al-azima-pineapple-slice-24x565", icon: "pineapple" },
  { name: "Al Azima Red Kidney Beans 24×400", cat: "Canned", brand: "Al Azima", slug: "al-azima-red-kidney-beans-24x400", icon: "beans" },
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
  { name: "Riyadh HQ", phone: "+966 555729077", address: "Al Masani Dist., Domat Al Jandal Street. Warehouses 26 and 27." },
  { name: "Aziziyah", phone: "+966 541485467", address: "Al Basala Street, Riyadh 14512." },
  { name: "Dammam", phone: "+966 567823172", address: "Muhammadiyah Street, Dammam." },
  { name: "Hail", phone: "+966 592512514", address: "King Khalid Road, behind NCB, Imam Shafi Street." },
  { name: "Hafar Al Batin", phone: "+966 599661665", address: "Al Baladiyah, Hafar Al Batin." },
  { name: "Qassim", phone: "+966 580056440", address: "Al Ramish Al Sufla, Al Yarmouk Dist., Buraidah." },
];

export const CATALOGUE_PDF = "https://nakhlaalbarari.com/wp-content/uploads/2026/06/Nakhla-Al-Barari-Product-Catalogue-.pdf";
export const WHATSAPP = "https://wa.me/966555729077";
