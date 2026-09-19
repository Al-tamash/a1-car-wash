import React from "react";
import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "A1 Car Wash | Hydraulic Jack Lift Car Wash & Detailing in Hyderabad",
  description:
    "A1 Car Wash in Hyderabad: Hydraulic Jack Lift Car Wash, Underbody Diesel & Oil Degreasing, Active Snow Foam, Interior Deep Steam Extraction, Teflon Coating & Bike Detailing. 6 Hubs across Hyderabad.",
  alternates: {
    canonical: "https://a1carwash.in",
  },
  openGraph: {
    title: "A1 Car Wash | Hydraulic Jack Lift Car Wash & Detailing in Hyderabad",
    description:
      "Showroom-grade car cleaning & detailing with hydraulic jack lifts, touchless snow foam, RO soft-water & Teflon protection across 6 Hyderabad locations.",
    url: "https://a1carwash.in",
    siteName: "A1 Car Wash",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/gallery/real-fortuner-studio-lights.png",
        width: 1200,
        height: 630,
        alt: "A1 Car Wash Hyderabad - Hydraulic Jack Lift Detailing Studio",
      },
    ],
  },
};

export default function HomePage() {
  return <HomeClient />;
}
