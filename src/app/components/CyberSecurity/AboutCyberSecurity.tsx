
import React from 'react';
import { FaRegHandshake, FaRegBookmark, FaRegClone } from 'react-icons/fa';

import AboutCommon from '../common/ScrollingSection/AboutCommon';
import { GrSecure, GrUserExpert } from 'react-icons/gr';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { VscDebugContinue } from 'react-icons/vsc';



const technologies = [
  {
    Icon: FaRegHandshake ,
    title: ' Comprehensive Solutions:',
    description: 'We provide end-to-end cyber security services, from risk assessments to incident response, ensuring every aspect of your business is protected.',
    
  },
  {
    Icon: GrSecure ,
    title: 'Proactive Protection:',
    description: 'Our team focuses on identifying vulnerabilities before they become threats, implementing security measures to prevent potential breaches.',
    
  },
  {
    Icon: GrUserExpert,
    title: 'Expertise and Experience:',
    description: "'With years of experience in the cyber security domain, MCANSEY’s experts are equipped with the knowledge and tools to address any security challenge.'",
    
  },
  {
    Icon: MdOutlineDashboardCustomize ,
    title: ' Customized Approach:',
    description: 'We understand that every business has unique security needs. Our solutions are tailored to address your specific requirements, ensuring maximum protection.',
   
  },
  {
    Icon: VscDebugContinue ,
    title: 'Continuous Monitoring:',
    description: 'We offer 24/7 monitoring to detect and respond to any potential threats in real-time, minimizing downtime and data loss.',
    
  },
  {
    Icon: FaRegBookmark ,
    title: 'Regulatory Compliance:',
    description: 'Our services ensure that your business complies with all relevant security regulations, safeguarding you from legal liabilities.',
   
  },{
    Icon: FaRegClone,
    title: 'Rapid Incident Response:',
    description: 'In case of a breach, our team is equipped to respond swiftly, mitigating risks and minimizing impact on your business operations.',
   
  },
 
];

const AboutCyberSecurity: React.FC = () => {
  return (
    <AboutCommon
      title="Unmatched Security Expertise for Your Business."
      description="Why MCANSEY is Your Ideal Cyber Security Partner"
      technologies={technologies}
      buttonText="Innovate With Us"
      buttonLink="#"
      bgImage="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/appinventiv-mask-new.svg"
    />
  
  );
};

export default AboutCyberSecurity;
