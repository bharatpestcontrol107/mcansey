import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { FaClock, FaMapMarkerAlt, FaShareAlt } from 'react-icons/fa';
import Link from 'next/link';

interface Job {
  title: string;
  price: string;
  location: string;
  time: string;
  image: StaticImageData | string; 
  link: string;
}

interface EmploymentInfo {
  icon: JSX.Element;
  label: string;
  value: string;
}

interface JobDetails {
  welcomeMessage: string;
  description: string;
  essentialKnowledge: string[];
  preferredExperience: string[];
}

interface CompanyInfo {
  name: string;
  location: string;
  logo: StaticImageData | string;
  address: string;
  phone: string;
  email: string;
}

interface SocialLink {
  name: string;
  url: string;
  icon: JSX.Element;
  colorClass: string;
}

interface JobLayoutProps {
  jobs: Job[];
  employmentInfo: EmploymentInfo[];
  jobDetails: JobDetails;
  companyInfo: CompanyInfo;
  socialLinks: SocialLink[];
}

const JobLayout: React.FC<JobLayoutProps> = ({
  jobs,
  employmentInfo,
  jobDetails,
  companyInfo,
  socialLinks,
}) => {
  return (
    <div className="md:max-w-7xl border-t-2 pt-3 mx-auto">
      <div className="container mx-auto flex flex-col lg:flex-row space-y-6 lg:space-y-0">
      
        <div className="bg-white p-4 sm:p-6 border rounded-lg shadow-md w-full lg:w-[70%]">
          
          <div className="p-3 sm:p-5 rounded-lg shadow-lg mb-6 sm:mb-8 border border-blue-200">
            <h2 className="text-sm sm:text-[16px] font-semibold mb-2 sm:mb-4 pb-2 border-b-2 border-blue-400 text-blue-700">
              Employment Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {employmentInfo.map((info, index) => (
                <div className="flex items-center p-2" key={index}>
                  <div className="text-blue-500 text-sm sm:text-[10px] mr-4">{info.icon}</div>
                  <div>
                    <span className="font-semibold text-gray-800 text-[14px]">{info.label} </span>
                    <span className="text-gray-600 text-[13px]">{info.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Job Details */}
          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md">
            <h1 className="text-[18px] sm:text-xl font-bold mb-4 sm:mb-6 text-gray-800">
              {jobDetails.welcomeMessage}
            </h1>
            <p className="text-[14px] sm:text-[14px] text-gray-700 mb-4 sm:mb-6 leading-relaxed">
              {jobDetails.description}
            </p>

            <h2 className="text-[15px] sm:text-[16px] font-semibold mb-3 sm:mb-4 text-blue-700">
              Essential Knowledge, Skills, and Experience
            </h2>
            <ul className="list-disc pl-4 sm:pl-6 text-[14px] sm:text-[14px] mb-4 sm:mb-6">
              {jobDetails.essentialKnowledge.map((item, index) => (
                <li key={index} className="mb-2">
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="text-[15px] sm:text-[16px] font-semibold mb-3 sm:mb-4 text-blue-700">
              Job Responsibility
            </h2>
            <ul className="list-disc pl-4 sm:pl-6 text-[14px] sm:text-[14px] mb-4 sm:mb-6">
              {jobDetails.preferredExperience.map((item, index) => (
                <li key={index} className="mb-2">
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-center justify-between border-t-2 pt-4">
              <div className="flex space-x-2 sm:space-x-3 mt-4">
                <Link href="/jobs/apply-now">
                  <button className="bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-md hover:bg-blue-700 text-[12px]">
                    Apply now
                  </button>
                </Link>
                <button className="bg-gray-300 text-gray-700 px-4 sm:px-6 py-2 rounded-md hover:bg-gray-400 text-[12px]">
                  Save job
                </button>
              </div>

              <div className="space-x-2 sm:space-x-4 pt-4 sm:pt-0 flex items-center">
                <span className="font-semibold flex items-center text-[12px]">
                  <FaShareAlt className="mr-1 " />
                  Share This:
                </span>
                <div className="flex space-x-2 sm:space-x-4 text-[11px]">
                  {socialLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={link.colorClass}
                    >
                      {link.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[40%] bg-white p-4 sm:p-6 rounded-lg lg:ml-10">
          <div className="border rounded-lg shadow-sm p-4 mb-4 bg-white mx-auto">
            {/* Company Info */}
            <div className="flex flex-col sm:flex-row items-center mb-4">
              <Image
                src={companyInfo.logo}
                alt="logo"
                className="w-24 h-24 rounded-full object-cover"
              />
              <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
                <h2 className="text-[17px] sm:text-[18px] font-semibold">{companyInfo.name}</h2>
                <p className="text-gray-600 text-[14px] sm:text-[15px]">{companyInfo.location}</p>
                <a href="#" className="text-blue-500 text-[12px] hover:underline">
                  Open Jobs
                </a>
              </div>
            </div>

            <div className="mb-4">
              <iframe
                title="Company Location"
                src="https://www.google.com/maps/embed"
                width="100%"
                height="200"
                frameBorder="0"
                allowFullScreen={false}
                aria-hidden="false"
              />
            </div>

            <address className="text-gray-600 space-y-1">
              <ul className="text-[13px]">
                <li>{companyInfo.address}</li>
                <li>Phone: {companyInfo.phone}</li>
                <li>Email: {companyInfo.email}</li>
              </ul>
            </address>
          </div>

          {/* Similar Jobs */}
          <div className="bg-white shadow-md rounded-lg p-4 border">
            <h2 className="text-[16px] font-semibold text-gray-800 mb-4">Similar Jobs</h2>
            <ul className="space-y-4">
              {jobs.map((job, index) => (
                <li
                  key={index}
                  className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 border-b border-gray-200 pb-4 last:border-b-0"
                >
                  <Image
                    src={job.image}
                    alt={job.title}
                    className="h-12 w-12 sm:h-15 sm:w-15 rounded-md object-cover"
                  />
                  <div className="flex-1">
                    <Link href={job.link}>
                      <h3 className="text-[14px] font-semibold text-blue-600 hover:underline">
                        {job.title}
                      </h3>
                    </Link>
                    <p className="text-[12px] text-gray-600">Salary: {job.price}</p>
                    <p className="text-[12px] text-gray-600 flex items-center">
                      <FaMapMarkerAlt className="mr-1 text-gray-500" />
                      {job.location}
                    </p>
                    <p className="text-[12px] text-gray-600 flex items-center">
                      <FaClock className="mr-1 text-gray-500" />
                      {job.time}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobLayout;
