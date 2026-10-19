import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { HeroLogo } from "@/components/hero-logo";
import { StatMark } from "@/components/icons";
import { packDetail } from "@/lib/brand";
import { WhatsAppIcon } from "@/components/whatsapp-button";
import { branches } from "@/lib/catalog";
import { catalogue } from "@/lib/catalogue";
import { branchesCopy } from "@/lib/i18n/pages/branches";
import { chromeCopy } from "@/lib/i18n/pages/chrome";
import { contactCopy } from "@/lib/i18n/pages/contact";
import { getLocale } from "@/lib/i18n/locale";
import { fill, label, t } from "@/lib/i18n/phrase";
import { pageBanner, wrap } from "@/lib/ui";

function phoneDigits(phone: string) {
  return phone.replace(/\D/g, "");
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return { title: t(locale, contactCopy.metaTitle) };
}

const exterior = "https://nakhlaalbarari.com/wp-content/uploads/2026/06/Nakhla-Al-Barari-Contact-Us.avif";
const meetingRoom = "https://nakhlaalbarari.com/wp-content/uploads/2026/06/Home-Office.avif";

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ product?: string; branch?: string }> }) {
  const { product, branch: branchName } = await searchParams;
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
      <section className={`${pageBanner} relative bg-ink text-white`}>
        <HeroLogo />
        <div className={`${wrap} grid h-full items-center gap-8 py-8 lg:grid-cols-[1.05fr_0.95fr]`}>
          <div>
            <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/80">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link className="hover:text-white" href="/">{t(locale, chromeCopy.nav.home)}</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page">{t(locale, contactCopy.title)}</li>
              </ol>
            </nav>
            <h1 className="text-[40px] leading-tight font-semibold tracking-[-0.02em] text-white max-[640px]:text-[32px]">{t(locale, contactCopy.title)}</h1>
            <p className="mt-3 max-w-[42ch] text-white/80">{t(locale, contactCopy.lede)}</p>
            <a className="mt-6 inline-flex h-11 w-fit items-center justify-center rounded-md bg-white px-4 text-sm font-semibold text-green-dark transition-colors hover:bg-leaf" href="#enquiry">{t(locale, contactCopy.sendEnquiry)}</a>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img className="h-[300px] w-full rounded-lg object-cover object-bottom max-[640px]:h-[200px]" src={exterior} alt={t(locale, contactCopy.exteriorAlt)} />
            <img className="h-[300px] w-full rounded-lg object-cover max-[640px]:h-[200px]" src={meetingRoom} alt={t(locale, contactCopy.meetingAlt)} />
          </div>
        </div>
      </section>
      <section className="scroll-mt-20 border-b border-line bg-leaf/40 py-12" id="enquiry">
        <div className={`${wrap} grid items-start gap-10 lg:grid-cols-[1fr_minmax(0,520px)]`}>
          <div>
            <h2 className="text-2xl font-semibold">{t(locale, contactCopy.quoteTitle)}</h2>
            <p className="mt-2 max-w-[46ch] text-muted">{t(locale, contactCopy.quoteLede)}</p>
            <dl className="mt-6 grid gap-4 text-sm">
              <div>
                <dt className="font-medium">{t(locale, contactCopy.address)}</dt>
                <dd className="text-muted">{t(locale, branchesCopy.addresses["Riyadh HQ"])}</dd>
              </div>
              <div>
                <dt className="font-medium">{t(locale, contactCopy.phone)}</dt>
                <dd><a className="text-green" href="tel:+966555729077" dir="ltr">+966 555729077</a></dd>
              </div>
              <div>
                <dt className="font-medium">{t(locale, contactCopy.email)}</dt>
                <dd><a className="text-green" href="mailto:contact@nbarari.com" dir="ltr">contact@nbarari.com</a></dd>
              </div>
            </dl>
          </div>
          <div className="rounded-lg border border-line bg-white p-5">
            <ContactForm key={message} initialMessage={message} />
          </div>
        </div>
      </section>
      <section className="py-12" aria-labelledby="branches-heading">
        <div className={wrap}>
          <h2 className="text-2xl font-semibold" id="branches-heading">{t(locale, contactCopy.branches)}</h2>
          <p className="mt-2 mb-6 max-w-[62ch] text-sm text-muted">{t(locale, contactCopy.branchesLede)}</p>
          <div className="grid grid-cols-2 gap-4 max-[640px]:grid-cols-1">
            {branches.map((branch) => {
              const digits = phoneDigits(branch.phone);
              const whatsapp = `https://wa.me/${digits}?text=${encodeURIComponent(fill(locale, chromeCopy.messages.enquiryFor, { name: label(locale, chromeCopy.branches, branch.name) }))}`;
              const active = selected?.name === branch.name;
              return (
                <article className={`rounded-lg border bg-white p-5 ${branch.name === "Riyadh HQ" ? "sm:col-span-2" : ""} ${active ? "border-green" : "border-line"}`} key={branch.name}>
                  <h3 className="mb-1.5 flex items-center gap-2 text-xl">
                    <StatMark className="h-7 w-7 shrink-0" name="branches" />
                    {label(locale, chromeCopy.branches, branch.name)}
                  </h3>
                  <p className="mb-1.5 text-muted">{t(locale, branchesCopy.addresses[branch.name as keyof typeof branchesCopy.addresses])}</p>
                  <p className="mb-1.5 text-muted"><a href={`tel:${branch.phone.replace(/\s/g, "")}`} dir="ltr">{branch.phone}</a></p>
                  <p className="m-0 flex flex-wrap items-center gap-x-2 gap-y-1">
                    <a className="inline-flex items-center gap-1.5 font-bold text-[#128C7E]" href={whatsapp} target="_blank" rel="noopener">
                      <WhatsAppIcon className="h-4 w-4" />
                      {t(locale, chromeCopy.buttons.whatsApp)}
                    </a>
                    <span className="text-muted" aria-hidden="true">|</span>
                    <a className="font-bold text-green" href={branch.map} target="_blank" rel="noopener">{t(locale, chromeCopy.buttons.googleMaps)}</a>
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
