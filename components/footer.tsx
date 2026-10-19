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
    <footer className="border-t border-line bg-white pt-12 pb-24 text-black" id="contact">
      <div className={wrap}>
        <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-6 max-[980px]:grid-cols-1">
          <div>
            <Link className="mb-3 flex w-fit items-center" href="/" aria-label={t(locale, chromeCopy.footer.logo)}>
              <LogoMark />
            </Link>
            <p className="mt-2 max-w-[32ch] text-sm text-black">{t(locale, chromeCopy.footer.address)}</p>
          </div>
          <div>
            <h3 className="mb-2.5 text-sm font-semibold text-black">{t(locale, chromeCopy.footer.branches)}</h3>
            <ul className="m-0 list-none p-0 text-sm text-black">
              {branches.map((branch) => (
                <li className="mb-1.5" key={branch.name}>{label(locale, chromeCopy.branches, branch.name)} · {branch.phone}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-2.5 text-sm font-semibold text-black">{t(locale, chromeCopy.footer.company)}</h3>
            <ul className="m-0 list-none p-0 text-sm text-black">
              <li className="mb-1.5"><Link href="/about">{t(locale, chromeCopy.nav.about)}</Link></li>
              <li className="mb-1.5"><Link href="/products">{t(locale, chromeCopy.nav.brands)}</Link></li>
              <li className="mb-1.5"><Link href="/services">{t(locale, chromeCopy.nav.services)}</Link></li>
              <li className="mb-1.5"><Link href="/offers">{t(locale, chromeCopy.nav.offers)}</Link></li>
              <li className="mb-1.5"><Link href="/careers">{t(locale, chromeCopy.nav.careers)}</Link></li>
              <li className="mb-1.5"><Link href="/gallery">{t(locale, chromeCopy.nav.gallery)}</Link></li>
              <li className="mb-1.5"><Link href="/faq">{t(locale, chromeCopy.nav.faq)}</Link></li>
              <li className="mb-1.5">contact@nbarari.com</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2.5 text-sm font-semibold text-black">{t(locale, chromeCopy.footer.follow)}</h3>
            <ul className="m-0 list-none p-0 text-sm text-black">
              <li className="mb-1.5"><a href="https://www.instagram.com/nakhlaalbarari" target="_blank" rel="noopener">Instagram</a></li>
              <li className="mb-1.5"><a href="https://www.tiktok.com/@nakhlaalbarari" target="_blank" rel="noopener">TikTok</a></li>
              <li className="mb-1.5"><a href="https://x.com/NakhlaAlBarari" target="_blank" rel="noopener">X</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap justify-between gap-3 border-t border-line pt-4 text-xs text-black">
          <span>{t(locale, chromeCopy.footer.copyright)}</span>
          <span>{t(locale, chromeCopy.footer.registration)}</span>
        </div>
      </div>
    </footer>
  );
}
