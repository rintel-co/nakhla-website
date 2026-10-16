import Link from "next/link";
import { HeroLogo } from "@/components/hero-logo";
import { pageBanner, wrap } from "@/lib/ui";

export function PageBanner({
  title,
  kicker,
  lede,
  image,
  imageAlt,
  imageClass = "object-center",
}: {
  title: string;
  kicker?: string;
  lede?: string;
  image: string;
  imageAlt: string;
  imageClass?: string;
}) {
  return (
    <section className={`${pageBanner} bg-ink`}>
      <img className={`absolute inset-0 h-full w-full object-cover ${imageClass}`} src={image} alt={imageAlt} />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />
      <HeroLogo />
      <div className={`${wrap} relative flex h-full flex-col justify-end py-10 text-white max-[640px]:py-8`}>
        <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/80">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link className="hover:text-white" href="/">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-white">{title}</li>
          </ol>
        </nav>
        {kicker ? <p className="mb-2 text-sm text-white/75">{kicker}</p> : null}
        <h1 className="max-w-[18ch] text-[40px] leading-tight font-semibold tracking-[-0.02em] text-white max-[640px]:text-[32px]">{title}</h1>
        {lede ? <p className="mt-2 max-w-[54ch] text-white/80">{lede}</p> : null}
      </div>
    </section>
  );
}
