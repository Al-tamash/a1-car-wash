"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import { THREE_MAIN_SERVICES } from "@/data/servicesData";
import { Sparkles, Car, Bike, ShieldCheck, ArrowRight, Phone, Star, Users, Clock, Award } from "lucide-react";
import PricingSection from "@/components/PricingSection";

const HERO_IMAGES = [
  "/services/service-hero-lift-wash.jpg",
  "/services/service-hero-foam-wash.jpg",
  "/services/service-hero-suv-wash.jpg",
  "/services/service-hero-interior-steam.jpg",
  "/services/service-hero-bike-wash.jpg",
];

export default function ServicesClient() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActiveSlide((p) => (p + 1) % HERO_IMAGES.length), 4500);
    return () => clearInterval(t);
  }, []);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "car-wash":
        return <Car size={26} style={{ color: "#dc2626" }} />;
      case "bike-wash":
        return <Bike size={26} style={{ color: "#dc2626" }} />;
      case "teflon-coating":
        return <ShieldCheck size={26} style={{ color: "#dc2626" }} />;
      default:
        return <Sparkles size={26} style={{ color: "#dc2626" }} />;
    }
  };

  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#ffffff" }}>
      <Navbar />

      {/* ── COVAR-STYLE FULL-WIDTH HERO ── */}
      <section
        className="services-hero-section"
        style={{
          position: "relative",
          minHeight: "clamp(560px, 86vh, 740px)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          paddingTop: "90px",
        }}
      >
        {/* Full-width slideshow images */}
        {HERO_IMAGES.map((src, i) => (
          <div
            key={src}
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url('${src}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: i === activeSlide ? 1 : 0,
              transition: "opacity 1.4s ease-in-out",
              zIndex: 0,
            }}
          />
        ))}

        {/* Dark gradient overlay — top to bottom */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(8,13,21,0.55) 0%, rgba(8,13,21,0.35) 35%, rgba(8,13,21,0.8) 75%, rgba(8,13,21,0.96) 100%)",
            zIndex: 1,
          }}
        />

        {/* Slide dots — bottom-right desktop, right-side aligned */}
        <div
          className="services-hero-dots"
          style={{
            position: "absolute",
            bottom: "36px",
            right: "32px",
            display: "flex",
            gap: "8px",
            zIndex: 5,
          }}
        >
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              aria-label={`Slide ${i + 1}`}
              style={{
                width: i === activeSlide ? "28px" : "8px",
                height: "8px",
                borderRadius: "9999px",
                background: i === activeSlide ? "#ef4444" : "rgba(255,255,255,0.45)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.35s ease",
              }}
            />
          ))}
        </div>

        {/* Main content — bottom left */}
        <div
          className="services-hero-content"
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1280px",
            width: "100%",
            margin: "0 auto",
            padding: "0 32px 100px",
          }}
        >
          {/* Rating pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(255,255,255,0.12)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "9999px",
              padding: "5px 14px",
              marginBottom: "16px",
            }}
          >
            <div style={{ display: "flex", gap: "2px" }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} fill="#ef4444" stroke="none" />
              ))}
            </div>
            <span style={{ fontSize: "12px", fontWeight: 700, color: "#ffffff" }}>4.9 &nbsp;·&nbsp; 2 Lakh+ Happy Customers</span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: "clamp(2.1rem, 3.8vw, 3.2rem)",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              margin: "0 0 16px 0",
              maxWidth: "720px",
              textTransform: "uppercase",
            }}
          >
            Hyderabad&apos;s Premium{" "}
            <span style={{ color: "#ef4444" }}>Car & Bike Wash</span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "15px",
              color: "rgba(255,255,255,0.82)",
              lineHeight: 1.6,
              margin: "0 0 30px 0",
              maxWidth: "520px",
              fontWeight: 400,
            }}
          >
            Jack Lift washes, deep interior extraction, Teflon coatings &amp; underbody protection — all under one roof at A1 Car Wash, Raidurg.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
            <a
              href="#car-wash"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                background: "linear-gradient(135deg, #ef4444, #dc2626)",
                color: "#fff",
                padding: "12px 28px",
                borderRadius: "9999px",
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "none",
                boxShadow: "0 8px 24px rgba(220,38,38,0.4)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 30px rgba(220,38,38,0.55)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(220,38,38,0.4)"; }}
            >
              Explore Services
            </a>
            <a
              href="tel:+917095282473"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.25)",
                color: "#fff",
                padding: "12px 24px",
                borderRadius: "9999px",
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.18)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; }}
            >
              <Phone size={15} /> Call Now
            </a>
          </div>
        </div>

        {/* ── Stats bar at the very bottom ── */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 3,
            background: "rgba(8,13,21,0.7)",
            backdropFilter: "blur(16px)",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            overflow: "hidden",
          }}
        >
          {/* Desktop Static 4-Column Grid */}
          <div className="services-stats-desktop">
            {[
              { icon: <Users size={20} />, value: "2 Lakh+", label: "Happy Customers" },
              { icon: <Car size={20} />, value: "Jack Lift", label: "Car Wash" },
              { icon: <Award size={20} />, value: "Teflon", label: "& Ceramic Coat" },
              { icon: <Clock size={20} />, value: "6 Days", label: "A Week Open" },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "18px 24px",
                  borderRight: i < 3 ? "1px solid rgba(255,255,255,0.08)" : "none",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "rgba(239,68,68,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ef4444",
                    flexShrink: 0,
                  }}
                >
                  {stat.icon}
                </div>
                <div>
                  <div style={{ fontSize: "15px", fontWeight: 700, color: "#ffffff", lineHeight: 1.2 }}>{stat.value}</div>
                  <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.55)", marginTop: "2px" }}>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Smooth Auto-Moving Ticker */}
          <div className="services-stats-mobile-marquee">
            <div className="services-stats-track">
              {[
                { icon: <Users size={20} />, value: "2 Lakh+", label: "Happy Customers" },
                { icon: <Car size={20} />, value: "Jack Lift", label: "Car Wash" },
                { icon: <Award size={20} />, value: "Teflon", label: "& Ceramic Coat" },
                { icon: <Clock size={20} />, value: "6 Days", label: "A Week Open" },
                { icon: <Users size={20} />, value: "2 Lakh+", label: "Happy Customers" },
                { icon: <Car size={20} />, value: "Jack Lift", label: "Car Wash" },
                { icon: <Award size={20} />, value: "Teflon", label: "& Ceramic Coat" },
                { icon: <Clock size={20} />, value: "6 Days", label: "A Week Open" },
                { icon: <Users size={20} />, value: "2 Lakh+", label: "Happy Customers" },
                { icon: <Car size={20} />, value: "Jack Lift", label: "Car Wash" },
                { icon: <Award size={20} />, value: "Teflon", label: "& Ceramic Coat" },
                { icon: <Clock size={20} />, value: "6 Days", label: "A Week Open" },
              ].map((stat, i) => (
                <div
                  key={i}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "14px 20px",
                    borderRight: "1px solid rgba(255,255,255,0.08)",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "10px",
                      background: "rgba(239,68,68,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ef4444",
                      flexShrink: 0,
                    }}
                  >
                    {stat.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff", lineHeight: 1.2 }}>{stat.value}</div>
                    <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.55)", marginTop: "2px" }}>{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3 MAIN SERVICES & SUB-SERVICES BREAKDOWN ── */}
      <div style={{ padding: "60px 0 30px" }}>
        <div className="container" style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
          {THREE_MAIN_SERVICES.map((category, catIndex) => (
            <section
              key={category.id}
              id={category.slug}
              style={{
                marginBottom: catIndex < THREE_MAIN_SERVICES.length - 1 ? "80px" : "40px",
                scrollMarginTop: "90px",
              }}
            >
              {/* Category Header Banner */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "16px",
                  padding: "24px 30px",
                  background: "linear-gradient(135deg, #fef2f2 0%, #ffffff 100%)",
                  borderRadius: "18px",
                  border: "1.5px solid #fee2e2",
                  marginBottom: "32px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "14px",
                      background: "#fee2e2",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {getCategoryIcon(category.id)}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "12px",
                        fontWeight: 800,
                        letterSpacing: "0.08em",
                        color: "#dc2626",
                        textTransform: "uppercase",
                        marginBottom: "4px",
                      }}
                    >
                      Service Category 0{catIndex + 1}
                    </div>
                    <h2
                      style={{
                        fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
                        fontWeight: 600,
                        color: "#0f172a",
                        margin: 0,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {category.title}
                    </h2>
                  </div>
                </div>

                <p
                  style={{
                    fontSize: "14.5px",
                    color: "#475569",
                    margin: 0,
                    maxWidth: "520px",
                    lineHeight: 1.5,
                  }}
                >
                  {category.tagline}
                </p>
              </div>

              {/* Sub-Services Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "24px",
                }}
              >
                {category.subServices.map((sub) => (
                  <div
                    key={sub.id}
                    style={{
                      background: "#ffffff",
                      borderRadius: "18px",
                      border: "1px solid #e2e8f0",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      boxShadow: "0 4px 18px rgba(15, 23, 42, 0.04)",
                      transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.boxShadow = "0 14px 28px rgba(220, 38, 38, 0.1)";
                      e.currentTarget.style.borderColor = "#fca5a5";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 4px 18px rgba(15, 23, 42, 0.04)";
                      e.currentTarget.style.borderColor = "#e2e8f0";
                    }}
                  >
                    {/* Sub-service Image */}
                    <div style={{ position: "relative", height: "200px", overflow: "hidden", background: "#0f172a" }}>
                      <img
                        src={sub.image}
                        alt={`${sub.name} - A1 Car Wash Service`}
                        loading="lazy"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                      {sub.badge && (
                        <div
                          style={{
                            position: "absolute",
                            top: "12px",
                            right: "12px",
                            background: "rgba(15, 23, 42, 0.8)",
                            backdropFilter: "blur(6px)",
                            color: "#ffffff",
                            fontSize: "11px",
                            fontWeight: 700,
                            padding: "4px 10px",
                            borderRadius: "9999px",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                          }}
                        >
                          {sub.badge}
                        </div>
                      )}
                    </div>

                    {/* Sub-service Content */}
                    <div style={{ padding: "18px 20px", display: "flex", flexDirection: "column", flex: 1 }}>
                      <h3
                        style={{
                          fontSize: "17px",
                          fontWeight: 600,
                          color: "#0f172a",
                          margin: "0 0 6px 0",
                          lineHeight: 1.3,
                        }}
                      >
                        {sub.name.split("(")[0].trim()}
                      </h3>

                      {/* Brief highlight tag */}
                      <p
                        style={{
                          fontSize: "13px",
                          color: "#64748b",
                          margin: "0 0 16px 0",
                          lineHeight: 1.4,
                          flex: 1,
                        }}
                      >
                        {sub.features.slice(0, 3).join(" • ")}
                      </p>

                      {/* Book Button */}
                      <a
                        href="/contact"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "6px",
                          background: "#0f172a",
                          color: "#ffffff",
                          padding: "10px 16px",
                          borderRadius: "10px",
                          fontSize: "13px",
                          fontWeight: 600,
                          textDecoration: "none",
                          transition: "all 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "#dc2626";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "#0f172a";
                        }}
                      >
                        <span>Book Service</span>
                        <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <HowItWorks />

      {/* Pricing Matrix */}
      <PricingSection />

      <Footer />

      <style>{`
        .services-stats-desktop {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 32px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
        }
        .services-stats-mobile-marquee {
          display: none;
        }
        @media (max-width: 860px) {
          .services-stats-desktop {
            display: none !important;
          }
          .services-stats-mobile-marquee {
            display: flex !important;
            overflow: hidden;
            width: 100%;
            mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
            -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
          }
          .services-stats-track {
            display: flex;
            align-items: center;
            width: max-content;
            animation: servicesStatsScroll 18s linear infinite;
          }
          .services-stats-track:hover,
          .services-stats-track:active {
            animation-play-state: paused;
          }
        }
        @media (max-width: 640px) {
          .services-hero-section {
            min-height: 520px !important;
          }
          .services-hero-content {
            padding: 0 18px 80px !important;
          }
          .services-hero-dots {
            bottom: 20px !important;
            right: 20px !important;
          }
        }
        @keyframes servicesStatsScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333333%);
          }
        }
      `}</style>
    </main>
  );
}
