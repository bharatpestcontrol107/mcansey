"use client";
import { useState, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function CardMobile({ cards }: { cards: ServiceCardProps[] }) {
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

  const handleTouchStart = () => {
    if (swiperRef.current) {
      swiperRef.current.el.style.cursor = "grabbing";
    }
  };

  const handleTouchEnd = () => {
    if (swiperRef.current) {
      swiperRef.current.el.style.cursor = "default";
    }
  };



  return (
    <div className="p-6 md:p-8">
      <div className="pl-4 xl:pl-56 mx-auto w-full xl:w-[100%]">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
        "From Concept to Code: A Seamless Development Process"
        </h1>
        <p className="text-lg mb-12 max-w-3xl">
        Our Agile mobile app development process ensures a flexible, iterative approach to building high-quality apps. By breaking the project into manageable sprints, we can quickly adapt to changes, gather feedback, and deliver continuous improvements throughout the development cycle. This collaborative approach allows us to prioritize user needs, ensure fast delivery, and maintain high standards of quality and performance, resulting in apps that are not only functional but also aligned with your business goals and market demands.
        </p>

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

        <div className="w-full  xl:w-full mx-auto xl:mx-0">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={12}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
                centeredSlides: true,
              },
              520: {
                slidesPerView: 2,
                spaceBetween: 10,
                centeredSlides: true,
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
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={handleTouchStart}
            onMouseLeave={handleTouchEnd}
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index} className="h-auto">
                <ServiceCard
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="rounded-2xl p-6 flex flex-col h-full border-zinc-300 border-[1px] hover:bg-gradient-to-r transform">
      <div className="bg-blue-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6 hover:bg-zinc-200">
        {icon}
      </div>
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="flex-grow text-sm">{description}</p>
    </div>
  );
}
