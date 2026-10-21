import { phrase } from "@/lib/i18n/phrase";

/** /products — brand logos, catalogue heading, and brand FAQs. Filter controls are in catalogue.ts. */
export const productsCopy = {
  metaTitle: phrase("Explore Our Brands — Nakhla Al Barari", "استكشفوا علاماتنا التجارية — نخلة البراري"),
  breadcrumb: phrase("Our Brands", "علاماتنا التجارية"),
  title: phrase("Explore Our Brands", "اكتشفوا علاماتنا التجارية"),
  lede: phrase(
    "Discover the brands available through Nakhla Al Barari Trading Co. Select a brand to explore its associated products.",
    "اكتشفوا العلامات التجارية المتاحة لدى شركة نخلة البراري للتجارة. اختاروا علامة تجارية لاستعراض المنتجات المرتبطة بها.",
  ),
  chooseBrand: phrase("Choose a Brand", "اختر علامة تجارية"),
  gridTitle: phrase("Discover Our Brand Portfolio", "تعرّفوا على مجموعة علاماتنا التجارية"),
  gridLede: phrase(
    "Browse our selection of brands and explore their product ranges. Select a brand below to discover products available for wholesale purchasing.",
    "تصفحوا مجموعة العلامات التجارية المتوفرة لدينا واستكشفوا منتجاتها. اختاروا إحدى العلامات التجارية أدناه للتعرف على المنتجات المتاحة للشراء بالجملة.",
  ),
  viewProducts: phrase("View Products", "عرض المنتجات"),
  whyTitle: phrase("Why Choose Our Products?", "لماذا تختارون منتجاتنا؟"),
  whyLede: phrase(
    "Explore our diverse range of food products, beverages, frozen foods, and selected non-food essentials. We aim to make wholesale purchasing easier by offering products across multiple categories and brands to meet different business needs.",
    "اكتشفوا مجموعتنا المتنوعة من المنتجات الغذائية والمشروبات والأغذية المجمدة والمنتجات غير الغذائية المختارة. نسعى إلى تسهيل عمليات الشراء بالجملة من خلال توفير منتجات ضمن فئات متعددة وعلامات تجارية متنوعة لتلبية احتياجات المنشآت التجارية.",
  ),
  whyPoints: [
    {
      title: phrase("A Diverse Product Range", "تنوع المنتجات"),
      copy: phrase("Explore products across the categories we offer.", "اكتشفوا المنتجات ضمن الفئات المتوفرة لدينا."),
    },
    {
      title: phrase("Multiple Brands", "تعدد العلامات التجارية"),
      copy: phrase("Discover products from a variety of brands across relevant categories.", "تعرّفوا على منتجات من علامات تجارية متنوعة ضمن الفئات ذات الصلة."),
    },
    {
      title: phrase("Wholesale Purchasing", "الشراء بالجملة"),
      copy: phrase("Enquire about products and quantities for your business needs.", "استفسروا عن المنتجات والكميات المناسبة لاحتياجات منشآتكم التجارية."),
    },
    {
      title: phrase("Product Enquiry Support", "دعم الاستفسارات عن المنتجات"),
      copy: phrase("Contact our team for product details, availability, and wholesale orders.", "تواصلوا مع فريقنا لمعرفة تفاصيل المنتجات ومدى توفرها وطلبات الجملة."),
    },
  ],
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
