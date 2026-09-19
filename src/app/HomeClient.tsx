"use client";

import React from "react";
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

export default function HomeClient() {
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
