"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

import logo1 from "../../../../public/landing-page/reviews.webp";
import logos1 from "../../../../public/landing-page/shopify_plus.svg.webp";
import logos2 from "../../../../public/landing-page/google.svg.webp";
import logos3 from "../../../../public/landing-page/trustpilot.webp";
import logos4 from "../../../../public/landing-page/shopify-one.webp";

export default function ShopifyCards() {
  const logos = [
    { name: "Shopify Reviews", src: logo1 },
    { name: "Shopify Plus", src: logos1 },
    { name: "Google Reviews", src: logos2 },
    { name: "Trustpilot", src: logos3 },
    { name: "Shopify Certified Partners", src: logos4 },
  ];

  return (
    <div className="w-full bg-white ">
      <div className="mx-auto px-4 max-w-[90%] lg:max-w-[80%]">
      
        <div className="block lg:hidden pt-8">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1.2}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              370: {
                slidesPerView: 1.2,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
            }}
            loop={true}
          >
            {logos.map((logo) => (
              <SwiperSlide key={logo.name}>
                <div className="flex items-center justify-center w-full shadow-lg p-2 rounded-lg py-1 border">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    height={160}
                    width={160}
                    className="h-20 w-20 sm:h-24 sm:w-32 object-contain grayscale opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Large Screen: Grid */}
        <div className="hidden lg:block py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 items-center justify-items-center gap-8 lg:gap-12 xl:gap-[110px]">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center justify-center w-full shadow-lg p-2 rounded-lg py-1 border"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  height={160}
                  width={160}
                  className="h-20 w-20 sm:h-24 sm:w-32 object-contain grayscale opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
