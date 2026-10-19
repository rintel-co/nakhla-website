import { phrase } from "@/lib/i18n/phrase";

/** /products — brand logos, catalogue heading, and brand FAQs. Filter controls are in catalogue.ts. */
export const productsCopy = {
  metaTitle: phrase("Explore Our Brands — Nakhla Al Barari", "استكشفوا علاماتنا التجارية — نخلة البراري"),
  breadcrumb: phrase("Our Brands", "علاماتنا التجارية"),
  title: phrase("Explore Our Brands", "استكشفوا علاماتنا التجارية"),
  lede: phrase(
    "Discover the brands available through Nakhla Al Barari Trading Co. Select a brand to explore its associated products.",
    "اكتشفوا العلامات التجارية المتاحة لدى شركة نخلة البراري للتجارة. اختاروا علامة تجارية لاستعراض المنتجات المرتبطة بها.",
  ),
  chooseBrand: phrase("Choose a Brand", "اختر علامة تجارية"),
  gridTitle: phrase("Choose a Brand", "اختاروا علامة تجارية"),
  gridLede: phrase(
    "Use approved brand logos and exact brand names. Each logo should lead to the correct brand or product listing.",
    "استخدموا شعارات العلامات التجارية المعتمدة وأسماءها الصحيحة. يجب أن يقود كل شعار إلى صفحة العلامة التجارية أو قائمة منتجاتها الصحيحة.",
  ),
  viewBrand: phrase("View Brand", "عرض العلامة التجارية"),
  whyTitle: phrase("Why Choose Our Brands?", "لماذا تختارون علاماتنا التجارية؟"),
  whyLede: phrase(
    "Explore the brands in our portfolio and review the product options available for business enquiries.",
    "اكتشفوا العلامات التجارية ضمن مجموعتنا واطلعوا على خيارات المنتجات المتاحة للاستفسارات التجارية.",
  ),
  exploreProducts: phrase("Explore Products", "استكشفوا المنتجات"),
  productsTitle: phrase("Products from Our Brands", "منتجات علاماتنا التجارية"),
  productsLede: phrase(
    "Browse products by brand and category. Show verified product names, pack sizes and relevant details where available.",
    "تصفحوا المنتجات حسب العلامة التجارية والفئة. اعرضوا أسماء المنتجات وأحجام العبوات والتفاصيل ذات الصلة بعد التحقق منها.",
  ),
  viewAllProducts: phrase("View All Products", "عرض جميع المنتجات"),
  enquiryTitle: phrase("Need Product Information?", "هل تحتاجون إلى معلومات عن المنتجات؟"),
  enquiryLede: phrase(
    "Contact the team to enquire about products and wholesale availability.",
    "تواصلوا مع الفريق للاستفسار عن المنتجات وتوافرها للبيع بالجملة.",
  ),
  makeEnquiry: phrase("Make an Enquiry", "أرسلوا استفسارًا"),
  bannerAlt: phrase("Shop shelves stocked with packaged food"),
  allProducts: phrase("All products"),
  emptyBrand: phrase("This brand has no lines in the current wholesale catalogue."),
  fullCatalogue: phrase("The full wholesale catalogue."),
  productFaq: phrase("Product FAQ"),
  brandLines: {
    "Al Azima": phrase("Al Azima is a house label in the Nakhla range."),
    "Bhai Bhai": phrase("Bhai Bhai covers rice, spices, pulses, and puffed rice in this catalogue."),
    Kaneez: phrase("Kaneez is the premium rice label in the range."),
    "Yes Sir": phrase("Yes Sir is the besan powder label stocked with the spices."),
    "Mama’s Choice": phrase("Mama’s Choice covers sauces, dressings, oil, and canned fruit."),
    "Royal Palm": phrase("Royal Palm is a canned tomato label beside the Al Azima tins."),
    Fresh: phrase("Fresh is the basil seed drink label in the soft-drinks range."),
  },
  brandLineFallback: phrase("{brand} is a label distributed by Nakhla Al Barari."),
  brandFaqs: {
    "Al Azima": [
      {
        q: phrase("Where is the Al Azima pack size shown?"),
        a: phrase("On the product name. Examples in the catalogue include Baked Beans 24×400, Chana Dal 6×400, Sugar Coarse 5kg and 10kg, and Extra Virgin Olive Oil 12×250 and 12×500."),
      },
      {
        q: phrase("Which Al Azima lines are in the catalogue?"),
        a: phrase("Pulses and dals, ground spices, coarse and fine sugar, canned foods, hot sauce and peanut butter, olive oil and Shafaf oil, plus honey, oats, milk powder, salt, and fried onion."),
      },
    ],
    "Bhai Bhai": [
      {
        q: phrase("Which Bhai Bhai rice bags are listed?"),
        a: phrase("Indian Sella and Pakistani Sella, each in 40 Kg, 4×10 Kg, and 8×5 Kg."),
      },
      {
        q: phrase("Which other Bhai Bhai packs are listed?"),
        a: phrase("Fenugreek seeds 1×15 Kg. Corriander, curry, red chilli, and turmeric powders are listed at 15 Kg. Puffed rice (muri) is listed as 10×400 and 20×200."),
      },
    ],
    "Mama’s Choice": [
      {
        q: phrase("Which Mama’s Choice sauce packs are listed?"),
        a: phrase("1000 Island, French, and Ranch dressings are 12×237. Ketchup is 4×5 and a squeeze pack 12×370. Mayonnaise is 12×325, 12×946, and 4×3.78. Rose water is 12×450. White vinegar is 12×473 and 4×3.78 Ltr."),
      },
      {
        q: phrase("Which other Mama’s Choice lines are listed?"),
        a: phrase("Yellow peach halves 24×425, and cooking oil 4×5."),
      },
    ],
  },
};
