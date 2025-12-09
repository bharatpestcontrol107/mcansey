'use client'
import React from 'react';

import { BarChart, FileText, Users } from 'lucide-react';

import SliderLayout from '../common/SliderLayout';

const CardMobileData: React.FC = () => {

  return (
    <>
      
      <div className="w-full bg-black text-white">
  <div className="xl:w-[100%] mx-auto px-4 xl:px-0"> {/* Full width, left-aligned container */}
    <SliderLayout title="From Concept to Code: A Seamless Development Process"
    description="Our Agile mobile app development process ensures a flexible, iterative approach to building high-quality apps. By breaking the project into manageable sprints, we can quickly adapt to changes, gather feedback, and deliver continuous improvements throughout the development cycle. This collaborative approach allows us to prioritize user needs, ensure fast delivery, and maintain high standards of quality and performance, resulting in apps that are not only functional but also aligned with your business goals and market demands."
      cards={[
        {
          icon: <Users className="w-8 h-8" />,
          title: 'Project Planning & Discovery:',
          description:
            'We begin by understanding your business goals, target audience, and project requirements. This stage involves gathering all necessary information and setting clear objectives.',
        },
        {
          icon: <FileText className="w-8 h-8" />,
          title: 'Defining User Stories & Requirements:',
          description:
            'We break down the project into user stories and define specific requirements for each app feature. This ensures that all features align with user needs and business objectives.',
        },
        {
          icon: <BarChart className="w-8 h-8" />,
          title: 'Sprint Planning & Development:',
          description:
            'We divide the app development process into short, manageable sprints (typically 1-2 weeks). Each sprint focuses on delivering specific features, allowing for continuous feedback and improvement.',
        },
        {
          icon: <BarChart className="w-8 h-8" />,
          title: 'Design & Development:',
          description:
            "'Our designers and developers collaborate to create a seamless app with an intuitive UI/UX. We build and integrate features while ensuring that design and functionality work harmoniously.'",
        },
        {
            icon: <BarChart className="w-8 h-8" />,
            title: 'Testing & Quality Assurance (QA)',
            description:
              'Continuous testing is performed during each sprint to identify bugs and usability issues. QA ensures the app meets high standards of performance, security, and functionality.',
          },
          {
            icon: <BarChart className="w-8 h-8" />,
            title: 'Client Feedback & Iteration:',
            description:
              'After each sprint, we gather feedback from you to ensure the app aligns with your vision and requirements. We make necessary adjustments and improvements based on your input.',
          },
          {
            icon: <BarChart className="w-8 h-8" />,
            title: 'Deployment & Launch:',
            description:
              "'Once the app is tested and finalized, we prepare for deployment to app stores (Google Play, App Store). This includes app submission, compliance checks, and final optimizations.'",
          },
          {
            icon: <BarChart className="w-8 h-8" />,
            title: 'Post-Launch Support & Maintenance:',
            description:
              'After launch, we continue monitoring app performance, gather user feedback, and provide ongoing updates and enhancements to ensure your app stays relevant and performs optimally.',
          },
          {
            icon: <BarChart className="w-8 h-8" />,
            title: 'Continuous Improvement:',
            description:
              'Based on user feedback and market trends, we iterate on the app through regular updates, ensuring that the app evolves to meet changing user needs and business goals.',
          },
         
      ]}
    />
  </div>
</div>

    </>
  );
}

export default CardMobileData;
