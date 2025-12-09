
import React from 'react';
import { FaBrain, FaRobot, FaCogs, FaRegFileAudio, FaRegSun, FaRegGem } from 'react-icons/fa';

import AboutCommon from '../common/ScrollingSection/AboutCommon';
import { Ri24HoursFill } from 'react-icons/ri';




const technologies = [
  {
    Icon: FaBrain,
    title: ' Tailored IT Solutions:',
    description: 'We provide customized IT solutions that are designed specifically for your business, ensuring they meet your unique goals and challenges.',
    
  },
  {
    Icon: FaRobot,
    title: 'Expert Team:',
    description: 'Our team consists of highly skilled professionals with extensive experience in various IT domains, ensuring that we deliver high-quality, reliable services.',
    
  },
  {
    Icon: FaCogs,
    title: 'Cost-Effective Services:',
    description: "'We offer affordable IT solutions that maximize your ROI, helping you reduce costs while improving efficiency and scalability.'",
    
  },
  {
    Icon: Ri24HoursFill,
    title: ' 24/7 Support:',
    description: 'With our round-the-clock support, we ensure that your IT systems are always up and running, providing peace of mind to businesses of all sizes.',
   
  },
  {
    Icon: FaRegFileAudio,
    title: 'Proven Track Record:',
    description: 'With a history of successful projects and satisfied clients, we are a trusted partner in delivering IT services that drive business growth.',
    
  },
  {
    Icon: FaRegSun,
    title: 'Innovation-Driven:',
    description: 'We stay at the forefront of technology trends, ensuring that your IT systems are always optimized with the latest innovations.',
   
  },{
    Icon: FaRegGem,
    title: 'Comprehensive IT Services:',
    description: 'From software development to network security and managed services, we offer a complete range of IT services to meet all your needs.',
   
  },
 
];

const AboutItConsulting: React.FC = () => {
  return (
    <AboutCommon
      title="Redefining IT Excellence for Your Business."
      description="MCANSEY stands out as your ideal IT partner by offering a tailored approach to meet your specific business needs. Our expert team is committed to delivering reliable, innovative, and scalable IT solutions that enhance your productivity and security. With a proven track record of successful implementations and a focus on continuous improvement, we ensure that your technology infrastructure evolves with your business. By choosing MCANSEY, you gain access to cutting-edge solutions, round-the-clock support, and a dedicated team that prioritizes your success."
      technologies={technologies}
      buttonText="Innovate With Us"
      buttonLink="#"
      bgImage="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/appinventiv-mask-new.svg"
    />
  
  );
};

export default AboutItConsulting;
