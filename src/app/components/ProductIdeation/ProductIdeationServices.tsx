'use client';
import React from 'react';
import ServiceCard from '../Home/ServiceCard';
import { FaMobileAlt, FaCode, FaSync, FaLightbulb, FaServer, FaCogs, FaCloud } from 'react-icons/fa';
import ServicesCommon from '../common/ServicesCommon';

const services = [
    {
      Icon: FaMobileAlt,
      title: 'Product Ideation & Brainstorming',
      description: 'Initial stage focusing on generating innovative ideas and exploring different product possibilities through creative workshops and structured ideation sessions.',
    },
    {
      Icon: FaCode,
      title: 'Digital Product Consulting',
      description: 'Expert guidance that helps businesses refine their product vision, assess viability, and create a clear strategy for successful execution.',
    },
    {
      Icon: FaSync,
      title: 'Concept Development & Refinement',
      description: 'Transforming raw ideas into detailed, actionable concepts through thorough evaluation, prototyping, and feedback integration.',
    },
    {
      Icon: FaLightbulb,
      title: 'User Persona Creation & Journey Mapping',
      description: 'Developing detailed user personas and mapping their journey to ensure the product addresses user pain points and delivers an optimal experience.',
    },
    {
      Icon: FaServer,
      title: 'UI/UX Design & Prototyping',
      description: "Crafting user interfaces and experiences that are intuitive, visually appealing, and aligned with user expectations. Prototypes provide an early model of the product for testing and refinement.",
    },
    {
      Icon: FaCogs,
      title: 'Design System Development',
      description: 'Building a consistent design framework that ensures uniformity across all product components and streamlines future design processes.',
    },
    {
      Icon: FaCloud,
      title: 'Feasibility Studies & Risk Assessment',
      description: 'Analyzing the technical, financial, and operational feasibility of the product concept to identify potential challenges and mitigate risks.',
    },
  ];

const ProductIdeationServices: React.FC = () => {
  return (
    <ServicesCommon
    title="Transforming Ideas into Market-Ready Products"
    description=" Product ideation and conceptualization are foundational stages in creating successful products. At MCANSEY, we collaborate with clients to transform abstract ideas into structured, actionable product concepts. Our comprehensive process includes market analysis, brainstorming sessions, feasibility studies, and prototyping to ensure the product aligns with user needs and industry standards. By focusing on innovation and strategic planning, we help businesses develop ideas that not only stand out but are also primed for market success. With our expertise, your product vision is set on the path from concept to creation seamlessly.">
    {services.map((service, index) => (
      <ServiceCard
        key={index}
        Icon={service.Icon}
        title={service.title}
        description={service.description}
      />
    ))}
  </ServicesCommon>
  );
};

export default ProductIdeationServices;

