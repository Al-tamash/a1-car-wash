export interface SubServiceItem {
  id: string;
  name: string;
  image: string;
  badge?: string;
  features: string[];
  description: string;
}

export interface MainServiceCategory {
  id: string;
  slug: string;
  step: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  badge?: string;
  highlights: string[];
  subServices: SubServiceItem[];
}

export const THREE_MAIN_SERVICES: MainServiceCategory[] = [
  {
    id: "car-wash",
    slug: "car-wash",
    step: "01",
    title: "Car Wash",
    badge: "Most Popular",
    tagline: "Hydraulic Jack Lift Washes, Snow Foam Bath, Interior Deep Cleaning & Underbody Protection",
    description:
      "Complete four-wheeler care powered by heavy hydraulic jack lift ramps, RO soft water foam baths, diesel chassis degreasing, and interior deep extraction.",
    image: "/services/full-car-wash-clean.jpg",
    highlights: [
      "Hydraulic Jack Lift Elevation",
      "Underbody Oil & Diesel Degreasing",
      "Outside Snow Foam Wash & Microfiber Cleanse",
      "Interior Deep Vacuum & Dashboard Polish",
      "Underbody Anti-Rust + Silencer Spray",
    ],
    subServices: [
      {
        id: "full-car-wash",
        name: "Full Car Wash (Jack Lift & Diesel Wash)",
        image: "/services/full-car-wash-clean.jpg",
        features: [
          "Hydraulic Jack Lift Underbody Wash",
          "Oil & Diesel Engine Degrease",
          "Deep Interior Cabin Vacuum",
          "Dashboard & Console Polish",
          "Outside High-Density Foam Wash",
          "Deep Jet-Black Tyre Polish",
        ],
        description:
          "Our signature complete care package. Elevated on hydraulic ramps with oil and diesel wash for complete underbody mud extraction, chassis degreasing, and inside-out detailing.",
      },
      {
        id: "body-wash",
        name: "Body Wash (Exterior & Vacuum)",
        image: "/services/body-wash-clean.jpg",
        features: [
          "High-Pressure Snow Foam Bath",
          "Microfiber Scratch-Free Hand Scrub",
          "Complete Inside Cabin Vacuuming",
          "Dashboard & Console Polish",
          "Tyre Rim & Tread Dressing",
          "Crystal Clear Windshield Wipe",
        ],
        description:
          "Rapid exterior high-density snow foam bath with thorough interior cabin vacuuming and dashboard dressing for a spotless, refreshed drive.",
      },
      {
        id: "interior-deep-cleaning",
        name: "Interior Deep Cleaning Spa",
        image: "/services/interior-steam-clean.jpg",
        features: [
          "Fabric & Leather Seat Shampoo Extraction",
          "Door Panel & Armrest Scrubbing",
          "Ceiling & Roof Lining Cleaning",
          "Floor Mat Deep Washing & Extraction",
          "Anti-Bacterial AC Vent Sanitization",
          "Premium Non-Greasy Interior Polish",
        ],
        description:
          "Complete interior rejuvenation removing stains, mud, dust, spills, and odors with professional extraction machines and UV protectant conditioners.",
      },
      {
        id: "underbody-coating",
        name: "Underbody Anti-Rust + Silencer Spray",
        image: "/services/underbody-coating-clean.jpg",
        features: [
          "Heavy-Duty Chassis Anti-Rust Layer",
          "Black Colour Protective Underside Coat",
          "High-Temperature Silencer Zinc Spray",
          "Monsoon, Mud & Road Salt Shield",
          "Suspension & Floor Pan Protection",
          "Vibration & Noise Damping",
        ],
        description:
          "Long-lasting bitumen and wax-based rustproofing compound protecting chassis metal against Hyderabad monsoons, waterlogging, and underbody corrosion.",
      },
    ],
  },
  {
    id: "bike-wash",
    slug: "bike-wash",
    step: "02",
    title: "Bike Wash",
    badge: "Two-Wheeler Care",
    tagline: "Snow Foam Bath, Diesel Engine & Chain Degreasing for Normal, Bullet & Sports Bikes",
    description:
      "Specialized two-wheeler care designed for commuter motorcycles, Royal Enfield Bullets, and high-performance sports bikes.",
    image: "/services/standard-bike-wash.jpg",
    highlights: [
      "High-Pressure Snow Foam Wash",
      "Heavy Diesel Engine & Chain Degrease",
      "Royal Enfield Bullet Special Care",
      "Superbike & Sports Bike Delicate Care",
      "Tyre & Rim Shine Dressing",
    ],
    subServices: [
      {
        id: "normal-bike-wash",
        name: "Normal Bike Wash",
        image: "/services/normal-bike-wash-clean.jpg",
        features: [
          "High-Pressure Snow Foam Bath",
          "Engine Mud & Road Grime Cleansing",
          "Chain Cleansing & Spray Lubing",
          "Alloy Wheels & Spokes Wash",
          "High-Gloss Microfiber Mirror Wipe",
        ],
        description:
          "Thorough two-wheeler wash lifting daily commuter dust, road grime, and chain grease for a crisp, smooth ride.",
      },
      {
        id: "bullet-wash",
        name: "Standard Bike Wash",
        image: "/services/standard-bike-wash.jpg",
        features: [
          "Heavy Diesel Engine Degreasing",
          "Thick Snow Foam Soak & Agitation",
          "Chrome Buffing & Silencer Wipe",
          "Chain Cleanse & Oil Polish",
          "Spoke Rim Detailed Cleaning",
        ],
        description:
          "Specialized treatment for heavy cruisers with diesel engine wash to remove stubborn oil leaks, road grease, and baked-on engine mud.",
      },
      {
        id: "sports-bike-wash",
        name: "Sports Bike Wash",
        image: "/services/sports-bike-wash-clean.jpg",
        features: [
          "Gentle pH-Neutral Foam Bath",
          "Delicate Fairing & Acrylic Care",
          "Chain Degrease & Sprocket Cleanse",
          "Exhaust & Swingarm Detailing",
          "Filtered Air Blow Dry",
        ],
        description:
          "Careful detailing tailored for faired sportbikes, ensuring electronics, delicate windscreens, and sensitive fairings remain completely protected.",
      },
    ],
  },
  {
    id: "teflon-coating",
    slug: "teflon-coating",
    step: "03",
    title: "Teflon Coating",
    badge: "Paint Protection",
    tagline: "High-Gloss Paint Protection, Minor Swirl Defense & UV Rejuvenation",
    description:
      "Advanced fluoropolymer protective shield that enhances paint depth, eliminates fine swirl marks, and repels dust and water.",
    image: "/services/teflon-coating-service.jpg",
    highlights: [
      "Fluoropolymer Protective Shield",
      "Deep Mirror High Gloss Reflections",
      "Minor Swirl & Scratch Defense",
      "Hydrophobic Water-Beading Barrier",
      "Dual-Action Machine Buffing",
    ],
    subServices: [
      {
        id: "teflon-paint-shield",
        name: "Teflon Paint Protection Coating",
        image: "/services/teflon-coating-service.jpg",
        features: [
          "Multi-Layer Fluoropolymer Coat",
          "Deep Wet-Look Showroom Gloss",
          "Minor Swirl Mark Removal",
          "Dust & Bird Dropping Resistance",
          "Water-Repellent Hydrophobic Surface",
          "Easy Maintenance Wash Defense",
        ],
        description:
          "Advanced protective sealant bonding to vehicle clear coat, providing incredible gloss, UV protection, and surface slickness.",
      },
      {
        id: "machine-buffing-polishing",
        name: "Machine Paint Buffing & Polishing",
        image: "/services/machine-buffing-polishing-clean.jpg",
        features: [
          "Dual-Action Rotary Machine Buffing",
          "Paint Oxidation & Dullness Removal",
          "Fine Swirl Scratch Correction",
          "Finishing Glaze & Carnauba Gloss",
          "Headlight Clarity Restoration",
        ],
        description:
          "Precision paint correction reviving faded paintwork to mirror clarity before applying protective coatings.",
      },
      {
        id: "interior-uv-coating",
        name: "Dashboard & Interior Trim UV Coating",
        image: "/services/interior-uv-coating-clean.jpg",
        features: [
          "Anti-Static Satin Dressing",
          "Harsh Sun UV Blocking Formula",
          "Fading & Cracking Prevention",
          "Non-Sticky Dust-Repelling Barrier",
          "Restores Deep Factory Color",
        ],
        description:
          "Specialized polymer nourishment for dashboards, door vinyl, and console plastics shielding against Hyderabad heat and UV fading.",
      },
    ],
  },
];
