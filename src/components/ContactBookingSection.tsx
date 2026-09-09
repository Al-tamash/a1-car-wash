"use client";

import React, { useState } from "react";
import { CheckCircle2, MapPin, Phone, Clock, MessageSquare } from "lucide-react";
import { StoreLocation, STORES_DATA } from "@/data/storesData";

interface ContactBookingSectionProps {
  currentStoreSlug?: string;
  store?: StoreLocation;
}

export default function ContactBookingSection({ currentStoreSlug, store }: ContactBookingSectionProps = {}) {
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
      <div className="container" style={{ padding: "0 24px", maxWidth: "1280px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: "50px",
            alignItems: "center",
          }}
          className="contact-grid"
        >
          {/* LEFT: Info & Location Box */}
          <div>
            <div
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 20px 50px rgba(15,23,42,0.12)",
                aspectRatio: "16/10",
                marginBottom: "24px",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=900&q=85"
                alt="A1 Car Wash Specialist"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            <div
              style={{
                background: "#0f172a",
                color: "#ffffff",
                borderRadius: "16px",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "18px",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <MapPin size={20} style={{ color: "#ef4444", flexShrink: 0, marginTop: "3px" }} />
                <div>
                  <div style={{ fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.6)", textTransform: "uppercase" }}>
                    Location / Address
                  </div>
                  <div style={{ fontSize: "13.5px", fontWeight: 700, marginTop: "2px", lineHeight: 1.45 }}>
                    {activeStore
                      ? activeStore.address
                      : "Mehfil Restaurant, Raidurg, Darga Chowrasta, Film Nagar Road, Hyderabad, Telangana – 500104"}
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Phone size={20} style={{ color: "#ef4444", flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.6)", textTransform: "uppercase" }}>
                    Direct Phone / WhatsApp
                  </div>
                  <a
                    href={`tel:${(activeStore?.phone || "7045282473").replace(/\s+/g, "")}`}
                    style={{ fontSize: "17px", fontWeight: 900, color: "#ffffff", textDecoration: "none" }}
                  >
                    +91 {activeStore ? activeStore.phone : "70452 82473"}
                  </a>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Clock size={20} style={{ color: "#ef4444", flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.6)", textTransform: "uppercase" }}>
                    Working Hours
                  </div>
                  <div style={{ fontSize: "13.5px", fontWeight: 700 }}>
                    {activeStore ? activeStore.timing : "8:00 AM – 9:00 PM (Monday – Sunday)"}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div>
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
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: 900,
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
                  style={{
                    background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
                    color: "#ffffff",
                    fontWeight: 800,
                    fontSize: "15px",
                    padding: "14px 36px",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 6px 20px rgba(220,38,38,0.4)",
                    transition: "all 0.2s",
                    alignSelf: "flex-start",
                  }}
                >
                  Book on WhatsApp (Instant Confirmation)
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
