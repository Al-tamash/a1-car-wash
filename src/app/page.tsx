"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import StoreLocator from "@/components/StoreLocator";
import PricingSection from "@/components/PricingSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import FaqSection from "@/components/FaqSection";
import DoorstepCTA from "@/components/DoorstepCTA";
import ContactBookingSection from "@/components/ContactBookingSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#ffffff" }}>
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Hero — dark red bg, car image, slider dots */}
      <HeroSection />

      {/* 3. Our Services — 6-card grid */}
      <ServicesSection />

      {/* 4. Why Choose Us */}
      <WhyChooseUs />

      {/* 5. How It Works */}
      <HowItWorks />

      {/* 6. Testimonials */}
      <TestimonialsSection />

      {/* 7. Our Packages — Basic / Standard / Premium */}
      <PricingSection />

      {/* 8. Our Gallery — filter tabs + photo grid */}
      <GallerySection />

      {/* 9. Our Blog — 3 blog cards */}
      <BlogSection />

      {/* 10. FAQs */}
      <FaqSection />

      {/* 11. 24/7 Doorstep CTA banner */}
      <DoorstepCTA />

      {/* 12. Contact Us */}
      <ContactBookingSection />

      {/* 13. Store Locations & Virtual Tours (Moved to last) */}
      <StoreLocator />

      {/* 14. Footer */}
      <Footer />
    </main>
  );
}
