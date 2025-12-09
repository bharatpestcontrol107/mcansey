"use client"
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
const faqs = [
  {
    question: "What services does MCANSEY IT Services & Consulting Pvt Ltd provide?",
    answer: (
      <span>
        We offer a comprehensive range of IT services, including software development, mobile app development, website design, cloud solutions, digital marketing, and consulting for digital transformation.
      </span>
    ),
  },
  {
    question: "Which industries do you specialize in?",
    answer: (
      <span>
        We work with clients across diverse sectors such as Fintech, Manufacturing, Healthcare, Retail, Education, and more. Our tailored solutions help companies scale effectively within their unique industry requirements.
      
      </span>
    ),
  },
  {
    question: "How does your team approach new projects?",
    answer: (
      <span>
        We begin with an in-depth consultation to understand your goals, followed by strategy and planning. Our experts then design and develop a solution that’s tailored to your needs, ensuring seamless execution and continuous support.
      </span>
    ),
  },
  {
    question: "Do you provide end-to-end digital transformation solutions?",
    answer: (
      <span>
        Yes, our team offers complete digital transformation services, from initial ideation and system integration to deployment, scaling, and continuous optimization to keep your business at the forefront of technology.
      </span>
    ),
  },
  {
    question: "Can you help us migrate our existing systems to the cloud?",
    answer: (
      <span>
        Absolutely. We provide cloud migration and managed cloud services to ensure a smooth and secure transition of your systems, enhancing flexibility and reducing overhead costs.
      </span>
    ),
  },
  {
    question: "How experienced is your team?",
    answer: (
      <span>
        Our team comprises seasoned industry experts with specialized skills across various domains. Our combined experience ensures we deliver the highest standard of solutions.
      </span>
    ),
  },
  {
    question: "How do I get started with a project?",
    answer: (
      <span>
        You can start by reaching out to us through our Contact Us form or calling our team directly. We’ll set up an initial consultation to discuss your project requirements and offer tailored recommendations.
      </span>
    ),
  },
  {
    question: "What sets MCANSEY IT Services & Consulting Pvt Ltd apart from other IT service providers?",
    answer: (
      <span>
       Our approach focuses on client satisfaction, adaptability, and innovation. We’re committed to building long-term partnerships, providing consistent support, and delivering solutions that grow with your business.

      </span>
    ),
  },
];
interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}
const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
    return (
      <div className="relative bg-[#f1f2fd] rounded-xl p-3 xl:p-6 m-6 border-zinc-100 border-2">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={onClick}
        >
          <h3 className="text-sm  font-medium pr-8 ">{question}</h3>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute right-6 top-6"
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="mt-4 text-xs md:text-sm text-gray-600 whitespace-pre-line">{answer}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };
  export default function FAQ() {
      const [openIndex, setOpenIndex] = React.useState<number | null>(null);
      const leftColumnFaqs = faqs.filter((_, index) => index % 2 === 0);
      const rightColumnFaqs = faqs.filter((_, index) => index % 2 === 1);
      return (
          <div className="xl:w-[90%] mx-auto xl:p-6">
            <h1 className="text-xl text-center sm:text-2xl lg:text-2xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 p-3">
              
              <div>
                {leftColumnFaqs.map((faq, index) => (
                  <FAQItem
                    key={index * 2}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === index * 2}
                    onClick={() => setOpenIndex(openIndex === index * 2 ? null : index * 2)}
                  />
                ))}
              </div>
             
              <div>
                {rightColumnFaqs.map((faq, index) => (
                  <FAQItem
                    key={index * 2 + 1}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === index * 2 + 1}
                    onClick={() => setOpenIndex(openIndex === index * 2 + 1 ? null : index * 2 + 1)}
                  />
                ))}
              </div>
            </div>
          </div>
      );
  }