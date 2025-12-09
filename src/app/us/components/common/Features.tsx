import React from 'react';
import AboutScroller from '../common/ScrollingSection/AboutScroller';

import { IconType } from 'react-icons';
import Link from 'next/link';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  bgImage: string;
}

interface TechnologyItem {
  Icon: IconType;
  title: string;
  description: string;
}

interface FeatureProps {
  title: string;
  subtitle: string;
  featureCard: FeatureCardProps;
  technologies: TechnologyItem[];
}

const Feature: React.FC<FeatureProps> = ({
  title,
  subtitle,
  featureCard,
  technologies,
}) => {
  return (
    <div className="w-full bg-white py-4 xl:py-16">
      {/* Title and Subtitle */}
      <div className="text-center mb-8 w-[85%] mx-auto">
        <h2 className="text-2xl md:text-4xl font-semibold text-black text-left">
          {title}
        </h2>
        <p className="text-[14px] md:text-[15px] lg:text-[17px] text-black mb-6">
          {subtitle}
        </p>
      </div>

      {/* Feature Card and Technologies List */}
      <div className="w-[85%] mx-auto flex flex-col lg:flex-row gap-10">
        {/* Feature Card Section */}
        <div className="lg:w-1/2">
          <div
            className="p-6 rounded-lg text-white lg:w-[50%] relative bg-slate-600"
            style={{
              backgroundImage: `url(${featureCard.bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {featureCard.icon}
            <h3 className="text-xl lg:text-xl font-bold mb-2">{featureCard.title}</h3>
            <p className="text-sm mb-4">{featureCard.description}</p>
            <Link href={featureCard.buttonUrl}>
              <button className="bg-blue-600 text-xs xl:text-[15px] px-4 py-2 my-5 rounded-md text-white hover:bg-blue-700 transition">
                {featureCard.buttonText}
              </button>
            </Link>
          </div>
        </div>

        
        <div className="lg:w-1/2 overflow-hidden border-b-2">
          <div className="space-y-4 max-h-[500px] overflow-y-scroll custom-scroll">
            {technologies.map((tech, index) => (
              <AboutScroller
                key={index}
                Icon={tech.Icon}
                title={tech.title}
                description={tech.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
