'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { Darker_Grotesque } from 'next/font/google';

const francois = Darker_Grotesque({ weight: '700', subsets: ['latin'] });

const PartnerSection = () => {
  useEffect(() => {
    const setupSeamlessLoop = (selector: string, direction: 'left' | 'right') => {
      const container = document.querySelector(selector) as HTMLElement;
      const items = Array.from(container.children) as HTMLElement[];

      const totalWidth = items.reduce((acc, el) => acc + el.offsetWidth, 0);

      items.forEach((item) => {
        const clone = item.cloneNode(true) as HTMLElement;
        container.appendChild(clone);
      });

      const animationDirection = direction === 'left' ? -totalWidth : totalWidth;

      gsap.to(container, {
        x: animationDirection,
        duration: 15,
        repeat: -1,
        ease: 'linear',
      });
    };

    setupSeamlessLoop('.top-line', 'left');
    setupSeamlessLoop('.bottom-line', 'right');
  }, []);

  const topLogos = [
    'c1-india.png',
    'carritos.png',
    'coal-giene.png',
    'discovery-land.png',
    'expert-buddy.png',
    'dancewala-studio.png',
    'ezzy.png',
    'incoin.png',
    'ehesas.png',
  ];

  const bottomLogos = [
    'flexi-world.png',
    'grande-arte.png',
    'greenupmyspaces.png',
    'i2v.png',
    'incoin.png',
    'insaano-health.png',
    'intech-logo.png',
    'itdi.png',
    'jindal-arogya.png',
    'kazuki-official.png',
  ];

  return (
    <>
    <section
      className="w-full bg-cover bg-blend-overlay text-black px-4 md:px-[100px] py-12 lg:py-[100px]"
      style={{
        backgroundColor: '#FFFCF1',
        backgroundImage: "url('/landing-page/background.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-between md:items-center gap-8 max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="flex flex-col items-center lg:items-start gap-4 w-full md:w-[290px] text-center lg:text-left">
          <button className="px-4 py-2 bg-white text-red-600 rounded-full shadow-md  text-sm border border-black font-bold">
            Our Trusted Partners
          </button>
          <h2
            className={`text-2xl md:text-3xl font-bold text-[#572D29]`}
            style={{ fontFamily: 'Clash Grotesk', fontWeight: '700', lineHeight: '36px' }}
          >
            Partnered with Global Leaders
          </h2>
        </div>
        {/* Description */}
        <p
          className="text-gray-700 text-base md:text-lg text-center lg:text-left w-full md:max-w-md"
          style={{ fontFamily: 'Clash Grotesk', fontWeight: '400', lineHeight: '28px' }}
        >
          A Network of Visionaries Driving Innovation Together. Our partners inspire success
          with collaboration. A Network of Visionaries Driving Innovation Together.
        </p>
      </div>

      {/* Logos Section */}
      <div className="relative overflow-hidden mt-8 max-w-7xl mx-auto">
        {/* Top Line */}
        <div className="flex whitespace-nowrap justify-center top-line">
          {topLogos.map((logo, index) => (
            <div
              key={`top-${index}`}
              className="min-w-[80px] sm:min-w-[100px] border lg:min-w-[224px] h-[32px] sm:h-[38px] lg:h-[72px] flex items-center justify-center bg-white shadow-md rounded-md mx-2"
            >
              <img
                src={`/logos/${logo}`}
                alt={logo.split('.')[0].replace('-', ' ')}
                className="h-6 sm:h-8 md:h-10 lg:h-16"
              />
            </div>
          ))}
        </div>

        {/* Bottom Line */}
        <div className="flex whitespace-nowrap  justify-center bottom-line mt-4">
          {bottomLogos.map((logo, index) => (
            <div
              key={`bottom-${index}`}
              className="min-w-[80px] sm:min-w-[100px] border lg:min-w-[224px] h-[32px] sm:h-[38px] lg:h-[72px] flex items-center justify-center bg-white shadow-md rounded-md mx-2"
            >
              <img
                src={`/logos/${logo}`}
                alt={logo.split('.')[0].replace('-', ' ')}
                className="h-6 sm:h-8 md:h-10 lg:h-16"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        @keyframes slide-reverse {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .bottom-line {
          display: flex;
          animation: slide-reverse 20s linear infinite;
        }
        .top-line {
          display: flex;
          animation: slide 20s linear infinite;
        }

        @media (max-width: 768px) {
          h2 {
            font-size: 1.5rem;
            line-height: 32px;
          }
          p {
            font-size: 0.9rem;
            line-height: 24px;
          }
        }

        @media (max-width: 375px) {
          h2 {
            font-size: 1.25rem;
            line-height: 28px;
          }
          .top-line,
          .bottom-line {
            gap: 8px;
          }
          .min-w-[80px] {
            min-width: 70px;
          }
        }
      `}</style>
    </section>
    </>
  );
};

export default PartnerSection;
