"use client";

import React, { useState } from "react";
import { 
  Sparkles, 
  Sliders, 
  Eye, 
  Layers, 
  Droplet, 
  ShieldCheck, 
  CheckCircle2,
  Car
} from "lucide-react";

export default function VirtualToolsSection() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeTool, setActiveTool] = useState<"slider" | "coating_demo">("slider");
  const [selectedPaintColor, setSelectedPaintColor] = useState<string>("#1e3a8a"); // Deep Navy Blue

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <section className="section" style={{ background: "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)" }}>
      <div className="container">
        <div className="section-title-wrap">
          <div className="badge-pill badge-glow" style={{ marginBottom: "14px" }}>
            <Sparkles size={14} style={{ color: "#dc2626" }} />
            <span>INTERACTIVE VIRTUAL TOOLS</span>
          </div>
          <h2 className="section-title">
            See the <span className="text-gradient">Transformation Live</span>
          </h2>
          <p className="section-subtitle">
            Interact with our virtual detailing simulator to see the power of our multi-stage paint correction, ceramic hydrophobic gloss, and showroom restoration.
          </p>
        </div>

        {/* Tab switcher */}
        <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginBottom: "36px", flexWrap: "wrap" }}>
          <button
            onClick={() => setActiveTool("slider")}
            style={{
              padding: "10px 24px",
              borderRadius: "9999px",
              fontSize: "14px",
              fontWeight: "700",
              border: "1px solid",
              borderColor: activeTool === "slider" ? "#dc2626" : "#cbd5e1",
              background: activeTool === "slider" ? "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)" : "#ffffff",
              color: activeTool === "slider" ? "#ffffff" : "#172554",
              boxShadow: activeTool === "slider" ? "0 4px 14px rgba(220, 38, 38, 0.35)" : "none",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              transition: "all 0.2s"
            }}
          >
            <Sliders size={16} />
            <span>Interactive Before & After Slider</span>
          </button>

          <button
            onClick={() => setActiveTool("coating_demo")}
            style={{
              padding: "10px 24px",
              borderRadius: "9999px",
              fontSize: "14px",
              fontWeight: "700",
              border: "1px solid",
              borderColor: activeTool === "coating_demo" ? "#dc2626" : "#cbd5e1",
              background: activeTool === "coating_demo" ? "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)" : "#ffffff",
              color: activeTool === "coating_demo" ? "#ffffff" : "#172554",
              boxShadow: activeTool === "coating_demo" ? "0 4px 14px rgba(220, 38, 38, 0.35)" : "none",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              transition: "all 0.2s"
            }}
          >
            <Droplet size={16} />
            <span>Hydrophobic Ceramic Simulator</span>
          </button>
        </div>

        {/* Tool 1: Before & After Split Slider */}
        {activeTool === "slider" && (
          <div style={{
            maxWidth: "960px",
            margin: "0 auto",
            background: "#ffffff",
            borderRadius: "24px",
            padding: "24px",
            border: "1px solid #e2e8f0",
            boxShadow: "0 20px 45px -10px rgba(15, 23, 42, 0.08)"
          }}>
            <div style={{
              position: "relative",
              height: "460px",
              borderRadius: "16px",
              overflow: "hidden",
              userSelect: "none"
            }}>
              {/* After Image (Full width background) */}
              <img
                src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80"
                alt="After Detailing - Showroom Mirror Gloss"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
              <div style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                background: "rgba(16, 185, 129, 0.92)",
                color: "#ffffff",
                padding: "6px 14px",
                borderRadius: "9999px",
                fontSize: "13px",
                fontWeight: "700",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
              }}>
                <Sparkles size={14} />
                <span>AFTER: 9H Ceramic & Ultimate Detail</span>
              </div>

              {/* Before Image (Clipped overlay) */}
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                width: `${sliderPosition}%`,
                overflow: "hidden"
              }}>
                <img
                  src="https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80"
                  alt="Before Detailing - Dull & Road Dirt"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "960px",
                    height: "100%",
                    objectFit: "cover",
                    filter: "sepia(0.35) contrast(0.85) brightness(0.85)"
                  }}
                />
                <div style={{
                  position: "absolute",
                  top: "20px",
                  left: "20px",
                  background: "rgba(220, 38, 38, 0.95)",
                  color: "#ffffff",
                  padding: "6px 14px",
                  borderRadius: "9999px",
                  fontSize: "13px",
                  fontWeight: "700",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
                }}>
                  <span>BEFORE: Swirl Marks & Dust</span>
                </div>
              </div>

              {/* Slider Line Divider */}
              <div style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: `${sliderPosition}%`,
                width: "4px",
                background: "#ffffff",
                transform: "translateX(-50%)",
                boxShadow: "0 0 12px rgba(0,0,0,0.5)",
                pointerEvents: "none"
              }}>
                <div style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
                  border: "3px solid #ffffff",
                  boxShadow: "0 4px 15px rgba(220,38,38,0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff"
                }}>
                  <Sliders size={18} />
                </div>
              </div>

              {/* Native Range input controller */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={handleSliderChange}
                style={{
                  position: "absolute",
                  inset: 0,
                  opacity: 0,
                  cursor: "ew-resize",
                  width: "100%",
                  height: "100%"
                }}
                aria-label="Before and After slider"
              />
            </div>

            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "16px",
              fontSize: "13px",
              color: "#64748b"
            }}>
              <span>⬅ Drag slider left to reveal Showroom After</span>
              <span style={{ fontWeight: "700", color: "#dc2626" }}>Interactive Comparison ({sliderPosition}%)</span>
              <span>Drag slider right to view Before ➡</span>
            </div>
          </div>
        )}

        {/* Tool 2: Hydrophobic Ceramic Simulator */}
        {activeTool === "coating_demo" && (
          <div style={{
            maxWidth: "960px",
            margin: "0 auto",
            background: "#ffffff",
            borderRadius: "24px",
            padding: "32px",
            border: "1px solid #e2e8f0",
            boxShadow: "0 20px 45px -10px rgba(15, 23, 42, 0.08)"
          }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px"
            }} className="coating-grid">
              
              {/* Left: Unprotected Surface */}
              <div style={{
                background: "#f8fafc",
                borderRadius: "16px",
                padding: "24px",
                border: "1.5px solid #e2e8f0"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
                  <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ef4444" }} />
                  <h4 style={{ fontSize: "17px", fontWeight: "800", color: "#0f172a" }}>Uncoated Clearcoat</h4>
                </div>
                <div style={{
                  height: "160px",
                  borderRadius: "12px",
                  background: "linear-gradient(180deg, #94a3b8 0%, #64748b 100%)",
                  position: "relative",
                  overflow: "hidden",
                  marginBottom: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff"
                }}>
                  <div style={{ textAlign: "center", padding: "16px" }}>
                    <div style={{ fontSize: "14px", fontWeight: "700", marginBottom: "4px" }}>Water Sheets & Sticks</div>
                    <div style={{ fontSize: "12px", opacity: 0.9 }}>Mineral deposits, hard water stains & swirl marks penetrate raw clearcoat</div>
                  </div>
                </div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", fontSize: "13px", color: "#64748b" }}>
                  <li>❌ Prone to bird-dropping acid etching</li>
                  <li>❌ UV oxidation causes paint color fading</li>
                  <li>❌ Dirt clings tightly, difficult to wash</li>
                </ul>
              </div>

              {/* Right: Protected 9H Nano Ceramic */}
              <div style={{
                background: "linear-gradient(180deg, #f0f4fc 0%, #fee2e2 100%)",
                borderRadius: "16px",
                padding: "24px",
                border: "1.5px solid #fecaca"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
                  <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#dc2626" }} />
                  <h4 style={{ fontSize: "17px", fontWeight: "800", color: "#172554" }}>9H Ceramic Hydrophobic Shield</h4>
                </div>
                <div style={{
                  height: "160px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #172554 0%, #0f172a 100%)",
                  position: "relative",
                  overflow: "hidden",
                  marginBottom: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  boxShadow: "0 8px 20px rgba(23, 37, 84, 0.3)",
                  border: "1px solid rgba(220, 38, 38, 0.3)"
                }}>
                  <div style={{ textAlign: "center", padding: "16px" }}>
                    <div style={{ fontSize: "14px", fontWeight: "800", color: "#ef4444", marginBottom: "4px" }}>115° Water Contact Angle</div>
                    <div style={{ fontSize: "12px", color: "#ffffff", opacity: 0.95 }}>Water pearls instantly bead up and roll off carrying dust away effortlessly</div>
                  </div>
                </div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", fontSize: "13px", color: "#172554", fontWeight: "600" }}>
                  <li>✓ 9H pencil hardness scratch defense</li>
                  <li>✓ Deep mirror candy-like reflections</li>
                  <li>✓ 3 to 5 Years certified manufacturer warranty</li>
                </ul>
              </div>

            </div>

            <div style={{ textAlign: "center", marginTop: "24px" }}>
              <a href="#services-section" className="btn-primary" style={{ padding: "12px 28px" }}>
                <span>Explore Ceramic & PPF Coating Packages</span>
              </a>
            </div>
          </div>
        )}

      </div>

      <style>{`
        @media (max-width: 768px) {
          .coating-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
