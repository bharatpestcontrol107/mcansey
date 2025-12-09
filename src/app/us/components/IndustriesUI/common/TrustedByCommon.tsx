'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import { FaArrowRight } from 'react-icons/fa';

interface Logo {
  src: string;
  alt: string;
}
interface TrustedByCommonProps {
  title: string;
  description: string;
  buttonText: string;
  bgImage: string;
  logos: Logo[];
}
const TrustedByCommon: React.FC<TrustedByCommonProps> = ({ title, description, buttonText, bgImage, logos }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 788);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 6, slidesToScroll: 1 } },
      { breakpoint: 640, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 400, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    ],
  };

  return (
    <section className="w-full sm:mt-18 mb-4 mt-[61px] sm:pt-0">
      <div className="relative h-[60vh] md:h-[50vh] bg-cover bg-center shadow-md max-h-[388px]" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="absolute inset-0 flex flex-col items-center md:items-center text-center md:text-left justify-center p-4 text-white bg-black bg-opacity-20 ">
          <h1 className="text-2xl xl:text-3xl text-left md:text-2xl font-bold">{title}</h1>
          <p className="text-sm text-left md:text-base max-w-4xl mt-4">{description}</p>
          <div className="flex mt-6 items-start">
            <button className="px-6 py-2 bg-blue-500 text-sm lg:text-base text-white font-semibold rounded-full flex items-center space-x-2 hover:bg-white hover:text-blue-600 transition duration-200">
              <span>{buttonText}</span>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      <div className="w-full bg-white shadow-lg">
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center py-8  px-4 lg:px-2 mx-auto gap-6 ">
          <h2 className="text-xl md:text-2xl font-bold text-blue-500 mb-4 lg:mb-0 lg:mr-6">Trusted By:</h2>
          <div className="w-full lg:w-auto  px-4">
            {isMobile ? (
              <Slider {...sliderSettings}>
                {logos.map((logo, index) => (
                  <div key={index} className="flex justify-center">
                    <Image src={logo.src} alt={logo.alt} width={100} height={50} />
                  </div>
                ))}
              </Slider>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10">
                {logos.map((logo, index) => (
                  <div key={index} className="flex justify-center">
                    <Image src={logo.src} alt={logo.alt} width={100} height={50} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedByCommon;
