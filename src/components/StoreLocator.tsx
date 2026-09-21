"use client";

import React from "react";
import { MapPin, Navigation, Clock, Sparkles, ChevronRight } from "lucide-react";
import Link from "next/link";
import { STORES_DATA } from "@/data/storesData";

interface StoreLocatorProps {
  currentStoreSlug?: string;
}

export default function StoreLocator({ currentStoreSlug }: StoreLocatorProps = {}) {
  return (
    <section
      id="stores-section"
      style={{
        background: "radial-gradient(ellipse at 50% 0%, rgba(239, 68, 68, 0.07) 0%, rgba(248, 250, 252, 0.7) 45%, #ffffff 100%)",
        padding: "80px 0 90px",
        position: "relative",
        borderTop: "1px solid #f1f5f9",
        borderBottom: "1px solid #f1f5f9",
        overflow: "hidden",
      }}
    >
      {/* Subtle background dot grid texture */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(#e2e8f0 1.2px, transparent 1.2px)",
          backgroundSize: "28px 28px",
          opacity: 0.55,
          pointerEvents: "none",
        }}
      />

      {/* Ambient Red Glow Spot */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-40px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "550px",
          height: "220px",
          background: "radial-gradient(circle, rgba(239, 68, 68, 0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      <div
        className="container"
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* ── HEADER (RED THEME) ── */}
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          {/* Badge: FIND US (RED THEME) with live beacon */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              background: "#fee2e2",
              color: "#dc2626",
              padding: "7px 22px",
              borderRadius: "9999px",
              fontSize: "13px",
              fontWeight: 800,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "14px",
              boxShadow: "0 2px 12px rgba(220, 38, 38, 0.14)",
              border: "1px solid rgba(220, 38, 38, 0.2)",
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "#dc2626",
                boxShadow: "0 0 0 3px rgba(220, 38, 38, 0.25)",
                display: "inline-block",
              }}
            />
            <MapPin size={14} style={{ color: "#dc2626" }} />
            <span>FIND US • 6 HYDERABAD HUBS</span>
          </div>

          {/* Heading: Our Branch Locations (RED THEME) */}
          <h2
            style={{
              fontSize: "clamp(2rem, 3.2vw, 2.75rem)",
              fontWeight: 600,
              lineHeight: 1.15,
              margin: "0 0 14px 0",
              letterSpacing: "-0.02em",
            }}
          >
            <span style={{ color: "#0f172a" }}>Our Branch </span>
            <span style={{ color: "#dc2626" }}>Locations</span>
          </h2>

          {/* Subheading */}
          <p
            style={{
              fontSize: "clamp(15px, 1.4vw, 17px)",
              color: "#64748b",
              maxWidth: "640px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Choose your studio below to view branch hours, contact details, and instant navigation.
          </p>

          {/* Feature Highlight Chips */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "18px",
              marginTop: "16px",
              flexWrap: "wrap",
            }}
          >
            <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12.5px", color: "#475569", fontWeight: 600 }}>
              <Clock size={13} style={{ color: "#dc2626" }} />
              <span>8:00 AM – 9:00 PM Daily</span>
            </span>
            <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#cbd5e1" }} />
            <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12.5px", color: "#475569", fontWeight: 600 }}>
              <Sparkles size={13} style={{ color: "#dc2626" }} />
              <span>Hydraulic Jack Lift Bays</span>
            </span>
            <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#cbd5e1" }} />
            <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12.5px", color: "#475569", fontWeight: 600 }}>
              <Navigation size={13} style={{ color: "#dc2626" }} />
              <span>Instant GPS Navigation</span>
            </span>
          </div>
        </div>

        {/* ── GLASS CONTAINER FRAMING THE BUTTONS ── */}
        <div
          style={{
            background: "rgba(255, 255, 255, 0.82)",
            backdropFilter: "blur(12px)",
            borderRadius: "22px",
            padding: "18px",
            border: "1px solid rgba(226, 232, 240, 0.85)",
            boxShadow: "0 15px 35px -8px rgba(15, 23, 42, 0.05), 0 0 0 1px rgba(255,255,255,0.9) inset",
          }}
        >
          {/* ── STORE LOCATION BUTTONS (RED THEME) ── */}
          <div
            className="store-buttons-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(175px, 1fr))",
              gap: "14px",
            }}
          >
          {STORES_DATA.map((store) => {
            const isSelected = currentStoreSlug === store.slug;
            return (
              <Link
                key={store.id}
                href={`/stores/${store.slug}`}
                className={`store-nav-card ${isSelected ? "selected" : ""}`}
              >
                {/* Animated Icon box */}
                <div className="store-nav-icon">
                  <MapPin size={19} />
                </div>

                {/* Title & Subtitle */}
                <div style={{ overflow: "hidden", flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: "14.5px",
                      fontWeight: 800,
                      lineHeight: 1.25,
                      color: isSelected ? "#ffffff" : "#0f172a",
                      marginBottom: "2px",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                    }}
                  >
                    {store.shortName}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: 500,
                      lineHeight: 1.3,
                      color: isSelected ? "rgba(255, 255, 255, 0.9)" : "#64748b",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                    }}
                  >
                    {store.area}
                  </div>
                </div>

                {/* Hover reveal arrow indicator */}
                <ChevronRight size={15} className="store-nav-arrow" />
              </Link>
            );
          })}
          </div>
        </div>
      </div>

      <style>{`
        .store-nav-card {
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          border-radius: 14px;
          cursor: pointer;
          text-align: left;
          text-decoration: none;
          background: #ffffff;
          color: #0f172a;
          border: 1.5px solid #e2e8f0;
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04);
          transition: transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.28s ease, border-color 0.28s ease, background 0.28s ease;
        }

        .store-nav-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -120%;
          width: 80%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(239, 68, 68, 0.08), rgba(255, 255, 255, 0.6), transparent);
          transform: skewX(-20deg);
          transition: left 0.75s ease;
          pointer-events: none;
        }

        .store-nav-card:hover::before {
          left: 140%;
        }

        .store-nav-card:hover {
          transform: translateY(-4px) scale(1.02);
          border-color: #dc2626 !important;
          box-shadow: 0 14px 28px -4px rgba(220, 38, 38, 0.22), 0 4px 10px rgba(15, 23, 42, 0.04) !important;
        }

        .store-nav-card:active {
          transform: translateY(-1px) scale(0.99);
        }

        .store-nav-icon {
          width: 40px;
          height: 40px;
          border-radius: 11px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          background: #fee2e2;
          color: #dc2626;
          transition: transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.25s ease, color 0.25s ease, box-shadow 0.28s ease;
        }

        .store-nav-card:hover .store-nav-icon {
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
          color: #ffffff;
          transform: scale(1.12) rotate(-6deg);
          box-shadow: 0 6px 16px rgba(220, 38, 38, 0.38);
        }

        .store-nav-arrow {
          opacity: 0;
          transform: translateX(-6px);
          color: #dc2626;
          transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
          flex-shrink: 0;
        }

        .store-nav-card:hover .store-nav-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .store-nav-card.selected {
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%) !important;
          color: #ffffff !important;
          border-color: #dc2626 !important;
          box-shadow: 0 12px 28px rgba(220, 38, 38, 0.35), 0 0 0 2px rgba(239, 68, 68, 0.2) !important;
          transform: translateY(-3px);
          animation: pulseGlow 2.6s infinite alternate ease-in-out;
        }

        @keyframes pulseGlow {
          0% {
            box-shadow: 0 10px 24px rgba(220, 38, 38, 0.35), 0 0 0 2px rgba(239, 68, 68, 0.2);
          }
          100% {
            box-shadow: 0 14px 32px rgba(220, 38, 38, 0.5), 0 0 0 4px rgba(239, 68, 68, 0.3);
          }
        }

        .store-nav-card.selected .store-nav-icon {
          background: rgba(255, 255, 255, 0.22) !important;
          color: #ffffff !important;
        }

        .store-nav-card.selected .store-nav-arrow {
          opacity: 1;
          color: #ffffff;
          transform: translateX(0);
        }

        @media (max-width: 768px) {
          .store-buttons-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
