// components/TechCard.tsx
import React from 'react';
import { IconType } from 'react-icons';
import { FaArrowRight } from 'react-icons/fa'; 

interface TechCardProps {
  Icon: IconType;
  title: string;
  description:string;
}

const TechCard: React.FC<TechCardProps> = ({ Icon, title, description }) => {
  return (
    <div className="flex items-start justify-between py-4 border-b border-gray-600"> 
      <div className="flex items-start space-x-4">
        <Icon className="text-4xl md:text-3xl text-black" />
        <div>
          <h3 className="text-lg md:text-xl font-bold text-black">{title}</h3>
          <p className="text-sm pt-4 text-black">{description}</p>
        </div>
      </div>
      <FaArrowRight className="text-black text-2xl" /> 
    </div>
  );
};

export default TechCard;
