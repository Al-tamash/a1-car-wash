import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { STORES_DATA, getStoreBySlug } from "@/data/storesData";
import StoreDetailClient from "./StoreDetailClient";
import { BreadcrumbJsonLd, StoreLocationJsonLd } from "@/components/StructuredData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = STORES_DATA.map((store) => ({ slug: store.slug }));
  // Add alias slugs for backwards compatibility
  slugs.push(
    { slug: "raidurga-film-nagar" },
    { slug: "manikonda-rd" },
    { slug: "dargah-khalishkhan" },
    { slug: "himayat-sagar" },
    { slug: "toli-chowki" }
  );
  return slugs;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const store = getStoreBySlug(slug) || STORES_DATA[0];

  const title = `${store.shortName} Studio`;
  const description = `Visit ${store.name} in Hyderabad for hydraulic jack lift car washes, RO soft water foam cleaning, and Teflon detailing. Call ${store.phone}.`;
  const canonicalUrl = `https://a1carwash.in/stores/${store.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${title} | A1 Car Wash`,
      description,
      url: canonicalUrl,
      siteName: "A1 Car Wash",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: store.image || "/gallery/real-fortuner-studio-lights.png",
          width: 1200,
          height: 630,
          alt: `${store.name} Detailing Studio in Hyderabad`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | A1 Car Wash`,
      description,
      images: [store.image || "/gallery/real-fortuner-studio-lights.png"],
    },
  };
}

export default async function StoreDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const store = getStoreBySlug(slug);

  if (!store) {
    notFound();
  }

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://a1carwash.in" },
          { name: "Store Locations", url: "https://a1carwash.in/stores" },
          { name: store.shortName, url: `https://a1carwash.in/stores/${store.slug}` },
        ]}
      />
      <StoreLocationJsonLd store={store} />
      <StoreDetailClient store={store} />
    </>
  );
}
