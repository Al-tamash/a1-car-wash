"use client";

import React from "react";
import { CheckCircle2, Award, Droplet, ShieldCheck, ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about-section"
      style={{
        background: "#ffffff",
        padding: "90px 0"
      }}
    >
      <div className="container" style={{ padding: "0 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.1fr",
            gap: "60px",
            alignItems: "center"
          }}
          className="about-split-grid"
        >
          {/* ── LEFT COLUMN: Under Hood / Engine Wash Image ── */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                borderRadius: "28px",
                overflow: "hidden",
                boxShadow: "0 20px 50px rgba(15, 23, 42, 0.12)",
                aspectRatio: "1.1/1",
                background: "#f1f5f9"
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=900&q=85"
                alt="Professional mechanic detailing engine bay"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            </div>

            {/* Experience Floating Badge */}
            <div
              style={{
                position: "absolute",
                bottom: "-20px",
                right: "-20px",
                background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
                color: "#ffffff",
                padding: "20px 28px",
                borderRadius: "20px",
                boxShadow: "0 12px 30px rgba(220, 38, 38, 0.4)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                border: "3px solid #ffffff"
              }}
              className="exp-badge"
            >
              <span style={{ fontSize: "32px", fontWeight: 900, lineHeight: 1 }}>6+</span>
              <span style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Years Experience
              </span>
            </div>
          </div>

          {/* ── RIGHT COLUMN: Content from Reference Mockup ── */}
          <div>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                fontWeight: 900,
                color: "#172554",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                marginBottom: "24px"
              }}
            >
              Professional Washing<br />
              and Cleaning Car
            </h2>

            <p
              style={{
                fontSize: "16px",
                color: "#64748b",
                lineHeight: 1.8,
                marginBottom: "32px"
              }}
            >
              Over the past 6 years we cleaned over 34,000 cars, saved over 8.9 million liters of water from being used in car washing and employed 50 youth. Our legacy is in the youth that gained work and life skills, grew their confidence and have moved on to bigger.
            </p>

            {/* Checkpoints with Red Checkmark */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "18px 24px",
                marginBottom: "40px"
              }}
              className="about-checklist"
            >
              {[
                "Over 250,000 cleans",
                "100% satisfaction guarantee",
                "Eco-friendly cleaning products",
                "Trained certified technicians",
                "Spot-free deionized RO water",
                "State-of-the-art steam tech"
              ].map((text) => (
                <div
                  key={text}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px"
                  }}
                >
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      background: "#fee2e2",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#dc2626",
                      flexShrink: 0
                    }}
                  >
                    <CheckCircle2 size={16} />
                  </div>
                  <span
                    style={{
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "#172554"
                    }}
                  >
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Read More / Services Button */}
            <div>
              <a
                href="#services-section"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
                  color: "#ffffff",
                  fontSize: "15px",
                  fontWeight: 700,
                  padding: "14px 32px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  boxShadow: "0 6px 20px rgba(220, 38, 38, 0.35)",
                  transition: "all 0.2s"
                }}
              >
                <span>Read More</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-split-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .about-checklist {
            grid-template-columns: 1fr !important;
          }
          .exp-badge {
            right: 10px !important;
            bottom: 10px !important;
          }
        }
      `}</style>
    </section>
  );
}
