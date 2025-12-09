import React from 'react';
import Image, { StaticImageData } from 'next/image';
import hqIndiaImage from '../../../../public/Offices/hq-india.svg'; 
import indiaImage from '../../../../public/Offices/hq-uae.svg'; 
import usaImage from '../../../../public/Offices/hq-usa.svg'; 
import hongKongImage from '../../../../public/Offices/hq-canada.svg'; 
import Mlogo from '../../../../public/Home/Mcansey 100X100.svg';

type Office = {
  country: string;
  address: string[];
  image: StaticImageData; 
  phone?: string;
  flag?:string;
};

const offices: Office[] = [
  { 
    country: 'HQ INDIA', 
    address: ['F002, SONAM ABHINAV,', 'MIRA BHAYANDAR – 401105', 'MUMBAI'], 
    image: hqIndiaImage, 
    flag: "/Footer/india.png",
    phone:'+91 9324442227'
  },
];

const Office: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-l from-blue-600 via-blue-800 to-blue-900 py-7 w-full">
      <div className="absolute inset-0 z-0">
        
      </div>

      <div className="relative z-10 container  mx-auto px-4" style={{ maxWidth: '85%' }}>
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="flex items-center mb-4 md:mb-0">
            
          </div>
          <div className="flex items-center bg-white py-3 px-4 rounded-md text-sm text-blue-950 w-full md:w-auto">
            <Image src={Mlogo} alt="Clutch Badge" width={40} height={40} className="mr-2" /> 
            <span className='text-sm md:text-lg'>Mcansey Global Footprint</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-8 text-white">
          {offices.map((office, index) => (
            <div key={index} className="flex flex-col items-center mb-8 h-full">
              <div className="flex flex-col items-center h-full">
                <div className="flex items-center justify-center mb-2" style={{ height: '150px' }}>
                  <Image 
                    src={office.image} 
                    alt={office.country} 
                    width={120} 
                    height={120} 
                    objectFit="contain" 
                  />
                </div>
                <div className="text-center flex-grow flex flex-col ">
                  <h3 className="font-semibold py-4">{office.country}</h3>
                  <div className="text-sm leading-relaxed">
                    {office.address.map((line, idx) => (
                      <p key={idx} className="mb-1">{line}</p>
                    ))}
                  </div>
                  {/* <div className="flex items-center justify-center mt-1 ">
                               {office.flag && <Image src={office.flag} alt="flag" className="h-5 w-5 mr-2" width={5} height={5} />}
                                 <a href={`tel:${office.phone}`} className="text-sm">{office.phone}</a>
                             </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Office;
