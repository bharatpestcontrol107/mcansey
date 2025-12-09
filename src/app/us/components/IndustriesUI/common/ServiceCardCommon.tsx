import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ServiceCardCommonProps {
  image: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
}

const ServiceCardCommon: React.FC<ServiceCardCommonProps> = ({ image, title, description, link, linkText }) => {
  return (
    <div className="bg-white shadow-md rounded-lg flex flex-col h-full hover:shadow-lg transition-shadow duration-200 p-2 border">
      <div className="w-full h-48 relative">
        <Image src={image} alt={title} layout="fill" objectFit="cover" className="rounded-t-lg" />
      </div>
      <div className="py-2 px-2 flex flex-col justify-between flex-grow space-y-2">
        <h3 className="text-base md:text-xl font-bold text-gray-800 py-2">{title}</h3>
        <p className="text-gray-600 text-sm mt-2 flex-grow">{description}</p>
        <Link href={link} passHref>
          <span className="text-blue-500 mt-4 text-sm inline-block font-semibold">{linkText}</span>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCardCommon;
