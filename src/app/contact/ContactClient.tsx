"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import ContactBookingSection from "@/components/ContactBookingSection";
import Footer from "@/components/Footer";
import { Phone } from "lucide-react";

export default function ContactClient() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      {/* Header */}
      <section style={{
        padding: "115px 0 35px",
        background: "linear-gradient(180deg, #fef2f2 0%, #ffffff 100%)",
        textAlign: "center"
      }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="badge-pill badge-glow" style={{ marginBottom: "14px" }}>
            <Phone size={14} style={{ color: "#dc2626" }} />
            <span>CONNECT WITH OUR DETAILING MASTERS</span>
          </div>
          <h1 style={{
            fontSize: "clamp(2rem, 3.2vw, 2.75rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: "#0f172a",
            marginBottom: "16px"
          }}>
            Contact <span style={{ color: "#dc2626" }}>Our Team</span>
          </h1>
          <p style={{ fontSize: "16px", color: "#475569", lineHeight: "1.6" }}>
            Have questions about services, pricing, or want to book a detailing slot? Call our central desk or send us a message below.
          </p>
        </div>
      </section>

      {/* Contact & Booking Section (No Map) */}
      <ContactBookingSection showMap={false} />

      <Footer />
    </main>
  );
}
