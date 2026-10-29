"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Phone, ChevronUp, MapPin, X } from "lucide-react";
import { STORES_DATA, getStoreBySlug, StoreLocation } from "@/data/storesData";

function WhatsAppIcon({ size = 20, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.979-.276-.1-.476-.15-.677.15-.201.301-.778.979-.953 1.179-.175.201-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.501-1.787-1.677-2.088-.175-.301-.019-.464.132-.614.135-.135.301-.351.451-.527.151-.176.201-.301.301-.502.101-.201.05-.376-.025-.526-.075-.15-.677-1.631-.928-2.235-.244-.588-.493-.509-.677-.518-.175-.009-.376-.01-.577-.01-.201 0-.527.075-.803.376-.276.301-1.054 1.03-1.054 2.511 0 1.482 1.079 2.912 1.229 3.113.151.201 2.124 3.243 5.145 4.549.718.311 1.279.497 1.716.636.721.229 1.377.197 1.896.119.579-.087 1.782-.728 2.033-1.431.251-.703.251-1.306.176-1.431-.076-.126-.276-.201-.577-.352z" />
      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.178L2 22l4.981-1.408A9.954 9.954 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2a8.163 8.163 0 0 1-4.328-1.233l-.31-.184-2.96.837.842-2.884-.202-.322A8.169 8.169 0 1 1 12 20.2z" />
    </svg>
  );
}

export default function FloatingContactActions() {
  const pathname = usePathname();
  const [activeStore, setActiveStore] = useState<StoreLocation>(STORES_DATA[0]);
  const [showBranchPicker, setShowBranchPicker] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Detect branch from current URL
  useEffect(() => {
    if (pathname.includes("/stores/")) {
      const slug = pathname.split("/stores/")[1]?.split("/")[0]?.split("?")[0];
      if (slug) {
        const found = getStoreBySlug(slug);
        if (found) {
          setActiveStore(found);
          return;
        }
      }
    }
    // Default to primary studio
    setActiveStore(STORES_DATA[0]);
  }, [pathname]);

  // Reveal smoothly after short mount
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const cleanPhone = activeStore.phone.replace(/[^0-9]/g, "");
  const formattedTel = cleanPhone.startsWith("91") ? `+${cleanPhone}` : `+91${cleanPhone}`;
  const whatsappUrl = `https://wa.me/${activeStore.whatsapp}?text=${encodeURIComponent(
    `Hi A1 Car Wash (${activeStore.shortName})! I would like to enquire / book a car wash slot.`
  )}`;

  if (!isVisible) return null;

  return (
    <>
      {/* ── MOBILE BOTTOM STICKY BAR (<= 768px) ── */}
      <div
        className="floating-mobile-bar"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          background: "rgba(15, 23, 42, 0.94)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderTop: "1px solid rgba(226, 232, 240, 0.15)",
          boxShadow: "0 -8px 25px rgba(0, 0, 0, 0.35)",
          padding: "10px 16px 12px",
          display: "none", // enabled via media query below
        }}
      >
        {/* Tiny Branch indicator line */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "11px",
            color: "#94a3b8",
            marginBottom: "8px",
            padding: "0 2px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22c55e" }} />
            <span style={{ color: "#e2e8f0", fontWeight: 700 }}>
              {activeStore.shortName} Branch
            </span>
            <span style={{ color: "#64748b" }}>• 8 AM – 9 PM</span>
          </div>

          <button
            type="button"
            onClick={() => setShowBranchPicker(!showBranchPicker)}
            style={{
              background: "none",
              border: "none",
              color: "#f87171",
              fontSize: "11px",
              fontWeight: 700,
              cursor: "pointer",
              padding: 0,
              display: "flex",
              alignItems: "center",
              gap: "2px",
              textDecoration: "underline",
            }}
          >
            Change Branch
            <ChevronUp size={12} style={{ transform: showBranchPicker ? "rotate(180deg)" : "none" }} />
          </button>
        </div>

        {/* Action Buttons Row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.25fr", gap: "10px" }}>
          {/* Call button */}
          <a
            href={`tel:${formattedTel}`}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              background: "#1e293b",
              color: "#ffffff",
              borderRadius: "10px",
              padding: "11px 12px",
              textDecoration: "none",
              fontSize: "13.5px",
              fontWeight: 700,
              border: "1px solid rgba(255,255,255,0.12)",
              transition: "transform 0.15s ease",
            }}
          >
            <Phone size={15} style={{ color: "#ef4444" }} />
            <span>Call Now</span>
          </a>

          {/* WhatsApp button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
              color: "#ffffff",
              borderRadius: "10px",
              padding: "11px 14px",
              textDecoration: "none",
              fontSize: "13.5px",
              fontWeight: 800,
              boxShadow: "0 4px 14px rgba(37, 211, 102, 0.4)",
              transition: "transform 0.15s ease",
            }}
          >
            <WhatsAppIcon size={17} color="#ffffff" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      {/* ── DESKTOP FLOATING CORNER BUTTONS (> 768px) ── */}
      <div
        className="floating-desktop-actions"
        style={{
          position: "fixed",
          bottom: "28px",
          right: "26px",
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: "12px",
        }}
      >
        {/* Branch Quick Switch Tooltip Trigger (Optional) */}
        {showBranchPicker && (
          <div
            style={{
              background: "#ffffff",
              borderRadius: "16px",
              padding: "14px",
              boxShadow: "0 20px 45px rgba(15, 23, 42, 0.25), 0 0 0 1px #e2e8f0",
              width: "290px",
              marginBottom: "4px",
              animation: "fadeInUp 0.25s ease-out",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
              <span style={{ fontSize: "12px", fontWeight: 800, color: "#0f172a", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Select Branch to Contact
              </span>
              <button
                type="button"
                onClick={() => setShowBranchPicker(false)}
                style={{ background: "none", border: "none", cursor: "pointer", color: "#94a3b8", padding: "2px" }}
              >
                <X size={15} />
              </button>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              {STORES_DATA.map((s) => {
                const isCurrent = activeStore.slug === s.slug;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => {
                      setActiveStore(s);
                      setShowBranchPicker(false);
                    }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "8px 10px",
                      borderRadius: "8px",
                      border: isCurrent ? "1.5px solid #dc2626" : "1px solid #f1f5f9",
                      background: isCurrent ? "#fef2f2" : "#f8fafc",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "all 0.15s ease",
                    }}
                  >
                    <div>
                      <div style={{ fontSize: "12.5px", fontWeight: 700, color: isCurrent ? "#dc2626" : "#1e293b" }}>
                        {s.shortName}
                      </div>
                      <div style={{ fontSize: "11px", color: "#64748b" }}>{s.phone}</div>
                    </div>
                    <span style={{ fontSize: "11px", fontWeight: 700, color: isCurrent ? "#dc2626" : "#0284c7" }}>
                      {isCurrent ? "Active" : "Switch"}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Call Now Pill (Desktop) */}
        <a
          href={`tel:${formattedTel}`}
          className="desktop-call-btn"
          title={`Call ${activeStore.shortName}: ${activeStore.phone}`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "9px",
            background: "#ffffff",
            color: "#0f172a",
            padding: "10px 18px",
            borderRadius: "9999px",
            fontSize: "13.5px",
            fontWeight: 700,
            textDecoration: "none",
            boxShadow: "0 6px 20px rgba(15, 23, 42, 0.12), 0 0 0 1px #e2e8f0",
            transition: "all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        >
          <div
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              background: "#fee2e2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#dc2626",
            }}
          >
            <Phone size={14} />
          </div>
          <span>Call: {activeStore.phone}</span>
        </a>

        {/* WhatsApp Floating Button (Desktop) */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <button
            type="button"
            onClick={() => setShowBranchPicker(!showBranchPicker)}
            title="Switch Branch"
            style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              color: "#475569",
              borderRadius: "9999px",
              padding: "7px 12px",
              fontSize: "11.5px",
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(15,23,42,0.08)",
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
              transition: "all 0.2s ease",
            }}
          >
            <MapPin size={12} style={{ color: "#dc2626" }} />
            <span>{activeStore.shortName}</span>
            <ChevronUp size={12} style={{ transform: showBranchPicker ? "rotate(180deg)" : "none" }} />
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="desktop-wa-fab"
            title={`Chat with ${activeStore.shortName} on WhatsApp`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
              color: "#ffffff",
              padding: "12px 22px",
              borderRadius: "9999px",
              fontSize: "14.5px",
              fontWeight: 800,
              textDecoration: "none",
              boxShadow: "0 8px 28px rgba(37, 211, 102, 0.45)",
              transition: "all 0.28s cubic-bezier(0.34, 1.56, 0.64, 1)",
              position: "relative",
            }}
          >
            {/* Live pulsating beacon ring */}
            <span
              style={{
                position: "absolute",
                top: "-3px",
                right: "-3px",
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: "#22c55e",
                border: "2px solid #ffffff",
                boxShadow: "0 0 10px #22c55e",
              }}
            />
            <WhatsAppIcon size={20} color="#ffffff" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .desktop-wa-fab:hover {
          transform: translateY(-3px) scale(1.04);
          box-shadow: 0 12px 34px rgba(37, 211, 102, 0.6) !important;
        }

        .desktop-call-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.18), 0 0 0 1px #cbd5e1 !important;
        }

        @media (max-width: 768px) {
          .floating-mobile-bar {
            display: block !important;
          }
          .floating-desktop-actions {
            display: none !important;
          }
          /* Add bottom padding to body so the sticky bar never conceals page elements */
          body {
            padding-bottom: 74px !important;
          }
        }
      `}</style>
    </>
  );
}

