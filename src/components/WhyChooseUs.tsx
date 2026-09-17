"use client";
import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const carWashImages = [
  {
    src: "/gallery/about-interceptor-bike.jpg",
    caption: "Royal Enfield Interceptor 650 Wash Bay",
    position: "center center",
  },
  {
    src: "/gallery/about-bay-ratecard.jpg",
    caption: "A1 Car Wash Main Bay & Official Rate Board",
    position: "center center",
  },
  {
    src: "/gallery/about-fortuner-studio.jpg",
    caption: "Detailing Studio under Precision LED Inspection Lights",
    position: "center center",
  },
  {
    src: "/gallery/interior-deep-cleaning-card.jpg",
    caption: "Hydraulic Ramp Interior Deep Cleaning",
    position: "center center",
  },
  {
    src: "/gallery/bike-wash-card.jpg",
    caption: "High-Pressure Snow Foam Bike Wash",
    position: "center center",
  },
  {
    src: "/gallery/real-dual-lift-wide.jpg",
    caption: "Dual Hydraulic Ramp Lift Station",
    position: "center center",
  },
];

const reasons = [
  {
    num: "01",
    title: "100% RO Soft Water Technology",
    desc: "We use zero-TDS reverse osmosis water that leaves zero mineral spots — your paint dries flawlessly every single time.",
  },
  {
    num: "02",
    title: "Specialized Hydraulic Jack Lift & Anti-Rust Facility",
    desc: "Our high-capacity hydraulic jack lifts enable thorough underbody wash, oil & diesel degreasing, and heavy-duty underbody anti-rust protection with black chassis & silencer spray.",
  },
  {
    num: "03",
    title: "Flagship Studio at Mehfil Restaurant, Raidurg",
    desc: "Conveniently located at Darga Chowrasta, Film Nagar Road with dedicated bays, express turnaround, and 4.9-star customer satisfaction.",
  },
];

export default function WhyChooseUs() {
  const [current, setCurrent] = useState(0);

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carWashImages.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + carWashImages.length) % carWashImages.length);
  const next = () => setCurrent((c) => (c + 1) % carWashImages.length);

  return (
    <section id="why-choose-us" style={{ background: "#f8fafc", padding: "0" }}>
      <div
        className="wcu-layout"
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "560px",
        }}
      >
        {/* LEFT: Auto-scrolling image carousel with diagonal clip */}
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            clipPath: "polygon(0 0, 88% 0, 100% 100%, 0 100%)",
            minHeight: "520px",
            background: "#0f172a",
          }}
        >
          {/* Slides */}
          {carWashImages.map((img, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                inset: 0,
                opacity: i === current ? 1 : 0,
                transition: "opacity 0.8s ease-in-out",
                zIndex: i === current ? 1 : 0,
              }}
            >
              <img
                src={img.src}
                alt={img.caption}
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "/gallery/real-fortuner-studio-lights.png";
                }}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: img.position || "center center",
                }}
              />
            </div>
          ))}

          {/* Subtle vignette gradient that keeps the vehicle clean and visible */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(15,23,42,0.45) 0%, rgba(15,23,42,0.02) 40%, rgba(15,23,42,0.7) 100%)",
              zIndex: 2,
            }}
          />

          {/* Top overlay pill - compact & non-obstructive */}
          <div style={{ position: "absolute", top: "24px", left: "28px", zIndex: 3 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(15, 23, 42, 0.75)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#ffffff",
                padding: "6px 14px",
                borderRadius: "9999px",
                fontSize: "12px",
                fontWeight: 700,
              }}
            >
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ef4444" }} />
              A1 Detailing Studio Bay
            </div>
          </div>

          {/* Bottom Overlay: Live Caption + Quick Action */}
          <div
            style={{
              position: "absolute",
              bottom: "28px",
              left: "28px",
              right: "60px",
              zIndex: 3,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "#ffffff",
                  lineHeight: 1.4,
                  margin: "0 0 6px 0",
                  textShadow: "0 2px 8px rgba(0,0,0,0.8)",
                }}
              >
                {carWashImages[current].caption}
              </p>
              <div style={{ display: "flex", gap: "5px" }}>
                {carWashImages.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setCurrent(dotIdx)}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                    style={{
                      width: dotIdx === current ? "22px" : "7px",
                      height: "7px",
                      borderRadius: "9999px",
                      background: dotIdx === current ? "#ef4444" : "rgba(255,255,255,0.45)",
                      border: "none",
                      padding: 0,
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                  />
                ))}
              </div>
            </div>

            <a
              href="#contact-section"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "linear-gradient(135deg, #ef4444, #dc2626)",
                color: "#fff",
                fontWeight: 700,
                fontSize: "12.5px",
                padding: "8px 18px",
                borderRadius: "9999px",
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(220,38,38,0.5)",
                flexShrink: 0,
              }}
            >
              Explore <ArrowRight size={13} />
            </a>
          </div>
        </div>

        {/* RIGHT: Heading + Numbered timeline */}
        <div className="wcu-content-col" style={{ padding: "60px 48px 60px 32px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h2 style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.75rem)", fontWeight: 600, color: "#0f172a", lineHeight: 1.2, letterSpacing: "-0.025em", marginBottom: "32px" }}>
            Why Choose Us for{" "}
            <span style={{ background: "linear-gradient(90deg, #dc2626, #172554)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Best Car Care Experience
            </span>
          </h2>

          {/* Timeline numbered list */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {reasons.map((r, i) => (
              <div key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                {/* Leaf badge + connector */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                  <div style={{
                    width: "44px", height: "44px",
                    borderRadius: i === 0 ? "50% 0 50% 0" : i === 1 ? "0 50% 0 50%" : "50% 0 50% 0",
                    background: i === 0
                      ? "linear-gradient(135deg, #ef4444, #dc2626)"
                      : i === 1
                        ? "linear-gradient(135deg, #1e3a8a, #172554)"
                        : "#ffffff",
                    border: i === 2 ? "1px solid #e2e8f0" : "none",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: i === 0
                      ? "0 6px 20px rgba(220,38,38,0.4)"
                      : i === 1
                        ? "0 6px 20px rgba(23,37,84,0.3)"
                        : "0 2px 8px rgba(15,23,42,0.06)",
                    flexShrink: 0,
                  }}>
                    <span style={{ fontSize: "13px", fontWeight: 900, color: i < 2 ? "#ffffff" : "#64748b", letterSpacing: "0.04em", fontFamily: "monospace" }}>
                      {r.num}
                    </span>
                  </div>
                  {i < reasons.length - 1 && (
                    <div style={{ width: "2px", flex: 1, minHeight: "24px", background: i === 0 ? "linear-gradient(to bottom, #dc2626, #e2e8f0)" : "#e2e8f0", margin: "4px 0" }} />
                  )}
                </div>
                {/* Text */}
                <div style={{ paddingBottom: i < reasons.length - 1 ? "22px" : "0", paddingTop: "6px" }}>
                  <h4 style={{ fontSize: "14.5px", fontWeight: 800, color: i === 0 ? "#0f172a" : "#334155", marginBottom: "4px", lineHeight: 1.3 }}>
                    {r.title}
                  </h4>
                  <p style={{ fontSize: "12.5px", color: "#64748b", lineHeight: 1.65, margin: 0 }}>
                    {r.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .wcu-layout { grid-template-columns: 1fr !important; }
          .wcu-layout > div:first-child { min-height: 280px !important; clip-path: none !important; }
          .wcu-content-col { padding: 36px 20px 44px !important; }
        }
      `}</style>
    </section>
  );
}
