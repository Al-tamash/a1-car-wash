"use client";
// Refreshed store detail page

import React from "react";
import { useParams } from "next/navigation";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StoreLocator from "@/components/StoreLocator";
import VirtualToolsSection from "@/components/VirtualToolsSection";
import FaqSection from "@/components/FaqSection";
import ContactBookingSection from "@/components/ContactBookingSection";
import Footer from "@/components/Footer";
import { STORES_DATA, getStoreBySlug, StoreLocation } from "@/data/storesData";

export default function StoreDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const store = getStoreBySlug(slug) || STORES_DATA[0];

  return <StoreContent store={store} />;
}

function StoreContent({ store }: { store: StoreLocation }) {
  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* 1. Navbar with Active Store context */}
      <Navbar currentStoreSlug={store.slug} />

      {/* 2. Hero Section Customized for this particular store with font-weight 600 */}
      <HeroSection store={store} />

      {/* 3. Services Section */}
      <ServicesSection />

      {/* About Section */}
      <AboutSection />

      {/* Pricing & Packages Section */}
      <PricingSection />

      {/* Reviews (Testimonials) Section */}
      <TestimonialsSection />

      {/* FAQs Section */}
      <FaqSection />

      {/* Interactive Virtual Tools (Before/After Slider) */}
      <VirtualToolsSection />

      {/* ── STORE LOCATION MAP & CONTACT FORM SIDE BY SIDE ── */}
      <ContactBookingSection store={store} />

      {/* 7. Store Locator — displays THIS particular store map ONLY */}
      <StoreLocator currentStoreSlug={store.slug} />

      {/* 14. Footer */}
      <Footer />
    </main>
  );
}
