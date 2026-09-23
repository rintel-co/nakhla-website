import Link from "next/link";
import { branches } from "@/lib/catalog";

export function Footer() {
  return (
    <footer className="site" id="contact">
      <div className="wrap">
        <div className="foot">
          <div>
            <strong>Nakhla Al Barari Trading Co.</strong>
            <p style={{ color: "#5c4036", maxWidth: "32ch" }}>Al Masani Dist., Domat Al Jandal Street, Riyadh. Warehouses 26 and 27.</p>
          </div>
          <div>
            <h3>Branches</h3>
            <ul>
              {branches.map((branch) => (
                <li key={branch.name}>{branch.name} · {branch.phone}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Company</h3>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/products">Products</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li>contact@nbarari.com</li>
            </ul>
          </div>
          <div>
            <h3>Follow</h3>
            <ul>
              <li><a href="https://www.instagram.com/nakhlaalbarari" target="_blank" rel="noopener">Instagram</a></li>
              <li><a href="https://www.tiktok.com/@nakhlaalbarari" target="_blank" rel="noopener">TikTok</a></li>
              <li><a href="https://x.com/NakhlaAlBarari" target="_blank" rel="noopener">X</a></li>
            </ul>
          </div>
        </div>
        <div className="legal">
          <span>© 2026 Nakhla Al Barari Trading Co.</span>
          <span>CR 1010679869 · VAT 310835914300003</span>
        </div>
      </div>
    </footer>
  );
}
