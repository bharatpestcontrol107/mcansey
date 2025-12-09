import Link from 'next/link';
import React, { ReactNode } from 'react';

type CommonSectionProps = {
  title: string;
  description: React.ReactNode;
  children: ReactNode;
};

const ServicesCommon: React.FC<CommonSectionProps> = ({ title, description, children }) => {
  return (
    <div className="bg-white text-black  py-12 px-6">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:w-[85vw] mx-auto mb-8">
        <h2 className="text-xl xl:text-2xl font-bold">
          {title}
        </h2>
        <p className="text-sm font-semibold">
          {description}
        </p>
      </div>

     
      <div className="md:w-[85%] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {children}
          <div className="bg-blue-600 p-2 md:p-6 rounded-lg shadow-lg text-white flex justify-center items-center">
          <Link href={'/contact-us'} >  <button className="md:text-lg font-semibold">
              Contact Us Now →
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCommon;
