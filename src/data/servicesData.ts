export interface SubService {
  id: string;
  name: string;
  vehicleType: "7-Seater" | "5-Seater" | "Normal Bike" | "Royal Enfield Bullet" | "Sport Bikes" | "Universal";
  price: number;
  formattedPrice: string;
  badge?: string;
  features: string[];
  description?: string;
}

export interface MainService {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: "wash" | "interior" | "protection" | "bike";
  tagline: string;
  startingPrice: string;
  badge?: string;
  iconName: string;
  description: string;
  image: string;
  subServices: SubService[];
}

export const MAIN_SERVICES: MainService[] = [
  {
    id: "full-car-wash",
    slug: "full-car-wash",
    title: "Full Car Wash",
    shortTitle: "Full Wash",
    category: "wash",
    tagline: "Jack Lift Wash, Oil & Diesel Cleanse with Complete Detailing",
    startingPrice: "₹1,000",
    badge: "Most Popular",
    iconName: "Sparkles",
    description:
      "Our signature complete care package including underbody jack lift wash, engine oil and diesel wash, deep interior vacuuming, dashboard polish, outside high-foam cleanse, and tyre polish.",
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=800&q=80",
    subServices: [
      {
        id: "7-seater-full-wash",
        name: "7-Seater Full Car Wash",
        vehicleType: "7-Seater",
        price: 1200,
        formattedPrice: "₹1,200",
        badge: "Best For SUVs & MPVs",
        features: [
          "Jack Lift Wash",
          "Oil Wash",
          "Diesel Wash",
          "Interior Cleaning",
          "Vacuum Cleaning",
          "Dashboard Polish",
          "Outside Foam Wash",
          "Tyre Polish"
        ]
      },
      {
        id: "5-seater-full-wash",
        name: "5-Seater Full Car Wash",
        vehicleType: "5-Seater",
        price: 1000,
        formattedPrice: "₹1,000",
        badge: "Best Value Sedans/Hatchbacks",
        features: [
          "Jack Lift Wash",
          "Oil Wash",
          "Diesel Wash",
          "Interior Cleaning",
          "Vacuum Cleaning",
          "Dashboard Polish",
          "Outside Foam Wash",
          "Tyre Polish"
        ]
      }
    ]
  },
  {
    id: "body-wash",
    slug: "body-wash",
    title: "Body Wash",
    shortTitle: "Body Wash",
    category: "wash",
    tagline: "Exterior Snow Foam Bath with Inside Vacuum & Dashboard Polish",
    startingPrice: "₹600",
    badge: "Quick Refresh",
    iconName: "Droplet",
    description:
      "Rapid exterior body wash using pH-balanced high-density foam, complete inside cabin vacuuming, dashboard rejuvenation, and deep black tyre dressing.",
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=800&q=80",
    subServices: [
      {
        id: "7-seater-body-wash",
        name: "7-Seater Body Wash",
        vehicleType: "7-Seater",
        price: 700,
        formattedPrice: "₹700",
        badge: "7-Seater Express",
        features: [
          "Body Wash",
          "Inside Vacuum",
          "Dashboard Polish",
          "Outside Foam Wash",
          "Tyre Polish"
        ]
      },
      {
        id: "5-seater-body-wash",
        name: "5-Seater Body Wash",
        vehicleType: "5-Seater",
        price: 600,
        formattedPrice: "₹600",
        badge: "5-Seater Express",
        features: [
          "Body Wash",
          "Inside Vacuum Cleaning",
          "Dashboard Polish",
          "Outside Foam Wash",
          "Tyre Polish"
        ]
      }
    ]
  },
  {
    id: "interior-deep-cleaning",
    slug: "interior-deep-cleaning",
    title: "Interior Deep Cleaning",
    shortTitle: "Interior Spa",
    category: "interior",
    tagline: "Complete Seat, Panel, Floor Mat Sanitization & Full Polish",
    startingPrice: "₹3,000",
    badge: "Deep Spa",
    iconName: "Sparkle",
    description:
      "Thorough sanitization and deep restorative treatment for all upholstery seats, door trims, ceiling, carpets, and dashboard with premium UV protectant conditioners.",
    image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=800&q=80",
    subServices: [
      {
        id: "7-seater-interior-cleaning",
        name: "7-Seater Interior Deep Cleaning",
        vehicleType: "7-Seater",
        price: 3500,
        formattedPrice: "₹3,500",
        badge: "Complete 3-Row Spa",
        features: [
          "Seat Cleaning",
          "Door Panel Cleaning",
          "Full Interior Cleaning",
          "Floor Mat Cleaning",
          "Full Interior Polish"
        ]
      },
      {
        id: "5-seater-interior-cleaning",
        name: "5-Seater Interior Deep Cleaning",
        vehicleType: "5-Seater",
        price: 3000,
        formattedPrice: "₹3,000",
        badge: "Deep Interior Restoration",
        features: [
          "Seat Cleaning",
          "Door Panel Cleaning",
          "Full Interior Cleaning",
          "Floor Mat Cleaning",
          "Full Interior Polish"
        ]
      }
    ]
  },
  {
    id: "teflon-coating",
    slug: "teflon-coating",
    title: "Teflon Coating",
    shortTitle: "Teflon Coating",
    category: "protection",
    tagline: "High Gloss Paint Protection & Swirl Defense",
    startingPrice: "₹3,500",
    badge: "Paint Shield",
    iconName: "ShieldCheck",
    description:
      "Advanced fluoropolymer protective shield that enhances paint depth, eliminates minor swirl marks, repels dust and water, making maintenance washes effortless.",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80",
    subServices: [
      {
        id: "7-seater-teflon",
        name: "7-Seater Teflon Coating",
        vehicleType: "7-Seater",
        price: 4000,
        formattedPrice: "₹4,000",
        badge: "SUV & Luxury Care",
        features: [
          "High Gloss Mirror Shine",
          "Minor Swirl Marks Defense",
          "Fluoropolymer Protective Barrier",
          "Dust & Bird Dropping Resistance",
          "Water Repellent Slick Finish",
          "Easy Wash Surface Maintenance"
        ]
      },
      {
        id: "5-seater-teflon",
        name: "5-Seater Teflon Coating",
        vehicleType: "5-Seater",
        price: 3500,
        formattedPrice: "₹3,500",
        badge: "Sedan & Hatchback Shield",
        features: [
          "High Gloss Mirror Shine",
          "Minor Swirl Marks Defense",
          "Fluoropolymer Protective Barrier",
          "Dust & Bird Dropping Resistance",
          "Water Repellent Slick Finish",
          "Easy Wash Surface Maintenance"
        ]
      }
    ]
  },
  {
    id: "underbody-coating",
    slug: "underbody-coating",
    title: "Underbody Anti-Rust Coating + Black Colour & Silencer Spray",
    shortTitle: "Underbody Anti-Rust",
    category: "protection",
    tagline: "Professional Underbody Protection, Black Chassis Coat & Silencer Spray",
    startingPrice: "₹3,000",
    badge: "Chassis Armor",
    iconName: "Shield",
    description:
      "Heavy-duty rustproofing compound applied directly to the car chassis, suspension mounts, and floor pan, plus black color treatment and high-temperature heat-resistant silencer zinc spray.",
    image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80",
    subServices: [
      {
        id: "7-seater-underbody",
        name: "7-Seater Underbody Anti-Rust Coating + Silencer Spray",
        vehicleType: "7-Seater",
        price: 3500,
        formattedPrice: "₹3,500",
        badge: "Heavy SUV Protection",
        features: [
          "Professional Underbody Anti-Rust Treatment",
          "Black Colour Chassis Protective Coat",
          "High-Temperature Silencer Spray Treatment",
          "Monsoon, Water & Salt Corrosion Shield",
          "Chassis Noise & Vibration Damping",
          "Long-Lasting Metal Longevity"
        ]
      },
      {
        id: "5-seater-underbody",
        name: "5-Seater Underbody Anti-Rust Coating + Silencer Spray",
        vehicleType: "5-Seater",
        price: 3000,
        formattedPrice: "₹3,000",
        badge: "Essential Rustproofing",
        features: [
          "Professional Underbody Anti-Rust Treatment",
          "Black Colour Chassis Protective Coat",
          "High-Temperature Silencer Spray Treatment",
          "Monsoon, Water & Salt Corrosion Shield",
          "Chassis Noise & Vibration Damping",
          "Long-Lasting Metal Longevity"
        ]
      }
    ]
  },
  {
    id: "bike-wash",
    slug: "bike-wash",
    title: "Bike Wash & Detailing",
    shortTitle: "Bike Wash",
    category: "bike",
    tagline: "Specialized Foam & Diesel Wash for Commuters, Bullets & Superbikes",
    startingPrice: "₹150",
    badge: "Two Wheeler",
    iconName: "Bike",
    description:
      "Comprehensive two-wheeler detailing with high-pressure snow foam wash, diesel engine degreasing, chain cleaning and lubrication, and chrome/alloy polish.",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80",
    subServices: [
      {
        id: "normal-bike",
        name: "Normal Bike Wash",
        vehicleType: "Normal Bike",
        price: 150,
        formattedPrice: "Foam: ₹150 | Diesel: ₹180",
        badge: "Daily Commuters",
        features: [
          "Foam Wash: ₹150/-",
          "Diesel Wash: ₹180/-",
          "High-Pressure Mud & Dust Rinse",
          "Chain Wash & Lubrication",
          "Tyre Dressing & Mirror Wipe"
        ]
      },
      {
        id: "royal-enfield",
        name: "Royal Enfield Bullet Wash",
        vehicleType: "Royal Enfield Bullet",
        price: 180,
        formattedPrice: "Foam: ₹180 | Diesel: ₹250",
        badge: "Cruiser & Classic Care",
        features: [
          "Foam Wash: ₹180/-",
          "Diesel Wash: ₹250/-",
          "Heavy Engine Fin Degrease",
          "Spoke Wheel & Chrome Conditioning",
          "Silencer Polish & Rust Guard"
        ]
      },
      {
        id: "sport-bikes",
        name: "All Sport Bikes Wash",
        vehicleType: "Sport Bikes",
        price: 200,
        formattedPrice: "Foam: ₹200 | Diesel: ₹250",
        badge: "Superbike Detailing",
        features: [
          "Foam Wash: ₹200/-",
          "Diesel Wash: ₹250/-",
          "Fairing-Safe pH Neutral Snow Foam",
          "High-Pressure Chain & Sprocket Wash",
          "Alloy Rim Polish & Hydrophobic Buff"
        ]
      }
    ]
  }
];

// Backward-compatible representation for any legacy callers
export interface ServiceItem {
  id: string;
  category: "wash_detailing" | "protection";
  categoryName: string;
  name: string;
  tagline: string;
  description: string;
  duration: string;
  startingPrice: string;
  fullPriceHatchback: number;
  fullPriceSedan: number;
  fullPriceSUV: number;
  badge?: string;
  iconName: string;
  keyFeatures: string[];
  image: string;
}

export const SERVICES_DATA: ServiceItem[] = MAIN_SERVICES.map((m) => {
  const sub0 = m.subServices[0];
  const sub1 = m.subServices[1] || sub0;
  return {
    id: m.id,
    category: m.category === "protection" ? "protection" : "wash_detailing",
    categoryName: m.category === "protection" ? "Protection Services" : "Wash & Detailing Services",
    name: m.title,
    tagline: m.tagline,
    description: m.description,
    duration: "45 - 90 Mins",
    startingPrice: m.startingPrice,
    fullPriceHatchback: sub1.price,
    fullPriceSedan: sub1.price,
    fullPriceSUV: sub0.price,
    badge: m.badge,
    iconName: m.iconName,
    keyFeatures: sub0.features,
    image: m.image
  };
});
