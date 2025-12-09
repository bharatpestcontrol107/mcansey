import React from 'react';
import logo1 from '../../../../../public/PortfolioModal/adidas-drop.svg';
import logo2 from '../../../../../public/PortfolioModal/kfc-drop.svg';
import logo3 from '../../../../../public/PortfolioModal/ikea-drop.svg';
import logo4 from '../../../../../public/PortfolioModal/jobget-drop.svg';
import logo5 from '../../../../../public/PortfolioModal/dominoz-drop.svg';
import logo6 from '../../../../../public/PortfolioModal/edfundo-logo-dark.svg';
import banner from '../../../../../public/PortfolioModal/port-drop-img.webp';
import Image from 'next/image';
import Link from 'next/link';

const clients = [
  {
    logo: logo1,
    alt: 'Adidas',
    description: 'A leading digital platform to offer engaging shopping experience to users',
  },
  {
    logo: logo2,
    alt: 'KFC',
    description: "A mobile app to digitalize & expand KFC's digital footprint",
  },
  {
    logo: logo3,
    alt: 'IKEA',
    description: "A transforming ERP Solution for the world's largest furniture retailer",
  },
  {
    logo: logo4,
    alt: 'Jobget',
    description: 'The MIT Innovation award-winning app with $52 Million funding reshaping the employment landscape',
  },
  {
    logo: logo5,
    alt: "Domino's",
    description: 'A refined UX strategy for Domino\'s to increase their conversion rate by 23%',
  },
  {
    logo: logo6,
    alt: 'Edfundo',
    description: 'A SaaS-based financial literacy and smart money management platform for kids',
  },
];

const PortfolioModal: React.FC = () => {
  return (
    <div className="fixed top-16 left-1/2 transform -translate-x-1/2 w-[90vw] md:w-[80vw] bg-white p-4 md:p-8 rounded-lg shadow-lg z-50">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
        {/* Left Section */}
        <div className="col-span-1 text-center md:text-left relative">
          <h3 className="text-[13px] xl:text-2xl font-bold mb-4 whitespace-nowrap">Enabling Innovation</h3>
          <p className="text-gray-600 mb-6 text-[12px] xl:text-[14px]">To steadfast success for top globally leading brands</p>
          <Link href="#" className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 block md:inline-block text-[10px] xl:text-[12px]">
            View all
          </Link>
          <div className="relative mt-6 md:mt-10">
            <Image
              src={banner}
              alt="Portfolio Icon"
              className="mx-auto mb-4 w-full shadow-lg rounded-md h-40 md:h-24 object-cover"
            />
            {/* Text Over Image */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white rounded-md">
              <p className="text-[10px] xl:text-sm font-semibold text-center">Learn more about our processes from our clients.</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {clients.map((client, index) => (
            <div key={index} className="text-center md:text-left">
              <Image src={client.logo} alt={client.alt} className="mx-auto mb-4 w-14 h-14 xl:w-20 xl:h-20" />
              <p className="text-gray-600 text-[13px] xl:text-[15px] ">{client.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;
