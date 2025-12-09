'use client'
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import feature1 from '../../../../public/About/mcansey-about-us-page-image.jpg';
import feature2 from '../../../../public/About/mcansey-about-us-scoiety-image.jpg';

const features = [
  {
    id: 1,
    title: "We Embrace Accountability",
    description: `With cutting-edge infrastructure, advanced technology stacks, and robust management practices, our diverse team of seasoned strategists, designers, and developers spans over 35 key industries. This collective expertise enables us to meet client needs efficiently, ensuring high-quality outcomes delivered faster than industry standards.`,
    image: feature1,
    alt: "Mcansey Team",
    list: [],
  },
  {
    id: 2,
    title: "Giving Back to Society",
    description: `As technologists, we recognize the significant impact we can make toward improving society. Our commitment to social justice is deeply ingrained in our culture, guiding our work and inspiring the positive changes we advocate for in our communities. We strive to create an environment where technology serves as a force for good, fostering a brighter future for all.`,
    image: feature2,
    alt: "Best Place to Work",
    list: [
    ],
  },
];

const FeatureSection: React.FC = () => {
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    featureRefs.current.forEach((feature, index) => {
      if (feature) {
        gsap.fromTo(
          feature,
          { opacity: 0, y: 50 },  
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: index * 0.3, 
            ease: "power2.out",
          }
        );
      }
    });
  }, []);

  return (
    <section className="bg-white text-black py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-16">
        {features.map((feature, index) => (
          <div
            ref={(el) => { featureRefs.current[index] = el; }} 
            key={feature.id}
            className={`flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } gap-8`} 
          >
            <div className="w-full md:w-1/2 overflow-hidden rounded-lg shadow-lg">
              <Image
                src={feature.image}
                alt={feature.alt}
                className="w-full h-[300px] object-cover"
                quality={100}
              />
            </div>

            <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4 px-4 md:px-8">
              <div className="text-xl font-semibold xl:text-3xl">{feature.title}</div>
              <p className="text-black text-sm xl:text-[17px]">{feature.description}</p>
              {feature.list.length > 0 && (
                <ul className="text-black text-sm xl:text-[17px] space-y-2">
                  {feature.list.map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
