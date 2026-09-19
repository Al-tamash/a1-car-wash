import React from "react";
import type { Metadata } from "next";
import StoresClient from "./StoresClient";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "Find 6 A1 Car Wash locations in Hyderabad: Banjara Hills, Film Nagar, Narsingi, Shaikpet, Nanal Nagar & Himayat Sagar. Hydraulic jack lifts. Call 70452 82473.",
  alternates: {
    canonical: "https://a1carwash.in/stores",
  },
  openGraph: {
    title: "Locations | A1 Car Wash",
    description:
      "Find 6 A1 Car Wash locations in Hyderabad: Banjara Hills, Film Nagar, Narsingi, Shaikpet, Nanal Nagar & Himayat Sagar. Hydraulic jack lifts. Call 70452 82473.",
    url: "https://a1carwash.in/stores",
    siteName: "A1 Car Wash",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/gallery/real-fortuner-studio-lights.png",
        width: 1200,
        height: 630,
        alt: "A1 Car Wash 6 Locations in Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Locations | A1 Car Wash",
    description:
      "Banjara Hills, Film Nagar, Narsingi, Shaikpet, Nanal Nagar & Himayat Sagar Rd. Call 70452 82473.",
    images: ["/gallery/real-fortuner-studio-lights.png"],
  },
};

export default function StoresPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://a1carwash.in" },
          { name: "Store Locations", url: "https://a1carwash.in/stores" },
        ]}
      />
      <StoresClient />
    </>
  );
}
