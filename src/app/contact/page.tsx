"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import ContactBookingSection from "@/components/ContactBookingSection";
import StoreLocator from "@/components/StoreLocator";
import Footer from "@/components/Footer";
import { Phone, MapPin, Clock, Mail, MessageSquare, Sparkles } from "lucide-react";
import { STORES_DATA } from "@/data/storesData";

export default function ContactPage() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      {/* Header */}
      <section style={{
        padding: "60px 0 30px",
        background: "linear-gradient(180deg, #f0f9ff 0%, #ffffff 100%)",
        textAlign: "center"
      }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="badge-pill badge-glow" style={{ marginBottom: "14px" }}>
            <Phone size={14} style={{ color: "#0284c7" }} />
            <span>CONNECT WITH OUR DETAILING MASTERS</span>
          </div>
          <h1 style={{
            fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
            fontWeight: "900",
            letterSpacing: "-0.03em",
            color: "#0f172a",
            marginBottom: "16px"
          }}>
            Contact & <span className="text-gradient">Store Hubs</span>
          </h1>
          <p style={{ fontSize: "16px", color: "#475569", lineHeight: "1.6" }}>
            Reach out to our central desk or visit any of our 5 Hyderabad branches in Narsingi, Manikonda Rd, Himayat Sagar Rd (Suncity), Toli Chowki, or Raidurga Film Nagar Rd.
          </p>
        </div>
      </section>

      {/* Contact & Booking Section */}
      <ContactBookingSection />

      {/* Store Locator Map Grid */}
      <StoreLocator />

      <Footer />
    </main>
  );
}
