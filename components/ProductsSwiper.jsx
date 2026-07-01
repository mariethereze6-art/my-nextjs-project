// components/ProductsSwiper.jsx
"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ProductCard from "./ui/ProductCard";

function ChevronLeft() {
  return (
    <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24"
      stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24"
      stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

export default function ProductsSwiper({ products }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const enableLoop = products.length > 3;

  return (
    <div className="relative">
      <button ref={prevRef} aria-label="Previous product"
        className="swiper-nav-btn swiper-nav-prev">
        <ChevronLeft />
      </button>
      <button ref={nextRef} aria-label="Next product"
        className="swiper-nav-btn swiper-nav-next">
        <ChevronRight />
      </button>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={32}
        slidesPerView={1}
        navigation={{ prevEl: null, nextEl: null }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
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
        className="!pb-14"
      >
        {products.map((product) => (
          <SwiperSlide key={product.name} className="!h-auto py-2">
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}