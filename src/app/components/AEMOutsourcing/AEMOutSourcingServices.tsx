'use client';
import React from 'react';
import { DiGoogleAnalytics, DiMootoolsBadge } from "react-icons/di";
import { FaMobileAlt, FaCode, FaServer,  FaCloud, FaDeaf, FaDev, FaBusinessTime, FaProjectDiagram } from 'react-icons/fa';
import ServicesCommon from '../common/ServicesCommon';
import ServiceCard from '../Home/ServiceCard';
import Link from 'next/link';
import { SiCodesignal, SiQase } from 'react-icons/si';
import { GrTechnology } from 'react-icons/gr';
import { MdEngineering } from 'react-icons/md';

interface StatItem {
  number: string;
  title: string;
  description: React.ReactNode;
}

const services = [
    {
      Icon: SiCodesignal ,
      title: 'Hire AEM Project Manager',
      description: (<>
    Streamline your AEM project with a skilled Project Manager who ensures timely delivery, resource optimization, and seamless collaboration.
      </>),
    },
    {
      Icon: FaCode,
      title: 'Hire AEM Tech Lead',
      description: (<> Bring on an AEM Tech Lead to guide your team with expertise in AEM Forms, workflows, and project scalability.
      </>),
    },
    {
      Icon: FaCode,
      title: 'Hire AEM Architect',
      description: (<>Leverage the expertise of an AEM Architect to design a robust, scalable, and efficient AEM infrastructure for your business.</>),
    },
    {
      Icon: FaMobileAlt,
      title: 'Hire AEM Frontend Developer',
      description: (<>Create responsive and engaging AEM-powered user interfaces by hiring experienced AEM Frontend Developers.</>),
    },
    {
      Icon: FaServer,
      title: 'Hire AEM Backend Developer',
      description: (<>Ensure smooth data flow and customized server-side solutions with a professional AEM Backend Developer.</>),
    },
   
    {
      Icon: SiQase ,
      title: 'Hire AEM Full Stack Developer',
      description: (<>Handle end-to-end AEM development with a versatile Full Stack Developer skilled in both frontend and backend technologies.</>),
    },
    {
      Icon: FaBusinessTime,
      title: 'Hire AEM Author',
      description: (<>Easily manage and update your content with the help of a dedicated AEM Author for your projects.
</>),
    },
    {
      Icon: DiMootoolsBadge,
      title: 'Hire AEM Author Manager',
      description: (<>Maintain consistency and oversee content creation with a skilled AEM Author Manager.
</>),
    },
    {
      Icon: FaDev,
      title: 'Hire AEM Support Engineer',
      description: (<>Keep your AEM platform running flawlessly with the support of an expert AEM Support Engineer.</>),
    },
    {
        Icon: FaCloud,
        title: 'Hire AEM DevOps Engineer',
        description: (<>Optimize deployments and manage environments with a certified AEM DevOps Engineer for seamless operations.</>),
      },
      {
        Icon: FaDeaf,
        title: 'Hire AEP Data Engineer',
        description: (<>Transform and integrate your customer data effectively by hiring a professional AEP Data Engineer.</>),
      },
      {
        Icon: FaProjectDiagram,
        title: 'Hire AEM Sites Specialist',
        description: (<>Get expert support for AEM Sites implementation, including page creation and site structure management.</>),
      },
      {
        Icon: GrTechnology,
        title: 'Hire AEM Assets Specialist',
        description: (<>Manage and optimize your digital assets efficiently with an experienced AEM Assets Specialist.
</>),
      },
      {
        Icon: DiGoogleAnalytics,
        title: 'Hire AEM Integration Specialist',
        description: (<>Connect your AEM platform with external systems seamlessly by hiring an AEM Integration Specialist.</>),
      },
      {
        Icon: MdEngineering,
        title: 'Hire AEM Technical Foundations Specialist',
        description: (<>Lay a strong foundation for your AEM project with a skilled Technical Foundations Specialist.</>),
      },
      {
        Icon: MdEngineering,
        title: 'Hire AEM Quality Assurance (QA) Engineer',
        description: (<>Deliver high-quality and bug-free projects with the help of an experienced AEM QA Engineer.</>),
      },
      
  ];

const AEMOutSourcingServices: React.FC = () => {
  return (
    <ServicesCommon
    title="Hire AEM Resources for Seamless, Scalable Solutions"
    description="MCANSEY is a top AEM outsourcing company in India, offering comprehensive AEM outsourcing services to businesses worldwide. We provide expert AEM solutions through our team of certified AEM developers, AEM consultants, and AEM specialists, ensuring scalable and high-performance digital experiences. As a leading AEM resource outsourcing company in India, we help you hire AEM resources and hire AEM developers with the right expertise to meet your project needs. Our AEM development outsourcing services ensure seamless integration and customized solutions, while our AEM staffing solutions offer flexible and cost-effective ways to scale your team. Whether you need Adobe Experience Manager outsourcing or a dedicated team of AEM experts, MCANSEY is your trusted partner for AEM services in India. Hire AEM resources from India today and elevate your business to the next level.">
    {services.map((service, index) => (
      <ServiceCard
        key={index}
        Icon={service.Icon}
        title={<Link href="#enquiry-form">{service.title}</Link>}
        description={service.description}
      />
    ))}
  </ServicesCommon>
  );
};

export default AEMOutSourcingServices;
