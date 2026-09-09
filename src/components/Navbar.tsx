"use client";

import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, ChevronDown, MapPin, Check } from "lucide-react";
import Link from "next/link";
import { STORES_DATA } from "@/data/storesData";

interface NavbarProps {
  currentStoreSlug?: string;
}

export default function Navbar({ currentStoreSlug }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [storesDropdownOpen, setStoresDropdownOpen] = useState(false);
  const [mobileStoresOpen, setMobileStoresOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

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
        backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.98)" : "transparent",
        backdropFilter: isScrolled ? "blur(14px)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(14px)" : "none",
        borderBottom: isScrolled
          ? "1px solid #e2e8f0"
          : "1px solid rgba(255, 255, 255, 0.14)",
        boxShadow: isScrolled ? "0 4px 24px rgba(15, 23, 42, 0.08)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div
        className="container"
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
            }}
          >
            A1
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: 21,
                fontWeight: 900,
                letterSpacing: "-0.03em",
                color: isScrolled ? "#0f172a" : "#ffffff",
                lineHeight: 1.1,
                transition: "color 0.3s ease",
                textShadow: isScrolled ? "none" : "0 2px 10px rgba(0,0,0,0.6)",
              }}
            >
              A1 <span style={{ color: "#ef4444" }}>CAR WASH</span>
            </span>
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: isScrolled ? "#64748b" : "rgba(255, 255, 255, 0.8)",
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
              color: isScrolled ? "#334155" : "rgba(255, 255, 255, 0.95)",
              textDecoration: "none",
              transition: "color 0.2s ease",
              textShadow: isScrolled ? "none" : "0 2px 8px rgba(0,0,0,0.6)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ef4444")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = isScrolled
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
              color: isScrolled ? "#334155" : "rgba(255, 255, 255, 0.95)",
              textDecoration: "none",
              transition: "color 0.2s ease",
              textShadow: isScrolled ? "none" : "0 2px 8px rgba(0,0,0,0.6)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ef4444")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = isScrolled
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
                  storesDropdownOpen ? "#ef4444" : (isScrolled ? "#0f172a" : "rgba(255, 255, 255, 0.95)"),
                transition: "color 0.2s ease",
                textShadow: isScrolled ? "none" : "0 2px 8px rgba(0,0,0,0.6)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ef4444")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color =
                  storesDropdownOpen ? "#ef4444" : (isScrolled ? "#0f172a" : "rgba(255, 255, 255, 0.95)"))
              }
            >
              <span>{currentStore ? currentStore.shortName : "Stores"}</span>
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
              color: isScrolled ? "#334155" : "rgba(255, 255, 255, 0.95)",
              textDecoration: "none",
              transition: "color 0.2s ease",
              textShadow: isScrolled ? "none" : "0 2px 8px rgba(0,0,0,0.6)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ef4444")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = isScrolled
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
              color: isScrolled ? "#334155" : "rgba(255, 255, 255, 0.95)",
              textDecoration: "none",
              transition: "color 0.2s ease",
              textShadow: isScrolled ? "none" : "0 2px 8px rgba(0,0,0,0.6)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ef4444")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = isScrolled
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
              color: isScrolled ? "#334155" : "rgba(255, 255, 255, 0.95)",
              textDecoration: "none",
              transition: "color 0.2s ease",
              textShadow: isScrolled ? "none" : "0 2px 8px rgba(0,0,0,0.6)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ef4444")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = isScrolled
                ? "#334155"
                : "rgba(255, 255, 255, 0.95)")
            }
          >
            Contact
          </Link>
        </nav>

        {/* Right CTA */}
        <div
          style={{ display: "flex", alignItems: "center", gap: 14 }}
          className="desktop-actions"
        >
          <a
            href="tel:7045282473"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontSize: 13,
              fontWeight: 700,
              color: isScrolled ? "#1e293b" : "#ffffff",
              textDecoration: "none",
              transition: "color 0.3s ease",
              textShadow: isScrolled ? "none" : "0 2px 8px rgba(0,0,0,0.6)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ef4444")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = isScrolled ? "#1e293b" : "#ffffff")
            }
          >
            <Phone size={14} style={{ color: "#ef4444" }} />
            <span>70452 82473</span>
          </a>

          <a
            href="https://wa.me/917045282473?text=Hi%20A1%20Car%20Wash!%20I%20would%20like%20to%20book%20a%20car%20wash%20service%20in%20Hyderabad."
            target="_blank"
            rel="noopener noreferrer"
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

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: isScrolled ? "#172554" : "#ffffff",
          }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            background: "#ffffff",
            borderTop: "1px solid #e2e8f0",
            padding: "20px 20px 30px",
            display: "flex",
            flexDirection: "column",
            gap: 12,
            boxShadow: "0 14px 34px rgba(0,0,0,0.14)",
            maxHeight: "85vh",
            overflowY: "auto",
          }}
        >
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              fontSize: 15,
              fontWeight: 700,
              color: "#0f172a",
              textDecoration: "none",
              padding: "6px 0",
            }}
          >
            Home
          </Link>

          <Link
            href="/services"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              fontSize: 15,
              fontWeight: 700,
              color: "#0f172a",
              textDecoration: "none",
              padding: "6px 0",
            }}
          >
            Services
          </Link>

          {/* Mobile Stores Accordion */}
          <div style={{ borderTop: "1px solid #f1f5f9", borderBottom: "1px solid #f1f5f9", padding: "10px 0" }}>
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
                padding: 0,
              }}
            >
              <span>Stores ({STORES_DATA.length})</span>
              <ChevronDown
                size={16}
                style={{
                  transform: mobileStoresOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s",
                }}
              />
            </button>

            {mobileStoresOpen && (
              <div style={{ marginTop: "10px", display: "flex", flexDirection: "column", gap: "8px", paddingLeft: "10px" }}>
                {STORES_DATA.map((s) => (
                  <Link
                    key={s.id}
                    href={`/stores/${s.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "13.5px",
                      fontWeight: currentStoreSlug === s.slug ? 800 : 600,
                      color: currentStoreSlug === s.slug ? "#dc2626" : "#334155",
                      textDecoration: "none",
                      padding: "6px 0",
                    }}
                  >
                    <MapPin size={13} style={{ color: currentStoreSlug === s.slug ? "#dc2626" : "#94a3b8" }} />
                    <span>{s.name}</span>
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
              color: "#0f172a",
              textDecoration: "none",
              padding: "6px 0",
            }}
          >
            About
          </Link>

          <Link
            href="/gallery"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              fontSize: 15,
              fontWeight: 700,
              color: "#0f172a",
              textDecoration: "none",
              padding: "6px 0",
            }}
          >
            Gallery
          </Link>

          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              fontSize: 15,
              fontWeight: 700,
              color: "#0f172a",
              textDecoration: "none",
              padding: "6px 0",
            }}
          >
            Contact
          </Link>

          <div style={{ marginTop: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
            <a
              href="tel:7045282473"
              style={{
                textAlign: "center",
                border: "1.5px solid #dc2626",
                color: "#dc2626",
                padding: "10px",
                borderRadius: 8,
                fontWeight: 800,
                fontSize: "14px",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <Phone size={16} />
              <span>Call: 70452 82473</span>
            </a>

            <a
              href="https://wa.me/917045282473?text=Hi%20A1%20Car%20Wash!%20I%20would%20like%20to%20book%20a%20service."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textAlign: "center",
                background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
                color: "#ffffff",
                padding: "12px",
                borderRadius: 8,
                fontWeight: 800,
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(220, 38, 38, 0.4)",
              }}
            >
              Instant WhatsApp Booking
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

        @media (max-width: 1040px) {
          .desktop-nav, .desktop-actions { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
