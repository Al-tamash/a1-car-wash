"use client";

import React, { useState } from "react";
import { CheckCircle2, MessageSquare, MapPin, ExternalLink, Phone, Mail, Clock, Sparkles } from "lucide-react";
import { StoreLocation, STORES_DATA } from "@/data/storesData";

interface ContactBookingSectionProps {
  currentStoreSlug?: string;
  store?: StoreLocation;
  showMap?: boolean;
}

export default function ContactBookingSection({
  currentStoreSlug,
  store,
  showMap = true,
}: ContactBookingSectionProps = {}) {
  const activeStore = store || (currentStoreSlug ? STORES_DATA.find((s) => s.slug === currentStoreSlug) : undefined);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "7-Seater Full Car Wash — ₹1,200",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg =
      `*A1 CAR WASH — NEW BOOKING REQUEST*%0A` +
      (activeStore ? `📍 Studio: ${activeStore.name}%0A` : "") +
      `👤 Name: ${formData.name}%0A` +
      `📞 Phone: ${formData.phone}%0A` +
      `📧 Email: ${formData.email}%0A` +
      `🚗 Service Selected: ${formData.service}%0A` +
      `💬 Details: ${formData.message || "Ready for booking"}`;
    window.open(`https://wa.me/${activeStore?.whatsapp || "917045282473"}?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "8px",
    border: "1.5px solid #e2e8f0",
    fontSize: "14px",
    outline: "none",
    background: "#ffffff",
    color: "#0f172a",
    transition: "border-color 0.2s",
    fontFamily: "inherit",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "13px",
    fontWeight: 700,
    color: "#172554",
    marginBottom: "6px",
  };

  return (
    <section
      id="contact-section"
      style={{ background: "#ffffff", padding: "80px 0" }}
    >
      <div
        className="container"
        style={{
          padding: "0 24px",
          maxWidth: showMap ? "1280px" : "760px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: showMap ? "grid" : "block",
            gridTemplateColumns: showMap ? "1.1fr 1fr" : undefined,
            gap: "40px",
            alignItems: "stretch",
          }}
          className={showMap ? "contact-grid" : undefined}
        >
          {/* LEFT: Store Location Map (Only displayed when showMap is true) */}
          {showMap && (
            <div style={{ display: "flex", flexDirection: "column", height: "100%", minHeight: "560px" }}>
              <div
                style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 14px 40px rgba(15,23,42,0.10)",
                  height: "100%",
                  minHeight: "560px",
                  border: "1.5px solid #e2e8f0",
                  position: "relative",
                }}
              >
                {/* Floating Store Identification Badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "14px",
                    left: "14px",
                    zIndex: 2,
                    background: "rgba(255, 255, 255, 0.95)",
                    backdropFilter: "blur(8px)",
                    padding: "8px 14px",
                    borderRadius: "12px",
                    boxShadow: "0 4px 18px rgba(15, 23, 42, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    border: "1px solid rgba(220, 38, 38, 0.2)",
                    maxWidth: "calc(100% - 28px)",
                  }}
                >
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "8px",
                      background: "#fee2e2",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#dc2626",
                      flexShrink: 0,
                    }}
                  >
                    <MapPin size={17} />
                  </div>
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div
                      style={{
                        fontSize: "13.5px",
                        fontWeight: 800,
                        color: "#0f172a",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {activeStore ? activeStore.name : "A1 Car Wash - Hyderabad Hub"}
                    </div>
                    <div
                      style={{
                        fontSize: "11.5px",
                        color: "#64748b",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {activeStore ? activeStore.address : "Hyderabad, Telangana"}
                    </div>
                  </div>
                  <a
                    href={activeStore?.googleMapsLink || "https://maps.app.goo.gl/T3178g94WL8t2NAC8"}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: "#dc2626",
                      color: "#ffffff",
                      fontSize: "11.5px",
                      fontWeight: 700,
                      padding: "6px 12px",
                      borderRadius: "8px",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      flexShrink: 0,
                    }}
                  >
                    <span>Directions</span>
                    <ExternalLink size={12} />
                  </a>
                </div>

                {/* Map iframe wrapped with offset so Google Maps native top-left box ("No reviews") is clipped out */}
                <div
                  style={{
                    position: "absolute",
                    top: "-110px",
                    left: 0,
                    width: "100%",
                    height: "calc(100% + 110px)",
                    overflow: "hidden",
                  }}
                >
                  <iframe
                    src={activeStore ? activeStore.mapEmbedUrl : STORES_DATA[0].mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0, width: "100%", height: "100%", display: "block" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${activeStore?.name || "A1 Car Wash"} Map`}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Form */}
          <div
            style={
              !showMap
                ? {
                    background: "#ffffff",
                    border: "1.5px solid #e2e8f0",
                    borderRadius: "24px",
                    padding: "44px 36px",
                    boxShadow: "0 10px 30px rgba(15, 23, 42, 0.06)",
                  }
                : undefined
            }
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "#fee2e2",
                color: "#dc2626",
                borderRadius: "9999px",
                fontSize: "12px",
                fontWeight: 800,
                padding: "4px 14px",
                marginBottom: "12px",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              <MessageSquare size={13} />
              <span>INSTANT APPOINTMENT</span>
            </div>

            <h2
              style={{
                fontSize: "clamp(2rem, 3.2vw, 2.75rem)",
                fontWeight: 600,
                color: "#172554",
                letterSpacing: "-0.02em",
                marginBottom: "8px",
              }}
            >
              Book Service at <span style={{ color: "#dc2626" }}>A1 Car Wash</span>
            </h2>
            <p
              style={{
                fontSize: "14px",
                color: "#64748b",
                marginBottom: "28px",
                lineHeight: 1.65,
              }}
            >
              Select your package, fill in your details, and book your bay directly or chat with our team on WhatsApp.
            </p>

            {submitted ? (
              <div
                style={{
                  background: "#fef2f2",
                  border: "1px solid #fecaca",
                  borderRadius: "12px",
                  padding: "28px",
                  textAlign: "center",
                }}
              >
                <CheckCircle2
                  size={44}
                  style={{ color: "#dc2626", margin: "0 auto 14px" }}
                />
                <h4
                  style={{
                    fontSize: "18px",
                    fontWeight: 800,
                    color: "#172554",
                    marginBottom: "8px",
                  }}
                >
                  Booking Request Initiated!
                </h4>
                <p style={{ fontSize: "14px", color: "#64748b" }}>
                  Thank you. WhatsApp has been opened with your booking details. We look forward to serving you at A1 Car Wash Raidurg!
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: "16px" }}
              >
                <div
                  style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}
                  className="form-row"
                >
                  <div>
                    <label style={labelStyle}>Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div
                  style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}
                  className="form-row"
                >
                  <div>
                    <label style={labelStyle}>Email (Optional)</label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Select Package / Service</label>
                    <select
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      style={{ ...inputStyle, cursor: "pointer", fontWeight: 600 }}
                    >
                      <optgroup label="Full Car Wash (Jack Lift, Diesel & Oil)">
                        <option value="7-Seater Full Car Wash — ₹1,200">7-Seater Full Car Wash — ₹1,200</option>
                        <option value="5-Seater Full Car Wash — ₹1,000">5-Seater Full Car Wash — ₹1,000</option>
                      </optgroup>
                      <optgroup label="Body Wash (Exterior Foam & Inside Vacuum)">
                        <option value="7-Seater Body Wash — ₹700">7-Seater Body Wash — ₹700</option>
                        <option value="5-Seater Body Wash — ₹600">5-Seater Body Wash — ₹600</option>
                      </optgroup>
                      <optgroup label="Interior Deep Cleaning">
                        <option value="7-Seater Interior Deep Cleaning — ₹3,500">7-Seater Interior Deep Cleaning — ₹3,500</option>
                        <option value="5-Seater Interior Deep Cleaning — ₹3,000">5-Seater Interior Deep Cleaning — ₹3,000</option>
                      </optgroup>
                      <optgroup label="Additional Protective Coatings">
                        <option value="7-Seater Teflon Coating — ₹4,000">7-Seater Teflon Coating — ₹4,000</option>
                        <option value="5-Seater Teflon Coating — ₹3,500">5-Seater Teflon Coating — ₹3,500</option>
                        <option value="7-Seater Underbody Anti-Rust & Silencer Spray — ₹3,500">7-Seater Underbody Anti-Rust & Silencer Spray — ₹3,500</option>
                        <option value="5-Seater Underbody Anti-Rust & Silencer Spray — ₹3,000">5-Seater Underbody Anti-Rust & Silencer Spray — ₹3,000</option>
                      </optgroup>
                      <optgroup label="Bike Wash & Detailing">
                        <option value="Normal Bike Foam Wash — ₹150">Normal Bike Foam Wash — ₹150</option>
                        <option value="Normal Bike Diesel Wash — ₹180">Normal Bike Diesel Wash — ₹180</option>
                        <option value="Royal Enfield Bullet Foam Wash — ₹180">Royal Enfield Bullet Foam Wash — ₹180</option>
                        <option value="Royal Enfield Bullet Diesel Wash — ₹250">Royal Enfield Bullet Diesel Wash — ₹250</option>
                        <option value="Sport Bikes Foam Wash — ₹200">Sport Bikes Foam Wash — ₹200</option>
                        <option value="Sport Bikes Diesel Wash — ₹250">Sport Bikes Diesel Wash — ₹250</option>
                      </optgroup>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Vehicle Model & Preferred Time</label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Innova Hycross, looking for full wash tomorrow at 11 AM..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    style={{ ...inputStyle, resize: "vertical" }}
                  />
                </div>

                <button
                  type="submit"
                  className="contact-submit-btn"
                  style={{
                    background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
                    color: "#ffffff",
                    fontWeight: 800,
                    fontSize: "14.5px",
                    padding: "14px 32px",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 6px 20px rgba(220,38,38,0.4)",
                    transition: "all 0.2s",
                    alignSelf: "flex-start",
                  }}
                >
                  Book Service
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .contact-submit-btn {
            width: 100% !important;
            align-self: stretch !important;
            text-align: center !important;
          }
        }
      `}</style>
    </section>
  );
}
