import Link from "next/link";
import { HeroLogo } from "@/components/hero-logo";
import { chromeCopy } from "@/lib/i18n/pages/chrome";
import { getLocale } from "@/lib/i18n/locale";
import { t } from "@/lib/i18n/phrase";
import { pageBanner, wrap } from "@/lib/ui";

export async function PageBanner({
  title,
  kicker,
  lede,
  image,
  imageAlt,
  imageClass = "object-center",
  action,
}: {
  title: string;
  kicker?: string;
  lede?: string;
  image: string;
  imageAlt: string;
  imageClass?: string;
  action?: { href: string; label: string };
}) {
  const locale = await getLocale();

  return (
    <section className={`${pageBanner} bg-ink`}>
      <img className={`absolute inset-0 h-full w-full object-cover ${imageClass}`} src={image} alt={imageAlt} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20 rtl:bg-gradient-to-l" />
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black to-transparent" />
      <HeroLogo />
      <div className={`${wrap} relative flex h-full flex-col justify-end py-10 text-white max-[640px]:py-8`}>
        <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/80">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link className="hover:text-white" href="/">{t(locale, chromeCopy.nav.home)}</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-white">{title}</li>
          </ol>
        </nav>
        {kicker ? <p className="hero-in mb-2 text-sm text-white/75">{kicker}</p> : null}
        <h1 className="hero-in max-w-[16ch] text-[42px] leading-[1.05] font-bold tracking-[-0.04em] text-white max-[640px]:text-[34px] sm:text-6xl">{title}</h1>
        {lede ? <p className="hero-in hero-in-2 mt-2 max-w-[54ch] text-white/80">{lede}</p> : null}
        {action ? <a className="hero-in hero-in-3 mt-6 inline-flex h-11 w-fit items-center justify-center rounded-md bg-white px-4 text-sm font-semibold text-green-dark transition-colors hover:bg-leaf" href={action.href}>{action.label}</a> : null}
      </div>
    </section>
  );
}
