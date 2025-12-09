"use client"
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="relative bg-[#f1f2fd] rounded-xl p-6 m-6 border-zinc-100 border-2">
      <div className="flex justify-between items-center cursor-pointer" onClick={onClick}>
        <h3 className="text-sm xl:text-base font-medium pr-8 ">{question}</h3>
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
            <p className="mt-4 text-xs xl:text-sm text-gray-600 whitespace-pre-line">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface FAQProps {
  faqs: { question: string; answer: React.ReactNode }[];
}

const CommonFAQ: React.FC<FAQProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const leftColumnFaqs = faqs.filter((_, index) => index % 2 === 0);
  const rightColumnFaqs = faqs.filter((_, index) => index % 2 === 1);

  return (
    <div className="xl:w-[90%] mx-auto xl:p-6">
      <h2 className="text-xl text-center sm:text-2xl lg:text-2xl font-bold mb-4">
        Frequently Asked Questions
      </h2>
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
};

export default CommonFAQ;
