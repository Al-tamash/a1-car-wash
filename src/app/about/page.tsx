import React from "react";
import type { Metadata } from "next";
import AboutClient from "./AboutClient";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "About Us | A1 Car Wash — Hyderabad Detailing Network",
  description:
    "Learn about A1 Car Wash in Hyderabad: 6 multi-bay detailing studios equipped with hydraulic jack lifts, automated RO soft-water plants, and touchless pH-neutral snow foam.",
  alternates: {
    canonical: "https://a1carwash.in/about",
  },
  openGraph: {
    title: "About Us | A1 Car Wash — Hyderabad Detailing Network",
    description:
      "Founded in Hyderabad, A1 Car Wash operates 6 multi-bay detailing studios providing showroom-grade car cleaning and Teflon paint protection.",
    url: "https://a1carwash.in/about",
    siteName: "A1 Car Wash",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/gallery/about-fortuner-studio.jpg",
        width: 1200,
        height: 630,
        alt: "About A1 Car Wash Detailing Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | A1 Car Wash — Hyderabad Detailing Network",
    description:
      "6 multi-bay detailing studios across Hyderabad with hydraulic jack lifts and RO soft water. Call 70452 82473.",
    images: ["/gallery/about-fortuner-studio.jpg"],
  },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://a1carwash.in" },
          { name: "About Us", url: "https://a1carwash.in/about" },
        ]}
      />
      <AboutClient />
    </>
  );
}
