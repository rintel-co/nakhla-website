import type { Metadata } from "next";
import Link from "next/link";
import { StatMark } from "@/components/icons";
import { PageBanner } from "@/components/page-banner";
import { branches } from "@/lib/catalog";
import { branchesCopy } from "@/lib/i18n/pages/branches";
import { chromeCopy } from "@/lib/i18n/pages/chrome";
import { getLocale } from "@/lib/i18n/locale";
import { label, t } from "@/lib/i18n/phrase";
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
      />
      <section className="scroll-mt-20 bg-leaf py-16 sm:py-20" id="branch-contacts" aria-labelledby="branch-contacts-heading">
        <div className={wrap}>
          <h2 className="text-3xl leading-tight font-bold tracking-[-0.03em] text-green-dark sm:text-4xl" id="branch-contacts-heading">{t(locale, branchesCopy.detailsTitle)}</h2>
          <p className="mt-3 max-w-[68ch] text-ink/70">{t(locale, branchesCopy.detailsLede)}</p>
          <div className="mt-8 grid grid-cols-2 gap-4 max-[640px]:grid-cols-1">
            {branches.map((branch) => (
                <article className="group relative overflow-hidden rounded-3xl bg-white p-6" key={branch.name}>
                  <StatMark className="pointer-events-none absolute -bottom-6 -end-3 h-28 w-28 opacity-15 transition duration-300 group-hover:scale-110" name="branches" />
                  <h2 className="relative mb-2 flex items-center gap-2 text-xl font-bold text-ink">
                    <StatMark className="h-8 w-8 shrink-0 transition duration-300 group-hover:scale-110" name="branches" />
                    {label(locale, chromeCopy.branches, branch.name)}
                  </h2>
                  <p className="relative mb-1.5 text-ink/70">{t(locale, branchesCopy.addresses[branch.name as keyof typeof branchesCopy.addresses])}</p>
                  <p className="relative text-ink/70"><a href={`tel:${branch.phone.replace(/\s/g, "")}`} dir="ltr">{branch.phone}</a></p>
                </article>
            ))}
          </div>
          <div className="mt-10 rounded-3xl bg-green-dark px-6 py-10 text-white sm:px-12 sm:py-14">
            <h2 className="max-w-[16ch] text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl">{t(locale, branchesCopy.nearestTitle)}</h2>
            <p className="mt-3 max-w-[62ch] text-white/75">{t(locale, branchesCopy.nearestLede)}</p>
            <Link className="mt-6 inline-flex h-11 items-center justify-center rounded-md bg-white px-4 text-sm font-semibold text-green-dark transition-colors hover:bg-leaf" href="/contact#enquiry">{t(locale, branchesCopy.contactTeam)}</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
