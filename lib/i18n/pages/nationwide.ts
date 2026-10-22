import { phrase } from "@/lib/i18n/phrase";

/** Nationwide section on the homepage. */
export const nationwideCopy = {
  eyebrow: phrase("Saudi Arabia", "المملكة العربية السعودية"),
  title: phrase("Our Nationwide Presence", "حضورنا في أنحاء المملكة"),
  lede: phrase(
    "With a strong presence across Saudi Arabia, we are strategically positioned to serve businesses efficiently and ensure reliable product availability in key regions.",
    "مع حضور في أنحاء المملكة العربية السعودية، نحن في مواقع تتيح خدمة المنشآت التجارية وتوفير المنتجات في المناطق الرئيسية.",
  ),
  points: [
    phrase("Headquarters in Riyadh", "المقر الرئيسي في الرياض"),
    phrase("Branches in Dammam, Hail, Qassim & Hafar Al Batin", "فروع في الدمام وحائل والقصيم وحفر الباطن"),
    phrase("Nationwide Distribution Network", "شبكة توزيع في أنحاء المملكة"),
    phrase("Fast & Reliable Supply Chain", "سلسلة توريد سريعة وموثوقة"),
  ],
  mapAlt: phrase("Map of Saudi Arabia", "خريطة المملكة العربية السعودية"),
  pinLabel: phrase("{name}, open in Google Maps", "{name}، فتح في خرائط Google"),
  pins: {
    "Riyadh (HQ)": phrase("Riyadh (HQ)", "الرياض (المقر)"),
    "Riyadh (Branch)": phrase("Riyadh (Branch)", "الرياض (فرع)"),
    Dammam: phrase("Dammam", "الدمام"),
    Qassim: phrase("Qassim", "القصيم"),
    Hail: phrase("Hail", "حائل"),
    "Hafar Al Batin": phrase("Hafar Al Batin", "حفر الباطن"),
    "Al Aziziyah": phrase("Al Aziziyah", "العزيزية"),
  },
  viewBranches: phrase("View all branches", "عرض جميع الفروع"),
};
