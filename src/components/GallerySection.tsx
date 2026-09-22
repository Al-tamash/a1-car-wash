"use client";

import React, { useState } from "react";
import { Sparkles, X, ZoomIn, ArrowRight } from "lucide-react";
import Link from "next/link";

interface GalleryItem {
  id: string;
  image: string;
  title: string;
  alt: string;
}

const ALL_WORKS_PHOTOS: GalleryItem[] = [
  {
    id: "g-1",
    image: "/gallery/royal-enfield-bullet-military.png",
    title: "Royal Enfield Bullet Military Green",
    alt: "Royal Enfield Bullet Military Green",
  },
  {
    id: "g-2",
    image: "/gallery/royal-enfield-interceptor-650.png",
    title: "Royal Enfield Interceptor 650",
    alt: "Royal Enfield Interceptor 650",
  },
  {
    id: "g-2",
    image: "/gallery/real-bullet-pressure-wash.jpg",
    title: "Royal Enfield Bullet Pressure Wash",
    alt: "Royal Enfield Bullet Pressure Wash",
  },
  {
    id: "g-3",
    image: "/gallery/real-r15-sports-detailing.jpg",
    title: "Yamaha & Superbike Detailing",
    alt: "Yamaha & Superbike Detailing",
  },
  {
    id: "g-4",
    image: "/gallery/real-cruiser-bike-wash.jpg",
    title: "Royal Enfield Precision Bike Spa",
    alt: "Royal Enfield Precision Bike Spa",
  },
  {
    id: "g-5",
    image: "/gallery/real-bike-wash.jpg",
    title: "Dedicated Two-Wheeler Wash Bay",
    alt: "Dedicated Two-Wheeler Wash Bay",
  },
  {
    id: "g-6",
    image: "/gallery/real-ktm-rc-wash.jpg",
    title: "KTM RC Sports Bike Wash",
    alt: "KTM RC Sports Bike Wash",
  },
  {
    id: "g-7",
    image: "/gallery/real-scooters-foam.jpg",
    title: "Activa & Scooter Foam Treatment",
    alt: "Activa & Scooter Foam Treatment",
  },
];

export default function GallerySection() {
  const [lightboxImage, setLightboxImage] = useState<GalleryItem | null>(null);

  const renderCard = (photo: GalleryItem, extraClass: string) => (
    <div
      className={`gallery-item-card ${extraClass}`}
      onClick={() => setLightboxImage(photo)}
    >
      <img
        src={photo.image}
        alt={photo.alt}
        loading="lazy"
      />

      {/* Red Zoom Badge */}
      <div className="gallery-card-content">
        <div className="gallery-zoom-badge">
          <ZoomIn size={14} color="#ffffff" />
        </div>
      </div>
    </div>
  );

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

        {/* ── All Works Photo Mosaic Grid ── */}
        <div className="gallery-mosaic-wrap">
          {/* Group 1: Asymmetric Split (Left Stack + Right Tall Portrait) */}
          <div className="gallery-group-split">
            {/* Left Column Stack */}
            <div className="gallery-split-left-col">
              {/* Top Medium Card */}
              {ALL_WORKS_PHOTOS[0] && renderCard(ALL_WORKS_PHOTOS[0], "card-top-med")}

              {/* Bottom 2 Side-by-Side Cards */}
              <div className="gallery-split-bottom-row">
                {ALL_WORKS_PHOTOS[1] && renderCard(ALL_WORKS_PHOTOS[1], "card-half")}
                {ALL_WORKS_PHOTOS[2] && renderCard(ALL_WORKS_PHOTOS[2], "card-half")}
              </div>
            </div>

            {/* Right Tall Column Card */}
            {ALL_WORKS_PHOTOS[3] && renderCard(ALL_WORKS_PHOTOS[3], "card-tall-right")}
          </div>

          {/* Group 2: Full-Width Feature Panoramic Photo */}
          {ALL_WORKS_PHOTOS[4] && renderCard(ALL_WORKS_PHOTOS[4], "card-full-wide")}

          {/* Group 3: Balanced 2-Column Split */}
          <div className="gallery-group-pair">
            {ALL_WORKS_PHOTOS[5] && renderCard(ALL_WORKS_PHOTOS[5], "card-pair-item")}
            {ALL_WORKS_PHOTOS[6] && renderCard(ALL_WORKS_PHOTOS[6], "card-pair-item")}
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

        /* ── Card Gradient Overlay & Content ── */
        .gallery-card-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.88) 0%, rgba(0, 0, 0, 0.4) 40%, rgba(0, 0, 0, 0) 75%);
          pointer-events: none;
          transition: background 0.3s ease;
        }

        .gallery-item-card:hover .gallery-card-gradient {
          background: linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.5) 45%, rgba(0, 0, 0, 0.05) 80%);
        }

        .gallery-card-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 12px 14px;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          gap: 8px;
          z-index: 2;
          pointer-events: none;
        }

        .gallery-card-title {
          font-size: 13px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.25;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.9);
          letter-spacing: -0.01em;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .gallery-zoom-badge {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 3px 8px rgba(239, 68, 68, 0.5);
          transition: transform 0.25s ease;
        }

        .gallery-item-card:hover .gallery-zoom-badge {
          transform: scale(1.12);
        }

        /* ── Group 1: Asymmetric Split ── */
        .gallery-group-split {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 16px;
          height: 440px;
          align-items: stretch;
        }

        .gallery-split-left-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .card-top-med {
          height: 250px;
        }

        .card-top-med .gallery-card-title {
          font-size: 15px;
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

        .card-half .gallery-card-title {
          font-size: 12px;
        }

        .card-tall-right {
          height: 100%;
        }

        .card-tall-right .gallery-card-title {
          font-size: 15px;
        }

        /* ── Group 2: Full Panoramic ── */
        .card-full-wide {
          height: 310px;
          width: 100%;
        }

        .card-full-wide .gallery-card-title {
          font-size: 16px;
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

        .card-pair-item .gallery-card-title {
          font-size: 14px;
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

        /* ── MOBILE VIEW: Matches Reference Second Image ── */
        @media (max-width: 768px) {
          .gallery-ref-root {
            padding: 50px 12px 60px;
          }

          .gallery-mosaic-wrap {
            gap: 10px;
          }

          /* Group 1: 2-column split — left stack + right tall */
          .gallery-group-split {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            height: auto !important;
            min-height: auto !important;
            align-items: stretch;
          }

          .gallery-split-left-col {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }

          /* Top wide card on left */
          .card-top-med {
            height: 175px !important;
            border-radius: 14px;
            flex-shrink: 0;
          }

          .card-top-med .gallery-card-content {
            padding: 10px 10px;
          }

          .card-top-med .gallery-card-title {
            font-size: 12px;
          }

          /* Bottom 2 mini cards */
          .gallery-split-bottom-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
            height: 145px !important;
            flex-shrink: 0;
          }

          .card-half {
            height: 100% !important;
            border-radius: 12px;
          }

          .card-half .gallery-card-content {
            padding: 6px 6px;
            gap: 4px;
          }

          .card-half .gallery-card-title {
            font-size: 9px;
            font-weight: 700;
            line-height: 1.2;
          }

          .card-half .gallery-zoom-badge {
            width: 20px;
            height: 20px;
            flex-shrink: 0;
          }

          .card-half .gallery-zoom-badge svg {
            width: 10px;
            height: 10px;
          }

          /* Right tall portrait card — spans full left column height */
          .card-tall-right {
            height: 330px !important;
            min-height: unset !important;
            border-radius: 14px;
            align-self: stretch;
          }

          .card-tall-right .gallery-card-content {
            padding: 12px 10px;
          }

          .card-tall-right .gallery-card-title {
            font-size: 13px;
          }

          /* Group 2: Full Panoramic Wide Card */
          .card-full-wide {
            height: 190px !important;
            border-radius: 14px;
          }

          .card-full-wide .gallery-card-content {
            padding: 12px 14px;
          }

          .card-full-wide .gallery-card-title {
            font-size: 14px;
          }

          /* Group 3: 2 Equal Cards Side-by-Side */
          .gallery-group-pair {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            height: 185px !important;
          }

          .card-pair-item {
            height: 100% !important;
            border-radius: 14px;
          }

          .card-pair-item .gallery-card-content {
            padding: 10px 10px;
          }

          .card-pair-item .gallery-card-title {
            font-size: 12px;
          }

          /* Zoom badge size on mobile */
          .gallery-zoom-badge {
            width: 26px;
            height: 26px;
            flex-shrink: 0;
          }

          .gallery-zoom-badge svg {
            width: 13px;
            height: 13px;
          }
        }
      `}</style>
    </section>
  );
}
