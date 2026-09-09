"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import VirtualToolsSection from "@/components/VirtualToolsSection";
import ContactBookingSection from "@/components/ContactBookingSection";
import Footer from "@/components/Footer";
import { Sparkles, Eye, Star, ShieldCheck, Car } from "lucide-react";

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const galleryItems = [
    {
      title: "BMW M4 Competition - Full 9H Ceramic Shield",
      category: "ceramic",
      location: "Narsingi Flagship",
      image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=900&q=80"
    },
    {
      title: "Mercedes-AMG G63 - Matte PPF Self-Healing Wrap",
      category: "ppf",
      location: "Raidurga Film Nagar",
      image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=900&q=80"
    },
    {
      title: "Porsche 911 Carrera - Multi-Stage Paint Correction",
      category: "detailing",
      location: "Manikonda Hub",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80"
    },
    {
      title: "Range Rover Sport - Snow Foam Deep Wash & Interior Spa",
      category: "wash",
      location: "Toli Chowki Studio",
      image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=900&q=80"
    },
    {
      title: "Audi RS7 - Teflon Hydrophobic Mirror Glaze",
      category: "ceramic",
      location: "Dargah Khalishkhan (Suncity)",
      image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=900&q=80"
    },
    {
      title: "Jaguar F-Pace - Complete Interior Extraction & Sanitization",
      category: "detailing",
      location: "Narsingi Flagship",
      image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=900&q=80"
    }
  ];

  const filteredItems = activeFilter === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      {/* Gallery Header */}
      <section style={{
        padding: "60px 0 30px",
        background: "linear-gradient(180deg, #fef2f2 0%, #ffffff 100%)",
        textAlign: "center"
      }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="badge-pill badge-glow" style={{ marginBottom: "14px" }}>
            <Sparkles size={14} style={{ color: "#dc2626" }} />
            <span>SHOWROOM TRANSFORMATIONS</span>
          </div>
          <h1 style={{
            fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
            fontWeight: "900",
            letterSpacing: "-0.03em",
            color: "#172554",
            marginBottom: "16px"
          }}>
            Our Work & <span style={{ color: "#dc2626" }}>Client Showcase</span>
          </h1>
          <p style={{ fontSize: "16px", color: "#475569", lineHeight: "1.6" }}>
            Explore genuine before-and-after detailing results, mirror reflections, and paint protection executed at our 5 Hyderabad hubs.
          </p>
        </div>
      </section>

      {/* Interactive Before & After Tools */}
      <VirtualToolsSection />

      {/* Gallery Grid & Filter */}
      <section className="section" style={{ background: "#ffffff", paddingTop: 0 }}>
        <div className="container">
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            flexWrap: "wrap",
            marginBottom: "36px"
          }}>
            {[
              { id: "all", label: "All Projects" },
              { id: "ceramic", label: "Ceramic Coating" },
              { id: "ppf", label: "PPF Protection" },
              { id: "detailing", label: "Paint Correction" },
              { id: "wash", label: "Wash & Foam Spa" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                style={{
                  padding: "8px 18px",
                  borderRadius: "9999px",
                  fontSize: "13px",
                  fontWeight: "700",
                  border: "1px solid",
                  borderColor: activeFilter === tab.id ? "#dc2626" : "#cbd5e1",
                  background: activeFilter === tab.id ? "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)" : "#ffffff",
                  color: activeFilter === tab.id ? "#ffffff" : "#172554",
                  boxShadow: activeFilter === tab.id ? "0 4px 12px rgba(220, 38, 38, 0.3)" : "none",
                  transition: "all 0.2s"
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "24px"
          }}>
            {filteredItems.map((item, index) => (
              <div
                key={index}
                style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 10px 25px -5px rgba(15, 23, 42, 0.05)",
                  position: "relative"
                }}
                className="glass-card"
              >
                <div style={{ position: "relative", height: "240px", overflow: "hidden" }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease" }}
                  />
                  <div style={{
                    position: "absolute",
                    top: "12px",
                    right: "12px",
                    background: "rgba(15, 23, 42, 0.85)",
                    backdropFilter: "blur(6px)",
                    color: "#ffffff",
                    fontSize: "11px",
                    fontWeight: "700",
                    padding: "4px 10px",
                    borderRadius: "9999px"
                  }}>
                    📍 {item.location}
                  </div>
                </div>

                <div style={{ padding: "20px" }}>
                  <h3 style={{ fontSize: "16px", fontWeight: "800", color: "#172554", marginBottom: "8px" }}>
                    {item.title}
                  </h3>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontSize: "12px", fontWeight: "700", color: "#dc2626", textTransform: "uppercase" }}>
                      ✓ Verified Project
                    </span>
                    <a href="#contact-section" style={{ fontSize: "12px", fontWeight: "700", color: "#dc2626" }}>
                      Get Similar Finish →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactBookingSection />
      <Footer />
    </main>
  );
}
