export interface WeddingDetails {
  groom: {
    name: string;
    fullName: string;
    title: string;
    parents: string;
    grandparents?: string;
    education?: string;
    bio?: string;
  };
  bride: {
    name: string;
    fullName: string;
    title: string;
    parents: string;
    grandparents?: string;
    education?: string;
    bio?: string;
  };
  events: WeddingEvent[];
  venue: VenueInfo;
  story: StoryMilestone[];
  feastMenu: FeastItem[];
}

export interface WeddingEvent {
  id: string;
  name: string;
  tamilName?: string;
  date: string;
  displayDate: string;
  time: string;
  auspiciousDetails?: string;
  description: string;
  attire?: string;
  location: string;
  calendarLink?: string;
}

export interface VenueInfo {
  name: string;
  address: string;
  city: string;
  state: string;
  landmark: string;
  googleMapsUrl: string;
  mapEmbedUrl?: string;
  contactPhones: string[];
}

export interface StoryMilestone {
  id: string;
  title: string;
  date: string;
  description: string;
  category: string;
  iconName?: string;
}

export interface FeastItem {
  category: string;
  items: string[];
  description: string;
}

export interface RSVPSubmission {
  id: string;
  name: string;
  phone: string;
  attending: "yes" | "no" | "maybe";
  guestCount: number;
  events: string[];
  dietaryPreference: "traditional-veg" | "jain" | "standard";
  blessingMessage: string;
  submittedAt: string;
}

export interface BlessingNote {
  id: string;
  guestName: string;
  relation: string;
  message: string;
  timestamp: string;
  likes: number;
}

