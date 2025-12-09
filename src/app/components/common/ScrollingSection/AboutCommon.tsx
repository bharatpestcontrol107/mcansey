import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import AboutScroller from './AboutScroller';
import { IconType } from 'react-icons';
import Link from 'next/link';


interface AboutCommonProps {
  title: string;
  description: React.ReactNode;
  technologies: { Icon: IconType; title: string; description: React.ReactNode }[];
  buttonText: string;
  buttonLink: string;
  bgImage: string;
}

const AboutCommon: React.FC<AboutCommonProps> = ({
  title,
  description,
  technologies,
  buttonText,
  buttonLink,
  bgImage,
}) => {
  return (
    <div className="w-full bg-white py-4 xl:py-16">
      <div className="text-center mb-8 w-[85%] mx-auto">
        <h2 className="text-xl md:text-2xl font-semibold text-black text-left">{title}</h2>
      </div>

      <div className="w-[85%] mx-auto flex flex-col lg:flex-row gap-10">
        <div className="lg:w-1/2">
          <h2 className="text-sm text-black mb-6">{description}</h2>
          <div
            className="p-6 rounded-lg text-white lg:w-[50%] relative bg-slate-600"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <FaPaperPlane className="text-3xl mb-4" />
            <h3 className="text-base lg:text-xl font-bold mb-2">Fuel Your Digital-First Idea</h3>
            <p className="text-sm mb-4">With 1600+ Transformation Experts</p>
            <Link href={buttonLink}>
              <button className="bg-blue-600 text-xs xl:text-[15px] px-4 py-2 my-5 rounded-md text-white hover:bg-blue-700 transition">
                {buttonText}
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

export default AboutCommon;
