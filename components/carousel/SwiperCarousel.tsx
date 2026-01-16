'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ISwiperCarouselProps } from '@/types';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function SwiperCarousel({
  items,
  slidesPerView = 1,
  spaceBetween = 30,
  autoplay = true,
  navigation = true,
  pagination = true,
}: ISwiperCarouselProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      spaceBetween={spaceBetween}
      navigation={false}
      pagination={pagination ? { 
        clickable: true,
        bulletClass: 'swiper-pagination-bullet !bg-gray-700',
        bulletActiveClass: 'swiper-pagination-bullet-active !bg-gray-500'
      } : false}
      autoplay={autoplay ? { delay: 5000, disableOnInteraction: false } : false}
      breakpoints={{
        640: {
          slidesPerView: Math.min(2, slidesPerView),
        },
        1024: {
          slidesPerView: slidesPerView,
        },
      }}
      className="w-full [&_.swiper-pagination-bullet]:bg-gray-700 [&_.swiper-pagination-bullet-active]:bg-gray-500"
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>{item}</SwiperSlide>
      ))}
    </Swiper>
  );
}

