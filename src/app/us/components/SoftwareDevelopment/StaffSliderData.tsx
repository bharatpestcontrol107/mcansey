'use client'
import React from 'react';
import { BarChart, FileText, Users } from 'lucide-react';

import SliderLayoutItStaff from '../ItStaffAugmentation/SliderLayoutItStaff';
const StaffSliderData: React.FC = () => {

  return (
    <>
      
      <div className="w-full  bg-black text-white">
  <div className="xl:w-[100%] mx-auto px-4 xl:px-0  h-[700px] lg:h-[600px]"> 
    <SliderLayoutItStaff title="Our Streamlined Staff Augmentation Process"
    description="We follow a simple and efficient process to meet your IT staffing needs. From understanding your requirements to onboarding the right professionals, we ensure a seamless experience. Our approach focuses on providing skilled talent quickly and integrating them effectively into your projects, helping you scale and achieve your objectives with ease."
      cards={[
        {
          icon: <Users className="w-8 h-8" />,
          title: 'Understanding Client Needs:',
          description:
            'We begin by thoroughly analyzing your project requirements, technical specifications, and team structure to ensure we provide the right expertise.',
        },
        {
          icon: <FileText className="w-8 h-8" />,
          title: 'Proposal Submission:',
          description:
            'A detailed proposal is shared, outlining the resources, timelines, and costs tailored to your business goals.',
        },
        {
          icon: <BarChart className="w-8 h-8" />,
          title: 'Contract Negotiation:',
          description:
            'We collaborate with you to finalize terms, ensuring clarity and mutual agreement on all aspects of the engagement.',
        },
        {
          icon: <BarChart className="w-8 h-8" />,
          title: 'Resource Allocation:',
          description:
            "'The right professionals are handpicked from our talent pool, ready to integrate seamlessly into your team.'",
        },
        {
            icon: <BarChart className="w-8 h-8" />,
            title: 'Tailoring Solution:',
            description:
              'Each resource is aligned with your specific processes, workflows, and tools to deliver maximum productivity.',
          },
          {
            icon: <BarChart className="w-8 h-8" />,
            title: 'Quality Assurance:',
            description:
              'Regular monitoring and performance evaluations are conducted to maintain high standards and ensure project success.',
          },
          {
            icon: <BarChart className="w-8 h-8" />,
            title: 'Security Measures:',
            description:
              "'We prioritize data protection and compliance, implementing robust security protocols to safeguard your information.'",
          },
          {
            icon: <BarChart className="w-8 h-8" />,
            title: 'Continuous Improvement:',
            description:
              "'Feedback loops and ongoing support help us refine the process and adapt to evolving project requirements.'",
          },
         
         
      ]}
    />
  </div>
</div>

    </>
  );
}

export default StaffSliderData;
