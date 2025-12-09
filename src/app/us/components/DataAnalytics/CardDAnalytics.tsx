'use client'
import React from 'react';

import { ArrowRight, BarChart, FileText, Users } from 'lucide-react';

import SliderLayout from '../common/SliderLayout';
const CardDAnalytics: React.FC = () => {

  return (
    <>
      
      <div className="w-full bg-black text-white">
  <div className="xl:w-[100%] mx-auto px-4 xl:px-0"> {/* Full width, left-aligned container */}
    <SliderLayout title="Structured Processes for Insightful Outcomes." 
    description=" Our data and analytics process at MCANSEY is built around a systematic approach that ensures every step delivers value. We begin by understanding your business needs and objectives, followed by the collection and integration of relevant data. Our team then employs robust data cleansing and transformation techniques to ensure accuracy. Using advanced analytics and AI-powered tools, we extract meaningful insights and create customized dashboards for real-time decision-making. Throughout the process, we ensure continuous monitoring and optimization, enabling your business to stay agile and make data-driven decisions with confidence."
      cards={[
        {
          icon: <Users className="w-8 h-8" />,
          title: ' Discovery & Requirement Gathering:',
          description:
            'We begin by engaging with your team to fully understand your business objectives, data sources, and key metrics. This phase sets the foundation for aligning our analytics strategy with your goals.',
        },
        {
          icon: <FileText className="w-8 h-8" />,
          title: ' Data Collection & Integration:',
          description:
            'We gather data from multiple sources and integrate it into a unified system. This step ensures that all data is harmonized and accessible for comprehensive analysis, enabling a holistic view of your operations.',
        },
        {
          icon: <BarChart className="w-8 h-8" />,
          title: 'Data Cleansing & Preparation:',
          description:
            'Our team meticulously cleans and prepares the data, removing errors, redundancies, and inconsistencies. This process ensures high data quality, which is critical for accurate analysis and trustworthy insights.',
        },
        {
          icon: <BarChart className="w-8 h-8" />,
          title: 'Data Analysis & Modeling:',
          description:
            "'Using advanced statistical and machine learning models, we conduct thorough data analysis. This step involves identifying trends, correlations, and patterns that are vital for drawing meaningful insights.'",
        },
        {
            icon: <BarChart className="w-8 h-8" />,
            title: 'Visualization & Reporting',
            description:
              'We create detailed reports and interactive dashboards that make complex data easy to understand. These visual tools help stakeholders quickly grasp insights and track important metrics, facilitating data-driven decisions.',
          },
          {
            icon: <BarChart className="w-8 h-8" />,
            title: 'Client Feedback & Refinement:',
            description:
              'We collaborate with your team to review the results and gather feedback. This step allows for adjustments and refinements, ensuring that the final output meets your expectations and business requirements.',
          },
          {
            icon: <BarChart className="w-8 h-8" />,
            title: 'Deployment & Continuous Improvement:',
            description:
              "'Once approved, the solution is deployed into your operational environment. We continue to monitor and optimize the solution to ensure it remains effective, scalable, and aligned with any evolving business needs.'",
          },
          
         
      ]}
    />
  </div>
</div>

    </>
  );
}

export default CardDAnalytics;
