'use client';
import React from 'react';
import ServiceCard from '../Home/ServiceCard';
import { FaMobileAlt, FaCode, FaSync, FaLightbulb, FaServer, FaCogs, FaCloud } from 'react-icons/fa';
import ServicesCommon from '../common/ServicesCommon';

const services = [
    {
      Icon: FaMobileAlt,
      title: 'iOS App Development',
      description: "'Our expert iOS developers create intuitive, high-performing apps that deliver an exceptional user experience on Apple devices, including iPhones and iPads. Whether you're looking for an app with advanced functionality or a simple solution, we have the expertise to bring your idea to life.'",
    },
    {
      Icon: FaCode,
      title: 'Android App Development',
      description: 'We specialize in developing custom Android apps that cater to your business requirements while ensuring seamless integration with Android devices. Our apps are designed for performance, scalability, and security, offering an optimal user experience.',
    },
    {
      Icon: FaSync,
      title: 'Cross-Platform Apps',
      description: 'Our cross-platform app development solutions enable you to target a wider audience by creating apps that work seamlessly across both iOS and Android platforms. We leverage the latest frameworks like React Native and Flutter to build high-quality, cost-effective apps.',
    },
    {
      Icon: FaLightbulb,
      title: 'Progressive Web Apps (PWA)',
      description: 'Progressive Web Apps provide users with a native app-like experience while being lightweight and easily accessible via the web. We specialize in developing PWAs that enhance user engagement and ensure faster loading times, offline functionality, and seamless updates.',
    },
    {
      Icon: FaServer,
      title: 'App Maintenance & Updates',
      description: "Continuous app performance optimization is crucial for long-term success. We offer comprehensive app maintenance services to ensure your app remains up-to-date with the latest features, security patches, and performance improvements.",
    },
    {
      Icon: FaCogs,
      title: 'Mobile App UI/UX Design',
      description: 'Our UI/UX design team crafts visually appealing, intuitive, and responsive designs that enhance the user experience. We focus on designing easy-to-navigate interfaces that are optimized for every device and screen size.',
    },
    {
      Icon: FaCloud,
      title: 'App Store Optimization (ASO)',
      description: 'ASO services help your app get discovered by your target audience. We employ strategies to enhance visibility, improve rankings, and optimize keywords to ensure your app performs well in app stores, driving more downloads and user engagement.',
    },
  ];

const ServicesMobile: React.FC = () => {
  return (
    <ServicesCommon
    title="Crafting Cutting-Edge Mobile Apps for Every Industry"
    description=" Custom Mobile App Development to Meet Your Unique Business Needs">
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

export default ServicesMobile;

