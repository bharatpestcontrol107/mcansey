"use client"
import React from 'react';

import CommonFAQ from '../common/CommonFAQ';

const faqs = [
  {
    question: "What is cloud computing? ",
    answer: (
      <span>
     Cloud computing is the delivery of computing services like storage, processing, and applications over the internet, allowing businesses to access resources on-demand without needing physical infrastructure.
      </span>
    ),
  },
  {
    question: "Why should I move to the cloud?",
    answer: (
      <span>
        The cloud offers flexibility, scalability, cost savings, improved collaboration, and enhanced security, making it a smart choice for businesses looking to modernize their infrastructure.
      </span>
    ),
  },
  {
    question: "What is the difference between private, public, and hybrid clouds?",
    answer: (
      <span>
        A public cloud is shared with other businesses, private cloud is dedicated to your business, and hybrid cloud combines both, allowing for more control and flexibility.
      </span>
    ),
  },
  {
    question: "How secure is the cloud?",
    answer: (
      <span>
       Cloud providers implement robust security measures like encryption, firewalls, and multi-factor authentication to ensure data protection. MCANSEY also focuses on additional layers of security for added protection.
      </span>
    ),
  },
  {
    question: "How long does the cloud migration process take? ",
    answer: (
      <span>
       The time required for cloud migration depends on the complexity of your systems and data. We work closely with you to minimize downtime and ensure a smooth transition.
      </span>
    ),
  },
  {
    question: "Do I need to manage the cloud infrastructure myself?",
    answer: (
      <span>
       No, MCANSEY offers full cloud management services, ensuring that your infrastructure is optimized, secure, and running efficiently, so you can focus on your core business.
      </span>
    ),
  },
  {
    question: "Can cloud solutions scale with my business?",
    answer: (
      <span>
      Yes, cloud services are highly scalable, meaning you can increase or decrease resources based on your business’s needs at any given time.
      </span>
    ),
  },
  {
    question: "How can I save costs using cloud services?",
    answer: (
      <span>
       Cloud services allow for better resource management and reduced hardware costs, providing you with the flexibility to pay only for what you use and avoid unnecessary expenses.
      </span>
    ),
  },
  {
    question: " What happens if there’s an issue with my cloud system?",
    answer: (
      <span>
     Our support team is available 24/7 to resolve any issues, ensuring that your cloud systems continue to operate smoothly without interruptions.
      </span>
    ),
  },
  {
    question: "Is cloud computing suitable for small businesses?",
    answer: (
      <span>
      Absolutely. Cloud computing provides small businesses with access to enterprise-level resources and tools without the need for significant upfront investment, making it an ideal solution for growth and scalability.
      </span>
    ),
  },
];

const FAQCloud = () => {
  return <CommonFAQ  faqs={faqs} />;
};

export default FAQCloud;
