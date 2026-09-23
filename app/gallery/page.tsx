import type { Metadata } from "next";

export const metadata: Metadata = { title: "Gallery — Nakhla Al Barari" };

const albums = [
  {
    title: "Nakhla Al Barari Iftar Party",
    photos: [1, 2, 3, 4, 5, 6, 7].map((n) => `/gallery/iftar-${n}.avif`),
  },
  {
    title: "Nakhla Inauguration",
    photos: [1, 2, 3, 4, 5, 6].map((n) => `/gallery/inauguration-${n}.avif`),
  },
];

export default function GalleryPage() {
  return (
    <main>
      <section className="page-intro">
        <div className="wrap">
          <p className="eyebrow">Company moments</p>
          <h1>Gallery</h1>
          <p className="lede">A closer look at products, business activities, and partnerships. These moments reflect the standards of Nakhla Al Barari Trading Company.</p>
          {albums.map((album) => (
            <div className="album" key={album.title}>
              <h2>{album.title}</h2>
              <div className="shots">
                {album.photos.map((src, index) => (
                  <img key={src} src={src} alt={`${album.title}, photo ${index + 1}`} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
