"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Phone, Mail, MapPin, MessageCircle } from "lucide-react";

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

export default function Footer() {
  return (
    <footer style={{ background: "#111827", color: "#9ca3af", paddingTop: "60px", paddingBottom: "30px", position: "relative" }}>
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        {/* 4-Column Layout matching reference image */}
        <div
          className="footer-columns-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr 1.2fr",
            gap: "40px",
            marginBottom: "50px",
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
              Premium car wash and detailing services delivered to your doorstep. Trusted by 5000+ car owners in Hyderabad.
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
                href="https://wa.me/917095282473"
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
                  color: "#d1d5db",
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
                fontSize: "17px",
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
                fontSize: "17px",
                fontWeight: 700,
                color: "#ffffff",
                marginBottom: "20px"
              }}
            >
              Services
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                "Express Foam Wash",
                "Interior Deep Cleaning",
                "Teflon & Ceramic Coating",
                "Underbody Wash & Anti-Rust",
                "Bike Wash & Polishing"
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

          {/* Column 4: Contact Us */}
          <div>
            <h4
              style={{
                fontSize: "17px",
                fontWeight: 700,
                color: "#ffffff",
                marginBottom: "20px"
              }}
            >
              Contact Us
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", fontSize: "14px", color: "#9ca3af" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Phone size={18} style={{ color: "#ef4444", flexShrink: 0 }} />
                <a href="tel:7095282473" style={{ color: "#ffffff", fontWeight: 600, textDecoration: "none" }}>
                  +91 70952 82473
                </a>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Mail size={18} style={{ color: "#ef4444", flexShrink: 0 }} />
                <a href="mailto:care@a1carwash.in" style={{ color: "#ffffff", textDecoration: "none" }}>
                  care@a1carwash.in
                </a>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <MapPin size={18} style={{ color: "#ef4444", flexShrink: 0, marginTop: "2px" }} />
                <span style={{ color: "#d1d5db" }}>Mehfil Restaurant, Raidurg, Darga Chowrasta, Film Nagar Road, Hyderabad, Telangana – 500104</span>
              </div>
            </div>
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
        @media (max-width: 900px) {
          .footer-columns-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 550px) {
          .footer-columns-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}

