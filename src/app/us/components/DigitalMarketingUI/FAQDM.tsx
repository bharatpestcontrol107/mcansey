"use client"
import React from 'react';
import CommonFAQ from '../common/CommonFAQ';
const faqs = [
  {
    question: "What is digital marketing? ",
    answer: (
      <span>
      Digital marketing encompasses all marketing efforts that use the internet or electronic devices, including SEO, PPC, content marketing, social media, and email marketing, to promote products and services.





      </span>
    ),
  },
  {
    question: "Why is digital marketing important for my business?",
    answer: (
      <span>
        Digital marketing allows you to reach a larger audience, engage with customers more effectively, and drive measurable results that help grow your business.


      </span>
    ),
  },
  {
    question: "How long does it take to see results from digital marketing?",
    answer: (
      <span>
        Results vary depending on the type of campaign and your goals, but with ongoing optimization, you should see improvements within a few months, especially in areas like SEO and content marketing.




      </span>
    ),
  },
  {
    question: "What’s the difference between SEO and PPC? ",
    answer: (
      <span>
       SEO focuses on improving organic search rankings, while PPC involves paying for ads to appear on search engines and social media platforms. Both methods are crucial for a comprehensive digital marketing strategy.



      </span>
    ),
  },
  {
    question: "Do you handle social media marketing? ",
    answer: (
      <span>
       Yes, we manage your brand’s presence across major social media platforms, including content creation, community management, and paid advertising to grow your online presence.





      </span>
    ),
  },
  {
    question: "What is content marketing?",
    answer: (
      <span>
       Content marketing involves creating and distributing valuable, relevant content to attract and engage your target audience, helping to build trust and drive conversions.




      </span>
    ),
  },
  {
    question: "Can you help improve my website’s conversion rate?",
    answer: (
      <span>
      Yes, we specialize in Conversion Rate Optimization (CRO), which involves analyzing and improving your website’s design, user experience, and content to convert more visitors into customers.



      </span>
    ),
  },
  {
    question: "How do you measure the success of digital marketing campaigns?",
    answer: (
      <span>
       We use key performance indicators (KPIs) like traffic, engagement, leads, and ROI to track the success of campaigns and optimize them for better performance.
      </span>
    ),
  },
  {
    question: " Do you offer email marketing services?",
    answer: (
      <span>
      Yes, we create targeted email campaigns designed to engage your audience, nurture leads, and increase conversions, with measurable results.

      </span>
    ),
  },
  {
    question: "  How do I know which digital marketing service is right for my business?",
    answer: (
      <span>
      We conduct a thorough consultation to understand your business goals and then recommend the best mix of services that will drive results and help achieve your objectives.
      </span>
    ),
  },
];
const FAQDM = () => {
  return <CommonFAQ faqs={faqs} />;
};

export default FAQDM;