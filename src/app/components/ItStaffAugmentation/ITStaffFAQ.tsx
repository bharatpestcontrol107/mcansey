"use client"
import React from 'react';
import CommonFAQ from '../common/CommonFAQ';

const faqs = [
  {
    question: "What is the process for hiring developers through MCANSEY?",
    answer: (
      <span>
        We analyze your requirements, shortlist candidates , arrange interviews with you, and outsource the selected developers seamlessly.
      </span>
    ),
  },
  {
    question: "What technologies and skillsets do your developers specialize in?",
    answer: (
      <span>
        Our developers specialize in frontend, backend, mobile app, cloud, AI, big data, DevOps, and more, covering all major tech stacks like React, Node.js, Python, AWS, and Angular.
      </span>
    ),
  },
  {
    question: "Can I hire developers on a full-time, part-time, or project basis?",
    answer: (
      <span>
        Yes, we offer flexible hiring models to suit your needs, including full-time but on our payroll & remote, short term contract period but minimum 6 months and project-based engagements.
      </span>
    ),
  },
  {
    question: "Are the developers experienced and certified?",
    answer: (
      <span>
        All our developers are thoroughly vetted, experienced, and certified in their respective domains and also it depends on your requirements because sometimes a client is looking for 1 years of experience candidates.
      </span>
    ),
  },
  {
    question: "How do you ensure the quality of hired developers?",
    answer: (
      <span>
       We conduct a rigorous screening process, including technical tests and interviews, to ensure only the best talent is selected.



      </span>
    ),
  },
  {
    question: "Can I directly manage the hired developers?",
    answer: (
      <span>
        Yes, you can directly manage the developers, or we can provide a project manager to facilitate smooth collaboration.

      </span>
    ),
  },
  {
    question: "What happens if I’m not satisfied with the hired developer?",
    answer: (
      <span>
       We offer a replacement policy to ensure you’re satisfied with the talent working on your project.

      </span>
    ),
  },
  {
    question: " How quickly can I onboard developers for my project?",
    answer: (
      <span>
       Depending on your requirements, developers can typically be onboarded within 1-2 weeks.

      </span>
    ),
  },
  {
    question: " Do you offer developers skilled in emerging technologies like AI and blockchain?",
    answer: (
      <span>
      Yes, we provide developers skilled in cutting-edge technologies such as AI, blockchain, IoT, and more.
      </span>
    ),
  },
  {
    question: " What industries do your developers have experience in?",
    answer: (
      <span>
       Our developers have experience across various industries, including e-commerce, healthcare, finance, education, and manufacturing.
      </span>
    ),
  },
];
const ITStaffFAQ = () => {
  return <CommonFAQ  faqs={faqs} />;
};

export default ITStaffFAQ;