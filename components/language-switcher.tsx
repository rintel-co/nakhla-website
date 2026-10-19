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
    <div className={`inline-grid h-10 grid-cols-2 rounded-md border border-line bg-white p-1 ${className}`} role="group" aria-label={t(locale, chromeCopy.language)}>
      {options.map((option) => {
        const active = locale === option.code;
        return (
          <button
            key={option.code}
            className={`inline-flex min-w-16 cursor-pointer items-center justify-center rounded px-3 text-sm font-semibold transition-colors ${option.code === "ar" ? "font-arabic" : "font-sans"} ${active ? "bg-green-dark text-white" : "text-ink/70 hover:bg-leaf hover:text-green-dark"}`}
            type="button"
            lang={option.code}
            aria-pressed={active}
            onClick={() => choose(option.code)}
          >
            {t(locale, option.label)}
          </button>
        );
      })}
    </div>
  );
}
