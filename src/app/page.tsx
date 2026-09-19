import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import PricingSection from "@/components/PricingSection";
import HowItWorks from "@/components/HowItWorks";
import StoreLocator from "@/components/StoreLocator";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

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
  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#ffffff" }}>
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Hero — dark red bg, car image, slider dots */}
      <HeroSection />

      {/* 3. Our Services — 3-card grid */}
      <ServicesSection />

      {/* 4. About Section */}
      <AboutSection />

      {/* 5. Pricing & Packages */}
      <PricingSection />

      {/* 6. How It Works */}
      <HowItWorks />

      {/* 7. Testimonials */}
      <TestimonialsSection />

      {/* 8. Our Gallery — mosaic grid */}
      <GallerySection />

      {/* 9. FAQs */}
      <FaqSection />

      {/* 10. Store Locations */}
      <StoreLocator />

      {/* 11. Footer */}
      <Footer />
    </main>
  );
}
