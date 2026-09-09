"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Jason L. Guidry",
    role: "CEO, ABC Bank",
    rating: 5,
    quote:
      "Absolutely thrilled with the exceptional service! The team went above and beyond to make my car look brand new. Eco-friendly products with incredible attention to detail.",
    color: "red",
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Founder, TechFlow",
    rating: 5,
    quote:
      "The 100% RO water wash made all the difference on my black sedan. Zero hard water spots, deep reflective gloss, and fast service in under 30 minutes!",
    color: "navy",
  },
  {
    id: 3,
    name: "Vikram Malhotra",
    role: "Managing Director",
    rating: 5,
    quote:
      "Hands down the best car detailing in Hyderabad. Incredible precision and care for my luxury SUV. You can trust them with your prized vehicles!",
    color: "red",
  },
  {
    id: 4,
    name: "David Chen",
    role: "Automotive Enthusiast",
    rating: 5,
    quote:
      "Their ceramic coating and steam bay cleaning are unmatched. The showroom finish lasted months, shedding dust and rainwater effortlessly. Worth every rupee!",
    color: "navy",
  },
  {
    id: 5,
    name: "Priya Sharma",
    role: "Business Owner",
    rating: 5,
    quote:
      "Booked the doorstep wash for my fleet of 3 cars — seamless, professional, and the results were phenomenal. Will definitely be a regular customer!",
    color: "red",
  },
  {
    id: 6,
    name: "Rahul Verma",
    role: "Software Engineer",
    rating: 5,
    quote:
      "First visit and I am already hooked. Loved the whole experience — easy online booking to an immaculate finish on my car. Highly recommended!",
    color: "navy",
  },
];


export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Show 3 cards at a time
  const visible = [0, 1, 2].map((i) => reviews[(activeIndex + i) % reviews.length]);

  return (
    <section
      id="testimonials-section"
      style={{
        background: "#f8fafc",
        padding: "90px 0 110px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glows */}
      <div
        aria-hidden
        style={{
          position: "absolute", top: "-120px", right: "-120px",
          width: "350px", height: "350px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(220,38,38,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute", bottom: "-80px", left: "-80px",
          width: "300px", height: "300px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(23,37,84,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container">
        {/* ── Section Header ── */}
        <div style={{ textAlign: "center", marginBottom: "70px" }}>
          <span
            style={{
              display: "inline-flex", alignItems: "center", gap: "6px",
              background: "#fef2f2", color: "#dc2626",
              border: "1px solid #fecaca", borderRadius: "9999px",
              fontSize: "13px", fontWeight: 700,
              padding: "5px 14px", marginBottom: "16px", letterSpacing: "0.03em",
            }}
          >
            ⭐ Customer Reviews
          </span>
          <h2 className="section-title" style={{ marginBottom: "14px" }}>
            What Our <span className="text-gradient-red">Happy Customers</span> Say
          </h2>
          <p className="section-subtitle" style={{ maxWidth: "500px", margin: "0 auto" }}>
            Real feedback from real customers — discover why thousands trust us
            for a spotless, showroom-ready finish every time.
          </p>
        </div>

        {/* ── Cards Grid ── */}
        <div
          className="rev-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "36px",
            maxWidth: "1060px",
            margin: "0 auto 56px",
            paddingTop: "52px", // room for avatar
          }}
        >
          {visible.map((review, idx) => {
            const isCenter = idx === 1;
            const isRed = review.color === "red";
            const solidColor = isRed ? "#dc2626" : "#172554";
            const gradColor = isRed
              ? "linear-gradient(135deg, #ef4444, #dc2626)"
              : "linear-gradient(135deg, #1e3a8a, #172554)";

            return (
              <div
                key={review.id}
                style={{
                  position: "relative",
                }}
              >
                {/* ── Colored backing box (peeks from behind white card) ── */}
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    top: "0",
                    left:   idx === 0 ? "-16px" : idx === 2 ? "16px"  : "0",
                    right:  idx === 0 ? "16px"  : idx === 2 ? "-16px" : "0",
                    bottom: "-16px",
                    borderRadius: "20px",
                    background: solidColor,
                    zIndex: 0,
                  }}
                />

                {/* ── White card (sits above the backing box) ── */}
                <div
                  className="rev-card"
                  style={{
                    position: "relative",
                    zIndex: 2,
                    background: "#ffffff",
                    borderRadius: "18px",
                    padding: "52px 28px 32px",
                    boxShadow: isCenter
                      ? "0 20px 50px rgba(15,23,42,0.12)"
                      : "0 8px 28px rgba(15,23,42,0.08)",
                    border: "1px solid rgba(226,232,240,0.8)",
                    textAlign: "center",
                    transition: "transform 0.28s ease, box-shadow 0.28s ease",
                  }}
                >
                  {/* Name */}
                  <h4
                    style={{
                      fontSize: "17px",
                      fontWeight: 800,
                      color: "#0f172a",
                      marginBottom: "5px",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    {review.name}
                  </h4>

                  {/* Role */}
                  <p
                    style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      fontStyle: "italic",
                      color: isRed ? "#dc2626" : "#1e3a8a",
                      marginBottom: "18px",
                    }}
                  >
                    {review.role}
                  </p>

                  {/* Accent divider */}
                  <div
                    style={{
                      width: "36px",
                      height: "2px",
                      borderRadius: "9999px",
                      background: gradColor,
                      margin: "0 auto 16px",
                    }}
                  />

                  {/* Review text */}
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#64748b",
                      lineHeight: 1.8,
                      marginBottom: "20px",
                      minHeight: "90px",
                    }}
                  >
                    &ldquo;{review.quote}&rdquo;
                  </p>

                  {/* Stars */}
                  <div style={{ display: "flex", gap: "4px", justifyContent: "center" }}>
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={isCenter ? 18 : 15}
                        fill={isCenter ? "#f59e0b" : "#dc2626"}
                        style={{ color: isCenter ? "#f59e0b" : "#dc2626" }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Navigation: arrows + dots ── */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginTop: "8px" }}>

          {/* Left arrow */}
          <button
            onClick={() => setActiveIndex((i) => (i - 1 + reviews.length) % reviews.length)}
            aria-label="Previous reviews"
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              border: "2px solid #e2e8f0",
              background: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#172554",
              boxShadow: "0 2px 8px rgba(15,23,42,0.08)",
              transition: "all 0.22s ease",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "#172554";
              (e.currentTarget as HTMLButtonElement).style.color = "#ffffff";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "#172554";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "#ffffff";
              (e.currentTarget as HTMLButtonElement).style.color = "#172554";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "#e2e8f0";
            }}
          >
            <ChevronLeft size={20} />
          </button>

          {/* Dots */}
          <div style={{ display: "flex", gap: "7px", alignItems: "center" }}>
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`Show review set ${i + 1}`}
                style={{
                  width: activeIndex === i ? "26px" : "9px",
                  height: "9px",
                  borderRadius: "9999px",
                  background: activeIndex === i
                    ? "linear-gradient(90deg, #ef4444, #dc2626)"
                    : "#cbd5e1",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => setActiveIndex((i) => (i + 1) % reviews.length)}
            aria-label="Next reviews"
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              border: "none",
              background: "linear-gradient(135deg, #ef4444, #dc2626)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#ffffff",
              boxShadow: "0 4px 14px rgba(220,38,38,0.4)",
              transition: "all 0.22s ease",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.08)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 6px 20px rgba(220,38,38,0.5)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 14px rgba(220,38,38,0.4)";
            }}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .rev-grid {
            grid-template-columns: 1fr !important;
            max-width: 360px !important;
          }
        }
        .rev-card:hover {
          transform: translateY(-8px) !important;
          box-shadow: 0 24px 52px rgba(15,23,42,0.14) !important;
        }
      `}</style>
    </section>
  );
}
