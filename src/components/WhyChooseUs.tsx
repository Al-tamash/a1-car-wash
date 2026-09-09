"use client";
import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const carWashImages = [
  {
    src: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=900&q=80",
    caption: "Ceramic Coating Experts",
  },
  {
    src: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=900&q=80",
    caption: "100% RO Water Wash",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80",
    caption: "Premium Foam Wash",
  },
  {
    src: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=900&q=80",
    caption: "Paint Polishing & Detailing",
  },
  {
    src: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=900&q=80",
    caption: "Interior Deep Clean",
  },
  {
    src: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=900&q=80",
    caption: "Showroom Auto Spa",
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
    title: "Certified 9H Ceramic & PPF Experts",
    desc: "Our technicians are factory-trained and certified. We apply genuine nano-ceramic and self-healing PPF that lasts years.",
  },
  {
    num: "03",
    title: "4.9-Star Rated Across 5 Locations",
    desc: "Over 50,000 happy customers and 2,200+ verified Google reviews make us Hyderabad's most trusted car care studio.",
  },
];

export default function WhyChooseUs() {
  const [current, setCurrent] = useState(0);

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carWashImages.length);
    }, 3000);
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
                alt=""
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=900&q=80";
                }}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          ))}

          {/* Dark overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(15,23,42,0.70) 0%, rgba(15,23,42,0.15) 55%, rgba(15,23,42,0.55) 100%)",
              zIndex: 2,
            }}
          />

          {/* Top overlay text */}
          <div style={{ position: "absolute", top: "36px", left: "36px", right: "64px", zIndex: 3 }}>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.9)", lineHeight: 1.75, marginBottom: "18px", maxWidth: "300px" }}>
              Hyderabad&apos;s most trusted car care studio — delivering showroom results at every visit.
            </p>
            <a
              href="#contact-section"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "linear-gradient(135deg, #ef4444, #dc2626)",
                color: "#fff",
                fontWeight: 700,
                fontSize: "13px",
                padding: "10px 22px",
                borderRadius: "9999px",
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(220,38,38,0.45)",
              }}
            >
              Explore <ArrowRight size={13} />
            </a>
          </div>




        </div>

        {/* RIGHT: Heading + Numbered timeline */}
        <div style={{ padding: "60px 48px 60px 32px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h2 style={{ fontSize: "clamp(1.75rem, 2.8vw, 2.5rem)", fontWeight: 900, color: "#0f172a", lineHeight: 1.2, letterSpacing: "-0.025em", marginBottom: "40px" }}>
            Why Choose Us for{" "}
            <span style={{ background: "linear-gradient(90deg, #dc2626, #172554)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Best Car Care Experience
            </span>
          </h2>

          {/* Timeline numbered list */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {reasons.map((r, i) => (
              <div key={i} style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                {/* Leaf badge + connector */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                  <div style={{
                    width: "50px", height: "50px",
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
                    <span style={{ fontSize: "14px", fontWeight: 900, color: i < 2 ? "#ffffff" : "#64748b", letterSpacing: "0.04em", fontFamily: "monospace" }}>
                      {r.num}
                    </span>
                  </div>
                  {i < reasons.length - 1 && (
                    <div style={{ width: "2px", flex: 1, minHeight: "28px", background: i === 0 ? "linear-gradient(to bottom, #dc2626, #e2e8f0)" : "#e2e8f0", margin: "6px 0" }} />
                  )}
                </div>
                {/* Text */}
                <div style={{ paddingBottom: i < reasons.length - 1 ? "28px" : "0", paddingTop: "8px" }}>
                  <h4 style={{ fontSize: "15px", fontWeight: 800, color: i === 0 ? "#0f172a" : "#334155", marginBottom: "6px", lineHeight: 1.3 }}>
                    {r.title}
                  </h4>
                  <p style={{ fontSize: "13px", color: "#64748b", lineHeight: 1.72, margin: 0 }}>
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
          .wcu-layout > div:first-child { min-height: 320px !important; clip-path: none !important; }
        }
      `}</style>
    </section>
  );
}
