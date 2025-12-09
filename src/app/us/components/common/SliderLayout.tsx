// SliderLayout.tsx
'use client';
import React, { useState, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ServiceCard from "./ServiceCard"; 

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type SliderLayoutProps = {
  title: string;
  description: string;
  cards: ServiceCardProps[];
};

export default function SliderLayout({ title, description, cards }: SliderLayoutProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <div className="p-6 md:p-8">
      <div className="md:pl-4 xl:pl-56 mx-auto w-full xl:w-[100%]">
        <h2 className="text-xl md:text-2xl  font-bold mb-6">{title}</h2>
        <p className="text-sm mb-12 max-w-3xl">{description}</p>

        <div className="flex justify-between items-center mb-8">
          <span className="text-xl font-semibold">
            {`${currentIndex + 1 < 10 ? '0' : ''}${currentIndex + 1} — ${cards.length < 10 ? '0' : ''}${cards.length}`}
          </span>
          <div className="flex gap-4">
            <button onClick={handlePrev} className="p-2 border border-blue-600 rounded-xl bg-blue-600">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button onClick={handleNext} className="p-2 border border-blue-600 rounded-xl bg-blue-600">
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="w-full xl:w-full mx-auto xl:mx-0">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={12}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 1.1,
                spaceBetween: 15,
                centeredSlides: false,
              },
              520: {
                slidesPerView: 2,
                spaceBetween: 15,
                centeredSlides: false,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 20,
                centeredSlides: false,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 20,
                centeredSlides: false,
              },
              1200: {
                slidesPerView: 3.5,
                spaceBetween: 20,
                centeredSlides: false,
              },
              1400: {
                slidesPerView: 4.5,
                spaceBetween: 20,
                centeredSlides: false,
              },
            }}
            className="!pb-8 h-[500px] xl:h-[480px]"
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index} className="h-auto">
                <ServiceCard icon={card.icon} title={card.title} description={card.description} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
