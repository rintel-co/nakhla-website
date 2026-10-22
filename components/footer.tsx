import Link from "next/link";
import { LogoMark } from "@/components/icons";
import { branches } from "@/lib/catalog";
import { chromeCopy } from "@/lib/i18n/pages/chrome";
import { getLocale } from "@/lib/i18n/locale";
import { label, t } from "@/lib/i18n/phrase";
import { wrap } from "@/lib/ui";

export async function Footer() {
  const locale = await getLocale();

  return (
    <footer className="bg-green-dark pt-14 pb-28 text-white" id="contact">
      <div className={wrap}>
        <div className="grid grid-cols-1 gap-10 min-[640px]:grid-cols-2 min-[981px]:grid-cols-[minmax(220px,1.2fr)_minmax(280px,1.35fr)_minmax(140px,0.8fr)_auto] min-[981px]:items-start min-[981px]:gap-x-12">
          <div className="min-w-0">
            <Link className="inline-flex w-fit items-center rounded-xl bg-white px-3 py-2" href="/" aria-label={t(locale, chromeCopy.footer.logo)}>
              <LogoMark />
            </Link>
            <p className="mt-5 max-w-[28ch] text-sm leading-6 text-white/75">{t(locale, chromeCopy.footer.address)}</p>
          </div>
          <div className="min-w-0">
            <h3 className="text-sm font-semibold text-white">{t(locale, chromeCopy.footer.branches)}</h3>
            <ul className="m-0 mt-4 list-none space-y-1.5 p-0 text-sm leading-6 text-white/75">
              {branches.map((branch) => (
                <li className="min-[981px]:whitespace-nowrap" key={branch.name}>
                  <span>{label(locale, chromeCopy.branches, branch.name)}</span>
                  <span aria-hidden="true"> · </span>
                  <a className="hover:text-white" href={`tel:${branch.phone.replace(/\s/g, "")}`} dir="ltr">{branch.phone}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="min-w-0">
            <h3 className="text-sm font-semibold text-white">{t(locale, chromeCopy.footer.company)}</h3>
            <nav className="mt-4" aria-label={t(locale, chromeCopy.nav.footer)}>
              <ul className="m-0 list-none space-y-1.5 p-0 text-sm leading-6 text-white/75">
                <li><Link className="hover:text-white" href="/about">{t(locale, chromeCopy.nav.about)}</Link></li>
                <li><Link className="hover:text-white" href="/products">{t(locale, chromeCopy.nav.brands)}</Link></li>
                <li><Link className="hover:text-white" href="/services">{t(locale, chromeCopy.nav.services)}</Link></li>
                <li><Link className="hover:text-white" href="/offers">{t(locale, chromeCopy.nav.offers)}</Link></li>
                <li><Link className="hover:text-white" href="/careers">{t(locale, chromeCopy.nav.careers)}</Link></li>
                <li><Link className="hover:text-white" href="/gallery">{t(locale, chromeCopy.nav.gallery)}</Link></li>
                <li><Link className="hover:text-white" href="/faq">{t(locale, chromeCopy.nav.faq)}</Link></li>
                <li><a className="hover:text-white" href="mailto:contact@nbarari.com" dir="ltr">contact@nbarari.com</a></li>
              </ul>
            </nav>
          </div>
          <div className="min-w-0 min-[981px]:justify-self-end">
            <h3 className="text-sm font-semibold text-white">{t(locale, chromeCopy.footer.follow)}</h3>
            <ul className="m-0 mt-4 flex list-none gap-3 p-0">
              <li>
                <a className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white hover:text-green-dark" href="https://www.instagram.com/nakhlaalbarari" target="_blank" rel="noopener" aria-label="Instagram">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.8" />
                    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
                    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
                  </svg>
                </a>
              </li>
              <li>
                <a className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white hover:text-green-dark" href="https://www.tiktok.com/@nakhlaalbarari" target="_blank" rel="noopener" aria-label="TikTok">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M14.5 3c.4 2.5 1.9 4.2 4.3 4.5v2.6a7 7 0 0 1-4.3-1.4v6.7c0 3.5-2.7 6.2-6.1 6.2S2.3 19 2.3 15.4c0-3.4 2.6-6.1 5.9-6.2v2.7c-1.8.1-3.2 1.6-3.2 3.4 0 1.9 1.5 3.4 3.4 3.4s3.4-1.5 3.4-3.4V3h2.7Z" />
                  </svg>
                </a>
              </li>
              <li>
                <a className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white hover:text-green-dark" href="https://x.com/NakhlaAlBarari" target="_blank" rel="noopener" aria-label="X">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M14.7 10.3 22 2h-2.2l-6.3 7.2L8.2 2H2l7.7 11.1L2 22h2.2l6.8-7.8L15.8 22H22l-7.3-11.7Zm-2.4 2.8-.8-1.1L5 3.5h2.7l5 7.2.8 1.1 6.5 9.2h-2.7l-5.3-7.9Z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start gap-2 border-t border-white/15 pt-4 text-xs text-white/70 min-[640px]:flex-row min-[640px]:items-center min-[640px]:justify-between">
          <span>{t(locale, chromeCopy.footer.copyright)}</span>
          <span dir="ltr">{t(locale, chromeCopy.footer.registration)}</span>
        </div>
      </div>
    </footer>
  );
}
