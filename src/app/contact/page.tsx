import React from "react";
import type { Metadata } from "next";
import ContactClient from "./ContactClient";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Contact & Slot Booking",
  description:
    "Book your car wash slot at A1 Car Wash Hyderabad. Call 70452 82473 or message on WhatsApp for hydraulic jack lift wash, interior steam cleaning & detailing.",
  alternates: {
    canonical: "https://a1carwash.in/contact",
  },
  openGraph: {
    title: "Contact & Slot Booking | A1 Car Wash",
    description:
      "Get in touch with A1 Car Wash central desk or message us on WhatsApp at 70452 82473 for instant bay booking in Hyderabad.",
    url: "https://a1carwash.in/contact",
    siteName: "A1 Car Wash",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/gallery/real-fortuner-studio-lights.png",
        width: 1200,
        height: 630,
        alt: "Contact A1 Car Wash Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact & Slot Booking | A1 Car Wash",
    description:
      "Call 70452 82473 or book your car wash bay online at A1 Car Wash Hyderabad.",
    images: ["/gallery/real-fortuner-studio-lights.png"],
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://a1carwash.in" },
          { name: "Contact", url: "https://a1carwash.in/contact" },
        ]}
      />
      <ContactClient />
    </>
  );
}
