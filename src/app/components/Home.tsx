'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from './Navbar';
import { FaArrowRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

interface BannerData {
  title: string;
  subtitle: string;
  mobileImageUrl: string;
  desktopImageUrl: string;
  color: string;
}

const bannerData: BannerData[] = [
  {
    title: 'Innovative Website & Mobile App Solutions to Elevate Your Digital Presence',
    subtitle:
      'Build user-friendly websites and mobile apps tailored to your business needs, delivering exceptional performance and seamless user experiences.',
    mobileImageUrl: '/Banners/banner1.webp',
    desktopImageUrl: '/Home/mcansey-home1.webp',
    color: 'white',
  },
  {
    title: 'Harness the Power of Web3, Blockchain, AI, and ML to Shape the Future.',
    subtitle:
      'Leverage cutting-edge technologies like Web3, Blockchain, AI, and Machine Learning to innovate, automate, and stay ahead in the digital era.',
    mobileImageUrl: '/Banners/banner2.webp',
    desktopImageUrl: '/Home/mcansey-home2.webp',
    color: 'white',
  },
  {
    title: 'Robust Enterprise Software to Streamline Operations and Drive Growth.',
    subtitle:
      'Develop custom enterprise software designed to optimize workflows, improve productivity, and scale your business effectively.',
    mobileImageUrl: '/Banners/banner3.webp',
    desktopImageUrl: '/Banners/mcansey-homepage-2.webp',
    color: 'white',
  },
];

export default function Homes() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="relative">
      <Navbar />
      <header className="relative h-[70vh] md:h-[80vh]">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full h-full"
        >
          {bannerData.map((banner, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative w-full h-full bg-cover bg-center transition-opacity duration-700"
                style={{
                  backgroundImage: `url(${
                    isClient && window.innerWidth < 768
                      ? banner.mobileImageUrl
                      : banner.desktopImageUrl
                  })`,
                }}
              >
                <div className="relative z-20 flex pt-20 md:items-center justify-start h-full md:w-[90vw] mx-auto px-4 sm:px-8">
                  <div className="text-white lg:w-1/1">
                    <h1
                      className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4 text-left md:max-w-[50%] leading-snug lg:leading-relaxed tracking-wide"
                      style={{ color: banner.color }}
                    >
                      {banner.title}
                    </h1>
                    <p
                      className={`${
                        isClient && window.innerWidth >= 768 ? 'block' : 'hidden'
                      } text-sm sm:text-md md:text-lg lg:leading-loose mb-6 text-left lg:w-[50%]`}
                      style={{ color: banner.color }}
                    >
                      {banner.subtitle}
                    </p>
                    <Link
                      href="/contact-us"
                      passHref
                      className="bg-blue-600 text-white text-xs md:text-sm px-4 py-2 rounded-lg inline-flex items-center mb-12 md:mb-16"
                    >
                      Consult Our Experts <FaArrowRight className="ml-2" />
                    </Link>

                    <div className="absolute bottom-6 md:bottom-8 left-4 right-4 md:left-8 z-30 flex justify-center space-x-2">
                      {bannerData.map((_, i) => (
                        <div
                          key={i}
                          className={`relative w-16 md:w-24 h-[2px] rounded-full overflow-hidden ${
                            i === activeIndex ? 'bg-gray-300' : 'bg-gray-500'
                          }`}
                        >
                          {i === activeIndex && (
                            <div
                              className="absolute top-0 left-0 h-full bg-white animate-fill"
                              style={{
                                animationDuration: '3s',
                              }}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </header>
    </div>
  );
}
