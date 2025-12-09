
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
      title: 'Custom Software Development:',
      description: "'We design, develop, and deploy custom software solutions that cater to your unique business requirements, enhancing operational efficiency and user experience.'",
    },
    {
      Icon: FaCode,
      title: ' Cloud Computing Services:',
      description: 'Our cloud solutions offer scalable, secure, and cost-effective infrastructure for your business, enabling collaboration, data storage, and improved agility.',
    },
    {
      Icon: FaSync,
      title: 'IT Infrastructure Management:',
      description: 'We manage and optimize your IT infrastructure, including servers, networks, and databases, ensuring seamless operations and high availability of business-critical applications.',
    },
    {
      Icon: FaLightbulb,
      title: ' Enterprise Resource Planning (ERP) Solutions:',
      description: 'We help businesses implement and optimize ERP systems, streamlining processes, improving resource management, and enhancing decision-making.',
    },
    {
      Icon: FaServer,
      title: 'Network Security Solutions:',
      description: "Protect your organization from cyber threats with our robust network security services, including firewalls, intrusion detection systems, and data encryption.",
    },
    {
      Icon: FaCogs,
      title: 'IT Consulting & Strategy:',
      description: 'Our IT consulting services guide businesses in selecting the right technology, aligning IT strategies with business goals, and ensuring the optimal use of resources.',
    },
    {
      Icon: FaCloud,
      title: 'Managed IT Services:',
      description: 'With our managed services, we handle all your IT needs, including system monitoring, troubleshooting, and support, allowing you to focus on your core business activities.',
    },
    {
      Icon: FaCloud,
      title: 'Software Integration & Support:',
      description: 'We ensure seamless integration of software systems and provide ongoing support to ensure that your software solutions continue to run smoothly and efficiently.',
    },
    {
      Icon: FaCloud,
      title: 'Data Backup & Disaster Recovery:',
      description: 'Our backup and disaster recovery solutions protect your critical business data and ensure business continuity in the event of data loss or cyber incidents.',
    },
    {
      Icon: FaCloud,
      title: 'IT Support Services:',
      description: 'Our responsive IT support team provides technical assistance and troubleshooting, ensuring minimal downtime and maximum productivity.',
    },
  ];

const ServicesIT: React.FC = () => {
  return (
    <ServicesCommon
    title="Your Trusted Partner for End-to-End IT Services"
    description="  At MCANSEY, we specialize in delivering comprehensive IT services that help businesses of all sizes streamline operations, improve efficiency, and drive innovation. Our expert team provides tailored solutions that are designed to meet your specific business needs, ensuring that your technology infrastructure supports your growth and objectives. Whether you're looking for cloud solutions, custom software development, or IT support, we have the expertise and tools to ensure your success in the digital age.">
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

export default ServicesIT;
