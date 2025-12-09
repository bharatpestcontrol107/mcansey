'use client'
import React from 'react';

import { ArrowRight, BarChart, FileText, Users } from 'lucide-react';




import SliderLayout from '../common/SliderLayout';




 


const CardDMarketing: React.FC = () => {

  return (
    <>
      
      <div className="w-full bg-black text-white">
  <div className="xl:w-[100%] mx-auto px-4 xl:px-0"> {/* Full width, left-aligned container */}
    <SliderLayout title="Our Proven Process to Achieve Digital Marketing Success"
    description=" Our process starts with understanding your business goals and target audience. We conduct thorough research to create a tailored marketing strategy that aligns with your objectives. After implementing the strategy, we continuously monitor and analyze the performance of your campaigns using advanced tools. Based on these insights, we optimize and adjust campaigns for maximum efficiency, ensuring that your marketing efforts achieve the highest ROI. Regular reporting keeps you informed, giving you a clear picture of the results we are driving for your business."
      cards={[
        {
          icon: <Users className="w-8 h-8" />,
          title: 'Initial Consultation & Goal Setting:',
          description:
            'We start by understanding your business, objectives, and target audience to develop a clear strategy aligned with your goals.',
        },
        {
          icon: <FileText className="w-8 h-8" />,
          title: ' Market Research & Competitor Analysis:',
          description:
            'We conduct comprehensive research to understand market trends, customer behavior, and competitor strategies, ensuring that we craft a strategy that stands out in the competitive landscape.',
        },
        {
          icon: <BarChart className="w-8 h-8" />,
          title: 'Campaign Strategy & Planning:',
          description:
            'Based on research and goals, we design a detailed digital marketing plan that includes tactics for SEO, PPC, social media, content, and more, tailored to your business needs.',
        },
        {
          icon: <BarChart className="w-8 h-8" />,
          title: 'Execution & Implementation:',
          description:
            "'Our team executes the plan, ensuring that each aspect of the campaign is implemented effectively, from content creation to ad placements and social media engagement.'",
        },
        {
            icon: <BarChart className="w-8 h-8" />,
            title: 'Monitoring & Optimization:',
            description:
              'We continuously monitor the performance of campaigns, adjusting strategies based on analytics and insights to maximize results and improve ROI. ',
          },
          {
            icon: <BarChart className="w-8 h-8" />,
            title: 'Reporting & Analysis:',
            description:
              'We provide regular reports that detail campaign performance, key metrics, and ROI, giving you a clear picture of your digital marketing success. ',
          },
      ]}
    />
  </div>
</div>

    </>
  );
}

export default CardDMarketing;
