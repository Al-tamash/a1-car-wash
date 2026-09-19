import React from "react";
import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Car & Bike Wash Services & Detailing Packages | A1 Car Wash Hyderabad",
  description:
    "Explore A1 Car Wash services in Hyderabad: Full Car Wash with Hydraulic Jack Lift & Diesel Wash, Snow Foam Body Wash, Interior Deep Cleaning Spa, Teflon Coating, Underbody Anti-Rust Coating, and Bike Detailing.",
  alternates: {
    canonical: "https://a1carwash.in/services",
  },
  openGraph: {
    title: "Car & Bike Wash Services & Detailing Packages | A1 Car Wash Hyderabad",
    description:
      "Showroom-grade car and bike cleaning with hydraulic jack lifts, touchless snow foam, RO soft-water & Teflon protection in Hyderabad.",
    url: "https://a1carwash.in/services",
    siteName: "A1 Car Wash",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/gallery/real-lift-mercedes.jpg",
        width: 1200,
        height: 630,
        alt: "A1 Car Wash Hydraulic Jack Lift Service Bay",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Car & Bike Wash Services & Detailing Packages | A1 Car Wash Hyderabad",
    description:
      "Jack Lift Car Wash, Interior Deep Cleaning Spa, Teflon Coating & Bike Detailing in Hyderabad. Call 70452 82473.",
    images: ["/gallery/real-lift-mercedes.jpg"],
  },
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://a1carwash.in" },
          { name: "Services", url: "https://a1carwash.in/services" },
        ]}
      />
      <ServicesClient />
    </>
  );
}
