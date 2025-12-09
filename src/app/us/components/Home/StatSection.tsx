'use client';
import Link from 'next/link';
import React from 'react';

interface StatItem {
  number: string;
  title: string;
  description: string;
}

const statsData: StatItem[] = [
  {
    number: '15+',
    title: 'Industries We Specialize In',
    description: 'Our technological expertise and flexible approach allow us to strengthen core business operations with tailored solutions, expanding your digital reach and capabilities.',
  },
  {
    number: '150+',
    title: 'Technology Enthusiasts',
    description: 'Our team consists of passionate professionals and industry experts, driven by a commitment to deliver exceptional results for every client.',
  },
  {
    number: '500+',
    title: 'Innovative Solutions, Delivered',
    description: 'We have crafted and implemented cutting-edge solutions that have propelled businesses toward growth, helping them scale and succeed in their respective markets.',
  },
  {
    number: '50+',
    title: 'Transforming Legacy Systems',
    description: 'We guide businesses through their digital transformation journeys by integrating modern technologies seamlessly into their existing systems, ensuring a future-ready infrastructure.',
  },
  {
    number: '04+',
    title: 'Strategic Collaborations',
    description: 'We partner with organizations to tackle complex challenges and develop impactful solutions that make a real difference.',
  },
];

const StatsSection: React.FC = () => {
  return (
    <div className="bg-white text-black py-12 px-6 ">
      {/* Heading Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:w-[85vw] mx-auto">
  {/* Heading Section */}
  <h2 className="text-lg md:text-2xl  font-bold">
  Empowering Businesses with <br /> Technology Beyond Boundaries

  </h2>
  

  <p className="text-sm xl:text-[16px] text-bold">
  MCANSEY IT Services & Consulting Pvt Ltd has been helping businesses realize their digital potential for nearly a decade. With a team of over 150+ dedicated experts, we create robust digital solutions that enable our clients to lead in their industries and stay ahead in a competitive market.
  </p>
</div>


     
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 md:w-[85vw]">
        {statsData.map((stat, index) => (
          <div key={index} className={`border-l-2 border-blue-500 pl-6 ${index === 0 && 'md:border-l-1'}`}>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold text-blue-500">{stat.number}</h2>
            <p className="text-[16px] md:text-[17px] xl:text-[18px] font-semibold py-3">{stat.title}</p>
            <p className="text-[13px] md:text-[15px] xl:text-[16px] mt-2">{stat.description}</p>
          </div>
        ))}
       
        <div className="bg-gray-800 p-6 rounded-md text-center flex flex-col justify-center">
          <p className="text-sm xl:[17px]  text-white font-semibold mb-4">Ready to Explore Digital Possibilities?</p>
          <Link href={'/contact-us'}>
          <button className="bg-blue-600 text-sm md:text-[13px] text-white px-6 py-3 rounded-md font-bold hover:bg-blue-700">
            Partner with Us
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
