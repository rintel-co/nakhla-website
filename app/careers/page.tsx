import type { Metadata } from "next";
import { PageBanner } from "@/components/page-banner";
import { WhatsAppIcon, whatsappBtn } from "@/components/whatsapp-button";
import { careersCopy } from "@/lib/i18n/pages/careers";
import { chromeCopy } from "@/lib/i18n/pages/chrome";
import { getLocale } from "@/lib/i18n/locale";
import { t } from "@/lib/i18n/phrase";
import { WHATSAPP } from "@/lib/catalog";
import { wrap } from "@/lib/ui";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return { title: t(locale, careersCopy.metaTitle) };
}

const office = "https://nakhlaalbarari.com/wp-content/uploads/2026/06/Inside-office-4.avif";

export default async function CareersPage() {
  const locale = await getLocale();
  const href = `${WHATSAPP}?text=${encodeURIComponent(t(locale, chromeCopy.messages.careerEnquiry))}`;

  return (
    <main>
      <PageBanner
        title={t(locale, careersCopy.title)}
        kicker={t(locale, careersCopy.kicker)}
        lede={t(locale, careersCopy.lede)}
        image={office}
        imageAlt={t(locale, careersCopy.imageAlt)}
        imageClass="object-right"
      />
      <section className="py-12">
        <div className={wrap}>
          <a className={whatsappBtn} href={href} target="_blank" rel="noopener">
            <WhatsAppIcon />
            {t(locale, careersCopy.submitResume)}
          </a>
        </div>
      </section>
    </main>
  );
}
