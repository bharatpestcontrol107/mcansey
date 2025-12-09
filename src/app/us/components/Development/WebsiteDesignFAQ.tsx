"use client"
import React from 'react';
import CommonFAQ from '../common/CommonFAQ';
const faqs = [
  {
    question: "What is the difference between website design and website development?",
    answer: (
      <span>
        Website design refers to the visual aspects of a website, such as layout, colors, typography, and user interface, while website development involves the technical side, such as coding, building the functionality, and ensuring the site works properly.
      </span>
    ),
  },
  {
    question: "How long does it take to build a website?",
    answer: (
      <span>
        The time it takes to build a website depends on its complexity and features. A simple website may take a few weeks, while more complex sites, such as eCommerce platforms or custom web applications, can take a few months. We provide a detailed timeline after assessing your project’s requirements.

      
      </span>
    ),
  },
  {
    question: "Do I need to provide the content for my website?",
    answer: (
      <span>
        Yes, content is an essential part of any website. We recommend providing text, images, videos, and any other multimedia that will be featured on your site. However, if you need assistance, we offer content creation and copywriting services.

      </span>
    ),
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: (
      <span>
        Yes, all websites we design are fully responsive, meaning they will automatically adjust to look great on mobile phones, tablets, and desktops, ensuring a seamless experience across all devices.

      </span>
    ),
  },
  {
    question: "Can I update my website content after it’s live?",
    answer: (
      <span>
       Absolutely! If you choose a CMS (like WordPress or Shopify), or we can build separate custom CMS for you if you go with custom technology and then you will be able to easily update your website content at any time. We also provide training on how to manage your site’s content, or we can handle updates for you.

      </span>
    ),
  },
  {
    question: "Do you provide SEO services for my website?",
    answer: (
      <span>
        Yes, we offer SEO services to optimize your website for search engines. We ensure that your website follows best practices for SEO, such as keyword optimization, mobile responsiveness, fast loading speeds, and proper meta tags to enhance visibility.
      </span>
    ),
  },
  {
    question: "What happens if my website breaks or has issues after launch?",
    answer: (
      <span>
       We offer post-launch support and maintenance packages to ensure that your website remains up-to-date and fully functional. If any issues arise, our team is ready to assist with troubleshooting, updates, and repairs.
      </span>
    ),
  },
  {
    question: " Can you redesign my existing website?",
    answer: (
      <span>
       Yes, we specialize in website redesigns. We analyze your current website’s strengths and weaknesses, then provide a fresh, modern design that enhances user experience and aligns with your business goals.


      </span>
    ),
  },
  {
    question: " Will my website be secure?",
    answer: (
      <span>
       We take website security seriously. Our development process includes implementing security best practices, such as SSL certificates, firewalls, and regular security updates, to protect your website from cyber threats.



      </span>
    ),
  },
  {
    question: "  How much does a website cost?",
    answer: (
      <span>
       The cost of a website depends on its complexity, features, and customization needs. We provide a customized quote based on your project requirements. Generally, a basic website may cost less, while a more complex, feature-rich site (like an eCommerce platform) will be more expensive.


      </span>
    ),
  },
];
const WebsiteDesignFAQ = () => {
  return <CommonFAQ  faqs={faqs} />;
};

export default WebsiteDesignFAQ;