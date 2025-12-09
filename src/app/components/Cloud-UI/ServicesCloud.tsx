
'use client';
import React from 'react';
import ServiceCard from '../Home/ServiceCard';
import { FaMobileAlt, FaCode, FaSync, FaLightbulb, FaServer, FaCogs, FaCloud } from 'react-icons/fa';
import ServicesCommon from '../common/ServicesCommon';

const services = [
    {
      Icon: FaMobileAlt,
      title: 'Cloud Strategy & Consulting:',
      description: "'Our experts work with you to create a customized cloud strategy that aligns with your business objectives, ensuring you leverage the cloud’s full potential while optimizing costs and resources.'",
    },
    {
      Icon: FaCode,
      title: ' Cloud Migration:',
      description: 'We help you transition your existing infrastructure, applications, and data to the cloud with minimal disruption. Our team ensures a smooth migration process while minimizing downtime and maintaining security.',
    },
    {
      Icon: FaSync,
      title: 'Cloud Integration:',
      description: 'Our cloud integration services ensure that your cloud solutions work seamlessly with your existing software and business systems, enhancing workflow and collaboration across your organization.',
    },
    {
      Icon: FaLightbulb,
      title: ' Cloud Infrastructure Management:',
      description: 'We offer full management of your cloud infrastructure, ensuring it runs efficiently, is secure, and supports your business needs. This includes scaling resources as required to match demand.',
    },
    {
      Icon: FaServer,
      title: 'Cloud Security:',
      description: "We implement robust security measures to protect your data and applications in the cloud, from encryption and multi-factor authentication to proactive threat detection and mitigation.",
    },
    {
      Icon: FaCogs,
      title: 'Disaster Recovery & Backup:',
      description: 'Our cloud-based disaster recovery services help ensure business continuity by securely backing up your critical data and enabling fast recovery in case of an outage or data loss.',
    },
    {
      Icon: FaCloud,
      title: 'Private & Hybrid Cloud Solutions:',
      description: 'We provide tailored private and hybrid cloud solutions for businesses that require a combination of on-premise and cloud resources, offering greater flexibility and control.',
    },
    {
      Icon: FaCloud,
      title: 'Cloud Collaboration & Productivity Tools:',
      description: 'We implement cloud-based tools like Microsoft 365, Google Workspace, and other productivity platforms to boost collaboration, improve communication, and enhance business efficiency.',
    },
    {
      Icon: FaCloud,
      title: 'Cloud Analytics & Data Management:',
      description: 'Our cloud-based data management and analytics solutions help businesses gain real-time insights, enabling data-driven decision-making and maximizing business performance.',
    },
    
  ];

const ServicesCloud: React.FC = () => {
  return (
    <ServicesCommon
      title="Revolutionizing Business Operations with Cloud Technologies"
      description="MCANSEY offers comprehensive cloud services designed to help businesses streamline their operations, reduce costs, and scale seamlessly. Our cloud solutions allow businesses to store, manage, and access data securely from anywhere, at any time. We specialize in cloud strategy, migration, integration, and management, providing solutions that are flexible and future-proof. Whether you're looking to move to the cloud, optimize your existing infrastructure, or leverage cloud-based tools for enhanced collaboration, MCANSEY provides reliable and efficient cloud services that support your business’s digital transformation.">
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

export default ServicesCloud;
