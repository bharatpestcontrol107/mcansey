'use client'
import React from 'react';
import { ArrowRight, BarChart, FileText, Users } from 'lucide-react';
import SliderLayout from '../common/SliderLayout';
const CardCloudDev: React.FC = () => {

  return (
    <>
      
      <div className="w-full bg-black text-white">
  <div className="xl:w-[100%] mx-auto px-4 xl:px-0"> {/* Full width, left-aligned container */}
    <SliderLayout title="Efficient Cloud Solutions with Seamless Implementation."
      description="  Our cloud services process begins with a detailed consultation to understand your business objectives and technical requirements. From there, we create a customized cloud strategy that aligns with your goals and ensures the best fit for your infrastructure. We handle the entire migration process, seamlessly integrating your systems into the cloud while minimizing downtime. Once the migration is complete, we provide ongoing management, optimization, and support, continuously monitoring and refining your cloud environment to ensure peak performance. With MCANSEY, you can trust that your cloud journey is in expert hands."
      
      cards={[
        {
          icon: <Users className="w-8 h-8" />,
          title: 'Consultation & Needs Assessment:',
          description:
            'We begin by understanding your business needs, challenges, and goals to determine the best cloud strategy tailored to your organization.',
        },
        {
          icon: <FileText className="w-8 h-8" />,
          title: 'Cloud Strategy & Planning:',
          description:
            'Our team works closely with you to develop a cloud adoption plan, including the right platform, architecture, security measures, and timeline.',
        },
        {
          icon: <BarChart className="w-8 h-8" />,
          title: 'Cloud Migration & Integration:',
          description:
            'We assist in the migration of your data, applications, and infrastructure to the cloud, ensuring minimal disruption and seamless integration with your existing systems.',
        },
        {
          icon: <BarChart className="w-8 h-8" />,
          title: 'Cloud Configuration & Setup:',
          description:
            "'After migration, we configure your cloud environment to meet your specific needs, ensuring scalability, security, and high performance.'",
        },
        {
            icon: <BarChart className="w-8 h-8" />,
            title: 'Ongoing Management & Optimization:',
            description:
              'We offer continuous monitoring and optimization services, adjusting resources as needed to improve performance and reduce costs. ',
          },
          {
            icon: <BarChart className="w-8 h-8" />,
            title: 'Support & Maintenance:',
            description:
              'We provide ongoing support to ensure your cloud systems operate smoothly, with proactive troubleshooting, updates, and security patches.',
          },
      ]}
    />
  </div>
</div>

    </>
  );
}

export default CardCloudDev;
