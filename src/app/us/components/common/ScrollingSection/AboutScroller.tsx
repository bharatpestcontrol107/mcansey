
import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';


interface TechCardProps {
  Icon: IconType;
  title: string;
  description:React.ReactNode;
  points?: string[];
}

const AboutScroller: React.FC<TechCardProps> = ({ Icon, title, description,points }) => {
  return (
    <div className="flex items-start justify-between py-4 border-b border-gray-600"> 
    <div className="flex items-start space-x-4">
      <Icon className="text-4xl text-black" />
      <div>
        <Link href={"#enquiry-form"}><h3 className="text-xl md:text-xl font-bold text-black">{title}</h3></Link>
        <p className="text-sm pt-4 text-black">{description}</p>
        
        {points && (
          <ul className="pt-2 text-black list-disc list-inside">
            {points.map((point, idx) => (
              <li key={idx} className="text-xs">{point}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
   
  </div>
  );
};

export default AboutScroller;
