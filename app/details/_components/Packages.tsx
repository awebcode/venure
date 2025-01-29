import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { PackageCard } from "./PackageCard"; // Assuming PackageCard component is imported
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const packages = [
  { name: "Vendor 1", type: "Buffet", price: 450, reviews: 2228 },
  { name: "Vendor 2", type: "À la Carte", price: 300, reviews: 1500 },
  { name: "Vendor 3", type: "Buffet", price: 500, reviews: 1800 },
  { name: "Vendor 4", type: "Buffet", price: 350, reviews: 800 },
  { name: "Vendor 5", type: "À la Carte", price: 400, reviews: 1200 },
  { name: "Vendor 6", type: "Buffet", price: 450, reviews: 2200 },
];

const Packages = () => {
  const isMobile=useIsMobile()
  return (
    <div id="Packages">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Packages: Food & Beverages</h2>
        <Button variant="outline">SHOW ALL</Button>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20} // Controls the space between slides
        slidesPerView={isMobile?1:3} // Three slides per view
        navigation
        pagination={{ clickable: true }}
        className="py-6"
      >
        {packages.map((pkg, i) => (
          <SwiperSlide key={i} className="flex gap-4">
            <PackageCard
              name={pkg.name}
              type={pkg.type}
              price={pkg.price}
              reviews={pkg.reviews}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Packages;
