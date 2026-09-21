"use client";

import React, { useState } from "react";
import { Check, Sparkles, ShieldCheck, ArrowRight, Car, Bike } from "lucide-react";

type VehicleCategory = "7seater" | "5seater" | "bikes";

interface PlanItem {
  id: string;
  name: string;
  badge?: string;
  popular?: boolean;
  image: string;
  price7Seater: string;
  price5Seater: string;
  tagline: string;
  features: string[];
}

const CAR_PLANS: PlanItem[] = [
  {
    id: "full-car-wash",
    name: "Full Car Wash",
    badge: "MOST POPULAR",
    popular: true,
    image: "/pricing/pricing-full-car-wash.jpg",
    price7Seater: "₹1,200",
    price5Seater: "₹1,000",
    tagline: "Hydraulic lift wash, engine oil & diesel degrease + full interior foam care",
    features: [
      "Hydraulic Jack Lift Wash",
      "Engine Bay Oil & Diesel Wash",
      "Thick pH-Neutral Foam Bath",
      "Complete Interior Dry Vacuum",
      "Dashboard & Trim UV Dressing",
      "Tyre Polish & Wheel Rim Shine",
    ],
  },
  {
    id: "body-wash",
    name: "Express Body Wash",
    badge: "QUICK REFRESH",
    popular: false,
    image: "/pricing/pricing-body-foam-wash.jpg",
    price7Seater: "₹700",
    price5Seater: "₹600",
    tagline: "Exterior high-pressure snow foam bath, inside vacuum & tyre shine",
    features: [
      "Active Snow Foam Body Bath",
      "High-Pressure RO Jet Rinse",
      "Cabin Floor & Seat Vacuum",
      "Dashboard Anti-Static Polish",
      "Long-Lasting Tyre Dressing",
    ],
  },
  {
    id: "interior-cleaning",
    name: "Interior Deep Steam Spa",
    badge: "DEEP SANITIZATION",
    popular: false,
    image: "/pricing/pricing-interior-deep-clean.jpg",
    price7Seater: "₹3,500",
    price5Seater: "₹3,000",
    tagline: "High-temp steam extraction, leather conditioning & complete germ disinfection",
    features: [
      "Seat & Upholstery Steam Wash",
      "Door Panel & Roof Dry Cleaning",
      "Deep Trunk Extraction & Vacuum",
      "AC Vent Germ Sanitization",
      "Premium Leather & Plastic Polish",
    ],
  },
];

const ADDITIONAL_COATING_SERVICES = [
  {
    id: "teflon",
    name: "9H Teflon Gloss Coating",
    badge: "MIRROR SHIELD",
    image: "/gallery/about-fortuner-studio.jpg",
    price7Seater: "₹4,000",
    price5Seater: "₹3,500",
    description:
      "Advanced fluoropolymer polymer shield providing intense wet-look mirror gloss, swirl resistance, and ultra-hydrophobic dirt repellent finish.",
    features: [
      "High-Gloss Wet Look Mirror Finish",
      "Swirl & Minor Scratch Defense",
      "Hydrophobic Water Beading Layer",
      "Easy Wash Maintenance",
    ],
  },
  {
    id: "underbody",
    name: "Underbody Anti-Rust + Silencer Coat",
    badge: "CHASSIS SHIELD",
    image: "/gallery/underbody-antirust-work.jpg",
    price7Seater: "₹3,500",
    price5Seater: "₹3,000",
    description:
      "Heavy-duty bitumen rubberized rustproofing undercoating with matte black protective seal and heat-resistant zinc silencer spray.",
    features: [
      "Heavy Anti-Rust Bitumen Undercoat",
      "Matte Black Chassis Protective Seal",
      "High-Temp Exhaust Silencer Spray",
      "Monsoon Mud & Salt Corrosion Defense",
    ],
  },
];

const BIKE_SERVICES = [
  {
    id: "normal-bike",
    name: "Normal Bike Wash",
    category: "Splendor, Shine, Activa, Jupiter, Pulsar",
    image: "/services/normal-bike-wash-clean.jpg",
    foamPrice: "₹150",
    dieselPrice: "₹180",
    features: [
      "High-Pressure Snow Foam Bath",
      "Diesel Engine Cleansing & Degrease",
      "Chain Dust Removal & Lubrication",
      "Tyre Dressing & Mirror Polish",
    ],
  },
  {
    id: "bullet",
    name: "Standard Bike Wash",
    category: "Classic 350, Meteor, Hunter, Jawa, Yezdi",
    image: "/services/standard-bike-wash.jpg",
    foamPrice: "₹180",
    dieselPrice: "₹250",
    features: [
      "Heavy Snow Foam Body Wash",
      "Engine Bay Diesel Degreasing",
      "Chrome Spoke & Exhaust Polishing",
      "Engine Cooling Fin Dirt Extraction",
      "Silencer & Mudguard Gloss Seal",
    ],
  },
  {
    id: "sport-bikes",
    name: "Sports Bike Wash",
    category: "KTM RC/Duke, Yamaha R15/MT15, Ninja, Dominar",
    image: "/services/sports-bike-wash-clean.jpg",
    foamPrice: "₹200",
    dieselPrice: "₹250",
    features: [
      "Fairing-Safe pH-Neutral Foam Bath",
      "Swingarm & Diesel Engine Clean",
      "High-Tension Chain Scrub & Lube",
      "Alloy Rim & Disc Brake Decon",
      "Hydrophobic Scratch-Safe Hand Dry",
    ],
  },
];

export default function PricingSection() {
  const [selectedCategory, setSelectedCategory] = useState<VehicleCategory>("7seater");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const isBikeTab = selectedCategory === "bikes";
  const vehicleLabel = selectedCategory === "7seater" ? "7-Seater Car" : "5-Seater Car";

  return (
    <section id="pricing" className="pricing-modern-root">
      {/* Subtle Navy / Red Atmospheric Glow */}
      <div className="pricing-ambient-glow" aria-hidden="true" />

      <div className="pricing-container">
        {/* ── SECTION HEADER ── */}
        <div className="pricing-header-wrap">
          <div className="pricing-eyebrow">
            <span className="pricing-eyebrow-dash" />
            <span>TRANSPARENT VALUE PRICING</span>
          </div>

          <h2 className="pricing-main-title">
            Wash Packages &amp; <span className="pricing-title-accent">Studio Rates</span>
          </h2>

          <p className="pricing-main-desc">
            Professional car &amp; bike detailing with hydraulic jack lifts, touchless snow foam, and 100% RO soft-water in Hyderabad. Choose your vehicle type below:
          </p>

          {/* ── VEHICLE SEGMENT TABS SWITCHER ── */}
          <div className="pricing-tabs-pill-row">
            <button
              type="button"
              className={`pricing-tab-btn ${selectedCategory === "7seater" ? "active-red" : ""}`}
              onClick={() => setSelectedCategory("7seater")}
            >
              <Car size={16} />
              <span>7-Seater Cars</span>
            </button>

            <button
              type="button"
              className={`pricing-tab-btn ${selectedCategory === "5seater" ? "active-red" : ""}`}
              onClick={() => setSelectedCategory("5seater")}
            >
              <Car size={16} />
              <span>5-Seater Cars</span>
            </button>

            <button
              type="button"
              className={`pricing-tab-btn ${selectedCategory === "bikes" ? "active-navy" : ""}`}
              onClick={() => setSelectedCategory("bikes")}
            >
              <Bike size={16} />
              <span>Bikes &amp; Two-Wheelers</span>
            </button>
          </div>
        </div>

        {/* ── 1. CAR PACKAGES (7-SEATER & 5-SEATER) ── */}
        {!isBikeTab && (
          <div className="pricing-cards-section">
            <div className="pricing-cards-grid">
              {CAR_PLANS.map((plan) => {
                const currentPrice =
                  selectedCategory === "7seater" ? plan.price7Seater : plan.price5Seater;
                const isHovered = hoveredCard === plan.id;

                return (
                  <div
                    key={plan.id}
                    className={`pricing-card-box ${plan.popular ? "is-popular" : ""}`}
                    onMouseEnter={() => setHoveredCard(plan.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Top Image Banner */}
                    <div className="pricing-card-image-wrap">
                      <img
                        src={plan.image}
                        alt={`${plan.name} at A1 Car Wash Hyderabad`}
                        loading="lazy"
                        className="pricing-card-img"
                      />
                      <div className="pricing-card-img-overlay" />
                    </div>

                    {/* Card Body */}
                    <div className="pricing-card-body">
                      <div className="pricing-card-header">
                        <h3 className="pricing-card-title">{plan.name}</h3>
                        <p className="pricing-card-tagline">{plan.tagline}</p>
                        
                        {/* Price Display */}
                        <div className="pricing-price-row">
                          <span className="pricing-price-val">{currentPrice}</span>
                          <span className="pricing-price-unit">/ all-inclusive</span>
                        </div>
                      </div>

                      <div className="pricing-card-divider" />

                      {/* Feature Checklist */}
                      <div className="pricing-checklist">
                        {plan.features.map((feat, i) => (
                          <div key={i} className="pricing-check-item">
                            <div className="pricing-check-icon">
                              <Check size={13} strokeWidth={3} />
                            </div>
                            <span className="pricing-check-text">{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Booking Button */}
                      <button
                        type="button"
                        className={`pricing-btn-action ${plan.popular ? "btn-popular" : "btn-normal"}`}
                        onClick={() => {
                          const msg = `Hi A1 Car Wash! I would like to book the *${vehicleLabel} ${plan.name}* (${currentPrice}) at Raidurg, Hyderabad.`;
                          window.open(
                            `https://wa.me/917045282473?text=${encodeURIComponent(msg)}`,
                            "_blank"
                          );
                        }}
                      >
                        <span>Book {plan.name}</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ── 2. ADDITIONAL PROTECTIVE SERVICES (TEFLON & UNDERBODY) ── */}
            <div className="pricing-additional-container">
              <div className="pricing-add-header">
                <div className="pricing-add-title-col">
                  <div className="pricing-add-eyebrow">
                    <ShieldCheck size={14} />
                    <span>A1 CAR CARE — PROTECTIVE COATINGS</span>
                  </div>
                  <h3 className="pricing-add-title">
                    Studio Ceramic, Teflon &amp; Anti-Rust Shield
                  </h3>
                </div>
                <div className="pricing-add-meta">
                  Selected: <span className="pricing-add-vlabel">{vehicleLabel}</span>
                </div>
              </div>

              <div className="pricing-additional-grid">
                {ADDITIONAL_COATING_SERVICES.map((add) => {
                  const price =
                    selectedCategory === "7seater" ? add.price7Seater : add.price5Seater;

                  return (
                    <div key={add.id} className="pricing-card-box">
                      {/* Top Image Banner */}
                      <div className="pricing-card-image-wrap">
                        <img
                          src={add.image}
                          alt={`${add.name} at A1 Car Wash Hyderabad`}
                          loading="lazy"
                          className="pricing-card-img"
                        />
                        <div className="pricing-card-img-overlay" />
                      </div>

                      {/* Card Body */}
                      <div className="pricing-card-body">
                        <div className="pricing-card-header">
                          <h3 className="pricing-card-title">{add.name}</h3>
                          <p className="pricing-card-tagline">{add.description}</p>
                          
                          {/* Price Display */}
                          <div className="pricing-price-row">
                            <span className="pricing-price-val">{price}</span>
                            <span className="pricing-price-unit">/ all-inclusive</span>
                          </div>
                        </div>

                        <div className="pricing-card-divider" />

                        {/* Feature Checklist */}
                        <div className="pricing-checklist">
                          {add.features.map((feat, i) => (
                            <div key={i} className="pricing-check-item">
                              <div className="pricing-check-icon">
                                <Check size={13} strokeWidth={3} />
                              </div>
                              <span className="pricing-check-text">{feat}</span>
                            </div>
                          ))}
                        </div>

                        {/* CTA Booking Button */}
                        <button
                          type="button"
                          className="pricing-btn-action btn-normal"
                          onClick={() => {
                            const msg = `Hi A1 Car Wash! I would like to book the *${vehicleLabel} ${add.name}* (${price}) at Raidurg, Hyderabad.`;
                            window.open(
                              `https://wa.me/917045282473?text=${encodeURIComponent(msg)}`,
                              "_blank"
                            );
                          }}
                        >
                          <span>Book {add.name}</span>
                          <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ── 3. BIKES & TWO-WHEELERS SECTION ── */}
        {isBikeTab && (
          <div className="pricing-cards-section">
            <div className="pricing-cards-grid">
              {BIKE_SERVICES.map((bike) => (
                <div key={bike.id} className="pricing-card-box">
                  {/* Bike Image Banner */}
                  <div className="pricing-card-image-wrap">
                    <img
                      src={bike.image}
                      alt={`${bike.name} Detailing at A1 Car Wash Hyderabad`}
                      loading="lazy"
                      className="pricing-card-img"
                    />
                    <div className="pricing-card-img-overlay" />
                  </div>

                  {/* Body */}
                  <div className="pricing-card-body">
                    <div className="pricing-card-header">
                      <h3 className="pricing-card-title">{bike.name}</h3>
                      <p className="pricing-card-tagline">{bike.category}</p>

                      {/* Dual Price Pill */}
                      <div className="pricing-bike-dual-row">
                        <div className="bike-price-box">
                          <span className="bike-price-label">Foam Wash</span>
                          <span className="bike-price-val">{bike.foamPrice}</span>
                        </div>
                        <div className="bike-price-divider" />
                        <div className="bike-price-box">
                          <span className="bike-price-label red-text">Diesel Wash</span>
                          <span className="bike-price-val red-text">{bike.dieselPrice}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pricing-card-divider" />

                    {/* Features */}
                    <div className="pricing-checklist">
                      {bike.features.map((f, i) => (
                        <div key={i} className="pricing-check-item">
                          <div className="pricing-check-icon">
                            <Check size={13} strokeWidth={3} />
                          </div>
                          <span className="pricing-check-text">{f}</span>
                        </div>
                      ))}
                    </div>

                    {/* Button */}
                    <button
                      type="button"
                      className="pricing-btn-action btn-normal"
                      onClick={() => {
                        const msg = `Hi A1 Car Wash! I would like to book a *${bike.name}* wash (Foam: ${bike.foamPrice} / Diesel: ${bike.dieselPrice}) at Raidurg, Hyderabad.`;
                        window.open(
                          `https://wa.me/917045282473?text=${encodeURIComponent(msg)}`,
                          "_blank"
                        );
                      }}
                    >
                      <span>Book Bike Wash</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        .pricing-modern-root {
          position: relative;
          background: #ffffff;
          padding: 90px 20px 105px;
          overflow: hidden;
          border-top: 1px solid #f1f5f9;
        }

        .pricing-ambient-glow {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 800px;
          height: 400px;
          background: radial-gradient(circle, rgba(239, 68, 68, 0.04) 0%, rgba(13, 27, 62, 0.02) 60%, transparent 100%);
          pointer-events: none;
        }

        .pricing-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        /* ── Header ── */
        .pricing-header-wrap {
          text-align: center;
          margin-bottom: 48px;
        }

        .pricing-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #dc2626;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .pricing-eyebrow-dash {
          width: 22px;
          height: 2.5px;
          background: #dc2626;
          border-radius: 2px;
        }

        .pricing-main-title {
          font-family: var(--font-heading, 'Outfit', sans-serif);
          font-size: clamp(2rem, 3.2vw, 2.75rem);
          font-weight: 600;
          color: #0f172a;
          letter-spacing: -0.025em;
          margin: 0 0 14px 0;
        }

        .pricing-title-accent {
          color: #dc2626;
        }

        .pricing-main-desc {
          font-family: var(--font-body, 'Plus Jakarta Sans', sans-serif);
          font-size: 14.5px;
          color: #64748b;
          max-width: 600px;
          margin: 0 auto 28px;
          line-height: 1.65;
        }

        /* ── Segment Tabs Pill Row ── */
        .pricing-tabs-pill-row {
          display: inline-flex;
          align-items: center;
          background: #f1f5f9;
          padding: 6px;
          border-radius: 9999px;
          gap: 6px;
          border: 1px solid #e2e8f0;
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.03);
          flex-wrap: wrap;
          justify-content: center;
        }

        .pricing-tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 22px;
          border-radius: 9999px;
          border: none;
          background: transparent;
          color: #475569;
          font-size: 13.5px;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .pricing-tab-btn:hover {
          color: #0f172a;
        }

        .pricing-tab-btn.active-red {
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(220, 38, 38, 0.35);
        }

        .pricing-tab-btn.active-navy {
          background: #0d1b3e;
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(13, 27, 62, 0.35);
        }

        /* ── Cards Grid ── */
        .pricing-cards-section {
          width: 100%;
        }

        .pricing-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          align-items: stretch;
          margin-bottom: 50px;
        }

        .pricing-card-box {
          position: relative;
          background: #ffffff;
          border-radius: 22px;
          border: 1.5px solid #e2e8f0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.05);
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease, border-color 0.35s ease;
        }

        .pricing-card-box:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.12);
          border-color: #cbd5e1;
        }

        /* Popular highlight card */
        .pricing-card-box.is-popular {
          border-color: #ef4444;
          box-shadow: 0 14px 34px rgba(239, 68, 68, 0.16);
        }

        .pricing-card-box.is-popular:hover {
          box-shadow: 0 24px 50px rgba(239, 68, 68, 0.28);
        }

        /* Image Banner */
        .pricing-card-image-wrap {
          position: relative;
          width: 100%;
          height: 210px;
          background: #0d1b3e;
          overflow: hidden;
        }

        .pricing-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .pricing-card-box:hover .pricing-card-img {
          transform: scale(1.08);
        }

        .pricing-card-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.2) 60%, transparent 100%);
        }

        .pricing-floating-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 5px 12px;
          border-radius: 9999px;
          font-size: 10.5px;
          font-weight: 900;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          box-shadow: 0 4px 12px rgba(0,0,0,0.35);
          z-index: 3;
        }

        .badge-popular {
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
          color: #ffffff;
        }

        .badge-normal {
          background: rgba(13, 27, 62, 0.9);
          backdrop-filter: blur(4px);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .pricing-img-chip {
          position: absolute;
          bottom: 12px;
          right: 14px;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(6px);
          color: #ffffff;
          font-size: 11px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 6px;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        /* Body */
        .pricing-card-body {
          padding: 26px 24px 28px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex: 1;
        }

        .pricing-card-title {
          font-family: var(--font-heading, 'Outfit', sans-serif);
          font-size: 22px;
          font-weight: 900;
          color: #0f172a;
          margin: 0 0 6px 0;
          line-height: 1.2;
        }

        .pricing-card-tagline {
          font-size: 12.5px;
          color: #64748b;
          line-height: 1.45;
          margin: 0 0 16px 0;
          min-height: 36px;
        }

        .pricing-price-row {
          display: flex;
          align-items: baseline;
          gap: 6px;
        }

        .pricing-price-val {
          font-family: var(--font-heading, 'Outfit', sans-serif);
          font-size: 38px;
          font-weight: 900;
          color: #dc2626;
          line-height: 1;
        }

        .pricing-price-unit {
          font-size: 13px;
          color: #94a3b8;
          font-weight: 700;
        }

        .pricing-card-divider {
          height: 1px;
          background: #f1f5f9;
          margin: 18px 0;
        }

        /* Checklist */
        .pricing-checklist {
          display: flex;
          flex-direction: column;
          gap: 11px;
          margin-bottom: 26px;
        }

        .pricing-check-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .pricing-check-icon {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #fee2e2;
          color: #dc2626;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .pricing-check-text {
          font-size: 13.5px;
          color: #334155;
          font-weight: 600;
          line-height: 1.4;
        }

        /* Action button */
        .pricing-btn-action {
          width: 100%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 13px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 800;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-popular {
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
          color: #ffffff;
          box-shadow: 0 6px 18px rgba(220, 38, 38, 0.4);
        }

        .btn-popular:hover {
          background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(220, 38, 38, 0.55);
        }

        .btn-normal {
          background: #0d1b3e;
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(13, 27, 62, 0.25);
        }

        .btn-normal:hover {
          background: #dc2626;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(220, 38, 38, 0.45);
        }

        /* Bike Dual Price Row */
        .pricing-bike-dual-row {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 12px;
          align-items: center;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 10px 14px;
        }

        .bike-price-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .bike-price-label {
          font-size: 11px;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
        }

        .bike-price-label.red-text {
          color: #dc2626;
        }

        .bike-price-val {
          font-family: var(--font-heading, 'Outfit', sans-serif);
          font-size: 22px;
          font-weight: 900;
          color: #0f172a;
        }

        .bike-price-val.red-text {
          color: #dc2626;
        }

        .bike-price-divider {
          width: 1px;
          height: 32px;
          background: #cbd5e1;
        }

        /* ── Additional Protective Services Container ── */
        .pricing-additional-container {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 22px;
          padding: 36px 32px;
          box-shadow: 0 8px 26px rgba(15, 23, 42, 0.04);
        }

        .pricing-add-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          border-bottom: 1px solid #f1f5f9;
          padding-bottom: 20px;
          margin-bottom: 26px;
        }

        .pricing-add-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11.5px;
          font-weight: 800;
          color: #dc2626;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 4px;
        }

        .pricing-add-title {
          font-family: var(--font-heading, 'Outfit', sans-serif);
          font-size: 22px;
          font-weight: 900;
          color: #0f172a;
          margin: 0;
        }

        .pricing-add-meta {
          font-size: 13px;
          font-weight: 700;
          color: #64748b;
        }

        .pricing-add-vlabel {
          color: #dc2626;
          font-weight: 800;
        }

        .pricing-additional-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 380px));
          justify-content: center;
          gap: 28px;
        }

        .pricing-add-card {
          border-radius: 18px;
          border: 1px solid #e2e8f0;
          overflow: hidden;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.3s ease;
        }

        .pricing-add-card:hover {
          border-color: #dc2626;
          box-shadow: 0 12px 30px rgba(220, 38, 38, 0.12);
          transform: translateY(-4px);
        }

        .pricing-add-img-wrap {
          position: relative;
          width: 100%;
          height: 160px;
          background: #0d1b3e;
          overflow: hidden;
        }

        .pricing-add-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .pricing-add-card:hover .pricing-add-img {
          transform: scale(1.06);
        }

        .pricing-add-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 100%);
        }

        .pricing-add-badge {
          position: absolute;
          top: 12px;
          left: 14px;
          background: #dc2626;
          color: #ffffff;
          font-size: 11px;
          font-weight: 800;
          padding: 4px 10px;
          border-radius: 6px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        }

        .pricing-add-body {
          padding: 22px 22px 24px;
          display: flex;
          flex-direction: column;
          flex: 1;
          justify-content: space-between;
        }

        .pricing-add-card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 8px;
          gap: 12px;
        }

        .pricing-add-card-name {
          font-family: var(--font-heading, 'Outfit', sans-serif);
          font-size: 17px;
          font-weight: 900;
          color: #0f172a;
          margin: 0;
          line-height: 1.3;
        }

        .pricing-add-card-price {
          text-align: right;
          flex-shrink: 0;
        }

        .price-num {
          font-family: var(--font-heading, 'Outfit', sans-serif);
          font-size: 24px;
          font-weight: 900;
          color: #dc2626;
          display: block;
          line-height: 1;
        }

        .price-sub {
          font-size: 11px;
          color: #64748b;
          font-weight: 700;
        }

        .pricing-add-desc {
          font-size: 12.5px;
          color: #64748b;
          line-height: 1.5;
          margin: 0 0 14px 0;
        }

        .pricing-add-features {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 20px;
        }

        .pricing-add-feat-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12.5px;
          color: #334155;
          font-weight: 600;
        }

        .pricing-add-check-dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #fee2e2;
          color: #dc2626;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .pricing-add-btn {
          width: 100%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: #0d1b3e;
          color: #ffffff;
          padding: 11px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 800;
          border: none;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .pricing-add-btn:hover {
          background: #dc2626;
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(220, 38, 38, 0.4);
        }

        /* ── Hotline Strip ── */
        .pricing-hotline-strip {
          margin-top: 48px;
          background: #0d1b3e;
          border-radius: 18px;
          padding: 24px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
          color: #ffffff;
          box-shadow: 0 12px 32px rgba(13, 27, 62, 0.35);
        }

        .hotline-tag {
          font-size: 11.5px;
          color: #ef4444;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .hotline-addr {
          font-family: var(--font-heading, 'Outfit', sans-serif);
          font-size: 15px;
          font-weight: 800;
          color: #ffffff;
          margin-top: 2px;
        }

        .pricing-hotline-btns {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .hotline-phone-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.12);
          color: #ffffff;
          padding: 11px 18px;
          border-radius: 8px;
          font-size: 13.5px;
          font-weight: 800;
          text-decoration: none;
          transition: background 0.25s ease;
        }

        .hotline-phone-btn:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .hotline-wa-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
          color: #ffffff;
          padding: 11px 20px;
          border-radius: 8px;
          font-size: 13.5px;
          font-weight: 800;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(220, 38, 38, 0.4);
          transition: all 0.25s ease;
        }

        .hotline-wa-btn:hover {
          background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(220, 38, 38, 0.55);
        }

        /* ── RESPONSIVE MEDIA QUERIES ── */
        @media (max-width: 1024px) {
          .pricing-cards-grid {
            grid-template-columns: 1fr;
            max-width: 480px;
            margin: 0 auto 40px auto;
          }

          .pricing-additional-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .pricing-modern-root {
            padding: 55px 14px 65px;
          }

          .pricing-main-title {
            font-size: 1.85rem;
          }

          .pricing-main-desc {
            font-size: 13px;
            margin-bottom: 20px;
          }

          .pricing-tabs-pill-row {
            padding: 4px;
            gap: 4px;
            width: 100%;
          }

          .pricing-tab-btn {
            padding: 8px 14px;
            font-size: 12px;
            flex: 1;
            justify-content: center;
          }

          .pricing-card-image-wrap {
            height: 180px;
          }

          .pricing-card-body {
            padding: 20px 16px 22px;
          }

          .pricing-card-tagline {
            min-height: auto;
          }

          .pricing-price-val {
            font-size: 32px;
          }

          .pricing-additional-container {
            padding: 24px 16px;
            border-radius: 16px;
          }

          .pricing-add-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .pricing-add-img-wrap {
            height: 150px;
          }

          .pricing-add-body {
            padding: 16px;
          }

          .pricing-hotline-strip {
            flex-direction: column;
            align-items: stretch;
            text-align: center;
            padding: 20px 16px;
            margin-top: 36px;
          }

          .pricing-hotline-btns {
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }

          .hotline-phone-btn, .hotline-wa-btn {
            justify-content: center;
            font-size: 12px;
            padding: 10px 8px;
          }
        }
      `}</style>
    </section>
  );
}
