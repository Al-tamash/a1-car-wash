import React from "react";
import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: {
    absolute: "A1 Car Wash | Car Wash & Detailing Hyderabad",
  },
  description:
    "A1 Car Wash in Hyderabad offers hydraulic jack lift car washes, snow foam cleaning, interior steam sanitization, Teflon coating & bike wash. Call 70452 82473.",
  alternates: {
    canonical: "https://a1carwash.in",
  },
  openGraph: {
    title: "A1 Car Wash | Car Wash & Detailing Hyderabad",
    description:
      "A1 Car Wash in Hyderabad offers hydraulic jack lift car washes, snow foam cleaning, interior steam sanitization, Teflon coating & bike wash. Call 70452 82473.",
    url: "https://a1carwash.in",
    siteName: "A1 Car Wash",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/gallery/real-fortuner-studio-lights.png",
        width: 1200,
        height: 630,
        alt: "A1 Car Wash Hyderabad - Detailing Studio",
      },
    ],
  },
};

export default function HomePage() {
  return <HomeClient />;
}
