"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Curated studio gallery images
const GALLERY_PHOTOS = [
  { id: 1, image: "/gallery/real-fortuner-studio-lights.png", alt: "White Toyota Fortuner in Detailing Studio under LED Lights" },
  { id: 2, image: "/gallery/real-lift-seltos-red.png", alt: "Red Kia Seltos Hydraulic Ramp Lift & Chassis Cleanse" },
  { id: 3, image: "/gallery/real-cruiser-bike-wash.jpg", alt: "Cruiser Motorcycle High-Pressure Foam & Mist Wash" },
  { id: 4, image: "/gallery/real-foam-sedan-thick.png", alt: "Sedan Active White Snow Foam Shampoo Bath" },
  { id: 5, image: "/gallery/real-foam-black-suv.jpg", alt: "Black SUV Active Foam Wash & High-Pressure Hose Rinse" },
  { id: 6, image: "/gallery/real-gleam-nissan-suv.jpg", alt: "Brand New Black Nissan SUV Delivery Detailing & Shine" },
  { id: 7, image: "/gallery/real-foam-mercedes-suv.jpg", alt: "Mercedes-Benz Luxury SUV Active Snow Foam Bath" },
  { id: 8, image: "/gallery/bike-wash-card.jpg", alt: "Honda H'ness CB350 Bike Wash & Pressure Spray Bay" },
  { id: 9, image: "/gallery/real-scooters-foam.jpg", alt: "Activa Scooters & Bikes Active Foam Wash inside Studio" },
  { id: 10, image: "/gallery/real-outdoor-ramp-wash.jpg", alt: "Dual Hydraulic Ramp Outdoor Chassis Jet Wash" },
  { id: 11, image: "/gallery/real-lift-ford.jpg", alt: "Ford Figo Underbody Chassis Wash on Hydraulic Lift" },
  { id: 12, image: "/gallery/interior-deep-cleaning-card.jpg", alt: "Maruti Baleno Interior Deep Cleaning & Vacuuming on Ramp" },
  { id: 13, image: "/gallery/real-bay-sedan-wash.jpg", alt: "Sedan Pressure Jet Rinse & Wash Bay Service Board" },
  { id: 14, image: "/gallery/real-bikes-lineup.jpg", alt: "Two-Wheeler Commuter Bike Service Bay" },
  { id: 15, image: "/gallery/real-lift-nano.png", alt: "Yellow Hatchback Hydraulic Ramp Wash Bay" },
  { id: 16, image: "/gallery/real-dual-lift-wide.jpg", alt: "Dual Car Hydraulic Jack Lift Wash Station" },
  { id: 17, image: "/gallery/real-foam-ertiga.jpg", alt: "Maruti Suzuki Ertiga Active Snow Foam Shampoo Bath" },
  { id: 18, image: "/gallery/real-dual-lift-close.jpg", alt: "Dual Hydraulic Lifts Underbody Pressure Wash" },
  { id: 19, image: "/gallery/real-foam-ertiga-blue.jpg", alt: "Blue Ertiga Full Body Foam Wash & Detailing" },
  { id: 20, image: "/gallery/real-lift-mercedes.jpg", alt: "Mercedes-Benz on Hydraulic Jack Lift Wash" },
  { id: 21, image: "/gallery/real-lift-xuv700.png", alt: "Mahindra XUV700 Hydraulic Ramp Underbody Wash" },
  { id: 22, image: "/gallery/real-lift-fortuner.png", alt: "Toyota Fortuner on Hydraulic Jack Lift Station" },
  { id: 23, image: "/gallery/real-wash-fortuner.jpg", alt: "Toyota Fortuner High-Pressure Foam & Water Wash" },
  { id: 24, image: "/gallery/real-wash-tata.png", alt: "Tata Hatchback Active Foam Wash inside Wash Bay" },
  { id: 25, image: "/gallery/real-wash-nexon.jpg", alt: "Tata Nexon Exterior Detailing and Microfiber Finish" },
  { id: 26, image: "/gallery/real-storefront.png", alt: "A1 Car Wash Studio Front & Detailing Center" },
];

export default function GalleryPage() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === "Escape") {
        setSelectedPhotoIndex(null);
      } else if (e.key === "ArrowLeft") {
        setSelectedPhotoIndex((prev) =>
          prev !== null ? (prev - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length : null
        );
      } else if (e.key === "ArrowRight") {
        setSelectedPhotoIndex((prev) =>
          prev !== null ? (prev + 1) % GALLERY_PHOTOS.length : null
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhotoIndex]);

  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#ffffff" }}>
      {/* 1. Navbar */}
      <Navbar />

      {/* Pure Gallery Images Grid — Zero text on images */}
      <section style={{ padding: "105px 0 72px", background: "#f8fafc", flex: 1 }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 24px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: "16px",
            }}
          >
            {GALLERY_PHOTOS.map((photo, idx) => (
              <div
                key={photo.id}
                onClick={() => setSelectedPhotoIndex(idx)}
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  background: "#0f172a",
                  boxShadow: "0 4px 16px rgba(15, 23, 42, 0.08)",
                  border: "1px solid #e2e8f0",
                  cursor: "pointer",
                  aspectRatio: "1.12/1",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px) scale(1.02)";
                  e.currentTarget.style.boxShadow = "0 12px 28px rgba(220, 38, 38, 0.16)";
                  e.currentTarget.style.borderColor = "#fca5a5";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 16px rgba(15, 23, 42, 0.06)";
                  e.currentTarget.style.borderColor = "#e2e8f0";
                }}
              >
                <img
                  src={photo.image}
                  alt={photo.alt}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal — Clean Full-size View with No Overlay Text on Image */}
      {selectedPhotoIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedPhotoIndex(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(15, 23, 42, 0.94)",
            backdropFilter: "blur(12px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "1050px",
              width: "100%",
              maxHeight: "90vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhotoIndex(null)}
              aria-label="Close photo"
              style={{
                position: "absolute",
                top: "-48px",
                right: "0",
                zIndex: 20,
                background: "rgba(255, 255, 255, 0.15)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                color: "#ffffff",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#dc2626";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
              }}
            >
              <X size={20} />
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPhotoIndex(
                  (selectedPhotoIndex - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length
                );
              }}
              aria-label="Previous image"
              style={{
                position: "absolute",
                left: "-52px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 20,
                background: "rgba(255, 255, 255, 0.15)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                color: "#ffffff",
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#dc2626";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
              }}
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPhotoIndex((selectedPhotoIndex + 1) % GALLERY_PHOTOS.length);
              }}
              aria-label="Next image"
              style={{
                position: "absolute",
                right: "-52px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 20,
                background: "rgba(255, 255, 255, 0.15)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                color: "#ffffff",
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#dc2626";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
              }}
            >
              <ChevronRight size={24} />
            </button>

            {/* Image — Clean Full Size Without Any Text Overlay */}
            <div
              style={{
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow: "0 25px 60px rgba(0,0,0,0.6)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                background: "#000000",
              }}
            >
              <img
                src={GALLERY_PHOTOS[selectedPhotoIndex].image}
                alt={GALLERY_PHOTOS[selectedPhotoIndex].alt}
                style={{
                  maxWidth: "100%",
                  maxHeight: "82vh",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* 4. Footer */}
      <Footer />
    </main>
  );
}
