'use client'
import { useState } from 'react';
import { Tab } from '@headlessui/react';
import Image from 'next/image';

const CultureSlider = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const societyImages = [
    '/Culture/images/mcansey-society-1.jpg',
    '/Culture/images/mcansey-society-2.jpg',
    '/Culture/images/mcansey-society-9.jpg',
    '/Culture/images/mcansey-society-4.jpg',
    '/Culture/images/mcansey-society-6.jpg',
    '/Culture/images/mcansey-society-7.jpg',
    '/Culture/images/mcansey-society-3.jpg',
    '/Culture/images/mcansey-society-8.jpg',
    '/Culture/images/mcansey-about-us-page-giving-back-to-society.jpg',
    '/Culture/images/mcansey-about-us-scoiety-image (1).jpg',
   
    '/Culture/images/mcansey-society-2.jpg',
    '/Culture/images/mcansey-society-9.jpg',
    '/Culture/images/mcansey-society-4.jpg',
    '/Culture/images/mcansey-society-6.jpg',
    '/Culture/images/mcansey-society-7.jpg',
    '/Culture/images/mcansey-society-3.jpg',
    '/Culture/images/mcansey-society-8.jpg',
  ];

  const workplaceImages = [
    '/Culture/images/Workplace/mcansey 2.png',
    '/Culture/images/Workplace/mcansey 4.png',
    '/Culture/images/Workplace/mcansey 5.png',
    '/Culture/images/Workplace/mcansey 6.png',
    '/Culture/images/Workplace/mcansey 7.png',
    '/Culture/images/Workplace/mcansey.png',
    '/Culture/images/Workplace/mcansey3.png',
    '/Culture/images/mcansey-office-cultire-1.jpg',
    '/Culture/images/mcansey-office-cultire-2.jpg',
   
   
    '/Culture/images/mcansey-office-culture-3.jpg',
    '/Culture/images/mcansey-office-culture-4.jpg',
    '/Culture/images/mcansey-office-culture-5.jpg',
    '/Culture/images/mcansey-office-culture-6.jpg',
    '/Culture/images/mcansey-office-culture-8.png',
    '/Culture/images/mcansey-office-culture-9.jpg',
    '/Culture/images/mcansey-office-culture-11.jpg'
  ];

  const images = selectedTab === 0 ? workplaceImages : societyImages;

  return (
    <div className="w-full p-4 pt-4 overflow-hidden">
      <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-center mb-4 xl:max-w-[800px] mx-auto">
        We, Mcansey actively seek opportunities to better our
      </h2>

      <Tab.Group onChange={(index) => setSelectedTab(index)}>
        <Tab.List className="flex justify-center mb-4 py-4">
          <Tab
            className={({ selected }) =>
              selected
                ? 'w-48 lg:w-96 px-4 py-2 font-semibold text-white bg-black rounded'
                : 'w-48 lg:w-96 px-4 py-2 font-semibold text-black bg-blue-300 rounded'
            }
          >
            Work Place
          </Tab>
          <Tab
            className={({ selected }) =>
              selected
                ? 'w-48 lg:w-96 px-4 py-2 font-semibold text-white bg-black rounded ml-2'
                : 'w-48 lg:w-96 px-4 py-2 font-semibold text-black bg-blue-300 rounded ml-2'
            }
          >
            Society
          </Tab>
        </Tab.List>

        <div className="relative overflow-hidden">
          <div className="animate-slide flex w-max gap-2 md:gap-4">
            {[...Array(2)].map((_, duplicationIndex) => (
              <div
                key={duplicationIndex}
                className="grid grid-cols-8 gap-2 md:gap-4"
              >
               
                <div className="col-span-1 grid gap-2 md:gap-4">
                  {images.slice(0, 2).map((src, index) => (
                    <Image
                      key={`col1-${duplicationIndex}-${index}`}
                      src={src}
                      alt="image"
                      height={365}
                      width={365}
                      
                      className="w-full h-[150px] md:h-[265px] object-cover rounded-md"
                    />
                  ))}
                </div>

               
                <div className="col-span-1 grid gap-2 md:gap-4">
                  {images.slice(2, 4).map((src, index) => (
                    <Image
                      key={`col2-${duplicationIndex}-${index}`}
                      src={src}
                      alt="img"
                       height={365}
                      width={365}
                      
                      className="w-full h-[150px] md:h-[265px] object-cover rounded-md"
                    />
                  ))}
                </div>

               
                <div className="col-span-1 grid gap-2 md:gap-4">
                  {images.slice(4, 6).map((src, index) => (
                    <Image
                      key={`col3-${duplicationIndex}-${index}`}
                      src={src}
                      alt="img"
                       height={365}
                      width={365}
                      
                      className="w-full h-[150px] md:h-[265px] object-cover rounded-md"
                    />
                  ))}
                </div>

               
                <div className="col-span-1 grid gap-2 md:gap-4">
                  {images.slice(6, 8).map((src, index) => (
                    <Image
                      key={`col4-${duplicationIndex}-${index}`}
                      src={src}
                      alt="img"
                       height={365}
                      width={365}
                      
                      className="w-full h-[150px] md:h-[265px] object-cover rounded-md"
                    />
                  ))}
                </div>

              
                <div className="col-span-1 grid gap-2 md:gap-4">
                  {images.slice(8, 10).map((src, index) => (
                    <Image
                      key={`col5-${duplicationIndex}-${index}`}
                      src={src}
                      alt="img"
                       height={365}
                      width={365}
                      
                      className="w-full h-[150px] md:h-[265px] object-cover rounded-md"
                    />
                  ))}
                </div>

               
                <div className="col-span-1 grid gap-2 md:gap-4">
                  {images.slice(10, 12).map((src, index) => (
                    <Image
                      key={`col6-${duplicationIndex}-${index}`}
                      src={src}
                      alt="img"
                       height={365}
                      width={365}
                      
                      className="w-full h-[150px] md:h-[265px] object-cover rounded-md"
                    />
                  ))}
                </div>

              
                <div className="col-span-1 grid gap-2 md:gap-4">
                  {images.slice(12, 14).map((src, index) => (
                    <Image
                      key={`col7-${duplicationIndex}-${index}`}
                      src={src}
                      alt="img"
                       height={365}
                      width={365}
                      
                      className="w-full h-[150px] md:h-[265px] object-cover rounded-md"
                    />
                  ))}
                </div>

               
                <div className="col-span-1 grid gap-2 md:gap-4">
                  {images.slice(14, 16).map((src, index) => (
                    <Image
                      key={`col8-${duplicationIndex}-${index}`}
                      src={src}
                      alt="img"
                       height={365}
                      width={365}
                      
                      className="w-full h-[150px] md:h-[265px] object-cover rounded-md"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Tab.Group>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-slide {
          animation: slide 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default CultureSlider;
