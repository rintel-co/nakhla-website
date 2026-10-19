import type { Metadata } from "next";
import Link from "next/link";
import { GroupMark } from "@/components/icons";
import { serviceGroups } from "@/lib/catalog";
import { servicesCopy } from "@/lib/i18n/pages/services";
import { chromeCopy } from "@/lib/i18n/pages/chrome";
import { getLocale } from "@/lib/i18n/locale";
import { label, t } from "@/lib/i18n/phrase";
import { pillSolid, wrap } from "@/lib/ui";

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
      <section className="border-b border-line py-12">
        <div className={wrap}>
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-muted">
            <ol className="flex flex-wrap items-center gap-2">
                <li><Link className="hover:text-green" href="/">{t(locale, chromeCopy.nav.home)}</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page">{t(locale, servicesCopy.title)}</li>
              </ol>
            </nav>
          <h1 className="text-[40px] leading-tight font-semibold tracking-[-0.02em] max-[640px]:text-[32px]">{t(locale, servicesCopy.title)}</h1>
          <p className="mt-3 max-w-[62ch] text-muted">{t(locale, servicesCopy.lede)}</p>
          <Link className={`${pillSolid} mt-6`} href="/products">{t(locale, servicesCopy.browseProducts)}</Link>
          <div className="mt-8 grid gap-4">
            {serviceGroups.map((group) => {
              const route = routes[group.name];
              const copy = servicesCopy.groups[group.name as keyof typeof servicesCopy.groups];
              return (
                <article className="rounded-lg border border-line bg-white p-5" id={serviceId(group.name)} key={group.name}>
                  <div className="flex items-start gap-4">
                    <GroupMark className="h-10 w-10 shrink-0" name={group.name} />
                    <div>
                      <h2 className="text-xl font-semibold">{t(locale, copy.name)}</h2>
                      <p className="mt-2 max-w-[68ch] text-sm leading-relaxed text-muted">{t(locale, copy.summary)}</p>
                      {copy.note.en ? <p className="mt-2 max-w-[68ch] text-sm leading-relaxed text-muted">{t(locale, copy.note)}</p> : null}
                      {group.items.length > 0 ? (
                        <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                          {group.items.map((item) => (
                            <li className="flex items-center gap-2.5 rounded-lg border border-line bg-leaf/40 px-3 py-2.5" key={item}>
                              <GroupMark className="h-8 w-8 shrink-0" name={item} />
                              <span className="text-sm font-semibold leading-snug">{label(locale, servicesCopy.items, item)}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                      {route ? <Link className={`${pillSolid} mt-4`} href={route.href}>{t(locale, copy.button)}</Link> : null}
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
