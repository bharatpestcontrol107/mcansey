
import React from 'react';



interface JobBannerProps {
  title: string;

  bgImage: string;
 
}
const JobBanner: React.FC<JobBannerProps> = ({ title,   bgImage,  }) => {
  
  return (
    <section className="w-full sm:mt-18 mb-4 mt-[61px] sm:pt-0">
      <div className="relative h-[60vh] md:h-[50vh] bg-cover bg-center shadow-md max-h-[300px]" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="absolute inset-0 flex flex-col items-center md:items-center text-center md:text-left justify-center p-4 text-white bg-black bg-opacity-20 ">
          <h1 className="text-2xl xl:text-4xl text-left md:text-2xl font-bold">{title}</h1>
     
        </div>
      </div>

      
    </section>
  );
};

export default JobBanner;
