import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { brandBySlug, brandHref, brandPages } from "@/lib/brand";

export function generateStaticParams() {
  return brandPages();
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const brand = brandBySlug(slug);
  if (!brand) return { title: "Brand — Nakhla Al Barari" };
  return { title: `${brand.name} — Nakhla Al Barari` };
}

export default async function BrandPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const brand = brandBySlug(slug);
  if (!brand) notFound();
  redirect(brandHref(brand.name));
}
