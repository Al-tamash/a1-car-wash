"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Car, Bike, ShieldCheck } from "lucide-react";

interface ServiceCardItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  accentGradient: string;
  shadowColor: string;
  icon: React.ReactNode;
}

const SERVICES_DATA: ServiceCardItem[] = [
  {
    id: "car-wash",
    slug: "car-wash",
    title: "Car Wash",
    description:
      "Complete four-wheeler care powered by heavy hydraulic jack lift ramps, RO soft water foam baths, chassis degreasing, and interior deep extraction.",
    image: "/services/full-car-wash-clean.jpg",
    accentGradient: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
    shadowColor: "rgba(239, 68, 68, 0.4)",
    icon: <Car size={26} strokeWidth={2.2} />,
  },
  {
    id: "bike-wash",
    slug: "bike-wash",
    title: "Bike Wash",
    description:
      "Specialized pressure cleaning, touchless snow foam wash, chain degreasing & lube, and scratch-free detailing for all commuter, sports, and cruiser bikes.",
    image: "/services/standard-bike-wash.jpg",
    accentGradient: "linear-gradient(135deg, #1e3a8a 0%, #0d1b3e 100%)",
    shadowColor: "rgba(13, 27, 62, 0.4)",
    icon: <Bike size={26} strokeWidth={2.2} />,
  },
  {
    id: "teflon-coating",
    slug: "teflon-coating",
    title: "Teflon Coating",
    description:
      "Professional machine compounding, swirl and scratch removal, high-gloss Teflon sealants, and ceramic protection layers to safeguard showroom shine.",
    image: "/services/teflon-coating-service.jpg",
    accentGradient: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
    shadowColor: "rgba(239, 68, 68, 0.4)",
    icon: <ShieldCheck size={26} strokeWidth={2.2} />,
  },
];

export default function ServicesSection() {
  const [activeCardId, setActiveCardId] = useState<string>("car-wash");

  return (
    <section id="services-section" className="services-section-root">
      {/* Background ambient colorful glows */}
      <div className="services-bg-accent-1" aria-hidden="true" />
      <div className="services-bg-accent-2" aria-hidden="true" />

      <div className="services-container">
        {/* ── Section Header ── */}
        <div className="services-header">
          <div className="services-eyebrow">
            <span className="services-eyebrow-dash" />
            <span>Our Services</span>
          </div>

          <h2 className="services-title">
            What We <span className="services-title-accent">Offer</span>
          </h2>
        </div>

        {/* ── 3 Main Service Cards with Colorful Badges & Floating Icons ── */}
        <div className="services-grid">
          {SERVICES_DATA.map((service) => {
            const isActive = activeCardId === service.id;

            return (
              <div
                key={service.id}
                className={`service-card-wrapper ${isActive ? "active-card" : ""}`}
                onMouseEnter={() => setActiveCardId(service.id)}
              >
                <Link
                  href={`/services#${service.slug}`}
                  className="service-card"
                  aria-label={`Learn more about ${service.title}`}
                >
                  {/* Top Image with Diagonal Cut Top-Left */}
                  <div className="service-card-image-wrap">
                    <img
                      src={service.image}
                      alt={`${service.title} Package at A1 Car Wash Hyderabad`}
                      className="service-card-image"
                      loading="lazy"
                    />
                    <div className="service-card-image-overlay" />
                  </div>

                  {/* Floating Circular Icon Badge */}
                  <div 
                    className="service-card-icon-badge"
                    style={{
                      background: service.accentGradient,
                      boxShadow: `0 8px 20px ${service.shadowColor}`,
                    }}
                  >
                    {service.icon}
                  </div>

                  {/* Card Body */}
                  <div className="service-card-body">
                    <h3 className="service-card-title">{service.title}</h3>
                    <p className="service-card-description">{service.description}</p>

                    <div className="service-card-cta">
                      <span>Learn more</span>
                      <ArrowRight size={16} className="service-card-cta-arrow" />
                    </div>

                    {/* Bottom Colorful Accent Line */}
                    <div 
                      className="service-card-bottom-accent" 
                      style={{ background: service.accentGradient }}
                    />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Scoped inline styles for guaranteed styling in all environments ── */}
      <style>{`
        .services-section-root {
          background-color: #f7f9fc !important;
          padding: 95px 0 105px !important;
          position: relative !important;
          overflow: hidden !important;
        }

        .services-bg-accent-1 {
          position: absolute !important;
          top: -120px !important;
          right: -100px !important;
          width: 500px !important;
          height: 500px !important;
          border-radius: 50% !important;
          background: radial-gradient(circle, rgba(239, 68, 68, 0.05) 0%, transparent 70%) !important;
          pointer-events: none !important;
        }

        .services-bg-accent-2 {
          position: absolute !important;
          bottom: -120px !important;
          left: -100px !important;
          width: 500px !important;
          height: 500px !important;
          border-radius: 50% !important;
          background: radial-gradient(circle, rgba(13, 27, 62, 0.04) 0%, transparent 70%) !important;
          pointer-events: none !important;
        }

        .services-container {
          max-width: 1240px !important;
          margin: 0 auto !important;
          padding: 0 24px !important;
          position: relative !important;
          z-index: 2 !important;
        }

        .services-header {
          text-align: center !important;
          margin-bottom: 54px !important;
        }

        .services-eyebrow {
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 8px !important;
          margin-bottom: 12px !important;
          font-size: 14px !important;
          font-weight: 700 !important;
          color: #64748b !important;
          text-transform: capitalize !important;
          letter-spacing: 0.02em !important;
        }

        .services-eyebrow-dash {
          width: 24px !important;
          height: 2.5px !important;
          background-color: #ef4444 !important;
          border-radius: 2px !important;
          display: inline-block !important;
        }

        .services-title {
          font-family: var(--font-heading, 'Outfit', sans-serif) !important;
          font-size: clamp(2rem, 3.2vw, 2.75rem) !important;
          font-weight: 600 !important;
          color: #0d1b3e !important;
          line-height: 1.15 !important;
          letter-spacing: -0.025em !important;
          margin: 0 !important;
        }

        .services-title-accent {
          color: #ef4444 !important;
          display: inline-block !important;
        }

        .services-grid {
          display: grid !important;
          grid-template-columns: repeat(3, 1fr) !important;
          gap: 32px !important;
          align-items: stretch !important;
        }

        .service-card-wrapper {
          filter: drop-shadow(0 12px 28px rgba(15, 23, 42, 0.08)) !important;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), filter 0.35s ease !important;
          height: 100% !important;
        }

        .service-card-wrapper:hover {
          transform: translateY(-8px) !important;
          filter: drop-shadow(0 22px 38px rgba(239, 68, 68, 0.16)) !important;
        }

        .service-card {
          background: #ffffff !important;
          clip-path: polygon(52px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 52px) !important;
          -webkit-clip-path: polygon(52px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 52px) !important;
          border-radius: 0 22px 22px 22px !important;
          overflow: hidden !important;
          display: flex !important;
          flex-direction: column !important;
          position: relative !important;
          height: 100% !important;
          cursor: pointer !important;
          text-decoration: none !important;
          color: inherit !important;
        }

        .service-card-image-wrap {
          position: relative !important;
          width: 100% !important;
          height: 220px !important;
          overflow: hidden !important;
          background-color: #0d1b3e !important;
        }

        .service-card-image {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
          display: block !important;
          transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }

        .service-card-wrapper:hover .service-card-image {
          transform: scale(1.08) !important;
        }

        .service-card-image-overlay {
          position: absolute !important;
          inset: 0 !important;
          background: linear-gradient(
            180deg,
            rgba(13, 27, 62, 0.05) 0%,
            rgba(13, 27, 62, 0.4) 55%,
            rgba(13, 27, 62, 0.88) 100%
          ) !important;
          pointer-events: none !important;
        }

        .service-card-top-chip {
          position: absolute !important;
          top: 14px !important;
          right: 14px !important;
          padding: 5px 12px !important;
          border-radius: 9999px !important;
          color: #ffffff !important;
          font-size: 10.5px !important;
          font-weight: 800 !important;
          letter-spacing: 0.08em !important;
          text-transform: uppercase !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3) !important;
          z-index: 3 !important;
        }

        .service-card-icon-badge {
          position: absolute !important;
          top: 220px !important;
          left: 28px !important;
          transform: translateY(-50%) !important;
          width: 62px !important;
          height: 62px !important;
          border-radius: 50% !important;
          border: 4px solid #ffffff !important;
          color: #ffffff !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          z-index: 5 !important;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease !important;
        }

        .service-card-wrapper:hover .service-card-icon-badge {
          transform: translateY(-50%) scale(1.1) !important;
        }

        .service-card-body {
          padding: 44px 28px 28px 28px !important;
          background: #ffffff !important;
          display: flex !important;
          flex-direction: column !important;
          flex: 1 !important;
          position: relative !important;
        }

        .service-card-title {
          font-family: var(--font-heading, 'Outfit', sans-serif) !important;
          font-size: 1.35rem !important;
          font-weight: 700 !important;
          color: #0d1b3e !important;
          line-height: 1.25 !important;
          margin: 0 0 12px 0 !important;
          letter-spacing: -0.015em !important;
          transition: color 0.25s ease !important;
        }

        .service-card-description {
          font-family: var(--font-body, 'Plus Jakarta Sans', sans-serif) !important;
          font-size: 0.92rem !important;
          color: #64748b !important;
          line-height: 1.65 !important;
          margin: 0 0 24px 0 !important;
          flex: 1 !important;
        }

        .service-card-cta {
          display: inline-flex !important;
          align-items: center !important;
          gap: 8px !important;
          font-size: 0.92rem !important;
          font-weight: 700 !important;
          color: #0d1b3e !important;
          text-decoration: none !important;
          transition: color 0.25s ease !important;
          margin-top: auto !important;
        }

        .service-card-wrapper.active-card .service-card-cta,
        .service-card-wrapper:hover .service-card-cta {
          color: #ef4444 !important;
        }

        .service-card-cta-arrow {
          transition: transform 0.25s ease !important;
        }

        .service-card-wrapper:hover .service-card-cta-arrow {
          transform: translateX(5px) !important;
        }

        .service-card-bottom-accent {
          position: absolute !important;
          bottom: 0 !important;
          left: 0 !important;
          right: 0 !important;
          height: 3.5px !important;
          background: #ef4444 !important;
          opacity: 0 !important;
          transition: opacity 0.3s ease !important;
        }

        .service-card-wrapper.active-card .service-card-bottom-accent,
        .service-card-wrapper:hover .service-card-bottom-accent {
          opacity: 1 !important;
        }

        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 28px !important;
          }

          .service-card-wrapper:last-child {
            grid-column: span 2 !important;
            max-width: 560px !important;
            margin: 0 auto !important;
            width: 100% !important;
          }
        }

        @media (max-width: 680px) {
          .services-section-root {
            padding: 70px 0 80px !important;
          }

          .services-header {
            margin-bottom: 40px !important;
          }

          .services-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }

          .service-card-wrapper:last-child {
            grid-column: auto !important;
            max-width: none !important;
          }

          .service-card {
            clip-path: polygon(42px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 42px) !important;
            -webkit-clip-path: polygon(42px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 42px) !important;
            border-radius: 0 18px 18px 18px !important;
          }

          .service-card-image-wrap {
            height: 190px !important;
          }

          .service-card-icon-badge {
            top: 190px !important;
            left: 22px !important;
            width: 54px !important;
            height: 54px !important;
          }

          .service-card-body {
            padding: 38px 22px 24px 22px !important;
          }

          .service-card-title {
            font-size: 1.22rem !important;
          }
        }
      `}</style>
    </section>
  );
}
