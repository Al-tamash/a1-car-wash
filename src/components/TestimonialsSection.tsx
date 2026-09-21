"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface TestimonialItem {
  id: number;
  name: string;
  vehicle: string;
  location: string;
  rating: number;
  review: string;
  initials: string;
}

const INDIAN_REVIEWS: TestimonialItem[] = [
  {
    id: 1,
    name: "Vikram Reddy",
    vehicle: "Hyundai Creta",
    location: "Gachibowli, Hyderabad",
    rating: 5,
    initials: "VR",
    review:
      "The hydraulic lift underbody wash here is top class. They cleared all the dried monsoon mud and grime from the chassis in 20 minutes. 100% RO water left zero white spots on my car!",
  },
  {
    id: 2,
    name: "Ananya Rao",
    vehicle: "Honda City",
    location: "Madhapur, Hyderabad",
    rating: 5,
    initials: "AR",
    review:
      "Booked the deep interior steam sanitization. The cabin smelled fresh and brand new, all coffee stains on the beige upholstery were completely gone. Very professional staff.",
  },
  {
    id: 3,
    name: "Suresh Kumar",
    vehicle: "Toyota Fortuner",
    location: "Jubilee Hills, Hyderabad",
    rating: 5,
    initials: "SK",
    review:
      "Got the 9H Ceramic Shield coating done for my Fortuner. The paint depth and water beading are unreal. Easily the most reliable car detailing studio in the city.",
  },
  {
    id: 4,
    name: "Rahul Sharma",
    vehicle: "Royal Enfield 350",
    location: "Hitec City, Hyderabad",
    rating: 5,
    initials: "RS",
    review:
      "Best bike wash experience in Hyderabad. They took special care with electricals, degreased the chain properly, and gave a high-gloss coat on the fuel tank.",
  },
  {
    id: 5,
    name: "Pooja Iyer",
    vehicle: "Kia Seltos",
    location: "Kondapur, Hyderabad",
    rating: 5,
    initials: "PI",
    review:
      "The WhatsApp slot booking was seamless with zero waiting time at the Raidurg studio. Quick 30-minute express foam wash with superb attention to alloy wheels!",
  },
  {
    id: 6,
    name: "Karthik Varma",
    vehicle: "Tata Nexon EV",
    location: "Raidurg, Hyderabad",
    rating: 5,
    initials: "KV",
    review:
      "Safe and gentle touchless snow foam wash. The supervisor did a full 21-point checklist before handover. Highly recommended for all EV and luxury car owners.",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const totalSlides = INDIAN_REVIEWS.length;

  const minSwipeDistance = 50;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  // Touch Swipe Handlers for mobile
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Get 3 visible cards for desktop
  const visibleCardsDesktop = [
    INDIAN_REVIEWS[currentIndex],
    INDIAN_REVIEWS[(currentIndex + 1) % totalSlides],
    INDIAN_REVIEWS[(currentIndex + 2) % totalSlides],
  ];

  return (
    <section id="testimonials-section" className="testi-ref-section">
      <div className="testi-ref-container">
        {/* ── Top Header ── */}
        <div className="testi-ref-header">
          <div className="testi-ref-title-wrap">
            <h2 className="testi-ref-title">
              What <span className="testi-ref-title-accent">Our Clients</span> Say
            </h2>
            <p className="testi-ref-subtitle">
              Hear directly from our satisfied car &amp; bike owners
            </p>
          </div>
        </div>

        {/* ── Carousel Wrapper with Left & Right Side Buttons ── */}
        <div className="testi-carousel-outer-wrap">
          {/* Left Arrow Button */}
          <button
            type="button"
            className="testi-side-nav-btn testi-side-nav-left"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Cards Content Area */}
          <div className="testi-cards-center-area">
            {/* ── DESKTOP VIEW: 3-Card Grid ── */}
            <div className="testi-desktop-grid">
              {visibleCardsDesktop.map((item) => (
                <div key={item.id} className="testi-ref-card">
                  <div className="testi-ref-card-top">
                    <div className="testi-ref-quote-mark">“</div>
                    <div className="testi-ref-stars">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="testi-star-icon"
                          fill="#f59e0b"
                          color="#f59e0b"
                        />
                      ))}
                    </div>
                  </div>

                  <p className="testi-ref-card-text">{item.review}</p>

                  <div className="testi-ref-author">
                    <div className="testi-ref-author-info">
                      <h3 className="testi-ref-author-name">{item.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ── MOBILE VIEW: 1 Single Card Horizontal Swipe Slider ── */}
            <div
              className="testi-mobile-slider-wrap"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <div
                className="testi-mobile-track"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {INDIAN_REVIEWS.map((item) => (
                  <div key={item.id} className="testi-mobile-slide">
                    <div className="testi-ref-card">
                      <div className="testi-ref-card-top">
                        <div className="testi-ref-quote-mark">“</div>
                        <div className="testi-ref-stars">
                          {[...Array(item.rating)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className="testi-star-icon"
                              fill="#f59e0b"
                              color="#f59e0b"
                            />
                          ))}
                        </div>
                      </div>

                      <p className="testi-ref-card-text">{item.review}</p>

                      <div className="testi-ref-author">
                        <div className="testi-ref-author-info">
                          <h3 className="testi-ref-author-name">{item.name}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            type="button"
            className="testi-side-nav-btn testi-side-nav-right"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* ── Carousel Pagination Dots ── */}
        <div className="testi-ref-dots">
          {INDIAN_REVIEWS.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`testi-ref-dot ${idx === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to review ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      <style>{`
        .testi-ref-section {
          position: relative;
          background: #ffffff;
          padding: 85px 24px 95px;
          overflow: hidden;
          box-sizing: border-box;
          border-top: 1px solid #f1f5f9;
        }

        .testi-ref-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        /* Header */
        .testi-ref-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .testi-ref-title {
          font-family: var(--font-heading, 'Outfit', sans-serif);
          font-size: clamp(2rem, 3.2vw, 2.75rem);
          font-weight: 600;
          color: #000000;
          line-height: 1.15;
          letter-spacing: -0.025em;
          margin: 0 0 8px 0;
        }

        .testi-ref-title-accent {
          color: #ef4444;
        }

        .testi-ref-subtitle {
          font-family: var(--font-body, 'Plus Jakarta Sans', sans-serif);
          font-size: 15px;
          color: #64748b;
          margin: 0;
        }

        /* Outer Carousel Wrapper with Left/Right Buttons */
        .testi-carousel-outer-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          width: 100%;
          margin-bottom: 36px;
          position: relative;
        }

        .testi-cards-center-area {
          flex: 1;
          max-width: 1140px;
          overflow: hidden;
        }

        /* Side Navigation Arrows (Left and Right) */
        .testi-side-nav-btn {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          color: #0d1b3e;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(15, 23, 42, 0.08);
          transition: all 0.25s ease;
          flex-shrink: 0;
          z-index: 5;
        }

        .testi-side-nav-btn:hover {
          background: #ef4444;
          border-color: #ef4444;
          color: #ffffff;
          transform: scale(1.08);
          box-shadow: 0 6px 18px rgba(239, 68, 68, 0.4);
        }

        /* Desktop 3-Card Grid */
        .testi-desktop-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          width: 100%;
        }

        /* Mobile Slider Container (Hidden on Desktop) */
        .testi-mobile-slider-wrap {
          display: none;
        }

        .testi-ref-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 32px 26px 26px;
          box-shadow: 0 10px 25px -4px rgba(15, 23, 42, 0.06);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          min-height: 280px;
          box-sizing: border-box;
        }

        .testi-ref-card:hover {
          transform: translateY(-6px);
          border-color: rgba(239, 68, 68, 0.4);
          box-shadow: 0 20px 35px -8px rgba(15, 23, 42, 0.12);
        }

        /* Top Row in Card */
        .testi-ref-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
        }

        .testi-ref-quote-mark {
          font-family: Georgia, serif;
          font-size: 46px;
          line-height: 1;
          color: #ef4444;
          opacity: 0.85;
          height: 24px;
        }

        .testi-ref-stars {
          display: flex;
          align-items: center;
          gap: 3px;
        }

        /* Review Text */
        .testi-ref-card-text {
          font-family: var(--font-body, 'Plus Jakarta Sans', sans-serif);
          font-size: 14px;
          line-height: 1.65;
          color: #334155;
          margin: 0 0 24px 0;
          flex: 1;
        }

        /* Author Row */
        .testi-ref-author {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-top: 18px;
          border-top: 1px solid #f1f5f9;
        }

        .testi-ref-author-avatar {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0d1b3e 0%, #1e3a8a 100%);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.05em;
          flex-shrink: 0;
        }

        .testi-ref-author-info {
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .testi-ref-author-name {
          font-family: var(--font-heading, 'Outfit', sans-serif);
          font-size: 15.5px;
          font-weight: 800;
          color: #000000;
          margin: 0 0 2px 0;
        }

        .testi-ref-author-meta {
          font-family: var(--font-body, 'Plus Jakarta Sans', sans-serif);
          font-size: 12px;
          color: #64748b;
          margin: 0;
        }

        /* Pagination Dots */
        .testi-ref-dots {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .testi-ref-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #cbd5e1;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .testi-ref-dot.active {
          width: 24px;
          border-radius: 999px;
          background: #ef4444;
        }

        /* ──────────────────────────────────────────────────────────────────
           MOBILE (LEFT & RIGHT SIDE BUTTONS FLANKING 1 CARD)
           ────────────────────────────────────────────────────────────────── */
        @media (max-width: 768px) {
          .testi-ref-section {
            padding: 50px 12px 60px;
          }

          .testi-ref-header {
            margin-bottom: 24px;
          }

          .testi-ref-title {
            font-size: 1.8rem;
          }

          .testi-ref-subtitle {
            font-size: 13px;
          }

          .testi-carousel-outer-wrap {
            gap: 8px;
            margin-bottom: 20px;
          }

          .testi-side-nav-btn {
            width: 38px;
            height: 38px;
          }

          /* Hide Desktop Grid on Mobile */
          .testi-desktop-grid {
            display: none;
          }

          /* Show 1-Card Mobile Slider */
          .testi-mobile-slider-wrap {
            display: block;
            width: 100%;
            overflow: hidden;
          }

          .testi-mobile-track {
            display: flex;
            width: 100%;
            transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          }

          .testi-mobile-slide {
            flex: 0 0 100%;
            width: 100%;
            box-sizing: border-box;
            padding: 2px;
          }

          .testi-ref-card {
            padding: 24px 18px 18px;
            min-height: auto;
          }

          .testi-ref-card-text {
            font-size: 13.5px;
            margin-bottom: 16px;
          }
        }
      `}</style>
    </section>
  );
}
