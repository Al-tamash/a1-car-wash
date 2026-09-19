import React from "react";
import type { Metadata } from "next";
import StoresClient from "./StoresClient";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Our 6 Detailing Studios in Hyderabad | A1 Car Wash Locations",
  description:
    "Find A1 Car Wash near you in Hyderabad: Banjara Hills, Film Nagar (Raidurg), Narsingi, Shaikpet, Nanal Nagar (Mehdipatnam), and Himayat Sagar Rd (Suncity). Multi-bay hydraulic jack lift car washes.",
  alternates: {
    canonical: "https://a1carwash.in/stores",
  },
  openGraph: {
    title: "Our 6 Detailing Studios in Hyderabad | A1 Car Wash Locations",
    description:
      "Find the nearest A1 Car Wash branch in Hyderabad with hydraulic jack lifts, touchless foam wash, and express slot bookings.",
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
    title: "Our 6 Detailing Studios in Hyderabad | A1 Car Wash Locations",
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
