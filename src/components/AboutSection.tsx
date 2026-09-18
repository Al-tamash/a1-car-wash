"use client";

import React from "react";
import Link from "next/link";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import "./AboutSection.css";

export default function AboutSection() {

  return (
    <section id="about" className="about-new-ref-root">
      <div className="about-new-container">
        <div className="about-new-grid">
          {/* ──── LEFT COLUMN: GEOMETRIC CHAMFER IMAGE + INSET PHOTO + STAT CARD ──── */}
          <div className="about-new-visual-wrap">
            {/* Main Asymmetric/Chamfer Corner Image */}
            <div className="about-new-main-img-box">
              <img
                src="/gallery/about-fortuner-studio.jpg"
                alt="A1 Car Detailing Studio Under Inspection Lights"
                loading="lazy"
              />
            </div>

            {/* Inset Top-Right Floating Photo */}
            <div className="about-new-inset-card">
              <img
                src="/gallery/about-interceptor-bike.jpg"
                alt="Master Detailer Foam Washing Two-Wheeler"
                loading="lazy"
              />
            </div>

            {/* Bottom-Left Floating Stat Card */}
            <div className="about-new-stat-card">
              <div className="about-stat-top-row">
                <span className="about-stat-label">Est. Since</span>
                <div className="about-stat-icon-wrap">
                  <Sparkles size={16} />
                </div>
              </div>
              <div className="about-stat-number">
                <span style={{ color: "#e53935", fontWeight: 800 }}>1997</span>
              </div>
              <div className="about-stat-bottom-text">
                <span>★</span>
                <span>Trusted for 28+ Years</span>
              </div>
            </div>
          </div>

          {/* ──── RIGHT COLUMN: CONTENT & 6-CHECKLIST GRID ──── */}
          <div className="about-new-content-col">
            {/* Eyebrow */}
            <div className="about-new-eyebrow">
              <span className="about-eyebrow-diamond" />
              <span className="about-eyebrow-h-line" />
              <span>About Company</span>
            </div>

            {/* Main Headline */}
            <h2 className="about-new-heading">
              Building Showroom Perfection With <span>Advanced Car Care</span>
            </h2>

            {/* Description Paragraph */}
            <p className="about-new-desc">
              We deliver showroom shine with hydraulic underbody lifts, touchless pH-neutral snow foam, and 100% RO soft-water for a spotless, scratch-free finish.
            </p>

            {/* 6-Checklist Grid (2 columns x 3 rows) */}
            <div className="about-checklist-grid">
              <div className="about-check-item">
                <div className="about-check-circle">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span className="about-check-text">Best Value Packages</span>
              </div>

              <div className="about-check-item">
                <div className="about-check-circle">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span className="about-check-text">100% RO Soft Water</span>
              </div>

              <div className="about-check-item">
                <div className="about-check-circle">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span className="about-check-text">Hydraulic Ramp Lift</span>
              </div>

              <div className="about-check-item">
                <div className="about-check-circle">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span className="about-check-text">9H Ceramic Shield</span>
              </div>

              <div className="about-check-item">
                <div className="about-check-circle">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span className="about-check-text">Deep Steam Cleaning</span>
              </div>

              <div className="about-check-item">
                <div className="about-check-circle">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span className="about-check-text">Certified Specialists</span>
              </div>
            </div>

            {/* Bottom Row: Discover Now */}
            <div className="about-new-actions-row">
              <Link href="/about" className="about-btn-discover">
                <span>Discover Now</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
