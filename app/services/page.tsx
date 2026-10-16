import type { Metadata } from "next";
import Link from "next/link";
import { GroupMark } from "@/components/icons";
import { serviceGroups } from "@/lib/catalog";
import { pillSolid, wrap } from "@/lib/ui";

export const metadata: Metadata = { title: "Services — Nakhla Al Barari" };

const routes: Record<string, { href: string; label: string }> = {
  "Food Products": { href: "/products#catalogue", label: "View products" },
  "Frozen Foods": { href: "/contact", label: "Enquire" },
  "Soft Drinks & Beverages": { href: "/products?tab=Drinks#catalogue", label: "View products" },
  "Non Food": { href: "/contact", label: "Enquire" },
};

function serviceId(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function ServicesPage() {
  return (
    <main>
      <section className="border-b border-line py-12">
        <div className={wrap}>
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-muted">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link className="hover:text-green" href="/">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">Services</li>
            </ol>
          </nav>
          <h1 className="text-[40px] leading-tight font-semibold tracking-[-0.02em] max-[640px]:text-[32px]">Services</h1>
          <p className="mt-3 max-w-[62ch] text-muted">Food products, frozen foods, soft drinks and beverages, and non-food. Product lines stay in the catalogue.</p>
          <div className="mt-8 grid gap-4">
            {serviceGroups.map((group) => {
              const route = routes[group.name];
              return (
                <article className="rounded-lg border border-line bg-white p-5" id={serviceId(group.name)} key={group.name}>
                  <div className="flex items-start gap-4">
                    <GroupMark className="h-10 w-10 shrink-0" name={group.name} />
                    <div>
                      <h2 className="text-xl font-semibold">{group.name}</h2>
                      <p className="mt-2 max-w-[68ch] text-sm leading-relaxed text-muted">{group.summary}</p>
                      <p className="mt-2 max-w-[68ch] text-sm leading-relaxed text-muted">{group.note}</p>
                      <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                        {group.items.map((item) => (
                          <li className="flex items-center gap-2.5 rounded-lg border border-line bg-leaf/40 px-3 py-2.5" key={item}>
                            <GroupMark className="h-8 w-8 shrink-0" name={item} />
                            <span className="text-sm font-semibold leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                      {route ? <Link className={`${pillSolid} mt-4`} href={route.href}>{route.label}</Link> : null}
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
