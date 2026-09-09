"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Eye, X, ChevronLeft, ChevronRight, ZoomIn, Play, Pause } from "lucide-react";

interface GalleryCard {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

// Row 1 items (Slides Left)
const row1Cards: GalleryCard[] = [
  {
    id: 1,
    title: "High-Pressure Snow Foam Cannon",
    category: "Touchless Exterior Wash",
    image: "/gallery/gallery-1.jpg",
    description: "Thick pH-neutral snow foam cannon wash lifting dirt and road film without abrasive contact.",
  },
  {
    id: 2,
    title: "Wheel & Brake Caliper Decon",
    category: "Underbody & Alloy Care",
    image: "/gallery/gallery-2.jpg",
    description: "Deep wheel-well decontamination, metallic brake dust dissolution, and hydrophobic rim protection.",
  },
  {
    id: 3,
    title: "Dual-Action Paint Correction",
    category: "Swirl & Scratch Removal",
    image: "/gallery/gallery-3.jpg",
    description: "Multi-stage rotary compound polishing eliminating 95%+ of fine swirls and clear coat imperfections.",
  },
  {
    id: 4,
    title: "Luxury Interior Cockpit Spa",
    category: "Deep Sanitization",
    image: "/gallery/gallery-4.jpg",
    description: "High-temperature 140°C steam extraction, leather seat conditioning, and anti-bacterial cabin treatment.",
  },
  {
    id: 5,
    title: "Supercar Paint Protection Film",
    category: "Self-Healing TPU Film",
    image: "/gallery/gallery-5.jpg",
    description: "Custom-cut self-healing PPF wrap guarding against stone chips, highway debris, and harsh UV rays.",
  },
  {
    id: 6,
    title: "Hydrophobic Ceramic Shield",
    category: "9H Nano Ceramic",
    image: "/card-ceramic-beading.jpg",
    description: "Extreme surface tension water-beading coat offering deep gloss and 3-year scratch resistance.",
  },
  {
    id: 7,
    title: "Exotic Coupe Final Shine",
    category: "Concours Hand Finish",
    image: "/hero-red-car.jpg",
    description: "Final white-glove inspection with 360-degree LED paint lighting, tire dressing, and glass seal.",
  },
];

// Row 2 items (Slides Right)
const row2Cards: GalleryCard[] = [
  {
    id: 8,
    title: "Luxury Sedan Carnauba Glaze",
    category: "Hand Wax Finish",
    image: "/gallery/gallery-6.jpg",
    description: "Hand-applied Brazilian carnauba glaze delivering deep wet-look reflections and rain repellency.",
  },
  {
    id: 9,
    title: "White Glove Studio Inspection",
    category: "Showroom Delivery",
    image: "/gallery/gallery-7.jpg",
    description: "White-glove quality assurance in our climate-controlled detailing studio before vehicle handover.",
  },
  {
    id: 10,
    title: "Spotless Reverse Osmosis Rinse",
    category: "Deionized Water Wash",
    image: "/card-foam-wash.jpg",
    description: "Mineral-free RO water rinse preventing calcium water spots even under hot Hyderabad afternoon sun.",
  },
  {
    id: 11,
    title: "Precision Engine Bay Detailing",
    category: "Under-Hood Spa",
    image: "/services/service-cleaning.jpg",
    description: "Safe steam-cleaning, grease degreasing, and silicone-free matte dressing on engine bay components.",
  },
  {
    id: 12,
    title: "Premium Leather Conditioning",
    category: "Interior Restoration",
    image: "/images/indian_man_complete_wash.jpg",
    description: "Deep pore leather extraction and UV-blocking conditioner restoring supple OEM texture.",
  },
  {
    id: 13,
    title: "Signature Supercar Ceramic Coat",
    category: "Exotic Paint Shield",
    image: "/hero-car.jpg",
    description: "Multi-layer nano-ceramic coating with hydrophobic lotus effect applied to German & Italian exotics.",
  },
  {
    id: 14,
    title: "Studio Light Reflection Detailing",
    category: "Precision Correction",
    image: "/hero-detailing-studio.jpg",
    description: "Precision micro-sanding and jewel polish under high CRI LED lighting for flawless mirror reflections.",
  },
];

const allCards = [...row1Cards, ...row2Cards];

export default function GallerySection() {
  const [selectedCard, setSelectedCard] = useState<GalleryCard | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Keyboard controls for modal navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCard(null);
      if (selectedCard) {
        const currentIndex = allCards.findIndex((c) => c.id === selectedCard.id);
        if (e.key === "ArrowLeft") {
          const prevIndex = (currentIndex - 1 + allCards.length) % allCards.length;
          setSelectedCard(allCards[prevIndex]);
        } else if (e.key === "ArrowRight") {
          const nextIndex = (currentIndex + 1) % allCards.length;
          setSelectedCard(allCards[nextIndex]);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedCard]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedCard) return;
    const currentIndex = allCards.findIndex((c) => c.id === selectedCard.id);
    const prevIndex = (currentIndex - 1 + allCards.length) % allCards.length;
    setSelectedCard(allCards[prevIndex]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedCard) return;
    const currentIndex = allCards.findIndex((c) => c.id === selectedCard.id);
    const nextIndex = (currentIndex + 1) % allCards.length;
    setSelectedCard(allCards[nextIndex]);
  };

  return (
    <section
      id="gallery-section"
      style={{
        background: "linear-gradient(180deg, #ea3a2a 0%, #e63222 50%, #dc2626 100%)",
        color: "#ffffff",
        padding: "68px 0 76px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes marqueeScrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marqueeScrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .gallery-marquee-track-left {
          display: flex;
          width: max-content;
          gap: 13px;
          animation: marqueeScrollLeft 36s linear infinite;
          will-change: transform;
        }

        .gallery-marquee-track-right {
          display: flex;
          width: max-content;
          gap: 13px;
          animation: marqueeScrollRight 36s linear infinite;
          will-change: transform;
        }

        .marquee-paused .gallery-marquee-track-left,
        .marquee-paused .gallery-marquee-track-right,
        .gallery-marquee-row:hover .gallery-marquee-track-left,
        .gallery-marquee-row:hover .gallery-marquee-track-right {
          animation-play-state: paused !important;
        }

        .gallery-card-item {
          position: relative;
          flex-shrink: 0;
          width: clamp(140px, 13vw, 195px);
          height: clamp(140px, 13vw, 195px);
          border-radius: 14px;
          overflow: hidden;
          cursor: pointer;
          background-color: #0f172a;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.22);
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease, border-color 0.35s ease;
          border: 1.5px solid rgba(255, 255, 255, 0.2);
        }

        .gallery-card-item:hover {
          transform: translateY(-3px) scale(1.04);
          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.38);
          border-color: rgba(255, 255, 255, 0.8);
          z-index: 10;
        }

        .gallery-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(15, 23, 42, 0.94) 0%, rgba(15, 23, 42, 0.4) 60%, transparent 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          flex-direction: column;
          justifyContent: flex-end;
          padding: 12px;
        }

        .gallery-card-item:hover .gallery-card-overlay {
          opacity: 1;
        }

        .gallery-card-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .gallery-card-item:hover img {
          transform: scale(1.08);
        }
      `}</style>

      {/* Background radial highlight glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "0",
          left: "50%",
          transform: "translateX(-50%)",
          width: "900px",
          height: "360px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Section Header (Matches Screenshot Layout) ── */}
      <div
        className="container"
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 28px",
          marginBottom: "36px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          {/* Title & Subtitle Left Side */}
          <div style={{ maxWidth: "680px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "rgba(0, 0, 0, 0.18)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                color: "#ffffff",
                border: "1px solid rgba(255, 255, 255, 0.25)",
                borderRadius: "9999px",
                fontSize: "11px",
                fontWeight: 800,
                padding: "5px 14px",
                marginBottom: "12px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              ✦ REAL TRANSFORMATIONS
            </div>

            <h2
              style={{
                fontSize: "clamp(2.2rem, 4.2vw, 3.4rem)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                color: "#0a0a0a",
                margin: "0 0 10px",
                lineHeight: 1.1,
              }}
            >
              Our Work
            </h2>
            <p
              style={{
                fontSize: "clamp(14px, 1.1vw, 16px)",
                color: "rgba(10, 10, 10, 0.85)",
                lineHeight: 1.6,
                margin: 0,
                fontWeight: 500,
              }}
            >
              Take a look at our signature car detailing projects across Hyderabad. From deep snow foam wash rituals to
              9H ceramic coatings and flawless self-healing PPF wraps.
            </p>
          </div>

          {/* Right Side Actions: Pause/Play toggle + "See Details →" button */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              flexWrap: "wrap",
            }}
          >
            {/* Pause / Resume Button */}
            <button
              onClick={() => setIsPaused(!isPaused)}
              aria-label={isPaused ? "Resume movement" : "Pause movement"}
              title={isPaused ? "Resume movement" : "Pause movement"}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "rgba(0, 0, 0, 0.2)",
                color: "#ffffff",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                borderRadius: "9999px",
                padding: "10px 16px",
                fontSize: "13px",
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(0, 0, 0, 0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(0, 0, 0, 0.2)";
              }}
            >
              {isPaused ? <Play size={14} /> : <Pause size={14} />}
              {isPaused ? "Play Motion" : "Pause"}
            </button>

            {/* Black Pill Button matching the screenshot: "See Details →" */}
            <Link
              href="/gallery"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#000000",
                color: "#ffffff",
                borderRadius: "9999px",
                padding: "12px 26px",
                fontSize: "14px",
                fontWeight: 800,
                letterSpacing: "0.02em",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.28)",
                transition: "all 0.25s ease",
                border: "1px solid rgba(255, 255, 255, 0.15)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#18181b";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 12px 28px rgba(0, 0, 0, 0.38)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#000000";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.28)";
              }}
            >
              See Details <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* ── Marquee Containers: Two Opposing Rows ── */}
      <div
        className={isPaused ? "marquee-paused" : ""}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "13px",
          width: "100%",
          position: "relative",
        }}
      >
        {/* ROW 1: Slides LEFT */}
        <div
          className="gallery-marquee-row"
          style={{
            overflow: "hidden",
            width: "100%",
            display: "flex",
            maskImage: "linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)",
          }}
        >
          <div className="gallery-marquee-track-left">
            {/* Repeat array twice for continuous seamless loop */}
            {[...row1Cards, ...row1Cards].map((card, idx) => (
              <div
                key={`r1-${card.id}-${idx}`}
                className="gallery-card-item"
                onClick={() => setSelectedCard(card)}
              >
                <img src={card.image} alt={card.title} loading="lazy" />
                <div className="gallery-card-overlay">
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "9px",
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "#fca5a5",
                      marginBottom: "3px",
                    }}
                  >
                    {card.category}
                  </span>
                  <h4
                    style={{
                      fontSize: "12px",
                      fontWeight: 800,
                      color: "#ffffff",
                      margin: "0 0 5px",
                      lineHeight: 1.25,
                      textShadow: "0 2px 4px rgba(0,0,0,0.8)",
                    }}
                  >
                    {card.title}
                  </h4>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: "10px",
                      fontWeight: 700,
                      color: "#ffffff",
                    }}
                  >
                    <ZoomIn size={12} /> Click to View
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: Slides RIGHT */}
        <div
          className="gallery-marquee-row"
          style={{
            overflow: "hidden",
            width: "100%",
            display: "flex",
            maskImage: "linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)",
          }}
        >
          <div className="gallery-marquee-track-right">
            {/* Repeat array twice for continuous seamless loop */}
            {[...row2Cards, ...row2Cards].map((card, idx) => (
              <div
                key={`r2-${card.id}-${idx}`}
                className="gallery-card-item"
                onClick={() => setSelectedCard(card)}
              >
                <img src={card.image} alt={card.title} loading="lazy" />
                <div className="gallery-card-overlay">
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "9px",
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "#fca5a5",
                      marginBottom: "3px",
                    }}
                  >
                    {card.category}
                  </span>
                  <h4
                    style={{
                      fontSize: "12px",
                      fontWeight: 800,
                      color: "#ffffff",
                      margin: "0 0 5px",
                      lineHeight: 1.25,
                      textShadow: "0 2px 4px rgba(0,0,0,0.8)",
                    }}
                  >
                    {card.title}
                  </h4>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: "10px",
                      fontWeight: 700,
                      color: "#ffffff",
                    }}
                  >
                    <ZoomIn size={12} /> Click to View
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Subtle bottom badge indicator ── */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
          marginTop: "28px",
          fontSize: "12px",
          fontWeight: 700,
          color: "rgba(255, 255, 255, 0.9)",
          letterSpacing: "0.04em",
        }}
      >
        <span>✦ Hover over any photo to pause and inspect details</span>
      </div>

      {/* ── Fullscreen Lightbox Modal ── */}
      {selectedCard && (
        <div
          onClick={() => setSelectedCard(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            backgroundColor: "rgba(8, 10, 15, 0.94)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            animation: "fadeIn 0.25s ease",
          }}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedCard(null)}
            aria-label="Close image modal"
            style={{
              position: "absolute",
              top: "24px",
              right: "24px",
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.12)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.2s ease",
              zIndex: 10,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#dc2626";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.12)";
            }}
          >
            <X size={22} />
          </button>

          {/* Modal Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "920px",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Image Preview */}
            <div
              style={{
                position: "relative",
                width: "100%",
                maxHeight: "68vh",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 25px 60px rgba(0, 0, 0, 0.65)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                backgroundColor: "#000000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={selectedCard.image}
                alt={selectedCard.title}
                style={{
                  maxWidth: "100%",
                  maxHeight: "68vh",
                  objectFit: "contain",
                  display: "block",
                }}
              />

              {/* Prev Button */}
              <button
                onClick={handlePrev}
                aria-label="Previous image"
                style={{
                  position: "absolute",
                  left: "16px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  background: "rgba(0, 0, 0, 0.6)",
                  border: "1px solid rgba(255, 255, 255, 0.25)",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#dc2626";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(0, 0, 0, 0.6)";
                }}
              >
                <ChevronLeft size={20} />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                aria-label="Next image"
                style={{
                  position: "absolute",
                  right: "16px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  background: "rgba(0, 0, 0, 0.6)",
                  border: "1px solid rgba(255, 255, 255, 0.25)",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#dc2626";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(0, 0, 0, 0.6)";
                }}
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Description & Details Info Bar */}
            <div
              style={{
                width: "100%",
                marginTop: "18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "14px",
                color: "#ffffff",
              }}
            >
              <div>
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "11px",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "#f87171",
                    marginBottom: "4px",
                  }}
                >
                  {selectedCard.category}
                </span>
                <h3 style={{ fontSize: "20px", fontWeight: 800, margin: "0 0 4px" }}>
                  {selectedCard.title}
                </h3>
                <p style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.75)", margin: 0 }}>
                  {selectedCard.description}
                </p>
              </div>

              <Link
                href="/booking"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
                  color: "#ffffff",
                  padding: "10px 22px",
                  borderRadius: "9999px",
                  fontWeight: 700,
                  fontSize: "13px",
                  boxShadow: "0 4px 15px rgba(220, 38, 38, 0.4)",
                }}
              >
                Book This Service <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
