"use client";

import React, { useState } from "react";
import {
  MapPin,
  ArrowRight,
  Navigation,
  Star,
  Phone,
  Clock,
  ExternalLink,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { STORES_DATA, StoreLocation } from "@/data/storesData";

interface StoreLocatorProps {
  currentStoreSlug?: string;
}

export default function StoreLocator({ currentStoreSlug }: StoreLocatorProps = {}) {
  // Default to first studio (Raidurg / Film Nagar) or currently selected slug
  const [selectedSlug, setSelectedSlug] = useState<string>(
    currentStoreSlug || "raidurga-film-nagar"
  );

  const activeStore: StoreLocation =
    STORES_DATA.find((s) => s.slug === selectedSlug) || STORES_DATA[0];

  return (
    <section
      id="stores-section"
      style={{
        background: "#ffffff",
        padding: "70px 0 85px",
        position: "relative",
        borderTop: "1px solid #f1f5f9",
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* ── HEADER (RED THEME) ── */}
        <div style={{ textAlign: "center", marginBottom: "38px" }}>
          {/* Badge: FIND US (RED THEME) */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              background: "#fee2e2",
              color: "#dc2626",
              padding: "7px 22px",
              borderRadius: "9999px",
              fontSize: "13px",
              fontWeight: 800,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "14px",
              boxShadow: "0 2px 10px rgba(220, 38, 38, 0.12)",
            }}
          >
            <MapPin size={14} style={{ color: "#dc2626" }} />
            <span>FIND US</span>
          </div>

          {/* Heading: Store Locations (RED THEME) */}
          <h2
            style={{
              fontSize: "clamp(2.1rem, 4vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              margin: "0 0 14px 0",
              letterSpacing: "-0.02em",
            }}
          >
            <span style={{ color: "#0f172a" }}>Store </span>
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
        </div>

        {/* ── 5 STORE LOCATION BUTTONS (EXACTLY AS IN SCREENSHOT, RED THEME) ── */}
        <div
          className="store-buttons-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "14px",
            marginBottom: "36px",
          }}
        >
          {STORES_DATA.map((store) => {
            const isSelected = selectedSlug === store.slug;
            return (
              <button
                key={store.id}
                type="button"
                onClick={() => setSelectedSlug(store.slug)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "14px 18px",
                  borderRadius: "14px",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.22s cubic-bezier(0.4, 0, 0.2, 1)",
                  background: isSelected
                    ? "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)"
                    : "#ffffff",
                  color: isSelected ? "#ffffff" : "#0f172a",
                  border: isSelected ? "2px solid #dc2626" : "1.5px solid #e2e8f0",
                  boxShadow: isSelected
                    ? "0 10px 24px rgba(220, 38, 38, 0.35), 0 0 0 2px rgba(239, 68, 68, 0.2)"
                    : "0 2px 8px rgba(15, 23, 42, 0.04)",
                  transform: isSelected ? "translateY(-2px)" : "translateY(0)",
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.borderColor = "#dc2626";
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 6px 16px rgba(220, 38, 38, 0.12)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.borderColor = "#e2e8f0";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 2px 8px rgba(15, 23, 42, 0.04)";
                  }
                }}
              >
                {/* Icon box */}
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    background: isSelected ? "rgba(255, 255, 255, 0.2)" : "#fee2e2",
                    color: isSelected ? "#ffffff" : "#dc2626",
                    transition: "all 0.2s ease",
                  }}
                >
                  <MapPin size={20} />
                </div>

                {/* Title & Subtitle */}
                <div style={{ overflow: "hidden", flex: 1 }}>
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
                      color: isSelected ? "rgba(255, 255, 255, 0.88)" : "#64748b",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                    }}
                  >
                    {store.area}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* ── SELECTED STUDIO DETAILS (RED THEME, CLEAN, NO MAP IFRAMES) ── */}
        <div
          style={{
            maxWidth: "880px",
            margin: "0 auto",
            background: "#ffffff",
            borderRadius: "20px",
            border: "1.5px solid #fee2e2",
            boxShadow: "0 12px 36px rgba(220, 38, 38, 0.08), 0 4px 16px rgba(15, 23, 42, 0.04)",
            overflow: "hidden",
            transition: "all 0.3s ease",
          }}
        >
          {/* Card Header Bar */}
          <div
            style={{
              background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
              padding: "18px 28px",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  fontWeight: 700,
                  opacity: 0.9,
                }}
              >
                Selected Studio
              </div>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 800,
                  margin: "2px 0 0 0",
                }}
              >
                {activeStore.name}
              </h3>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(255, 255, 255, 0.2)",
                padding: "6px 14px",
                borderRadius: "9999px",
                fontSize: "13px",
                fontWeight: 700,
              }}
            >
              <Star size={15} fill="#fef08a" color="#fef08a" />
              <span>{activeStore.rating} / 5.0</span>
              <span style={{ opacity: 0.85, fontWeight: 500 }}>
                ({activeStore.reviewCount} Reviews)
              </span>
            </div>
          </div>

          {/* Card Content */}
          <div style={{ padding: "26px 28px" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.2fr 1fr",
                gap: "24px",
                alignItems: "start",
              }}
              className="store-info-grid"
            >
              {/* Left Column: Address & Details */}
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <MapPin
                    size={18}
                    style={{ color: "#dc2626", flexShrink: 0, marginTop: "2px" }}
                  />
                  <div>
                    <strong style={{ color: "#0f172a", fontSize: "14px" }}>
                      Address:
                    </strong>
                    <div
                      style={{
                        color: "#475569",
                        fontSize: "13.5px",
                        lineHeight: 1.5,
                        marginTop: "2px",
                      }}
                    >
                      {activeStore.address}
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <Clock size={18} style={{ color: "#dc2626", flexShrink: 0 }} />
                  <div>
                    <strong style={{ color: "#0f172a", fontSize: "14px" }}>
                      Hours:
                    </strong>
                    <span style={{ color: "#475569", fontSize: "13.5px", marginLeft: "6px" }}>
                      {activeStore.timing}
                    </span>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <Phone size={18} style={{ color: "#dc2626", flexShrink: 0 }} />
                  <div>
                    <strong style={{ color: "#0f172a", fontSize: "14px" }}>
                      Direct Line:
                    </strong>
                    <a
                      href={`tel:${activeStore.phone.replace(/\s+/g, "")}`}
                      style={{
                        color: "#dc2626",
                        fontSize: "14px",
                        fontWeight: 700,
                        marginLeft: "6px",
                        textDecoration: "none",
                      }}
                    >
                      +91 {activeStore.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Highlights & Features */}
              <div
                style={{
                  background: "#fef2f2",
                  padding: "16px 20px",
                  borderRadius: "14px",
                  border: "1px solid #fee2e2",
                }}
              >
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: 800,
                    color: "#991b1b",
                    marginBottom: "10px",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Studio Highlights
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {activeStore.features.slice(0, 3).map((feat, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontSize: "13px",
                        color: "#475569",
                      }}
                    >
                      <CheckCircle2 size={15} style={{ color: "#dc2626", flexShrink: 0 }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons Row */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "14px",
                marginTop: "24px",
                paddingTop: "20px",
                borderTop: "1px solid #f1f5f9",
              }}
            >
              {/* Directions Button (Opens Google Maps link directly without iframe) */}
              <a
                href={activeStore.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
                  color: "#ffffff",
                  padding: "12px 24px",
                  borderRadius: "10px",
                  fontSize: "14px",
                  fontWeight: 700,
                  textDecoration: "none",
                  boxShadow: "0 4px 14px rgba(220, 38, 38, 0.3)",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(220, 38, 38, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 14px rgba(220, 38, 38, 0.3)";
                }}
              >
                <Navigation size={16} />
                <span>Get Directions</span>
                <ExternalLink size={13} />
              </a>

              {/* WhatsApp Branch */}
              <a
                href={`https://wa.me/${activeStore.whatsapp}?text=Hello%20A1%20Car%20Wash,%20I%20would%20like%20to%20inquire%20about%20booking%20at%20${encodeURIComponent(
                  activeStore.name
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "#22c55e",
                  color: "#ffffff",
                  padding: "12px 22px",
                  borderRadius: "10px",
                  fontSize: "14px",
                  fontWeight: 700,
                  textDecoration: "none",
                  boxShadow: "0 4px 12px rgba(34, 197, 94, 0.25)",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 8px 18px rgba(34, 197, 94, 0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(34, 197, 94, 0.25)";
                }}
              >
                <MessageSquare size={16} />
                <span>WhatsApp Studio</span>
              </a>

              {/* View Full Branch Page */}
              <Link
                href={`/stores/${activeStore.slug}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "#ffffff",
                  color: "#dc2626",
                  border: "1.5px solid #dc2626",
                  padding: "12px 22px",
                  borderRadius: "10px",
                  fontSize: "14px",
                  fontWeight: 700,
                  textDecoration: "none",
                  marginLeft: "auto",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#fee2e2";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#ffffff";
                }}
              >
                <span>View Full Studio Page</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .store-info-grid {
            grid-template-columns: 1fr !important;
          }
          .store-buttons-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
