"use client";

import React from "react";
import { ArrowRight, Calendar } from "lucide-react";

const posts = [
  {
    id: 1,
    date: "March 15, 2026",
    category: "Oil Change Tips",
    title: "Oil Change Tips",
    excerpt:
      "Learn about the importance of regular oil changes and how they can extend your engine life and improve overall performance.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    date: "March 22, 2026",
    category: "Car Maintenance Tips",
    title: "Car Maintenance Tips",
    excerpt:
      "Discover essential maintenance tips that every car owner should know to keep their vehicle running smoothly all year round.",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    date: "April 5, 2026",
    category: "Seasonal Car Care Tips",
    title: "Seasonal Car Care Tips",
    excerpt:
      "Prepare your car for every season with expert tips on weatherproofing, tyre checks, and paint protection for year-round care.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80",
  },
];

export default function BlogSection() {
  return (
    <section
      id="blog-section"
      style={{ background: "#f8fafc", padding: "80px 0" }}
    >
      <div className="container" style={{ padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              fontWeight: 900,
              color: "#172554",
              letterSpacing: "-0.02em",
              marginBottom: "12px",
            }}
          >
            Our Blog
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: "#64748b",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Stay updated with the latest tips, tricks and news about car care and detailing.
          </p>
        </div>

        {/* 3-column blog grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "28px",
          }}
          className="blog-grid"
        >
          {posts.map((post) => (
            <article
              key={post.id}
              style={{
                background: "#ffffff",
                borderRadius: "14px",
                overflow: "hidden",
                border: "1px solid #e2e8f0",
                boxShadow: "0 4px 16px rgba(15,23,42,0.05)",
                transition: "all 0.25s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 12px 32px rgba(15,23,42,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 4px 16px rgba(15,23,42,0.05)";
              }}
            >
              {/* Image */}
              <div
                style={{
                  height: "200px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.4s ease",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "12px",
                    left: "12px",
                    background: "#dc2626",
                    color: "#ffffff",
                    fontSize: "11px",
                    fontWeight: 800,
                    padding: "4px 12px",
                    borderRadius: "9999px",
                  }}
                >
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "22px 24px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "12px",
                    color: "#94a3b8",
                    marginBottom: "10px",
                  }}
                >
                  <Calendar size={12} />
                  <span>{post.date}</span>
                </div>
                <h3
                  style={{
                    fontSize: "17px",
                    fontWeight: 800,
                    color: "#172554",
                    marginBottom: "10px",
                    lineHeight: 1.35,
                  }}
                >
                  {post.title}
                </h3>
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "#64748b",
                    lineHeight: 1.65,
                    marginBottom: "18px",
                  }}
                >
                  {post.excerpt}
                </p>
                <a
                  href="#"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "13px",
                    fontWeight: 800,
                    color: "#dc2626",
                    textDecoration: "none",
                  }}
                >
                  Read More <ArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .blog-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .blog-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
