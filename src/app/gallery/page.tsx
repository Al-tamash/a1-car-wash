import React from "react";
import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Photo Gallery | A1 Car Wash Studio & Detailing Bays Hyderabad",
  description:
    "View live photos of A1 Car Wash in Hyderabad: Hydraulic Jack Lift wash bays, thick active snow foam baths, Fortuner SUV detailing, two-wheeler washes & ceramic gloss finishes.",
  alternates: {
    canonical: "https://a1carwash.in/gallery",
  },
  openGraph: {
    title: "Photo Gallery | A1 Car Wash Studio & Detailing Bays Hyderabad",
    description:
      "Explore real photos of vehicles being washed on hydraulic jack lifts, snow foam baths & Teflon detailing at A1 Car Wash Hyderabad.",
    url: "https://a1carwash.in/gallery",
    siteName: "A1 Car Wash",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/gallery/real-fortuner-studio-lights.png",
        width: 1200,
        height: 630,
        alt: "A1 Car Wash Hyderabad Photo Gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Photo Gallery | A1 Car Wash Studio & Detailing Bays Hyderabad",
    description:
      "Live photos from our multi-bay hydraulic jack lift car wash stations in Hyderabad.",
    images: ["/gallery/real-fortuner-studio-lights.png"],
  },
};

export default function GalleryPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://a1carwash.in" },
          { name: "Gallery", url: "https://a1carwash.in/gallery" },
        ]}
      />
      <GalleryClient />
    </>
  );
}
