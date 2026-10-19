import type { Metadata } from "next";
import Link from "next/link";
import { PageMark, StatMark, UserMark } from "@/components/icons";
import { PageBanner } from "@/components/page-banner";
import { brandHref, catalogueBrandName } from "@/lib/brand";
import { brands } from "@/lib/catalog";
import { aboutCopy } from "@/lib/i18n/pages/about";
import { getLocale } from "@/lib/i18n/locale";
import { t } from "@/lib/i18n/phrase";
import { heading, wrap } from "@/lib/ui";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return { title: t(locale, aboutCopy.metaTitle) };
}

const aboutImage = "https://nakhlaalbarari.com/wp-content/uploads/2026/06/About-us.avif";

const directors: { name: string; role: string; photo?: string }[] = [
  { name: "Yazeed Mohammed Al Suwaylih", role: "Managing Partner" },
  { name: "Basheer Nadammel", role: "General Manager", photo: "https://nakhlaalbarari.com/wp-content/uploads/2026/06/BASHEER-NADAMMEL.avif" },
  { name: "Shameer Cheriya Puthan Veetil", role: "Managing Partner", photo: "https://nakhlaalbarari.com/wp-content/uploads/2026/06/SHAMEER-CHERIYA-PUTHAN-VEETIL.avif" },
  { name: "Sohail Abdulrazzaq", role: "Managing Partner", photo: "https://nakhlaalbarari.com/wp-content/uploads/2026/06/SOHAIL-ABDULRAZZAQ.avif" },
  { name: "Yahiya Purayil", role: "Managing Partner", photo: "https://nakhlaalbarari.com/wp-content/uploads/2026/06/YAHIYA-PURAYIL.avif" },
];

const roleCopy = {
  "Managing Partner": aboutCopy.roles.managingPartner,
  "General Manager": aboutCopy.roles.generalManager,
} as const;

export default async function AboutPage() {
  const locale = await getLocale();

  return (
    <main>
      <PageBanner
        title={t(locale, aboutCopy.title)}
        lede={t(locale, aboutCopy.lede)}
        image={aboutImage}
        imageAlt={t(locale, aboutCopy.imageAlt)}
        action={{ href: "/products", label: t(locale, aboutCopy.exploreProducts) }}
      />

      <section className="border-b border-line py-14" aria-labelledby="intro-heading">
        <div className={wrap}>
          <h2 className={heading} id="intro-heading">{t(locale, aboutCopy.introTitle)}</h2>
          <p className="mt-3 max-w-[72ch] text-muted">{t(locale, aboutCopy.intro)}</p>
          <Link className="mt-6 inline-flex h-11 items-center justify-center rounded-md border border-green bg-green px-4 text-sm font-semibold text-white transition-colors hover:border-green-dark hover:bg-green-dark" href="/contact">{t(locale, aboutCopy.contactTeam)}</Link>
        </div>
      </section>

      <section className="border-b border-line bg-leaf/40 py-14">
        <div className={`${wrap} grid items-stretch gap-4 lg:grid-cols-3`}>
          <article className="flex h-full flex-col rounded-lg border border-line bg-white p-5">
            <span className="mb-4 grid h-12 w-12 place-items-center rounded-full bg-leaf"><PageMark className="h-7 w-7" name="vision" /></span>
            <h2 className="mb-2 text-lg font-semibold">{t(locale, aboutCopy.visionTitle)}</h2>
            <p className="m-0 text-muted">{t(locale, aboutCopy.vision)}</p>
          </article>
          <article className="flex h-full flex-col rounded-lg border border-line bg-white p-5">
            <span className="mb-4 grid h-12 w-12 place-items-center rounded-full bg-leaf"><PageMark className="h-7 w-7" name="mission" /></span>
            <h2 className="mb-2 text-lg font-semibold">{t(locale, aboutCopy.missionTitle)}</h2>
            <p className="m-0 text-muted">{t(locale, aboutCopy.mission)}</p>
          </article>
          <article className="flex h-full flex-col rounded-lg border border-line bg-white p-5 lg:col-span-1">
            <span className="mb-4 grid h-12 w-12 place-items-center rounded-full bg-leaf"><PageMark className="h-7 w-7" name="values" /></span>
            <h2 className="mb-2 text-lg font-semibold">{t(locale, aboutCopy.valuesTitle)}</h2>
            <ul className="m-0 space-y-3">
              {aboutCopy.values.map((value) => (
                <li key={value.title.en}>
                  <p className="text-sm font-semibold">{t(locale, value.title)}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-muted">{t(locale, value.copy)}</p>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="border-b border-line py-14" aria-labelledby="team-heading">
        <div className={wrap}>
          <h2 className={heading} id="team-heading">{t(locale, aboutCopy.teamTitle)}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {directors.map((person) => (
              <article className="flex overflow-hidden rounded-lg border border-line bg-white" key={person.name}>
                {person.photo ? (
                  <img className="h-auto w-28 shrink-0 object-cover object-top sm:w-36" src={person.photo} alt="" />
                ) : (
                  <div className="grid w-28 shrink-0 place-items-center bg-leaf sm:w-36" aria-hidden="true">
                    <UserMark className="h-16 w-16" />
                  </div>
                )}
                <div className="p-4">
                  <h3 className="text-base font-semibold leading-snug">{person.name}</h3>
                  <p className="mt-1 text-sm font-medium text-green">{t(locale, roleCopy[person.role as keyof typeof roleCopy])}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-leaf/40 py-14" aria-labelledby="brands-heading">
        <div className={wrap}>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-[62ch]">
              <h2 className={heading} id="brands-heading">{t(locale, aboutCopy.brandsTitle)}</h2>
              <p className="mt-2 text-sm text-muted">{t(locale, aboutCopy.brandsLede)}</p>
            </div>
            <Link className="inline-flex h-11 items-center justify-center rounded-md border border-green bg-green px-4 text-sm font-semibold text-white transition-colors hover:border-green-dark hover:bg-green-dark" href="/products">{t(locale, aboutCopy.exploreAllBrands)}</Link>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {brands.map((brand) => {
              const labelName = catalogueBrandName(brand.name) ?? brand.name;
              return (
                <Link className="flex h-24 items-center justify-center rounded-lg border border-line bg-white px-4 transition-colors hover:border-green" href={brandHref(brand.name)} key={brand.name} aria-label={labelName}>
                  <img className="max-h-12 max-w-full object-contain" src={brand.src} alt="" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-green-dark py-14 text-white" id="about-contact" aria-labelledby="about-contact-heading">
        <div className={wrap}>
          <h2 className={`${heading} text-white`} id="about-contact-heading">{t(locale, aboutCopy.contactTitle)}</h2>
          <dl className="mt-6 grid gap-5 sm:grid-cols-3">
            <div className="flex gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10"><StatMark className="h-6 w-6 brightness-0 invert" name="branches" /></span>
              <div>
                <dt className="text-xs font-semibold tracking-wide text-white/60">{t(locale, aboutCopy.addressLabel)}</dt>
                <dd className="mt-1 text-sm text-white/90">{t(locale, aboutCopy.address)}</dd>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10"><PageMark className="h-6 w-6 brightness-0 invert" name="phone" /></span>
              <div>
                <dt className="text-xs font-semibold tracking-wide text-white/60">{t(locale, aboutCopy.phoneLabel)}</dt>
                <dd className="mt-1 text-sm"><a className="text-white hover:text-leaf" href="tel:+966555729077">+966 555729077</a></dd>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10"><PageMark className="h-6 w-6 brightness-0 invert" name="mail" /></span>
              <div>
                <dt className="text-xs font-semibold tracking-wide text-white/60">{t(locale, aboutCopy.emailLabel)}</dt>
                <dd className="mt-1 text-sm"><a className="text-white hover:text-leaf" href="mailto:contact@nbarari.com">contact@nbarari.com</a></dd>
              </div>
            </div>
          </dl>
          <p className="mt-5 text-sm"><Link className="font-semibold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white" href="/contact">{t(locale, aboutCopy.contactPage)}</Link></p>
        </div>
      </section>
    </main>
  );
}
