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

      <section className="bg-page py-16 sm:py-20" aria-labelledby="intro-heading">
        <div className={wrap}>
          <h2 className={heading} id="intro-heading">{t(locale, aboutCopy.introTitle)}</h2>
          <p className="mt-3 max-w-[72ch] text-ink/70">{t(locale, aboutCopy.intro)}</p>
          <Link className="mt-6 inline-flex h-11 items-center justify-center rounded-md bg-green px-4 text-sm font-semibold text-green-dark transition-colors hover:bg-green-dark hover:text-white" href="/contact">{t(locale, aboutCopy.contactTeam)}</Link>
        </div>
      </section>

      <section className="bg-green-dark py-16 sm:py-20">
        <div className={`${wrap} grid items-stretch gap-4 lg:grid-cols-3`}>
          <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-leaf p-6 text-ink">
            <PageMark className="pointer-events-none absolute -bottom-6 -end-4 h-32 w-32 opacity-25 transition duration-300 group-hover:scale-110" name="vision" />
            <h2 className="relative mb-2 text-2xl font-bold text-ink">{t(locale, aboutCopy.visionTitle)}</h2>
            <p className="relative m-0 text-ink/70">{t(locale, aboutCopy.vision)}</p>
          </article>
          <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-6 text-white">
            <PageMark className="pointer-events-none absolute -bottom-6 -end-4 h-32 w-32 opacity-25 brightness-0 invert transition duration-300 group-hover:scale-110" name="mission" />
            <h2 className="relative mb-2 text-2xl font-bold text-white">{t(locale, aboutCopy.missionTitle)}</h2>
            <p className="relative m-0 text-white/75">{t(locale, aboutCopy.mission)}</p>
          </article>
          <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-6 text-white">
            <PageMark className="pointer-events-none absolute -bottom-6 -end-4 h-32 w-32 opacity-25 brightness-0 invert transition duration-300 group-hover:scale-110" name="values" />
            <h2 className="relative mb-3 text-2xl font-bold text-white">{t(locale, aboutCopy.valuesTitle)}</h2>
            <ul className="relative m-0 space-y-3">
              {aboutCopy.values.map((value) => (
                <li key={value.title.en}>
                  <p className="text-sm font-semibold text-white">{t(locale, value.title)}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-white/75">{t(locale, value.copy)}</p>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="bg-page py-16 sm:py-20" aria-labelledby="team-heading">
        <div className={wrap}>
          <h2 className={heading} id="team-heading">{t(locale, aboutCopy.teamTitle)}</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {directors.map((person) => (
              <article className="flex overflow-hidden rounded-3xl bg-white" key={person.name}>
                {person.photo ? (
                  <img className="h-auto w-28 shrink-0 object-cover object-top sm:w-36" src={person.photo} alt="" />
                ) : (
                  <div className="grid w-28 shrink-0 place-items-center bg-leaf sm:w-36" aria-hidden="true">
                    <UserMark className="h-16 w-16" />
                  </div>
                )}
                <div className="p-5">
                  <h3 className="text-base font-bold leading-snug text-ink">{person.name}</h3>
                  <p className="mt-1 text-sm font-medium text-green-dark">{t(locale, roleCopy[person.role as keyof typeof roleCopy])}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-green-dark py-16 text-white sm:py-20" aria-labelledby="brands-heading">
        <div className={wrap}>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-[62ch]">
              <h2 className="text-3xl font-bold text-white sm:text-4xl" id="brands-heading">{t(locale, aboutCopy.brandsTitle)}</h2>
              <p className="mt-3 text-white/75">{t(locale, aboutCopy.brandsLede)}</p>
            </div>
            <Link className="inline-flex h-11 items-center justify-center rounded-md bg-white px-4 text-sm font-semibold text-green-dark transition-colors hover:bg-leaf" href="/products">{t(locale, aboutCopy.exploreAllBrands)}</Link>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {brands.map((brand) => {
              const labelName = catalogueBrandName(brand.name) ?? brand.name;
              return (
                <Link className="flex h-24 items-center justify-center rounded-2xl bg-white px-4 transition-colors hover:bg-leaf" href={brandHref(brand.name)} key={brand.name} aria-label={labelName}>
                  <img className="max-h-12 max-w-full object-contain" src={brand.src} alt="" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-leaf py-16 sm:py-20" id="about-contact" aria-labelledby="about-contact-heading">
        <div className={wrap}>
          <h2 className={heading} id="about-contact-heading">{t(locale, aboutCopy.contactTitle)}</h2>
          <dl className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="group relative overflow-hidden rounded-3xl bg-white p-6">
              <StatMark className="pointer-events-none absolute -bottom-6 -end-3 h-28 w-28 opacity-20 transition duration-300 group-hover:scale-110" name="branches" />
              <dt className="relative text-xs font-semibold tracking-wide text-ink/60">{t(locale, aboutCopy.addressLabel)}</dt>
              <dd className="relative mt-2 text-sm text-ink">{t(locale, aboutCopy.address)}</dd>
            </div>
            <div className="group relative overflow-hidden rounded-3xl bg-white p-6">
              <PageMark className="pointer-events-none absolute -bottom-6 -end-3 h-28 w-28 opacity-20 transition duration-300 group-hover:scale-110" name="phone" />
              <dt className="relative text-xs font-semibold tracking-wide text-ink/60">{t(locale, aboutCopy.phoneLabel)}</dt>
              <dd className="relative mt-2 text-sm"><a className="font-semibold text-green-dark" href="tel:+966555729077" dir="ltr">+966 555729077</a></dd>
            </div>
            <div className="group relative overflow-hidden rounded-3xl bg-white p-6">
              <PageMark className="pointer-events-none absolute -bottom-6 -end-3 h-28 w-28 opacity-20 transition duration-300 group-hover:scale-110" name="mail" />
              <dt className="relative text-xs font-semibold tracking-wide text-ink/60">{t(locale, aboutCopy.emailLabel)}</dt>
              <dd className="relative mt-2 text-sm"><a className="font-semibold text-green-dark" href="mailto:contact@nbarari.com" dir="ltr">contact@nbarari.com</a></dd>
            </div>
          </dl>
          <p className="mt-6 text-sm"><Link className="font-semibold text-green-dark underline decoration-green-dark/40 underline-offset-4 hover:decoration-green-dark" href="/contact">{t(locale, aboutCopy.contactPage)}</Link></p>
        </div>
      </section>
    </main>
  );
}
