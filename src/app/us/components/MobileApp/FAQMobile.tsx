"use client"
import React from 'react';
import CommonFAQ from '../common/CommonFAQ';
const faqs = [
  {
    question: "What is mobile app development?",
    answer: (
      <span>
        Mobile app development involves creating software applications that run on mobile devices like smartphones and tablets, designed to serve specific functions for users.

      </span>
    ),
  },
  {
    question: "How long does it take to develop a mobile app?",
    answer: (
      <span>
        The time to develop an app depends on its complexity, functionality, and platform. Typically, it can take anywhere from a few weeks to several months.



      
      </span>
    ),
  },
  {
    question: "What is the difference between native and cross-platform apps?",
    answer: (
      <span>
        Native apps are developed specifically for one platform (iOS or Android), while cross-platform apps are built to run on multiple platforms with a single codebase.


      </span>
    ),
  },
  {
    question: "Do I need to develop separate apps for iOS and Android?",
    answer: (
      <span>
       Not necessarily. Cross-platform development allows you to create an app for both iOS and Android, saving time and cost.

      </span>
    ),
  },
  {
    question: "How much does mobile app development cost?",
    answer: (
      <span>
       The cost depends on factors like the app’s complexity, features, design requirements, and platform(s). We offer custom pricing based on your project needs.


      </span>
    ),
  },
  {
    question: "What is app store optimization (ASO)?",
    answer: (
      <span>
        ASO is the process of optimizing your app’s visibility in the app store by improving keywords, app descriptions, reviews, and other factors to increase downloads.

      </span>
    ),
  },
  {
    question: "Can you help me update and maintain my existing app?",
    answer: (
      <span>
      Yes, we provide ongoing maintenance and updates for your app, including bug fixes, security patches, and new feature integrations.
      </span>
    ),
  },
  {
    question: " What should I consider when planning a mobile app?",
    answer: (
      <span>
       You should consider your target audience, the app’s core functionality, platform choice (iOS, Android, or both), design, and how it aligns with your business goals.



      </span>
    ),
  },
  {
    question: " How do you ensure the security of my app?",
    answer: (
      <span>
       We implement best practices for app security, including encryption, secure APIs, and data protection measures to safeguard user data and ensure compliance with regulations.




      </span>
    ),
  },
  {
    question: "  Will my app be scalable in the future?",
    answer: (
      <span>
       Yes, we build scalable apps that can handle growing user bases and new features as your business evolves.




      </span>
    ),
  },
];
const FAQMobile = () => {
  return <CommonFAQ  faqs={faqs} />;
};

export default FAQMobile;