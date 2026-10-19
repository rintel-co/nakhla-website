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
    <footer className="bg-green-dark pt-12 pb-24 text-white" id="contact">
      <div className={wrap}>
        <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-6 max-[980px]:grid-cols-1">
          <div>
            <Link className="mb-3 flex w-fit items-center rounded-xl bg-white px-3 py-2" href="/" aria-label={t(locale, chromeCopy.footer.logo)}>
              <LogoMark />
            </Link>
            <p className="mt-4 max-w-[32ch] text-sm text-white/75">{t(locale, chromeCopy.footer.address)}</p>
          </div>
          <div>
            <h3 className="mb-2.5 text-sm font-semibold text-white">{t(locale, chromeCopy.footer.branches)}</h3>
            <ul className="m-0 list-none p-0 text-sm text-white/75">
              {branches.map((branch) => (
                <li className="mb-1.5" key={branch.name}><span>{label(locale, chromeCopy.branches, branch.name)}</span> · <span dir="ltr">{branch.phone}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-2.5 text-sm font-semibold text-white">{t(locale, chromeCopy.footer.company)}</h3>
            <ul className="m-0 list-none p-0 text-sm text-white/75">
              <li className="mb-1.5"><Link className="hover:text-white" href="/about">{t(locale, chromeCopy.nav.about)}</Link></li>
              <li className="mb-1.5"><Link className="hover:text-white" href="/products">{t(locale, chromeCopy.nav.brands)}</Link></li>
              <li className="mb-1.5"><Link className="hover:text-white" href="/services">{t(locale, chromeCopy.nav.services)}</Link></li>
              <li className="mb-1.5"><Link className="hover:text-white" href="/offers">{t(locale, chromeCopy.nav.offers)}</Link></li>
              <li className="mb-1.5"><Link className="hover:text-white" href="/careers">{t(locale, chromeCopy.nav.careers)}</Link></li>
              <li className="mb-1.5"><Link className="hover:text-white" href="/gallery">{t(locale, chromeCopy.nav.gallery)}</Link></li>
              <li className="mb-1.5"><Link className="hover:text-white" href="/faq">{t(locale, chromeCopy.nav.faq)}</Link></li>
              <li className="mb-1.5" dir="ltr">contact@nbarari.com</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2.5 text-sm font-semibold text-white">{t(locale, chromeCopy.footer.follow)}</h3>
            <ul className="m-0 flex list-none gap-3 p-0">
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
        <div className="mt-8 flex flex-wrap justify-between gap-3 border-t border-white/15 pt-4 text-xs text-white/70">
          <span>{t(locale, chromeCopy.footer.copyright)}</span>
          <span>{t(locale, chromeCopy.footer.registration)}</span>
        </div>
      </div>
    </footer>
  );
}
