'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';

const IconSlider: React.FC = () => {
  const images = [
    { src: '/logos/jindal-steel.png', alt: 'Google' },
    { src: '/logos/c1-india.png', alt: 'Ikea' },
    { src: '/logos/coal-giene.png', alt: 'KFC' },
    { src: '/logos/dancewala-studio.png', alt: 'Dominos' },
    { src: '/logos/expert-buddy.png', alt: 'Dominos' },
    { src: '/logos/incoin.png', alt: 'Dominos' },
    { src: '/logos/jindal-arogya.png', alt: 'Dominos' },
    { src: '/logos/milestone.png', alt: 'Dominos' },
    { src: '/logos/Nesto-Hub.png', alt: 'Dominos' },
  ];

  return (
    <div className="flex w-full md:h-[160px] lg:h-[280px] mx-auto xl:w-[85%] flex-col lg:flex-row px-4 py-2"> 
      <div className="w-full lg:w-1/3 flex justify-center"> 
        <Swiper
          spaceBetween={20} 
          slidesPerView={3}  
          loop={true}       
          autoplay={{
            delay: 2500,      
            disableOnInteraction: false,  
          }}
          modules={[Autoplay]} 
          className="w-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image src={image.src} alt={image.alt} className="h-24 lg:h-24" height={220} width={150} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hidden lg:block lg:w-2/3"></div> 
    </div>
  );
};

export default IconSlider;
