export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];

export const localeCookie = "locale";

/** One string in both languages. Leave `ar` empty until the Arabic line is provided. */
export type Phrase = { en: string; ar: string };

export function phrase(en: string, ar = ""): Phrase {
  return { en, ar };
}

export function t(locale: Locale, value: Phrase) {
  return locale === "ar" && value.ar.trim() ? value.ar : value.en;
}

export function fill(locale: Locale, value: Phrase, vars: Record<string, string>) {
  return Object.entries(vars).reduce((text, [key, replacement]) => text.replaceAll(`{${key}}`, replacement), t(locale, value));
}

export function label(locale: Locale, table: Record<string, Phrase>, key: string) {
  const value = table[key];
  return value ? t(locale, value) : key;
}
