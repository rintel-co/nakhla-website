import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree, Readex_Pro } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { LocaleProvider } from "@/components/locale-provider";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { TradeProvider } from "@/components/trade-context";
import { chromeCopy } from "@/lib/i18n/pages/chrome";
import { getLocale } from "@/lib/i18n/locale";
import { t } from "@/lib/i18n/phrase";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const sans = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-figtree",
  display: "swap",
});

const arabic = Readex_Pro({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-readex",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nakhla Al Barari — Wholesale food",
  description: "Importer, wholesaler, and distributor of food across Saudi Arabia. Riyadh headquarters, founded in 2021.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} className={`${display.variable} ${sans.variable} ${arabic.variable}`}>
      <body suppressHydrationWarning>
        <LocaleProvider locale={locale}>
          <TradeProvider>
            <a className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-green-dark" href="#main">{t(locale, chromeCopy.buttons.skip)}</a>
            <Header />
            <div id="main">{children}</div>
            <Footer />
            <WhatsAppButton />
          </TradeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
