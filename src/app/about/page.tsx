"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactBookingSection from "@/components/ContactBookingSection";
import Footer from "@/components/Footer";
import { Sparkles, ShieldCheck, Award, Users, Droplets, Clock, MapPin } from "lucide-react";
import { STORES_DATA } from "@/data/storesData";

export default function AboutPage() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      {/* Hero Section */}
      <section style={{
        padding: "70px 0 50px",
        background: "linear-gradient(180deg, #f0f9ff 0%, #ffffff 100%)",
        textAlign: "center"
      }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="badge-pill badge-glow" style={{ marginBottom: "14px" }}>
            <Award size={14} style={{ color: "#0284c7" }} />
            <span>EXCELLENCE IN AUTOMOTIVE CARE</span>
          </div>
          <h1 style={{
            fontSize: "clamp(2.4rem, 4vw, 3.4rem)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            color: "#0f172a",
            marginBottom: "16px"
          }}>
            Crafting Hyderabad's <span className="text-gradient">Cleanest Vehicles</span>
          </h1>
          <p style={{ fontSize: "17px", color: "#475569", lineHeight: "1.6" }}>
            Founded with a passion for automotive perfection, AutoCare Pro has grown into Hyderabad's most trusted 5-studio car wash and paint protection network.
          </p>
        </div>
      </section>

      {/* Story & Philosophy Section */}
      <section className="section" style={{ background: "#ffffff", paddingTop: 0 }}>
        <div className="container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "50px",
            alignItems: "center"
          }} className="about-grid">
            
            <div>
              <div className="badge-pill" style={{ marginBottom: "14px" }}>
                <span>OUR MISSION</span>
              </div>
              <h2 style={{ fontSize: "2rem", fontWeight: "800", color: "#0f172a", marginBottom: "20px" }}>
                Redefining the Car Care Experience in Telangana
              </h2>
              <p style={{ fontSize: "15px", color: "#475569", lineHeight: "1.7", marginBottom: "16px" }}>
                Traditional roadside washing centers often use high TDS mineral water, harsh household detergents, and abrasive wiping rags that damage vehicle clearcoats with unsightly swirls.
              </p>
              <p style={{ fontSize: "15px", color: "#475569", lineHeight: "1.7", marginBottom: "24px" }}>
                At AutoCare Pro, we engineered a clinical, paint-safe ecosystem: 100% deionized RO softened water, German pH-neutral snow foam, dedicated grit-guard buckets, and dust-controlled cleanrooms for certified 9H ceramic coatings and self-healing TPU PPF film applications.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div style={{ background: "#f8fafc", padding: "16px", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
                  <div style={{ fontSize: "28px", fontWeight: "900", color: "#0284c7" }}>50K+</div>
                  <div style={{ fontSize: "13px", color: "#64748b", fontWeight: "600" }}>Vehicles Detailed</div>
                </div>
                <div style={{ background: "#f8fafc", padding: "16px", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
                  <div style={{ fontSize: "28px", fontWeight: "900", color: "#10b981" }}>4.9 ★</div>
                  <div style={{ fontSize: "13px", color: "#64748b", fontWeight: "600" }}>Customer Rating</div>
                </div>
              </div>
            </div>

            <div style={{ position: "relative" }}>
              <div style={{
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 25px 50px -12px rgba(14, 165, 233, 0.25)",
                border: "1px solid #e2e8f0"
              }}>
                <img
                  src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1000&q=80"
                  alt="Detailing Studio"
                  style={{ width: "100%", height: "420px", objectFit: "cover" }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Booking Form */}
      <ContactBookingSection />

      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
