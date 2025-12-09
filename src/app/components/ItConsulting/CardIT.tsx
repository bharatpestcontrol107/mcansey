'use client'
import React from 'react';

import { BarChart, FileText, Users } from 'lucide-react';
import SliderLayout from '../common/SliderLayout';
const CardIT: React.FC = () => {

  return (
    <>
      
      <div className="w-full bg-black text-white">
  <div className="xl:w-[100%] mx-auto px-4 xl:px-0"> {/* Full width, left-aligned container */}
    <SliderLayout title="Our Proven Process to Deliver Optimal IT Solutions" 
    description=" Our process begins with an in-depth consultation to understand your unique business challenges and goals. We then design and implement customized IT solutions that align with your objectives, ensuring seamless integration into your existing systems. Throughout the deployment, our team focuses on minimizing disruptions and ensuring smooth transitions. After implementation, we provide ongoing monitoring and support to ensure optimal performance. We continually assess and optimize your IT systems to keep them ahead of emerging technology trends, ensuring your business remains competitive and secure."
      cards={[
        {
          icon: <Users className="w-8 h-8" />,
          title: 'Initial Consultation & Assessment:',
          description:
            'We start by understanding your business objectives and evaluating your current IT infrastructure to identify areas for improvement and alignment with your goals.',
        },
        {
          icon: <FileText className="w-8 h-8" />,
          title: ' Solution Design & Planning:',
          description:
            'Based on the assessment, we design a tailored IT strategy that addresses your business needs, with detailed planning for implementation and integration.',
        },
        {
          icon: <BarChart className="w-8 h-8" />,
          title: 'Implementation & Deployment:',
          description:
            'Our team implements the IT solutions, ensuring seamless integration into your existing systems with minimal disruption to your operations.',
        },
        {
          icon: <BarChart className="w-8 h-8" />,
          title: 'Ongoing Support & Monitoring:',
          description:
            "'Once deployed, we provide continuous monitoring and support to ensure that your IT systems function optimally, with proactive measures to prevent potential issues.'",
        },
        {
            icon: <BarChart className="w-8 h-8" />,
            title: 'Optimization & Continuous Improvement:',
            description:
              'We regularly review and optimize your IT infrastructure, ensuring that it evolves with your business and technological advancements. ',
          },
      ]}
    />
  </div>
</div>
    </>
  );
}

export default CardIT;
