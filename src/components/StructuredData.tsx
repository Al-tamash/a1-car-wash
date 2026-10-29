import React from "react";
import { STORES_DATA, StoreLocation } from "@/data/storesData";

const BASE_URL = "https://a1carwash.in";

/**
 * Root website & organization schema
 */
export function RootJsonLd() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: BASE_URL,
    name: "A1 Car Wash",
    description:
      "Quality Car Cleaning & Detailing located at Mehfil Restaurant, Raidurg, Darga Chowrasta, Film Nagar Road, Hyderabad. Hydraulic Jack Lift car washes, snow foam, interior deep cleaning, teflon coating & bike detailing.",
    inLanguage: "en-IN",
    publisher: {
      "@id": `${BASE_URL}/#organization`,
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "AutoWash",
    "@id": `${BASE_URL}/#organization`,
    name: "A1 Car Wash",
    alternateName: "A1 Car Detailing Studio",
    url: BASE_URL,
    logo: `${BASE_URL}/gallery/real-storefront.png`,
    image: `${BASE_URL}/gallery/real-fortuner-studio-lights.png`,
    telephone: "+917095282473",
    email: "care@a1carwash.in",
    priceRange: "₹₹ (₹150 - ₹4,000)",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, Debit Card, UPI, Google Pay, PhonePe, Paytm",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Near Mehfil Restaurant, Raidurg, Darga Chowrasta, Film Nagar Road",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500104",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 17.4149867,
      longitude: 78.3941551,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "21:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "860",
      bestRating: "5",
      worstRating: "1",
    },
    areaServed: [
      { "@type": "City", name: "Hyderabad" },
      { "@type": "AdministrativeArea", name: "Raidurg" },
      { "@type": "AdministrativeArea", name: "Film Nagar" },
      { "@type": "AdministrativeArea", name: "Banjara Hills" },
      { "@type": "AdministrativeArea", name: "Jubilee Hills" },
      { "@type": "AdministrativeArea", name: "Gachibowli" },
      { "@type": "AdministrativeArea", name: "Madhapur" },
      { "@type": "AdministrativeArea", name: "Narsingi" },
      { "@type": "AdministrativeArea", name: "Shaikpet" },
      { "@type": "AdministrativeArea", name: "Mehdipatnam" },
      { "@type": "AdministrativeArea", name: "Nanal Nagar" },
      { "@type": "AdministrativeArea", name: "Himayat Sagar" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "A1 Car Wash & Detailing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Full Car Wash with Hydraulic Jack Lift & Diesel Wash",
            description:
              "Hydraulic jack lift underbody wash, engine oil & diesel degreasing, deep cabin vacuum, dashboard polish, outside high-density foam wash, tyre gloss.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Express Body Wash",
            description:
              "High-pressure snow foam bath, microfiber scratch-free scrub, cabin vacuuming, dashboard polish, tyre dressing.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Interior Deep Cleaning Spa",
            description:
              "Seat and upholstery shampoo extraction, ceiling cleaning, door panels, floor mat extraction, AC vent sanitization.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Teflon High-Gloss Paint Protection Coating",
            description:
              "Fluoropolymer protective shield bonding to clear coat, swirl defense, deep wet-look gloss and hydrophobic water beading.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Underbody Anti-Rust Coating + Silencer Zinc Spray",
            description:
              "Heavy-duty chassis bitumen rustproofing layer shielding metal against monsoon waterlogging and road salt corrosion.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Two-Wheeler & Superbike Wash",
            description:
              "Touchless snow foam bath, diesel engine & chain degreasing, chrome buffing, tyre shine for commuter bikes, Bullets, and sports bikes.",
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}

/**
 * FAQ Schema JSON-LD
 */
export function FaqJsonLd() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does a car wash take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The duration of a car wash can vary based on the type of service. A basic exterior wash takes around 15-20 minutes, while comprehensive detailing services take 2-3 hours depending on vehicle size and cleaning requirements.",
        },
      },
      {
        "@type": "Question",
        name: "What size vehicles can fit through the car wash tunnel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our wash bays and detailing bays accommodate compact hatchbacks, sedans, luxury SUVs, and pickup trucks up to 2.2 meters in height and 2.5 meters in width.",
        },
      },
      {
        "@type": "Question",
        name: "Do I have to make an appointment for a car wash?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Walk-ins are welcome for body wash bays. For 7-Seater/5-Seater Full Car Wash (with Jack Lift, Oil & Diesel Wash), Interior Deep Cleaning, Teflon Coating, or Underbody Anti-Rust Treatment, we recommend booking in advance via phone or WhatsApp at 70952 82473.",
        },
      },
      {
        "@type": "Question",
        name: "Is there any way to contact with you?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can call us directly at 70952 82473, reach out on WhatsApp anytime for instant slot bookings, or submit the contact form on the website.",
        },
      },
      {
        "@type": "Question",
        name: "What payment methods do you accept?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We accept all major credit/debit cards, UPI (Google Pay, PhonePe, Paytm), Net Banking, and cash. Corporate billing accounts are also supported.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}

/**
 * Breadcrumbs Schema JSON-LD
 */
export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  );
}

/**
 * Store Location specific schema JSON-LD
 */
export function StoreLocationJsonLd({ store }: { store: StoreLocation }) {
  const storeSchema = {
    "@context": "https://schema.org",
    "@type": "AutoWash",
    "@id": `${BASE_URL}/stores/${store.slug}#store`,
    name: store.name,
    description: `${store.heroHeadline}. ${store.heroSubheadline}`,
    url: `${BASE_URL}/stores/${store.slug}`,
    hasMap: store.googleMapsLink,
    telephone: `+91${store.phone.replace(/[^0-9]/g, "")}`,
    email: store.email,
    image: store.image,
    priceRange: "₹₹ (₹150 - ₹4,000)",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, Debit Card, UPI, Google Pay, PhonePe, Paytm",
    address: {
      "@type": "PostalAddress",
      streetAddress: store.address,
      addressLocality: store.city,
      addressRegion: "Telangana",
      postalCode: store.pincode,
      addressCountry: "IN",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "21:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: store.rating.toString(),
      reviewCount: store.reviewCount.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    branchOf: {
      "@id": `${BASE_URL}/#organization`,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${store.shortName} Detailing Packages`,
      itemListElement: store.features.map((feat) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: feat,
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(storeSchema) }}
    />
  );
}
