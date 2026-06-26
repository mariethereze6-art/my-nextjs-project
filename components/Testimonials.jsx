// components/Testimonials.jsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  { name: "Sarah Chen", role: "Product Designer", quote: "TechNova's laptop changed how I work — fast, reliable, and support actually responds." },
  { name: "Marcus Lee", role: "Software Engineer", quote: "Ordered a phone and headphones together, both arrived early and exactly as described." },
  { name: "Amelia Torres", role: "Small Business Owner", quote: "The two-year warranty gave me confidence. When I needed a repair, it was painless." },
];

export default function Testimonials() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      slidesPerView={1}
      spaceBetween={32}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
      className="!pb-14"
    >
      {testimonials.map((t) => (
        <SwiperSlide key={t.name} className="!h-auto py-2">
          <figure className="flex h-full flex-col rounded-2xl border border-white/[0.06] bg-white/[0.03] p-8">
            <blockquote className="flex-1 text-base leading-7 text-slate-300">“{t.quote}”</blockquote>
            <figcaption className="mt-6 border-t border-white/[0.06] pt-5">
              <p className="text-sm font-bold text-white">{t.name}</p>
              <p className="text-xs text-slate-500">{t.role}</p>
            </figcaption>
          </figure>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}