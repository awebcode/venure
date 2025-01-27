import type { Venue, VenueFilter } from "@/types/search";

// Simulated API call for fetching venues
export async function fetchVenues(filters: VenueFilter): Promise<Venue[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Simulated venue data
  const venues: Venue[] = [
    {
      id: "1",
      name: "Grand Ballroom",
      location: "Shangri-La, Bangkok",
      type: "Hotel",
      price: 120000,
      rating: 4.8,
      reviews: 2228,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-01-27%2014-51-48-2BKhEKnmmF4kszAZHOqfbE3ZMMz0Yz.png",
      features: ["Projector", "Stage", "Sound System"],
    },
    {
      id: "2",
      name: "Sala Thai Ballroom",
      location: "Marriott Marquis Queen's Park",
      type: "Hotel",
      price: 120000,
      rating: 4.7,
      reviews: 2228,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-01-27%2014-51-48-2BKhEKnmmF4kszAZHOqfbE3ZMMz0Yz.png",
      features: ["Pool", "Stage", "Catering"],
    },
    // Add more venues as needed
  ];

  // Apply filters (in a real app, this would be done on the server)
  return venues.filter((venue) => {
    if (filters.setting && venue.type !== filters.setting) return false;
    if (
      filters.features.length &&
      !filters.features.every((f) => venue.features.includes(f))
    )
      return false;
    if (venue.price > filters.priceRange) return false;
    return true;
  });
}
