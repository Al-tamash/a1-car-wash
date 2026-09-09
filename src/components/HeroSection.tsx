"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { StoreLocation } from "@/data/storesData";

interface DetailingCard {
  id: number;
  title: string;
  category: string;
  image: string;
  highlight: string;
}

const cardsData: DetailingCard[] = [
  {
    id: 1,
    title: "Snow Foam Cannon",
    category: "Touchless Pre-Wash",
    image: "/card-foam-wash.jpg",
    highlight: "pH-neutral snow foam breakdown",
  },
  {
    id: 2,
    title: "9H Ceramic Coating",
    category: "Hydrophobic Shield",
    image: "/card-ceramic-beading.jpg",
    highlight: "3-Year ultra-gloss water beading",
  },
  {
    id: 3,
    title: "Red Supercar Detailing",
    category: "Showroom Finish",
    image: "/hero-red-car.jpg",
    highlight: "Comprehensive 5-stage detailing",
  },
  {
    id: 4,
    title: "Precision Paint Correction",
    category: "Dual-Action Polishing",
    image: "/hero-bg2.jpg",
    highlight: "99% swirl & scratch removal",
  },
  {
    id: 5,
    title: "Master Certified Team",
    category: "Expert Studio Care",
    image: "/hero-bg.jpg",
    highlight: "Certified master detailing specialists",
  },
  {
    id: 6,
    title: "PPF Self-Healing Armor",
    category: "Paint Protection Film",
    image: "/hero-bg3.jpg",
    highlight: "Rock-chip & UV protection",
  },
  {
    id: 7,
    title: "Showroom Red Finish",
    category: "Final Inspection",
    image: "/hero-car.jpg",
    highlight: "Flawless mirror-finish delivery",
  },
];

interface HeroSectionProps {
  store?: StoreLocation;
}

export default function HeroSection({ store }: HeroSectionProps = {}) {
  const desktopActiveIndex = 3; // Center card fixed on desktop
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileIndex, setMobileIndex] = useState(cardsData.length); // Start at middle copy
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchDeltaX, setTouchDeltaX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Detect mobile viewport
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-move horizontally on mobile every 2.6 seconds
  useEffect(() => {
    if (!isMobile || isDragging) return;

    autoPlayRef.current = setInterval(() => {
      setIsTransitioning(true);
      setMobileIndex((prev) => prev + 1);
    }, 2600);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isMobile, isDragging]);

  // Seamless infinite loop boundary check for mobile index
  useEffect(() => {
    if (!isMobile) return;
    if (mobileIndex >= cardsData.length * 2) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setMobileIndex(mobileIndex - cardsData.length);
      }, 550);
      return () => clearTimeout(timer);
    } else if (mobileIndex < cardsData.length) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setMobileIndex(mobileIndex + cardsData.length);
      }, 550);
      return () => clearTimeout(timer);
    }
  }, [mobileIndex, isMobile]);

  // Touch handlers for horizontal swipe on mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setIsDragging(true);
    setTouchDeltaX(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const currentX = e.touches[0].clientX;
    setTouchDeltaX(currentX - touchStartX);
  };

  const handleTouchEnd = () => {
    if (touchStartX !== null) {
      setIsTransitioning(true);
      if (touchDeltaX < -40) {
        // Swiped left -> move horizontally to next card
        setMobileIndex((prev) => prev + 1);
      } else if (touchDeltaX > 40) {
        // Swiped right -> move horizontally to prev card
        setMobileIndex((prev) => prev - 1);
      }
    }
    setTouchStartX(null);
    setTouchDeltaX(0);
    setIsDragging(false);
  };

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "#090a0d",
        color: "#ffffff",
        paddingTop: "80px",
        paddingBottom: "24px",
      }}
    >
      {/* ── Background Luxury Detailing Studio Image ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/hero-detailing-studio.jpg?v=2')",
          backgroundSize: "cover",
          backgroundPosition: "center 45%",
          filter: "brightness(0.72) contrast(1.12)",
          transform: "scale(1.02)",
          zIndex: 0,
        }}
      />

      {/* ── Cinematic Studio Lighting Gradient Vignette ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 35%, rgba(0,0,0,0.2) 0%, rgba(9,10,13,0.6) 62%, rgba(6,7,9,0.92) 100%), linear-gradient(to bottom, rgba(8,9,12,0.75) 0%, rgba(0,0,0,0.15) 30%, rgba(6,7,9,0.35) 60%, rgba(6,7,9,0.95) 100%)",
          zIndex: 1,
        }}
      />

      {/* ── Center Typography & Action Buttons ── */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          maxWidth: "820px",
          padding: "0 24px",
          margin: "18px auto 20px auto",
        }}
      >
        {/* Location Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(220, 38, 38, 0.25)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(239, 68, 68, 0.4)",
            color: "#fecaca",
            padding: "5px 16px",
            borderRadius: "9999px",
            fontSize: "12.5px",
            fontWeight: 600,
            marginBottom: "14px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
          }}
        >
          <span>
            {store
              ? `📍 ${store.name} — ${store.area}`
              : "📍 Mehfil Restaurant, Raidurg, Darga Chowrasta, Hyderabad"}
          </span>
        </div>

        {/* Title — font-weight 600 */}
        <h1
          style={{
            fontFamily: "var(--font-heading, inherit)",
            fontSize: "clamp(2.5rem, 5.2vw, 4.4rem)",
            fontWeight: 600,
            letterSpacing: "-0.025em",
            lineHeight: 1.1,
            color: "#ffffff",
            marginBottom: "12px",
            textShadow: "0 4px 28px rgba(0,0,0,0.7)",
          }}
        >
          A1 <span style={{ color: "#ef4444" }}>CAR WASH</span>
          {store && (
            <span
              style={{
                display: "block",
                fontSize: "clamp(1.2rem, 2.4vw, 1.85rem)",
                fontWeight: 600,
                color: "#fca5a5",
                marginTop: "6px",
                letterSpacing: "-0.01em",
              }}
            >
              {store.name}
            </span>
          )}
        </h1>

        {/* Tagline — font-weight 600 */}
        <div
          style={{
            fontSize: "clamp(1.05rem, 1.9vw, 1.3rem)",
            fontWeight: 600,
            color: "#ffffff",
            letterSpacing: "0.01em",
            marginBottom: "10px",
            textShadow: "0 2px 14px rgba(0,0,0,0.8)",
          }}
        >
          {store ? store.heroHeadline : "Quality Car Cleaning & Detailing"}
        </div>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "clamp(0.92rem, 1.45vw, 1.08rem)",
            color: "rgba(255, 255, 255, 0.9)",
            lineHeight: 1.55,
            fontWeight: 400,
            maxWidth: "640px",
            margin: "0 auto 24px auto",
            textShadow: "0 2px 12px rgba(0,0,0,0.8)",
          }}
        >
          {store
            ? store.heroSubheadline
            : "Hyderabad's trusted studio for Hydraulic Jack Lift Washes, Oil & Diesel Degreasing, Interior Deep Sanitization, Teflon Coating, and Underbody Anti-Rust Protection."}
        </p>

        {/* Two Pill Buttons */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "14px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {/* Left Button: Solid Red Pill */}
          <Link
            href="#pricing-section"
            style={{
              background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
              color: "#ffffff",
              padding: "13px 34px",
              borderRadius: "9999px",
              fontSize: "15px",
              fontWeight: 600,
              textDecoration: "none",
              letterSpacing: "-0.01em",
              boxShadow: "0 8px 24px rgba(220, 38, 38, 0.5)",
              transition: "all 0.25s ease",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 12px 30px rgba(220, 38, 38, 0.7)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(220, 38, 38, 0.5)";
            }}
          >
            View Packages (From ₹600)
          </Link>

          {/* Right Button: Translucent Frosted Glass Pill */}
          <a
            href={`https://wa.me/917045282473?text=${encodeURIComponent(
              store
                ? `Hi A1 Car Wash! I would like to book a car wash at ${store.name}, ${store.area}, Hyderabad.`
                : "Hi A1 Car Wash! I would like to book a car wash at Raidurg, Hyderabad."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "rgba(255, 255, 255, 0.18)",
              color: "#ffffff",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              padding: "13px 34px",
              borderRadius: "9999px",
              fontSize: "15px",
              fontWeight: 600,
              textDecoration: "none",
              letterSpacing: "-0.01em",
              border: "1px solid rgba(255, 255, 255, 0.35)",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.25)",
              transition: "all 0.25s ease",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.3)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.18)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <span>WhatsApp: 70452 82473</span>
          </a>
        </div>
      </div>

      {/* ── Cards Deck (Mobile: Horizontal Moving Track | Desktop: Stationary 3D Arc) ── */}
      {isMobile ? (
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            position: "relative",
            zIndex: 10,
            width: "100%",
            overflow: "hidden",
            padding: "10px 0 16px 0",
            touchAction: "pan-y",
          }}
        >
          {/* Horizontal moving track */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              width: "max-content",
              transform: `translateX(calc(50vw - 80px - ${mobileIndex * 174}px + ${touchDeltaX}px))`,
              transition:
                isTransitioning && !isDragging
                  ? "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)"
                  : "none",
              willChange: "transform",
            }}
          >
            {[...cardsData, ...cardsData, ...cardsData].map((card, idx) => {
              const isCenter = idx === mobileIndex;
              return (
                <div
                  key={`${card.id}-${idx}`}
                  onClick={() => {
                    setIsTransitioning(true);
                    setMobileIndex(idx);
                  }}
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    width: "160px",
                    height: "240px",
                    borderRadius: "20px",
                    overflow: "hidden",
                    cursor: "pointer",
                    border: isCenter
                      ? "2px solid rgba(255, 255, 255, 0.85)"
                      : "1px solid rgba(255, 255, 255, 0.22)",
                    boxShadow: isCenter
                      ? "0 20px 40px rgba(0,0,0,0.7), 0 0 20px rgba(255,255,255,0.2)"
                      : "0 10px 24px rgba(0,0,0,0.5)",
                    transform: isCenter ? "scale(1.05)" : "scale(0.92)",
                    opacity: isCenter ? 1 : 0.65,
                    transition: "transform 0.4s ease, opacity 0.4s ease, border 0.3s ease",
                    backgroundColor: "#16181d",
                    userSelect: "none",
                  }}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      filter: isCenter
                        ? "brightness(1.05) contrast(1.05)"
                        : "brightness(0.85) contrast(1)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 60%, rgba(0,0,0,0.5) 100%)",
                      pointerEvents: "none",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: "14px 10px",
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 70%, transparent 100%)",
                      color: "#fff",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "9px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                        color: "#ef4444",
                        marginBottom: "2px",
                      }}
                    >
                      {card.category}
                    </p>
                    <h4
                      style={{
                        fontSize: "12px",
                        fontWeight: 700,
                        lineHeight: 1.2,
                        color: "#ffffff",
                        margin: 0,
                        textShadow: "0 2px 6px rgba(0,0,0,0.8)",
                      }}
                    >
                      {card.title}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* Desktop: Stationary 3D Cylindrical Curved Deck */
        <div
          style={{
            position: "relative",
            zIndex: 10,
            width: "100%",
            maxWidth: "100vw",
            perspective: "1200px",
            perspectiveOrigin: "50% 40%",
            padding: "0 0 10px 0",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              gap: "clamp(10px, 1.4vw, 20px)",
              width: "100%",
              transformStyle: "preserve-3d",
              padding: "0 20px",
            }}
          >
            {cardsData.map((card, idx) => {
              const diff = idx - desktopActiveIndex;
              const isHovered = hoveredCard === idx;
              const isCenter = diff === 0;

              const rotateY = diff * -10.5;
              const translateZ = Math.cos(diff * 0.45) * 45 - 45;
              const scale = 1 - Math.abs(diff) * 0.045 + (isHovered ? 0.05 : 0);
              const translateY = Math.abs(diff) * 12 + (isHovered ? -12 : 0);
              const zIndex = 20 - Math.abs(diff) + (isHovered ? 15 : 0);

              return (
                <div
                  key={card.id}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    width: "clamp(145px, 13vw, 210px)",
                    height: "clamp(225px, 20vw, 310px)",
                    borderRadius: "20px",
                    overflow: "hidden",
                    cursor: "default",
                    border: isCenter
                      ? "1.5px solid rgba(255, 255, 255, 0.6)"
                      : "1px solid rgba(255, 255, 255, 0.22)",
                    boxShadow: isCenter
                      ? "0 24px 48px rgba(0,0,0,0.65), 0 0 20px rgba(255,255,255,0.15)"
                      : "0 16px 36px rgba(0,0,0,0.5)",
                    transform: `perspective(1200px) rotateY(${rotateY}deg) translateZ(${translateZ}px) translateY(${translateY}px) scale(${scale})`,
                    transformOrigin: "center bottom",
                    transition:
                      "transform 0.4s ease, border 0.3s ease, box-shadow 0.3s ease",
                    zIndex,
                    backgroundColor: "#16181d",
                  }}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      filter: isCenter
                        ? "brightness(1.05) contrast(1.05)"
                        : "brightness(0.9) contrast(1)",
                      transition: "transform 0.4s ease, filter 0.4s ease",
                      transform: isHovered ? "scale(1.06)" : "scale(1)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 50%, rgba(0,0,0,0.4) 100%)",
                      pointerEvents: "none",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: "16px 12px",
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 70%, transparent 100%)",
                      color: "#fff",
                      transition: "opacity 0.3s ease, transform 0.3s ease",
                      opacity: isCenter || isHovered ? 1 : 0.7,
                      transform: isCenter || isHovered ? "translateY(0)" : "translateY(4px)",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "10px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                        color: "#ef4444",
                        marginBottom: "3px",
                      }}
                    >
                      {card.category}
                    </p>
                    <h4
                      style={{
                        fontSize: "13px",
                        fontWeight: 700,
                        lineHeight: 1.25,
                        color: "#ffffff",
                        margin: 0,
                        textShadow: "0 2px 8px rgba(0,0,0,0.8)",
                      }}
                    >
                      {card.title}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
