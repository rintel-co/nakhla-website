import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { HeroLogo } from "@/components/hero-logo";
import { PageMark, StatMark } from "@/components/icons";
import { packDetail } from "@/lib/brand";
import { WhatsAppIcon } from "@/components/whatsapp-button";
import { branches } from "@/lib/catalog";
import { catalogue } from "@/lib/catalogue";
import { branchesCopy } from "@/lib/i18n/pages/branches";
import { chromeCopy } from "@/lib/i18n/pages/chrome";
import { contactCopy } from "@/lib/i18n/pages/contact";
import { getLocale } from "@/lib/i18n/locale";
import { fill, label, t } from "@/lib/i18n/phrase";
import { wrap } from "@/lib/ui";

function phoneDigits(phone: string) {
  return phone.replace(/\D/g, "");
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return { title: t(locale, contactCopy.metaTitle) };
}

const exterior = "https://nakhlaalbarari.com/wp-content/uploads/2026/06/Nakhla-Al-Barari-Contact-Us.avif";
const meetingRoom = "https://nakhlaalbarari.com/wp-content/uploads/2026/06/Home-Office.avif";

const enquiryCategories = ["Food Products", "Frozen Foods", "Soft Drinks & Beverages", "Non Food"];

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ product?: string; branch?: string; category?: string }> }) {
  const { product, branch: branchName, category } = await searchParams;
  const locale = await getLocale();
  const item = product ? catalogue.find((entry) => entry.slug === product) : undefined;
  const selected = branchName ? branches.find((branch) => branch.name === branchName) : undefined;
  const message = item
    ? [
        fill(locale, chromeCopy.messages.enquiryAbout, { name: item.name }),
        fill(locale, chromeCopy.messages.enquiryBrand, { brand: item.brand }),
        fill(locale, chromeCopy.messages.enquiryCategory, { category: label(locale, chromeCopy.categories, item.cats[0]) }),
        ...(packDetail(item.name) ? [fill(locale, chromeCopy.messages.enquiryPack, { pack: packDetail(item.name) as string })] : []),
      ].join("\n")
    : selected
      ? `${fill(locale, chromeCopy.messages.enquiryFor, { name: label(locale, chromeCopy.branches, selected.name) })}\n${t(locale, branchesCopy.addresses[selected.name as keyof typeof branchesCopy.addresses])}\n${selected.phone}`
      : "";

  return (
    <main>
      <section className="relative overflow-hidden bg-ink text-white">
        <HeroLogo />
        <div className={`${wrap} relative grid items-end gap-10 py-16 max-[640px]:py-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:py-20`}>
          <div>
            <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/80">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link className="hover:text-white" href="/">{t(locale, chromeCopy.nav.home)}</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page">{t(locale, contactCopy.title)}</li>
              </ol>
            </nav>
            <h1 className="hero-in max-w-[18ch] text-4xl leading-tight font-bold tracking-[-0.03em] text-white sm:text-5xl">{t(locale, contactCopy.title)}</h1>
            <p className="hero-in hero-in-2 mt-4 max-w-[46ch] text-white/80">{t(locale, contactCopy.lede)}</p>
            <a className="hero-in hero-in-3 mt-6 inline-flex h-11 w-fit items-center justify-center rounded-md bg-white px-4 text-sm font-semibold text-green-dark transition-colors hover:bg-leaf" href="#enquiry">{t(locale, contactCopy.sendEnquiry)}</a>
          </div>
          <div className="hero-in hero-in-4 grid grid-cols-2 items-end gap-3">
            <img className="aspect-[3/4] w-full rounded-3xl object-cover object-bottom" src={exterior} alt={t(locale, contactCopy.exteriorAlt)} />
            <img className="aspect-[3/4] w-full rounded-3xl object-cover object-center" src={meetingRoom} alt={t(locale, contactCopy.meetingAlt)} />
          </div>
        </div>
      </section>
      <section className="scroll-mt-20 bg-green-dark py-16 text-white sm:py-20" id="enquiry">
        <div className={wrap}>
          <h2 className="max-w-[16ch] text-3xl font-bold text-white sm:text-4xl">{t(locale, contactCopy.quoteTitle)}</h2>
          <p className="mt-3 max-w-[62ch] text-white/75">{t(locale, contactCopy.quoteLede)}</p>
          <dl className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="relative h-full overflow-hidden rounded-3xl bg-white/10 p-5">
              <StatMark className="pointer-events-none absolute -bottom-5 -end-2 h-24 w-24 opacity-30 brightness-0 invert" name="branches" />
              <dt className="relative font-semibold text-white">{t(locale, contactCopy.address)}</dt>
              <dd className="relative mt-1 text-white/75">{t(locale, branchesCopy.addresses["Riyadh HQ"])}</dd>
            </div>
            <div className="relative h-full overflow-hidden rounded-3xl bg-white/10 p-5">
              <PageMark className="pointer-events-none absolute -bottom-5 -end-2 h-24 w-24 opacity-30 brightness-0 invert" name="phone" />
              <dt className="relative font-semibold text-white">{t(locale, contactCopy.phone)}</dt>
              <dd className="relative mt-1"><a className="font-semibold text-white" href="tel:+966555729077" dir="ltr">+966 555729077</a></dd>
            </div>
            <div className="relative h-full overflow-hidden rounded-3xl bg-white/10 p-5">
              <PageMark className="pointer-events-none absolute -bottom-5 -end-2 h-24 w-24 opacity-30 brightness-0 invert" name="mail" />
              <dt className="relative font-semibold text-white">{t(locale, contactCopy.email)}</dt>
              <dd className="relative mt-1 break-all"><a className="font-semibold text-white" href="mailto:contact@nbarari.com" dir="ltr">contact@nbarari.com</a></dd>
            </div>
          </dl>
          <div className="mt-8 rounded-3xl bg-white p-6 text-ink sm:p-8">
            <ContactForm key={`${message}-${category ?? ""}`} initialMessage={message} initialCategory={enquiryCategories.includes(category ?? "") ? category : ""} />
          </div>
        </div>
      </section>
      <section className="bg-leaf py-16 sm:py-20" aria-labelledby="branches-heading">
        <div className={wrap}>
          <h2 className="text-3xl font-bold text-green-dark sm:text-4xl" id="branches-heading">{t(locale, contactCopy.branches)}</h2>
          <p className="mt-3 mb-8 max-w-[62ch] text-ink/70">{t(locale, contactCopy.branchesLede)}</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {branches.map((branch) => {
              const digits = phoneDigits(branch.phone);
              const whatsapp = `https://wa.me/${digits}?text=${encodeURIComponent(fill(locale, chromeCopy.messages.enquiryFor, { name: label(locale, chromeCopy.branches, branch.name) }))}`;
              const active = selected?.name === branch.name;
              return (
                <article className={`group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white p-6 ${active ? "ring-2 ring-green" : ""}`} key={branch.name}>
                  <StatMark className="pointer-events-none absolute -bottom-6 -end-3 h-28 w-28 opacity-15 transition duration-300 group-hover:scale-110" name="branches" />
                  <h3 className="relative mb-2 flex items-center gap-2 text-xl font-bold text-ink">
                    <StatMark className="h-8 w-8 shrink-0 transition duration-300 group-hover:scale-110" name="branches" />
                    {label(locale, chromeCopy.branches, branch.name)}
                  </h3>
                  <p className="relative mb-1.5 text-ink/70">{t(locale, branchesCopy.addresses[branch.name as keyof typeof branchesCopy.addresses])}</p>
                  <p className="relative mb-3 text-ink/70"><a href={`tel:${branch.phone.replace(/\s/g, "")}`} dir="ltr">{branch.phone}</a></p>
                  <p className="relative m-0 mt-auto flex flex-wrap items-center gap-x-2 gap-y-1">
                    <a className="inline-flex items-center gap-1.5 font-bold text-[#128C7E]" href={whatsapp} target="_blank" rel="noopener">
                      <WhatsAppIcon className="h-4 w-4" />
                      {t(locale, chromeCopy.buttons.whatsApp)}
                    </a>
                    <span className="text-ink/40" aria-hidden="true">|</span>
                    <a className="font-bold text-green-dark" href={branch.map} target="_blank" rel="noopener">{t(locale, chromeCopy.buttons.googleMaps)}</a>
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
