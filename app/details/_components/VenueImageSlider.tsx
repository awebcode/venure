import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card"; // Assuming ShadCN's Card component is imported

const images = [
  "https://images.unsplash.com/photo-1566073771259-6a8506099945",
  "https://images.unsplash.com/photo-1582719508461-905c673771fd",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
  "https://images.unsplash.com/photo-1566073771259-6a8506099945",
  "https://images.unsplash.com/photo-1582719508461-905c673771fd",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
  // Add more images if needed
];

export const VenueImageSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const totalImages = images.length;
  const [currentThumbIndex, setCurrentThumbIndex] = useState(0); // Track current thumb index

  return (
    <div className="relative h-[480px] mb-8">
      {/* Main Image Swiper */}
      <Swiper
        modules={[Navigation, Pagination, Thumbs]}
        navigation
        pagination={{ clickable: true }}
        thumbs={{
          swiper: thumbsSwiper && !(thumbsSwiper as any)?.destroyed ? thumbsSwiper : null,
        }}
        spaceBetween={20}
        slidesPerView={1}
        className="h-full max-h-[380px] rounded-lg"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={`${image}?auto=format&fit=crop&w=1200&h=400`}
                alt={`Venue image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              {/* Image count display */}
              <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded-full">
                {index + 1}/{totalImages}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Swiper */}
      <Card className="p-2 my-4">
        <Swiper
          modules={[Thumbs, Pagination]}
          onSwiper={setThumbsSwiper as any}
          spaceBetween={10}
          slidesPerView={5}
          freeMode={true}
          watchSlidesProgress={true}
          onSlideChange={(swiper) => setCurrentThumbIndex(swiper.activeIndex)}
          pagination={{
            clickable: true,
            el: ".swiper-pagination", // Ensure pagination buttons are on the thumbnails swiper
          }}
          className="overflow-hidden rounded-lg"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[80px] cursor-pointer group">
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Pagination and Remaining Count */}
        <div className="swiper-pagination flex justify-between items-center">
          <span className="text-sm">
            {totalImages > 5
              ? `${totalImages - 5} images remaining`
              : "Showing all images"}
          </span>
          <div className="swiper-pagination"></div>
        </div>
      </Card>
    </div>
  );
};
