"use client";

import React from "react";
import { useParams } from "next/navigation";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import GallerySection from "@/components/GallerySection";
import StoreLocator from "@/components/StoreLocator";
import VirtualToolsSection from "@/components/VirtualToolsSection";
import FaqSection from "@/components/FaqSection";
import DoorstepCTA from "@/components/DoorstepCTA";
import ContactBookingSection from "@/components/ContactBookingSection";
import Footer from "@/components/Footer";
import { STORES_DATA, getStoreBySlug, StoreLocation } from "@/data/storesData";
import { MapPin, Phone, ExternalLink } from "lucide-react";

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

      {/* Store Quick Info Ribbon */}
      <section
        style={{
          background: "linear-gradient(90deg, #dc2626 0%, #991b1b 100%)",
          color: "#ffffff",
          padding: "16px 0",
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "14px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <MapPin size={18} />
              <span style={{ fontSize: "15px", fontWeight: 600 }}>{store.name}</span>
            </div>
            <span style={{ opacity: 0.5 }}>|</span>
            <div style={{ fontSize: "13.5px", opacity: 0.95 }}>{store.address}</div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <a
              href={`tel:${store.phone.replace(/\s+/g, "")}`}
              style={{
                background: "#ffffff",
                color: "#dc2626",
                padding: "8px 18px",
                borderRadius: "6px",
                fontSize: "13px",
                fontWeight: 600,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <Phone size={14} />
              <span>Call {store.phone}</span>
            </a>

            <a
              href={store.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                border: "1px solid rgba(255, 255, 255, 0.6)",
                color: "#ffffff",
                padding: "8px 18px",
                borderRadius: "6px",
                fontSize: "13px",
                fontWeight: 600,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <ExternalLink size={14} />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3. Services Section */}
      <ServicesSection />

      {/* 4. Why Choose Us */}
      <WhyChooseUs />

      {/* 5. How It Works */}
      <HowItWorks />

      {/* 6. Testimonials */}
      <TestimonialsSection />

      {/* 7. Store Locator — displays THIS particular store map ONLY */}
      <StoreLocator currentStoreSlug={store.slug} />

      {/* 8. Packages */}
      <PricingSection />

      {/* 9. Gallery */}
      <GallerySection />

      {/* 10. Interactive Virtual Tools */}
      <VirtualToolsSection />

      {/* 11. FAQs */}
      <FaqSection />

      {/* 12. Doorstep CTA */}
      <DoorstepCTA />

      {/* 13. Contact & Booking for this store */}
      <ContactBookingSection store={store} />

      {/* 14. Footer */}
      <Footer />
    </main>
  );
}
