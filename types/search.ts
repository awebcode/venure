export interface VenueFilter {
  setting: "INDOOR" | "OUTDOOR" | "HYBRID" | null;
  attendees: number;
  spaceSize: number;
  features: string[];
  priceRange: number;
  rating: number;
  adjustableSpace: boolean;
}


export interface Venue {
  id: string;
  name: string;
  location: string;
  type: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  features: string[];
}

export interface VenueCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}