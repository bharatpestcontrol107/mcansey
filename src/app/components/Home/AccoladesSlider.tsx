'use client';
import React, { useRef } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface AwardData {
  title: string;
  year: string;
  imageUrl: string;
}

const awards: AwardData[] = [
  {
    title: 'Tech Company of the Year',
    year: '2023',
    imageUrl: '/logos/rsm.png',
  },
  {
    title: 'India’s Growth Champions in IT',
    year: '2023',
    imageUrl: '/logos/jindal-steel.png',
  },
  {
    title: 'Best Place to Work',
    year: '2022',
    imageUrl: '/logos/intech-logo.png',
  },
  {
    title: 'Top Mobile App Developers',
    year: '2020',
    imageUrl: '/logos/c1-india.png',
  },
  {
    title: 'App Development Company of the Year',
    year: '2020',
    imageUrl: '/logos/Nesto-Hub.png',
  },
  
];

const AwardCard: React.FC<AwardData> = ({ title, year, imageUrl }) => (
  <div className="p-4 text-center border-2 border-blue-200 rounded-xl shadow-md    mx-2 flex flex-col h-[350px] min-h-[350px] max-h-[350px]">
    <div className="flex justify-center mb-4">
      <div className="w-[160px] h-[160px]">
        <Image
          src={imageUrl}
          alt={title}
          width={150}
          height={150}
          className="object-contain w-full h-full"
        />
      </div>
    </div>
    <div className="flex flex-col items-center flex-grow">
      <p className="text-sm mt-2">{year}</p>
      <h3 className="text-xl font-bold mt-2">{title}</h3>
    </div>
  </div>
);

const AccoladesSlider: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container max-w-full mx-auto p-4 mt-4 relative overflow-hidden md:max-w-[85%]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 space-y-4 md:space-y-0 ">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black text-center md:text-left leading-snug md:leading-normal py-3 max-w-full md:max-w-[80%]">
          Our Growth Journey as a Mobile App Development Company Has Bagged a Few Reputed Accolades as Well
        </h2>

        <div className="flex space-x-4 justify-center md:justify-start">
          <div
            className="bg-blue-600 p-3 w-12 h-12 rounded-full cursor-pointer text-white hover:bg-blue-500"
            onClick={() => sliderRef.current?.slickPrev()}
          >
            ←
          </div>
          <div
            className="bg-blue-600 p-3 w-12 h-12 rounded-full cursor-pointer text-white hover:bg-blue-500"
            onClick={() => sliderRef.current?.slickNext()}
          >
            →
          </div>
        </div>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {awards.map((award, index) => (
          <AwardCard key={index} title={award.title} year={award.year} imageUrl={award.imageUrl} />
        ))}
      </Slider>
    </div>
  );
};

export default AccoladesSlider;
