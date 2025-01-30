"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

interface SliderSectionProps {
  title: string;
  subtitle?: string;
  items: any[];
  renderItem: (item: any, index: number) => React.ReactNode;
  viewMoreText?: string;
}

const SliderSection: React.FC<SliderSectionProps> = ({
  title,
  subtitle,
  items,
  renderItem,
  viewMoreText = "VIEW MORE",
}) => {
  const isMobile = useIsMobile();

  return (
    <section className="py-8 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold">{title}</h3>
            {subtitle && <p className="text-gray-500">{subtitle}</p>}
          </div>
          <Button className="btn-primary-orange">{viewMoreText}</Button>
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
          {items.map((item, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              {renderItem(item, index)}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SliderSection;
