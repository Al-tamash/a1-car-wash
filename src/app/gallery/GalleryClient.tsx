"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { X, ChevronLeft, ChevronRight, Car, Bike, Sparkles, LayoutGrid } from "lucide-react";

// Curated studio gallery images with verified categories
const GALLERY_PHOTOS = [
  // ── CAR WASH PHOTOS (Cars, SUVs, Lifts, Foam Bays) ──
  { id: 1, category: "car-wash", image: "/gallery/real-fortuner-studio-lights.png", alt: "White Toyota Fortuner in Detailing Studio under LED Lights at A1 Car Wash" },
  { id: 2, category: "car-wash", image: "/gallery/real-lift-seltos-red.png", alt: "Red Kia Seltos Hydraulic Ramp Lift & Chassis Cleanse at A1 Car Wash" },
  { id: 3, category: "car-wash", image: "/gallery/real-foam-audi-coupe.jpg", alt: "Audi Active Foam Wash at A1 Car Wash" },
  { id: 4, category: "car-wash", image: "/gallery/real-foam-sedan-thick.png", alt: "Sedan Active White Snow Foam Shampoo Bath at A1 Car Wash" },
  { id: 5, category: "car-wash", image: "/gallery/real-foam-black-suv.jpg", alt: "Black SUV Active Foam Wash & High-Pressure Hose Rinse at A1 Car Wash" },
  { id: 6, category: "car-wash", image: "/gallery/real-gleam-nissan-suv.jpg", alt: "Brand New Black Nissan SUV Delivery Detailing & Shine at A1 Car Wash" },
  { id: 7, category: "car-wash", image: "/gallery/real-foam-mercedes-suv.jpg", alt: "Mercedes-Benz Luxury SUV Active Snow Foam Bath at A1 Car Wash" },
  { id: 8, category: "car-wash", image: "/gallery/real-foam-ecosport.png", alt: "Ford EcoSport Active Foam Wash inside Studio at A1 Car Wash" },
  { id: 9, category: "car-wash", image: "/gallery/real-outdoor-ramp-wash.jpg", alt: "Dual Hydraulic Ramp Outdoor Chassis Jet Wash at A1 Car Wash" },
  { id: 10, category: "car-wash", image: "/gallery/real-lift-ford.jpg", alt: "Ford Figo Underbody Chassis Wash on Hydraulic Lift at A1 Car Wash" },
  { id: 11, category: "car-wash", image: "/gallery/interior-deep-cleaning-card.jpg", alt: "Maruti Baleno Interior Deep Cleaning & Vacuuming on Ramp at A1 Car Wash" },
  { id: 12, category: "car-wash", image: "/gallery/real-bay-sedan-wash.jpg", alt: "Sedan Pressure Jet Rinse & Wash Bay Service Board at A1 Car Wash" },
  { id: 13, category: "car-wash", image: "/gallery/real-foam-i10-lift.jpg", alt: "Hyundai Grand i10 Hydraulic Lift Wash at A1 Car Wash" },
  { id: 14, category: "car-wash", image: "/gallery/real-lift-nano.png", alt: "Yellow Hatchback Hydraulic Ramp Wash Bay at A1 Car Wash" },
  { id: 15, category: "car-wash", image: "/gallery/real-dual-lift-wide.jpg", alt: "Dual Car Hydraulic Jack Lift Wash Station at A1 Car Wash" },
  { id: 16, category: "car-wash", image: "/gallery/real-foam-ertiga.jpg", alt: "Maruti Suzuki Ertiga Active Snow Foam Shampoo Bath at A1 Car Wash" },
  { id: 17, category: "car-wash", image: "/gallery/real-dual-lift-close.jpg", alt: "Dual Hydraulic Lifts Underbody Pressure Wash at A1 Car Wash" },
  { id: 18, category: "car-wash", image: "/gallery/real-foam-ertiga-blue.jpg", alt: "Blue Ertiga Full Body Foam Wash & Detailing at A1 Car Wash" },
  { id: 19, category: "car-wash", image: "/gallery/real-lift-mercedes.jpg", alt: "Mercedes-Benz on Hydraulic Jack Lift Wash at A1 Car Wash" },
  { id: 20, category: "car-wash", image: "/gallery/real-lift-xuv700.png", alt: "Mahindra XUV700 Hydraulic Ramp Underbody Wash at A1 Car Wash" },
  { id: 21, category: "car-wash", image: "/gallery/real-lift-fortuner.png", alt: "Toyota Fortuner on Hydraulic Jack Lift Station at A1 Car Wash" },
  { id: 22, category: "car-wash", image: "/gallery/real-wash-fortuner.jpg", alt: "Toyota Fortuner High-Pressure Foam & Water Wash at A1 Car Wash" },
  { id: 23, category: "car-wash", image: "/gallery/real-wash-tata.png", alt: "Tata Hatchback Active Foam Wash inside Wash Bay at A1 Car Wash" },
  { id: 24, category: "car-wash", image: "/gallery/real-wash-nexon.jpg", alt: "Tata Nexon Exterior Detailing and Microfiber Finish at A1 Car Wash" },
  { id: 25, category: "car-wash", image: "/gallery/real-brezza-wash.jpg", alt: "Maruti Brezza Wash Bay at A1 Car Wash" },
  { id: 26, category: "car-wash", image: "/gallery/real-venue-interior-boot.jpg", alt: "Hyundai Venue Boot & Interior Vacuuming at A1 Car Wash" },
  { id: 27, category: "car-wash", image: "/gallery/real-lift-creta-black.jpg", alt: "Hyundai Creta Black Hydraulic Lift Wash at A1 Car Wash" },
  { id: 28, category: "car-wash", image: "/gallery/real-interior-baleno.jpg", alt: "Baleno Interior Detailing at A1 Car Wash" },
  { id: 29, category: "car-wash", image: "/gallery/real-interior-thar-brown.png", alt: "Mahindra Thar Interior Deep Cleaning at A1 Car Wash" },
  { id: 30, category: "car-wash", image: "/gallery/real-lift-thar-grey.jpg", alt: "Mahindra Thar Ramp Wash at A1 Car Wash" },
  { id: 31, category: "car-wash", image: "/gallery/real-gleam-tata-harrier.jpg", alt: "Tata Harrier Studio Detailing at A1 Car Wash" },
  { id: 32, category: "car-wash", image: "/gallery/real-storefront.png", alt: "A1 Car Wash Studio Front & Detailing Center in Hyderabad" },

  // ── TEFLON COATING PHOTOS ──
  { id: 33, category: "teflon-coating", image: "/gallery/teflon-mercedes-eclass.png", alt: "Mercedes-Benz E-Class Teflon Coating Finish at A1 Car Wash" },
  { id: 41, category: "teflon-coating", image: "/gallery/teflon-tata-nexon-black.png", alt: "Tata Nexon Black Teflon Protective Coating at A1 Car Wash" },
  { id: 42, category: "teflon-coating", image: "/gallery/teflon-tata-nexon-white.png", alt: "White Tata Nexon Teflon Protective Coating at A1 Car Wash" },
  { id: 43, category: "teflon-coating", image: "/gallery/teflon-porsche-blue.png", alt: "Blue Porsche Cayman High-Gloss Teflon Coating at A1 Car Wash" },
  { id: 44, category: "teflon-coating", image: "/gallery/teflon-skoda-superb-black.png", alt: "Skoda Superb Black Teflon Paint Protection at A1 Car Wash" },
  { id: 45, category: "teflon-coating", image: "/gallery/underbody-antirust-coating.jpg", alt: "Underbody Anti-Rust Coating at A1 Car Wash" },
  { id: 46, category: "teflon-coating", image: "/gallery/underbody-antirust-work.jpg", alt: "Underbody Anti-Rust Treatment Work at A1 Car Wash" },

  // ── BIKE WASH PHOTOS (100% Genuine Two-Wheelers) ──
  { id: 34, category: "bike-wash", image: "/gallery/royal-enfield-bullet-military.png", alt: "Royal Enfield Bullet Military Green Detailing at A1 Car Wash" },
  { id: 35, category: "bike-wash", image: "/gallery/royal-enfield-interceptor-650.png", alt: "Royal Enfield Interceptor 650 Detailing at A1 Car Wash" },
  { id: 36, category: "bike-wash", image: "/gallery/bike-wash-card.jpg", alt: "Honda H'ness CB350 Bike Wash & Pressure Spray Bay at A1 Car Wash" },
  { id: 37, category: "bike-wash", image: "/gallery/real-bullet-pressure-wash.jpg", alt: "Royal Enfield Bullet Pressure Jet Wash at A1 Car Wash" },
  { id: 38, category: "bike-wash", image: "/gallery/real-r15-sports-detailing.jpg", alt: "Yamaha R15 Sports Bike Detailing at A1 Car Wash" },
  { id: 39, category: "bike-wash", image: "/gallery/real-ktm-rc-wash.jpg", alt: "Sports Bike Active Foam Wash at A1 Car Wash" },
  { id: 40, category: "bike-wash", image: "/gallery/real-scooter-foam-bay.jpg", alt: "Royal Enfield & Scooters Active Foam Wash Bay at A1 Car Wash" },
];

const CATEGORIES = [
  { id: "all", label: "All Photos", icon: <LayoutGrid size={15} /> },
  { id: "car-wash", label: "Car Wash", icon: <Car size={15} /> },
  { id: "bike-wash", label: "Bike Wash", icon: <Bike size={15} /> },
  { id: "teflon-coating", label: "Teflon Coating", icon: <Sparkles size={15} /> },
];

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  // Filtered photos based on active category
  const filteredPhotos = activeCategory === "all"
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((photo) => photo.category === activeCategory);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === "Escape") {
        setSelectedPhotoIndex(null);
      } else if (e.key === "ArrowLeft") {
        setSelectedPhotoIndex((prev) =>
          prev !== null ? (prev - 1 + filteredPhotos.length) % filteredPhotos.length : null
        );
      } else if (e.key === "ArrowRight") {
        setSelectedPhotoIndex((prev) =>
          prev !== null ? (prev + 1) % filteredPhotos.length : null
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhotoIndex, filteredPhotos]);

  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#ffffff" }}>
      {/* 1. Navbar */}
      <Navbar />

      {/* ── GALLERY HERO HEADER ── */}
      <section
        style={{
          padding: "115px 20px 36px",
          background: "linear-gradient(180deg, #fef2f2 0%, #ffffff 100%)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: "#fee2e2",
              color: "#dc2626",
              borderRadius: "9999px",
              padding: "5px 16px",
              fontSize: "12px",
              fontWeight: 800,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "14px",
            }}
          >
            <Sparkles size={13} />
            <span>REAL HYDERABAD STUDIO WORK</span>
          </div>

          <h1
            style={{
              fontSize: "clamp(2rem, 3.2vw, 2.75rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "#0f172a",
              marginBottom: "14px",
            }}
          >
            Our Work <span style={{ color: "#dc2626" }}>Gallery</span>
          </h1>

          <p
            style={{
              fontSize: "16px",
              color: "#475569",
              lineHeight: 1.6,
              margin: "0 auto",
              maxWidth: "600px",
            }}
          >
            Explore real transformations from our Hyderabad detailing bays — hydraulic jack lift washes, snow foam baths, Teflon glaze &amp; superbike detailing.
          </p>
        </div>
      </section>

      {/* Gallery Section with Category Filter */}
      <section style={{ padding: "10px 0 72px", background: "#f8fafc", flex: 1 }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 24px" }}>
          
          {/* Category Filter Tabs */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              marginBottom: "32px",
              flexWrap: "wrap",
            }}
          >
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count = cat.id === "all"
                ? GALLERY_PHOTOS.length
                : GALLERY_PHOTOS.filter((p) => p.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setSelectedPhotoIndex(null);
                  }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 22px",
                    borderRadius: "9999px",
                    fontSize: "14px",
                    fontWeight: 700,
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                    border: isActive ? "1.5px solid #dc2626" : "1.5px solid #e2e8f0",
                    background: isActive ? "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)" : "#ffffff",
                    color: isActive ? "#ffffff" : "#334155",
                    boxShadow: isActive ? "0 6px 18px rgba(220, 38, 38, 0.3)" : "0 2px 8px rgba(15, 23, 42, 0.04)",
                  }}
                >
                  {cat.icon}
                  <span>{cat.label}</span>
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 800,
                      padding: "2px 7px",
                      borderRadius: "9999px",
                      background: isActive ? "rgba(255, 255, 255, 0.25)" : "#f1f5f9",
                      color: isActive ? "#ffffff" : "#64748b",
                    }}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Pure Gallery Images Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: "16px",
            }}
          >
            {filteredPhotos.map((photo, idx) => (
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
                  (selectedPhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length
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
                setSelectedPhotoIndex((selectedPhotoIndex + 1) % filteredPhotos.length);
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

            {/* Image */}
            <div
              style={{
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow: "0 25px 60px rgba(0,0,0,0.6)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                background: "#000000",
              }}
            >
              {filteredPhotos[selectedPhotoIndex] && (
                <img
                  src={filteredPhotos[selectedPhotoIndex].image}
                  alt={filteredPhotos[selectedPhotoIndex].alt}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "82vh",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              )}
            </div>
          </div>
        </div>
      )}

      {/* 4. Footer */}
      <Footer />
    </main>
  );
}
