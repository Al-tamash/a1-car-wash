"use client";

import React, { useState } from "react";
import { Sparkles, X, ZoomIn, ArrowRight } from "lucide-react";
import Link from "next/link";

interface GalleryItem {
  id: string;
  image: string;
  alt: string;
}

const ALL_WORKS_PHOTOS: GalleryItem[] = [
  {
    id: "g-1",
    image: "/gallery/real-foam-mercedes-suv.jpg",
    alt: "Active snow foam wash on Mercedes SUV",
  },
  {
    id: "g-2",
    image: "/gallery/interior-deep-cleaning-card.jpg",
    alt: "Deep steam interior extraction and leather care",
  },
  {
    id: "g-3",
    image: "/gallery/about-interceptor-bike.jpg",
    alt: "Two wheeler foam wash and chain degreasing",
  },
  {
    id: "g-4",
    image: "/gallery/real-lift-mercedes.jpg",
    alt: "Underbody mud wash on hydraulic ramp lift",
  },
  {
    id: "g-5",
    image: "/gallery/real-dual-lift-wide.jpg",
    alt: "Dual hydraulic car wash station in Hyderabad studio",
  },
  {
    id: "g-6",
    image: "/gallery/about-fortuner-studio.jpg",
    alt: "Toyota Fortuner 9H ceramic coating under studio lights",
  },
  {
    id: "g-7",
    image: "/gallery/real-wash-fortuner.jpg",
    alt: "High pressure rinse on white SUV",
  },
  {
    id: "g-8",
    image: "/gallery/real-lift-seltos-red.png",
    alt: "Red Kia Seltos Hydraulic Ramp Lift & Chassis Cleanse",
  },
];

export default function GallerySection() {
  const [lightboxImage, setLightboxImage] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery-section" className="gallery-ref-root">
      <div className="gallery-ref-container">
        {/* ── Profile/Studio Header ── */}
        <div className="gallery-ref-header">
          {/* Top Icon Badge */}
          <div className="gallery-avatar-wrap">
            <div className="gallery-avatar-inner">
              <Sparkles size={20} color="#ffffff" />
            </div>
          </div>

          <h2 className="gallery-ref-title">
            Our Workshop <span style={{ color: "#ef4444" }}>Gallery</span>
          </h2>
          <p className="gallery-ref-subtitle">
            Live snapshots from our hydraulic lift ramps, active snow foam bays, and detailing studio in Hyderabad.
          </p>
        </div>

        {/* ── All Works Photo Mosaic Grid (Zero text overlay on images) ── */}
        <div className="gallery-mosaic-wrap">
          {/* Group 1: Asymmetric Split (Left Stack + Right Tall Portrait) */}
          <div className="gallery-group-split">
            {/* Left Column Stack */}
            <div className="gallery-split-left-col">
              {/* Top Medium Card */}
              {ALL_WORKS_PHOTOS[0] && (
                <div
                  className="gallery-item-card card-top-med"
                  onClick={() => setLightboxImage(ALL_WORKS_PHOTOS[0])}
                >
                  <img
                    src={ALL_WORKS_PHOTOS[0].image}
                    alt={ALL_WORKS_PHOTOS[0].alt}
                    loading="lazy"
                  />
                  <div className="gallery-item-overlay">
                    <div className="gallery-zoom-icon">
                      <ZoomIn size={18} />
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom 2 Side-by-Side Cards */}
              <div className="gallery-split-bottom-row">
                {ALL_WORKS_PHOTOS[1] && (
                  <div
                    className="gallery-item-card card-half"
                    onClick={() => setLightboxImage(ALL_WORKS_PHOTOS[1])}
                  >
                    <img
                      src={ALL_WORKS_PHOTOS[1].image}
                      alt={ALL_WORKS_PHOTOS[1].alt}
                      loading="lazy"
                    />
                    <div className="gallery-item-overlay">
                      <div className="gallery-zoom-icon">
                        <ZoomIn size={18} />
                      </div>
                    </div>
                  </div>
                )}

                {ALL_WORKS_PHOTOS[2] && (
                  <div
                    className="gallery-item-card card-half"
                    onClick={() => setLightboxImage(ALL_WORKS_PHOTOS[2])}
                  >
                    <img
                      src={ALL_WORKS_PHOTOS[2].image}
                      alt={ALL_WORKS_PHOTOS[2].alt}
                      loading="lazy"
                    />
                    <div className="gallery-item-overlay">
                      <div className="gallery-zoom-icon">
                        <ZoomIn size={18} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Tall Column Card */}
            {ALL_WORKS_PHOTOS[3] && (
              <div
                className="gallery-item-card card-tall-right"
                onClick={() => setLightboxImage(ALL_WORKS_PHOTOS[3])}
              >
                <img
                  src={ALL_WORKS_PHOTOS[3].image}
                  alt={ALL_WORKS_PHOTOS[3].alt}
                  loading="lazy"
                />
                <div className="gallery-item-overlay">
                  <div className="gallery-zoom-icon">
                    <ZoomIn size={18} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Group 2: Full-Width Feature Panoramic Photo */}
          {ALL_WORKS_PHOTOS[4] && (
            <div
              className="gallery-item-card card-full-wide"
              onClick={() => setLightboxImage(ALL_WORKS_PHOTOS[4])}
            >
              <img
                src={ALL_WORKS_PHOTOS[4].image}
                alt={ALL_WORKS_PHOTOS[4].alt}
                loading="lazy"
              />
              <div className="gallery-item-overlay">
                <div className="gallery-zoom-icon">
                  <ZoomIn size={18} />
                </div>
              </div>
            </div>
          )}

          {/* Group 3: Balanced 2-Column Split */}
          <div className="gallery-group-pair">
            {ALL_WORKS_PHOTOS[5] && (
              <div
                className="gallery-item-card card-pair-item"
                onClick={() => setLightboxImage(ALL_WORKS_PHOTOS[5])}
              >
                <img
                  src={ALL_WORKS_PHOTOS[5].image}
                  alt={ALL_WORKS_PHOTOS[5].alt}
                  loading="lazy"
                />
                <div className="gallery-item-overlay">
                  <div className="gallery-zoom-icon">
                    <ZoomIn size={18} />
                  </div>
                </div>
              </div>
            )}

            {ALL_WORKS_PHOTOS[6] && (
              <div
                className="gallery-item-card card-pair-item"
                onClick={() => setLightboxImage(ALL_WORKS_PHOTOS[6])}
              >
                <img
                  src={ALL_WORKS_PHOTOS[6].image}
                  alt={ALL_WORKS_PHOTOS[6].alt}
                  loading="lazy"
                />
                <div className="gallery-item-overlay">
                  <div className="gallery-zoom-icon">
                    <ZoomIn size={18} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── CTA Button to Full Gallery Page ── */}
        <div className="gallery-footer-cta">
          <Link href="/gallery" className="gallery-btn-explore">
            <span>View All Studio Photos</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* ── Lightbox Modal (Clean Full Image) ── */}
      {lightboxImage && (
        <div
          className="gallery-lightbox-backdrop"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="gallery-lightbox-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="gallery-lightbox-close"
              onClick={() => setLightboxImage(null)}
              aria-label="Close image"
            >
              <X size={20} />
            </button>
            <img
              src={lightboxImage.image}
              alt={lightboxImage.alt}
              className="gallery-lightbox-img"
            />
          </div>
        </div>
      )}

      <style>{`
        .gallery-ref-root {
          position: relative;
          background: #ffffff;
          padding: 85px 20px 95px;
          overflow: hidden;
          box-sizing: border-box;
          border-top: 1px solid #f1f5f9;
        }

        .gallery-ref-container {
          max-width: 1040px;
          margin: 0 auto;
        }

        /* ── Header ── */
        .gallery-ref-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 36px;
        }

        .gallery-avatar-wrap {
          margin-bottom: 14px;
        }

        .gallery-avatar-inner {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 14px rgba(239, 68, 68, 0.35);
        }

        .gallery-ref-title {
          font-size: clamp(2rem, 3.2vw, 2.75rem);
          font-weight: 600;
          color: #0f172a;
          letter-spacing: -0.025em;
          margin: 0 0 10px;
          line-height: 1.2;
        }

        .gallery-ref-subtitle {
          font-size: 15px;
          color: #64748b;
          max-width: 580px;
          margin: 0;
          line-height: 1.6;
        }

        /* ── Mosaic Wrap ── */
        .gallery-mosaic-wrap {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        /* ── Base Card ── */
        .gallery-item-card {
          position: relative;
          border-radius: 14px;
          overflow: hidden;
          background: #0f172a;
          cursor: pointer;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease;
          border: 1px solid #e2e8f0;
          box-shadow: 0 3px 12px rgba(15, 23, 42, 0.05);
        }

        .gallery-item-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .gallery-item-card:hover img {
          transform: scale(1.04);
        }

        .gallery-item-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 28px rgba(239, 68, 68, 0.16);
          border-color: #fca5a5;
        }

        /* Hover Overlay */
        .gallery-item-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 50%, rgba(15, 23, 42, 0.6) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.25s ease;
        }

        .gallery-item-card:hover .gallery-item-overlay {
          opacity: 1;
        }

        .gallery-zoom-icon {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: rgba(239, 68, 68, 0.9);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
          transform: scale(0.85);
          transition: transform 0.25s ease;
        }

        .gallery-item-card:hover .gallery-zoom-icon {
          transform: scale(1);
        }

        /* ── Group 1: Asymmetric Split ── */
        .gallery-group-split {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 16px;
          min-height: 440px;
        }

        .gallery-split-left-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .card-top-med {
          height: 250px;
        }

        .gallery-split-bottom-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          height: 174px;
        }

        .card-half {
          height: 100%;
        }

        .card-tall-right {
          height: 100%;
          min-height: 440px;
        }

        /* ── Group 2: Full Panoramic ── */
        .card-full-wide {
          height: 310px;
          width: 100%;
        }

        /* ── Group 3: Pair ── */
        .gallery-group-pair {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          height: 250px;
        }

        .card-pair-item {
          height: 100%;
        }

        /* ── Footer CTA ── */
        .gallery-footer-cta {
          margin-top: 36px;
          display: flex;
          justify-content: center;
        }

        .gallery-btn-explore {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 13px 28px;
          background: #0f172a;
          color: #ffffff;
          font-size: 14px;
          font-weight: 700;
          border-radius: 999px;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(15, 23, 42, 0.15);
          transition: all 0.25s ease;
        }

        .gallery-btn-explore:hover {
          background: #dc2626;
          box-shadow: 0 6px 20px rgba(220, 38, 38, 0.35);
          transform: translateY(-2px);
        }

        /* ── Lightbox ── */
        .gallery-lightbox-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.94);
          backdrop-filter: blur(10px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .gallery-lightbox-modal {
          position: relative;
          max-width: 960px;
          width: 100%;
          max-height: 90vh;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.15);
          background: #000000;
        }

        .gallery-lightbox-close {
          position: absolute;
          top: 14px;
          right: 14px;
          z-index: 10;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
        }

        .gallery-lightbox-close:hover {
          background: #dc2626;
        }

        .gallery-lightbox-img {
          width: 100%;
          max-height: 85vh;
          object-fit: contain;
          display: block;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .gallery-group-split {
            grid-template-columns: 1fr;
            min-height: auto;
          }
          .card-tall-right {
            height: 250px;
            min-height: 250px;
          }
          .card-full-wide {
            height: 220px;
          }
          .gallery-group-pair {
            grid-template-columns: 1fr;
            height: auto;
          }
          .card-pair-item {
            height: 220px;
          }
        }
      `}</style>
    </section>
  );
}
