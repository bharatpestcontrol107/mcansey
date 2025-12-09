'use client'
import React from 'react';
import { BarChart, FileText, Users } from 'lucide-react';


import SliderLayout from '../common/SliderLayout';
const ProcessOutsourcing: React.FC = () => {

  return (
    <>
      
      <div className="w-full  bg-black text-white">
  <div className="xl:w-[100%] mx-auto px-4 xl:px-0  h-[700px] lg:h-[800px]"> 
    <SliderLayout title="AEM Resource Outsourcing Process at MCANSEY"
    description="At MCANSEY, a top AEM outsourcing company in India, we follow a streamlined AEM resourcing outsourcing process to deliver expert solutions to businesses worldwide. Our team of certified AEM developers, AEM consultants, and AEM specialists ensures seamless integration and high-performance results. We help you hire AEM resources with the right expertise to meet your specific project needs, offering flexible and cost-effective AEM staffing solutions. Whether you need Adobe Experience Manager outsourcing or a dedicated team of AEM experts, we provide AEM development outsourcing services that empower your digital transformation. Partner with MCANSEY to hire AEM developers and elevate your business to the next level."
      cards={[
        {
          icon: <Users className="w-8 h-8" />,
          title: 'Initial Consultation and Requirement Analysis:',
          description:
            'We begin by understanding your business goals and specific AEM project requirements. Our team conducts in-depth discussions to assess your needs and identify the right AEM resources for your project.',
        },
        {
          icon: <FileText className="w-8 h-8" />,
          title: 'Resource Selection:',
          description:
            'Based on your requirements, we carefully select experienced and certified AEM professionals, including AEM developers, architects, consultants, and other specialists, ensuring the right skill set for your project.',
        },
        {
          icon: <BarChart className="w-8 h-8" />,
          title: 'Onboarding and Integration:',
          description:
            'Once the resources are selected, they undergo a seamless onboarding process. Our experts quickly integrate into your team, aligning with your project goals, timeline, and workflow processes.',
        },
        {
          icon: <BarChart className="w-8 h-8" />,
          title: 'Project Planning and Execution:',
          description:
            "'The selected AEM resources collaborate with your team to create a detailed project plan. We follow Agile methodologies to ensure continuous progress and flexibility throughout the development process'",
        },
        {
            icon: <BarChart className="w-8 h-8" />,
            title: 'Ongoing Monitoring and Support:',
            description:
              'Throughout the project, we provide consistent monitoring and performance tracking. Our dedicated support team ensures any issues are quickly addressed, keeping the project on track.',
          },
          {
            icon: <BarChart className="w-8 h-8" />,
            title: 'Regular Reporting and Updates:',
            description:
              'We maintain transparent communication with regular progress reports, keeping you updated on milestones, timelines, and any adjustments needed to meet your business objectives.',
          },
          {
            icon: <BarChart className="w-8 h-8" />,
            title: 'Final Delivery and Post-Deployment Support:',
            description:
              "'After project completion, our AEM experts ensure smooth deployment and provide ongoing support and maintenance to guarantee long-term success and performance optimization of your AEM solution.'",
          },
          {
            icon: <BarChart className="w-8 h-8" />,
            title: 'Continuous Improvement:',
            description:
              "'We continuously assess the performance of your AEM solution, identifying areas for improvement, and offering upgrades or enhancements as needed to meet evolving business requirements.'",
          },
         
         
      ]}
    />
  </div>
</div>

    </>
  );
}

export default ProcessOutsourcing;
