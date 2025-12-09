
import React from 'react';
import { FaBrain, FaChartPie, FaTools, FaDatabase, FaHandshake, FaRobot, FaRocket, FaUsers, FaCogs, FaLightbulb } from 'react-icons/fa';

import AboutCommon from '../common/ScrollingSection/AboutCommon';




const technologies = [
  {
    Icon: FaBrain,
    title: 'Customized Marketing Strategies:',
    description:
      'We understand that each business is unique, so we develop customized strategies that align with your specific goals, ensuring maximum results and ROI.',
  },
  {
    Icon: FaRocket,
    title: 'Proven Expertise:',
    description:
      'Our team of digital marketing experts has a proven track record of delivering successful campaigns that increase traffic, drive conversions, and enhance brand visibility.',
  },
  {
    Icon: FaChartPie,
    title: 'Comprehensive Services:',
    description:
      'From SEO to social media marketing, we offer a full range of digital marketing services to ensure a cohesive and integrated approach to your online marketing.',
  },
  {
    Icon: FaDatabase,
    title: 'Data-Driven Approach:',
    description:
      'We leverage analytics and insights to track campaign performance, refine strategies, and make data-driven decisions that deliver real-time results.',
  },
  {
    Icon: FaHandshake,
    title: 'Client-Centric Focus:',
    description:
      'We put our clients first, ensuring transparent communication, regular reporting, and adjustments to ensure that your campaigns meet your goals and exceed expectations.',
  },
  {
    Icon: FaTools,
    title: 'Cutting-Edge Tools & Techniques:',
    description:
      'We use the latest tools, technologies, and best practices to stay ahead of digital marketing trends, ensuring that your campaigns remain competitive and innovative.',
  },
  {
    Icon: FaUsers,
    title: 'Dedicated Support:',
    description:
      'We provide ongoing support and consultation to help you navigate the evolving digital landscape and adapt your strategies for long-term success.',
  },
];

const AboutDM: React.FC = () => {
  return (
    <AboutCommon
    title="Why MCANSEY is Your Go-To Digital Marketing Partner"
    description="At MCANSEY, we combine years of expertise with a passion for delivering measurable results. Our team of skilled digital marketing professionals creates personalized strategies tailored to your unique business needs. With a data-driven approach, we optimize campaigns to ensure they reach the right audience, boost engagement, and increase conversions. Whether you need to build brand awareness or drive sales, our comprehensive services and ongoing support make us the perfect partner for your digital growth."
    technologies={technologies}
    buttonText="Innovate With Us"
    buttonLink="#"
    bgImage="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/appinventiv-mask-new.svg"
  />
  
  );
};

export default AboutDM;
