'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import 'swiper/css';
import 'swiper/css/autoplay';

type FilterKey = 'all' | 'uiux' | 'brand' | 'mobile' | 'dm' | 'software' | 'view';

const filters = [
  { label: 'All', id: 'all' },
  { label: 'Website UI/UX', id: 'uiux' },
  { label: 'Ecommerce', id: 'brand' },
  { label: 'Mobile App', id: 'mobile' },
  { label: 'Software', id: 'software' },
  { label: 'Digital Marketing', id: 'dm' },
  { label: 'View All', id: 'view', link: '/portfolio' }, 
];

const images: Record<FilterKey, string[]> = {
  all: [],
  brand: [
    '/Home/OurWork/Mcansey ecommerce-fashion-and-apparel-website-design-company.png',
    '/Home/OurWork/online shoping clothes ecommerce website design company.png',
    '/Home/OurWork/mcansey online jewellery ecommerce website design company.png',
    '/Home/OurWork/mcansey ecommerce-online-clothing-fashion-website-design-company.png',
    '/Home/OurWork/mcansey online beauty products ecommerce website design company.png',
    '/Home/OurWork/mcansey-online-cake-shop-ecommerce-website-design-company.png',
  ],
  uiux: [
    '/Home/OurWork/mcansey-automotive-website-design-company.webp',
    '/Home/OurWork/mcansey-entertainment-website-design-company.webp',
    '/Home/OurWork/mcansey-online-chicken-mutton-website-design-company.png',
    '/Home/OurWork/Mcansey-IT-Consultant-website-design-company.png',
    '/Home/OurWork/Mcansey Logistics website Design Company.png',
  ],
  mobile: [
    '/Home/OurWork/MobileApp/mcansey-chat-app-development-company.png',
    '/Home/OurWork/MobileApp/mcansey-real-estate-app-development-company (1).png',
    '/Home/OurWork/MobileApp/mcansey-service-booking-app-development-company.png',
    '/Home/OurWork/MobileApp/mcansey-dental-mobile-app-development-company.png',
    '/Home/OurWork/MobileApp/mcansey-restaurant-mobile-app-development-company.png',
  ],
  dm: [
    '/Home/OurWork/Mcansey Finance & Accounting website design company.png',
    '/Home/OurWork/mcansey-hospitality-services-website-design-company.png',
    '/Home/OurWork/mcansey-healthcare-training-institute-website-design-company.png',
  ],
  software: [
    '/Home/OurWork/mcansey-crm-development-company.png',
    '/Home/OurWork/mcansey-lms-development-company.png',
    '/Home/OurWork/mcansey-software-development-company.png',
    '/Home/OurWork/mcansey-fintech-software-development-company.png',
    '/Home/OurWork/mcansey-erp-development-company.png',
  ],
  view: [], 
};

const OurWork = () => {
  const [selectedFilter, setSelectedFilter] = useState<FilterKey>('all');

  const filteredImages =
    selectedFilter === 'all'
      ? [...images.brand, ...images.uiux, ...images.dm, ...images.software, ...images.mobile]
      : images[selectedFilter];

  const availableFilters = filters.filter(
    (filter) => filter.id === 'all' || images[filter.id as FilterKey].length > 0 || filter.id === 'view'
  );

  return (
    <div className="bg-white text-black py-8 px-4 md:px-8 flex justify-end">
      <div className="w-full md:max-w-[94%] flex flex-col items-start space-y-8">
        <h1 className="text-xl md:text-2xl xl:text-3xl font-bold text-left">Our Work</h1>

        <div className="flex flex-row md:flex-row justify-start gap-1 md:gap-4 max-w-full overflow-x-auto no-scrollbar scroll-smooth">
          {availableFilters.map((filter) =>
            filter.id === 'view' ? (
              <Link
                key={filter.id}
                href={filter.link || '/'}
                className="px-4 py-2 text-nowrap text-sm  md:text-base rounded-lg border bg-blue-700 text-white hover:bg-blue-800 transition"
              >
                {filter.label}
              </Link>
            ) : (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id as FilterKey)}
                className={`px-4 py-2 text-nowrap text-sm md:text-base rounded-lg border ${
                  selectedFilter === filter.id
                    ? 'bg-blue-700 text-white'
                    : 'bg-white text-black border-black'
                } hover:bg-blue-700 hover:text-white hover:border-blue-700 transition`}
              >
                {filter.label}
              </button>
            )
          )}
        </div>

        {selectedFilter !== 'view' && (
          <div className="relative mt-8 w-full flex justify-start items-center overflow-hidden">
            <div
              className="flex animate-scroll"
              style={{
                width: `${filteredImages.length * 700}px`,
                animationDuration: `${filteredImages.length * 10}s`,
              }}
            >
              {filteredImages.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[350px] h-[175px] sm:w-[500px] sm:h-[250px] md:w-[678px] md:h-[350px] lg:w-[678px] lg:h-[350px] mr-4 md:mr-6"
                >
                  <Image
                    src={image}
                    alt={`Work ${index}`}
                    height={700}
                    width={1356}
                    className="w-full h-full object-cover border-spacing-1 shadow-xl rounded-lg border-2"
                  />
                </div>
              ))}

              {filteredImages.map((image, index) => (
                <div
                  key={`dup-${index}`}
                  className="flex-shrink-0 w-[350px] h-[175px] sm:w-[500px] sm:h-[250px] md:w-[678px] md:h-[350px] lg:w-[678px] lg:h-[350px] mr-4 md:mr-6"
                >
                  <Image
                    src={image}
                    alt={`Work duplicate ${index}`}
                    height={700}
                    width={1356}
                    className="w-full h-full object-cover border-2 border-spacing-1 rounded-lg shadow-xl"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OurWork;
