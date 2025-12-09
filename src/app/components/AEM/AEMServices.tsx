'use client';
import React from 'react';
import ServiceCard from '../Home/ServiceCard';
import { FaCloudUploadAlt, FaCodeBranch, FaDesktop, FaPaintBrush, FaSearch, FaShieldAlt, FaSyncAlt, FaWrench } from 'react-icons/fa';
import ServicesCommon from '../common/ServicesCommon';

const services = [
    {
      Icon: FaDesktop,
      title: 'AEM Website Development',
      description: 'Our expert AEM developers create dynamic, high-performing websites tailored to your business needs. We ensure that your AEM-based website is scalable, fast, and secure, providing an exceptional user experience across all devices.',
    },
    {
      Icon: FaSyncAlt,
      title: 'AEM Customization',
      description: 'We specialize in customizing AEM components and templates to suit your business goals. From personalized content delivery to custom workflows, we ensure that AEM fits perfectly into your digital strategy.',
    },
    {
      Icon: FaCodeBranch,
      title: 'AEM Integration Services',
      description: 'We provide seamless integrations between AEM and third-party systems such as CRM, ERP, and marketing platforms. Our AEM integration services streamline your workflows, improving efficiency and ensuring consistency across all systems.',
    },
    {
      Icon: FaCloudUploadAlt,
      title: 'Cloud-based AEM Solutions',
      description: 'Leverage the power of the cloud with our AEM cloud services. We help you migrate and manage AEM on the cloud, enabling scalability, faster content delivery, and reduced infrastructure costs while maintaining the highest security standards.',
    },
    {
      Icon: FaWrench,
      title: 'AEM Maintenance & Support',
      description: 'We offer comprehensive AEM maintenance and support services to ensure your website or application runs smoothly. From regular updates and bug fixes to security patches, we ensure that your AEM implementation remains optimal and secure.',
    },
    {
      Icon: FaPaintBrush,
      title: 'AEM UI/UX Design',
      description: 'Our design team focuses on crafting visually stunning, intuitive, and responsive user interfaces. We create designs that offer a seamless experience across all devices while keeping the AEM environment’s flexibility in mind.',
    },
    {
      Icon: FaSearch,
      title: 'AEM SEO Optimization',
      description: 'Our AEM SEO services ensure that your content is not only optimized for search engines but also aligned with AEM’s architecture. We enhance your site’s search engine rankings, ensuring higher visibility and engagement from your target audience.',
    },
    {
      Icon: FaShieldAlt,
      title: 'AEM Security & Compliance',
      description: 'We provide robust security solutions for AEM implementations, ensuring your website is protected against potential threats. Our services also ensure that your AEM environment complies with industry standards and legal regulations, keeping your business safe and secure.',
    },
];


const AEMServices: React.FC = () => {
  return (
    <ServicesCommon
    title="Discover Our AEM Development Services"
    description="MCANSEY is a leading AEM (Adobe Experience Manager) development company in India, offering comprehensive AEM development services tailored to meet your business needs. As a trusted AEM company, we specialize in, AEM web development, and AEM application development. Our team of AEM experts provides scalable AEM solutions, including AEM custom solutions that ensure high-performance and flexibility. Whether you're looking to hire AEM developers for AEM website development or need end-to-end AEM development services, MCANSEY delivers robust, scalable, and innovative solutions to elevate your digital presence.">
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

export default AEMServices;

