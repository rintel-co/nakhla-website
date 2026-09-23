import Image from "next/image";
import type { ProductIcon } from "@/lib/catalog";
import logo from "@/assets/nakhla-al-barrari.svg";

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

export function CategoryMark({ name }: { name: string }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
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

export function LogoMark() {
  return (
    <span  aria-hidden="true">
      <Image src={logo} alt="Nakhla Al Barari" width={38} height={38} priority unoptimized />
    </span>
  );
}
