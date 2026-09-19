import type { Metadata, Viewport } from "next";
import "./globals.css";
import { RootJsonLd, FaqJsonLd } from "@/components/StructuredData";

export const viewport: Viewport = {
  themeColor: "#dc2626",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://a1carwash.in"),
  title: {
    default: "A1 Car Wash | Quality Car Cleaning & Detailing — Hyderabad",
    template: "%s | A1 Car Wash Hyderabad",
  },
  description:
    "A1 Car Wash — Quality Car Cleaning & Detailing located at Mehfil Restaurant, Raidurg, Darga Chowrasta, Film Nagar Road, Hyderabad. Hydraulic Jack Lift Car Wash, Body Foam Wash, Interior Deep Steam Cleaning, Teflon Coating, Underbody Anti-Rust Coating, and Bike Detailing. Call 70452 82473.",
  keywords: [
    "A1 Car Wash",
    "A1 Car Wash Hyderabad",
    "car wash",
    "car cleaning",
    "car detailing",
    "car service",
    "vehicle cleaning",
    "jack lift car wash hyderabad",
    "car wash raidurg",
    "film nagar road car wash",
    "car detailing darga chowrasta",
    "underbody anti rust coating hyderabad",
    "teflon coating hyderabad",
    "interior deep cleaning car wash",
    "bike wash hyderabad",
    "car wash banjara hills",
    "car wash narsingi",
    "car wash shaikpet",
    "car wash mehdipatnam"
  ],
  authors: [{ name: "A1 Car Wash" }],
  creator: "A1 Car Wash",
  publisher: "A1 Car Wash",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "A1 Car Wash | Quality Car Cleaning & Detailing — Hyderabad",
    description:
      "Showroom-grade car cleaning and detailing in Hyderabad with hydraulic jack lifts, touchless snow foam, RO soft-water, Teflon coating & deep interior steam sanitization.",
    url: "https://a1carwash.in",
    siteName: "A1 Car Wash",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/gallery/real-fortuner-studio-lights.png",
        width: 1200,
        height: 630,
        alt: "A1 Car Wash Detailing Studio in Hyderabad with Hydraulic Jack Lift Bays",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A1 Car Wash | Quality Car Cleaning & Detailing — Hyderabad",
    description:
      "Hydraulic Jack Lift Car Wash, Interior Deep Cleaning Spa, Teflon Coating, and Bike Wash across 6 Hyderabad locations. Call 70452 82473.",
    images: ["/gallery/real-fortuner-studio-lights.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <RootJsonLd />
        <FaqJsonLd />
      </head>
      <body>{children}</body>
    </html>
  );
}
