
import React from 'react';
import { FaMobileAlt, FaHandsHelping, FaShieldAlt, FaProjectDiagram, FaChartLine, FaRocket, FaToolbox, FaUserCheck, FaSyncAlt } from 'react-icons/fa';

import AboutCommon from '../common/ScrollingSection/AboutCommon';




const technologies = [
  {
    Icon: FaMobileAlt,
    title: 'Expertise Across Platforms:',
    description:
      'We specialize in developing apps for both iOS and Android, as well as cross-platform solutions, ensuring your app reaches the widest audience possible.',
  },
  {
    Icon: FaUserCheck,
    title: 'User-Centric Approach:',
    description:
      'Our designs focus on creating intuitive, seamless user experiences that are tailored to your target audience’s needs and preferences.',
  },
  {
    Icon: FaToolbox,
    title: 'Custom Solutions:',
    description:
      'We build custom mobile apps that align with your business goals, offering unique features that give your brand a competitive edge.',
  },
  {
    Icon: FaProjectDiagram,
    title: 'Proven Track Record:',
    description:
      'With years of experience and a portfolio of successful projects, we have a history of delivering high-performance apps on time and within budget.',
  },
  {
    Icon: FaSyncAlt,
    title: 'End-to-End Development:',
    description:
      'From concept and design to development, testing, and post-launch support, we handle the entire app development lifecycle with dedication and expertise.',
  },
  {
    Icon: FaChartLine,
    title: 'Scalability and Future-Proofing:',
    description:
      'We develop scalable apps that grow with your business, ensuring that your app can evolve with new features, updates, and increasing user demands.',
  },
  {
    Icon: FaShieldAlt,
    title: 'Performance & Security:',
    description:
      'We prioritize app performance and implement robust security measures to protect user data and ensure a smooth, reliable experience.',
  },
  {
    Icon: FaRocket,
    title: 'App Store Optimization (ASO):',
    description:
      'Our ASO strategies improve app visibility, rankings, and download rates, helping your app reach its full potential in app stores.',
  },
  {
    Icon: FaSyncAlt,
    title: 'Ongoing Maintenance & Updates:',
    description:
      'We provide continuous support and updates to ensure your app remains up-to-date with the latest features, security patches, and market trends.',
  },
  {
    Icon: FaHandsHelping,
    title: 'Transparent Communication:',
    description:
      'We keep you informed throughout the development process, ensuring clear communication and timely delivery of milestones and updates.',
  },
];


const AboutMobile: React.FC = () => {
  return (
    <AboutCommon
      title="Where Innovation Meets Performance: Your App, Our Expertise"
      description="At MCANSEY, we offer a holistic approach to mobile app development, ensuring your business stands out in the crowded app marketplace. Our team of skilled developers and designers work closely with you to understand your vision and deliver high-quality, customized apps tailored to your specific needs. With a focus on performance, security, and scalability, we ensure your app delivers exceptional user experiences while meeting your business objectives. Our proven track record in delivering successful apps makes us the trusted partner for your mobile development journey."
      technologies={technologies}
      buttonText="Innovate With Us"
      buttonLink="#"
      bgImage="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/appinventiv-mask-new.svg"
    />
  
  );
};

export default AboutMobile;
