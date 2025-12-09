import React from 'react';
import office1 from '../../../../public/contact/Locations/cont-loc-india.svg';
import office2 from '../../../../public/contact/Locations/cont-loc-uae.svg';
import office3 from '../../../../public/contact/Locations/cont-loc-uk.svg';
import office4 from '../../../../public/contact/Locations/cont-loc-usa.svg';

import Image from 'next/image';

const offices = [
  {
    country: 'India (HQ)',
    address: 'F002, SONAM ABHINAV, MIRA BHAYANDAR – 401105 MUMBAI',
    flag: "/Footer/india.png",
    phone: '+91 9324442227',
    icon: office1,
  },
];

const Locations = () => {
  return (
    <div className="bg-white py-10 px-4 md:px-10 lg:px-20 xl:w-[85%] mx-auto">
      <h2 className="text-xl md:text-2xl  font-bold text-center mb-12">
        Mcansey around the Globe
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {offices.map((office, index) => (
          <div
            key={index}
            className="border border-gray-300 p-8 text-center rounded-lg shadow-sm hover:shadow-lg transition"
          >
            <Image src={office.icon} alt={`${office.country} icon`} className="mx-auto mb-6 h-12 w-12" />
            <h2 className="text-xl font-semibold mb-2">{office.country}</h2>
            <p className="text-gray-700 text-sm">{office.address}</p>
            <div className="flex items-center justify-center mt-4">
              <Image src={office.flag} alt="flag" className="h-5 w-5 mr-2" width={5} height={5} />
              <p className="text-blue-500 text-sm">{office.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Locations;
