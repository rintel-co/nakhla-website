import { phrase } from "@/lib/i18n/phrase";

/** /contact — form fields and buttons included. */
export const contactCopy = {
  metaTitle: phrase("Contact Nakhla Al Barari Trading Co.", "تواصلوا مع شركة نخلة البراري للتجارة"),
  title: phrase("Contact Nakhla Al Barari Trading Co.", "تواصلوا مع شركة نخلة البراري للتجارة"),
  lede: phrase(
    "For product enquiries, wholesale requests or general questions, contact our team using the details below or send a message through the form.",
    "لاستفسارات المنتجات أو طلبات البيع بالجملة أو الأسئلة العامة، تواصلوا مع فريقنا عبر البيانات أدناه أو أرسلوا رسالة من خلال النموذج.",
  ),
  sendEnquiry: phrase("Send an Enquiry", "أرسلوا استفسارًا"),
  exteriorAlt: phrase("Nakhla Al Barari warehouse and delivery vans", "مستودع نخلة البراري وشاحنات التوصيل"),
  meetingAlt: phrase("Nakhla Al Barari meeting room", "قاعة اجتماعات نخلة البراري"),
  quoteTitle: phrase("Request a Quote", "طلب عرض سعر"),
  quoteLede: phrase(
    "Share your contact details and enquiry so the team can follow up through the approved business process.",
    "أدخلوا بيانات التواصل وتفاصيل الاستفسار ليتمكن الفريق من المتابعة عبر الإجراء التجاري المعتمد.",
  ),
  email: phrase("Email", "البريد الإلكتروني"),
  phone: phrase("Phone", "الهاتف"),
  address: phrase("Address", "العنوان"),
  branches: phrase("Branch Contact Information", "معلومات التواصل مع الفروع"),
  branchesLede: phrase(
    "Choose a branch to view its address and verified contact options.",
    "اختاروا الفرع لعرض عنوانه ووسائل التواصل المعتمدة.",
  ),
  form: {
    requestType: phrase("Request type", "نوع الطلب"),
    requestTypePlaceholder: phrase("Select a request type", "اختاروا نوع الطلب"),
    requestTypes: {
      product: phrase("Product enquiry", "استفسار عن منتج"),
      wholesale: phrase("Wholesale order", "طلب جملة"),
      partnership: phrase("Distribution partnership", "شراكة توزيع"),
    },
    name: phrase("Name", "الاسم"),
    phone: phrase("Contact number", "رقم التواصل"),
    email: phrase("Email", "البريد الإلكتروني"),
    category: phrase("Category", "الفئة"),
    categoryPlaceholder: phrase("Select a category", "اختاروا فئة"),
    products: phrase("Products", "المنتجات"),
    quantities: phrase("Quantities", "الكميات"),
    message: phrase("Message", "الرسالة"),
    send: phrase("Send Message", "إرسال الرسالة"),
    required: phrase("This field is required.", "هذا الحقل مطلوب."),
    emailInvalid: phrase("Enter a valid email address.", "أدخلوا بريدًا إلكترونيًا صالحًا."),
    sent: phrase("Your email app should open with this enquiry addressed to contact@nbarari.com.", "يفترض أن يفتح تطبيق البريد هذه الرسالة إلى contact@nbarari.com."),
    error: phrase("The enquiry could not be opened. Email contact@nbarari.com.", "تعذر فتح الاستفسار. راسلوا contact@nbarari.com."),
  },
};
