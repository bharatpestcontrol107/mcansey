import React from "react";
import { SiBmcsoftware } from "react-icons/si";
import { FaHeartbeat,   FaWallet,  } from "react-icons/fa";
import { GiOfficeChair, GiPublicSpeaker } from "react-icons/gi";
import { IoBusinessSharp, IoNewspaper, IoSchool } from "react-icons/io5";
import Image from "next/image";
import bgImg from '../../../../public/IndustriesModal/mcanseyIndustry.jpg';
import { MdEmojiTransportation, MdOutlineRealEstateAgent } from "react-icons/md";
import Link from "next/link";


interface Category {
  icon: JSX.Element;
  name: string;
  link:string;
}

const categories: Category[] = [
  { icon: <FaHeartbeat />, name: "Healthcare", link:"/healthcare-software-development-services" },
  { icon: <MdOutlineRealEstateAgent />, name: "Real Estate" ,link:"/real-estate-software-development-services" },
  { icon: <FaWallet />, name: "Banking", link:"/banking-it-services" },
  { icon: <IoBusinessSharp />, name: "Fintech" , link:"/fintech-software-development"},
  { icon: <SiBmcsoftware />, name: "Software & Technology" , link:"/software-development-services" },
 
 
  { icon: <MdEmojiTransportation />, name: "Travel & Transportation" ,link:"/travel-application-development-services" },
  { icon: <GiPublicSpeaker />, name: "Public Sector", link:"/it-solutions-for-public-sector" },
  { icon: <IoNewspaper />, name: "Media & Entertainment", link:"/media-and-entertainment-software-solutions" },
  { icon: <IoSchool />, name: "Education", link:"/education-software-development-services"},
  { icon: <GiOfficeChair />, name: "Industrial & Manufacturing", link:"/industrial-and-manufacturing-development-services" },
];

const IndustriesModal: React.FC = () => {
  return (
    <div className="fixed top-16 left-1/2 transform -translate-x-1/2 mt-2 w-[80vw] bg-white shadow-lg rounded-lg p-8 z-50">
      <div className="flex flex-col xl:flex-row justify-start gap-4">
        <div className="space-y-4 pr-8 xl:w-2/6">
          <h2 className="text-xl xl:text-2xl font-bold">Comprehensive Solutions</h2>
          <p className="text-gray-600 text-[12px] xl:text-[14px]">
            Providing industry-specific approaches to meet unique challenges.
          </p>
          <Image
            src={bgImg}
            alt="Industry Image"
            width={420}
            height={130}
            className="rounded-lg"
          />
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 xl:w-1/2">
          {categories.map((category, index) => (
           <Link href={category.link} passHref>
            <div key={index} className="flex items-center space-x-2 p-1 hover:bg-blue-200 hover:scale-105 transition-all delay-200 rounded-lg">
              <div className="text-gray-700 bg-gray-2 p-1 rounded-full">
                {category.icon}
              </div>
              <span className="text-gray-800 text-[12px] xl:text-sm">{category.name}</span>
            </div>
            </Link>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default IndustriesModal;
