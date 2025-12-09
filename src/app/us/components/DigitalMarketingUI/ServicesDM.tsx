
'use client';
import React from 'react';
import ServiceCard from '../Home/ServiceCard';
import { FaMobileAlt, FaCode, FaSync, FaLightbulb, FaServer, FaCogs, FaCloud } from 'react-icons/fa';
import ServicesCommon from '../common/ServicesCommon';



const services = [
    {
      Icon: FaMobileAlt,
      title: 'Search Engine Optimization (SEO):',
      description: "'We improve your website’s visibility on search engines through on-page and off-page optimization, keyword research, content optimization, and link-building strategies, ensuring higher search rankings and more organic traffic.'",
    },
    {
      Icon: FaCode,
      title: ' Pay-Per-Click (PPC) Advertising:',
      description: 'Our PPC services help you achieve immediate visibility with targeted ads on platforms like Google Ads, Bing, and social media. We design cost-effective campaigns that drive high-quality traffic and maximize ROI.',
    },
    {
      Icon: FaSync,
      title: 'Social Media Marketing:',
      description: 'We build and manage your brand’s presence across various social media platforms like Facebook, Instagram, Twitter, and LinkedIn. Our strategies help you engage with your audience, create compelling content, and drive interactions.',
    },
    {
      Icon: FaLightbulb,
      title: ' Content Marketing:',
      description: 'Our content marketing services focus on creating valuable and relevant content, including blogs, videos, infographics, and ebooks, to engage and educate your audience, driving conversions and building trust.',
    },
    {
      Icon: FaServer,
      title: 'Email Marketing:',
      description: "We craft targeted email campaigns that resonate with your audience, boosting engagement, customer retention, and conversions. We focus on personalized communication to maximize the impact of each email.",
    },
    {
      Icon: FaCogs,
      title: 'Online Reputation Management:',
      description: 'We help manage and improve your online reputation by monitoring reviews, handling negative feedback, and promoting positive customer experiences to build trust and credibility.',
    },
    {
      Icon: FaCloud,
      title: 'Influencer Marketing:',
      description: 'Our influencer marketing campaigns connect your brand with relevant influencers to increase brand awareness, credibility, and trust among their followers.',
    },
    {
      Icon: FaCloud,
      title: 'Affiliate Marketing:',
      description: 'We develop affiliate programs that allow you to partner with affiliates to promote your products or services, paying them based on performance to drive traffic and increase sales.',
    },
    {
      Icon: FaCloud,
      title: 'Conversion Rate Optimization (CRO):',
      description: 'We analyze and optimize your website’s design and user experience to convert more visitors into paying customers, improving your website’s performance and boosting your bottom line.',
    },
    {
      Icon: FaCloud,
      title: 'Video Marketing:',
      description: 'We create and promote engaging video content that drives awareness, education, and conversions, using platforms like YouTube and social media to reach a broader audience.',
    },
  ];

const ServicesDM: React.FC = () => {
  return (
    <ServicesCommon
    title="Your Partner for Innovative Digital Marketing Strategies"
    description=" At MCANSEY, we specialize in delivering tailored digital marketing solutions that help businesses connect with their target audience, boost online visibility, and drive conversions. Our data-driven approach leverages the latest tools, strategies, and platforms to create custom campaigns that align with your business goals. Whether you are looking to improve your search engine rankings, build brand awareness, or convert leads into customers, MCANSEY has the expertise and experience to take your business to new heights in the digital world.">
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

export default ServicesDM;

