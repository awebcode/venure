"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button } from "./ui/button";
import { CommonCard } from "./common/common-card";
import type { VenueCardProps } from "@/types/search";
import { useIsMobile } from "@/hooks/use-mobile";

const RecommendedVenues = ({ venues }: { venues: VenueCardProps[] }) => {
  const isMobile = useIsMobile();

  return (
    <section className="py-8 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold">Recommended Venues</h3>
          <Button className="btn-primary-orange">VIEW MORE</Button>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={isMobile ? 1 : 3}
          navigation
          pagination={{ clickable: true }}
          className="py-6"
        >
          {venues.map((venue, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <CommonCard {...venue} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default RecommendedVenues;
