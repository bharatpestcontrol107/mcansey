import Image, { StaticImageData } from 'next/image';
import { FaClock, FaBriefcase } from 'react-icons/fa';
import Link from 'next/link';

interface JobCardCommonProps {
  imageSrc: string | StaticImageData;
  jobTitle: string;
  jobType: string;
  timeAgo: string;
  applyLink: string;
}

export default function JobCardCommon({ 
  imageSrc, 
  jobTitle, 
  jobType, 
  timeAgo, 
  applyLink 
}: JobCardCommonProps) {
  return (
    <div className="md:max-w-7xl mx-auto bg-white border-b-2 overflow-hidden mt-3">
      <div className="w-full h-80 relative">
        <Image 
          src={imageSrc}  
          alt={`${jobTitle} Banner`}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>

      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800">
          {jobTitle}
        </h2>
        <div className="flex items-center text-gray-600 text-sm mt-2">
          <FaBriefcase className="mr-2" />
          <span>{jobType}</span>
          <FaClock className="ml-4 mr-2" />
          <span>{timeAgo}</span>
        </div>

        <div className="mt-6 md:text-right">
          <Link href={applyLink}>
            <button className="bg-blue-600 text-white py-2 px-6 text-[13px] rounded-lg hover:bg-blue-700 transition-all">
              Apply now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
