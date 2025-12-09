
import React from 'react';
import { FaBrain, FaCloud, FaTools, FaShieldAlt, FaDollarSign, FaHistory, FaCogs, FaRocket } from 'react-icons/fa';

import AboutCommon from '../common/ScrollingSection/AboutCommon';

const technologies = [
  {
    Icon: FaCloud,
    title: 'Expertise Across Cloud Platforms:',
    description:
      'Our team has extensive experience in working with top cloud platforms like AWS, Microsoft Azure, and Google Cloud, ensuring the best fit for your business needs.',
  },
  {
    Icon: FaBrain,
    title: 'Tailored Cloud Solutions:',
    description:
      'We understand that every business is unique, so we design and implement customized cloud strategies that suit your specific goals, industry requirements, and budget.',
  },
  {
    Icon: FaTools,
    title: 'Comprehensive Cloud Services:',
    description:
      'From strategy and consulting to migration, management, and security, we offer end-to-end cloud services that take care of all your needs throughout your cloud journey.',
  },
  {
    Icon: FaRocket,
    title: 'Proven Track Record:',
    description:
      'MCANSEY has successfully helped businesses across various industries migrate to the cloud, improve their infrastructure, and boost performance, ensuring measurable outcomes.',
  },
  {
    Icon: FaShieldAlt,
    title: 'Security and Compliance Focus:',
    description:
      'We prioritize security and compliance in all our cloud solutions, ensuring your data is protected and meets industry regulations such as GDPR, HIPAA, and more.',
  },
  {
    Icon: FaDollarSign,
    title: 'Cost Optimization:',
    description:
      'We help you optimize cloud costs by selecting the right services, managing resources efficiently, and minimizing unnecessary expenses.',
  },
  {
    Icon: FaHistory,
    title: '24/7 Support:',
    description:
      'Our dedicated support team is available around the clock to assist with any issues, ensuring your cloud systems run smoothly and efficiently at all times.',
  },
];

const AboutCloud: React.FC = () => {
  return (
    <AboutCommon
      title="Scalable, Secure, and Efficient Cloud Solutions for Your Business"
      description="At MCANSEY, we bring a wealth of expertise and a customer-first approach to every cloud project. Our team works closely with you to design and implement cloud solutions that meet your unique business needs, ensuring flexibility, scalability, and security. We focus on delivering measurable results with a commitment to optimizing your cloud infrastructure for maximum efficiency, minimizing costs, and helping your business thrive in the digital era. With our comprehensive cloud services, we become your trusted partner in achieving seamless cloud adoption and continuous growth."
      technologies={technologies}
      buttonText="Innovate With Us"
      buttonLink="#"
      bgImage="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/appinventiv-mask-new.svg"
    />
  
  );
};

export default AboutCloud;
