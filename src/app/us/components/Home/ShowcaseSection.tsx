'use client'
import Image from 'next/image';
import React, { useState, useRef } from 'react';
import img1 from '../../../../public/ShowcaseSection/showcase-adidas.webp';
import img2 from '../../../../public/ShowcaseSection/showcase-ikea.webp'; 
import img3 from '../../../../public/ShowcaseSection/showcase-pizzahut.webp'; 

const caseStudies = [
  {
    id: 1,
    title: 'Adidas',
    description: 'Scores the perfect digital landing in UAE',
    downloads: '2M+',
    users: '500K',
    image: img1,
  },
  {
    id: 2,
    title: 'Nike',
    description: 'Boosts brand engagement in the US market',
    downloads: '3M+',
    users: '800K',
    image: img2,
  },
  {
    id: 3,
    title: 'Puma',
    description: 'Achieves top customer satisfaction in Europe',
    downloads: '1.5M+',
    users: '300K',  
    image: img3,
  },
];

const ShowcaseSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const scrollTop = scrollRef.current?.scrollTop || 0;
    const scrollHeight = scrollRef.current?.scrollHeight || 0;
    const clientHeight = scrollRef.current?.clientHeight || 0;

    const scrolled = scrollTop / (scrollHeight - clientHeight);
    const newIndex = Math.round(scrolled * (caseStudies.length - 1));

    setCurrentIndex(newIndex);
  };

  return (
    <div className="w-full bg-white text-black flex justify-center py-10">
      <div
        ref={scrollRef}
        className="w-[85%] max-h-[600px] overflow-y-scroll scroll-smooth scrollbar-thin scrollbar-thumb-blue-600"
        onScroll={handleScroll}
      >
        {caseStudies.map((caseStudy, index) => (
          <div
            key={caseStudy.id}
            className={`w-full flex flex-col lg:flex-row gap-8 h-[600px] transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
          
            <div className="flex-1 flex flex-col justify-center space-y-4 lg:space-y-6">
              <h3 className="text-blue-600 text-sm">Case Study</h3>
              <h2 className="text-2xl lg:text-3xl font-bold">
                {caseStudy.title}
              </h2>
              <p className="text-lg lg:text-2xl">{caseStudy.description}</p>
              <div className="flex space-x-8 lg:space-x-12 text-xl">
                <div>
                  <p className="text-xl lg:text-2xl font-bold">
                    {caseStudy.downloads}
                  </p>
                  <p className="text-base lg:text-[15px] text-gray-400">
                    App downloads
                  </p>
                </div>
                <div>
                  <p className="text-xl lg:text-2xl font-bold">
                    {caseStudy.users}
                  </p>
                  <p className="text-base lg:text-[15px] text-gray-400">
                    New users acquired
                  </p>
                </div>
              </div>
              <button className="flex items-center space-x-2 w-52 bg-transparent border border-black px-4 py-2 rounded-lg hover:bg-black hover:text-white transition">
                <span>View Case Study</span>
                <span className="text-xl">→</span>
              </button>
            </div>

          
            <div className="flex-[1.8] relative">
              <Image
                src={caseStudy.image}
                alt={`${caseStudy.title} Store`}
                width={1000}
                height={500}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowcaseSection;
