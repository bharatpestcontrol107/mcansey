
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
      title: 'Data Integration & Warehousing:',
      description: "'Seamlessly consolidate data from diverse sources into a centralized data warehouse for consistent, reliable analysis. Our integration processes ensure data is collected, transformed, and stored efficiently, enabling comprehensive access and analysis across your organization.'",
    },
    {
      Icon: FaCode,
      title: ' Business Intelligence (BI) Solutions:',
      description: 'Empower your team with advanced BI solutions that provide interactive dashboards and real-time reporting. Our BI tools help you visualize data, track KPIs, and make quick, informed decisions based on up-to-date insights.',
    },
    {
      Icon: FaSync,
      title: 'Predictive Analytics:',
      description: 'Anticipate future trends and make proactive decisions with predictive analytics. Leveraging machine learning algorithms and statistical models, we help forecast potential outcomes, enabling better strategic planning and risk management.',
    },
    {
      Icon: FaLightbulb,
      title: ' Data Visualization:',
      description: 'Transform complex data sets into intuitive visual representations. Our custom dashboards and reports make it easier to interpret data, allowing stakeholders to grasp key information at a glance and act with clarity.',
    },
    {
      Icon: FaServer,
      title: 'Big Data Analytics:',
      description: "Harness the power of big data to gain deep insights into customer behavior, market trends, and operational efficiency. We process and analyze large-scale data sets to uncover patterns and trends that drive strategic initiatives.",
    },
    {
      Icon: FaCogs,
      title: 'Custom Analytics Solutions:',
      description: 'Receive tailored analytics solutions designed to meet your unique business challenges. From ad-hoc analyses to comprehensive, project-specific analytics, we develop custom strategies that align with your objectives.',
    },
    {
      Icon: FaCloud,
      title: 'Reporting & Dashboard Development:',
      description: 'Access user-friendly, real-time reports and dashboards that cater to your business needs. Our solutions provide easy-to-navigate interfaces, enabling teams to monitor key metrics and adapt strategies effectively.',
    },
  ];

const ServicesDataAnalytics: React.FC = () => {
  return (
    <ServicesCommon
    title="Unlock Your Business Potential with Advanced Data & Analytics Solutions."
    description=" MCANSEY specializes in delivering robust data and analytics solutions, turning raw data into actionable insights. We provide data integration, analysis, and visualization services that enable informed, strategic decisions. Our expert team uses advanced tools to optimize operations, forecast trends, and drive business growth.">
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

export default ServicesDataAnalytics;

    