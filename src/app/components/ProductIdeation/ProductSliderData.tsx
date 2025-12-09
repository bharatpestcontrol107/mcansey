'use client'
import React from 'react';
import { BarChart, FileText, Users } from 'lucide-react';

import SliderLayout from '../common/SliderLayout';
const ProductSliderData: React.FC = () => {

  return (
    <>
      
      <div className="w-full bg-black text-white">
  <div className="xl:w-[100%] mx-auto px-4 xl:px-0"> 
    <SliderLayout
     title="A Seamless Journey from Idea to Concept: Our Proven Process for Product Success"
      description="  Our product ideation and conceptualization process is a comprehensive, step-by-step journey. It begins with brainstorming and market research to validate ideas and gather insights. We then move to concept development, where we create detailed product outlines, user personas, and wireframes. Prototypes are built for early testing and refinement. Finally, we develop a strategic roadmap to guide your concept through to the development phase, ensuring every decision is data-driven and aligned with your vision."
      cards={[
        {
          icon: <Users className="w-8 h-8" />,
          title: 'Initial Discovery & Research',
          description:
            'The process begins with understanding your business goals, industry landscape, and target audience. We conduct in-depth market research to identify current trends, consumer needs, and potential gaps in the market to validate the initial idea.',
        },
        {
          icon: <FileText className="w-8 h-8" />,
          title: 'Brainstorming & Idea Generation',
          description:
            'Through structured brainstorming sessions, we collaborate with stakeholders to generate innovative ideas. Our team encourages creative thinking and leverages diverse perspectives to ensure that all potential concepts are explored.',
        },
        {
          icon: <BarChart className="w-8 h-8" />,
          title: 'Idea Screening & Selection',
          description:
            'After idea generation, we evaluate and filter out the most promising concepts based on feasibility, alignment with business goals, and potential market success. This step helps focus on ideas with the highest potential for development.',
        },
        {
          icon: <BarChart className="w-8 h-8" />,
          title: 'User Persona Development',
          description:
            "'We create detailed user personas to better understand the end-users' needs, behaviors, and pain points. This helps tailor the product concept to fit the target audience and ensures user-centric solutions.'",
        },
        {
            icon: <BarChart className="w-8 h-8" />,
            title: 'Feasibility Study & Risk Assessment',
            description:
              'This step involves analyzing the technical, financial, and operational feasibility of the selected idea. We assess potential risks and challenges to create a strategy that mitigates these factors and sets a solid foundation for product development.',
          },
          {
            icon: <BarChart className="w-8 h-8" />,
            title: 'Prototyping & Concept Visualization',
            description:
              'We develop initial sketches or wireframes to visualize the product idea. Prototypes help refine the concept, identify potential issues early, and create a tangible model for stakeholders to provide feedback.',
          },
          {
            icon: <BarChart className="w-8 h-8" />,
            title: 'Feedback & Iteration',
            description:
              "'Gathering feedback from stakeholders, potential users, and experts is crucial. We use the insights to make iterative improvements to the prototype and ensure the concept aligns with market expectations and user needs.'",
          },
          {
            icon: <BarChart className="w-8 h-8" />,
            title: 'Defining the Product Roadmap',
            description:
              'We create a comprehensive product roadmap that outlines development timelines, milestones, and strategic goals. This roadmap acts as a guide for turning the refined concept into a fully developed product.',
          },
          {
            icon: <BarChart className="w-8 h-8" />,
            title: 'Final Concept Approval',
            description:
              'The process concludes with presenting the polished product concept for final approval. This stage ensures all stakeholders are aligned, and the concept is ready to move into the development phase.',
          },
         
      ]}
    />
  </div>
</div>

    </>
  );
}

export default ProductSliderData;
