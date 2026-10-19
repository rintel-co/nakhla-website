"use client";

import { useRouter } from "next/navigation";
import { useLocale } from "@/components/locale-provider";
import { chromeCopy } from "@/lib/i18n/pages/chrome";
import { type Locale, localeCookie, t } from "@/lib/i18n/phrase";

const options = [
  { code: "en" as const, label: chromeCopy.english },
  { code: "ar" as const, label: chromeCopy.arabic },
];

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const locale = useLocale();
  const router = useRouter();

  function choose(next: Locale) {
    if (next === locale) return;
    document.cookie = `${localeCookie}=${next};path=/;max-age=31536000;SameSite=Lax`;
    document.documentElement.lang = next;
    document.documentElement.dir = next === "ar" ? "rtl" : "ltr";
    router.refresh();
  }

  return (
    <div className={`inline-flex h-10 items-center rounded-md border border-line bg-white p-0.5 ${className}`} role="group" aria-label={t(locale, chromeCopy.language)}>
      {options.map((option) => (
        <button
          key={option.code}
          className={`h-8 cursor-pointer rounded px-2.5 text-xs font-semibold ${locale === option.code ? "bg-green text-green-dark" : "text-ink hover:bg-leaf"}`}
          type="button"
          aria-pressed={locale === option.code}
          onClick={() => choose(option.code)}
        >
          {t(locale, option.label)}
        </button>
      ))}
    </div>
  );
}
