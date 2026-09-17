"use client";

import React, { useState } from "react";
import { 
  Search,
  CalendarCheck2, 
  Sparkles, 
  ShieldCheck 
} from "lucide-react";

interface StepItem {
  id: string;
  number: string;
  title: string;
  description: string;
  gradient: string;
  glowColor: string;
  dotColor: string;
  icon: React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>;
}

const STEPS_DATA: StepItem[] = [
  {
    id: "step-1",
    number: "01",
    title: "Choose Service",
    description: "Select from our express foam wash, interior deep steam, or 9H ceramic coating.",
    gradient: "linear-gradient(135deg, #ff4d4d 0%, #ef4444 50%, #dc2626 100%)",
    glowColor: "rgba(239, 68, 68, 0.4)",
    dotColor: "#ef4444",
    icon: Search,
  },
  {
    id: "step-2",
    number: "02",
    title: "Instant Booking",
    description: "Pick your preferred bay slot with real-time confirmation and zero waiting hassle.",
    gradient: "linear-gradient(135deg, #1e3a8a 0%, #0d1b3e 100%)",
    glowColor: "rgba(13, 27, 62, 0.4)",
    dotColor: "#1e3a8a",
    icon: CalendarCheck2,
  },
  {
    id: "step-3",
    number: "03",
    title: "Expert Detailing",
    description: "Certified technicians wash with 100% RO soft-water & pH-neutral snow foam.",
    gradient: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
    glowColor: "rgba(220, 38, 38, 0.4)",
    dotColor: "#dc2626",
    icon: Sparkles,
  },
  {
    id: "step-4",
    number: "04",
    title: "Pristine Handover",
    description: "21-point supervisor quality check before you drive away in showroom shine.",
    gradient: "linear-gradient(135deg, #1e3a8a 0%, #0d1b3e 100%)",
    glowColor: "rgba(13, 27, 62, 0.4)",
    dotColor: "#1e3a8a",
    icon: ShieldCheck,
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section id="how-it-works" className="how-ref-section">
      <div className="how-ref-container">
        {/* Main Title */}
        <div className="how-ref-header">
          <div className="how-ref-eyebrow">
            <span className="how-ref-eyebrow-dash" />
            <span>Process Flow</span>
          </div>
          <h2 className="how-ref-title">
            How it <span className="how-ref-title-accent">works?</span>
          </h2>
        </div>

        {/* Horizontal Process Steps Flow */}
        <div className="how-ref-flow">
          {STEPS_DATA.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === STEPS_DATA.length - 1;
            const isHovered = activeStep === idx;

            return (
              <React.Fragment key={step.id}>
                {/* Single Step Column */}
                <div 
                  className="how-ref-step-col"
                  onMouseEnter={() => setActiveStep(idx)}
                  onMouseLeave={() => setActiveStep(null)}
                >
                  {/* Glowing Squircle Icon (Bright Red & Navy Blue only) */}
                  <div 
                    className="how-ref-squircle-wrap"
                    style={{
                      transform: isHovered ? "translateY(-6px) scale(1.05)" : "translateY(0) scale(1)",
                    }}
                  >
                    <div 
                      className="how-ref-squircle"
                      style={{
                        background: step.gradient,
                        boxShadow: `0 16px 32px -4px ${step.glowColor}`,
                      }}
                    >
                      <Icon size={28} color="#ffffff" strokeWidth={2.2} />
                    </div>
                  </div>

                  {/* Step Title (Black text) */}
                  <h3 className="how-ref-step-title">{step.title}</h3>

                  {/* Step Description */}
                  <p className="how-ref-step-desc">{step.description}</p>
                </div>

                {/* Dotted Connecting Line Between Steps (Except Last) */}
                {!isLast && (
                  <div className="how-ref-connector" aria-hidden="true">
                    <span 
                      className="how-ref-connector-dot start-dot" 
                      style={{ backgroundColor: step.dotColor }} 
                    />
                    <div className="how-ref-connector-line" />
                    <span 
                      className="how-ref-connector-dot end-dot" 
                      style={{ backgroundColor: STEPS_DATA[idx + 1].dotColor }} 
                    />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      <style>{`
        .how-ref-section {
          position: relative;
          width: 100%;
          background: #ffffff;
          padding: 80px 24px 90px;
          overflow: hidden;
          box-sizing: border-box;
        }

        .how-ref-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .how-ref-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .how-ref-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #dc2626;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .how-ref-eyebrow-dash {
          width: 20px;
          height: 2.5px;
          background: #dc2626;
          border-radius: 99px;
        }

        .how-ref-title {
          font-family: var(--font-heading, 'Outfit', sans-serif);
          font-size: clamp(2rem, 3.2vw, 2.75rem);
          font-weight: 600;
          color: #000000;
          letter-spacing: -0.02em;
          margin: 0;
        }

        .how-ref-title-accent {
          color: #ef4444;
        }

        /* Horizontal Flow Layout */
        .how-ref-flow {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          width: 100%;
          gap: 12px;
        }

        /* Step Column */
        .how-ref-step-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          flex: 1;
          max-width: 220px;
          transition: transform 0.3s ease;
          cursor: pointer;
        }

        /* Squircle Icon */
        .how-ref-squircle-wrap {
          margin-bottom: 24px;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .how-ref-squircle {
          width: 76px;
          height: 76px;
          border-radius: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        /* Step Typography (Black text) */
        .how-ref-step-title {
          font-family: var(--font-heading, 'Outfit', sans-serif);
          font-size: 17px;
          font-weight: 800;
          color: #000000;
          margin: 0 0 10px 0;
          line-height: 1.25;
        }

        .how-ref-step-desc {
          font-family: var(--font-body, 'Plus Jakarta Sans', sans-serif);
          font-size: 13.5px;
          line-height: 1.55;
          color: #334155;
          margin: 0;
          max-width: 200px;
        }

        /* Connecting Dotted Line with Dots */
        .how-ref-connector {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex: 0.8;
          height: 76px;
          position: relative;
          padding: 0 4px;
        }

        .how-ref-connector-line {
          flex: 1;
          height: 0;
          border-top: 2px dashed #cbd5e1;
          margin: 0 6px;
        }

        .how-ref-connector-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          flex-shrink: 0;
          box-shadow: 0 0 8px currentColor;
        }

        /* ──────────────────────────────────────────────────────────────────
           MOBILE: VERTICAL CONNECTED FLOW (NO HORIZONTAL SCROLL)
           ────────────────────────────────────────────────────────────────── */
        @media (max-width: 768px) {
          .how-ref-section {
            padding: 50px 16px 60px;
          }

          .how-ref-header {
            margin-bottom: 36px;
          }

          .how-ref-flow {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0;
            overflow: visible;
            padding: 0;
            margin: 0;
          }

          .how-ref-step-col {
            max-width: 300px;
            width: 100%;
            flex: none;
            padding: 8px 0;
          }

          .how-ref-squircle-wrap {
            margin-bottom: 14px;
          }

          .how-ref-squircle {
            width: 70px;
            height: 70px;
            border-radius: 20px;
          }

          .how-ref-step-title {
            font-size: 16.5px;
            margin: 0 0 6px 0;
          }

          .how-ref-step-desc {
            font-size: 13px;
            line-height: 1.5;
            max-width: 270px;
          }

          /* Vertical Dotted Connector Line */
          .how-ref-connector {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            width: 20px;
            height: 44px;
            padding: 4px 0;
            margin: 6px 0;
            flex: none;
          }

          .how-ref-connector-line {
            width: 0;
            height: 100%;
            border-top: none;
            border-left: 2px dashed #cbd5e1;
            margin: 4px 0;
          }
        }
      `}</style>
    </section>
  );
}
