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
    id: "store-5",
    slug: "raidurga-film-nagar",
    name: "A1 Car Wash - Raidurg Flagship Studio",
    shortName: "Raidurg / Film Nagar",
    area: "Darga Chowrasta / Film Nagar Rd",
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
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.654871923145!2d78.3888!3d17.4201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96b02fa102bd%3A0xd64f4344cae429!2sRaidurg%2C%20Hyderabad%2C%20Telangana%20500008!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    googleMapsLink: "https://maps.google.com/?q=Mehfil+Restaurant+Raidurg+Darga+Chowrasta+Film+Nagar+Road+Hyderabad+500104",
    features: [
      "Jack Lift Wash Bays with Hydraulic Ramp",
      "Diesel & Oil Wash Degreasing Stations",
      "Interior Deep Cleaning & Extraction Spa",
      "Teflon & Underbody Anti-Rust Coating"
    ],
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=80",
    heroHeadline: "A1 Car Wash Flagship Studio at Raidurg, Film Nagar Road",
    heroSubheadline: "Opposite / Near Mehfil Restaurant, Darga Chowrasta — Hyderabad's premier car cleaning and detailing hub with hydraulic jack lifts."
  },
  {
    id: "store-1",
    slug: "narsingi",
    name: "Narsingi Hub",
    shortName: "Narsingi",
    area: "Narsingi",
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
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.411684344589!2d78.358242!3d17.392095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb95cb5392e217%3A0xb3a82ef45167b589!2sNarsingi%2C%20Telangana%20500075!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    googleMapsLink: "https://maps.google.com/?q=Narsingi+Hyderabad+Telangana+500075",
    features: ["4 High-Pressure Bays", "Underbody Jack Lift", "Express 30-Min Service", "Bike Foam Wash Station"],
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1000&q=80",
    heroHeadline: "A1 Car Wash Quality Detailing at Narsingi",
    heroSubheadline: "Experience showroom-grade detailing with RO softened water, jack lift wash & Teflon coating."
  },
  {
    id: "store-2",
    slug: "manikonda-rd",
    name: "Manikonda Rd Detailing Hub",
    shortName: "Manikonda Rd",
    area: "Shaikpet / Manikonda",
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
    heroHeadline: "A1 Car Wash on Manikonda Road",
    heroSubheadline: "Conveniently located at Shaikpet Sathya Colony with high-precision foam treatments & interior sanitization."
  },
  {
    id: "store-3",
    slug: "dargah-khalishkhan",
    name: "Dargah Khalishkhan Auto Care",
    shortName: "Dargah Khalishkhan",
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
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.529881478148!2d78.3845!3d17.3406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb951b14a2a1b9%3A0x6a0a03eb7a13bf45!2sSuncity%2C%20Hyderabad%2C%20Telangana%20500030!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    googleMapsLink: "https://maps.google.com/?q=Himayat+Sagar+Rd+Suncity+Hyderabad+Telangana+500030",
    features: ["Heavy Mud & Jack Lift Wash", "Teflon High-Gloss Glaze", "Odor Elimination & Interior Polish", "SUV & Luxury Specialist"],
    image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1000&q=80",
    heroHeadline: "A1 Car Wash at Dargah Khalishkhan, Himayat Sagar Rd",
    heroSubheadline: "State-of-the-art washing & anti-rust shield applications for Suncity and South Hyderabad motor enthusiasts."
  },
  {
    id: "store-4",
    slug: "toli-chowki",
    name: "Toli Chowki Detailing Studio",
    shortName: "Toli Chowki",
    area: "Kakatiya Nagar / Toli Chowki",
    address: "Salarjung Colony, Kakatiya Nagar, Hyderabad, Telangana 500028",
    city: "Hyderabad",
    pincode: "500028",
    phone: "70452 82473",
    whatsapp: "917045282473",
    email: "care@a1carwash.in",
    timing: "8:00 AM - 9:00 PM (Everyday)",
    baysCount: 4,
    rating: 4.8,
    reviewCount: 512,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.123548972147!2d78.4082!3d17.4005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96e703f8a4ef%3A0xc39281aef1b5a2a!2sToli%20Chowki%2C%20Hyderabad%2C%20Telangana%20500028!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    googleMapsLink: "https://maps.google.com/?q=Salarjung+Colony+Kakatiya+Nagar+Hyderabad+Telangana+500028",
    features: ["Jack Lift & Chassis Wash", "Interior Steam Sanitization", "Dashboard Polish & Tyre Glow", "Bike Diesel Wash"],
    image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=1000&q=80",
    heroHeadline: "A1 Car Wash Center at Toli Chowki",
    heroSubheadline: "Serving Salarjung Colony & Kakatiya Nagar with gentle microfiber touch and deep hydrophobic coatings."
  }
];

export function getStoreBySlug(slug: string): StoreLocation | undefined {
  return STORES_DATA.find((s) => s.slug === slug);
}
