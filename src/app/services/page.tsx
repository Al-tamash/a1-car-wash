import React from "react";
import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Explore A1 Car Wash services in Hyderabad: Hydraulic Jack Lift wash, snow foam body bath, interior deep cleaning, Teflon coating & bike wash. Call 70952 82473.",
  alternates: {
    canonical: "https://a1carwash.in/services",
  },
  openGraph: {
    title: "Services & Pricing | A1 Car Wash",
    description:
      "Explore A1 Car Wash services in Hyderabad: Hydraulic Jack Lift wash, snow foam body bath, interior deep cleaning, Teflon coating & bike wash. Call 70952 82473.",
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
    title: "Services & Pricing | A1 Car Wash",
    description:
      "Explore A1 Car Wash services in Hyderabad: Hydraulic Jack Lift wash, snow foam body bath, interior deep cleaning & Teflon coating.",
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
