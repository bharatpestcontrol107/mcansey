import React from 'react';
import Image from 'next/image';
import leadershipImage from '../../../../../public/Leadership/pexels-rebrand-cities-581004-1367276.jpg'; 

const LeadershipBanner: React.FC = () => {
  return (
    <>
      <div className="pt-[70px] flex flex-col items-center xl:h-[70vh] max-w-7xl rounded-lg overflow-hidden mt-3 mx-auto py-4">
        <h1 className="text-xl xl:text-5xl font-bold text-center mb-2 xl:p-3 xl:mt-5 p-3">
        Shaping the Future with Strategic Vision, Expertise, and Passion at MCANSEY

        </h1>

        <Image
          src={leadershipImage} 
          alt="Leadership Banner Image"
          className="w-[95%] xl:w-full h-full object-cover  rounded-xl"
          layout="" 
          
        />
      </div>

      <div className="text-center mt-4 max-w-7xl mx-auto text-black space-y-4 p-3">
        <p className="text-left text-sm xl:text-lg lg:text-center">
        We are a dynamic team of forward-thinking professionals, each equipped with top-tier industry knowledge and qualifications. Our growth is fueled by a commitment to innovation, ensuring that every solution we provide is rooted in deep experience and tailored to drive seamless business growth for our clients.

        </p>
      </div>
    </>
  );
};

export default LeadershipBanner;
