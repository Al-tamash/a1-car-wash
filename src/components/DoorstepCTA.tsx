"use client";

import React from "react";
import { Phone, Clock, MapPin } from "lucide-react";

export default function DoorstepCTA() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #dc2626 0%, #991b1b 100%)",
        padding: "60px 0",
      }}
    >
      <div className="container" style={{ padding: "0 24px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "32px",
          }}
          className="cta-row"
        >
          {/* Left: Info */}
          <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  flexShrink: 0,
                }}
              >
                <Phone size={22} />
              </div>
              <div>
                <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>
                  Call Us Anytime
                </div>
                <div style={{ fontSize: "18px", fontWeight: 900, color: "#ffffff" }}>
                  +91 70452 82473
                </div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  flexShrink: 0,
                }}
              >
                <Clock size={22} />
              </div>
              <div>
                <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>
                  Working Hours
                </div>
                <div style={{ fontSize: "16px", fontWeight: 800, color: "#ffffff" }}>
                  Mon–Sun: 08:00 AM – 09:00 PM
                </div>
              </div>
            </div>
          </div>

          {/* Center: Heading */}
          <div style={{ textAlign: "center", flex: 1, minWidth: "200px" }}>
            <h2
              style={{
                fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)",
                fontWeight: 600,
                color: "#ffffff",
                letterSpacing: "-0.02em",
                lineHeight: 1.3,
              }}
            >
              24/7 Free Doorstep Service
            </h2>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.8)", marginTop: "6px" }}>
              We come to you — book a free pickup & drop service for your vehicle.
            </p>
          </div>

          {/* Right: CTA Button */}
          <a
            href="#contact-section"
            style={{
              background: "#ffffff",
              color: "#dc2626",
              fontWeight: 900,
              fontSize: "15px",
              padding: "14px 32px",
              borderRadius: "8px",
              textDecoration: "none",
              flexShrink: 0,
              boxShadow: "0 4px 18px rgba(0,0,0,0.15)",
              transition: "all 0.2s",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <MapPin size={16} />
            Book Free Service
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .cta-row { flex-direction: column; text-align: center; align-items: center; }
        }
      `}</style>
    </section>
  );
}
