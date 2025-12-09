'use client';
import React from 'react';
import ServiceCard from '../Home/ServiceCard';
import { FaMobileAlt, FaCode, FaSync, FaLightbulb, FaServer, FaCogs, FaCloud } from 'react-icons/fa';
import ServicesCommon from '../common/ServicesCommon';

const services = [
    {
      Icon: FaMobileAlt,
      title: 'Custom Web Development',
      description: 'We create custom websites that are designed from scratch to reflect your brand’s identity. Whether it’s an intuitive user interface, robust functionality, or a highly specialized solution, we deliver clean, scalable, and future-ready websites.',
    },
    {
      Icon: FaCode,
      title: 'CMS Website Design',
      description: 'At MCANSEY, we offer expert solutions for various CMS platforms tailored to your specific needs. Whether you’re running an eCommerce store or managing a content-driven website. CMS website we manage are Shopify, Wordpress, Webflow Magento, Joomla & more',
    },
    {
      Icon: FaSync,
      title: ' eCommerce Web Development',
      description: 'Transform your online presence with a feature-rich eCommerce website. From secure payment gateways to inventory management, we create seamless online shopping experiences that drive conversions and boost sales.',
    },
    {
      Icon: FaLightbulb,
      title: 'Progressive Web Apps (PWA)',
      description: 'Revolutionize user engagement with PWAs. These apps combine the best of web and mobile experiences, offering fast, reliable, and offline capabilities while being easy to access directly from the web.',
    },
    {
      Icon: FaServer,
      title: 'WordPress Website Solutions',
      description: "WordPress is a powerful and versatile CMS that allows businesses of all sizes to create dynamic, user-friendly websites. Whether you're looking to launch a blog, an online store, or a corporate website, our WordPress website solutions provide endless customization options with a focus on scalability and security.",
    },
    {
      Icon: FaCogs,
      title: 'Website Maintenance & Support',
      description: 'Keep your website updated and secure with ongoing maintenance. We offer comprehensive website support to ensure your site stays current, responsive, and secure with regular updates, backups, and troubleshooting.',
    },
    {
      Icon: FaCloud,
      title: 'Website Redesign & Revamp',
      description: 'Is your website feeling outdated? Let us help you bring a fresh look and better functionality to your digital presence. Our redesign services are focused on improving both aesthetics and performance, making sure your website is ready for the future.',
    },
  ];

const Stat: React.FC = () => {
  return (
    <ServicesCommon
    title="Crafting Unique, High-Impact Websites that Drive Your Success."
    description=" At MCANSEY, we specialize in creating visually stunning, fully functional websites that meet the unique needs of your business. With a focus on user experience, mobile responsiveness, and SEO-friendly structures, our websites are built to not only look good but perform well across all devices and platforms. Whether you're looking for a simple informational site or a complex eCommerce platform, our team of skilled designers and developers ensures every detail is tailored to your goals, offering seamless and innovative web solutions.">
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

export default Stat;

