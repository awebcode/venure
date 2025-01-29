"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SpaceCard } from "./SpaceCard";
import { useIsMobile } from "@/hooks/use-mobile";

const spaces = [
  {
    type: "A",
    rating: 4.5,
    reviewCount: 2125,
    capacity: 50,
    price: 125000,
    amenities: ["Indoor", "Tables", "Chairs", "+7 more"],
    venuSize: "2400 sqm",
    stageSize: "200 sqm",
  },
  {
    type: "B",
    rating: 4.5,
    reviewCount: 2273,
    capacity: 50,
    price: 125000,
    amenities: ["Indoor", "Tables", "Chairs", "+7 more"],
    venuSize: "2400 sqm",
    stageSize: "200 sqm",
  },
  {
    type: "C",
    rating: 4.5,
    reviewCount: 2125,
    capacity: 50,
    price: 125000,
    amenities: ["Indoor", "Tables", "Chairs", "+7 more"],
    venuSize: "2400 sqm",
    stageSize: "200 sqm",
  },
  // Add more spaces as needed
];

export default function SpaceSelector() {
  const isMobile=useIsMobile()
  return (
    <div id="Space Size" className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="space-y-6 mb-8">
        <h2 className="text-xl font-semibold">Space Size</h2>
        <div className="space-y-1">
          <p className="text-sm">Venu Size: 2400 sqm</p>
          <p className="text-sm">Stage Size: 200 sqm</p>
        </div>
        <p className="text-sm font-medium">This Space is Expandable:</p>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20} // Controls the space between slides
        slidesPerView={isMobile?1:2} // Three slides per view
        navigation
        pagination={{ clickable: true }}
        className="py-6"
      >
        {spaces.map((space, i) => (
          <SwiperSlide key={i} className="flex gap-4">
            <SpaceCard {...space} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
