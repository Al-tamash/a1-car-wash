import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A1 CAR WASH | Quality Car Cleaning & Detailing — Hyderabad",
  description:
    "A1 CAR WASH — Quality Car Cleaning & Detailing located at Mehfil Restaurant, Raidurg, Darga Chowrasta, Film Nagar Road, Hyderabad. Full Car Wash with Jack Lift, Body Wash, Interior Deep Cleaning, Teflon Coating, Underbody Anti-Rust Coating, and Bike Detailing. Call 70452 82473.",
  keywords: [
    "A1 car wash hyderabad",
    "car wash raidurg",
    "car detailing darga chowrasta",
    "jack lift car wash hyderabad",
    "film nagar road car wash",
    "underbody anti rust coating hyderabad",
    "teflon coating hyderabad",
    "interior deep cleaning car wash",
    "bike wash raidurg"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
