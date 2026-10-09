export interface StoreLocation {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  area: string;
  address: string;
  city: string;
  pincode: string;
  phone: string;
  whatsapp: string;
  email: string;
  timing: string;
  baysCount: number;
  rating: number;
  reviewCount: number;
  mapEmbedUrl: string;
  googleMapsLink: string;
  features: string[];
  image: string;
  heroHeadline: string;
  heroSubheadline: string;
  branchPillName?: string;
  panoramaBayImage?: string;
  panoramaEntranceImage?: string;
  streetViewLink?: string;
}

export const STORES_DATA: StoreLocation[] = [
  {
    id: "store-banjara-hills",
    slug: "banjara-hills",
    name: "A1 Car Wash - Banjara Hills Studio",
    shortName: "Banjara Hills",
    area: "Road No. 12 / MLA Colony",
    address: "Road No. 12, Near Care Hospital & MLA Colony, Banjara Hills, Hyderabad, Telangana – 500034",
    city: "Hyderabad",
    pincode: "500034",
    phone: "70452 82473",
    whatsapp: "917045282473",
    email: "care@a1carwash.in",
    timing: "8:00 AM - 9:00 PM (Everyday)",
    baysCount: 5,
    rating: 4.9,
    reviewCount: 860,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.0580789834526!2d78.4196511!3d17.4090002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb979a079a1a63%3A0xcd5a35fe24b05955!2sA1%20Car%20Wash!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
    googleMapsLink: "https://maps.app.goo.gl/SeVusXkrj6KrMrJh7",
    features: [
      "Jack Lift Wash Bays with Hydraulic Ramp",
      "Ceramic Foam & Paint Shield Station",
      "Interior Deep Cleaning & Extraction Spa",
      "Teflon & Underbody Anti-Rust Coating"
    ],
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1000&q=80",
    heroHeadline: "Hydraulic Jack Lift Washes & Teflon Detailing",
    heroSubheadline: "Road No. 12, Banjara Hills — Hyderabad's premier car cleaning and detailing hub with hydraulic jack lifts."
  },
  {
    id: "store-film-nagar",
    slug: "film-nagar",
    name: "A1 Car Wash - Film Nagar Studio",
    shortName: "Film Nagar",
    area: "Film Nagar Rd / Darga Chowrasta",
    address: "Near Mehfil Restaurant, Raidurg, Darga Chowrasta, Film Nagar Road, Hyderabad, Telangana – 500104",
    city: "Hyderabad",
    pincode: "500104",
    phone: "70452 82473",
    whatsapp: "917045282473",
    email: "a1carwash.raidurg@gmail.com",
    timing: "8:00 AM - 9:00 PM (Everyday)",
    baysCount: 6,
    rating: 4.9,
    reviewCount: 780,
    mapEmbedUrl: "https://maps.google.com/maps?q=A1+Car+wash+%26+Ceramic+Coating,+Film+Nagar,+Hyderabad&ll=17.4149867,78.3941551&z=17&output=embed",
    googleMapsLink: "https://maps.app.goo.gl/tYdXtwr8AtfXLH2B8",
    features: [
      "Jack Lift Wash Bays with Hydraulic Ramp",
      "Diesel & Oil Wash Degreasing Stations",
      "Interior Deep Cleaning & Extraction Spa",
      "Teflon & Underbody Anti-Rust Coating"
    ],
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=80",
    heroHeadline: "Hydraulic Jack Lift Washes & Diesel Degreasing",
    heroSubheadline: "Opposite / Near Mehfil Restaurant, Darga Chowrasta, Film Nagar Road — Hyderabad's premier car cleaning hub."
  },
  {
    id: "store-narsingi",
    slug: "narsingi",
    name: "A1 Car Wash - Narsingi Hub",
    shortName: "Narsingi",
    area: "Narsingi Main Road",
    address: "Narsingi Main Road, Hyderabad, Telangana 500075",
    city: "Hyderabad",
    pincode: "500075",
    phone: "70452 82473",
    whatsapp: "917045282473",
    email: "care@a1carwash.in",
    timing: "8:00 AM - 9:00 PM (Everyday)",
    baysCount: 4,
    rating: 4.9,
    reviewCount: 384,
    mapEmbedUrl: "https://maps.google.com/maps?q=A1+Car+Wash,+Narsingi,+Hyderabad&ll=17.3836968,78.3642777&z=17&output=embed",
    googleMapsLink: "https://maps.app.goo.gl/T3178g94WL8t2NAC8",
    features: ["4 High-Pressure Bays", "Underbody Jack Lift", "Express 30-Min Service", "Bike Foam Wash Station"],
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1000&q=80",
    heroHeadline: "High-Pressure Foam Washes & Ceramic Protection",
    heroSubheadline: "Experience showroom-grade detailing with RO softened water, jack lift wash & Teflon coating."
  },
  {
    id: "store-shaikpet",
    slug: "shaikpet",
    name: "A1 Car Wash - Shaikpet Hub",
    shortName: "Shaikpet",
    area: "Shaikpet / Sathya Colony",
    address: "Sathya Colony, Shaikpet, Hyderabad, Telangana 500008",
    city: "Hyderabad",
    pincode: "500008",
    phone: "70452 82473",
    whatsapp: "917045282473",
    email: "care@a1carwash.in",
    timing: "8:00 AM - 9:00 PM (Everyday)",
    baysCount: 3,
    rating: 4.8,
    reviewCount: 420,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.912648792015!2d78.3965!3d17.4089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96eb7e4db933%3A0xa68ad86b726dcf59!2sShaikpet%2C%20Hyderabad%2C%20Telangana%20500008!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    googleMapsLink: "https://maps.google.com/?q=Sathya+Colony+Shaikpet+Hyderabad+Telangana+500008",
    features: ["Underbody Anti-Rust Coating", "Diesel Wash Specialists", "Interior Deep Extraction", "Free Pick-up & Drop"],
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1000&q=80",
    heroHeadline: "Underbody Anti-Rust Coating & Deep Interior Sanitization",
    heroSubheadline: "Conveniently located at Shaikpet Sathya Colony with high-precision foam treatments & interior sanitization."
  },
  {
    id: "store-nanal-nagar",
    slug: "nanal-nagar",
    name: "A1 Car Wash - Nanal Nagar Studio",
    shortName: "Nanal Nagar",
    area: "Nanal Nagar / Mehdipatnam",
    address: "Nanal Nagar 'X' Road, Mehdipatnam, Hyderabad, Telangana 500028",
    city: "Hyderabad",
    pincode: "500028",
    phone: "70452 82473",
    whatsapp: "917045282473",
    email: "care@a1carwash.in",
    timing: "8:00 AM - 9:00 PM (Everyday)",
    baysCount: 4,
    rating: 4.8,
    reviewCount: 512,
    mapEmbedUrl: "https://maps.google.com/maps?q=A1+Car+Wash+-+PPF,+Ceramic+%26+Teflon+Coating,+Nanal+Nagar,+Hyderabad&ll=17.3960936,78.425987&z=17&output=embed",
    googleMapsLink: "https://maps.app.goo.gl/FQf3N8qpDJV5WZPg6",
    features: ["Jack Lift & Chassis Wash", "Interior Steam Sanitization", "Dashboard Polish & Tyre Glow", "Bike Diesel Wash"],
    image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=1000&q=80",
    heroHeadline: "Precision Foam Cleansing & Express Detailing",
    heroSubheadline: "Serving Nanal Nagar & Mehdipatnam with gentle microfiber touch and deep hydrophobic coatings."
  },
  {
    id: "store-himayat",
    slug: "himayat",
    name: "A1 Car Wash - Himayat Studio",
    shortName: "Himayat",
    area: "Himayat Sagar Rd / Suncity",
    address: "Himayat Sagar Rd, Suncity, Hyderabad, Telangana 500030",
    city: "Hyderabad",
    pincode: "500030",
    phone: "70452 82473",
    whatsapp: "917045282473",
    email: "care@a1carwash.in",
    timing: "8:00 AM - 9:00 PM (Everyday)",
    baysCount: 3,
    rating: 4.9,
    reviewCount: 310,
    mapEmbedUrl: "https://maps.google.com/maps?q=A1+Car+Wash,+Himayat+Sagar+Rd,+Hyderabad&ll=17.3312873,78.3715515&z=17&output=embed",
    googleMapsLink: "https://maps.app.goo.gl/AeDVqq4RFco5nrPq7",
    features: ["Heavy Mud & Jack Lift Wash", "Teflon High-Gloss Glaze", "Odor Elimination & Interior Polish", "SUV & Luxury Specialist"],
    image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1000&q=80",
    heroHeadline: "Heavy Mud & Jack Lift Wash, Teflon Glaze",
    heroSubheadline: "State-of-the-art washing & anti-rust shield applications for Himayat Sagar Rd, Suncity and South Hyderabad motor enthusiasts."
  }
];

export function getStoreBySlug(slug: string): StoreLocation | undefined {
  const direct = STORES_DATA.find((s) => s.slug === slug);
  if (direct) return direct;

  // Backward compatibility alias mappings
  if (slug === "raidurga-film-nagar") return STORES_DATA.find((s) => s.slug === "film-nagar");
  if (slug === "manikonda-rd") return STORES_DATA.find((s) => s.slug === "shaikpet");
  if (slug === "dargah-khalishkhan" || slug === "himayat-sagar") return STORES_DATA.find((s) => s.slug === "himayat");
  if (slug === "toli-chowki") return STORES_DATA.find((s) => s.slug === "nanal-nagar");

  return undefined;
}
