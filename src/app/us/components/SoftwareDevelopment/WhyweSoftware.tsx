
import React from 'react';
import { FaBrain, FaRobot, FaCogs, FaPaperPlane, FaTools, FaRocket, FaShieldAlt, FaRegCalendarCheck, FaRegCaretSquareLeft, FaInnosoft, FaNeuter } from 'react-icons/fa';
import AboutCommon from '../common/ScrollingSection/AboutCommon';



const technologies = [
  {
    Icon: FaBrain,
    title: 'Tailored Solutions:',
    description: 'We understand that every business is unique, which is why we offer customized software development that aligns with your specific needs and goals.',
    
  },
  {
    Icon: FaRobot,
    title: 'End-to-End Development:',
    description: 'From initial concept and design to development, testing, and deployment, we handle every aspect of the software development lifecycle with precision.',
    
  },
  {
    Icon: FaTools,
    title: 'Experienced Team:',
    description: "'Our team consists of skilled developers, designers, and strategists with deep industry expertise in various technologies and domains.'",
    
  },
  {
    Icon: FaRocket,
    title: 'Cutting-Edge Technology:',
    description: 'We use the latest technologies and frameworks, ensuring your software is future-proof, scalable, and high-performing.',
   
  },
  {
    Icon: FaShieldAlt,
    title: 'Continuous Support:',
    description: 'We provide ongoing maintenance and support, ensuring your software is always up-to-date, secure, and optimized.',
    
  },
  {
    Icon: FaCogs,
    title: 'Agile Approach:',
    description: 'Our Agile development process ensures quick turnaround times, flexibility, and continuous improvements based on your feedback.',
   
  },{
    Icon: FaRegCalendarCheck ,
    title: 'Quality Assurance:',
    description: 'We prioritize quality at every stage of development, from thorough testing to ensuring high standards of functionality, performance, and security.',
   
  },
  {
    Icon: FaRegCaretSquareLeft,
    title: 'Proven Track Record:',
    description: 'With a portfolio of successful software development projects, we have a history of delivering impactful and innovative solutions to clients across industries.',
   
  },
  {
    Icon: FaInnosoft,
    title: 'Cost-Effective Solutions:',
    description: 'We offer competitive pricing without compromising on quality, ensuring you get the best value for your investment.',
   
  },
  {
    Icon: FaNeuter,
    title: 'Client-Centric Focus:',
    description: 'Our focus is always on your business objectives, and we work closely with you to ensure the software meets your exact requirements and exceeds expectations.',
   
  },
];

const WhyweSoftware: React.FC = () => {
  return (
    <AboutCommon
    title="Your Partner in Building Reliable and Scalable Software Solutions"
    description="Choosing MCANSEY for your software development needs means partnering with a team committed to delivering tailored, high-quality solutions that align with your business goals. With our experienced professionals, cutting-edge technology, and client-centric approach, we ensure your software is scalable, secure, and built to the highest standards. Our proven track record of successful projects across industries showcases our dedication to innovation, reliability, and customer satisfaction."
    technologies={technologies}
    buttonText="Innovate With Us"
    buttonLink="#"
    bgImage="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/appinventiv-mask-new.svg"
  />
  
  );
};

export default WhyweSoftware;
