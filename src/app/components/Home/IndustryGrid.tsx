import { FC } from 'react';
import { FaDollarSign, FaRegHeart } from 'react-icons/fa';
import { BiMovie, BiBuildingHouse } from 'react-icons/bi';
import { PiCarBattery } from "react-icons/pi";
import { AiOutlineMobile, AiOutlineRead, AiOutlineBranches } from 'react-icons/ai';
import { MdOutlineRealEstateAgent, MdOutlineAgriculture, MdOutlinePermMedia } from 'react-icons/md';
import { HiOutlineBuildingLibrary, HiOutlineTruck } from 'react-icons/hi2';
import { BsCart } from 'react-icons/bs';
import { IoAirplaneOutline, IoBulbOutline, IoCloudOutline, IoRestaurantOutline } from 'react-icons/io5';
import { VscTools } from 'react-icons/vsc';
import Link from 'next/link';

const industries = [
  { name: 'Healthcare', icon: <FaRegHeart /> },
  { name: 'Finance', icon: <FaDollarSign /> },
  { name: 'Restaurant', icon: <IoRestaurantOutline /> },
  { name: 'eCommerce', icon: <BsCart /> },
  { name: 'Electric Vehicle (EV)', icon: <PiCarBattery /> },
  { name: 'SaaS', icon: <IoCloudOutline /> },
  { name: 'Travel', icon: <IoAirplaneOutline /> },
  { name: 'Entertainment', icon: <BiMovie /> },
  { name: 'On-Demand', icon: <AiOutlineMobile /> },
  { name: 'Social Media', icon: <MdOutlinePermMedia /> },
  { name: 'Logistics', icon: <HiOutlineTruck /> },
  { name: 'Education', icon: <AiOutlineRead /> },
  { name: 'Real Estate', icon: <MdOutlineRealEstateAgent /> },
  { name: 'Aviation', icon: <IoAirplaneOutline /> },
  { name: 'Agriculture', icon: <MdOutlineAgriculture /> },
  { name: 'Telecom', icon: <AiOutlineBranches /> },
  { name: 'Oil and Gas', icon: <IoBulbOutline /> },
  { name: 'Automotive', icon: <VscTools /> },
  { name: 'Insurance', icon: <HiOutlineBuildingLibrary /> },
  { name: 'Manufacturing', icon: <BiBuildingHouse /> },
];

interface IndustryGridProps {
  hiddenIndustry?: string; 
}

const IndustryGrid: FC<IndustryGridProps> = ({ hiddenIndustry }) => {
  return (
    <div className="flex flex-col items-center bg-white text-black py-3 xl:py-16 px-4">
      <div className="flex flex-col md:flex-row justify-between items-center w-full md:w-[85%] mb-8">
        <h2 className="text-xl xl:text-2xl font-semibold text-center md:text-left">
          Vision That Caters To Diverse Industry Demands
        </h2>
        <Link href={"/contact-us"} >
        <button className="mt-4 text-sm md:mt-0 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-white whitespace-nowrap">
         Contact for more info
        </button></Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full md:w-[85%] text-white">
        {industries.map((industry, index) => {
          if (industry.name === hiddenIndustry) return null;  
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-gray-800 border border-transparent hover:border-blue-700 transition-colors rounded-lg text-center"
            >
              <div className="text-lg md:text-2xl mb-2">{industry.icon}</div>
              <span className="text-sm md:text-base">{industry.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IndustryGrid;
