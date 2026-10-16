import Link from "next/link";
import { LogoMark } from "@/components/icons";
import { branches } from "@/lib/catalog";
import { wrap } from "@/lib/ui";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white pt-12 pb-24 text-black" id="contact">
      <div className={wrap}>
        <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-6 max-[980px]:grid-cols-1">
          <div>
            <Link className="mb-3 flex w-fit items-center" href="/" aria-label="Nakhla Al Barari">
              <LogoMark />
            </Link>
            <p className="mt-2 max-w-[32ch] text-sm text-black">Al Masani Dist., Domat Al Jandal Street, Riyadh. Warehouses 26 and 27.</p>
          </div>
          <div>
            <h3 className="mb-2.5 text-sm font-semibold text-black">Branches</h3>
            <ul className="m-0 list-none p-0 text-sm text-black">
              {branches.map((branch) => (
                <li className="mb-1.5" key={branch.name}>{branch.name} · {branch.phone}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-2.5 text-sm font-semibold text-black">Company</h3>
            <ul className="m-0 list-none p-0 text-sm text-black">
              <li className="mb-1.5"><Link href="/about">About</Link></li>
              <li className="mb-1.5"><Link href="/products">Our Brands</Link></li>
              <li className="mb-1.5"><Link href="/services">Services</Link></li>
              <li className="mb-1.5"><Link href="/offers">Offers</Link></li>
              <li className="mb-1.5"><Link href="/careers">Careers</Link></li>
              <li className="mb-1.5"><Link href="/gallery">Gallery</Link></li>
              <li className="mb-1.5"><Link href="/faq">FAQ</Link></li>
              <li className="mb-1.5">contact@nbarari.com</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2.5 text-sm font-semibold text-black">Follow</h3>
            <ul className="m-0 list-none p-0 text-sm text-black">
              <li className="mb-1.5"><a href="https://www.instagram.com/nakhlaalbarari" target="_blank" rel="noopener">Instagram</a></li>
              <li className="mb-1.5"><a href="https://www.tiktok.com/@nakhlaalbarari" target="_blank" rel="noopener">TikTok</a></li>
              <li className="mb-1.5"><a href="https://x.com/NakhlaAlBarari" target="_blank" rel="noopener">X</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap justify-between gap-3 border-t border-line pt-4 text-xs text-black">
          <span>© 2026 Nakhla Al Barari Trading Co.</span>
          <span>CR 1010679869 · VAT 310835914300003</span>
        </div>
      </div>
    </footer>
  );
}
