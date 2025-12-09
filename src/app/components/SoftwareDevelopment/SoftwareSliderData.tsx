'use client'
import React from 'react';
import { BarChart, FileText, Users } from 'lucide-react';
import SliderLayout from '../common/SliderLayout';
const SoftwareSliderData: React.FC = () => {

  return (
    <>
      
      <div className="w-full bg-black text-white">
  <div className="xl:w-[100%] mx-auto px-4 xl:px-0"> {/* Full width, left-aligned container */}
    <SliderLayout title="Our Proven Software Development Process for Reliable Solutions"
    description="Our comprehensive software development process begins with in-depth discovery and requirements gathering, followed by strategic design and prototyping. We then move into focused development and rigorous testing to ensure functionality and performance. The process concludes with seamless deployment and ongoing support, ensuring continuous improvements and optimal results. Our agile approach ensures flexibility and quick adaptations, making your software effective and ready for evolving business needs."
      cards={[
        {
          icon: <Users className="w-8 h-8" />,
          title: 'Discovery & Requirements Gathering:',
          description:
            'We begin by understanding your business, objectives, and technical requirements, ensuring we capture all details to build the right solution.',
        },
        {
          icon: <FileText className="w-8 h-8" />,
          title: 'System Design & Prototyping:',
          description:
            'We design the system architecture and create prototypes, visualizing the software’s functionality and user interface to ensure alignment with your vision.',
        },
        {
          icon: <BarChart className="w-8 h-8" />,
          title: 'Development & Coding:',
          description:
            'Our developers build the software using the latest technologies, ensuring scalability, performance, and security throughout the process.',
        },
        {
          icon: <BarChart className="w-8 h-8" />,
          title: 'Testing & Quality Assurance:',
          description:
            "'Comprehensive testing is done at every stage to identify and fix bugs, ensuring the software works flawlessly across all environments.'",
        },
        {
            icon: <BarChart className="w-8 h-8" />,
            title: 'Deployment & Launch:',
            description:
              'We deploy the software to the production environment, ensuring smooth integration and user adoption.',
          },
          {
            icon: <BarChart className="w-8 h-8" />,
            title: 'Maintenance & Support:',
            description:
              'After launch, we provide ongoing maintenance and support to address any issues, perform updates, and enhance features as your business evolves.',
          },
          {
            icon: <BarChart className="w-8 h-8" />,
            title: 'Continuous Improvement:',
            description:
              "'We analyze user feedback and performance metrics to continuously improve and optimize the software, ensuring it meets changing needs and business goals.'",
          },
         
         
      ]}
    />
  </div>
</div>

    </>
  );
}

export default SoftwareSliderData;
