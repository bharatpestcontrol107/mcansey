
'use client';
import React from 'react';
import ServiceCard from '../Home/ServiceCard';
import { FaMobileAlt, FaCode, FaSync, FaLightbulb, FaServer, FaCogs, FaCloud } from 'react-icons/fa';
import ServicesCommon from '../common/ServicesCommon';

const services = [
    {
      Icon: FaMobileAlt,
      title: 'Network Security:',
      description: "'Protect your organization’s network from unauthorized access, attacks, and breaches. We implement firewalls, intrusion detection systems (IDS), and intrusion prevention systems (IPS) to safeguard your network.'",
    },
    {
      Icon: FaCode,
      title: ' Endpoint Protection:',
      description: 'Secure every endpoint (computers, mobile devices, IoT) within your network with advanced anti-virus, anti-malware, and encryption tools to prevent threats from spreading.',
    },
    {
      Icon: FaSync,
      title: 'Cloud Security:',
      description: 'Ensure your cloud environment is protected against data breaches and unauthorized access. We offer encryption, identity management, and secure access solutions for cloud applications.',
    },
    {
      Icon: FaLightbulb,
      title: ' Threat Intelligence & Monitoring:',
      description: 'Leverage our advanced threat intelligence systems that monitor for emerging threats, providing real-time alerts and proactive responses to minimize risks.',
    },
    {
      Icon: FaServer,
      title: 'Data Protection & Encryption:',
      description: "Protect sensitive business data with strong encryption techniques, ensuring that unauthorized users cannot access or tamper with it.",
    },
    {
      Icon: FaCogs,
      title: 'Vulnerability Assessment & Penetration Testing:',
      description: 'Identify security gaps and vulnerabilities within your IT infrastructure through regular assessments and penetration tests to proactively fix weaknesses before they’re exploited.',
    },
    {
      Icon: FaCloud,
      title: 'Incident Response & Recovery:',
      description: 'Develop a plan for responding to cyber incidents, minimizing damage, and ensuring business continuity. Our experts guide you through the recovery process, restoring operations swiftly.',
    },
    {
      Icon: FaCloud,
      title: 'Compliance & Risk Management:',
      description: 'Stay compliant with industry regulations and standards like GDPR, HIPAA, and PCI-DSS. We offer compliance assessments and help manage your cyber risk to ensure full compliance.',
    },
  ];

const ServicesCyberSecurity: React.FC = () => {
  return (
    <ServicesCommon
      title="Securing Your Future in the Digital World"
      description="In today’s interconnected world, businesses face an increasing number of cyber threats that can compromise sensitive data, disrupt operations, and damage reputations. At MCANSEY, we provide robust cyber security services designed to protect your organization from the ever-evolving digital landscape. With a proactive approach, we focus on threat detection, risk management, and data protection to safeguard your business’s critical assets, allowing you to operate with confidence. Trust MCANSEY to secure your digital environment and keep your business safe from cybercrime.">
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

export default ServicesCyberSecurity;

