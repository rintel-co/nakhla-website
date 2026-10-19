"use client";

import Link from "next/link";
import { useState } from "react";
import { useLocale } from "@/components/locale-provider";
import { newsletterCopy } from "@/lib/i18n/pages/newsletter";
import { t } from "@/lib/i18n/phrase";
import { pillSolid, wrap } from "@/lib/ui";

export function Newsletter() {
  const locale = useLocale();
  const [done, setDone] = useState(false);

  return (
    <section className="border-t border-line bg-leaf/40 py-14">
      <div className={`${wrap} flex flex-wrap items-end justify-between gap-6`}>
        <div className="max-w-md">
          <h2 className="text-2xl font-semibold tracking-[-0.02em]">{t(locale, newsletterCopy.title)}</h2>
          <p className="mt-2 text-sm text-muted">{t(locale, newsletterCopy.lede)} <Link className="font-semibold text-green" href="/offers">{t(locale, newsletterCopy.seeLists)}</Link>{t(locale, newsletterCopy.orEmail)}</p>
        </div>
        <form
          className="flex w-full max-w-md gap-2"
          onSubmit={(event) => {
            event.preventDefault();
            setDone(true);
            event.currentTarget.reset();
          }}
        >
          <input className="h-11 min-w-0 flex-1 rounded-md border border-line px-3 text-sm outline-none" type="email" required placeholder={t(locale, newsletterCopy.email)} aria-label={t(locale, newsletterCopy.email)} />
          <button className={pillSolid} type="submit">{t(locale, newsletterCopy.notify)}</button>
        </form>
        <p className={done ? "w-full text-sm font-medium" : "hidden"}>{t(locale, newsletterCopy.saved)}</p>
      </div>
    </section>
  );
}
