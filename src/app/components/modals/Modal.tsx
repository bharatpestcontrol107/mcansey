'use client'
import React from 'react';
import Image from 'next/image';
import sampleImage from '../../../../public/AboutModal/mcansey.png';
import Link from 'next/link';

const AboutModal: React.FC = () => {
  const contentData = [
    {
      title: 'About Mcansey',
      text: 'Discover our mission, vision, and the journey that has made MCANSEY a trusted technology partner.',
      href: '/about',
    },
    // {
    //   title: 'Leadership Team',
    //   text: 'Meet the experienced professionals guiding MCANSEY’s innovation and success.',
    //   href: '/leadership', 
    // },
    {
      title: 'Our Culture and Team',
      text: "Explore the work environment, values, and diversity that define our company.",
      href: '/culture', 
    },
    {
      title: 'Careers',
      text: 'Join our dynamic team and explore exciting opportunities in the IT industry.',
      href: '/career', 
    },
    // {
    //   title: 'Blogs',
    //   text: 'Learn about our methodologies and approaches that ensure the best outcomes for clients.',
    //   href: '/contact-us', 
    // },
    {
      title: 'Download Brochures',
      text: 'Get detailed insights into our services and capabilities with our downloadable brochure.',
      href: '/contact-us', 
    },
  ];

  return (
    <div className="fixed top-16 left-1/2 transform -translate-x-1/2 mt-2 w-[90vw] sm:w-[80vw] bg-white shadow-lg rounded-lg p-6 md:p-10 lg:p-14 z-50 overflow-y-auto max-h-[80vh]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        
       
        <div className="flex flex-col justify-start h-full col-span-1">
          <div className="relative flex items-center justify-center mb-6 h-[150px] md:h-full">
            <Image
              src={sampleImage}
              alt="About Modal Image"
              className="rounded-lg w-full h-full object-cover"
            />
            <div className="absolute bottom-0 bg-opacity-50 bg-black w-full p-2 md:p-4">
              <p className="text-white text-sm md:text-xs lg:text-base font-semibold line-clamp-2">
              Empowering each other to thrive, energize, and make every moment count.
              </p>
            </div>
          </div>
          
          <div className="h-[40px] mt-4"></div>
          <div className="h-[40px] mt-4"></div>
        </div>

      
        <div className="flex flex-col justify-start text-xs sm:text-sm md:text-base">
          <Link href={contentData[0].href} passHref>
            <h4 className="text-sm md:text-base lg:text-[15px] font-bold mb-2 hover:text-blue-600">
              {contentData[0].title}
            </h4>
          </Link>
          <p className='text-sm' >{contentData[0].text}</p>
          
          <Link href={contentData[2].href} passHref>
            <h4 className="text-sm md:text-base lg:text-[15px] font-bold mt-4 mb-2 hover:text-blue-600">
              {contentData[2].title}
            </h4>
          </Link> 
          <p className='text-sm' >{contentData[2].text}</p>

          <Link href={contentData[3].href} passHref>
            <h4 className="text-sm md:text-base lg:text-[15px] font-bold mt-4 mb-2 hover:text-blue-600">
              {contentData[3].title}
            </h4>
          </Link>
          <p className='text-sm' >{contentData[3].text}</p>
        </div>

        
        <div className="flex flex-col justify-start text-xs sm:text-sm md:text-base">
          <Link href={contentData[1].href} passHref>
            <h4 className="text-sm md:text-base lg:text-[15px] font-bold mb-2 hover:text-blue-600">
              {contentData[1].title}
            </h4>
          </Link>
          <p className='text-sm' >{contentData[1].text}</p>

          {/* <Link href={contentData[4].href} passHref>
            <h4 className="text-sm md:text-base lg:text-[15px] font-bold mt-4 mb-2 hover:text-blue-600">
              {contentData[4].title}
            </h4>
          </Link>
          <p className='text-sm' >{contentData[4].text}</p> */}

          {/* <Link href={contentData[5].href} passHref>
            <h4 className="text-sm md:text-base lg:text-lg font-bold mt-4 mb-2 hover:text-blue-600">
              {contentData[5].title}
            </h4>
          </Link>
          <p>{contentData[5].text}</p> */}
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
