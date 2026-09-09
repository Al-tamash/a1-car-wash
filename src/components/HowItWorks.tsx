"use client";

import React, { useState } from "react";
import { 
  SlidersHorizontal, 
  CalendarClock, 
  Sparkles, 
  Car 
} from "lucide-react";

interface StepItem {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; color?: string; strokeWidth?: number; className?: string }>;
}

const steps: StepItem[] = [
  {
    number: "01",
    title: "Choose Your Service",
    description: "Select from our expert foam wash, interior deep clean, ceramic coating, or full detailing packages tailored to your vehicle.",
    icon: SlidersHorizontal,
  },
  {
    number: "02",
    title: "Instant Bay Booking",
    description: "Pick your preferred time slot and nearby studio location or book our doorstep mobile wash with zero waiting time.",
    icon: CalendarClock,
  },
  {
    number: "03",
    title: "Expert Wash & Detail",
    description: "Our certified professionals use 100% RO soft water, pH-neutral premium shampoos, and multi-stage microfiber care.",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Pristine Handover",
    description: "Complete a thorough 21-point supervisor inspection before driving away in a showroom-ready, gleaming car.",
    icon: Car,
  },
];

export default function HowItWorks() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id="how-it-works"
      style={{
        position: "relative",
        background: "#ffffff",
        padding: "90px 20px 100px",
        overflow: "hidden",
      }}
    >
      {/* Background Dotted Halftone Texture (top-right and top-left corners) */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "360px",
          height: "360px",
          backgroundImage: "radial-gradient(rgba(239, 68, 68, 0.16) 1.5px, transparent 1.5px)",
          backgroundSize: "20px 20px",
          opacity: 0.9,
          pointerEvents: "none",
          maskImage: "radial-gradient(circle at top right, black 30%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(circle at top right, black 30%, transparent 70%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "300px",
          height: "300px",
          backgroundImage: "radial-gradient(rgba(15, 23, 42, 0.08) 1.5px, transparent 1.5px)",
          backgroundSize: "20px 20px",
          opacity: 0.8,
          pointerEvents: "none",
          maskImage: "radial-gradient(circle at top left, black 20%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(circle at top left, black 20%, transparent 70%)",
        }}
      />

      {/* Subtle ambient light glow */}
      <div
        style={{
          position: "absolute",
          top: "12%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "650px",
          height: "320px",
          background: "radial-gradient(ellipse at center, rgba(239, 68, 68, 0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1240px", margin: "0 auto", position: "relative", zIndex: 2 }}>
        {/* Header (eyebrow, main title, subtitle) */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 16px",
              borderRadius: "9999px",
              background: "#fef2f2",
              border: "1px solid #fee2e2",
              color: "#dc2626",
              fontSize: "12px",
              fontWeight: 800,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#dc2626" }} />
            HOW IT WORKS
          </div>

          <h2
            style={{
              fontSize: "clamp(1.85rem, 3.2vw, 2.75rem)",
              fontWeight: 900,
              color: "#0f172a",
              letterSpacing: "-0.025em",
              lineHeight: 1.2,
              marginBottom: "14px",
              fontFamily: "var(--font-heading)",
            }}
          >
            How We Deliver Flawless Car Care In{" "}
            <span style={{ color: "#dc2626" }}>4 Simple Steps</span>
          </h2>

          <p
            style={{
              fontSize: "15px",
              color: "#64748b",
              maxWidth: "560px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Experience a seamless, worry-free process engineered to give your car a lasting showroom shine with zero waiting hassle.
          </p>
        </div>

        {/* 4 Cards Grid with floating Hexagon Badges */}
        <div className="how-it-works-grid">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            const isHovered = hoveredIdx === idx;

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  position: "relative",
                  marginTop: "38px",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                }}
              >
                {/* Floating Hexagon Badge at Top Edge */}
                <div
                  style={{
                    position: "absolute",
                    top: "-36px",
                    left: "50%",
                    transform: isHovered
                      ? "translateX(-50%) scale(1.08)"
                      : "translateX(-50%) scale(1)",
                    width: "72px",
                    height: "82px",
                    zIndex: 4,
                    transition: "transform 0.35s ease, filter 0.35s ease",
                    filter: isHovered
                      ? "drop-shadow(0 10px 22px rgba(220, 38, 38, 0.5))"
                      : "drop-shadow(0 6px 14px rgba(220, 38, 38, 0.32))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* SVG Hexagon with rounded corners and gradient fill */}
                  <svg
                    viewBox="0 0 72 82"
                    width="72"
                    height="82"
                    style={{ position: "absolute", inset: 0 }}
                  >
                    <defs>
                      <linearGradient id={`hexGrad-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f87171" />
                        <stop offset="45%" stopColor="#ef4444" />
                        <stop offset="100%" stopColor="#dc2626" />
                      </linearGradient>
                    </defs>
                    {/* Rounded Point-Topped Hexagon Path */}
                    <path
                      d="M 42 6 L 64 18.5 Q 68 21 68 26 L 68 56 Q 68 61 64 63.5 L 42 76 Q 36 79.5 30 76 L 8 63.5 Q 4 61 4 56 L 4 26 Q 4 21 8 18.5 L 30 6 Q 36 2.5 42 6 Z"
                      fill={`url(#hexGrad-${idx})`}
                      stroke="rgba(255, 255, 255, 0.4)"
                      strokeWidth="1.5"
                    />
                  </svg>

                  {/* Icon centered in badge */}
                  <div
                    style={{
                      position: "relative",
                      zIndex: 2,
                      color: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon size={26} color="#ffffff" strokeWidth={2.2} />
                  </div>
                </div>

                {/* Card Body with Light Navy Blue Styling */}
                <div
                  style={{
                    flex: 1,
                    background: isHovered
                      ? "linear-gradient(180deg, #ffffff 0%, #eaf1fc 100%)"
                      : "linear-gradient(180deg, #f8faff 0%, #f0f4fc 100%)",
                    borderRadius: "20px",
                    border: isHovered
                      ? "1px solid #93c5fd"
                      : "1px solid #dce6f5",
                    padding: "54px 24px 32px",
                    textAlign: "center",
                    boxShadow: isHovered
                      ? "0 22px 38px -8px rgba(23, 37, 84, 0.16), 0 8px 20px -4px rgba(30, 58, 138, 0.1)"
                      : "0 10px 25px -5px rgba(23, 37, 84, 0.07), 0 4px 10px -2px rgba(23, 37, 84, 0.03)",
                    transition: "all 0.35s ease",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {/* Step Number Tag in Light Navy Pill */}
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      padding: "4px 12px",
                      borderRadius: "9999px",
                      background: isHovered ? "#dbeafe" : "#e0e9f8",
                      border: "1px solid #cbdcf7",
                      fontSize: "11px",
                      fontWeight: 800,
                      color: "#1e3a8a",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      marginBottom: "12px",
                      transition: "all 0.3s ease",
                    }}
                  >
                    STEP {item.number}
                  </div>

                  {/* Card Title */}
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: 800,
                      color: "#172554",
                      marginBottom: "12px",
                      lineHeight: 1.3,
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Card Description */}
                  <p
                    style={{
                      fontSize: "13.5px",
                      color: isHovered ? "#334155" : "#64748b",
                      lineHeight: 1.7,
                      margin: 0,
                      transition: "color 0.3s ease",
                    }}
                  >
                    {item.description}
                  </p>

                  {/* Bottom light navy / red accent line indicator */}
                  <div
                    style={{
                      marginTop: "24px",
                      width: isHovered ? "48px" : "26px",
                      height: "3px",
                      borderRadius: "9999px",
                      background: isHovered
                        ? "linear-gradient(90deg, #1e3a8a, #dc2626)"
                        : "#cbdcf7",
                      transition: "all 0.35s ease",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .how-it-works-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 26px;
        }

        @media (max-width: 1024px) {
          .how-it-works-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px 24px;
          }
        }

        @media (max-width: 640px) {
          .how-it-works-grid {
            grid-template-columns: 1fr;
            gap: 48px;
            max-width: 380px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
