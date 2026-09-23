import Link from "next/link";
import { CategoryMark, UserMark } from "@/components/icons";
import { Newsletter } from "@/components/newsletter";
import { ProductGrid } from "@/components/product-grid";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { brands, categories, CATALOGUE_PDF } from "@/lib/catalog";

export default function HomePage() {
  return (
    <main>
      <div className="wrap hero">
        <div>
          <p className="eyebrow">Riyadh · Wholesale since 2021</p>
          <h1>Authentic foods<br />supplied across<br /><em>Saudi Arabia.</em></h1>
          <p className="lede">Rice, pulses, oil, spices, canned food, and drinks — imported and distributed to grocery chains, hotels, hypermarkets, and walk-in trade.</p>
          <div className="cta-row">
            <Link className="pill solid" href="/products">Explore products</Link>
            <a className="pill" href="#order">Order process</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="blob green" />
          <div className="blob" />
          <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=80" alt="Spices arranged for wholesale" />
          <aside className="float-card">
            <div className="avatars" aria-hidden="true"><i>L</i><i>N</i><i>S</i></div>
            <div><b>7 branches</b><span>Across Saudi Arabia</span></div>
          </aside>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="center">
            <h2>Shop by category</h2>
            <p className="sub">Rice, pulses, spices, canned food, sauces, oil, sugar, and drinks.</p>
          </div>
          <div className="cats">
            {categories.map((category) => (
              <Link key={category.name} className="cat" href={`/products?tab=${encodeURIComponent(category.name)}`} style={{ background: category.color }}>
                <CategoryMark name={category.name} />
                <span>{category.name}</span>
                <small>{category.meta}</small>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap split">
          <div className="portrait">
            <img src="https://images.unsplash.com/photo-1545601445-4d6a0a0565f0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Market stall of fresh food" />
            <div className="mini">
              <img src="https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=200&q=80" alt="" />
              <div><b>Al Azima Baked Beans</b><span>24 × 400 · canned food</span></div>
            </div>
          </div>
          <div>
            <h2>Stocked for hotels, hypermarkets, and grocery counters.</h2>
            <p className="sub" style={{ marginLeft: 0 }}>From corporations and 5-star hotels to walk-in customers, including commissions and consulates in Riyadh.</p>
            <div className="points">
              <div className="point"><i>✓</i><div><b>Nationwide distribution</b><span>Riyadh HQ, Aziziyah, Dammam, Hail, Qassim, and Hafar Al Batin.</span></div></div>
              <div className="point"><i>✓</i><div><b>Pack sizes for trade</b><span>Cases, tins, and bulk bags — 40 kg rice down to retail multipacks.</span></div></div>
              <div className="point"><i>✓</i><div><b>A list, then a branch</b><span>Build a trade list here and send it on WhatsApp. Prices stay with the sales desk.</span></div></div>
            </div>
          </div>
        </div>
      </section>

      <section id="catalogue">
        <div className="wrap">
          <div className="center">
            <h2>Our products</h2>
            <ProductGrid />
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="center">
            <h2>What our partners say</h2>
            <p className="sub">Retailers and a supplier, in their words.</p>
          </div>
          <div className="quotes">
            <article className="quote">
              <p>“Their distribution network and logistics have consistently ensured we receive high-quality products on time.”</p>
              <div className="who"><UserMark /><div><b>Abdul Latheef</b><span>CEO & Managing Director, Laqsa Hypermarket, Riyadh</span></div></div>
            </article>
            <div className="side-quotes">
              <article>
                <p>“Reliable distribution and efficient logistics. A dependable partner for any retailer.”</p>
                <div className="who"><UserMark /><div><b>Oathad Al Khima</b><span>CEO, Sheroora</span></div></div>
              </article>
              <article>
                <p>“One of our top 5 customers in the central region. Sales, payment, and distribution have progressed year after year.”</p>
                <div className="who"><UserMark /><div><b>Ramadan Hassan</b><span>GT Supervisor, Nestlé Saudi Arabia</span></div></div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="order">
        <div className="wrap">
          <div className="order">
            <div className="phone" aria-hidden="true">
              <header><span>WhatsApp</span><span>+966 555 729 077</span></header>
              <div className="bubble them">Al Azima Sweet Corn 24×340, two cases. Bhai Bhai Sella 40 kg, ten bags.</div>
              <div className="bubble">Received. Riyadh branch can load this tomorrow morning.</div>
              <div className="bubble them">Also Mama’s Choice mayo 4×3.78 L.</div>
            </div>
            <div>
              <h2>Order the way trade already works.</h2>
              <p className="sub" style={{ marginLeft: 0 }}>No public checkout. The catalogue is for building a list. Confirmation, price, and delivery stay with the branch.</p>
              <div className="steps">
                <div className="step"><span className="num">1</span><div><h3>Search or browse</h3><p>The homepage selection: sweet corn, milk, chickpeas, foul, baked beans, pineapple, and kidney beans.</p></div></div>
                <div className="step"><span className="num">2</span><div><h3>Add lines to a trade list</h3><p>Pack size stays on the card. Quantity is confirmed with sales.</p></div></div>
                <div className="step"><span className="num">3</span><div><h3>Send it on WhatsApp</h3><p>The list opens a chat to +966 555729077, or email contact@nbarari.com.</p></div></div>
              </div>
              <div className="cta-row" style={{ marginTop: 18 }}>
                <WhatsAppLink className="pill green">Send list on WhatsApp</WhatsAppLink>
                <a className="pill" href={CATALOGUE_PDF} target="_blank" rel="noopener">Download catalogue</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap center">
          <h2>Brands on the floor</h2>
          <p className="sub">House and partner labels we distribute.</p>
          <div className="brands">
            {brands.map((brand) => (
              <figure key={brand.name}>
                <img src={brand.src} alt={brand.name} />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="center">
            <h2>From the company</h2>
            <p className="sub">A note from the range, and the files buyers ask for.</p>
          </div>
          <div className="news">
            <article className="story">
              <img src="https://images.unsplash.com/photo-1515543904379-3d757afe72e4?auto=format&fit=crop&w=600&q=80" alt="Canned beans" />
              <div>
                <div className="tag">Journal</div>
                <h3>A delicious and nutritious meal solution</h3>
                <p>Al Azima baked beans in tomato paste. Heat and serve for breakfast, wraps, or a side.</p>
              </div>
            </article>
            <article className="story">
              <img src="https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80" alt="Rice" />
              <div>
                <div className="tag">Catalogue</div>
                <h3>Product catalogue and company profile</h3>
                <p>Download the current PDF range, or the company profile. CR 1010679869 · VAT 310835914300003.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <Newsletter />
    </main>
  );
}
