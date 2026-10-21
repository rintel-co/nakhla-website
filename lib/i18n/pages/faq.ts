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
    "هل تبيعون منتجات من علامات تجارية مختلفة؟",
    "Yes. Our product range includes products from different brands, including our own brands and other brands available through our distribution business.",
    "نعم. تشمل مجموعة منتجاتنا منتجات من علامات تجارية مختلفة، بما في ذلك علاماتنا التجارية وعلامات أخرى متاحة من خلال نشاط التوزيع لدينا.",
  ),
  rice: qa(
    "Do you supply rice and other essential grocery products?",
    "هل توفرون الأرز وغيره من المنتجات الغذائية الأساسية؟",
    "Yes. Our catalogue includes rice and a variety of everyday grocery essentials. Contact our sales team to enquire about specific products and availability.",
    "نعم. يتضمن دليلنا الأرز ومجموعة من المواد الغذائية الأساسية اليومية. تواصلوا مع فريق المبيعات للاستفسار عن منتجات محددة وتوافرها.",
  ),
  frozen: qa(
    "Do you offer frozen foods and beverages?",
    "هل تقدمون أغذية مجمدة ومشروبات؟",
    "Yes. We offer products across categories such as frozen foods, soft drinks and beverages. Please explore our product catalogue for available items.",
    "نعم. نقدم منتجات ضمن فئات مثل الأغذية المجمدة والمشروبات الغازية والمشروبات. يرجى تصفح دليل المنتجات للاطلاع على الأصناف المتاحة.",
  ),
  customers: qa(
    "Who can purchase products from Nakhla Al Barari?",
    "من يمكنه شراء المنتجات من نخلة البراري؟",
    "We serve business customers such as supermarkets, grocery stores, restaurants, hotels and other retail and food-service businesses.",
    "نخدم عملاء قطاع الأعمال مثل السوبرماركت والبقالات والمطاعم والفنادق وغيرها من أنشطة التجزئة وخدمات الأغذية.",
  ),
  order: qa(
    "How can I place a wholesale order?",
    "كيف يمكنني تقديم طلب بالجملة؟",
    "Select the products you need, add them to your trade list and send your enquiry through our website's ordering process. Our team will assist you with the next steps.",
    "اختاروا المنتجات التي تحتاجونها وأضيفوها إلى قائمة التداول، ثم أرسلوا استفساركم عبر آلية الطلب في الموقع. سيساعدكم فريقنا في الخطوات التالية.",
  ),
  nationwide: qa(
    "Do you supply products across Saudi Arabia?",
    "هل توفرون المنتجات في أنحاء المملكة العربية السعودية؟",
    "We operate through a network of branches in Saudi Arabia. Contact our team to confirm service availability and delivery arrangements for your location.",
    "نعمل من خلال شبكة فروع في المملكة العربية السعودية. تواصلوا مع فريقنا لتأكيد توفر الخدمة وترتيبات التوصيل لموقعكم.",
  ),
  sales: qa(
    "How can I contact Nakhla Al Barari's sales team?",
    "كيف يمكنني التواصل مع فريق مبيعات نخلة البراري؟",
    "You can contact us through WhatsApp at +966 555729077. Visit our Contact page for branch information and additional contact details.",
    "يمكنكم التواصل معنا عبر واتساب على الرقم +966 555729077. زوروا صفحة اتصل بنا للاطلاع على معلومات الفروع وبيانات التواصل الإضافية.",
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
    "هل يمكنني إرجاع هذا المنتج أو استبداله؟",
    "Returns and exchanges may be accepted depending on the reason and the proof provided. Each request is reviewed according to our return and exchange policy.",
    "قد يُقبل الإرجاع والاستبدال حسب السبب والإثبات المقدّم. يُراجع كل طلب وفق سياسة الإرجاع والاستبدال.",
  ),
  damaged: qa(
    "What should I do if I receive a damaged or incorrect product?",
    "ماذا أفعل إذا استلمت منتجًا تالفًا أو غير صحيح؟",
    "Please send us a WhatsApp message with clear photos of the damaged or incorrect product. We will review the issue and advise you on the next steps.",
    "يرجى إرسال رسالة واتساب مع صور واضحة للمنتج التالف أو غير الصحيح. سنراجع المشكلة ونبلغكم بالخطوات التالية.",
  ),
  prices: qa(
    "How can I check product availability and prices?",
    "كيف يمكنني التحقق من توافر المنتجات وأسعارها؟",
    "Browse our product catalogue and add your required items to the trade list. Send your enquiry to our sales team to confirm current availability and pricing.",
    "تصفحوا دليل المنتجات وأضيفوا الأصناف المطلوبة إلى قائمة التداول. أرسلوا استفساركم إلى فريق المبيعات لتأكيد التوافر الحالي والأسعار.",
  ),
  more: qa(
    "How can I contact you for more information about this product?",
    "كيف يمكنني التواصل معكم للحصول على معلومات إضافية عن هذا المنتج؟",
    "Use the contact details or approved WhatsApp enquiry link shown on the website.",
    "استخدموا بيانات التواصل أو رابط استفسارات واتساب المعتمد الموضح في الموقع.",
  ),
};

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
  page: [
    qa(
      "What products does Nakhla Al Barari Trading Co. supply?",
      "ما المنتجات التي توفرها شركة نخلة البراري للتجارة؟",
      "Nakhla Al Barari supplies a range of food products, beverages, frozen foods, and selected non-food essentials. Contact our team to enquire about specific products.",
      "توفر نخلة البراري مجموعة من المنتجات الغذائية والمشروبات والأغذية المجمدة والمنتجات غير الغذائية المختارة. تواصلوا مع فريقنا للاستفسار عن منتجات محددة.",
    ),
    qa(
      "Can I purchase products in large quantities?",
      "هل يمكنني شراء المنتجات بكميات كبيرة؟",
      "Contact our team to discuss wholesale purchasing requirements, quantities, and product availability.",
      "تواصلوا مع فريقنا لمناقشة متطلبات الشراء بالجملة والكميات ومدى توفر المنتجات.",
    ),
    qa(
      "Do you supply products from different brands?",
      "هل توفرون منتجات من علامات تجارية مختلفة؟",
      "Yes, we offer products across multiple brands. Explore our Brands page to discover available brands and their product ranges.",
      "نعم، نوفر منتجات من علامات تجارية متعددة. تفضلوا بزيارة صفحة علاماتنا التجارية للتعرف على العلامات المتاحة ومجموعات منتجاتها.",
    ),
    qa(
      "Who can purchase products from Nakhla Al Barari?",
      "من يمكنه شراء المنتجات من نخلة البراري؟",
      "Businesses looking for wholesale product supplies can contact our team to discuss their requirements.",
      "يمكن للمنشآت التجارية التي تبحث عن التوريد بالجملة التواصل مع فريقنا لمناقشة متطلباتها.",
    ),
    qa(
      "How can I check product availability and prices?",
      "كيف يمكنني التحقق من توفر المنتجات وأسعارها؟",
      "Contact our team with product names and required quantities to enquire about current availability and pricing.",
      "تواصلوا مع فريقنا مع ذكر أسماء المنتجات والكميات المطلوبة للاستفسار عن التوفر الحالي والأسعار.",
    ),
    qa(
      "How can I place a wholesale order?",
      "كيف يمكنني تقديم طلب شراء بالجملة؟",
      "Submit an enquiry through our Contact page or contact our team directly to discuss the products and quantities you need.",
      "أرسلوا استفسارًا عبر صفحة التواصل أو تواصلوا مباشرة مع فريقنا لمناقشة المنتجات والكميات المطلوبة.",
    ),
    qa(
      "Do you offer delivery to business locations?",
      "هل توفرون التوصيل إلى مواقع المنشآت التجارية؟",
      "Contact our team to confirm delivery availability for your location and applicable order requirements.",
      "تواصلوا مع فريقنا للتأكد من توفر خدمة التوصيل إلى موقعكم ومعرفة متطلبات الطلب.",
    ),
    qa(
      "How can I contact Nakhla Al Barari for a wholesale enquiry?",
      "كيف يمكنني التواصل مع نخلة البراري للاستفسار عن التوريد بالجملة؟",
      "Visit our Contact page to find contact details and submit an enquiry about products, wholesale orders, or business supply requirements.",
      "زوروا صفحة التواصل للاطلاع على بيانات الاتصال وإرسال استفسار حول المنتجات أو طلبات الجملة أو احتياجات التوريد للمنشآت التجارية.",
    ),
  ],
};
