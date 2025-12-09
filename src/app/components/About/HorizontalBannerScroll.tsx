'use client'
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const banners = [
  {
    title: "WHY CHOOSE US",
    text: "Access Business Finance from Banks and Financial Institutions",
    bgColor: "bg-gray-100",
    titleColor: "text-blue-600"
  },
  {
    title: "OUR MISSION",
    text: "Empowering businesses to grow and succeed",
    bgColor: "bg-blue-50",
    titleColor: "text-indigo-600"
  }
];

const HorizontalBannerScroll: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [scrollDirection, setScrollDirection] = useState<'left' | 'right'>('right');

  
  const x = useTransform(scrollY, [0, 2000], scrollDirection === 'right' ? [0, -800] : [-800, 0]);

  
  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY ? 'right' : 'left');
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden bg-white">
      <motion.div
        className="flex space-x-8"
        style={{ x }}
        transition={{ ease: "linear", duration: 10 }}
      >
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-screen h-screen flex flex-col items-center justify-center ${banner.bgColor}`}
          >
            <h2 className={`text-5xl font-bold ${banner.titleColor} mb-4`}>{banner.title}</h2>
            <div className="w-24 h-[2px] bg-gray-400 mb-4"></div>
            <p className="text-lg text-gray-700">{banner.text}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default HorizontalBannerScroll;
