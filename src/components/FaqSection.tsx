"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    id: "duration",
    question: "How long does a car wash take?",
    answer:
      "The duration of a car wash can vary based on the type of service. A basic exterior wash might take around 15-20 minutes, while a more comprehensive detailing service could extend to 2-3 hours. Factors such as the size of the vehicle and the level of cleaning required also influence the time needed."
  },
  {
    id: "vehicle-size",
    question: "What size vehicles can fit through the car wash tunnel?",
    answer:
      "Our wash bays and detailing bays accommodate everything from compact hatchbacks to full-size luxury SUVs, pickup trucks, and executive sedans up to 2.2 meters in height and 2.5 meters in width."
  },
  {
    id: "appointment",
    question: "Do I have to make an appointment for a car wash?",
    answer:
      "Walk-ins are always welcome for our Body Wash bays. However, for 7-Seater or 5-Seater Full Car Wash (with Jack Lift, Oil & Diesel Wash), Interior Deep Cleaning, Teflon Coating, or Underbody Anti-Rust Treatment, we recommend booking in advance or messaging us on WhatsApp (70952 82473) for prompt bay allocation."
  },
  {
    id: "contact",
    question: "Is there any way to contact with you?",
    answer:
      "Yes! You can call us directly at 70952 82473, reach out on WhatsApp anytime for instant slot bookings, or submit the contact form right below."
  },
  {
    id: "payment",
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit/debit cards, UPI (Google Pay, PhonePe, Paytm), Net Banking, and cash. Corporate billing accounts are also supported."
  }
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("duration");

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq-section"
      style={{
        background: "#f8fafc",
        padding: "90px 0"
      }}
    >
      <div className="container" style={{ padding: "0 24px", maxWidth: "860px" }}>
        {/* Section Heading */}
        <h2
          style={{
            fontSize: "clamp(2rem, 3.2vw, 2.75rem)",
            fontWeight: 600,
            color: "#172554",
            textAlign: "center",
            letterSpacing: "-0.02em",
            marginBottom: "48px"
          }}
        >
          Frequently Asked <span style={{ color: "#dc2626" }}>Questions</span>
        </h2>

        {/* Accordions */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                style={{
                  background: isOpen ? "#fef2f2" : "#ffffff",
                  border: "1px solid",
                  borderColor: isOpen ? "#fecaca" : "#e2e8f0",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: isOpen ? "0 4px 14px rgba(220, 38, 38, 0.08)" : "0 2px 6px rgba(0,0,0,0.02)",
                  transition: "all 0.2s ease"
                }}
              >
                <button
                  onClick={() => toggle(faq.id)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "20px 24px",
                    background: "none",
                    border: "none",
                    textAlign: "left",
                    cursor: "pointer",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: isOpen ? "#172554" : "#0f172a",
                    gap: "16px"
                  }}
                >
                  <span>{faq.question}</span>
                  <div
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "6px",
                      background: isOpen ? "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)" : "#fee2e2",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: isOpen ? "#ffffff" : "#dc2626",
                      flexShrink: 0,
                      transition: "all 0.2s ease"
                    }}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: "0 24px 22px 24px",
                      fontSize: "14px",
                      color: "#475569",
                      lineHeight: 1.75
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
