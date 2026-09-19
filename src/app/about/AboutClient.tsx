"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import StoreLocator from "@/components/StoreLocator";
import "@/components/AboutSection.css";
import {
  MapPin,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function AboutClient() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#ffffff" }}>
      <Navbar />

      {/* ── 1. OUR STORY HERO BANNER ── */}
      <section
        style={{
          padding: "125px 20px 50px",
          background: "linear-gradient(180deg, #fef2f2 0%, #fff7ed 40%, #ffffff 100%)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid #f1f5f9",
        }}
      >
        {/* Subtle decorative glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "-40px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "600px",
            height: "220px",
            background: "radial-gradient(circle, rgba(220, 38, 38, 0.08) 0%, transparent 70%)",
            filter: "blur(40px)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "860px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          {/* Badge: OUR STORY */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: "#fee2e2",
              color: "#dc2626",
              border: "1px solid rgba(220, 38, 38, 0.22)",
              borderRadius: "9999px",
              fontSize: "12px",
              fontWeight: 800,
              padding: "5px 18px",
              marginBottom: "16px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              boxShadow: "0 2px 8px rgba(220, 38, 38, 0.08)",
            }}
          >
            <span>OUR STORY</span>
          </div>

          {/* Heading: About A1 Car Wash */}
          <h1
            style={{
              fontSize: "clamp(2rem, 3.2vw, 2.75rem)",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "#0f172a",
              marginBottom: "16px",
              lineHeight: 1.2,
            }}
          >
            About <span style={{ color: "#dc2626" }}>A1 Car Wash</span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "clamp(15px, 1.5vw, 17.5px)",
              color: "#475569",
              maxWidth: "680px",
              margin: "0 auto 22px",
              lineHeight: 1.65,
              fontWeight: 400,
            }}
          >
            We are more than a car wash service — we are your trusted automotive care and detailing partners in Hyderabad.
          </p>

          {/* Breadcrumbs: Home > About Us */}
          <nav
            aria-label="Breadcrumb"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "13.5px",
              color: "#64748b",
              background: "rgba(255, 255, 255, 0.85)",
              backdropFilter: "blur(8px)",
              padding: "6px 18px",
              borderRadius: "9999px",
              border: "1px solid #e2e8f0",
              boxShadow: "0 2px 8px rgba(15, 23, 42, 0.04)",
            }}
          >
            <Link
              href="/"
              style={{
                color: "#dc2626",
                textDecoration: "none",
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
                transition: "color 0.2s",
              }}
            >
              Home
            </Link>
            <ChevronRight size={14} style={{ color: "#94a3b8" }} />
            <span style={{ color: "#0f172a", fontWeight: 600 }}>About Us</span>
          </nav>
        </div>
      </section>

      {/* ── 2. WHO WE ARE & WELCOME SECTION ── */}
      <section style={{ padding: "80px 20px 95px", background: "#ffffff", overflow: "hidden" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 12px" }}>
          <div className="about-custom-grid">
            {/* ──── LEFT: LAYERED COMPOSITE IMAGE (FORTUNER + INSET BIKE + 25K+ POPUP) ──── */}
            <div className="about-new-visual-wrap" style={{ margin: "0 auto" }}>
              {/* Main Chamfered Corner Image */}
              <div className="about-new-main-img-box">
                <img
                  src="/gallery/about-fortuner-studio.jpg"
                  alt="A1 Car Detailing Studio Under Inspection Lights in Hyderabad"
                  loading="lazy"
                />
              </div>

              {/* Inset Top-Right Floating Photo */}
              <div className="about-new-inset-card">
                <img
                  src="/gallery/about-interceptor-bike.jpg"
                  alt="Master Detailer Foam Washing Two-Wheeler Motorcycle"
                  loading="lazy"
                />
              </div>

              {/* Bottom-Left Floating Stat Card */}
              <div className="about-new-stat-card">
                <div className="about-stat-top-row">
                  <span className="about-stat-label">Est. Since</span>
                  <div className="about-stat-icon-wrap">
                    <Sparkles size={16} />
                  </div>
                </div>
                <div className="about-stat-number">
                  <span style={{ color: "#e53935", fontWeight: 800 }}>1997</span>
                </div>
                <div className="about-stat-bottom-text">
                  <span>★</span>
                  <span>Trusted for 28+ Years</span>
                </div>
              </div>
            </div>

            {/* ──── RIGHT: PRESERVED ABOUT CONTENT ──── */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              {/* Badge: WHO WE ARE */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "#fee2e2",
                  color: "#dc2626",
                  border: "1px solid rgba(220, 38, 38, 0.22)",
                  borderRadius: "9999px",
                  fontSize: "12px",
                  fontWeight: 800,
                  padding: "5px 16px",
                  marginBottom: "14px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  alignSelf: "flex-start",
                }}
              >
                <span>WHO WE ARE</span>
              </div>

              {/* Heading: Welcome to A1 Car Wash Service */}
              <h2
                style={{
                  fontSize: "clamp(2rem, 3.2vw, 2.75rem)",
                  fontWeight: 600,
                  color: "#0f172a",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                  marginBottom: "18px",
                }}
              >
                Welcome to <span style={{ color: "#dc2626" }}>A1 Car Wash</span> Service
              </h2>

              {/* Story Paragraphs */}
              <p style={{ fontSize: "15.5px", color: "#475569", lineHeight: 1.75, marginBottom: "14px" }}>
                Founded in Hyderabad, <strong style={{ color: "#0f172a" }}>A1 Car Wash</strong> was born from a simple belief: everyone deserves clean, showroom-perfect vehicles without the hassle, long wait times, or inflated prices. What started as a dedicated high-pressure wash bay has grown into Hyderabad&apos;s trusted network of 6 multi-bay detailing studios.
              </p>

              <p style={{ fontSize: "15px", color: "#475569", lineHeight: 1.7, marginBottom: "26px" }}>
                From daily commuter hatchbacks and luxury SUVs to performance superbikes, every vehicle is treated with obsessive care. Equipped with heavy-duty hydraulic jack lifts, automated RO soft-water plants, and touchless pH-neutral snow foam, we protect your vehicle&apos;s clear coat while delivering an immaculate mirror shine.
              </p>

              {/* 4 Feature Highlights in 2x2 Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
                  gap: "14px",
                  marginBottom: "32px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    padding: "14px 16px",
                    background: "#f8fafc",
                    borderRadius: "14px",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <CheckCircle2 size={18} style={{ color: "#dc2626", marginTop: "2px", flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: "13.5px", fontWeight: 700, color: "#0f172a" }}>100% RO Soft Water</div>
                    <div style={{ fontSize: "12px", color: "#64748b" }}>Zero chalky mineral marks or hard water spots.</div>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    padding: "14px 16px",
                    background: "#f8fafc",
                    borderRadius: "14px",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <CheckCircle2 size={18} style={{ color: "#dc2626", marginTop: "2px", flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: "13.5px", fontWeight: 700, color: "#0f172a" }}>Hydraulic Jack Lifts</div>
                    <div style={{ fontSize: "12px", color: "#64748b" }}>Deep 360° underbody chassis mud extraction.</div>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    padding: "14px 16px",
                    background: "#f8fafc",
                    borderRadius: "14px",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <CheckCircle2 size={18} style={{ color: "#dc2626", marginTop: "2px", flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: "13.5px", fontWeight: 700, color: "#0f172a" }}>Teflon &amp; 9H Ceramic</div>
                    <div style={{ fontSize: "12px", color: "#64748b" }}>Advanced hydrophobic gloss &amp; paint protection.</div>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    padding: "14px 16px",
                    background: "#f8fafc",
                    borderRadius: "14px",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <CheckCircle2 size={18} style={{ color: "#dc2626", marginTop: "2px", flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: "13.5px", fontWeight: 700, color: "#0f172a" }}>6 Hubs in Hyderabad</div>
                    <div style={{ fontSize: "12px", color: "#64748b" }}>Convenient locations with quick WhatsApp slots.</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
                <Link
                  href="/services"
                  style={{
                    background: "#dc2626",
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: "14.5px",
                    padding: "12px 24px",
                    borderRadius: "12px",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    boxShadow: "0 6px 20px rgba(220, 38, 38, 0.28)",
                  }}
                >
                  <span>Explore Our Services</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/stores"
                  style={{
                    background: "#ffffff",
                    color: "#0f172a",
                    fontWeight: 700,
                    fontSize: "14.5px",
                    padding: "12px 22px",
                    borderRadius: "12px",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    border: "1.5px solid #e2e8f0",
                  }}
                >
                  <MapPin size={16} style={{ color: "#dc2626" }} />
                  <span>Our 6 Locations</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. HOW IT WORKS SECTION ── */}
      <HowItWorks />

      {/* ── 4. STORE LOCATIONS SECTION ── */}
      <StoreLocator />

      <Footer />

      <style jsx>{`
        .about-custom-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 56px;
          align-items: center;
        }

        @media (max-width: 960px) {
          .about-custom-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>
    </main>
  );
}
