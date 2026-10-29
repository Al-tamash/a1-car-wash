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
  streetViewLink: string;
  googleMapsLink: string;
  features: string[];
  image: string;
  heroHeadline: string;
  heroSubheadline: string;
  branchPillName?: string;
  panoramaBayImage?: string;
  panoramaEntranceImage?: string;
}

export const STORES_DATA: StoreLocation[] = [
  {
    id: "store-banjara-hills",
    slug: "banjara-hills",
    name: "A1 Car Wash - Banjara Hills Studio",
    shortName: "Banjara Hills",
    area: "Road No. 12 / Nizam Colony",
    address: "Road No. 12, Nizam Colony, Hakimpet, Hyderabad, Telangana 500028",
    city: "Hyderabad",
    pincode: "500028",
    phone: "70952 82473",
    whatsapp: "917095282473",
    email: "care@a1carwash.in",
    timing: "8:00 AM - 9:00 PM (Everyday)",
    baysCount: 5,
    rating: 4.9,
    reviewCount: 860,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.0580789834526!2d78.4196511!3d17.409000199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb979a079a1a63%3A0xcd5a35fe24b05955!2sA1%20Car%20Wash!5e0!3m2!1sen!2sin!4v1793095575939!5m2!1sen!2sin",
    streetViewLink: "https://www.google.com/maps/embed?pb=!4v1793095695690!6m8!1m7!1sCAoSHENJQUJJaEIwMDctdFNVZmZuM05sYmdYNFlpZkI.!2m2!1d17.40900020022909!2d78.41965113424314!3f106.10225926682115!4f9.99524697497101!5f0.7820865974627469",
    googleMapsLink: "https://maps.app.goo.gl/SeVusXkrj6KrMrJh7",
    features: [
      "Jack Lift Wash Bays with Hydraulic Ramp",
      "Ceramic Foam & Paint Shield Station",
      "Interior Deep Cleaning & Extraction Spa",
      "Teflon & Underbody Anti-Rust Coating"
    ],
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1000&q=80",
    heroHeadline: "Hydraulic Jack Lift Washes & Teflon Detailing",
    heroSubheadline: "Road No. 12, Nizam Colony, Hakimpet, Hyderabad — Hyderabad's premier car cleaning and detailing hub with hydraulic jack lifts."
  },
  {
    id: "store-film-nagar",
    slug: "film-nagar",
    name: "A1 Car Wash & Ceramic Coating - Film Nagar Studio",
    shortName: "Film Nagar",
    area: "Film Nagar Rd / Darga Chowrasta",
    address: "#5-119, Raidurga, Darga chowrasta, Film Nagar road, opposite JRC, Hyderabad, Telangana 500104",
    city: "Hyderabad",
    pincode: "500104",
    phone: "70952 82473",
    whatsapp: "917095282473",
    email: "care@a1carwash.in",
    timing: "8:00 AM - 9:00 PM (Everyday)",
    baysCount: 6,
    rating: 4.9,
    reviewCount: 780,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.182652537049!2d78.39752511296324!3d17.40301994655553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97969a1f0c71%3A0xb7dc4b6e76eced97!2sA1%20Car%20wash%20%26%20Ceramic%20Coating!5e0!3m2!1sen!2sin!4v1793095299164!5m2!1sen!2sin",
    streetViewLink: "https://www.google.com/maps/embed?pb=!4v1793095105695!6m8!1m7!1sCAoSHENJQUJJaEEtY0xxUUtuN3lVai1EMWZkRGV1Q0M.!2m2!1d17.40301994655553!2d78.40010003361753!3f294.9917280728338!4f-6.687719993779339!5f0.7820865974627469",
    googleMapsLink: "https://maps.app.goo.gl/tYdXtwr8AtfXLH2B8",
    features: [
      "Jack Lift Wash Bays with Hydraulic Ramp",
      "Diesel & Oil Wash Degreasing Stations",
      "Ceramic Coating & Paint Correction Cleanroom",
      "Teflon & Underbody Anti-Rust Coating"
    ],
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=80",
    heroHeadline: "Hydraulic Jack Lift Washes & Ceramic Coating",
    heroSubheadline: "#5-119, Raidurga, Darga Chowrasta, Film Nagar Road, Opposite JRC — Hyderabad's premier car cleaning and detailing hub."
  },
  {
    id: "store-narsingi",
    slug: "narsingi",
    name: "A1 Car Wash - Narsingi Hub",
    shortName: "Narsingi",
    area: "Narsingi Main Road",
    address: "Narsingi, Hyderabad, Telangana 500089",
    city: "Hyderabad",
    pincode: "500089",
    phone: "83673 15913",
    whatsapp: "918367315913",
    email: "care@a1carwash.in",
    timing: "8:00 AM - 9:00 PM (Everyday)",
    baysCount: 4,
    rating: 4.9,
    reviewCount: 384,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.608307216438!2d78.36414020289779!3d17.3837910111173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb94486e6500e3%3A0x9bc40a498ded687b!2sA1%20Car%20Wash!5e0!3m2!1sen!2sin!4v1793096583870!5m2!1sen!2sin",
    streetViewLink: "https://www.google.com/maps/embed?pb=!4v1793096664306!6m8!1m7!1sCAoSHENJQUJJaEMzaWRNTHJvQVFuSFVYUEQ5WDUwLWY.!2m2!1d17.38367230511608!2d78.3641728538132!3f151.22683149405526!4f4.833892297217616!5f0.7820865974627469",
    googleMapsLink: "https://maps.app.goo.gl/T3178g94WL8t2NAC8",
    features: ["4 High-Pressure Bays", "Underbody Jack Lift", "Express 30-Min Service", "Bike Foam Wash Station"],
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1000&q=80",
    heroHeadline: "High-Pressure Foam Washes & Ceramic Protection",
    heroSubheadline: "Experience showroom-grade detailing with RO softened water, jack lift wash & Teflon coating in Narsingi."
  },
  {
    id: "store-shaikpet",
    slug: "shaikpet",
    name: "A1 Car Wash - Shaikpet Hub",
    shortName: "Shaikpet",
    area: "Manikonda Rd / Sathya Colony",
    address: "Manikonda Rd, Sathya Colony, Shaikpet, Hyderabad, Telangana 500104",
    city: "Hyderabad",
    pincode: "500104",
    phone: "88014 45333",
    whatsapp: "918801445333",
    email: "care@a1carwash.in",
    timing: "8:00 AM - 9:00 PM (Everyday)",
    baysCount: 3,
    rating: 4.8,
    reviewCount: 420,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.1843780070585!2d78.4001289!3d17.4029371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97cf5addcd67%3A0x1335e626f542b43d!2sA1%20Car%20Wash!5e0!3m2!1sen!2sin!4v1793096950519!5m2!1sen!2sin",
    streetViewLink: "https://www.google.com/maps/embed?pb=!4v1793097009859!6m8!1m7!1sCAoSHENJQUJJaEN1Uld2V1RGRm1qblFFRDk3QmFOemM.!2m2!1d17.40293706161712!2d78.40012893217815!3f74.56386568557092!4f19.84382739035624!5f0.7820865974627469",
    googleMapsLink: "https://maps.google.com/?q=A1+Car+Wash+Manikonda+Rd+Sathya+Colony+Shaikpet+Hyderabad+Telangana+500104",
    features: ["Underbody Anti-Rust Coating", "Diesel Wash Specialists", "Interior Deep Extraction", "Hydraulic Lift Cleaning"],
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1000&q=80",
    heroHeadline: "Underbody Anti-Rust Coating & Deep Interior Sanitization",
    heroSubheadline: "Conveniently located at Manikonda Rd, Sathya Colony, Shaikpet with high-precision foam treatments & interior sanitization."
  },
  {
    id: "store-nanal-nagar",
    slug: "nanal-nagar",
    name: "A1 Car Wash - PPF, Ceramic & Teflon Coating",
    shortName: "Nanal Nagar",
    area: "Kakatiya Nagar / Toli Chowki",
    address: "Kakatiya Nagar, Salarjung Colony, Toli Chowki, Hyderabad, Telangana 500008",
    city: "Hyderabad",
    pincode: "500008",
    phone: "98497 08013",
    whatsapp: "919849708013",
    email: "care@a1carwash.in",
    timing: "8:00 AM - 9:00 PM (Everyday)",
    baysCount: 4,
    rating: 4.8,
    reviewCount: 512,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.3268821436386!2d78.42598699999999!3d17.3960936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb971b0ac3c5ff%3A0xd6f032608feb0755!2sA1%20Car%20Wash%20-%20PPF%2C%20Ceramic%20%26%20Teflon%20Coating!5e0!3m2!1sen!2sin!4v1793097131598!5m2!1sen!2sin",
    streetViewLink: "https://www.google.com/maps/embed?pb=!4v1793097218818!6m8!1m7!1sCAoSHENJQUJJaENhUHBMaDVmVExObi0tcWlqcHU4bHg.!2m2!1d17.39609358721701!2d78.42598702352012!3f178.88794938738545!4f23.571344068818988!5f0.7820865974627469",
    googleMapsLink: "https://maps.app.goo.gl/FQf3N8qpDJV5WZPg6",
    features: ["Jack Lift & Chassis Wash", "PPF & Ceramic Paint Protection", "Interior Steam Sanitization", "Bike Diesel Wash"],
    image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=1000&q=80",
    heroHeadline: "PPF, Ceramic & Teflon Coating Studio",
    heroSubheadline: "Serving Kakatiya Nagar, Salarjung Colony, Toli Chowki & Mehdipatnam with gentle microfiber touch and deep hydrophobic coatings."
  },
  {
    id: "store-himayat",
    slug: "himayat",
    name: "A1 Car Wash - Himayat Studio",
    shortName: "Himayat Sagar",
    area: "Himayat Sagar Rd / Suncity",
    address: "5-35/1, Dargah Khalishkhan, Himayat Sagar Rd, Suncity, Hyderabad, Telangana 500030",
    city: "Hyderabad",
    pincode: "500030",
    phone: "98497 08013",
    whatsapp: "919849708013",
    email: "care@a1carwash.in",
    timing: "8:00 AM - 9:00 PM (Everyday)",
    baysCount: 3,
    rating: 4.9,
    reviewCount: 310,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.673668954255!2d78.36897657764126!3d17.331287309235652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb958ce1a2cd1b%3A0x20b28e3096f3b319!2sA1%20Car%20Wash!5e0!3m2!1sen!2sin!4v1793097438498!5m2!1sen!2sin",
    streetViewLink: "https://www.google.com/maps/embed?pb=!4v1793097361757!6m8!1m7!1sCAoSHENJQUJJaEJOME1QQkcwNWhmNEFyYWN2aUJ3MHE.!2m2!1d17.33128730923565!2d78.37155149829556!3f347.94673069931906!4f13.979857296401107!5f0.7820865974627469",
    googleMapsLink: "https://maps.app.goo.gl/AeDVqq4RFco5nrPq7",
    features: ["Heavy Mud & Jack Lift Wash", "Teflon High-Gloss Glaze", "Odor Elimination & Interior Polish", "SUV & Luxury Specialist"],
    image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1000&q=80",
    heroHeadline: "Heavy Mud & Jack Lift Wash, Teflon Glaze",
    heroSubheadline: "5-35/1, Dargah Khalishkhan, Himayat Sagar Rd, Suncity — state-of-the-art washing & anti-rust shield applications."
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
