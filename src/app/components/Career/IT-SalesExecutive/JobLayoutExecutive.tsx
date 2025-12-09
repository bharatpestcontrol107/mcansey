import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { FaBriefcase, FaClock, FaDollarSign, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaShareAlt, FaTwitter } from 'react-icons/fa';
import logo from '../../../../../public/Home/Mcansey 100X100 L.png';

import Link from 'next/link';

interface Job {
  title: string;
  price: string;
  location: string;
  time: string;
  image: StaticImageData;
  link:string;
}

const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/mcanseycompany/',
    icon: <FaFacebookF />,
    colorClass: 'text-blue-600 hover:text-blue-800'
  },
  {
    name: 'Twitter',
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
    colorClass: 'text-blue-400 hover:text-blue-600'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com',
    icon: <FaLinkedinIn />,
    colorClass: 'text-blue-700 hover:text-blue-900'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com',
    icon: <FaInstagram />,
    colorClass: 'text-pink-500 hover:text-pink-700'
  }
];

const jobs: Job[] = [
  { title: "AEM Architect - Developer", price: "7 - 10 LPA", location: "Mumbai, India", time: "3 mins ago", image: logo, link:"/jobs/aem-architect" },
  { title: "React Native Developer", price: " 7 - 12 LPA", location: "Mumbai, India", time: "5 mins ago", image: logo, link:"/jobs/react-native-developer" },
  { title: "PHP Developer", price: " 7 - 12 LPA", location: "Mumbai, India", time: "8 mins ago", image: logo, link:"/jobs/php-laravel" },
  { title: "Node.JS Developer", price: "10 - 12 LPA", location: "Mumbai, India", time: "12 mins ago", image: logo, link:"/jobs/nodejs-developer" },
  { title: "React.JS Developer", price: "5 - 7 LPA", location: "Mumbai, India", time: "34 mins ago", image: logo, link:"/jobs/reactjs-developer" },
  { title: "UI/UX Designer", price: "5 - 7 LPA", location: "Mumbai, India", time: "45 mins ago", image: logo, link:"/jobs/ui-ux-designer" },
  { title: "SEO Executive", price: "$3.5 - 5 LPA", location: "Mumbai, India", time: "50 mins ago", image: logo, link:"/jobs/seo" },

];

const employmentInfo = [
  {
    icon: <FaBriefcase className="mr-2 text-blue-600 text-2xl" />,
    label: "Industry:",
    value: "IT Sales Executive – LinkedIn Lead Generation & Global Sales Specialist"
  },
  {
    icon: <FaBriefcase className="mr-2 text-blue-600 text-2xl" />,
    label: "Job Level:",
    value: "Experienced"
  },
  {
    icon: <FaDollarSign className="mr-2 text-blue-600 text-2xl" />,
    label: "Salary:",
    value: "3.5 LPA - 5 LPA"
  },
  {
    icon: <FaClock className="mr-2 text-blue-600 text-2xl" />,
    label: "Experience:",
    value: "2 Years"
  },
  {
    icon: <FaBriefcase className="mr-2 text-blue-600 text-2xl" />,
    label: "Job Type:",
    value: "Permanent"
  },
  {
    icon: <FaClock className="mr-2 text-blue-600 text-2xl" />,
    label: "Deadline:",
    value: "10/02/2025"
  },
  {
    icon: <FaClock className="mr-2 text-blue-600 text-2xl" />,
    label: "Updated:",
    value: "29/12/2024"
  },
  {
    icon: <FaMapMarkerAlt className="mr-2 text-blue-600 text-2xl" />,
    label: "Location:",
    value: "Mumbai/Gurgoan, India"
  }
];

const jobDetails = {
  welcomeMessage: "Welcome to Mcansey Team",
  description: "MCANSEY IT Services & Consulting Pvt Ltd is a global IT solutions provider specializing in website development, mobile app development, digital transformation, software solutions, and more. We are looking for a results-driven IT Sales Executive with proven expertise in LinkedIn lead generation and closing sales for global customers.",
  essentialKnowledge: [
    "Identify and engage potential clients globally using LinkedIn and other professional networks.",
    "Develop customized outreach strategies to generate qualified leads.",
    "Build strong client relationships by understanding their needs and presenting tailored IT solutions.",
    "Close deals effectively and achieve sales targets set during the interview process.",
    "Maintain a consistent sales pipeline and provide regular updates on progress.",
    "Collaborate with internal teams to ensure smooth onboarding and delivery of services to clients.",
    
  ],
  preferredExperience: [
    "Proven experience in LinkedIn lead generation and closing sales for global customers.",
    "Strong understanding of IT services, including web development, app development, and digital transformation.",
    "Excellent communication, negotiation, and relationship-building skills.",
    "Goal-oriented with a demonstrated ability to meet or exceed targets.",
    "Familiarity with CRM tools and sales tracking systems.",
  ],

  qualification: [
    "Bachelor’s degree in Business, Marketing, or a related field.",
    "Minimum of 2 years of experience in IT sales, focusing on global customers.",
    "Track record of achieving sales targets in a competitive environment.",
   
  ],
  offer: [
    "Target-based compensation structure, discussed during the interview process.",
    "Performance-based incentives for exceeding targets.",
    "Opportunity to work with a global client base and cutting-edge IT solutions.",
    "Flexible working environment and growth opportunities.",
  ],
  applyNow: [
    'If you’re a sales expert with experience in global markets and a passion for closing deals, we want you on our team! Send your resume to info@mcansey.com or apply online with the subject line "IT Sales Executive Application – Global Sales Specialist.'],
 
};

const JobLayoutExecutive: React.FC = () => {

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

         
          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md">
            <h1 className="text-[18px] sm:text-xl font-bold mb-4 sm:mb-6 text-gray-800">{jobDetails.welcomeMessage}</h1>
            <p className="text-[14px] sm:text-[14px] text-gray-700 mb-4 sm:mb-6 leading-relaxed">{jobDetails.description}</p>

            <h2 className="text-[15px] sm:text-[16px] font-semibold mb-3 sm:mb-4 text-blue-700">Essential Knowledge, Skills, and Experience</h2>
            <ul className="list-disc pl-4 sm:pl-6 text-[14px] sm:text-[14px] mb-4 sm:mb-6">
              {jobDetails.essentialKnowledge.map((item, index) => (
                <li key={index} className="mb-2">{item}</li>
              ))}
            </ul>

            <h2 className="text-[15px] sm:text-[16px] font-semibold mb-3 sm:mb-4 text-blue-700">Job Responsibility</h2>
            <ul className="list-disc pl-4 sm:pl-6 text-[14px] sm:text-[14px] mb-4 sm:mb-6">
              {jobDetails.preferredExperience.map((item, index) => (
                <li key={index} className="mb-2">{item}</li>
              ))}
            </ul>

            <h2 className="text-[15px] sm:text-[16px] font-semibold mb-3 sm:mb-4 text-blue-700">Qualifications:</h2>
            <ul className="list-disc pl-4 sm:pl-6 text-[14px] sm:text-[14px] mb-4 sm:mb-6">
              {jobDetails.qualification.map((item, index) => (
                <li key={index} className="mb-2">{item}</li>
              ))}
            </ul>

            <h2 className="text-[15px] sm:text-[16px] font-semibold mb-3 sm:mb-4 text-blue-700">What We Offer:</h2>
            <ul className="list-disc pl-4 sm:pl-6 text-[14px] sm:text-[14px] mb-4 sm:mb-6">
              {jobDetails.offer.map((item, index) => (
                <li key={index} className="mb-2">{item}</li>
              ))}
            </ul>
          
            <h2 className="text-[15px] sm:text-[16px] font-semibold mb-3 sm:mb-4 text-blue-700">Apply Now:</h2>
            <ul className="  sm:pl-6 text-[14px] sm:text-[14px] mb-4 sm:mb-6">
              {jobDetails.applyNow.map((item, index) => (
                <li key={index} className="mb-2">{item}</li>
              ))}
            </ul>

          
            <div className="flex flex-col sm:flex-row items-center justify-between border-t-2 pt-4">
              <div className="flex space-x-2 sm:space-x-3 mt-4">
                <Link href="/jobs/apply-now">
                  <button className="bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-md hover:bg-blue-700 text-[12px]">Apply now</button>
                </Link>
                <button className="bg-gray-300 text-gray-700 px-4 sm:px-6 py-2 rounded-md hover:bg-gray-400 text-[12px]">Save job</button>
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
        <div className="w-full lg:w-[40%] bg-white p-4 sm:p-6 rounded-lg lg:ml-10">
          <div className="border rounded-lg shadow-sm p-4 mb-4 bg-white mx-auto">
            <div className="flex flex-col sm:flex-row items-center mb-4">
              <Image
                src={logo}
                alt="logo"
                className="w-24 h-24 rounded-full object-cover"
              />
              <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
                <h2 className="text-[17px] sm:text-[18px] font-semibold">Mcansey</h2>
                <p className="text-gray-600 text-[14px] sm:text-[15px]">Mumbai, India   </p>
                <a href="#" className="text-blue-500 text-[12px] hover:underline ">Open Jobs</a>
              </div>
            </div>

            {/* Map */}
            <div className="mb-4">
              <iframe
                title="Company Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15061.70533659805!2d72.86536815!3d19.307297799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b02921c6677b%3A0xb164cc17e553e965!2sBhayandar%2C%20Bhayandar%20East%2C%20Mira%20Bhayandar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1735535617041!5m2!1sen!2sin"
                width="100%"
                height="200"
                frameBorder="0"
                allowFullScreen={false}
                aria-hidden="false"
              />
            </div>

           
            <address className="text-gray-600 space-y-1">
              <ul className='text-[13px]'>
                <li>F/002, Sonam Abhinav,', 'Mira Road - 401105,', 'Mumbai India'</li>
                <li>Phone: (123) 456-7890</li>
                <li>Email: info@mcanseycom</li>
              </ul>
            </address>
          </div>

         
          <div className="bg-white shadow-md rounded-lg p-4 border">
            <h2 className="text-[16px] font-semibold text-gray-800 mb-4">Similar Jobs</h2>
            <ul className="space-y-4">
              {jobs.map((job, index) => (
                <li
                  key={index}
                  className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 border-b border-gray-200 pb-4 last:border-b-0"
                >
                  <Image src={job.image} alt={job.title} className="h-12 w-12 sm:h-15 sm:w-15  rounded-md object-cover" />
                  <div className="flex-1">
                    <Link href={job.link}>
                      <h3 className="text-[15px] font-medium text-gray-900">{job.title}</h3>
                    </Link>
                    <div className="text-sm text-gray-500 flex items-center space-x-2">
                      <span className="flex items-center space-x-1">
                        <FaBriefcase className="h-4 w-4" />
                        <span>Fulltime</span>
                      </span>
                      <span className="whitespace-nowrap">{job.time}</span>
                    </div>
                    <div>
                      <p className="text-blue-600 text-[13px] font-semibold">{job.price}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">{job.location}</p>
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

export default JobLayoutExecutive;

