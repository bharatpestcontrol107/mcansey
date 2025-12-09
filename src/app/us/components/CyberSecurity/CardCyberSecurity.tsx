'use client'
import React from 'react';

import { ArrowRight, BarChart, FileText, Users } from 'lucide-react';


import SliderLayout from '../common/SliderLayout';




 


const CardCyberSecurity: React.FC = () => {

  return (
    <>
      
      <div className="w-full bg-black text-white">
  <div className="xl:w-[100%] mx-auto px-4 xl:px-0"> {/* Full width, left-aligned container */}
    <SliderLayout title="Defend Against Threats, Secure Your Future."
      description="   Your Cyber Security Journey with MCANSEY"
      cards={[
        {
          icon: <Users className="w-8 h-8" />,
          title: 'Initial Consultation & Assessment:',
          description:
            'We begin by understanding your current cyber security posture, conducting a thorough risk assessment, and identifying potential vulnerabilities.',
        },
        {
          icon: <FileText className="w-8 h-8" />,
          title: ' Tailored Security Strategy Development:',
          description:
            'Based on our assessment, we develop a customized security strategy that aligns with your business needs, regulatory requirements, and budget.',
        },
        {
          icon: <BarChart className="w-8 h-8" />,
          title: 'Implementation of Security Measures:',
          description:
            'We implement a range of cyber security solutions, including network security, endpoint protection, and encryption, to protect your assets.',
        },
        {
          icon: <BarChart className="w-8 h-8" />,
          title: 'Ongoing Monitoring & Threat Detection:',
          description:
            "'Our team continuously monitors your systems, detecting and responding to potential threats in real-time to prevent data breaches or disruptions.'",
        },
        {
            icon: <BarChart className="w-8 h-8" />,
            title: 'Incident Response & Recovery:',
            description:
              'If an incident occurs, we quickly activate our incident response plan, containing the breach and minimizing damage, followed by recovery efforts to restore operations.',
          },
          {
            icon: <BarChart className="w-8 h-8" />,
            title: 'Continuous Improvement & Reporting:',
            description:
              'We regularly review and improve your security systems, providing reports and recommendations to stay ahead of emerging threats.',
          },
          
          
         
      ]}
    />
  </div>
</div>

    </>
  );
}

export default CardCyberSecurity;
