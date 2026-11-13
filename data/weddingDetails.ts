import { WeddingDetails, BlessingNote } from "@/types";

export const WEDDING_DATA: WeddingDetails = {
  groom: {
    name: "Sai Kiran Mohan",
    fullName: "Sai Kiran Mohan",
    title: "Groom",
    parents: "Our Beloved Family & Elders",
    grandparents: "With Ancestral Blessings",
    education: "Software Professional",
    bio: "Kind-hearted, enthusiastic, and ready to embark on this beautiful life journey.",
  },
  bride: {
    name: "Sri Anusha",
    fullName: "Sri Anusha",
    title: "Bride",
    parents: "Our Beloved Family & Elders",
    grandparents: "With Ancestral Blessings",
    education: "Creative & Gracious",
    bio: "Loving soul, radiant smile, and forever partner in life's sacred voyage.",
  },
  events: [
    {
      id: "muhurtham",
      name: "Subamuhurtham",
      tamilName: "శుభ ముహూర్తం",
      date: "2026-11-22T11:17:00",
      displayDate: "Sunday, 22nd November 2026",
      time: "11:17 AM",
      auspiciousDetails: "Auspicious Morning Muhurtham",
      description: "The sacred traditional Vedic wedding ceremony uniting Sai Kiran Mohan & Sri Anusha.",
      attire: "Traditional Wedding Attire",
      location: "Madhura Banquet Hall, KPHB, Hyderabad",
    },
    {
      id: "lunch",
      name: "Kalyana Vindhu/ Lunch",
      tamilName: "విందు భోజనం",
      date: "2026-11-22T12:30:00",
      displayDate: "Sunday, 22nd November 2026",
      time: "12:30 PM onwards",
      auspiciousDetails: "Celebratory Feast & Family Camaraderie",
      description: "Join us for an elaborate traditional celebratory wedding lunch.",
      attire: "Festive Ethnic Attire",
      location: "Madhura Banquet Hall, 4th Floor Dining Hall",
    },
  ],
  venue: {
    name: "Madhura Banquet Hall",
    address: "Flats 150/151, Vijetha Supermarket, 4th floor, 9th phase",
    city: "KPHB, Hyderabad",
    state: "Telangana",
    landmark: "Above Vijetha Supermarket, 4th Floor, 9th Phase, KPHB Colony",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Madhura+Banquet+Hall+Vijetha+Supermarket+KPHB+Hyderabad",
    contactPhones: ["+91 98765 43210"],
  },
  story: [
    {
      id: "1",
      title: "When Hearts Aligned",
      date: "2025",
      description: "A beautiful journey of mutual understanding, laughter, and shared family values.",
      category: "The Beginning",
    },
    {
      id: "2",
      title: "Families Unite",
      date: "2026",
      description: "With heartfelt blessings and joy, both families pledged this auspicious union.",
      category: "Blessings",
    },
    {
      id: "3",
      title: "The Auspicious Wedding Day",
      date: "November 2026",
      description: "Taking sacred vows around the holy fire, stepping into eternity together.",
      category: "Vedic Union",
    },
  ],
  feastMenu: [
    {
      category: "Traditional Kalyana Virundhu",
      items: [
        "Welcome Drink & Fresh Fruit Mocktail",
        "Steaming Hot Ghee Rice & Sambar",
        "Traditional Veg Biryani & Raitha",
        "Paneer Butter Masala & Poori",
        "Avial, Poriyal & Fresh Papads",
        "Special Bellam Payasam & Ice Cream",
      ],
      description: "Sumptuous traditional wedding feast served with unconditional love.",
    },
  ],
};

export const INITIAL_BLESSINGS: BlessingNote[] = [
  {
    id: "b1",
    guestName: "Family Elders",
    relation: "Well-wishers",
    message: "May Lord Ganesha shower you both with boundless peace, joy, longevity, and prosperous bliss. Hearty congratulations Sai Kiran Mohan and Sri Anusha!",
    timestamp: "Today",
    likes: 12,
  },
];
