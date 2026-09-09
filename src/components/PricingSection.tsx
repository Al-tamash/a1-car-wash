"use client";

import React, { useState } from "react";
import { Check, Sparkles, ShieldCheck, Phone, Zap } from "lucide-react";

type VehicleCategory = "7seater" | "5seater" | "bikes";

interface PlanItem {
  id: string;
  name: string;
  badge?: string;
  highlighted?: boolean;
  price7Seater: string;
  price5Seater: string;
  tagline: string;
  features: string[];
}

const CAR_PLANS: PlanItem[] = [
  {
    id: "body-wash",
    name: "Body Wash",
    badge: "Quick Refresh",
    highlighted: false,
    price7Seater: "₹700",
    price5Seater: "₹600",
    tagline: "Exterior foam wash & inside cabin vacuuming",
    features: [
      "Body Wash (High-Density Foam)",
      "Inside Vacuum Cleaning",
      "Dashboard Polish & Conditioning",
      "Outside Foam Wash & Microfiber Wipe",
      "Tyre Polish & Gloss Dressing",
    ],
  },
  {
    id: "full-car-wash",
    name: "Full Car Wash",
    badge: "Most Popular",
    highlighted: true,
    price7Seater: "₹1,200",
    price5Seater: "₹1,000",
    tagline: "Jack lift wash, oil wash, diesel degrease & full spa",
    features: [
      "Jack Lift Wash (Hydraulic Ramp)",
      "Oil Wash (Chassis & Mechanicals)",
      "Diesel Wash (Engine Bay Degrease)",
      "Interior Deep Vacuum & Cleaning",
      "Vacuum Cleaning (Seats & Boot)",
      "Dashboard Polish & UV Shield",
      "Outside Foam Wash",
      "Tyre Polish & Rim Cleanse",
    ],
  },
  {
    id: "interior-cleaning",
    name: "Interior Deep Cleaning",
    badge: "Deep Spa",
    highlighted: false,
    price7Seater: "₹3,500",
    price5Seater: "₹3,000",
    tagline: "Complete seat extraction, door panels & floor mats",
    features: [
      "Seat Deep Cleaning & Extraction",
      "Door Panel Cleaning & Dressing",
      "Full Interior Cleaning (Roof & Console)",
      "Floor Mat Cleaning & Shampoo",
      "Full Interior Polish & Sanitization",
    ],
  },
];

const ADDITIONAL_COATING_SERVICES = [
  {
    id: "teflon",
    name: "Teflon Coating",
    badge: "High Gloss Paint Protection",
    price7Seater: "₹4,000",
    price5Seater: "₹3,500",
    description:
      "Fluoropolymer bonding layer providing deep mirror finish, minor swirl mark resistance, and water/dust repellent surface.",
    features: [
      "High Gloss Mirror Shine Finish",
      "Minor Swirl & Scratch Protection",
      "Fluoropolymer Paint Shield",
      "Easy Wash Maintenance & Dirt Repelling",
    ],
  },
  {
    id: "underbody",
    name: "Underbody Anti-Rust Coating + Black Colour & Silencer Spray",
    badge: "Professional Underbody Protection & Anti-Rust Treatment",
    price7Seater: "₹3,500",
    price5Seater: "₹3,000",
    description:
      "Heavy-duty rustproofing undercoating with sleek black color finish plus high-temperature heat-resistant silencer spray treatment.",
    features: [
      "Professional Underbody Anti-Rust Treatment",
      "Black Colour Chassis Protective Coat",
      "High-Temperature Silencer Spray Treatment",
      "Monsoon Mud & Salt Water Corrosion Defense",
    ],
  },
];

const BIKE_SERVICES = [
  {
    id: "normal-bike",
    name: "Normal Bike",
    category: "Daily Commuters (Splendor, Shine, Pulsar, Activa)",
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
    name: "Royal Enfield Bullet",
    category: "Cruisers & Heavy Classics (Classic 350, Meteor, Hunter)",
    foamPrice: "₹180",
    dieselPrice: "₹250",
    badge: "Cruiser Specialist",
    features: [
      "Heavy Snow Foam Wash (₹180)",
      "Diesel Engine Bay Wash (₹250)",
      "Chrome Polish & Spoke Rim Detailing",
      "Engine Cooling Fin Dirt Removal",
      "Silencer & Mudguard Gloss Protection",
    ],
  },
  {
    id: "sport-bikes",
    name: "All Sport Bikes",
    category: "Performance & Superbikes (KTM, Yamaha R15, Ninja, Dominar)",
    foamPrice: "₹200",
    dieselPrice: "₹250",
    badge: "Superbike Care",
    features: [
      "Fairing-Safe pH Neutral Foam Wash (₹200)",
      "Diesel Engine & Swingarm Wash (₹250)",
      "High-Tension Chain Scrub & Lube",
      "Alloy Wheel & Brake Caliper Care",
      "Hydrophobic Scratch-Safe Hand Dry",
    ],
  },
];

export default function PricingSection() {
  const [selectedCategory, setSelectedCategory] = useState<VehicleCategory>("7seater");
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      id="pricing-section"
      style={{
        background: "linear-gradient(180deg, #f8fafc 0%, #ffffff 50%, #f8fafc 100%)",
        padding: "85px 0 95px",
        position: "relative",
      }}
    >
      <div className="container" style={{ padding: "0 24px", maxWidth: "1280px", margin: "0 auto" }}>
        
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
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
              padding: "5px 16px",
              marginBottom: "14px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            <Sparkles size={13} />
            <span>TRANSPARENT VALUE PRICING</span>
          </div>

          <h2
            style={{
              fontSize: "clamp(2rem, 3.8vw, 3rem)",
              fontWeight: 900,
              color: "#0f172a",
              letterSpacing: "-0.03em",
              marginBottom: "12px",
            }}
          >
            A1 Car Wash <span style={{ color: "#dc2626" }}>Packages & Pricing</span>
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: "#64748b",
              maxWidth: "580px",
              margin: "0 auto 28px",
              lineHeight: 1.65,
            }}
          >
            Quality car cleaning, hydraulic jack lift washes, and protective coatings at Raidurg, Hyderabad.
            Select your vehicle type below to see exact prices with all inclusions.
          </p>

          {/* Vehicle Segment Tabs Switcher */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "#e2e8f0",
              padding: "5px",
              borderRadius: "9999px",
              gap: "4px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <button
              onClick={() => setSelectedCategory("7seater")}
              style={{
                padding: "10px 24px",
                borderRadius: "9999px",
                border: "none",
                background: selectedCategory === "7seater" ? "#dc2626" : "transparent",
                color: selectedCategory === "7seater" ? "#ffffff" : "#334155",
                fontSize: "14px",
                fontWeight: 800,
                cursor: "pointer",
                transition: "all 0.25s ease",
                boxShadow:
                  selectedCategory === "7seater" ? "0 4px 14px rgba(220,38,38,0.3)" : "none",
              }}
            >
              🚗 7-Seater Cars
            </button>

            <button
              onClick={() => setSelectedCategory("5seater")}
              style={{
                padding: "10px 24px",
                borderRadius: "9999px",
                border: "none",
                background: selectedCategory === "5seater" ? "#dc2626" : "transparent",
                color: selectedCategory === "5seater" ? "#ffffff" : "#334155",
                fontSize: "14px",
                fontWeight: 800,
                cursor: "pointer",
                transition: "all 0.25s ease",
                boxShadow:
                  selectedCategory === "5seater" ? "0 4px 14px rgba(220,38,38,0.3)" : "none",
              }}
            >
              🚗 5-Seater Cars
            </button>

            <button
              onClick={() => setSelectedCategory("bikes")}
              style={{
                padding: "10px 24px",
                borderRadius: "9999px",
                border: "none",
                background: selectedCategory === "bikes" ? "#0f172a" : "transparent",
                color: selectedCategory === "bikes" ? "#ffffff" : "#334155",
                fontSize: "14px",
                fontWeight: 800,
                cursor: "pointer",
                transition: "all 0.25s ease",
                boxShadow:
                  selectedCategory === "bikes" ? "0 4px 14px rgba(15,23,42,0.3)" : "none",
              }}
            >
              🏍️ Bikes & Two-Wheelers
            </button>
          </div>
        </div>

        {/* ── CAR PACKAGES (7-Seater / 5-Seater) ── */}
        {(selectedCategory === "7seater" || selectedCategory === "5seater") && (
          <div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "28px",
                alignItems: "stretch",
                maxWidth: "1140px",
                margin: "0 auto 50px auto",
              }}
              className="packages-grid"
            >
              {CAR_PLANS.map((plan) => {
                const currentPrice =
                  selectedCategory === "7seater" ? plan.price7Seater : plan.price5Seater;
                const vehicleLabel =
                  selectedCategory === "7seater" ? "7-Seater" : "5-Seater";

                return (
                  <div
                    key={plan.id}
                    onMouseEnter={() => setHovered(plan.id)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      borderRadius: "18px",
                      padding: "36px 28px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      position: "relative",
                      transition: "all 0.25s ease",
                      ...(plan.highlighted
                        ? {
                            background: "linear-gradient(155deg, #dc2626 0%, #991b1b 100%)",
                            boxShadow: "0 22px 50px rgba(220,38,38,0.35)",
                            color: "#ffffff",
                            transform:
                              hovered === plan.id ? "translateY(-8px)" : "translateY(-4px)",
                          }
                        : {
                            background: "#ffffff",
                            border: "1px solid #e2e8f0",
                            boxShadow:
                              hovered === plan.id
                                ? "0 14px 34px rgba(15,23,42,0.1)"
                                : "0 4px 18px rgba(15,23,42,0.05)",
                            transform: hovered === plan.id ? "translateY(-4px)" : "none",
                          }),
                    }}
                  >
                    {/* Badge */}
                    {plan.badge && (
                      <div
                        style={{
                          position: "absolute",
                          top: "-13px",
                          left: "50%",
                          transform: "translateX(-50%)",
                          background: plan.highlighted ? "#0f172a" : "#dc2626",
                          color: "#ffffff",
                          fontSize: "11px",
                          fontWeight: 800,
                          padding: "5px 16px",
                          borderRadius: "9999px",
                          whiteSpace: "nowrap",
                          letterSpacing: "0.05em",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                        }}
                      >
                        {plan.badge}
                      </div>
                    )}

                    <div>
                      {/* Title & Pricing */}
                      <div style={{ marginBottom: "22px" }}>
                        <div
                          style={{
                            fontSize: "12px",
                            fontWeight: 800,
                            letterSpacing: "0.06em",
                            textTransform: "uppercase",
                            color: plan.highlighted
                              ? "rgba(255,255,255,0.8)"
                              : "#dc2626",
                            marginBottom: "4px",
                          }}
                        >
                          {vehicleLabel} Wash Package
                        </div>
                        <h3
                          style={{
                            fontSize: "22px",
                            fontWeight: 900,
                            marginBottom: "6px",
                            color: plan.highlighted ? "#ffffff" : "#0f172a",
                          }}
                        >
                          {plan.name}
                        </h3>
                        <p
                          style={{
                            fontSize: "12.5px",
                            color: plan.highlighted
                              ? "rgba(255,255,255,0.85)"
                              : "#64748b",
                            marginBottom: "16px",
                            lineHeight: 1.45,
                          }}
                        >
                          {plan.tagline}
                        </p>

                        <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                          <span
                            style={{
                              fontSize: "42px",
                              fontWeight: 900,
                              lineHeight: 1,
                              color: plan.highlighted ? "#ffffff" : "#dc2626",
                            }}
                          >
                            {currentPrice}
                          </span>
                          <span
                            style={{
                              fontSize: "13.5px",
                              color: plan.highlighted
                                ? "rgba(255,255,255,0.75)"
                                : "#94a3b8",
                              fontWeight: 700,
                            }}
                          >
                            / total
                          </span>
                        </div>
                      </div>

                      <div
                        style={{
                          height: "1px",
                          background: plan.highlighted
                            ? "rgba(255,255,255,0.2)"
                            : "#f1f5f9",
                          marginBottom: "20px",
                        }}
                      />

                      {/* Checklist */}
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "11px",
                          marginBottom: "30px",
                        }}
                      >
                        {plan.features.map((feat, i) => (
                          <div
                            key={i}
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: "10px",
                              fontSize: "13.5px",
                              color: plan.highlighted
                                ? "rgba(255,255,255,0.95)"
                                : "#334155",
                              lineHeight: 1.45,
                            }}
                          >
                            <div
                              style={{
                                width: "18px",
                                height: "18px",
                                borderRadius: "50%",
                                background: plan.highlighted
                                  ? "rgba(255,255,255,0.2)"
                                  : "#fee2e2",
                                color: plan.highlighted ? "#ffffff" : "#dc2626",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                                marginTop: "1px",
                              }}
                            >
                              <Check size={12} strokeWidth={3} />
                            </div>
                            <span style={{ fontWeight: 600 }}>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Booking CTA Button */}
                    <button
                      onClick={() => {
                        const msg = `Hi A1 Car Wash! I would like to book the *${vehicleLabel} ${plan.name}* (${currentPrice}) at Raidurg, Hyderabad.`;
                        window.open(
                          `https://wa.me/917045282473?text=${encodeURIComponent(msg)}`,
                          "_blank"
                        );
                      }}
                      style={{
                        width: "100%",
                        padding: "14px",
                        borderRadius: "10px",
                        fontWeight: 800,
                        fontSize: "14px",
                        cursor: "pointer",
                        border: "none",
                        transition: "all 0.2s ease",
                        ...(plan.highlighted
                          ? {
                              background: "#ffffff",
                              color: "#dc2626",
                              boxShadow: "0 6px 20px rgba(0,0,0,0.16)",
                            }
                          : {
                              background:
                                "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
                              color: "#ffffff",
                              boxShadow: "0 4px 16px rgba(220,38,38,0.3)",
                            }),
                      }}
                    >
                      Book {vehicleLabel} for {currentPrice}
                    </button>
                  </div>
                );
              })}
            </div>

            {/* ── ADDITIONAL SERVICES: Teflon & Underbody Anti-Rust ── */}
            <div
              style={{
                background: "#ffffff",
                border: "1.5px solid #e2e8f0",
                borderRadius: "20px",
                padding: "36px 32px",
                maxWidth: "1140px",
                margin: "0 auto",
                boxShadow: "0 10px 30px rgba(15,23,42,0.04)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "12px",
                  marginBottom: "24px",
                  borderBottom: "1px solid #f1f5f9",
                  paddingBottom: "18px",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "11.5px",
                      fontWeight: 800,
                      color: "#dc2626",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      marginBottom: "4px",
                    }}
                  >
                    <ShieldCheck size={14} />
                    <span>A1 CAR WASH — ADDITIONAL SERVICES</span>
                  </div>
                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: 900,
                      color: "#0f172a",
                      margin: 0,
                    }}
                  >
                    Protective Coatings & Anti-Rust Shield
                  </h3>
                </div>
                <div style={{ fontSize: "13px", fontWeight: 700, color: "#64748b" }}>
                  Selected Vehicle:{" "}
                  <span style={{ color: "#dc2626", fontWeight: 800 }}>
                    {selectedCategory === "7seater" ? "7-Seater" : "5-Seater"}
                  </span>
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "24px",
                }}
                className="additional-grid"
              >
                {ADDITIONAL_COATING_SERVICES.map((add) => {
                  const price =
                    selectedCategory === "7seater" ? add.price7Seater : add.price5Seater;
                  const vLabel =
                    selectedCategory === "7seater" ? "7-Seater" : "5-Seater";

                  return (
                    <div
                      key={add.id}
                      style={{
                        borderRadius: "14px",
                        border: "1px solid #e2e8f0",
                        padding: "24px",
                        background: "#f8fafc",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "#dc2626";
                        e.currentTarget.style.background = "#ffffff";
                        e.currentTarget.style.boxShadow =
                          "0 10px 26px rgba(220,38,38,0.08)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "#e2e8f0";
                        e.currentTarget.style.background = "#f8fafc";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <div>
                        <div
                          style={{
                            display: "inline-block",
                            background: "#fee2e2",
                            color: "#dc2626",
                            fontSize: "11px",
                            fontWeight: 800,
                            padding: "3px 10px",
                            borderRadius: "6px",
                            marginBottom: "10px",
                          }}
                        >
                          {add.badge}
                        </div>

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            marginBottom: "10px",
                          }}
                        >
                          <h4
                            style={{
                              fontSize: "18px",
                              fontWeight: 900,
                              color: "#0f172a",
                              margin: 0,
                              maxWidth: "280px",
                              lineHeight: 1.3,
                            }}
                          >
                            {add.name}
                          </h4>
                          <div style={{ textAlign: "right" }}>
                            <span
                              style={{
                                fontSize: "26px",
                                fontWeight: 900,
                                color: "#dc2626",
                              }}
                            >
                              {price}
                            </span>
                            <div style={{ fontSize: "11px", color: "#64748b", fontWeight: 700 }}>
                              {vLabel} Price
                            </div>
                          </div>
                        </div>

                        <p
                          style={{
                            fontSize: "12.5px",
                            color: "#64748b",
                            lineHeight: 1.5,
                            marginBottom: "16px",
                          }}
                        >
                          {add.description}
                        </p>

                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "8px",
                            marginBottom: "20px",
                          }}
                        >
                          {add.features.map((f, fi) => (
                            <div
                              key={fi}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                fontSize: "12.5px",
                                color: "#334155",
                                fontWeight: 600,
                              }}
                            >
                              <Check size={14} style={{ color: "#16a34a" }} />
                              <span>{f}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          const msg = `Hi A1 Car Wash! I would like to book *${vLabel} ${add.name}* (${price}) at Raidurg, Hyderabad.`;
                          window.open(
                            `https://wa.me/917045282473?text=${encodeURIComponent(msg)}`,
                            "_blank"
                          );
                        }}
                        style={{
                          background: "#0f172a",
                          color: "#ffffff",
                          padding: "11px",
                          borderRadius: "8px",
                          fontSize: "13px",
                          fontWeight: 800,
                          border: "none",
                          cursor: "pointer",
                          transition: "all 0.2s",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "#dc2626")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "#0f172a")}
                      >
                        Book {add.name} ({price})
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ── BIKES & TWO WHEELERS SECTION ── */}
        {selectedCategory === "bikes" && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "28px",
              alignItems: "stretch",
              maxWidth: "1140px",
              margin: "0 auto",
            }}
            className="packages-grid"
          >
            {BIKE_SERVICES.map((bike) => (
              <div
                key={bike.id}
                style={{
                  borderRadius: "18px",
                  padding: "32px 26px",
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 6px 20px rgba(15,23,42,0.06)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#dc2626";
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 14px 34px rgba(220,38,38,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#e2e8f0";
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(15,23,42,0.06)";
                }}
              >
                <div>
                  {bike.badge && (
                    <div
                      style={{
                        display: "inline-block",
                        background: "#fee2e2",
                        color: "#dc2626",
                        fontSize: "11px",
                        fontWeight: 800,
                        padding: "4px 12px",
                        borderRadius: "9999px",
                        marginBottom: "12px",
                      }}
                    >
                      {bike.badge}
                    </div>
                  )}

                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: 900,
                      color: "#0f172a",
                      marginBottom: "4px",
                    }}
                  >
                    {bike.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#64748b",
                      marginBottom: "18px",
                      lineHeight: 1.4,
                    }}
                  >
                    {bike.category}
                  </p>

                  {/* Dual Pricing Pill */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "10px",
                      background: "#f8fafc",
                      padding: "14px 12px",
                      borderRadius: "12px",
                      border: "1px solid #e2e8f0",
                      marginBottom: "20px",
                      textAlign: "center",
                    }}
                  >
                    <div>
                      <div style={{ fontSize: "11px", fontWeight: 700, color: "#64748b" }}>
                        Foam Wash
                      </div>
                      <div style={{ fontSize: "24px", fontWeight: 900, color: "#0f172a" }}>
                        {bike.foamPrice}
                      </div>
                    </div>
                    <div style={{ borderLeft: "1px solid #cbd5e1" }}>
                      <div style={{ fontSize: "11px", fontWeight: 700, color: "#dc2626" }}>
                        Diesel Wash
                      </div>
                      <div style={{ fontSize: "24px", fontWeight: 900, color: "#dc2626" }}>
                        {bike.dieselPrice}
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      marginBottom: "26px",
                    }}
                  >
                    {bike.features.map((f, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "8px",
                          fontSize: "13px",
                          color: "#334155",
                          lineHeight: 1.4,
                        }}
                      >
                        <Check
                          size={15}
                          style={{ color: "#16a34a", flexShrink: 0, marginTop: "2px" }}
                        />
                        <span style={{ fontWeight: 600 }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    const msg = `Hi A1 Car Wash! I would like to book a *${bike.name}* wash (Foam: ${bike.foamPrice} / Diesel: ${bike.dieselPrice}) at Raidurg, Hyderabad.`;
                    window.open(
                      `https://wa.me/917045282473?text=${encodeURIComponent(msg)}`,
                      "_blank"
                    );
                  }}
                  style={{
                    width: "100%",
                    padding: "13px",
                    borderRadius: "8px",
                    fontWeight: 800,
                    fontSize: "13.5px",
                    cursor: "pointer",
                    border: "none",
                    background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
                    color: "#ffffff",
                    boxShadow: "0 4px 14px rgba(220,38,38,0.35)",
                    transition: "all 0.2s ease",
                  }}
                >
                  Book Bike Wash
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Booking Hotline Bar */}
        <div
          style={{
            marginTop: "48px",
            background: "#0f172a",
            borderRadius: "16px",
            padding: "24px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
            maxWidth: "1140px",
            margin: "48px auto 0 auto",
            color: "#ffffff",
          }}
        >
          <div>
            <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.7)", fontWeight: 700 }}>
              LOCATION & IMMEDIATE SLOTS
            </div>
            <div style={{ fontSize: "16px", fontWeight: 800, color: "#ffffff", marginTop: "2px" }}>
              Mehfil Restaurant, Raidurg, Darga Chowrasta, Film Nagar Road, Hyderabad
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <a
              href="tel:7045282473"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(255,255,255,0.12)",
                color: "#ffffff",
                padding: "11px 20px",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: 800,
                textDecoration: "none",
              }}
            >
              <Phone size={15} style={{ color: "#ef4444" }} />
              <span>70452 82473</span>
            </a>

            <a
              href="https://wa.me/917045282473?text=Hi%20A1%20Car%20Wash!%20I%20would%20like%20to%20inquire%20about%20car%20wash%20rates."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
                color: "#ffffff",
                padding: "11px 22px",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: 800,
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(220,38,38,0.4)",
              }}
            >
              WhatsApp Us
            </a>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 980px) {
          .packages-grid {
            grid-template-columns: 1fr !important;
            max-width: 440px !important;
            margin: 0 auto 36px auto !important;
          }
          .additional-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
