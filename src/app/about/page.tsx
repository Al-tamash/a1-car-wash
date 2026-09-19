import React from "react";
import type { Metadata } from "next";
import AboutClient from "./AboutClient";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "A1 Car Wash operates 6 multi-bay detailing studios in Hyderabad with hydraulic jack lifts, automated RO soft-water plants & Teflon coating. Call 70452 82473.",
  alternates: {
    canonical: "https://a1carwash.in/about",
  },
  openGraph: {
    title: "About Us | A1 Car Wash",
    description:
      "A1 Car Wash operates 6 multi-bay detailing studios in Hyderabad with hydraulic jack lifts, automated RO soft-water plants & Teflon coating. Call 70452 82473.",
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
    title: "About Us | A1 Car Wash",
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
