"use client"
import React from 'react';
import CommonFAQ from '../common/CommonFAQ';

const faqs = [
    {
        question: "What is Adobe Experience Manager (AEM)?",
        answer: (
          <span>
            Adobe Experience Manager (AEM) is a comprehensive content management solution for building websites, mobile apps, and forms. It helps businesses manage their marketing content and assets, providing a seamless digital experience across various channels.
          </span>
        ),
      },
      {
        question: "Why should I choose AEM for my business?",
        answer: (
          <span>
            AEM offers robust features for content management, digital asset management, and personalized customer experiences. It integrates well with other Adobe products, providing a unified platform for managing your digital marketing efforts efficiently.
          </span>
        ),
      },
      {
        question: "How can AEM improve my website's performance?",
        answer: (
          <span>
            AEM optimizes your website's performance through efficient content delivery, responsive design, and scalability. It also offers tools for SEO, analytics, and personalization, ensuring your website meets the needs of your audience and performs well in search engines.
          </span>
        ),
      },
      {
        question: "What services do you offer as an AEM development company?",
        answer: (
          <span>
            We offer a range of services including AEM implementation, customization, migration, integration with other systems, and ongoing support and maintenance. Our team ensures that your AEM solution is tailored to your business needs and delivers optimal performance.
          </span>
        ),
      },
      {
        question: "How long does it take to implement AEM?",
        answer: (
          <span>
            The implementation time for AEM can vary depending on the complexity and scope of the project. Typically, it can take anywhere from a few weeks to several months. We work closely with our clients to ensure a smooth and timely implementation process.
          </span>
        ),
      },
      {
        question: "Can you migrate our existing website to AEM?",
        answer: (
          <span>
            Yes, we offer migration services to help you move your existing website to AEM. Our team ensures a seamless transition with minimal downtime, preserving your content and optimizing it for the new platform.
          </span>
        ),
      },
      {
        question: "Do you provide training for AEM users?",
        answer: (
          <span>
            Yes, we provide comprehensive training for your team to ensure they are proficient in using AEM. Our training covers content creation, asset management, workflow management, and other essential features of AEM.
          </span>
        ),
      },
      {
        question: "What kind of support do you offer after AEM implementation?",
        answer: (
          <span>
            We offer ongoing support and maintenance services to ensure your AEM solution continues to perform optimally. Our support includes troubleshooting, updates, performance optimization, and assistance with any issues that may arise.
          </span>
        ),
      },
];
const AEMOutSourcingFAQ = () => {
  return <CommonFAQ  faqs={faqs} />;
};

export default AEMOutSourcingFAQ;