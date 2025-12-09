'use client'
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../../../../../public/Startegic/aws-partner.svg';
import img2 from '../../../../../public/Startegic/mongodb-partner.svg';
import img3 from '../../../../../public/Startegic/google-cloud-partner.svg';
import img4 from '../../../../../public/Startegic/firebase-svgrepo-com.svg';
import img5 from '../../../../../public/TechCapa/database/mysql-tech-icon.svg';
import img6 from '../../../../../public/Startegic/digitalocean-svgrepo-com.svg';
import img7 from '../../../../../public/Startegic/heroku-redis-svgrepo-com.svg';
import img8 from '../../../../../public/Startegic/ibm-cloud-internet-services-svgrepo-com.svg';
import img9 from '../../../../../public/Startegic/azure-icon-svgrepo-com.svg';
import img10 from '../../../../../public/Startegic/docker-logo.svg';
import Image, { StaticImageData } from 'next/image';

interface Partner {
  name: string;
  logoUrl: StaticImageData;
}

const partners: Partner[] = [
  { name: 'Azure', logoUrl: img9 },
  { name: 'Google Cloud', logoUrl: img3 },
  { name: 'AWS', logoUrl: img1 },
  { name: 'MongoDB', logoUrl: img2 },
  { name: 'Cloudinary', logoUrl: img4 },
  { name: 'MySql', logoUrl: img5 },
  { name: 'Digital Ocean', logoUrl: img6 },
  { name: 'Redis', logoUrl: img7 },
  { name: 'IBM', logoUrl: img8 },
  { name: 'Docker', logoUrl: img10 },
];

const StrategicPartnerships: React.FC = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    cssEase: 'linear',
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="bg-[#B2C6E7] text-black py-10 w-full relative">
      <div className="md:w-[85%] mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <h2 className="text-xl md:text-2xl font-bold text-center md:text-left p-3 xl:w-4/5">
              Strategic Partnerships to Unlock Greater Business Value
            </h2>
          </div>
          <div className="md:w-1/2 w-full relative overflow-hidden">
          
            <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-gray-300 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-gray-300 to-transparent z-10 pointer-events-none"></div>
            
            <Slider {...sliderSettings}>
              {partners.map((partner) => (
                <div key={partner.name} className="flex items-center justify-center p-2">
                  <Image
                    src={partner.logoUrl}
                    alt={partner.name}
                    className="h-12 w-auto"
                    priority
                    sizes="(max-width: 768px) 100px, (min-width: 769px) 150px"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicPartnerships;
