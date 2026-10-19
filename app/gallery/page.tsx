import type { Metadata } from "next";
import { PageBanner } from "@/components/page-banner";
import { galleryCopy } from "@/lib/i18n/pages/gallery";
import { getLocale } from "@/lib/i18n/locale";
import { fill, t } from "@/lib/i18n/phrase";
import { wrap } from "@/lib/ui";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return { title: t(locale, galleryCopy.metaTitle) };
}

const iftar = "https://nakhlaalbarari.com/wp-content/uploads/2026/07/Nakhla-Al-Barari-Iftar-Party-1-1536x864.avif";

const albums = [
  {
    title: "Nakhla Al Barari Iftar Party",
    date: "2025-03-28",
    label: "28 March 2025",
    photos: [1, 2, 3, 4, 5, 6, 7].map((n) => `/gallery/iftar-${n}.avif`),
  },
  {
    title: "Nakhla Inauguration",
    date: "2022-06-14",
    label: "14 June 2022",
    photos: [1, 2, 3, 4, 5, 6].map((n) => `/gallery/inauguration-${n}.avif`),
  },
];

export default async function GalleryPage() {
  const locale = await getLocale();

  return (
    <main>
      <PageBanner
        title={t(locale, galleryCopy.title)}
        kicker={t(locale, galleryCopy.kicker)}
        lede={t(locale, galleryCopy.lede)}
        image={iftar}
        imageAlt={t(locale, galleryCopy.imageAlt)}
      />
      <section className="py-12">
        <div className={wrap}>
          {albums.map((album, albumIndex) => {
            const copy = galleryCopy.albums[albumIndex];
            const title = t(locale, copy.title);
            return (
            <div className="mt-10 first:mt-0" key={album.title}>
              <div className="mb-3.5 flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="text-[22px]">{title}</h2>
                <time className="text-sm font-semibold text-muted" dateTime={album.date}>{t(locale, copy.label)}</time>
              </div>
              <div className="grid grid-cols-3 gap-3 max-[800px]:grid-cols-2 max-[640px]:grid-cols-1">
                {album.photos.map((src, index) => (
                  <img className="aspect-[16/10] w-full rounded-lg object-cover" key={src} src={src} alt={fill(locale, galleryCopy.photoAlt, { title, index: String(index + 1) })} />
                ))}
              </div>
            </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
