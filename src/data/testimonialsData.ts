export interface TestimonialItem {
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

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Vikramaditya Reddy",
    location: "Raidurg / Film Nagar",
    vehicle: "Toyota Fortuner (7-Seater)",
    rating: 5,
    service: "7-Seater Full Car Wash",
    comment: "Took my Fortuner to A1 Car Wash near Mehfil Restaurant at Raidurg. The hydraulic jack lift underbody wash, diesel cleanse, and dashboard polish were incredible! Best value full wash in Hyderabad.",
    date: "3 days ago",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    verified: true
  },
  {
    id: "test-2",
    name: "Sneha Krishnamurthy",
    location: "Raidurg / Film Nagar",
    vehicle: "Kia Seltos (5-Seater)",
    rating: 5,
    service: "5-Seater Full Car Wash",
    comment: "I get my Seltos full washed at A1 Car Wash every two weeks. They clean underbody on the jack lift, engine bay diesel wash, vacuum seats, and polish the dashboard. Smells fresh and looks brand new!",
    date: "1 week ago",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    verified: true
  },
  {
    id: "test-3",
    name: "Arjun Rao",
    location: "Raidurg / Film Nagar",
    vehicle: "Mercedes-Benz E-Class",
    rating: 5,
    service: "Teflon Coating",
    comment: "Got Teflon coating done at A1 Car Wash on Film Nagar Road. The mirror gloss finish and water beading are top-tier. Extremely professional staff and fast turnaround.",
    date: "2 weeks ago",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    verified: true
  },
  {
    id: "test-4",
    name: "Mohammed Farhan",
    location: "Raidurg / Film Nagar",
    vehicle: "Hyundai Creta",
    rating: 5,
    service: "Underbody Anti-Rust + Silencer Spray",
    comment: "Essential rust protection for Hyderabad monsoons! The black chassis coat and high-temperature silencer zinc spray treatment were done with great care on the hydraulic ramp.",
    date: "3 weeks ago",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    verified: true
  },
  {
    id: "test-5",
    name: "Pooja Deshmukh",
    location: "Raidurg / Film Nagar",
    vehicle: "Royal Enfield Classic 350",
    rating: 5,
    service: "Bullet Foam & Diesel Wash",
    comment: "Took my Bullet for a diesel engine wash and high foam bath. The engine fins and spokes are spotless and shiny! Unbeatable quality at Darga Chowrasta.",
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
    answer: "While drive-ins are welcome for quick washes, we recommend messaging us on WhatsApp (70452 82473) to ensure zero waiting time and dedicated jack lift bay allocation."
  },
  {
    id: "faq-2",
    category: "Washing Quality",
    question: "What kind of water and shampoo do you use?",
    answer: "We use 100% Deionized RO Softened Water with 0 TDS to eliminate hard water spots completely. Our shampoos are pH-neutral, high-density snow foams safe for all paints and coatings."
  },
  {
    id: "faq-3",
    category: "Services & Differences",
    question: "What is the difference between Full Car Wash and Body Wash?",
    answer: "Full Car Wash includes hydraulic Jack Lift elevation, underbody wash, oil wash, diesel engine cleanse, deep interior vacuum, dashboard polish, outside foam wash, and tyre polish. Body Wash focuses on exterior foam wash, inside vacuum, dashboard polish, and tyre polish."
  },
  {
    id: "faq-4",
    category: "Additional Services",
    question: "What are your Additional Protection Services?",
    answer: "We offer Teflon Coating for mirror shine and swirl defense, plus Underbody Anti-Rust Coating + Black Colour & Silencer Spray for complete chassis corrosion protection."
  },
  {
    id: "faq-5",
    category: "Two-Wheeler Services",
    question: "Do you wash bikes and Royal Enfields?",
    answer: "Yes! We detail Normal Bikes, Royal Enfield Bullets, and Sport Bikes with high foam wash, chain cleaning, and diesel degreasing."
  },
  {
    id: "faq-6",
    category: "Location & Timings",
    question: "Where is A1 CAR WASH located and what are the timings?",
    answer: "We are located near Mehfil Restaurant, Raidurg, Darga Chowrasta, Film Nagar Road, Hyderabad, Telangana – 500104. Open 7 days a week from 8:00 AM to 9:00 PM. Call/WhatsApp: 70452 82473."
  }
];
