'use client'
import React from 'react';

import { ArrowRight, BarChart, FileText, Users } from 'lucide-react';
import SliderLayout from '../common/SliderLayout';


 


const Customsection: React.FC = () => {

  return (
    <>
      
      <div className="w-full bg-black text-white">
  <div className="xl:w-[100%] mx-auto px-4 xl:px-0"> {/* Full width, left-aligned container */}
    <SliderLayout title="Why Choose MCANSEY as Your Website Design Company" 
    description="At MCANSEY IT Services & Consulting Pvt Ltd, we don’t just build websites—we craft digital experiences that drive results. Our approach to website design is centered around innovation, functionality, and your business success. Here’s why businesses trust us with their website design needs:"
      cards={[
        {
          icon: <Users className="w-8 h-8" />,
          title: 'Tailored Solutions for Your Business',
          description:
            'Every business is unique, and so are its digital needs. We work closely with you to understand your goals, audience, and vision. Whether you need a simple brochure site or a sophisticated eCommerce platform, our team delivers a solution that aligns with your objectives, ensuring your website is built for success.',
        },
        {
          icon: <FileText className="w-8 h-8" />,
          title: ' Expertise in Modern Technologies',
          description:
            'Our team stays ahead of the curve, using the latest technologies and frameworks to build responsive, fast, and user-friendly websites. From custom development and CMS-based platforms like WordPress and Shopify to progressive web apps (PWA), we offer solutions that meet the highest industry standards.',
        },
        {
          icon: <BarChart className="w-8 h-8" />,
          title: 'End-to-End Web Development',
          description:
            'From initial concept and design to development, testing, and post-launch support, we offer a full range of services under one roof. Our in-house team of designers, developers, and content strategists work together to deliver a seamless website that not only looks good but performs excellently.',
        },
        {
          icon: <BarChart className="w-8 h-8" />,
          title: 'Focus on User Experience (UX)',
          description:
            'We believe that a website should not only look beautiful but also provide an intuitive, engaging, and smooth user experience. Our design process prioritizes usability, ensuring your visitors have an enjoyable time navigating your site, leading to higher engagement and conversions.',
        },
        {
            icon: <BarChart className="w-8 h-8" />,
            title: 'Mobile-First Approach',
            description:
              'With mobile traffic making up a large portion of internet users, we ensure that your website is fully responsive and optimized for all devices. Whether on smartphones, tablets, or desktops, your site will look great and function seamlessly across all screen sizes.',
          },
          {
            icon: <BarChart className="w-8 h-8" />,
            title: 'Performance Optimization',
            description:
              'A slow website can hurt both user experience and SEO. Our websites are optimized for speed, ensuring that they load quickly, perform well, and provide a seamless experience. We use best practices for performance, ensuring your site stays fast even as it scales.',
          },
          {
            icon: <BarChart className="w-8 h-8" />,
            title: 'Ongoing Support and Maintenance',
            description:
              "'We don't just walk away after launch. At MCANSEY, we offer ongoing maintenance and support to ensure your website stays updated, secure, and aligned with your evolving business needs. From content updates to security patches, we’re here to keep your site in top shape.'",
          },
          {
            icon: <BarChart className="w-8 h-8" />,
            title: 'Proven Track Record',
            description:
              'With years of experience in the industry and a portfolio of successful projects across various sectors, we have the expertise and credibility to deliver top-tier websites. Our satisfied clients range from startups to established enterprises, all benefiting from our creative designs and technical expertise.',
          },
          {
            icon: <BarChart className="w-8 h-8" />,
            title: 'SEO-Friendly Design',
            description:
              'A great website is useless if no one can find it. That’s why every website we design is built with SEO in mind, ensuring that your site is visible to search engines and ranks well for relevant keywords, driving organic traffic to your business.',
          },
          {
            icon: <BarChart className="w-8 h-8" />,
            title: 'Transparent and Collaborative Process',
            description:
              'We believe in a collaborative approach, keeping you involved at every stage of the project. From initial planning to final review, we ensure that your vision is fully realized while maintaining complete transparency on timelines, costs, and progress.',
          },
      ]}
    />
  </div>
</div>

    </>
  );
}

export default Customsection;
