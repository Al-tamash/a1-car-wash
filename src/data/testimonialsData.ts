export interface Testimonial {
  id: string;
  name: string;
  location: string;
  vehicle: string;
  rating: number;
  service: string;
  comment: string;
  date: string;
  avatar: string;
  verified: boolean;
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    name: "Vikramaditya Reddy",
    location: "Narsingi Hub",
    vehicle: "BMW 5 Series (Black)",
    rating: 5,
    service: "Ceramic Coating 9H",
    comment: "Took my BMW to the Narsingi branch for ceramic coating. The mirror shine is mind-blowing! Water literally glides off like magic. The staff is extremely knowledgeable, polite, and uses top-grade equipment.",
    date: "3 days ago",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    verified: true
  },
  {
    id: "test-2",
    name: "Sneha Krishnamurthy",
    location: "Manikonda Rd",
    vehicle: "Kia Seltos",
    rating: 5,
    service: "Complete Car Wash & Interior Spa",
    comment: "I get my Seltos washed at the Manikonda Shaikpet studio every two weeks. They clean every tiny crevice, vents, under-seat area with intense care. Smells fresh and looks brand new every single time!",
    date: "1 week ago",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    verified: true
  },
  {
    id: "test-3",
    name: "Arjun Rao",
    location: "Raidurga Film Nagar",
    vehicle: "Mercedes-Benz E-Class",
    rating: 5,
    service: "PPF Self-Healing Coating",
    comment: "Installed full front TPU PPF at their Raidurga outlet near JRC. Seamless edge wrapping and zero bubble formation. Outstanding craftsmanship and great customer waiting lounge.",
    date: "2 weeks ago",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    verified: true
  },
  {
    id: "test-4",
    name: "Mohammed Farhan",
    location: "Toli Chowki",
    vehicle: "Hyundai Creta",
    rating: 5,
    service: "Ultimate Detailing",
    comment: "The paint correction in Toli Chowki removed all nasty swirl marks caused by regular society cleaners. Truly showroom standard finish! Super reasonable price too.",
    date: "3 weeks ago",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    verified: true
  },
  {
    id: "test-5",
    name: "Pooja Deshmukh",
    location: "Dargah Khalishkhan (Suncity)",
    vehicle: "Tata Safari",
    rating: 5,
    service: "Deluxe Wash & Teflon Glaze",
    comment: "Living in Suncity, finding an authentic high-pressure car wash with soft RO water was difficult until I discovered this branch. Quick service and exceptional glossy finish!",
    date: "1 month ago",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    verified: true
  }
];

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const FAQS_DATA: FAQItem[] = [
  {
    id: "faq-1",
    category: "General & Booking",
    question: "Do I need to book an appointment in advance?",
    answer: "While drive-ins are welcome for quick washes, we strongly recommend booking a slot online or calling our hotline (70452 82473) to ensure zero waiting time and dedicated bay allocation."
  },
  {
    id: "faq-2",
    category: "Washing Quality",
    question: "What kind of water and shampoo do you use?",
    answer: "We use 100% Deionized RO Softened Water with 0 TDS to eliminate hard water spots completely. Our shampoos are pH-neutral, biodegradable German formulas enriched with carnauba gloss boosters."
  },
  {
    id: "faq-3",
    category: "Paint Protection",
    question: "What is the difference between Ceramic Coating, PPF, and Teflon?",
    answer: "Teflon provides 6-9 months of light polymer shine & ease of cleaning. Ceramic Coating is a semi-permanent 9H nano-crystal liquid layer providing 3-5 years of extreme gloss, UV defense, and hydrophobic effect. PPF (Paint Protection Film) is a thick, self-healing physical TPU armor shield that protects against rock chips, scratches, and gravel."
  },
  {
    id: "faq-4",
    category: "Stores & Locations",
    question: "Are the services and pricing the same across all 5 Hyderabad branches?",
    answer: "Yes! All 5 locations (Narsingi, Manikonda Rd, Dargah Khalishkhan / Suncity, Toli Chowki, and Raidurga Film Nagar) share identical computerized pricing, state-of-the-art machinery, trained detailers, and guarantee cards."
  },
  {
    id: "faq-5",
    category: "Service Time",
    question: "How long does a Complete Car Wash vs Ultimate Detailing take?",
    answer: "A Complete Car Wash takes 45 to 60 minutes. Deluxe Wash takes ~90 minutes. Ultimate Detailing with multi-stage machine polishing takes 3 to 4 hours. You can relax in our air-conditioned lounge with free Wi-Fi and coffee while you wait!"
  },
  {
    id: "faq-6",
    category: "Pick-up & Drop",
    question: "Do you offer door pick-up and drop-off service?",
    answer: "Yes! We offer complimentary pick-up & drop within a 3km radius of any of our 5 store locations for Deluxe Wash, Ultimate Detailing, and Ceramic/PPF packages."
  }
];
