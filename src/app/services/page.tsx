"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import FaqSection from "@/components/FaqSection";
import ContactBookingSection from "@/components/ContactBookingSection";
import Footer from "@/components/Footer";
import { Sparkles } from "lucide-react";

export default function ServicesPage() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      {/* Services Hero Header */}
      <section
        style={{
          padding: "100px 0 40px",
          background: "linear-gradient(180deg, #fef2f2 0%, #ffffff 100%)",
          textAlign: "center",
        }}
      >
        <div className="container" style={{ maxWidth: "820px", margin: "0 auto", padding: "0 24px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: "#fee2e2",
              color: "#dc2626",
              borderRadius: "9999px",
              fontSize: "12px",
              fontWeight: 800,
              padding: "5px 16px",
              marginBottom: "14px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            <Sparkles size={14} style={{ color: "#dc2626" }} />
            <span>A1 CAR WASH — FULL SERVICE MENU &amp; RATES</span>
          </div>
          <h1
            style={{
              fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              color: "#0f172a",
              marginBottom: "16px",
            }}
          >
            Quality Car Cleaning &amp; <span style={{ color: "#dc2626" }}>Detailing Rates</span>
          </h1>
          <p style={{ fontSize: "16px", color: "#475569", lineHeight: "1.6" }}>
            Experience specialized Jack Lift washes, diesel degreasing, interior deep sanitization, Teflon coating, and underbody anti-rust protection at Mehfil Restaurant, Raidurg, Hyderabad.
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <ServicesSection />

      {/* Pricing Matrix */}
      <PricingSection />

      {/* Quality Guarantees */}
      <WhyChooseUs />

      {/* FAQs */}
      <FaqSection />

      {/* Booking Form */}
      <ContactBookingSection />

      <Footer />
    </main>
  );
}
