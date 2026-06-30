// components/ProductsSwiper.jsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductCard from "./ui/ProductCard";

export default function ProductsSwiper({ products }) {
  const enableLoop = products.length > 3;

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={32}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop={enableLoop}
      autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
      breakpoints={{
        640: { slidesPerView: 1.2 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      a11y={{
        prevSlideMessage: "Previous product",
        nextSlideMessage: "Next product",
      }}
      style={{
        "--swiper-navigation-top-offset": "136px",
        "--swiper-navigation-sides-offset": "16px",
      }}
      className="!pb-14"
    >
      {products.map((product) => (
        <SwiperSlide key={product.name} className="!h-auto py-2">
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}