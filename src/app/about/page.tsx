"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import ContactBookingSection from "@/components/ContactBookingSection";
import Footer from "@/components/Footer";
import { Award } from "lucide-react";

export default function AboutPage() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      {/* Hero Section */}
      <section style={{
        padding: "115px 0 45px",
        background: "linear-gradient(180deg, #f0f9ff 0%, #ffffff 100%)",
        textAlign: "center"
      }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="badge-pill badge-glow" style={{ marginBottom: "14px" }}>
            <Award size={14} style={{ color: "#0284c7" }} />
            <span>EXCELLENCE IN AUTOMOTIVE CARE</span>
          </div>
          <h1 style={{
            fontSize: "clamp(2rem, 3.2vw, 2.75rem)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            color: "#0f172a",
            marginBottom: "16px"
          }}>
            A1 CAR WASH — <span style={{ color: "#dc2626" }}>Quality Car Cleaning &amp; Detailing</span>
          </h1>
        </div>
      </section>

      {/* Redesigned 2-Column About Section */}
      <AboutSection />

      {/* Dedicated Studio & Facility Showcase */}
      <section style={{ padding: "70px 0 80px", background: "#ffffff" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "#fef2f2",
                color: "#dc2626",
                border: "1px solid #fee2e2",
                borderRadius: "9999px",
                fontSize: "12px",
                fontWeight: 800,
                padding: "5px 16px",
                marginBottom: "12px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              REAL STUDIO &amp; WASH BAY PHOTOS
            </div>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 600,
                letterSpacing: "-0.025em",
                color: "#0f172a",
                margin: "0 0 10px",
              }}
            >
              Inside <span style={{ color: "#dc2626" }}>A1 Car Wash</span> Studio
            </h2>
            <p
              style={{
                fontSize: "15px",
                color: "#64748b",
                maxWidth: "640px",
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              Take a look inside our flagship facility located at Mehfil Restaurant, Raidurg, Darga Chowrasta. Equipped with professional washing bays, studio LED detailing suites, and dedicated bike wash zones.
            </p>
          </div>

          {/* 3 Images Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "28px",
            }}
          >
            {/* Image 1: Main Wash Bay with Rate Board */}
            <div
              style={{
                background: "#ffffff",
                borderRadius: "20px",
                border: "1px solid #e2e8f0",
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(15, 23, 42, 0.05)",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              <div style={{ position: "relative", height: "260px", overflow: "hidden" }}>
                <img
                  src="/gallery/about-bay-ratecard.jpg"
                  alt="A1 Car Wash Main Wash Bay and Official Rate Card Board"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    top: "14px",
                    left: "14px",
                    background: "rgba(15, 23, 42, 0.8)",
                    backdropFilter: "blur(6px)",
                    color: "#ffffff",
                    fontSize: "11px",
                    fontWeight: 800,
                    padding: "4px 12px",
                    borderRadius: "9999px",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  MAIN WASH BAY
                </span>
                <span
                  style={{
                    position: "absolute",
                    bottom: "14px",
                    right: "14px",
                    background: "#dc2626",
                    color: "#ffffff",
                    fontSize: "11px",
                    fontWeight: 700,
                    padding: "4px 10px",
                    borderRadius: "6px",
                  }}
                >
                  100% Rate Transparency
                </span>
              </div>
              <div style={{ padding: "22px" }}>
                <h3 style={{ fontSize: "19px", fontWeight: 700, color: "#0f172a", margin: "0 0 8px" }}>
                  Active Wash Bay &amp; Official Tariff Board
                </h3>
                <p style={{ fontSize: "13.5px", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
                  Our spacious wash bay features high-pressure water spray guns, chemical storage racks, and our official price list board displayed openly so you always know what you pay.
                </p>
              </div>
            </div>

            {/* Image 2: Studio Detailing & LED Setup */}
            <div
              style={{
                background: "#ffffff",
                borderRadius: "20px",
                border: "1px solid #e2e8f0",
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(15, 23, 42, 0.05)",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              <div style={{ position: "relative", height: "260px", overflow: "hidden" }}>
                <img
                  src="/gallery/about-fortuner-studio.jpg"
                  alt="Toyota Fortuner in Detailing Studio under Precision LED Lights"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    top: "14px",
                    left: "14px",
                    background: "rgba(15, 23, 42, 0.8)",
                    backdropFilter: "blur(6px)",
                    color: "#ffffff",
                    fontSize: "11px",
                    fontWeight: 800,
                    padding: "4px 12px",
                    borderRadius: "9999px",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  DETAILING STUDIO
                </span>
                <span
                  style={{
                    position: "absolute",
                    bottom: "14px",
                    right: "14px",
                    background: "#0284c7",
                    color: "#ffffff",
                    fontSize: "11px",
                    fontWeight: 700,
                    padding: "4px 10px",
                    borderRadius: "6px",
                  }}
                >
                  Inspection LED Array
                </span>
              </div>
              <div style={{ padding: "22px" }}>
                <h3 style={{ fontSize: "19px", fontWeight: 700, color: "#0f172a", margin: "0 0 8px" }}>
                  High-Precision Detailing &amp; Polish Suite
                </h3>
                <p style={{ fontSize: "13.5px", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
                  A clean, dust-controlled studio bay equipped with multi-row LED ceiling lights to identify micro-scratches, swirls, and ensure mirror-gloss Teflon and paint protection.
                </p>
              </div>
            </div>

            {/* Image 3: Royal Enfield Interceptor 650 Bike Wash */}
            <div
              style={{
                background: "#ffffff",
                borderRadius: "20px",
                border: "1px solid #e2e8f0",
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(15, 23, 42, 0.05)",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              <div style={{ position: "relative", height: "260px", overflow: "hidden" }}>
                <img
                  src="/gallery/about-interceptor-bike.jpg"
                  alt="Royal Enfield Interceptor 650 Two-Wheeler Wash Bay"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    top: "14px",
                    left: "14px",
                    background: "rgba(15, 23, 42, 0.8)",
                    backdropFilter: "blur(6px)",
                    color: "#ffffff",
                    fontSize: "11px",
                    fontWeight: 800,
                    padding: "4px 12px",
                    borderRadius: "9999px",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  TWO-WHEELER BAY
                </span>
                <span
                  style={{
                    position: "absolute",
                    bottom: "14px",
                    right: "14px",
                    background: "#16a34a",
                    color: "#ffffff",
                    fontSize: "11px",
                    fontWeight: 700,
                    padding: "4px 10px",
                    borderRadius: "6px",
                  }}
                >
                  Bullet &amp; Superbike Care
                </span>
              </div>
              <div style={{ padding: "22px" }}>
                <h3 style={{ fontSize: "19px", fontWeight: 700, color: "#0f172a", margin: "0 0 8px" }}>
                  Cruiser &amp; Superbike Wash Zone
                </h3>
                <p style={{ fontSize: "13.5px", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
                  Specialized washing bay dedicated to motorcycles and heavy cruisers like Royal Enfield Interceptor and Classic Bullets, featuring diesel degrease and chrome polish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <ContactBookingSection />

      <Footer />
    </main>
  );
}
