import Image from 'next/image';
import { FC } from 'react';
import uploadedImage from '../../../../public/images/ERP-software-banner.webp'; 

const HeroSection: FC = () => {
  return (
    <div className="relative bg-black text-white py-16 md:py-10">
     
      <div className="absolute inset-0 z-0 bg-opacity-40 bg-cover bg-no-repeat bg-[url('/image.png')]"></div>
      
     
      <div className="relative z-10 xl:w-[85%] mx-auto px-6 md:px-12 lg:px-16 text-center pt-32 ">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight xl:w-[800px] mx-auto">
          ERP Software Development Services
        </h1>
        <p className="mt-4 text-sm md:text-lg lg:text-xl">
          Custom-developed ERP solutions that go beyond business growth expectations
        </p>
        <button className="mt-8 px-6 py-3 md:px-8 md:py-4 bg-white text-sm text-black font-semibold rounded-full hover:bg-gray-100">
          Consult Our Experts
        </button>
        
        
        <div className="mt-12">
          <Image
            src={uploadedImage}
            alt="Office workers collaborating"
            
            height={800} 
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
