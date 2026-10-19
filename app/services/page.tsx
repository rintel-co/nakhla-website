import type { Metadata } from "next";
import Link from "next/link";
import { GroupMark } from "@/components/icons";
import { serviceGroups } from "@/lib/catalog";
import { servicesCopy } from "@/lib/i18n/pages/services";
import { chromeCopy } from "@/lib/i18n/pages/chrome";
import { getLocale } from "@/lib/i18n/locale";
import { label, t } from "@/lib/i18n/phrase";
import { wrap } from "@/lib/ui";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return { title: t(locale, servicesCopy.metaTitle) };
}

const routes: Record<string, { href: string }> = {
  "Food Products": { href: "/products#catalogue" },
  "Frozen Foods": { href: "/contact" },
  "Soft Drinks & Beverages": { href: "/products?tab=Drinks#catalogue" },
  "Non Food": { href: "/contact" },
};

function serviceId(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default async function ServicesPage() {
  const locale = await getLocale();

  return (
    <main>
      <section className="bg-green-dark py-16 text-white sm:py-20">
        <div className={wrap}>
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/70">
            <ol className="flex flex-wrap items-center gap-2">
                <li><Link className="hover:text-white" href="/">{t(locale, chromeCopy.nav.home)}</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page">{t(locale, servicesCopy.title)}</li>
              </ol>
            </nav>
          <h1 className="max-w-[16ch] text-4xl leading-tight font-bold tracking-[-0.03em] text-white sm:text-5xl">{t(locale, servicesCopy.title)}</h1>
          <p className="mt-4 max-w-[62ch] text-white/75">{t(locale, servicesCopy.lede)}</p>
          <Link className="mt-6 inline-flex h-11 items-center justify-center rounded-md bg-white px-4 text-sm font-semibold text-green-dark transition-colors hover:bg-leaf" href="/products">{t(locale, servicesCopy.browseProducts)}</Link>
          <div className="mt-10 grid gap-4">
            {serviceGroups.map((group, index) => {
              const route = routes[group.name];
              const copy = servicesCopy.groups[group.name as keyof typeof servicesCopy.groups];
              const featured = index === 0;
              return (
                <article className={`group relative overflow-hidden rounded-3xl p-6 sm:p-8 ${featured ? "bg-leaf text-ink" : "border border-white/10 bg-white/10"}`} id={serviceId(group.name)} key={group.name}>
                  <GroupMark className={`pointer-events-none absolute -bottom-8 -end-4 h-36 w-36 transition duration-300 group-hover:scale-110 ${featured ? "opacity-20" : "opacity-25 brightness-0 invert"}`} name={group.name} />
                  <div className="relative flex items-start gap-4">
                    <GroupMark className={`h-12 w-12 shrink-0 transition duration-300 hover:scale-110 ${featured ? "" : "brightness-0 invert"}`} name={group.name} />
                    <div>
                      <h2 className={`text-2xl font-bold ${featured ? "text-ink" : "text-white"}`}>{t(locale, copy.name)}</h2>
                      <p className={`mt-2 max-w-[68ch] text-sm leading-relaxed ${featured ? "text-ink/70" : "text-white/75"}`}>{t(locale, copy.summary)}</p>
                      {copy.note.en ? <p className={`mt-2 max-w-[68ch] text-sm leading-relaxed ${featured ? "text-ink/70" : "text-white/75"}`}>{t(locale, copy.note)}</p> : null}
                      {group.items.length > 0 ? (
                        <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                          {group.items.map((item) => (
                            <li className={`flex items-center gap-2.5 rounded-2xl px-3 py-2.5 ${featured ? "bg-white" : "bg-white/10"}`} key={item}>
                              <GroupMark className={`h-8 w-8 shrink-0 ${featured ? "" : "brightness-0 invert"}`} name={item} />
                              <span className={`text-sm font-semibold leading-snug ${featured ? "text-ink" : "text-white"}`}>{label(locale, servicesCopy.items, item)}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                      {route ? (
                        <Link className={`mt-5 inline-flex h-11 items-center justify-center rounded-md px-4 text-sm font-semibold transition-colors ${featured ? "bg-green-dark text-white hover:bg-ink" : "bg-white text-green-dark hover:bg-leaf"}`} href={route.href}>{t(locale, copy.button)}</Link>
                      ) : null}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
