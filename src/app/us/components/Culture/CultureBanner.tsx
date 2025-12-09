import React from 'react';
import Image from 'next/image';
import CultureImage from '../../../../../public/Culture/mcansey-culture-image-banner.png'; 

const CultureBanner: React.FC = () => {
  return (
    <>
      <div className="pt-[70px] flex flex-col  xl:h-[90vh] max-w-7xl rounded-lg overflow-hidden mt-3 mx-auto py-4 px-2">
        <h1 className="text-xl text-left xl:text-4xl font-bold xl:text-center mb-2 xl:p-3 xl:mt-5 p-3">
        When people believe in a company’s mission, their collective energy and commitment become the driving force behind its long-term success

        </h1>

        <Image
          src={CultureImage} 
          alt="Leadership Banner Image"
          className="w-full h-full object-cover rounded-xl"
          layout="responsive" 
          
        />
      </div>

      <div className="text-center mt-4 max-w-7xl mx-auto text-black space-y-4 p-3">
        <p className="text-left text-sm xl:text-lg lg:text-center">
        At MCANSEY, we believe that a strong, people-centered culture is the cornerstone of sustainable growth and innovation. Our commitment to fostering a supportive, inclusive environment enables our team to excel, collaborate effectively, and bring their best ideas forward. We strive to create a workplace where each individual feels valued, inspired by our shared vision, and equipped to make a lasting impact. This culture of shared purpose is what drives us forward, empowering us to deliver transformative results for our clients and to push the boundaries of what’s possible in technology.
        </p>
      </div>
    </>
  );
};

export default CultureBanner;
