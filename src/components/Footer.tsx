"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Phone, Mail, MapPin, MessageCircle, Clock, ExternalLink } from "lucide-react";
import { STORES_DATA, getStoreBySlug } from "@/data/storesData";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

interface FooterProps {
  currentStoreSlug?: string;
}

export default function Footer({ currentStoreSlug }: FooterProps = {}) {
  const pathname = usePathname();

  // Determine active branch from prop or current URL
  const slugFromUrl = pathname?.includes("/stores/")
    ? pathname.split("/stores/")[1]?.split("/")[0]?.split("?")[0]
    : undefined;

  const resolvedSlug = currentStoreSlug || slugFromUrl;
  const currentStore = resolvedSlug ? getStoreBySlug(resolvedSlug) : undefined;

  const centralPhone = "70952 82473";
  const displayPhone = currentStore ? currentStore.phone : centralPhone;
  const displayCleanPhone = displayPhone.replace(/[^0-9]/g, "");
  const displayWhatsapp = currentStore ? currentStore.whatsapp : `91${displayCleanPhone}`;
  const displayAddress = currentStore
    ? currentStore.address
    : "#5-119, Raidurga, Darga chowrasta, Film Nagar road, opposite JRC, Hyderabad, Telangana 500104";

  return (
    <footer style={{ background: "#111827", color: "#9ca3af", paddingTop: "60px", paddingBottom: "30px", position: "relative" }}>
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        {/* 4-Column Layout */}
        <div
          className="footer-columns-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr 0.9fr 1fr 1.3fr",
            gap: "40px",
            marginBottom: "46px",
            alignItems: "start"
          }}
        >
          {/* Column 1: Circular Logo + Tagline + Social Icons */}
          <div>
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                padding: "6px"
              }}
            >
              <div style={{ textAlign: "center", lineHeight: 1 }}>
                <span style={{ fontSize: "20px", fontWeight: 900, color: "#1e3a8a", display: "block" }}>A1</span>
                <span style={{ fontSize: "7px", fontWeight: 800, color: "#ef4444", letterSpacing: "0.5px" }}>CAR WASH</span>
              </div>
            </div>

            <p
              style={{
                fontSize: "14px",
                lineHeight: "1.6",
                color: "#9ca3af",
                marginBottom: "24px",
                maxWidth: "300px"
              }}
            >
              Premium hydraulic jack lift car wash and detailing studios across 6 strategic locations in Hyderabad.
            </p>

            <div style={{ display: "flex", gap: "12px" }}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  background: "#1f2937",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#d1d5db",
                  transition: "all 0.2s"
                }}
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  background: "#1f2937",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#d1d5db",
                  transition: "all 0.2s"
                }}
              >
                <FacebookIcon size={18} />
              </a>
              <a
                href={`https://wa.me/${displayWhatsapp}`}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  background: "#1f2937",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#25D366",
                  transition: "all 0.2s"
                }}
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4
              style={{
                fontSize: "16px",
                fontWeight: 700,
                color: "#ffffff",
                marginBottom: "20px"
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "About Us", href: "/about" },
                { label: "Our Stores", href: "/stores" },
                { label: "Contact Us", href: "/contact" }
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="footer-nav-link"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "14px",
                      color: "#9ca3af",
                      textDecoration: "none",
                      transition: "all 0.2s ease"
                    }}
                  >
                    <ChevronRight size={15} style={{ color: "#ef4444", flexShrink: 0 }} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4
              style={{
                fontSize: "16px",
                fontWeight: 700,
                color: "#ffffff",
                marginBottom: "20px"
              }}
            >
              Services
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                "Hydraulic Jack Lift Wash",
                "Diesel & Oil Engine Wash",
                "Interior Deep Cleaning",
                "Teflon & Ceramic Coating",
                "Underbody Anti-Rust Coating",
                "Bike Foam & Diesel Wash"
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="footer-nav-link"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "14px",
                      color: "#9ca3af",
                      textDecoration: "none",
                      transition: "all 0.2s ease"
                    }}
                  >
                    <ChevronRight size={15} style={{ color: "#ef4444", flexShrink: 0 }} />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us (Branch-Aware) */}
          <div>
            <h4
              style={{
                fontSize: "16px",
                fontWeight: 700,
                color: "#ffffff",
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span>{currentStore ? `${currentStore.shortName} Studio` : "Central Helpline"}</span>
              {currentStore && (
                <span
                  style={{
                    fontSize: "10.5px",
                    fontWeight: 700,
                    background: "#fee2e2",
                    color: "#dc2626",
                    padding: "2px 8px",
                    borderRadius: "9999px",
                    textTransform: "uppercase",
                  }}
                >
                  Active Branch
                </span>
              )}
            </h4>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px", fontSize: "14px", color: "#9ca3af" }}>
              {/* Phone */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "30px", height: "30px", borderRadius: "8px", background: "#1f2937", display: "flex", alignItems: "center", justifyContent: "center", color: "#ef4444", flexShrink: 0 }}>
                  <Phone size={15} />
                </div>
                <div>
                  <div style={{ fontSize: "11px", color: "#64748b" }}>Direct Calling / Booking</div>
                  <a href={`tel:${displayCleanPhone}`} style={{ color: "#ffffff", fontWeight: 700, textDecoration: "none" }}>
                    +91 {displayPhone}
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "30px", height: "30px", borderRadius: "8px", background: "#1f2937", display: "flex", alignItems: "center", justifyContent: "center", color: "#25D366", flexShrink: 0 }}>
                  <MessageCircle size={15} />
                </div>
                <div>
                  <div style={{ fontSize: "11px", color: "#64748b" }}>WhatsApp Chat</div>
                  <a
                    href={`https://wa.me/${displayWhatsapp}?text=${encodeURIComponent(`Hi A1 Car Wash${currentStore ? ` (${currentStore.shortName})` : ""}! I want to enquire about car wash services.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#25D366", fontWeight: 700, textDecoration: "none" }}
                  >
                    +91 {displayPhone}
                  </a>
                </div>
              </div>

              {/* Timing */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "30px", height: "30px", borderRadius: "8px", background: "#1f2937", display: "flex", alignItems: "center", justifyContent: "center", color: "#eab308", flexShrink: 0 }}>
                  <Clock size={15} />
                </div>
                <div style={{ color: "#cbd5e1", fontSize: "13px" }}>
                  {currentStore ? currentStore.timing : "8:00 AM – 9:00 PM (Everyday)"}
                </div>
              </div>

              {/* Address */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <div style={{ width: "30px", height: "30px", borderRadius: "8px", background: "#1f2937", display: "flex", alignItems: "center", justifyContent: "center", color: "#ef4444", flexShrink: 0, marginTop: "2px" }}>
                  <MapPin size={15} />
                </div>
                <span style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: "1.5" }}>
                  {displayAddress}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── ALL 6 HYDERABAD BRANCHES DIRECT HELPLINE DIRECTORY (COMPACT DESIGN) ── */}
        <div
          style={{
            borderTop: "1px solid #1f2937",
            paddingTop: "24px",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "14px",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ef4444" }} />
              <span style={{ fontSize: "12px", fontWeight: 800, color: "#ffffff", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Hyderabad Studios • Direct Branch Helplines
              </span>
            </div>

            <Link
              href="/stores"
              style={{
                fontSize: "12px",
                fontWeight: 700,
                color: "#ef4444",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                transition: "transform 0.2s",
              }}
            >
              <span>View All Studios &amp; 360° Views</span>
              <ChevronRight size={14} />
            </Link>
          </div>

          <div
            className="footer-branches-compact-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "8px",
            }}
          >
            {STORES_DATA.map((store) => {
              const isSelected = resolvedSlug === store.slug;
              const phoneOnly = store.phone.replace(/[^0-9]/g, "");

              return (
                <div
                  key={store.id}
                  className={`footer-branch-chip ${isSelected ? "active" : ""}`}
                  style={{
                    background: isSelected ? "rgba(220, 38, 38, 0.15)" : "#161e2e",
                    border: isSelected ? "1px solid #dc2626" : "1px solid #232d42",
                    borderRadius: "10px",
                    padding: "9px 12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "10px",
                    transition: "all 0.2s ease",
                  }}
                >
                  <Link
                    href={`/stores/${store.slug}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "7px",
                      textDecoration: "none",
                      minWidth: 0,
                      flex: 1,
                    }}
                  >
                    <MapPin size={14} style={{ color: isSelected ? "#ef4444" : "#94a3b8", flexShrink: 0 }} />
                    <div style={{ minWidth: 0 }}>
                      <div
                        style={{
                          fontSize: "13px",
                          fontWeight: 700,
                          color: isSelected ? "#f87171" : "#ffffff",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {store.shortName}
                      </div>
                      <div
                        style={{
                          fontSize: "10.5px",
                          color: "#64748b",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {store.area.split("/")[0].trim()}
                      </div>
                    </div>
                  </Link>

                  {/* Direct Calling & WhatsApp Mini Buttons */}
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", flexShrink: 0 }}>
                    <a
                      href={`tel:${phoneOnly}`}
                      className="footer-call-pill"
                      title={`Call ${store.shortName}: ${store.phone}`}
                      style={{
                        fontSize: "12px",
                        fontWeight: 700,
                        color: "#ffffff",
                        background: "#1e293b",
                        border: "1px solid #334155",
                        padding: "5px 9px",
                        borderRadius: "7px",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        fontVariantNumeric: "tabular-nums",
                        transition: "background 0.15s, border-color 0.15s",
                      }}
                    >
                      <Phone size={11} style={{ color: "#ef4444" }} />
                      <span>{store.phone}</span>
                    </a>

                    <a
                      href={`https://wa.me/${store.whatsapp}?text=${encodeURIComponent(`Hi A1 Car Wash (${store.shortName})! I want to enquire about car wash services.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Chat with ${store.shortName} on WhatsApp`}
                      style={{
                        background: "rgba(37, 211, 102, 0.15)",
                        border: "1px solid rgba(37, 211, 102, 0.35)",
                        color: "#25D366",
                        width: "28px",
                        height: "28px",
                        borderRadius: "7px",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textDecoration: "none",
                        transition: "all 0.15s",
                      }}
                    >
                      <MessageCircle size={14} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid #1f2937",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
            fontSize: "13px",
            color: "#9ca3af"
          }}
        >
          <div>
            © {new Date().getFullYear()} A1 Car Wash. All rights reserved.
          </div>
          <div>
            Designed &amp; Developed by <span style={{ color: "#ffffff", fontWeight: 600 }}>Edone Solutions</span>
          </div>
        </div>
      </div>

      <style>{`
        .footer-nav-link:hover {
          color: #ffffff !important;
          transform: translateX(4px);
        }
        .footer-branch-chip:hover {
          border-color: #ef4444 !important;
          background: #1c2638 !important;
          transform: translateY(-1px);
        }
        .footer-call-pill:hover {
          background: #dc2626 !important;
          border-color: #dc2626 !important;
        }
        @media (max-width: 900px) {
          .footer-columns-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 640px) {
          .footer-columns-grid {
            grid-template-columns: 1fr !important;
          }
          .footer-branches-compact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
