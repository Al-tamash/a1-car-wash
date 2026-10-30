"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { StoreLocation } from "@/data/storesData";
import {
  ShieldCheck,
  Droplets,
  Clock,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Play,
  X,
} from "lucide-react";
import "./HeroSection.css";

interface HeroSectionProps {
  store?: StoreLocation;
  badge?: string;
  title?: React.ReactNode;
  tagline?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

interface HeroGalleryItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  tag: string;
  accentText: string;
}

const HERO_GALLERY_ITEMS: HeroGalleryItem[] = [
  {
    id: "wheels",
    title: "Wheel & Alloy Detailing",
    subtitle: "Iron-decon, alloy scrub & tire gloss coating",
    image: "/hero/hero-indian-wheel-detailing.jpg",
    alt: "Car wash technician scrubbing alloy wheel of SUV",
    tag: "WHEEL & UNDERBODY",
    accentText: "Alloy Detailing",
  },
  {
    id: "bike",
    title: "Two-Wheeler Precision Wash",
    subtitle: "Safe foam wash, chain lube & full bike shine",
    image: "/hero/hero-indian-bike-wash.jpg",
    alt: "Technician pressure washing Royal Enfield motorcycle with foam",
    tag: "SUPERBIKE WASH",
    accentText: "2-Wheeler Spa",
  },
  {
    id: "interior",
    title: "Deep Interior Steam Sanitization",
    subtitle: "Leather conditioning, vacuum & germ disinfection",
    image: "/hero/hero-indian-interior-steam.jpg",
    alt: "Car detailing professional steam cleaning car interior",
    tag: "INTERIOR DETAILING",
    accentText: "Steam Spa",
  },
  {
    id: "exterior",
    title: "High-Pressure Exterior Wash",
    subtitle: "Precision water jets & deep grime removal",
    image: "/hero/hero-indian-pressure-wash.jpg",
    alt: "Car wash technician pressure washing car with snow foam",
    tag: "EXTERIOR FOAM WASH",
    accentText: "Snow Foam & Jet",
  },
  {
    id: "foam",
    title: "Active Snow Foam Therapy",
    subtitle: "Thick touchless foam encapsulates dirt safely",
    image: "/hero/hero-indian-foam-wash.jpg",
    alt: "Technician applying thick snow foam on SUV in detailing bay",
    tag: "ACTIVE SNOW FOAM",
    accentText: "pH Neutral Foam",
  },
];

export default function HeroSection({
  store,
  badge,
  title,
  subtitle,
  primaryButtonText,
  primaryButtonHref,
}: HeroSectionProps = {}) {
  const [activeIndex, setActiveIndex] = useState(4);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const thumbnailsRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  // Repeat gallery items for smooth continuous infinite horizontal marquee scrolling
  const loopedItems = [
    ...HERO_GALLERY_ITEMS,
    ...HERO_GALLERY_ITEMS,
    ...HERO_GALLERY_ITEMS,
    ...HERO_GALLERY_ITEMS,
  ];

  // Auto-cycle through hero images automatically every 2 seconds
  useEffect(() => {
    if (isVideoModalOpen || isDragging || isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_GALLERY_ITEMS.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isVideoModalOpen, isDragging, isPaused]);

  // Smooth continuous automatic marquee scroll loop
  useEffect(() => {
    const el = thumbnailsRef.current;
    if (!el) return;

    let animationFrameId: number;
    const scrollSpeed = 0.75; // smooth marquee pixels per frame

    const autoScrollLoop = () => {
      if (!isPaused && !isDragging && el) {
        el.scrollLeft += scrollSpeed;
        // Seamless marquee loop reset
        if (el.scrollLeft >= (el.scrollWidth - el.clientWidth) / 2) {
          el.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(autoScrollLoop);
    };

    animationFrameId = requestAnimationFrame(autoScrollLoop);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused, isDragging]);

  // Mouse drag to scroll handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!thumbnailsRef.current) return;
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.pageX - thumbnailsRef.current.offsetLeft);
    setScrollLeftState(thumbnailsRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !thumbnailsRef.current) return;
    e.preventDefault();
    const x = e.pageX - thumbnailsRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    thumbnailsRef.current.scrollLeft = scrollLeftState - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
    setIsPaused(false);
  };

  const scrollLeft = () => {
    if (thumbnailsRef.current) {
      thumbnailsRef.current.scrollBy({ left: -260, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (thumbnailsRef.current) {
      thumbnailsRef.current.scrollBy({ left: 260, behavior: "smooth" });
    }
  };

  const activeItem = HERO_GALLERY_ITEMS[activeIndex];

  const bookingHref =
    primaryButtonHref ||
    (store ? `/stores/${store.slug}#booking` : "/contact");

  return (
    <section id="hero" className="cinematic-hero-root">
      {/* ── Ambient Background Glow & Tech Pattern ── */}
      <div className="hero-dark-backdrop">
        <div className="hero-red-radial-glow" />
        <div className="hero-red-bottom-glow" />
        <div className="hero-tech-dots" />
      </div>

      <div className="hero-main-container">
        {/* ════════ TOP SPLIT: COPY (LEFT) + MEDIA PLAYER (RIGHT) ════════ */}
        <div className="hero-split-grid">
          {/* ──── LEFT COPY COLUMN ──── */}
          <div className="hero-copy-column">
            {/* Eyebrow */}
            <div className="hero-eyebrow-wrap">
              <span className="hero-eyebrow-dash" />
              <span className="hero-eyebrow-text">
                {badge ||
                  (store
                    ? `${store.shortName.toUpperCase()} — CAR & BIKE CARE`
                    : "PREMIUM CAR & BIKE CARE")}
              </span>
            </div>

            {/* Headline */}
            <h1 className="hero-headline">
              {title ? (
                title
              ) : (
                <>
                  YOUR CAR. <br />
                  <span className="hero-headline-accent">OUR PASSION.</span>
                </>
              )}
            </h1>

            {/* Description */}
            <p className="hero-description">
              {subtitle
                ? subtitle
                : store
                ? store.heroSubheadline
                : "Professional car & bike wash with advanced snow foam, alloy detailing and eco-friendly care."}
            </p>

            {/* Primary Action Button */}
            <div className="hero-actions-row">
              <Link href={bookingHref} className="hero-btn-primary">
                <span>{primaryButtonText || "BOOK A WASH"}</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Editorial Social Proof / Trust Metrics (Clearly statistics, not buttons) */}
            <div className="hero-trust-metrics">
              <div className="hero-trust-item">
                <div className="hero-trust-num">
                  28+ <span className="hero-trust-unit">Yrs</span>
                </div>
                <div className="hero-trust-label">Legacy Since 1997</div>
              </div>

              <div className="hero-trust-divider" />

              <div className="hero-trust-item">
                <div className="hero-trust-num">2 Lakh+</div>
                <div className="hero-trust-label">Happy Customers</div>
              </div>

              <div className="hero-trust-divider" />

              <div className="hero-trust-item">
                <div className="hero-trust-num">4.9 ★</div>
                <div className="hero-trust-label">Across 6 Studios</div>
              </div>
            </div>

            {/* 3 Features Row (desktop only) */}
            <div className="hero-features-strip">
              <div className="hero-feature-pill">
                <div className="hero-feature-pill-icon">
                  <ShieldCheck size={16} />
                </div>
                <div className="hero-feature-pill-text">
                  <span className="hero-feature-pill-title">Safe &amp; Gentle</span>
                  <span className="hero-feature-pill-sub">Cleaning</span>
                </div>
              </div>

              <div className="hero-feature-pill">
                <div className="hero-feature-pill-icon">
                  <Droplets size={16} />
                </div>
                <div className="hero-feature-pill-text">
                  <span className="hero-feature-pill-title">Eco-Friendly</span>
                  <span className="hero-feature-pill-sub">Products</span>
                </div>
              </div>

              <div className="hero-feature-pill">
                <div className="hero-feature-pill-icon">
                  <Clock size={16} />
                </div>
                <div className="hero-feature-pill-text">
                  <span className="hero-feature-pill-title">Fast &amp; Reliable</span>
                  <span className="hero-feature-pill-sub">Service</span>
                </div>
              </div>
            </div>
          </div>

          {/* ──── RIGHT MEDIA PLAYER COLUMN ──── */}
          <div className="hero-media-column">
            <div className="hero-main-player-card">
              <img
                src={activeItem.image}
                alt={activeItem.alt}
                className="hero-main-player-img"
              />
              <div className="hero-player-vignette" />

              {/* Tag Badge */}
              <div className="hero-player-tag">
                <span className="hero-player-tag-dot" />
                <span>{activeItem.tag}</span>
              </div>

              {/* In-Player Navigation Arrows (Bottom-Right) */}
              <div className="hero-player-nav-arrows">
                <button
                  type="button"
                  className="hero-player-arrow-btn"
                  onClick={() =>
                    setActiveIndex(
                      (prev) =>
                        (prev - 1 + HERO_GALLERY_ITEMS.length) %
                        HERO_GALLERY_ITEMS.length
                    )
                  }
                  aria-label="Previous service"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  className="hero-player-arrow-btn"
                  onClick={() =>
                    setActiveIndex(
                      (prev) => (prev + 1) % HERO_GALLERY_ITEMS.length
                    )
                  }
                  aria-label="Next service"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ════════ BOTTOM THUMBNAIL ROW WITH AUTOMATIC CONTINUOUS HORIZONTAL SCROLL ════════ */}
        <div className="hero-thumbnails-container-wrap">
          {/* Horizontally Scrollable Deck */}
          <div
            ref={thumbnailsRef}
            className={`hero-thumbnails-row ${isDragging ? "is-dragging" : ""}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => {
              handleMouseUpOrLeave();
              setIsPaused(false);
            }}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onWheel={(e) => {
              if (thumbnailsRef.current) {
                thumbnailsRef.current.scrollLeft += e.deltaY;
              }
            }}
          >
            {loopedItems.map((item, index) => {
              const realIndex = index % HERO_GALLERY_ITEMS.length;
              const isSelected = realIndex === activeIndex;
              return (
                <div
                  key={`${item.id}-${index}`}
                  className={`hero-thumb-item ${isSelected ? "active" : ""}`}
                  onClick={() => {
                    if (!isDragging) {
                      setActiveIndex(realIndex);
                    }
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="hero-thumb-img"
                    loading="lazy"
                    draggable={false}
                  />
                  <div className="hero-thumb-label-bar">
                    <span>{item.accentText}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Optional Video Lightbox Modal ── */}
      {isVideoModalOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.85)",
            backdropFilter: "blur(8px)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "800px",
              background: "#111318",
              borderRadius: "20px",
              overflow: "hidden",
              border: "1px solid rgba(239, 68, 68, 0.4)",
              boxShadow: "0 25px 60px rgba(0,0,0,0.8)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoModalOpen(false)}
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                background: "rgba(0,0,0,0.7)",
                color: "#ffffff",
                border: "none",
                borderRadius: "50%",
                width: "36px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 10,
              }}
            >
              <X size={20} />
            </button>
            <div style={{ position: "relative", paddingTop: "56.25%" }}>
              <iframe
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="A1 Car Wash Video Showcase"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
