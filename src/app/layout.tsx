import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { RootJsonLd, FaqJsonLd } from "@/components/StructuredData";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-heading",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#dc2626",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://a1carwash.in"),
  title: {
    default: "A1 Car Wash | Car Cleaning & Detailing Hyderabad",
    template: "%s | A1 Car Wash",
  },
  description:
    "A1 Car Wash in Hyderabad offers hydraulic jack lift car washes, snow foam cleaning, interior steam sanitization, Teflon coating & bike wash. Call 70952 82473.",
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
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/icon.svg",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "A1 Car Wash | Car Cleaning & Detailing Hyderabad",
    description:
      "A1 Car Wash in Hyderabad offers hydraulic jack lift car washes, snow foam cleaning, interior steam sanitization, Teflon coating & bike wash. Call 70952 82473.",
    url: "https://a1carwash.in",
    siteName: "A1 Car Wash",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/gallery/real-fortuner-studio-lights.png",
        width: 1200,
        height: 630,
        alt: "A1 Car Wash Detailing Studio in Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A1 Car Wash | Car Cleaning & Detailing Hyderabad",
    description:
      "A1 Car Wash in Hyderabad offers hydraulic jack lift car washes, snow foam cleaning, interior steam sanitization, Teflon coating & bike wash. Call 70952 82473.",
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
    <html lang="en" className={`${outfit.variable} ${plusJakartaSans.variable}`}>
      <head>
        <RootJsonLd />
        <FaqJsonLd />
      </head>
      <body>{children}</body>
    </html>
  );
}
