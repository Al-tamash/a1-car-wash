"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown, MapPin, Check } from "lucide-react";
import Link from "next/link";
import { STORES_DATA } from "@/data/storesData";

interface NavbarProps {
  currentStoreSlug?: string;
  solid?: boolean;
}

export default function Navbar({ currentStoreSlug, solid }: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [storesDropdownOpen, setStoresDropdownOpen] = useState(false);
  const [mobileStoresOpen, setMobileStoresOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Permanent solid navbar with clean white background and crisp dark text
  const isSolid = true;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close stores dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setStoresDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentStore = STORES_DATA.find((s) => s.slug === currentStoreSlug);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: isSolid ? "#ffffff" : "transparent",
        backdropFilter: isSolid ? "none" : "none",
        WebkitBackdropFilter: isSolid ? "none" : "none",
        borderBottom: isSolid
          ? "1px solid #e2e8f0"
          : "1px solid rgba(255, 255, 255, 0.14)",
        boxShadow: isSolid ? "0 4px 20px rgba(15, 23, 42, 0.08)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div
        className="container navbar-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 72,
          padding: "0 28px",
          maxWidth: "1360px",
          margin: "0 auto",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
          }}
        >
          <div
            className="navbar-logo-badge"
            style={{
              width: 40,
              height: 40,
              borderRadius: 8,
              background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              boxShadow: "0 4px 14px rgba(220, 38, 38, 0.45)",
              fontWeight: 900,
              fontSize: "14px",
              letterSpacing: "0.02em",
              flexShrink: 0,
            }}
          >
            A1
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              className="navbar-brand-name"
              style={{
                fontSize: 20,
                fontWeight: 900,
                letterSpacing: "-0.03em",
                color: "#0f172a",
                lineHeight: 1.1,
              }}
            >
              A1 <span style={{ color: "#ef4444" }}>CAR WASH</span>
            </span>
            <span
              className="navbar-brand-tag"
              style={{
                fontSize: 9.5,
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                color: "#64748b",
              }}
            >
              Quality Car Cleaning & Detailing
            </span>
          </div>
        </Link>

        {/* Desktop Nav: ONLY Home, Services, Stores ˅, About, Gallery, Contact */}
        <nav
          style={{ display: "flex", alignItems: "center", gap: 28 }}
          className="desktop-nav"
        >
          <Link
            href="/"
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: isSolid ? "#334155" : "rgba(255, 255, 255, 0.95)",
              textDecoration: "none",
              transition: "color 0.2s ease",
              textShadow: isSolid ? "none" : "0 2px 8px rgba(0,0,0,0.6)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ef4444")}
            onMouseLeave={(e) =>
            (e.currentTarget.style.color = isSolid
              ? "#334155"
              : "rgba(255, 255, 255, 0.95)")
            }
          >
            Home
          </Link>

          <Link
            href="/services"
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: isSolid ? "#334155" : "rgba(255, 255, 255, 0.95)",
              textDecoration: "none",
              transition: "color 0.2s ease",
              textShadow: isSolid ? "none" : "0 2px 8px rgba(0,0,0,0.6)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ef4444")}
            onMouseLeave={(e) =>
            (e.currentTarget.style.color = isSolid
              ? "#334155"
              : "rgba(255, 255, 255, 0.95)")
            }
          >
            Services
          </Link>

          {/* Stores ˅ Dropdown */}
          <div
            ref={dropdownRef}
            style={{ position: "relative" }}
            onMouseEnter={() => setStoresDropdownOpen(true)}
            onMouseLeave={() => setStoresDropdownOpen(false)}
          >
            <button
              onClick={() => setStoresDropdownOpen(!storesDropdownOpen)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: "8px 0",
                fontSize: 14,
                fontWeight: 600,
                color:
                  storesDropdownOpen ? "#ef4444" : (isSolid ? "#0f172a" : "rgba(255, 255, 255, 0.95)"),
                transition: "color 0.2s ease",
                textShadow: isSolid ? "none" : "0 2px 8px rgba(0,0,0,0.6)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ef4444")}
              onMouseLeave={(e) =>
              (e.currentTarget.style.color =
                storesDropdownOpen ? "#ef4444" : (isSolid ? "#0f172a" : "rgba(255, 255, 255, 0.95)"))
              }
            >
              <span>{currentStore ? currentStore.shortName : "Our Branches"}</span>
              <ChevronDown
                size={14}
                style={{
                  transform: storesDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                }}
              />
            </button>

            {/* Stores Dropdown Menu */}
            {storesDropdownOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "320px",
                  backgroundColor: "#ffffff",
                  borderRadius: "14px",
                  boxShadow:
                    "0 20px 50px rgba(15, 23, 42, 0.16), 0 4px 12px rgba(0, 0, 0, 0.06)",
                  border: "1px solid #e2e8f0",
                  padding: "10px",
                  zIndex: 1100,
                  marginTop: "6px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  animation: "fadeIn 0.18s ease",
                }}
              >
                <div
                  style={{
                    padding: "8px 12px 6px",
                    fontSize: "11px",
                    fontWeight: 800,
                    color: "#94a3b8",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    borderBottom: "1px solid #f1f5f9",
                    marginBottom: "4px",
                  }}
                >
                  Select Detailing Studio
                </div>

                {STORES_DATA.map((s) => {
                  const isSelected = currentStoreSlug === s.slug;
                  return (
                    <Link
                      key={s.id}
                      href={`/stores/${s.slug}`}
                      onClick={() => setStoresDropdownOpen(false)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "10px 12px",
                        borderRadius: "8px",
                        textDecoration: "none",
                        background: isSelected ? "#fee2e2" : "transparent",
                        transition: "all 0.15s ease",
                      }}
                      onMouseEnter={(e) => {
                        if (!isSelected) e.currentTarget.style.backgroundColor = "#f8fafc";
                      }}
                      onMouseLeave={(e) => {
                        if (!isSelected) e.currentTarget.style.backgroundColor = "transparent";
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <div
                          style={{
                            width: "28px",
                            height: "28px",
                            borderRadius: "6px",
                            background: isSelected ? "#dc2626" : "#f1f5f9",
                            color: isSelected ? "#ffffff" : "#64748b",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          <MapPin size={14} />
                        </div>
                        <div>
                          <div
                            style={{
                              fontSize: "13px",
                              fontWeight: 700,
                              color: isSelected ? "#dc2626" : "#0f172a",
                            }}
                          >
                            {s.shortName}
                          </div>
                          <div
                            style={{
                              fontSize: "11px",
                              color: "#64748b",
                              fontWeight: 500,
                              lineHeight: 1.2,
                            }}
                          >
                            {s.area}
                          </div>
                        </div>
                      </div>

                      {isSelected && <Check size={16} style={{ color: "#dc2626" }} />}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <Link
            href="/about"
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: isSolid ? "#334155" : "rgba(255, 255, 255, 0.95)",
              textDecoration: "none",
              transition: "color 0.2s ease",
              textShadow: isSolid ? "none" : "0 2px 8px rgba(0,0,0,0.6)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ef4444")}
            onMouseLeave={(e) =>
            (e.currentTarget.style.color = isSolid
              ? "#334155"
              : "rgba(255, 255, 255, 0.95)")
            }
          >
            About
          </Link>

          <Link
            href="/gallery"
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: isSolid ? "#334155" : "rgba(255, 255, 255, 0.95)",
              textDecoration: "none",
              transition: "color 0.2s ease",
              textShadow: isSolid ? "none" : "0 2px 8px rgba(0,0,0,0.6)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ef4444")}
            onMouseLeave={(e) =>
            (e.currentTarget.style.color = isSolid
              ? "#334155"
              : "rgba(255, 255, 255, 0.95)")
            }
          >
            Gallery
          </Link>

          <Link
            href="/contact"
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: isSolid ? "#334155" : "rgba(255, 255, 255, 0.95)",
              textDecoration: "none",
              transition: "color 0.2s ease",
              textShadow: isSolid ? "none" : "0 2px 8px rgba(0,0,0,0.6)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ef4444")}
            onMouseLeave={(e) =>
            (e.currentTarget.style.color = isSolid
              ? "#334155"
              : "rgba(255, 255, 255, 0.95)")
            }
          >
            Contact
          </Link>
        </nav>

        {/* Desktop Right CTA */}
        <div
          style={{ display: "flex", alignItems: "center", gap: 14 }}
          className="desktop-actions"
        >
          <a
            href="/contact"
            style={{
              background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
              color: "#ffffff",
              fontSize: 13,
              fontWeight: 800,
              padding: "10px 22px",
              borderRadius: 8,
              textDecoration: "none",
              boxShadow: "0 4px 14px rgba(220, 38, 38, 0.4)",
              transition: "all 0.2s ease",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(220, 38, 38, 0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 14px rgba(220, 38, 38, 0.4)";
            }}
          >
            <span>Book Now</span>
          </a>
        </div>

        {/* Mobile Action Buttons (Call + Hamburger Menu) */}
        <div className="mobile-actions">
          <a
            href="tel:7045282473"
            aria-label="Call A1 Car Wash"
            className="mobile-quick-call"
            style={{
              width: 38,
              height: 38,
              borderRadius: 9,
              background: "#fee2e2",
              color: "#dc2626",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              boxShadow: "0 2px 8px rgba(220, 38, 38, 0.15)",
            }}
          >
            <Phone size={17} />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              width: 40,
              height: 40,
              borderRadius: 9,
              background: mobileMenuOpen ? "#fee2e2" : "#f1f5f9",
              color: mobileMenuOpen ? "#dc2626" : "#0f172a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid",
              borderColor: mobileMenuOpen ? "#fecaca" : "#e2e8f0",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className="mobile-nav-drawer"
          style={{
            background: "#ffffff",
            borderTop: "1px solid #e2e8f0",
            borderBottom: "3px solid #ef4444",
            padding: "18px 20px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 10,
            boxShadow: "0 20px 40px rgba(15, 23, 42, 0.14)",
            maxHeight: "85vh",
            overflowY: "auto",
            animation: "mobileMenuSlide 0.22s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              fontSize: 15,
              fontWeight: 700,
              color: pathname === "/" ? "#dc2626" : "#0f172a",
              textDecoration: "none",
              padding: "10px 14px",
              borderRadius: 8,
              background: pathname === "/" ? "#fee2e2" : "#f8fafc",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span>Home</span>
            <span style={{ fontSize: "12px", color: "#94a3b8" }}>→</span>
          </Link>

          <Link
            href="/services"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              fontSize: 15,
              fontWeight: 700,
              color: pathname.startsWith("/services") ? "#dc2626" : "#0f172a",
              textDecoration: "none",
              padding: "10px 14px",
              borderRadius: 8,
              background: pathname.startsWith("/services") ? "#fee2e2" : "#f8fafc",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span>Services & Pricing</span>
            <span style={{ fontSize: "12px", color: "#94a3b8" }}>→</span>
          </Link>

          {/* Mobile Stores Accordion */}
          <div
            style={{
              borderRadius: 8,
              background: "#f8fafc",
              border: "1px solid #e2e8f0",
              overflow: "hidden",
            }}
          >
            <button
              onClick={() => setMobileStoresOpen(!mobileStoresOpen)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                background: "none",
                border: "none",
                fontSize: 15,
                fontWeight: 700,
                color: "#0f172a",
                cursor: "pointer",
                padding: "10px 14px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <MapPin size={16} style={{ color: "#ef4444" }} />
                <span>Our Branches ({STORES_DATA.length})</span>
              </div>
              <ChevronDown
                size={16}
                style={{
                  transform: mobileStoresOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s",
                  color: "#64748b",
                }}
              />
            </button>

            {mobileStoresOpen && (
              <div
                style={{
                  padding: "4px 10px 12px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                  borderTop: "1px solid #e2e8f0",
                  background: "#ffffff",
                }}
              >
                {STORES_DATA.map((s) => (
                  <Link
                    key={s.id}
                    href={`/stores/${s.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "8px",
                      fontSize: "13.5px",
                      fontWeight: currentStoreSlug === s.slug ? 800 : 600,
                      color: currentStoreSlug === s.slug ? "#dc2626" : "#334155",
                      textDecoration: "none",
                      padding: "8px 10px",
                      borderRadius: 6,
                      background: currentStoreSlug === s.slug ? "#fee2e2" : "#f8fafc",
                    }}
                  >
                    <div>
                      <div>{s.shortName}</div>
                      <div style={{ fontSize: "11px", color: "#64748b", fontWeight: 400 }}>{s.area}</div>
                    </div>
                    {currentStoreSlug === s.slug && <Check size={15} style={{ color: "#dc2626" }} />}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              fontSize: 15,
              fontWeight: 700,
              color: pathname === "/about" ? "#dc2626" : "#0f172a",
              textDecoration: "none",
              padding: "10px 14px",
              borderRadius: 8,
              background: pathname === "/about" ? "#fee2e2" : "#f8fafc",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span>About Us</span>
            <span style={{ fontSize: "12px", color: "#94a3b8" }}>→</span>
          </Link>

          <Link
            href="/gallery"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              fontSize: 15,
              fontWeight: 700,
              color: pathname === "/gallery" ? "#dc2626" : "#0f172a",
              textDecoration: "none",
              padding: "10px 14px",
              borderRadius: 8,
              background: pathname === "/gallery" ? "#fee2e2" : "#f8fafc",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span>Photo Gallery</span>
            <span style={{ fontSize: "12px", color: "#94a3b8" }}>→</span>
          </Link>

          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              fontSize: 15,
              fontWeight: 700,
              color: pathname === "/contact" ? "#dc2626" : "#0f172a",
              textDecoration: "none",
              padding: "10px 14px",
              borderRadius: 8,
              background: pathname === "/contact" ? "#fee2e2" : "#f8fafc",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span>Contact</span>
            <span style={{ fontSize: "12px", color: "#94a3b8" }}>→</span>
          </Link>

          <div style={{ marginTop: "8px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            <a
              href="tel:7045282473"
              style={{
                textAlign: "center",
                border: "1.5px solid #dc2626",
                color: "#dc2626",
                padding: "12px 8px",
                borderRadius: 9,
                fontWeight: 800,
                fontSize: "13.5px",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                background: "#fef2f2",
              }}
            >
              <Phone size={15} />
              <span>Call Now</span>
            </a>

            <a
              href="https://wa.me/917045282473?text=Hi%20A1%20Car%20Wash!%20I%20would%20like%20to%20book%20a%20service."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textAlign: "center",
                background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
                color: "#ffffff",
                padding: "12px 8px",
                borderRadius: 9,
                fontWeight: 800,
                fontSize: "13.5px",
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(220, 38, 38, 0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
              }}
            >
              <span>Book Wash</span>
            </a>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translate(-50%, -6px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }

        @keyframes mobileMenuSlide {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .mobile-actions {
          display: none;
          align-items: center;
          gap: 10px;
        }

        @media (max-width: 1040px) {
          .desktop-nav, .desktop-actions { display: none !important; }
          .mobile-actions { display: flex !important; }
        }

        @media (max-width: 640px) {
          .navbar-container {
            height: 62px !important;
            padding: 0 16px !important;
          }
          .navbar-logo-badge {
            width: 36px !important;
            height: 36px !important;
            font-size: 13px !important;
          }
          .navbar-brand-name {
            font-size: 17px !important;
          }
          .navbar-brand-tag {
            font-size: 8.5px !important;
            letter-spacing: 0.04em !important;
          }
        }
      `}</style>
    </header>
  );
}
