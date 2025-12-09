'use client';
import React from 'react';
import Slider from 'react-slick';
import Image, { StaticImageData } from 'next/image';

import img1 from '../../../public/HomePageSlider/deloitte.svg';
import img2 from '../../../public/HomePageSlider/apac-2024-home.svg';
import img3 from '../../../public/HomePageSlider/entrepreneur-award-logo.svg';
import img4 from '../../../public/HomePageSlider/economictimes-badge.svg';
import img5 from '../../../public/HomePageSlider/timesbusiness-badge.svg';
import Link from 'next/link';

interface AwardImageProps {
  src: StaticImageData;
  alt: string;
}

const awards: AwardImageProps[] = [
  { src: img1, alt: 'Deloitte' },
  { src: img2, alt: 'Financial Times' },
  { src: img3, alt: 'Entrepreneur' },
  { src: img4, alt: 'India\'s Growth Champions' },
  { src: img5, alt: 'Times Business Awards' },
];

const sliderSettings = {
  infinite: true,
  speed: 500,
  arrows:false, 
  slidesToShow: 2, 
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  centerMode: true,
  centerPadding: '30px',
  responsive: [
    {
      breakpoint: 768, 
      settings: {
        slidesToShow: 2, 
        slidesToScroll: 1,
        centerMode: false, 
        centerPadding: '0px',
      },
    },
  ],
};

const AwardsCarousel: React.FC = () => {
  return (
    <div className="bg-blue-300 bg-opacity-50 py-8 overflow-hidden w-full">
      <div className="md:w-[90vw] mx-auto"> 
        
       
        <div className="hidden lg:grid lg:grid-cols-5 xl:grid-cols-5 gap-6 w-full px-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className={`relative h-32 w-full  md:max-w-[180px] flex-shrink-0 ${index !== 0 ? '' : ''}`}
            >
              <Image
                src={award.src}
                alt={award.alt}
                fill
                style={{ objectFit: 'contain' }}
                sizes="(max-width: 768px) 100vw, (min-width: 769px) 40vw, (min-width: 1025px) 15vw"
              />
            </div>
          ))}
        </div>

       
        <div className="lg:hidden">
          <Slider {...sliderSettings}>
            {awards.map((award, index) => (
              <div key={index} className="flex justify-center items-center px-4"> 
                <Link href={''} passHref>
                <div className={`relative ${index === 0 ? 'w-32 h-20' : 'w-40 h-20'} ${index !== 0 ? 'pl-3' : ''}`}>
                    <Image
                      src={award.src}
                      alt={award.alt}
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default AwardsCarousel;
