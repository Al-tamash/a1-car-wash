"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import StoreLocator from "@/components/StoreLocator";
import ContactBookingSection from "@/components/ContactBookingSection";
import Footer from "@/components/Footer";
import { MapPin, Phone, Clock, Sparkles } from "lucide-react";

export default function StoresPage() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      {/* Stores Header */}
      <section style={{
        padding: "60px 0 30px",
        background: "linear-gradient(180deg, #fef2f2 0%, #ffffff 100%)",
        textAlign: "center"
      }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="badge-pill badge-glow" style={{ marginBottom: "14px" }}>
            <MapPin size={14} style={{ color: "#dc2626" }} />
            <span>HYDERABAD DETAILING HUBS</span>
          </div>
          <h1 style={{
            fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
            fontWeight: "900",
            letterSpacing: "-0.03em",
            color: "#172554",
            marginBottom: "16px"
          }}>
            Our 5 Premium <span style={{ color: "#dc2626" }}>Store Locations</span>
          </h1>
          <p style={{ fontSize: "16px", color: "#475569", lineHeight: "1.6" }}>
            Find the closest AutoCare Pro studio in Hyderabad. Every branch is fully equipped with multi-bay wash stations, RO filtration plant, and certified detailing cleanrooms.
          </p>
        </div>
      </section>

      {/* Interactive Store Locator Component */}
      <StoreLocator />

      {/* Booking Form */}
      <ContactBookingSection />

      <Footer />
    </main>
  );
}
