import { phrase, type Phrase } from "@/lib/i18n/phrase";

export type FaqItem = { q: Phrase; a: Phrase };

function qa(question: string, questionAr: string, answer: string, answerAr = ""): FaqItem {
  return { q: phrase(question, questionAr), a: phrase(answer, answerAr) };
}

const shared = {
  products: qa(
    "What products does Nakhla Al Barari Trading Co. supply?",
    "ما المنتجات التي توفرها شركة نخلة البراري للتجارة؟",
    "The company lists food products, frozen foods, beverages and selected non-food categories. Check the current catalogue for specific products.",
    "تعرض الشركة منتجات غذائية وأغذية مجمدة ومشروبات وفئات مختارة من المنتجات غير الغذائية. راجعوا الدليل الحالي لمعرفة المنتجات المحددة.",
  ),
  brands: qa(
    "Do you sell products from different brands?",
    "",
    "Yes. Our product range includes products from different brands, including our own brands and other brands available through our distribution business.",
  ),
  rice: qa(
    "Do you supply rice and other essential grocery products?",
    "",
    "Yes. Our catalogue includes rice and a variety of everyday grocery essentials. Contact our sales team to enquire about specific products and availability.",
  ),
  frozen: qa(
    "Do you offer frozen foods and beverages?",
    "",
    "Yes. We offer products across categories such as frozen foods, soft drinks and beverages. Please explore our product catalogue for available items.",
  ),
  customers: qa(
    "Who can purchase products from Nakhla Al Barari?",
    "",
    "We serve business customers such as supermarkets, grocery stores, restaurants, hotels and other retail and food-service businesses.",
  ),
  order: qa(
    "How can I place a wholesale order?",
    "",
    "Select the products you need, add them to your trade list and send your enquiry through our website's ordering process. Our team will assist you with the next steps.",
  ),
  nationwide: qa(
    "Do you supply products across Saudi Arabia?",
    "",
    "We operate through a network of branches in Saudi Arabia. Contact our team to confirm service availability and delivery arrangements for your location.",
  ),
  sales: qa(
    "How can I contact Nakhla Al Barari's sales team?",
    "",
    "You can contact us through WhatsApp at +966 555729077. Visit our Contact page for branch information and additional contact details.",
  ),
  discounts: qa(
    "Do you offer discounts for wholesale or bulk orders?",
    "هل تقدمون خصومات للطلبات بالجملة أو الكميات الكبيرة؟",
    "Bulk orders are available. For wholesale pricing and special bulk-order offers, contact the sales team for the applicable details.",
    "تتوفر الطلبات بالجملة. للاستفسار عن أسعار الجملة والعروض الخاصة بالكميات الكبيرة، تواصلوا مع فريق المبيعات لمعرفة التفاصيل المعمول بها.",
  ),
  bulk: qa(
    "Can I purchase this product in large quantities?",
    "هل يمكنني شراء هذا المنتج بكميات كبيرة؟",
    "Contact the sales team to confirm bulk-order options and availability for the requested product.",
    "تواصلوا مع فريق المبيعات لتأكيد خيارات الطلب بالكميات الكبيرة وتوافر المنتج المطلوب.",
  ),
  orderProduct: qa(
    "How can I order this product?",
    "كيف يمكنني طلب هذا المنتج؟",
    "Use the approved business enquiry or WhatsApp process shown on the website to send the product details to the sales team.",
    "استخدموا آلية الاستفسار التجاري أو واتساب المعتمدة والموضحة في الموقع لإرسال تفاصيل المنتج إلى فريق المبيعات.",
  ),
  availability: qa(
    "Can I check product availability before visiting the store?",
    "هل يمكنني التأكد من توافر المنتج قبل زيارة الفرع؟",
    "Contact the relevant branch using the verified contact details to enquire about current availability.",
    "تواصلوا مع الفرع المعني عبر بيانات التواصل المعتمدة للاستفسار عن التوافر الحالي.",
  ),
  returns: qa(
    "Can I return or exchange this product?",
    "",
    "Returns and exchanges may be accepted depending on the reason and the proof provided. Each request is reviewed according to our return and exchange policy.",
  ),
  damaged: qa(
    "What should I do if I receive a damaged or incorrect product?",
    "",
    "Please send us a WhatsApp message with clear photos of the damaged or incorrect product. We will review the issue and advise you on the next steps.",
  ),
  more: qa(
    "How can I contact you for more information about this product?",
    "كيف يمكنني التواصل معكم للحصول على معلومات إضافية عن هذا المنتج؟",
    "Use the contact details or approved WhatsApp enquiry link shown on the website.",
    "استخدموا بيانات التواصل أو رابط استفسارات واتساب المعتمد الموضح في الموقع.",
  ),
  prices: qa(
    "How can I check product availability and prices?",
    "",
    "Browse our product catalogue and add your required items to the trade list. Send your enquiry to our sales team to confirm current availability and pricing.",
  ),
};

/** Site FAQ. Home questions also appear on the homepage. Brand questions also appear on Our Brands. */
export const faqCopy = {
  metaTitle: phrase("FAQ — Nakhla Al Barari"),
  title: phrase("Frequently Asked Questions", "الأسئلة الشائعة"),
  lede: phrase(
    "Find answers about product categories, availability, wholesale enquiries and how to contact the team.",
    "اعثروا على إجابات حول فئات المنتجات وتوافرها واستفسارات البيع بالجملة وطرق التواصل مع الفريق.",
  ),
  home: [
    shared.products,
    shared.brands,
    shared.rice,
    shared.frozen,
    shared.customers,
    shared.order,
    shared.nationwide,
    shared.sales,
    shared.discounts,
    shared.bulk,
    shared.orderProduct,
    shared.availability,
    shared.returns,
    shared.damaged,
    shared.more,
  ],
  brands: [
    shared.discounts,
    shared.bulk,
    shared.orderProduct,
    shared.availability,
    shared.returns,
    shared.damaged,
    shared.more,
    shared.products,
    shared.brands,
    shared.rice,
    shared.frozen,
    shared.customers,
    shared.prices,
    shared.order,
    shared.nationwide,
    shared.sales,
  ],
};
