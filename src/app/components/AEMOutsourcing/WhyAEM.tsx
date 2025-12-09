
import React from 'react';
import {  FaRobot, FaCogs,  FaTools, FaRocket, FaShieldAlt, FaRegCalendarCheck, FaRegCaretSquareLeft, FaInnosoft, FaNeuter } from 'react-icons/fa';
import AboutCommon from '../common/ScrollingSection/AboutCommon';
import { SiHiveBlockchain } from 'react-icons/si';



const technologies = [
  {
    Icon: SiHiveBlockchain,
    title: 'AEM Website Development:',
    description: (<>We create custom, responsive websites powered by AEM, ensuring a seamless and engaging user experience across all devices.
</>),
  },
  {
    Icon: FaRobot,
    title: 'AEM Application Development:',
    description: (<>Our team builds robust, scalable web and mobile applications using AEM, tailored to meet your business needs and objectives.</>) 
  },
  {
    Icon: FaTools,
    title: 'AEM Commerce Development:',
    description: (<>We build and manage powerful ecommerce platforms using AEM, delivering seamless and engaging shopping experiences for your customers.
</>),
    
  },
  {
    Icon: FaRocket,
    title: 'AEM Integration Services:',
    description: (<>We integrate AEM with third-party systems, APIs, and tools to ensure smooth data flow and interoperability across platforms.
</>),
   
  },
  {
    Icon: FaShieldAlt,
    title: 'AEM Migration Services:',
    description: (<>Our seamless migration services help you transition from legacy systems or other CMS platforms to AEM without data loss or disruption.</>),
  },
  {
    Icon: FaCogs,
    title: 'AEM Customization:',
    description: (<>We offer tailored AEM solutions, customizing workflows, components, and templates to align with your unique business requirements.</>),
  },{
    Icon: FaRegCalendarCheck ,
    title: 'AEM Cloud Services:',
    description: (<>We provide deployment and management of AEM on Adobe Cloud or other cloud platforms, ensuring high scalability and performance.</>),
  },
  {
    Icon: FaRegCaretSquareLeft,
    title: 'AEM Consulting:',
    description: (<>Our AEM consulting services offer strategic guidance, from implementation to optimization, ensuring you get the most out of your AEM investment.</>),
  },
  {
    Icon: FaInnosoft,
    title: 'AEM Maintenance & Support:',
    description: (<>We provide ongoing maintenance and support to ensure that your AEM platform remains secure, up-to-date, and optimized for performance</>),
  },
  {
    Icon: FaNeuter,
    title: 'AEM Content Management Services:',
    description: (<>We streamline content creation, editing, and publishing within AEM, making content management simple and efficient.</>),
  },
  {
    Icon: FaNeuter,
    title: 'AEM Digital Asset Management (DAM):',
    description: (<>Our DAM services help you organize, store, and optimize digital assets with AEM, improving asset accessibility and usability.</>),
  },
  {
    Icon: FaNeuter,
    title: 'AEM Workflow Automation:',
    description: (<>We automate business processes using AEM workflows, enhancing efficiency, reducing manual errors, and improving overall productivity.</>),
  },
  {
    Icon: FaNeuter,
    title: 'AEM Personalization & Targeting:',
    description: (<>We help you create personalized user experiences with AEM’s targeting features, delivering customized content based on user behavior and preferences.</>),
  },
  {
    Icon: FaNeuter,
    title: 'AEM Forms Development:',
    description: (<>Our AEM Forms solutions enable the creation and management of interactive, dynamic forms that improve customer engagement</>),
  },
];

const WhyAEM: React.FC = () => {
  return (
    <AboutCommon
    title="Why Choose MCANSEY for AEM Outsourcing?"
    description=" MCANSEY is a leading AEM outsourcing company in India, offering expert AEM development and outsourcing services to businesses worldwide. With a team of certified AEM developers, AEM consultants, and AEM specialists, we deliver secure, scalable, and tailored AEM solutions that enhance your digital presence and drive business growth. Our AEM outsourcing services are designed to meet your specific project requirements, providing flexible and cost-effective solutions that empower your digital transformation. Collaborate with MCANSEY to hire AEM developers and elevate your business to the next level."
    technologies={technologies}
    buttonText="Innovate With Us"
    buttonLink="#"
    bgImage="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/appinventiv-mask-new.svg"
  />
  
  );
};

export default WhyAEM;
