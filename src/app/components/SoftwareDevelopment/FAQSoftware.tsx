"use client"
import React from 'react';
import CommonFAQ from '../common/CommonFAQ';

const faqs = [
  {
    question: "What is the process of software development?",
    answer: (
      <span>
        The process typically includes requirements gathering, system design, development, testing, deployment, and maintenance.
      </span>
    ),
  },
  {
    question: "How long does it take to develop software?",
    answer: (
      <span>
        The timeline depends on the complexity of the project, but we aim to deliver high-quality software as efficiently as possible.
      </span>
    ),
  },
  {
    question: "What technologies do you use for software development?",
    answer: (
      <span>
        We use the latest technologies, including Java, Python, Node.js, React, Angular, and more, based on the project requirements.
      </span>
    ),
  },
  {
    question: "How do you ensure the software is secure?",
    answer: (
      <span>
        We follow best practices for security, including encryption, secure coding techniques, and regular security audits.
      </span>
    ),
  },
  {
    question: "Do you offer ongoing support after software deployment?",
    answer: (
      <span>
       Yes, we provide ongoing support and maintenance to ensure your software stays up-to-date and performs optimally.


      </span>
    ),
  },
  {
    question: "What is custom software development?",
    answer: (
      <span>
        Custom software development involves creating software solutions tailored specifically to your business needs, rather than using off-the-shelf solutions.

      </span>
    ),
  },
  {
    question: "Can you integrate third-party systems with the software?",
    answer: (
      <span>
       Yes, we can integrate APIs and third-party systems to enhance the functionality of your software.
      </span>
    ),
  },
  {
    question: " What is SaaS development?",
    answer: (
      <span>
       SaaS (Software as a Service) development involves creating cloud-based software that can be accessed and used via the internet, offering scalability and flexibility.

      </span>
    ),
  },
  {
    question: " What is the difference between ERP and CRM software?",
    answer: (
      <span>
      ERP (Enterprise Resource Planning) integrates core business processes, while CRM (Customer Relationship Management) focuses on managing customer interactions and relationships.
      </span>
    ),
  },
  {
    question: "  Can you modernize legacy software?",
    answer: (
      <span>
       Yes, we specialize in upgrading and modernizing legacy systems to improve performance, security, and compatibility with modern technologies.




      </span>
    ),
  },
];
const FAQSoftware = () => {
  return <CommonFAQ  faqs={faqs} />;
};

export default FAQSoftware;