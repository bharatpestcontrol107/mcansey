// components/LogoSlider.tsx
"use client"
import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore from 'swiper';
import Image from 'next/image';

import img1 from '../../../../public/images/kfc-logo.webp'
import img2 from '../../../../public/images/kpmg-logo.webp'

SwiperCore.use([]);

interface LogoSliderProps {}

const LogoSlider: FC<LogoSliderProps> = () => {
    return (
      <div className="client_logos py-8">
        <div className="trusted_brands text-center mb-6">
          <div className="flex items-center justify-center">
            <hr className="flex-grow border-t border-zinc-400 mx-4" />
            <span className="text-xl md:text-2xl font-medium">
              Trusted by conglomerates, enterprises, and startups alike
            </span>
            <hr className="flex-grow border-t border-zinc-400 mx-4" />
          </div>
        </div>
        <Swiper
          spaceBetween={10} 
          loop={true} 
          slidesPerView={2} 
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
            1200: { slidesPerView: 6 }, 
          }}
          grabCursor={true} 
          className="swiper-container"
        >
          <SwiperSlide>
            <Image width={100} height={100} className="mx-auto" src={img1} alt="KFC" />
          </SwiperSlide>
          <SwiperSlide>
            <Image width={100} height={100} src={img2} alt="KPMG" className="mx-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <Image width={100} height={100} src={img1} alt="Domino's" className="mx-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <Image width={100} height={100} src={img2} alt="Google" className="mx-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <Image width={100} height={100} src={img1} alt="BCG" className="mx-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <Image width={100} height={100} src={img2} alt="Americana" className="mx-auto" />
          </SwiperSlide>
        </Swiper>
      </div>
    );
  };
export default LogoSlider;
