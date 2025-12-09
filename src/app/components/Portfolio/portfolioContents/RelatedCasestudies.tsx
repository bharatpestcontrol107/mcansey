'use client'
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface CardProps {
  imageUrl: string;
  description: string;
}

const cardData: CardProps[] = [
  {
    imageUrl: "/portfolio/Cover_Inner-21.webp",
    description: "Mcansey helps NeGD modernize a health tracker for rural child care centers as a part of the Digital India Initiative",
  },
  {
    imageUrl: "/portfolio/Cover_Inner-9.webp",
    description: "Telehealth application development for a US-based mental healthcare firm",
  },
  {
    imageUrl: "/portfolio/Cover_Inner-21.webp",
    description: "Rebuilding an AI and IoT-based multi-source health tracking app",
  },
  {
    imageUrl: "/portfolio/Cover_Inner-9.webp",
    description: "Telehealth application development for a US-based mental healthcare firm",
  },
];

const SampleNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-0 p-2 md:p-3 rounded-full top-1/3 transform -translate-y-1/2 z-10 bg-blue-500 text-white cursor-pointer"
      onClick={onClick}
    >
      <FaArrowRight />
    </div>
  );
};

const SamplePrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-0 p-2 md:p-3 rounded-full top-1/3 transform -translate-y-1/2 z-10 bg-blue-500 text-white cursor-pointer"
      onClick={onClick}
    >
      <FaArrowLeft />
    </div>
  );
};

const RelatedCasestudies: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
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
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="max-w-7xl mx-auto px-4 md:py-8">
      <h1 className="text-xl md:text-2xl">Read Related case studies</h1>
      <Slider {...settings}>
        {cardData.map((card, index) => (
          <div key={index} className="p-4">
            <div className="bg-white overflow-hidden relative group flex flex-col h-full hover:scale-105 delay-100  transition-all">
              {/* Image */}
              <div className="relative w-full h-56">
                <Image
                  src={card.imageUrl}
                  alt={card.description}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
           
              <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-50 transition-opacity "></div>
           
              <div className="p-4 relative z-10 flex-1">
                <p className="text-gray-600">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>  
  );
};

export default RelatedCasestudies;
