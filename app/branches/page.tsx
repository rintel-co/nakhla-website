import type { Metadata } from "next";
import Link from "next/link";
import { StatMark } from "@/components/icons";
import { PageBanner } from "@/components/page-banner";
import { WhatsAppIcon } from "@/components/whatsapp-button";
import { branches } from "@/lib/catalog";
import { branchesCopy } from "@/lib/i18n/pages/branches";
import { chromeCopy } from "@/lib/i18n/pages/chrome";
import { getLocale } from "@/lib/i18n/locale";
import { fill, label, t } from "@/lib/i18n/phrase";
import { wrap } from "@/lib/ui";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return { title: t(locale, branchesCopy.metaTitle) };
}

const corridor = "https://nakhlaalbarari.com/wp-content/uploads/2026/06/Inside-office-4.avif";

export default async function BranchesPage() {
  const locale = await getLocale();

  return (
    <main>
      <PageBanner
        title={t(locale, branchesCopy.title)}
        lede={t(locale, branchesCopy.lede)}
        image={corridor}
        imageAlt={t(locale, branchesCopy.imageAlt)}
        action={{ href: "#branch-contacts", label: t(locale, branchesCopy.contactBranch) }}
      />
      <section className="scroll-mt-20 py-12" id="branch-contacts" aria-labelledby="branch-contacts-heading">
        <div className={wrap}>
          <h2 className="text-2xl leading-tight font-semibold tracking-[-0.02em]" id="branch-contacts-heading">{t(locale, branchesCopy.detailsTitle)}</h2>
          <p className="mt-2 max-w-[68ch] text-sm text-muted">{t(locale, branchesCopy.detailsLede)}</p>
          <div className="mt-8 grid grid-cols-2 gap-4 max-[640px]:grid-cols-1">
            {branches.map((branch) => {
              const whatsapp = `https://wa.me/${branch.phone.replace(/\D/g, "")}?text=${encodeURIComponent(fill(locale, chromeCopy.messages.enquiryFor, { name: label(locale, chromeCopy.branches, branch.name) }))}`;
              return (
                <article className="rounded-lg border border-line bg-white p-5" key={branch.name}>
                  <h2 className="mb-1.5 flex items-center gap-2 text-xl">
                    <StatMark className="h-7 w-7 shrink-0" name="branches" />
                    {label(locale, chromeCopy.branches, branch.name)}
                  </h2>
                  <p className="mb-1.5 text-muted">{t(locale, branchesCopy.addresses[branch.name as keyof typeof branchesCopy.addresses])}</p>
                  <p className="mb-1.5 text-muted"><a href={`tel:${branch.phone.replace(/\s/g, "")}`}>{branch.phone}</a></p>
                  <p className="m-0 flex flex-wrap items-center gap-x-2 gap-y-1">
                    <a className="inline-flex items-center gap-1.5 font-bold text-[#128C7E]" href={whatsapp} target="_blank" rel="noopener">
                      <WhatsAppIcon className="h-4 w-4" />
                      {t(locale, branchesCopy.whatsApp)}
                    </a>
                    <span className="text-muted" aria-hidden="true">|</span>
                    <a className="font-bold text-green" href={branch.map} target="_blank" rel="noopener">{t(locale, branchesCopy.googleMaps)}</a>
                    <span className="text-muted" aria-hidden="true">|</span>
                    <Link className="font-bold text-green" href={`/offers?branch=${encodeURIComponent(branch.name)}`}>{t(locale, branchesCopy.weeklyOffers)}</Link>
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
