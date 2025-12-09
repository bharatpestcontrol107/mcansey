'use client'
import React, { useState } from "react";

import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";


import img1 from "../../../../public/portfolio/ikea-port-banner-new.webp";
import img2 from "../../../../public/portfolio/jobget-banner-image.webp";
import img3 from "../../../../public/portfolio/jobget-banner-image.webp";
import adidas from '../../../../public/ShowcaseSection/showcase-adidas.webp';

interface PortfolioItem {
  companyName: string;
  description: string;
  storesDeployed: string;
  marketingRank: string;
  category: string;
  img: StaticImageData[];
}

const portfolioData: PortfolioItem[] = [
  {
    companyName: "IKEA",
    description: "Deploying IoT-powered kiosks integrated with a custom ERP solution, we enhanced IKEA’s customer onboarding, product exploration, and data-driven marketing.",
    storesDeployed: "7+",
    marketingRank: "#1",
    category: "web", 
    img: [img1, img2, adidas, img3],
  },
  {
    companyName: "JobGet",
    description: "JobGet's app improves job searching and hiring processes with real-time communication and instant hiring capabilities.",
    storesDeployed: "50+",
    marketingRank: "#2",
    category: "eco", 
    img: [img1, img2, adidas, img3],
  },
  {
    companyName: "JobGet",
    description: "JobGet's app improves job searching and hiring processes with real-time communication and instant hiring capabilities.",
    storesDeployed: "50+",
    marketingRank: "#2",
    category: "soft", 
    img: [img1, img2, adidas, img3],
  },
  {
    companyName: "JobGet",
    description: "JobGet's app improves job searching and hiring processes with real-time communication and instant hiring capabilities.",
    storesDeployed: "50+",
    marketingRank: "#2",
    category: "digital", 
    img: [img1, img2, adidas, img3],
  },
  
  
];

const PortfolioListing: React.FC = () => {
  const [items, setItems] = useState<PortfolioItem[]>(portfolioData);

 
  const filterItem = (category: string) => {
    if (category === "all") {
      setItems(portfolioData); 
    } else {
      const updatedItems = portfolioData.filter((item) => item.category === category);
      setItems(updatedItems);
    }
  };

  return (
    <div className="container mx-auto px-5 md:px-0 py-10 pt-40">
       <h1 className="text-3xl md:text-6xl font-bold text-center mb-8">Portfolio</h1>
      <div className="grid md:grid-cols-5 md:gap-5 cursor-pointer w-[80%] mx-auto border-2 border-secondary/10 p-2 rounded-md mb-8">
        <div onClick={() => filterItem("all")} className="text-center py-2 rounded-md  bg-blue-600 text-white border-2 text-sm">
          All
        </div>
        <div onClick={() => filterItem("web")} className="text-center py-2 rounded-md   bg-blue-600 text-white border-2 text-sm">
          Website
        </div>
        <div onClick={() => filterItem("eco")} className="text-center py-2 rounded-md   bg-blue-600 text-white border-2 text-sm">
          Ecommerce
        </div>
        <div onClick={() => filterItem("soft")} className="text-center py-2 rounded-md   bg-blue-600 text-white border-2 text-sm">
          Mobile App
        </div>
        <div onClick={() => filterItem("digital")} className="text-center py-2 rounded-md   bg-blue-600 text-white border-2 text-sm">
          Digital Marketing
        </div>
      </div>

      {items.map((item, index) => {
        const isEvenIndex = index % 2 === 0;

        return (
          <div key={index} className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-8 text-black border  rounded-lg shadow-lg mb-10 ${isEvenIndex ? "" : "md:flex-row-reverse"}`}>
            {isEvenIndex ? (
              <>
                <div className="w-full mx-auto">
                  <Swiper
                    pagination={{ clickable: true }}
                    modules={[Pagination, Autoplay]}
                    spaceBetween={10}
                    slidesPerView={1}
                    breakpoints={{ 1024: { slidesPerView: 2 } }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    className="swiper-container"
                  >
                    {item.img.map((slideImage, i) => (
                      <SwiperSlide key={i}>
                        <div className="relative w-full h-48 md:h-64">
                          <Image
                            src={slideImage}
                            alt={`${item.companyName} slide ${i + 1}`}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-md"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                <div className="text-left space-y-4">
                  <h2 className="text-2xl md:text-4xl font-bold">{item.companyName}</h2>
                  <p className="text-sm md:text-lg">{item.description}</p>
                  <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-10 mt-4">
                    <div className="flex-1 text-center md:text-left">
                      <p className="text-2xl font-bold">{item.storesDeployed}</p>
                      <p className="text-sm">{item.companyName} Stores Deployed The Solution</p>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <p className="text-2xl font-bold">{item.marketingRank}</p>
                      <p className="text-sm">Marketing Asset for {item.companyName} Stores</p>
                    </div>
                  </div>
                  
                    <a className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-md text-lg font-semibold">View Case Study</a>
                  
                </div>
              </>
            ) : (
              <>
                <div className="text-left space-y-4">
                  <h2 className="text-2xl md:text-4xl font-bold">{item.companyName}</h2>
                  <p className="text-sm md:text-lg">{item.description}</p>
                  <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-10 mt-4">
                    <div className="flex-1 text-center md:text-left">
                      <p className="text-2xl font-bold">{item.storesDeployed}</p>
                      <p className="text-sm">{item.companyName} Stores Deployed The Solution</p>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <p className="text-2xl font-bold">{item.marketingRank}</p>
                      <p className="text-sm">Marketing Asset for {item.companyName} Stores</p>
                    </div>
                  </div>
                  
                    <a className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-md text-lg font-semibold">View Case Study</a>
                  
                </div>

                <div className="w-full mx-auto">
                  <Swiper
                    pagination={{ clickable: true }}
                    modules={[Pagination, Autoplay]}
                    spaceBetween={10}
                    slidesPerView={1}
                    breakpoints={{ 1024: { slidesPerView: 2 } }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    className="swiper-container"
                  >
                    {item.img.map((slideImage, i) => (
                      <SwiperSlide key={i}>
                        <div className="relative w-full h-48 md:h-64">
                          <Image
                            src={slideImage}
                            alt={`${item.companyName} slide ${i + 1}`}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-md"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default PortfolioListing;
