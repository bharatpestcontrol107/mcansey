'use client';
import React from 'react';
import ServiceCard from '../Home/ServiceCard';
import { FaMobileAlt, FaCode, FaSync, FaLightbulb, FaServer, FaCogs, FaCloud } from 'react-icons/fa';
import ServicesCommon from '../common/ServicesCommon';

interface StatItem {
  number: string;
  title: string;
  description: string;
}

const services = [
    {
      Icon: FaMobileAlt,
      title: 'Enterprise Software Development:',
      description: 'We create tailored enterprise solutions that streamline processes, enhance productivity, and scale with your business. Our custom-built software is designed to meet your organization’s complex needs.',
    },
    {
      Icon: FaCode,
      title: 'SaaS Development:',
      description: 'Our team builds secure, reliable, and scalable Software as a Service (SaaS) solutions that empower businesses to improve their operations with cloud-based applications.',
    },
    {
      Icon: FaSync,
      title: 'Custom CRM Development:',
      description: 'We design and develop custom Customer Relationship Management (CRM) systems that enhance customer interactions, sales processes, and data management for businesses of all sizes.',
    },
    {
      Icon: FaLightbulb,
      title: 'ERP Solutions:',
      description: 'We provide Enterprise Resource Planning (ERP) solutions that integrate core business processes into a unified system, improving efficiency, accuracy, and decision-making across your organization.',
    },
    {
      Icon: FaServer,
      title: 'API Development & Integration:',
      description: "We specialize in developing robust APIs and seamless integrations that enable smooth communication between various software applications, enhancing functionality and interoperability.",
    },
    {
      Icon: FaCogs,
      title: 'Legacy Software Modernization:',
      description: 'We help businesses upgrade and modernize legacy systems, ensuring they are compatible with the latest technologies and optimized for performance and security.',
    },
    {
      Icon: FaCloud,
      title: 'AI & Machine Learning Solutions:',
      description: 'Our AI and ML experts create intelligent applications that automate tasks, provide insights, and drive smarter decision-making, helping businesses gain a competitive edge.',
    },
    {
      Icon: FaCloud,
      title: 'Blockchain Development:',
      description: 'We develop secure and transparent blockchain solutions for businesses seeking to leverage the power of distributed ledger technology in areas like finance, supply chain, and more.',
    },
    {
      Icon: FaCloud,
      title: 'Quality Assurance & Testing:',
      description: 'We ensure your software is bug-free, functional, and ready for deployment through comprehensive testing, including manual and automated QA processes, performance testing, and security audits.',
    },
  ];

const ServicesSoftware: React.FC = () => {
  return (
    <ServicesCommon
    title="Tailored Software Solutions for Every Business Need"
    description="  At MCANSEY, we specialize in delivering end-to-end software development services that are customized to meet the unique needs of your business. From enterprise solutions to SaaS platforms, our team leverages cutting-edge technologies to build scalable and robust software that enhances operational efficiency, drives growth, and delivers real value. Whether you need a custom CRM, ERP system, or advanced AI solutions, we ensure your software is built to perfection and aligned with your business goals.">
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

export default ServicesSoftware;
