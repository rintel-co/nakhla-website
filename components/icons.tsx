import Image from "next/image";
import type { ProductIcon } from "@/lib/catalog";
import logo from "@/assets/newLogo.svg";

const stroke = { fill: "none", stroke: "#1c1c1c", strokeWidth: 1.6 } as const;
const green = { fill: "none", stroke: "#2f6b22", strokeWidth: 1.6, strokeLinecap: "round" as const };

export function ProductMark({ icon }: { icon: ProductIcon }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      {icon === "corn" && (
        <>
          <path d="M24 8c5 0 9 3 9 8v14c0 7-4 12-9 12s-9-5-9-12V16c0-5 4-8 9-8z" {...stroke} />
          <path d="M18 18h12M18 24h12M18 30h12" {...green} />
        </>
      )}
      {icon === "milk" && (
        <>
          <path d="M16 18l3-6h10l3 6v18a2 2 0 01-2 2H18a2 2 0 01-2-2V18z" {...stroke} />
          <path d="M16 18h16M19 26h10" {...green} />
        </>
      )}
      {icon === "jar" && (
        <>
          <path d="M18 14h12v3H18z" {...stroke} />
          <path d="M16 17h16v4c0 9-3 16-8 16s-8-7-8-16v-4z" {...stroke} />
          <circle cx="21" cy="28" r="1.4" fill="#2f6b22" />
          <circle cx="27" cy="30" r="1.4" fill="#2f6b22" />
          <circle cx="24" cy="25" r="1.4" fill="#2f6b22" />
        </>
      )}
      {icon === "bowl" && (
        <>
          <path d="M12 22h24c0 8-5 14-12 14S12 30 12 22z" {...stroke} />
          <path d="M16 22c1-5 4-8 8-8s7 3 8 8" {...green} />
          <circle cx="20" cy="27" r="1.3" fill="#2f6b22" />
          <circle cx="26" cy="28" r="1.3" fill="#2f6b22" />
        </>
      )}
      {icon === "can" && (
        <>
          <ellipse cx="24" cy="14" rx="9" ry="3.2" {...stroke} />
          <path d="M15 14v18c0 2 4 4 9 4s9-2 9-4V14" {...stroke} />
          <path d="M15 22h18" {...green} />
        </>
      )}
      {icon === "pineapple" && (
        <>
          <path d="M24 18c7 2 9 8 7 16-2 6-12 8-14 1-2-8 0-15 7-17z" {...stroke} />
          <path d="M24 18l-2-6M24 17l3-6M21 14l-3-4M27 13l4-3" {...green} />
          <path d="M20 26l4 3 4-3M20 31l4 3 4-3" stroke="#2f6b22" strokeWidth="1.4" strokeLinecap="round" fill="none" />
        </>
      )}
      {icon === "beans" && (
        <>
          <path d="M15 28c0-6 4-10 8-8 3 1 5 5 4 9-1 5-6 7-10 5-2-1-2-4-2-6z" {...stroke} />
          <path d="M25 22c5-2 10 1 10 6 0 4-3 7-7 6-4-1-6-5-3-12z" {...green} />
        </>
      )}
    </svg>
  );
}

export function CategoryMark({ name, className }: { name: string; className?: string }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
      {name === "Rice" && (
        <>
          <path d="M8 28c2 6 8 10 16 10s14-4 16-10" {...stroke} />
          <path d="M14 28c1-8 4-14 10-14s9 6 10 14" {...green} />
        </>
      )}
      {name === "Pulses" && (
        <>
          <circle cx="18" cy="22" r="5" {...stroke} />
          <circle cx="30" cy="26" r="5" {...green} />
        </>
      )}
      {name === "Spices" && (
        <>
          <path d="M24 34V16" {...stroke} />
          <path d="M24 20c6-2 10-8 8-12-6 2-10 8-8 12zM24 24c-6-1-11-6-10-11 6 1 10 7 10 11z" {...green} />
        </>
      )}
      {name === "Canned" && (
        <>
          <rect x="16" y="12" width="16" height="24" rx="4" {...stroke} />
          <path d="M16 18h16M16 30h16" {...green} />
        </>
      )}
      {name === "Sauce" && (
        <>
          <path d="M20 14h8l2 6H18l2-6zM18 20h12l-1 16a4 4 0 01-4 3h-2a4 4 0 01-4-3l-1-16z" {...stroke} />
          <path d="M20 28h8" {...green} />
        </>
      )}
      {name === "Oil" && (
        <>
          <path d="M24 10c6 8 8 12 8 16a8 8 0 11-16 0c0-4 2-8 8-16z" {...stroke} />
          <path d="M20 28c2 2 6 2 8 0" {...green} />
        </>
      )}
      {name === "Sugar" && (
        <>
          <path d="M16 18h16l-2 16H18L16 18z" {...stroke} />
          <path d="M20 18c0-3 2-5 4-5s4 2 4 5" {...green} />
        </>
      )}
      {name === "Drinks" && (
        <>
          <path d="M16 14h16l-2 18a6 6 0 01-6 5h0a6 6 0 01-6-5L16 14z" {...stroke} />
          <path d="M20 22h8" {...green} />
          <path d="M22 14c1-3 4-4 6-3" {...green} />
        </>
      )}
      {name === "Others" && (
        <>
          <rect x="14" y="14" width="8" height="8" rx="2" {...stroke} />
          <rect x="26" y="14" width="8" height="8" rx="2" {...green} />
          <rect x="14" y="26" width="8" height="8" rx="2" {...green} />
          <rect x="26" y="26" width="8" height="8" rx="2" {...stroke} />
        </>
      )}
    </svg>
  );
}

export function StatMark({ name, className }: { name: "branches" | "categories" | "founded" | "products" | "customers" | "employees"; className?: string }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
      {name === "branches" && (
        <>
          <path d="M24 40s10-9 10-16a10 10 0 10-20 0c0 7 10 16 10 16z" {...stroke} />
          <circle cx="24" cy="24" r="3.2" {...green} />
        </>
      )}
      {name === "categories" && (
        <>
          <rect x="12" y="12" width="10" height="10" rx="2" {...stroke} />
          <rect x="26" y="12" width="10" height="10" rx="2" {...green} />
          <rect x="12" y="26" width="10" height="10" rx="2" {...green} />
          <rect x="26" y="26" width="10" height="10" rx="2" {...stroke} />
        </>
      )}
      {name === "founded" && (
        <>
          <rect x="12" y="14" width="24" height="22" rx="3" {...stroke} />
          <path d="M12 22h24M18 12v6M30 12v6" {...green} />
        </>
      )}
      {name === "products" && (
        <>
          <path d="M12 20l12-6 12 6v14l-12 6-12-6V20z" {...stroke} />
          <path d="M24 14v26M12 20l12 6 12-6" {...green} />
        </>
      )}
      {name === "customers" && (
        <>
          <circle cx="18" cy="18" r="5" {...stroke} />
          <path d="M8 36c1.4-6 5-9 10-9s8.6 3 10 9" {...green} />
          <circle cx="32" cy="20" r="4" {...stroke} />
          <path d="M26 36c1-4 3.2-6 6.5-6" {...green} />
        </>
      )}
      {name === "employees" && (
        <>
          <circle cx="15" cy="16" r="4" {...stroke} />
          <circle cx="33" cy="16" r="4" {...stroke} />
          <path d="M7 34c1.2-6 4.2-8 8-8s6.8 2 8 8" {...green} />
          <path d="M25 34c1.2-6 4.2-8 8-8s6.8 2 8 8" {...green} />
        </>
      )}
    </svg>
  );
}

export function GroupMark({ name, className }: { name: string; className?: string }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
      {name === "Food Products" && (
        <>
          <path d="M10 18h28l-3 16H13L10 18z" {...stroke} />
          <path d="M18 18c0-4 2-8 6-8s6 4 6 8" {...green} />
        </>
      )}
      {name === "Frozen Foods" && (
        <>
          <path d="M24 10v28M14 16l20 16M34 16L14 32" {...stroke} />
          <path d="M18 12h4M26 36h4M12 22v4M32 22v4" {...green} />
        </>
      )}
      {name === "Soft Drinks & Beverages" && (
        <>
          <path d="M18 14h12l-2 22a4 4 0 01-4 3h0a4 4 0 01-4-3l-2-22z" {...stroke} />
          <path d="M20 22h8M22 10c2 2 4 2 6 0" {...green} />
        </>
      )}
      {name === "Non Food" && (
        <>
          <path d="M12 20l12-6 12 6v14l-12 6-12-6V20z" {...stroke} />
          <path d="M24 14v26M12 20l12 6 12-6" {...green} />
        </>
      )}
      {name === "Baby Food" && (
        <>
          <path d="M20 14h8v4h-8zM18 18h12v16a4 4 0 01-4 4h-4a4 4 0 01-4-4V18z" {...stroke} />
          <path d="M22 24h4M22 28h4" {...green} />
        </>
      )}
      {name === "Baking & Jelly" && (
        <>
          <path d="M18 16h12v4H18zM16 20h16v12a6 6 0 01-6 6h-4a6 6 0 01-6-6V20z" {...stroke} />
          <path d="M20 28c2 2 6 2 8 0" {...green} />
        </>
      )}
      {name === "Can Food Products" && (
        <>
          <ellipse cx="24" cy="14" rx="8" ry="3" {...stroke} />
          <path d="M16 14v16c0 2 3.5 4 8 4s8-2 8-4V14" {...stroke} />
          <path d="M16 20h16" {...green} />
        </>
      )}
      {name === "Chocolate" && (
        <>
          <rect x="14" y="16" width="20" height="16" rx="2" {...stroke} />
          <path d="M14 22h20M24 16v16M20 10c2 3 6 3 8 0" {...green} />
        </>
      )}
      {name === "Coffee" && (
        <>
          <path d="M14 18h16v10a6 6 0 01-6 6h-4a6 6 0 01-6-6V18z" {...stroke} />
          <path d="M30 20h4a4 4 0 010 8h-4M18 12c1 2 1 3 0 5M24 11c1 2 1 3 0 5" {...green} />
        </>
      )}
      {name === "Confectionary" && (
        <>
          <path d="M16 24c0-6 3-10 8-10s8 4 8 10-3 10-8 10-8-4-8-10z" {...stroke} />
          <path d="M12 22l4 2M36 22l-4 2M24 14v-4" {...green} />
        </>
      )}
      {name === "Cornflakes, Cereals & Oats" && (
        <>
          <path d="M14 20h20v14a4 4 0 01-4 4H18a4 4 0 01-4-4V20z" {...stroke} />
          <path d="M18 20c1-6 3-8 6-8s5 2 6 8" {...green} />
        </>
      )}
      {name === "Dry Fruit (Nuts)" && (
        <>
          <path d="M16 26c0-8 4-12 8-12 6 0 8 6 8 12s-3 10-8 10-8-4-8-10z" {...stroke} />
          <path d="M24 16v18" {...green} />
        </>
      )}
      {name === "Grains" && (
        <>
          <path d="M24 38V16" {...stroke} />
          <path d="M24 20c6-1 10-6 10-10-6 1-10 6-10 10zM24 24c-6-1-10-6-10-10 6 1 10 6 10 10z" {...green} />
        </>
      )}
      {name === "Instant Powder" && (
        <>
          <path d="M16 16h16l-2 18H18L16 16z" {...stroke} />
          <path d="M20 16v-4h8v4M20 24h8" {...green} />
        </>
      )}
      {name === "Jam, Halawa, Sayil & Honey" && (
        <>
          <path d="M18 16h12l-1 4H19l-1-4zM17 20h14v12a5 5 0 01-5 5h-4a5 5 0 01-5-5V20z" {...stroke} />
          <path d="M21 28c1 2 5 2 6 0" {...green} />
        </>
      )}
      {name === "Juban, Qishta & Zubda" && (
        <>
          <path d="M14 22h20v10a4 4 0 01-4 4H18a4 4 0 01-4-4V22z" {...stroke} />
          <path d="M16 22c2-6 14-6 16 0" {...green} />
        </>
      )}
      {name === "Macaroni & Vermicelli" && (
        <>
          <path d="M14 18c6 0 6 12 12 12M14 26c6 0 6 10 14 8" {...stroke} />
          <path d="M16 34c8-2 10-8 16-8" {...green} />
        </>
      )}
      {name === "Mayonnaise, Hot Sauce" && (
        <>
          <path d="M20 12h8v4h-8zM18 16h12l-1 18a4 4 0 01-4 3h-2a4 4 0 01-4-3l-1-18z" {...stroke} />
          <path d="M20 24h8" {...green} />
        </>
      )}
      {name === "Milk (Evap, Powder)" && (
        <>
          <path d="M16 16h16v18a3 3 0 01-3 3H19a3 3 0 01-3-3V16z" {...stroke} />
          <path d="M16 22h16M20 12h8" {...green} />
        </>
      )}
      {name === "Oil, Ghee & Olive Oil" && (
        <>
          <path d="M24 10c6 8 8 12 8 16a8 8 0 11-16 0c0-4 2-8 8-16z" {...stroke} />
          <path d="M20 28c2 2 6 2 8 0" {...green} />
        </>
      )}
      {name === "Olive & Pickle" && (
        <>
          <ellipse cx="20" cy="26" rx="6" ry="8" {...stroke} />
          <ellipse cx="29" cy="24" rx="5" ry="7" {...green} />
        </>
      )}
      {name === "Philippine & Indonesian Foods" && (
        <>
          <path d="M12 22h24c0 8-5 12-12 12S12 30 12 22z" {...stroke} />
          <path d="M18 22c1-5 3-8 6-8s5 3 6 8" {...green} />
        </>
      )}
      {name === "Cold Frozen Items" && (
        <>
          <rect x="14" y="14" width="20" height="20" rx="3" {...stroke} />
          <path d="M24 18v12M20 22h8" {...green} />
        </>
      )}
      {name === "Poultry" && (
        <>
          <path d="M18 16c6-4 12 0 12 6 0 8-6 14-10 14s-8-4-8-10c0-4 2-8 6-10z" {...stroke} />
          <path d="M28 18c3 0 6 2 6 5" {...green} />
        </>
      )}
      {name === "Beera & Energy Drink" && (
        <>
          <rect x="16" y="12" width="16" height="24" rx="3" {...stroke} />
          <path d="M16 18h16M20 26h8" {...green} />
        </>
      )}
      {name === "Juice & Flavoured Milk" && (
        <>
          <path d="M16 16h16l-2 18a4 4 0 01-4 3h-4a4 4 0 01-4-3l-2-18z" {...stroke} />
          <path d="M20 16c0-4 8-4 8 0" {...green} />
        </>
      )}
      {name === "Charcoal" && (
        <>
          <path d="M16 30l4-12h8l4 12H16z" {...stroke} />
          <path d="M20 22h8M22 16v-4M26 16v-4" {...green} />
        </>
      )}
      {name === "Cosmetic (Personal Body Care)" && (
        <>
          <rect x="18" y="16" width="12" height="18" rx="4" {...stroke} />
          <path d="M21 16v-4h6v4" {...green} />
        </>
      )}
      {name === "Detergent Cleaning Items" && (
        <>
          <path d="M18 14h12l2 6H16l2-6zM16 20h16v14a3 3 0 01-3 3H19a3 3 0 01-3-3V20z" {...stroke} />
          <path d="M20 28h8" {...green} />
        </>
      )}
      {name === "Pampers & Tissue" && (
        <>
          <rect x="12" y="16" width="24" height="16" rx="3" {...stroke} />
          <path d="M12 22h24M20 16v16" {...green} />
        </>
      )}
      {name === "Plastic" && (
        <>
          <path d="M16 16h10l6 6v14H16V16z" {...stroke} />
          <path d="M26 16v6h6" {...green} />
        </>
      )}
    </svg>
  );
}

export function AudienceMark({ name, className }: { name: "hotels" | "hypermarkets" | "grocery" | "official"; className?: string }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
      {name === "hotels" && (
        <>
          <path d="M10 38V20l14-8 14 8v18" {...stroke} />
          <path d="M20 38V26h8v12M16 22h4M28 22h4" {...green} />
        </>
      )}
      {name === "hypermarkets" && (
        <>
          <path d="M12 20h24v18H12z" {...stroke} />
          <path d="M10 20l4-6h20l4 6" {...green} />
          <path d="M20 38V28h8v10" {...stroke} />
        </>
      )}
      {name === "grocery" && (
        <>
          <path d="M16 18h16l-2 18H18L16 18z" {...stroke} />
          <path d="M20 18c0-4 8-4 8 0M20 26h8" {...green} />
        </>
      )}
      {name === "official" && (
        <>
          <path d="M10 38h28M14 38V22h20v16" {...stroke} />
          <path d="M12 22h24M18 22V14h12v8" {...green} />
        </>
      )}
    </svg>
  );
}

export function UserMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
      <circle cx="24" cy="18" r="6.5" {...stroke} />
      <path d="M12 36c1.8-7 6.5-10 12-10s10.2 3 12 10" {...green} />
    </svg>
  );
}

export function LogoMark() {
  return (
    <span aria-hidden="true">
      <Image src={logo} alt="Nakhla Al Barari" width={38} height={38} priority unoptimized />
    </span>
  );
}
