import { cookies } from "next/headers";
import { type Locale, localeCookie } from "@/lib/i18n/phrase";

export async function getLocale(): Promise<Locale> {
  const jar = await cookies();
  return jar.get(localeCookie)?.value === "ar" ? "ar" : "en";
}
