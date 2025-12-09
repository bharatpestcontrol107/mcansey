import React from 'react';
import { FaMobileAlt, FaCode, FaSync, FaLightbulb, FaServer, FaCogs, FaCloud } from 'react-icons/fa';
import ServiceCard from './ServiceCard';
import Link from 'next/link';

const services = [
  {
    Icon: FaSync,
    title: 'Product Ideation & Conceptualization',
    description: 'Our strategic ideation and design processes ensure that your digital products are not only functional but also well-resonated with users.',
    link: '/product-ideation-and-conceptulization',
  },
  {
    Icon: FaCode,
    title: 'Website Design & Development',
    description: 'We design user-centric websites that combine aesthetics with performance, ensuring your brand is well-represented and delivers a seamless experience across all devices.',
    link: '/website-design-company',
  },
  {
    Icon: FaMobileAlt,
    title: 'Mobile App Development',
    description: 'We develop user-friendly, responsive mobile apps customized to your business goals, designed to boost engagement and deliver a seamless experience.',
    link: '/mobile-app-development-company',
  },
  {
    Icon: FaLightbulb,
    title: 'Software Development',
    description: 'Whether building custom software or enhancing existing systems, we deliver solutions that optimize efficiency and foster innovation within your operations.',
  link: '/software-development-company'
  },
  {
    Icon: FaServer,
    title: 'DevOps',
    description: 'Our DevOps services integrate development and operations, accelerating project timelines and improving the overall quality and reliability of your products.',
  link: '/cloud-application-development',
  },
  {
    Icon: FaCloud,
    title: 'Cloud Managed Services',
    description: 'We provide end-to-end management of your cloud infrastructure, ensuring it is optimized for security, performance, and cost-effectiveness, freeing you to focus on core business priorities.',
  link:'/cloud-application-development'
  },
  {
    Icon: FaCogs,
    title: 'Digital Marketing',
    description: 'Our strategies expand your online reach, boost brand visibility, and drive engagement through data-driven campaigns, ensuring measurable growth.',
 link: '/digital-marketing-company',
  },
];

const Services: React.FC = () => {
  return (
    <div className="w-full bg-white py-4 xl:py-16">
      <div className="w-[85%] mx-auto">
        <h2 className="text-lg md:text-2xl font-bold text-black mb-12 text-center">
          Navigate the Digital Frontier with Our Engineering Excellence
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link href={service.link} key={index}>
            <ServiceCard 
              key={index} 
              Icon={service.Icon} 
              title={service.title} 
              description={service.description} 
            /></Link>
          ))}
          <div className="bg-blue-600 p-4 md:p-6 rounded-lg shadow-lg text-white flex justify-center items-center">
           <Link href={'/contact-us'}> <button className= "text-sm md:text-lg font-semibold ">
              Our Services →
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
