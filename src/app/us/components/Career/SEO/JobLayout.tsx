import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { FaBriefcase, FaClock, FaDollarSign, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaShareAlt, FaTwitter } from 'react-icons/fa';
import logo from '../../../../../../public/Home/Mcansey 100X100 L.png';

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
    value: "SEO Executive"
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
    value: "4+ Years"
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
    value: "10/11/2024"
  },
  {
    icon: <FaMapMarkerAlt className="mr-2 text-blue-600 text-2xl" />,
    label: "Location:",
    value: "Mumbai, India"
  }
];

const jobDetails = {
  welcomeMessage: "Welcome to Mcansey Team",
  description: "We are looking for a result-driven SEO executive to be responsible for developing optimized web content for travel-based portals. The SEO executive's responsibilities include working closely with the marketing team to achieve SEO objectives, measuring the success of SEO, and assisting with the maintenance of the website's architecture to ensure user-friendliness. To be successful as an SEO executive, you should have strong copywriting and analytical skills, knowledge of coding techniques, and a commitment to constantly improving on key skills.",
  essentialKnowledge: [
    "Identifying and implementing strategies for increasing website traffic through organic search listings without being blacklisted.",
    "Technical Analysis and Audit of the website",
    "Handling all aspects of SEO, SMO, and different ways of link building",
    "Excellent communication and team player skills.",
    "Should be expertise, self-motivated as well as carry out the assignment independently.",
    "Assisting in the layout of web pages while required.",
    "Should have a good understanding of the digital environment and the opportunities for using social media.",
    "Ensure that all websites and internet properties under your influence have been technically optimized to attract and engage those visitors that closely match the agreed profile of the target audience.",
    "Build systems and protocols internally that ensure all content is optimized across all platforms and user experiences (websites, mobile, social, video, blogs, retail portals etc)",
    "Help set, and work to, performance indicators for SEO that everyone understands and which complement overall marketing and business objectives.",
    "Promote both offsite and onsite activities and also the interactions that build ranking, profile, and traffic.",
  ],
  preferredExperience: [
    "12+ years of experience as a client-facing consultant with strong experience in AEM implementation & understanding in AEM Sites, AEM Cloud.",
    "Expertise with core web technologies including XML, XHTML, Query, Java Script, HTML 5, CSS, Client Server-Side Scripting languages such as JavaScript, and JSP, and web services development using RESTful implementations",
    "Good understanding of Java, Java EE, Servlets, JSP, Tag libraries, and JSTL skills, combined with a strong understanding of Enterprise Java frameworks such as Spring and Hibernate",
    "Dispatcher Configuration, Clustering, CRX repository, Workflows, Replication and Performance management.",
    "Application development, distributed application development and Internet / Intranet based database applications.",
    "AEM sites / assets / forms deployment and migration.",
    "AEM Backend Development like Sling Servlets, OSGi Components and JCR Queries",
    "Expertise in Day CQ foundational concepts, including the CRX repository, the CQ platform, the use of core frameworks such as Apache Sling and Apache Felix, a solid understanding of all Day CQ building blocks including templates, components, dialogs, widgets, etc, and the CQ development and deployment process.",
    "Strong expertise in all CQ5 building blocks including templates, components, dialogs, widgets, etc., and the CQ5 development",
    "Deep understanding of the Site deployment, Cashing, Clustering and replication mechanism’s.",
    "Questioning conventional approaches, exploring alternatives and responding to challenges with innovative solutions or services, using intuition, experimentation, expertise and fresh perspectives",
    "Demonstrating passion for our business and constant hunger for outstanding performance",
  ],
 
};

const JobLayout: React.FC = () => {

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

        {/* Right Section */}
        <div className="w-full lg:w-[40%] bg-white p-4 sm:p-6 rounded-lg lg:ml-10">
          {/* Company Info */}
          <div className="border rounded-lg shadow-sm p-4 mb-4 bg-white mx-auto">
            <div className="flex flex-col sm:flex-row items-center mb-4">
              <Image
                src={logo}
                alt="logo"
                className="w-24 h-24 rounded-full object-cover"
              />
              <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
                <h2 className="text-[17px] sm:text-[18px] font-semibold">All themes</h2>
                <p className="text-gray-600 text-[14px] sm:text-[15px]">Mumbai, India   </p>
                <a href="#" className="text-blue-500 text-[12px] hover:underline ">Open Jobs</a>
              </div>
            </div>

            {/* Map */}
            <div className="mb-4">
              <iframe
                title="Company Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.7083585163985!2d-87.62513982428002!3d41.885651414430155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2cbcf2044d65%3A0x2e08d03b9d946021!2s205%20N%20Michigan%20Ave%20%23810%2C%20Chicago%2C%20IL%2060601!5e0!3m2!1sen!2sus!4v1608070746000!5m2!1sen!2sus"
                width="100%"
                height="200"
                frameBorder="0"
                allowFullScreen={false}
                aria-hidden="false"
              />
            </div>

            {/* Contact Info */}
            <address className="text-gray-600 space-y-1">
              <ul className='text-[13px]'>
                <li>F/002, Sonam Abhinav,', 'Mira Road - 401105,', 'Mumbai India</li>
                <li>Phone: (123) 456-7890</li>
                <li>Email: info@mcanseycom</li>
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

export default JobLayout;
