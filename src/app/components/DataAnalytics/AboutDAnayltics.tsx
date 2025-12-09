
import React from 'react';
import { FaRegThumbsUp, FaRegHandPointRight, FaRegCheckCircle, Fa500Px, FaBity, FaCreativeCommonsShare, FaRegFutbol, FaRegHandshake } from 'react-icons/fa';
import { GrSecure, GrTechnology } from 'react-icons/gr';
import AboutCommon from '../common/ScrollingSection/AboutCommon';

const technologies = [
  {
    Icon: FaRegThumbsUp,
    title: ' Expert Team of Data Analysts:',
    description: 'Our team comprises skilled data scientists and analysts with extensive experience across various industries. They are adept at employing cutting-edge data technologies to develop solutions that meet your specific needs and deliver impactful results.',
    
  },
  {
    Icon: FaRegHandPointRight,
    title: 'Custom-Tailored Solutions:',
    description: 'We understand that every business is unique. Our data solutions are customized to align with your goals, ensuring that the insights and recommendations we provide are practical, relevant, and actionable for your organization.',
    
  },
  {
    Icon: FaRegCheckCircle,
    title: 'End-to-End Data Services:',
    description: "'From data collection and integration to advanced analysis and visualization, we offer comprehensive services that cover the entire data lifecycle. This ensures a seamless experience and consistent quality across all data-related processes.'",
    
  },
  {
    Icon: GrTechnology,
    title: ' Cutting-Edge Technology:',
    description: 'We leverage the latest data tools and technologies to bring innovative solutions to your data challenges. Our approach helps you stay ahead of competitors by utilizing modern, efficient, and reliable analytics methods.',
   
  },
  {
    Icon: FaBity,
    title: 'Actionable Insights:',
    description: 'Our focus is on translating complex data into actionable insights. We ensure that your business can act on findings with confidence, improving decision-making processes and outcomes.',
    
  },
  {
    Icon: Fa500Px ,
    title: 'Proven Methodology:',
    description: 'Our tried-and-tested methodologies provide consistency and accuracy in data analysis. We follow industry best practices to deliver high-quality, reliable insights that drive strategic planning and operational efficiency.',
   
  },{
    Icon: GrSecure ,
    title: 'Secure and Compliant:',
    description: 'Data security and compliance are top priorities. We adhere to strict data protection regulations and implement robust security measures to keep your data safe and ensure compliance with industry standards.',
   
  },
  {
    Icon: FaCreativeCommonsShare ,
    title: 'Collaborative Approach:',
    description: 'We work closely with your team to understand your business needs, integrate seamlessly with your existing systems, and provide solutions that support your overall strategy and operations.',
   
  },
  {
    Icon: FaRegFutbol ,
    title: ' Ongoing Support:',
    description: 'Our services don’t end at delivery. We offer continuous support to ensure that your data systems remain optimized, relevant, and effective as your business evolves and grows.',
   
  },
  {
    Icon: FaRegHandshake,
    title: ' Scalable Solutions:',
    description: 'Our data solutions are designed to scale with your business. Whether you’re dealing with an increase in data volume or expanding your analytical capabilities, our solutions are flexible to adapt and support your growth.',
   
  },
];

const AboutDAnalytics: React.FC = () => {
  return (
    <AboutCommon
      title="Your Trusted Partner for Data Excellence."
      description="At MCANSEY IT Services & Consulting, we empower businesses to harness the full potential of their data through our advanced Data & Analytics services. Our team of experts utilizes state-of-the-art tools and technologies to deliver actionable insights that drive informed decision-making. Whether you're looking to optimize operations, enhance customer experiences, or uncover new growth opportunities, our tailored solutions are designed to help you gain a competitive edge. With a focus on precision, innovation, and efficiency, MCANSEY ensures that your business benefits from the power of data in transforming challenges into sustainable success."
      technologies={technologies}
      buttonText="Innovate With Us"
      buttonLink="#"
      bgImage="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/appinventiv-mask-new.svg"
    />
  
  );
};

export default AboutDAnalytics;
