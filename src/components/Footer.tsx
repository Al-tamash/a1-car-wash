"use client";

import React, { useState } from "react";
import { Send, ArrowUp } from "lucide-react";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [communityEmail, setCommunityEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <footer>
      {/* ── TOP NEWSLETTER BANNER (Deep Navy Bar) ── */}
      <div
        style={{
          background: "#0f172a",
          padding: "32px 0",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          borderTop: "3px solid #dc2626"
        }}
      >
        <div
          className="container"
          style={{
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "24px"
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: 900,
                color: "#ffffff",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                margin: 0,
                marginBottom: "4px"
              }}
            >
              Subscribe To Our <span style={{ color: "#ef4444" }}>Newsletter</span>
            </h3>
            <p
              style={{
                fontSize: "13px",
                color: "rgba(255, 255, 255, 0.8)",
                margin: 0
              }}
            >
              Get weekly discounts, detailing tips and slot updates in your inbox.
            </p>
          </div>

          <form
            onSubmit={handleSubscribe}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              maxWidth: "420px",
              width: "100%"
            }}
          >
            <input
              type="email"
              placeholder="Enter your email..."
              required
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              style={{
                flex: 1,
                padding: "11px 16px",
                borderRadius: "8px",
                border: "none",
                fontSize: "13px",
                outline: "none",
                background: "#ffffff",
                color: "#0f172a"
              }}
            />
            <button
              type="submit"
              style={{
                padding: "11px 24px",
                borderRadius: "8px",
                border: "none",
                background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
                color: "#ffffff",
                fontSize: "13px",
                fontWeight: 800,
                cursor: "pointer",
                whiteSpace: "nowrap",
                boxShadow: "0 4px 14px rgba(220, 38, 38, 0.4)"
              }}
            >
              {subscribed ? "Subscribed!" : "Subscribe"}
            </button>
          </form>
        </div>
      </div>

      {/* ── MAIN NAVY FOOTER (5-Column Layout) ── */}
      <div
        style={{
          background: "#172554",
          color: "rgba(255, 255, 255, 0.8)",
          padding: "70px 0 40px 0"
        }}
      >
        <div className="container" style={{ padding: "0 24px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.3fr 0.9fr 1.1fr 1.2fr 0.8fr",
              gap: "40px",
              marginBottom: "50px"
            }}
            className="footer-columns-grid"
          >
            {/* Col 1: Join Our Community */}
            <div>
              <h4
                style={{
                  fontSize: "15px",
                  fontWeight: 800,
                  color: "#ffffff",
                  marginBottom: "16px"
                }}
              >
                Join Our <span style={{ color: "#ef4444" }}>Community</span>
              </h4>
              <p
                style={{
                  fontSize: "13px",
                  lineHeight: 1.7,
                  color: "rgba(255, 255, 255, 0.8)",
                  marginBottom: "20px"
                }}
              >
                Using state-of-the-art technology, we undertake car wash and servicing of your dream machines across Hyderabad.
              </p>

              <form
                onSubmit={handleSubscribe}
                style={{
                  position: "relative",
                  maxWidth: "260px"
                }}
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  value={communityEmail}
                  onChange={(e) => setCommunityEmail(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px 42px 10px 14px",
                    borderRadius: "6px",
                    border: "1px solid rgba(255, 255, 255, 0.25)",
                    background: "rgba(255, 255, 255, 0.1)",
                    color: "#ffffff",
                    fontSize: "13px",
                    outline: "none"
                  }}
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  style={{
                    position: "absolute",
                    right: 4,
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
                    border: "none",
                    borderRadius: "4px",
                    width: "32px",
                    height: "32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    cursor: "pointer"
                  }}
                >
                  <Send size={14} />
                </button>
              </form>
            </div>

            {/* Col 2: Company */}
            <div>
              <h4
                style={{
                  fontSize: "15px",
                  fontWeight: 800,
                  color: "#ffffff",
                  marginBottom: "16px"
                }}
              >
                Company
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {["About", "Contact", "FAQS", "Services"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}-section`}
                      style={{
                        fontSize: "13px",
                        color: "rgba(255, 255, 255, 0.8)",
                        textDecoration: "none",
                        transition: "color 0.2s"
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Opening Hours */}
            <div>
              <h4
                style={{
                  fontSize: "15px",
                  fontWeight: 800,
                  color: "#ffffff",
                  marginBottom: "16px"
                }}
              >
                Opening Hours
              </h4>
              <div style={{ fontSize: "13px", color: "rgba(255, 255, 255, 0.8)", lineHeight: 1.8 }}>
                <div style={{ fontWeight: 700, color: "#ffffff" }}>Everyday (Monday - Sunday)</div>
                <div style={{ marginBottom: "10px" }}>08:00 AM - 09:00 PM</div>
                <div style={{ fontSize: "12px", color: "#f87171", fontWeight: 700 }}>
                  Fast Bay Allocation &amp; Jack Lift Services
                </div>
              </div>
            </div>

            {/* Col 4: Contact Info */}
            <div>
              <h4
                style={{
                  fontSize: "15px",
                  fontWeight: 800,
                  color: "#ffffff",
                  marginBottom: "16px"
                }}
              >
                Contact Info
              </h4>
              <div style={{ fontSize: "13px", color: "rgba(255, 255, 255, 0.8)", lineHeight: 1.8 }}>
                <a
                  href="tel:7045282473"
                  style={{ color: "#ef4444", fontWeight: 800, textDecoration: "none", fontSize: "15px", display: "block" }}
                >
                  +91 70452 82473
                </a>
                <div style={{ color: "rgba(255, 255, 255, 0.9)", margin: "4px 0" }}>
                  care@a1carwash.in
                </div>
                <div style={{ margin: "6px 0", lineHeight: 1.5 }}>
                  Mehfil Restaurant, Raidurg, Darga Chowrasta, Film Nagar Road, Hyderabad, Telangana – 500104
                </div>
              </div>
            </div>

            {/* Col 5: Follow Us & Scroll to Top */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <h4
                  style={{
                    fontSize: "15px",
                    fontWeight: 800,
                    color: "#ffffff",
                    marginBottom: "16px"
                  }}
                >
                  Follow us
                </h4>
                <div style={{ display: "flex", gap: "10px" }}>
                  <a
                    href="#"
                    aria-label="Facebook"
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "6px",
                      background: "rgba(255, 255, 255, 0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ffffff",
                      textDecoration: "none"
                    }}
                  >
                    <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="Twitter"
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "6px",
                      background: "rgba(255, 255, 255, 0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ffffff",
                      textDecoration: "none"
                    }}
                  >
                    <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "6px",
                      background: "rgba(255, 255, 255, 0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ffffff",
                      textDecoration: "none"
                    }}
                  >
                    <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Scroll to Top Circle Button */}
              <div style={{ marginTop: "24px" }}>
                <button
                  onClick={scrollToTop}
                  aria-label="Scroll to top"
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
                    border: "none",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    boxShadow: "0 4px 14px rgba(220, 38, 38, 0.4)",
                    transition: "transform 0.2s"
                  }}
                >
                  <ArrowUp size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div
            style={{
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              paddingTop: "24px",
              textAlign: "center",
              fontSize: "12px",
              color: "rgba(255, 255, 255, 0.5)"
            }}
          >
            © {new Date().getFullYear()} A1 CAR WASH. All Rights Reserved. Quality Car Cleaning &amp; Detailing — Mehfil Restaurant, Raidurg, Hyderabad.
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .footer-columns-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 600px) {
          .footer-columns-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
