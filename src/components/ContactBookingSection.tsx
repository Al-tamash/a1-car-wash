"use client";

import React, { useState } from "react";
import { CheckCircle2, MessageSquare, MapPin, ExternalLink, Phone, Clock } from "lucide-react";
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
  const initialStore = store || (currentStoreSlug ? STORES_DATA.find((s) => s.slug === currentStoreSlug) : undefined) || STORES_DATA[0];

  const defaultLocation = initialStore ? `${initialStore.shortName} (${initialStore.area.split('/')[0].trim()})` : "Banjara Hills (Road No. 12)";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: defaultLocation,
    service: "7-Seater Full Car Wash — ₹1,200",
    message: "",
  });
  const [viewMode, setViewMode] = useState<"map" | "streetView">("map");
  const [submitted, setSubmitted] = useState(false);
  const [lastSubmittedUrl, setLastSubmittedUrl] = useState("");

  // Dynamically track store from selection or prop
  const matchedStore = STORES_DATA.find((s) =>
    formData.location.toLowerCase().includes(s.shortName.toLowerCase()) ||
    formData.location.toLowerCase().includes(s.slug)
  );

  const activeStore = (store && !formData.location.toLowerCase().includes(store.shortName.toLowerCase()) && matchedStore)
    ? matchedStore
    : (store || matchedStore || initialStore);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNum = activeStore.whatsapp || "917095282473";
    const cleanPhone = phoneNum.replace(/\D/g, "");
    const formattedPhone = cleanPhone.startsWith("91") ? cleanPhone : `91${cleanPhone}`;

    const textMessage =
      `*🚘 A1 CAR WASH — NEW BOOKING REQUEST*\n\n` +
      `📍 *Preferred Studio Location:* ${formData.location}\n` +
      `👤 *Customer Name:* ${formData.name.trim()}\n` +
      `📞 *Phone Number:* ${formData.phone.trim()}\n` +
      (formData.email.trim() ? `📧 *Email:* ${formData.email.trim()}\n` : "") +
      `✨ *Package / Service:* ${formData.service}\n` +
      `📝 *Vehicle / Details / Preferred Time:* ${formData.message.trim() || "Standard slot requested"}\n\n` +
      `_Sent via A1 Car Wash Online Portal_`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${formattedPhone}&text=${encodeURIComponent(textMessage)}`;
    setLastSubmittedUrl(whatsappUrl);
    window.open(whatsappUrl, "_blank");
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
          {/* LEFT: Store Location Map & 360 Street View */}
          {showMap && (
            <div style={{ display: "flex", flexDirection: "column", height: "100%", minHeight: "580px" }}>
              <div
                style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 14px 40px rgba(15,23,42,0.10)",
                  height: "100%",
                  minHeight: "580px",
                  border: "1.5px solid #e2e8f0",
                  position: "relative",
                  background: "#0f172a",
                }}
              >
                {/* Top Controls Overlay */}
                <div
                  style={{
                    position: "absolute",
                    top: "14px",
                    left: "14px",
                    right: "14px",
                    zIndex: 10,
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    pointerEvents: "none",
                  }}
                >
                  {/* Floating Store Identification Badge */}
                  <div
                    style={{
                      background: "rgba(255, 255, 255, 0.96)",
                      backdropFilter: "blur(12px)",
                      padding: "10px 14px",
                      borderRadius: "14px",
                      boxShadow: "0 8px 24px rgba(15, 23, 42, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "10px",
                      border: "1px solid rgba(220, 38, 38, 0.2)",
                      pointerEvents: "auto",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", minWidth: 0, flex: 1 }}>
                      <div
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "10px",
                          background: "#fee2e2",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#dc2626",
                          flexShrink: 0,
                        }}
                      >
                        <MapPin size={18} />
                      </div>
                      <div style={{ minWidth: 0, flex: 1 }}>
                        <div
                          style={{
                            fontSize: "14px",
                            fontWeight: 800,
                            color: "#0f172a",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {activeStore.name}
                        </div>
                        <div
                          style={{
                            fontSize: "12px",
                            color: "#64748b",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {activeStore.address}
                        </div>
                      </div>
                    </div>

                    <a
                      href={activeStore.googleMapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background: "#dc2626",
                        color: "#ffffff",
                        fontSize: "12px",
                        fontWeight: 700,
                        padding: "7px 13px",
                        borderRadius: "8px",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "5px",
                        flexShrink: 0,
                        boxShadow: "0 2px 8px rgba(220,38,38,0.35)",
                      }}
                    >
                      <span>Directions</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>

                  {/* Toggle Bar: Map vs 360° Street View & Branch Live Info */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "8px",
                      flexWrap: "wrap",
                      pointerEvents: "auto",
                    }}
                  >
                    {/* Toggle button */}
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        background: "rgba(15, 23, 42, 0.88)",
                        backdropFilter: "blur(10px)",
                        borderRadius: "10px",
                        padding: "3px",
                        border: "1px solid rgba(255,255,255,0.18)",
                        boxShadow: "0 4px 14px rgba(0,0,0,0.25)",
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => setViewMode("map")}
                        style={{
                          background: viewMode === "map" ? "#dc2626" : "transparent",
                          color: "#ffffff",
                          border: "none",
                          borderRadius: "7px",
                          padding: "6px 13px",
                          fontSize: "12px",
                          fontWeight: 700,
                          cursor: "pointer",
                          transition: "all 0.2s ease",
                        }}
                      >
                        🗺️ Map View
                      </button>
                      <button
                        type="button"
                        onClick={() => setViewMode("streetView")}
                        style={{
                          background: viewMode === "streetView" ? "#dc2626" : "transparent",
                          color: "#ffffff",
                          border: "none",
                          borderRadius: "7px",
                          padding: "6px 13px",
                          fontSize: "12px",
                          fontWeight: 700,
                          cursor: "pointer",
                          transition: "all 0.2s ease",
                        }}
                      >
                        👁️ 360° Street View
                      </button>
                    </div>

                    {/* Quick WhatsApp / Call Pill */}
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        background: "rgba(255, 255, 255, 0.95)",
                        backdropFilter: "blur(8px)",
                        padding: "5px 12px",
                        borderRadius: "10px",
                        fontSize: "12px",
                        fontWeight: 700,
                        color: "#0f172a",
                        boxShadow: "0 4px 12px rgba(15, 23, 42, 0.12)",
                        border: "1px solid #e2e8f0",
                      }}
                    >
                      <span style={{ color: "#16a34a", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                        <Clock size={12} /> {activeStore.timing}
                      </span>
                      <span style={{ color: "#cbd5e1" }}>|</span>
                      <a
                        href={`https://wa.me/${activeStore.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#dc2626", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "4px" }}
                      >
                        <Phone size={12} />
                        {activeStore.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Map or Street View iframe */}
                <div
                  style={{
                    position: "absolute",
                    top: viewMode === "map" ? "-110px" : 0,
                    left: 0,
                    width: "100%",
                    height: viewMode === "map" ? "calc(100% + 110px)" : "100%",
                    overflow: "hidden",
                  }}
                >
                  <iframe
                    src={viewMode === "map" ? activeStore.mapEmbedUrl : activeStore.streetViewLink}
                    width="100%"
                    height="100%"
                    style={{ border: 0, width: "100%", height: "100%", display: "block" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title={`${activeStore.name} ${viewMode === "map" ? "Map" : "360 Street View"}`}
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
                fontWeight: 800,
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
                  background: "#f0fdf4",
                  border: "1.5px solid #bbf7d0",
                  borderRadius: "16px",
                  padding: "32px 24px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "54px",
                    height: "54px",
                    borderRadius: "50%",
                    background: "#22c55e",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                  }}
                >
                  <CheckCircle2 size={30} />
                </div>
                <h4
                  style={{
                    fontSize: "20px",
                    fontWeight: 800,
                    color: "#166534",
                    marginBottom: "8px",
                  }}
                >
                  Booking Sent to WhatsApp!
                </h4>
                <p style={{ fontSize: "14px", color: "#374151", marginBottom: "20px", lineHeight: "1.6" }}>
                  Your booking request for <strong>{formData.name}</strong> ({formData.service} at <strong>{formData.location}</strong>) has been generated and redirected to our WhatsApp desk ({activeStore.phone}).
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}>
                  <a
                    href={lastSubmittedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: "#25D366",
                      color: "#ffffff",
                      fontWeight: 800,
                      fontSize: "14.5px",
                      padding: "12px 26px",
                      borderRadius: "8px",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      boxShadow: "0 4px 14px rgba(37, 211, 102, 0.35)",
                    }}
                  >
                    <MessageSquare size={16} />
                    Open WhatsApp Chat Now
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "#64748b",
                      fontSize: "13px",
                      fontWeight: 600,
                      cursor: "pointer",
                      textDecoration: "underline",
                      marginTop: "6px",
                    }}
                  >
                    Edit Details / Submit Another Request
                  </button>
                </div>
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
                    <label style={labelStyle}>Your Name *</label>
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
                    <label style={labelStyle}>Phone Number *</label>
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
                    <label style={labelStyle}>Select Location *</label>
                    <select
                      value={formData.location}
                      onChange={(e) =>
                        setFormData({ ...formData, location: e.target.value })
                      }
                      style={{ ...inputStyle, cursor: "pointer", fontWeight: 600 }}
                    >
                      <option value="Film Nagar (Darga Chowrasta)">Film Nagar (Darga Chowrasta)</option>
                      <option value="Banjara Hills (Road No. 12)">Banjara Hills (Road No. 12)</option>
                      <option value="Narsingi (Main Road)">Narsingi (Main Road)</option>
                      <option value="Shaikpet (Manikonda Rd)">Shaikpet (Manikonda Rd)</option>
                      <option value="Nanal Nagar (Kakatiya Nagar)">Nanal Nagar (Kakatiya Nagar)</option>
                      <option value="Himayat Sagar (Himayat Sagar Rd)">Himayat Sagar (Himayat Sagar Rd)</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Select Package / Service *</label>
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
                  Book Now
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
