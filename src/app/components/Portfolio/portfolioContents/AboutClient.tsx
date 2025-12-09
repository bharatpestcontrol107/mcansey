import Image from 'next/image';
import React from 'react';

interface AboutClientProps {
  country: string;
  industry: string;
  services: string[];
  description: string;
  imageUrl: string;
}

const AboutClient: React.FC<AboutClientProps> = ({ country, industry, services, description, imageUrl }) => {
  
  const clientDetails = [
    { title: 'Country', value: country },
    { title: 'Industry', value: industry },
    {
      title: 'Services Used',
      value: services.map((service, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-black text-white text-sm rounded-full inline-block"
        >
          {service}
        </span>
      )),
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg py-3">
      <h2 className="text-xl md:text-xl xl:text-2xl font-semibold text-gray-800 mb-6">
        About the Client
      </h2>

      <div className="flex flex-col mb-6">
        <Image src={imageUrl} alt="Client logo" width={64} height={64} className="w-16 h-16 mr-4" />
        <p className="text-sm text-gray-600 py-3">{description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {clientDetails.map((detail, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold text-gray-800 py-2">{detail.title}</h3>
            <p className="text-gray-600 space-y-2 space-x-1">{detail.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutClient;
