"use client";

import React, { useState } from "react";
import { Sparkles, Check, X, Phone, ArrowRight } from "lucide-react";
import { MAIN_SERVICES, MainService } from "@/data/servicesData";

interface ServiceCardItem {
  id: string;
  step: string;
  title: string;
  price: string;
  image: string;
  isHighlighted?: boolean;
  mainServiceId: string;
}

const PRIMARY_SERVICES: ServiceCardItem[] = [
  {
    id: "full-wash",
    step: "01",
    title: "Full Car Wash",
    price: "From ₹1,000",
    image: "/card-foam-wash.jpg",
    mainServiceId: "full-car-wash",
  },
  {
    id: "body-wash",
    step: "02",
    title: "Body Wash",
    price: "From ₹600",
    image: "/hero-bg.jpg",
    isHighlighted: true,
    mainServiceId: "body-wash",
  },
  {
    id: "interior-cleaning",
    step: "03",
    title: "Interior Spa",
    price: "From ₹3,000",
    image: "/images/indian_man_complete_wash.jpg",
    mainServiceId: "interior-deep-cleaning",
  },
  {
    id: "jack-lift",
    step: "04",
    title: "Jack Lift Cleanse",
    price: "In Full Wash",
    image: "/gallery/gallery-3.jpg",
    mainServiceId: "full-car-wash",
  },
];

const PROTECTION_SERVICES: ServiceCardItem[] = [
  {
    id: "teflon",
    step: "01",
    title: "Teflon Coat",
    price: "From ₹3,500",
    image: "/card-ceramic-beading.jpg",
    mainServiceId: "teflon-coating",
  },
  {
    id: "underbody",
    step: "02",
    title: "Underbody Anti-Rust",
    price: "From ₹3,000",
    image: "/gallery/gallery-5.jpg",
    isHighlighted: true,
    mainServiceId: "underbody-coating",
  },
  {
    id: "silencer",
    step: "03",
    title: "Silencer Spray",
    price: "Included with Anti-Rust",
    image: "/gallery/gallery-2.jpg",
    mainServiceId: "underbody-coating",
  },
  {
    id: "bike-detailing",
    step: "04",
    title: "Bike Detailing",
    price: "From ₹150",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80",
    mainServiceId: "bike-wash",
  },
];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<"standard" | "protection">("standard");
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeModalService, setActiveModalService] = useState<MainService | null>(null);

  const currentServices = activeTab === "standard" ? PRIMARY_SERVICES : PROTECTION_SERVICES;

  const handleCardClick = (mainServiceId: string) => {
    const service = MAIN_SERVICES.find((s) => s.id === mainServiceId);
    if (service) {
      setActiveModalService(service);
    }
  };

  return (
    <section
      id="services-section"
      style={{
        background: "linear-gradient(180deg, #f8fafc 0%, #ffffff 50%, #f8fafc 100%)",
        padding: "85px 0 95px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient background decoration */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-150px",
          right: "-150px",
          width: "550px",
          height: "550px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(220,38,38,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "-150px",
          left: "-150px",
          width: "550px",
          height: "550px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(2,132,199,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", position: "relative" }}>
        
        {/* ── Section Header ── */}
        <div style={{ textAlign: "center", marginBottom: "44px" }}>
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
            <Sparkles size={13} />
            OUR DETAILING SERVICES
          </div>

          <h2
            style={{
              fontSize: "clamp(2rem, 3.8vw, 2.9rem)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              color: "#0f172a",
              margin: "0 0 10px",
              lineHeight: 1.15,
            }}
          >
            A1 Car Wash <span style={{ color: "#dc2626" }}>Care Packages</span>
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: "#64748b",
              maxWidth: "560px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Click any service to view vehicle-specific sub-services (7-Seater, 5-Seater & Bikes) with detailed inclusions and pricing.
          </p>

          {/* ── Tab Switcher ── */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "#e2e8f0",
              padding: "4px",
              borderRadius: "9999px",
              marginTop: "24px",
              gap: "4px",
            }}
          >
            <button
              onClick={() => setActiveTab("standard")}
              style={{
                padding: "8px 22px",
                borderRadius: "9999px",
                border: "none",
                background: activeTab === "standard" ? "#0f172a" : "transparent",
                color: activeTab === "standard" ? "#ffffff" : "#475569",
                fontSize: "13px",
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.25s ease",
                boxShadow: activeTab === "standard" ? "0 4px 12px rgba(15,23,42,0.2)" : "none",
              }}
            >
              Essential Detailing (01 – 04)
            </button>
            <button
              onClick={() => setActiveTab("protection")}
              style={{
                padding: "8px 22px",
                borderRadius: "9999px",
                border: "none",
                background: activeTab === "protection" ? "#dc2626" : "transparent",
                color: activeTab === "protection" ? "#ffffff" : "#475569",
                fontSize: "13px",
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.25s ease",
                boxShadow: activeTab === "protection" ? "0 4px 12px rgba(220,38,38,0.25)" : "none",
              }}
            >
              Teflon, Anti-Rust & Bike Detailing
            </button>
          </div>
        </div>

        {/* ── 4-Card Rounded Stadium / Capsule Grid (Existing Design Preserved) ── */}
        <div className="services-capsule-grid">
          {currentServices.map((service) => {
            const isHovered = hoveredId === service.id;
            const isHighlighted = service.isHighlighted || isHovered;

            const badgeBg = isHighlighted
              ? service.id === "body-wash" || service.id === "underbody"
                ? "#0284c7"
                : "#dc2626"
              : "#2d3748";

            return (
              <div
                key={service.id}
                onClick={() => handleCardClick(service.mainServiceId)}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "110px 110px 110px 110px",
                  backgroundColor: "#ffffff",
                  overflow: "hidden",
                  boxShadow: isHovered
                    ? "0 22px 44px rgba(15,23,42,0.14), 0 0 0 1.5px #dc2626"
                    : "0 8px 24px rgba(15,23,42,0.06), 0 0 0 1px rgba(226,232,240,0.5)",
                  transform: isHovered ? "translateY(-6px)" : "translateY(0)",
                  transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease",
                  cursor: "pointer",
                }}
              >
                {/* Top Arched Image Container */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "175px",
                    overflow: "hidden",
                    borderTopLeftRadius: "110px",
                    borderTopRightRadius: "110px",
                  }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                      display: "block",
                      transform: isHovered ? "scale(1.06)" : "scale(1)",
                      transition: "transform 0.5s ease",
                    }}
                  />

                  {/* SVG Upward Curved Divider */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "38px",
                      pointerEvents: "none",
                      zIndex: 2,
                    }}
                  >
                    <svg
                      viewBox="0 0 220 38"
                      preserveAspectRatio="none"
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "block",
                      }}
                    >
                      <path
                        d="M 0,38 L 0,22 C 58,22 75,22 85,14 C 95,5 100,0 110,0 C 120,0 125,5 135,14 C 145,22 162,22 220,22 L 220,38 Z"
                        fill="#ffffff"
                      />
                    </svg>
                  </div>
                </div>

                {/* Center Number Badge (01, 02, 03, 04) */}
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "-23px",
                    zIndex: 10,
                  }}
                >
                  <div
                    style={{
                      width: "46px",
                      height: "46px",
                      borderRadius: "50%",
                      backgroundColor: badgeBg,
                      color: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "14px",
                      fontWeight: 800,
                      letterSpacing: "0.02em",
                      border: "3px solid #ffffff",
                      boxShadow: isHighlighted
                        ? "0 6px 16px rgba(2,132,199,0.35), 0 2px 6px rgba(0,0,0,0.1)"
                        : "0 3px 10px rgba(15,23,42,0.14)",
                      transition: "all 0.3s ease",
                      transform: isHovered ? "scale(1.1)" : "scale(1)",
                    }}
                  >
                    {service.step}
                  </div>
                </div>

                {/* Bottom Content */}
                <div
                  style={{
                    padding: "10px 16px 28px 16px",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: 800,
                      color: "#1e293b",
                      margin: "2px 0 4px",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.25,
                    }}
                  >
                    {service.title}
                  </h3>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "#dc2626",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {service.price}
                  </span>
                  <span
                    style={{
                      fontSize: "11px",
                      color: "#64748b",
                      marginTop: "4px",
                      textDecoration: "underline",
                    }}
                  >
                    Click for sub-services
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Sub-Services Interactive Modal / Drawer ── */}
        {activeModalService && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(15, 23, 42, 0.75)",
              backdropFilter: "blur(6px)",
              zIndex: 2000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
            }}
            onClick={() => setActiveModalService(null)}
          >
            <div
              style={{
                background: "#ffffff",
                borderRadius: "20px",
                maxWidth: "760px",
                width: "100%",
                padding: "32px",
                position: "relative",
                maxHeight: "90vh",
                overflowY: "auto",
                boxShadow: "0 25px 60px rgba(0, 0, 0, 0.3)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalService(null)}
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  background: "#f1f5f9",
                  border: "none",
                  borderRadius: "50%",
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "#475569",
                }}
              >
                <X size={18} />
              </button>

              {/* Modal Header */}
              <div style={{ marginBottom: "20px", paddingRight: "40px" }}>
                <div
                  style={{
                    display: "inline-block",
                    background: "#fee2e2",
                    color: "#dc2626",
                    fontSize: "11.5px",
                    fontWeight: 800,
                    padding: "3px 12px",
                    borderRadius: "9999px",
                    marginBottom: "8px",
                  }}
                >
                  {activeModalService.badge || "A1 Car Wash Service"}
                </div>
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: 900,
                    color: "#0f172a",
                    margin: 0,
                  }}
                >
                  {activeModalService.title}
                </h3>
                <p style={{ fontSize: "14px", color: "#64748b", margin: "6px 0 0" }}>
                  {activeModalService.tagline}
                </p>
              </div>

              {/* Sub-Services List */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    activeModalService.subServices.length > 2 ? "repeat(3, 1fr)" : "repeat(2, 1fr)",
                  gap: "16px",
                  marginBottom: "24px",
                }}
                className="modal-subservices-grid"
              >
                {activeModalService.subServices.map((sub) => (
                  <div
                    key={sub.id}
                    style={{
                      border: "1.5px solid #e2e8f0",
                      borderRadius: "14px",
                      padding: "18px 16px",
                      background: "#f8fafc",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: "11px",
                          fontWeight: 800,
                          color: "#dc2626",
                          textTransform: "uppercase",
                          marginBottom: "4px",
                        }}
                      >
                        {sub.vehicleType}
                      </div>
                      <h4
                        style={{
                          fontSize: "15px",
                          fontWeight: 800,
                          color: "#0f172a",
                          margin: "0 0 6px 0",
                          lineHeight: 1.25,
                        }}
                      >
                        {sub.name}
                      </h4>
                      <div
                        style={{
                          fontSize: "20px",
                          fontWeight: 900,
                          color: "#dc2626",
                          marginBottom: "12px",
                        }}
                      >
                        {sub.formattedPrice}
                      </div>

                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "7px",
                          marginBottom: "16px",
                        }}
                      >
                        {sub.features.map((feat, fi) => (
                          <div
                            key={fi}
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: "8px",
                              fontSize: "12.5px",
                              color: "#334155",
                              lineHeight: 1.35,
                            }}
                          >
                            <Check
                              size={13}
                              style={{ color: "#16a34a", flexShrink: 0, marginTop: "2px" }}
                            />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <a
                      href={`https://wa.me/917045282473?text=${encodeURIComponent(
                        `Hi A1 Car Wash! I would like to book the *${sub.name}* (${sub.formattedPrice}) at Raidurg, Hyderabad.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "block",
                        textAlign: "center",
                        background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
                        color: "#ffffff",
                        fontSize: "12.5px",
                        fontWeight: 800,
                        padding: "9px 12px",
                        borderRadius: "8px",
                        textDecoration: "none",
                        boxShadow: "0 4px 12px rgba(220, 38, 38, 0.35)",
                      }}
                    >
                      Book on WhatsApp
                    </a>
                  </div>
                ))}
              </div>

              {/* Hotline Footer */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderTop: "1px solid #e2e8f0",
                  paddingTop: "16px",
                  flexWrap: "wrap",
                  gap: "10px",
                }}
              >
                <div style={{ fontSize: "13px", color: "#64748b" }}>
                  📍 Raidurg, Darga Chowrasta, Film Nagar Rd
                </div>
                <a
                  href="tel:7045282473"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontWeight: 800,
                    color: "#0f172a",
                    fontSize: "14px",
                    textDecoration: "none",
                  }}
                >
                  <Phone size={15} style={{ color: "#dc2626" }} />
                  <span>Call 70452 82473</span>
                </a>
              </div>
            </div>
          </div>
        )}

      </div>

      <style>{`
        .services-capsule-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
          max-width: 960px;
          margin: 0 auto;
        }

        @media (max-width: 990px) {
          .services-capsule-grid {
            grid-template-columns: repeat(2, 1fr);
            max-width: 480px;
            gap: 20px;
          }
          .modal-subservices-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 520px) {
          .services-capsule-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
            max-width: 380px;
          }
        }
      `}</style>
    </section>
  );
}
