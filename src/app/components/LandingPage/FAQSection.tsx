'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { Fredoka, Hanken_Grotesk } from 'next/font/google';

const pop = Hanken_Grotesk({
    weight: '700',
    subsets: ['latin'],
    display: 'swap',
})
const Fre = Fredoka({
    weight: '600',
    subsets: ['latin'],
    display: 'swap',
})

const faqs = [
  {
    question: 'What types of websites do you design?',
    answer: 'We design all types of websites, including business websites, e-commerce platforms, portfolio sites, blogs, and custom web applications. Our goal is to create a website that perfectly matches your needs and objectives.',
  },
  {
    question: 'How long does it take to design and develop a website?',
    answer: 'The timeline depends on the complexity and scope of the project. On average, a standard business website can take 4–6 weeks, while larger or more complex projects may require more time. We’ll provide a clear timeline during the initial consultation.',
  },
  {
    question: ' Will my website be mobile-friendly?',
    answer: 'Absolutely! We design responsive websites that adapt seamlessly to all devices, including desktops, tablets, and smartphones, ensuring an optimal user experience for your audience.',
  },
  {
    question: 'Can I update the website content myself after it’s launched?',
    answer: 'Yes, we design websites with user-friendly Content Management Systems (CMS), such as WordPress or custom solutions, so you can easily update text, images, and other content without technical expertise.',
  },
  {
    question: 'Do you offer website maintenance and support?',
    answer: 'Yes, we provide ongoing maintenance and support services to keep your website secure, updated, and performing at its best. This includes updates, backups, and troubleshooting.',
  },
  {
    question: 'How much does a website design project cost?',
    answer: 'The cost varies depending on the project’s scope, features, and complexity. We offer transparent pricing and will provide a detailed quote after understanding your requirements.',
  },
  {
    question: 'Will my website be optimized for search engines (SEO)?',
    answer: 'Yes, all our websites are designed with basic SEO best practices, including fast loading times, mobile responsiveness, and optimized code. For advanced SEO strategies, we offer additional services tailored to your needs.',
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative w-full overflow-hidden py-24 bg-[#0B314E]" id='faq'>
      {/* Background Color and Image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-blend-overlay"
        style={{
          backgroundImage: `url('/LandingPage/combined-bg.png')`,
          backgroundBlendMode: 'multiply',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Grid Layout for Large Screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 2xl:gap-0 items-center md:items-start">
          {/* Left Column - Text Section */}
            <div className="mb-12 lg:mb-0 text-center lg:text-left">
            <button className="mb-4 rounded-full bg-white px-6 py-1 text-sm font-medium text-red-600">
              FAQ's
            </button>
            <h2 className={`text-2xl  font-bold text-nowrap px-1 tracking-wide text-white md:text-3xl 2xl:text-4xl `} style={{fontFamily:'Clash Grotesk', fontWeight:'700'}}>
              Frequently Asked <br className='hidden md:flex' /> Questions
            </h2>
            <button className={`mt-4 text-sm border-b-4  rounded-full uppercase tracking-[1px] bg-[#FABD21] hover:border-b-3 px-6 py-2 text-black hover:bg-yellow-600 transition ${Fre.className}`}>
              Book a Call
            </button>
            </div>

          {/* Right Column - FAQ List */}
          <div className="flex flex-col  md:gap-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`mb-4 rounded-lg shadow-md transition-colors duration-300 ${
                  activeIndex === index ? 'bg-white ' : 'bg-[#D1B7FF] text-black'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-4 py-3  focus:outline-none"
                >
                  <span className="flex items-center  tracking-wide justify-between font-medium" style={{fontFamily:'Clash Grotesk', }}>
                    {faq.question}
                    <span className="ml-2">{activeIndex === index ? <BiChevronUp /> : <BiChevronDown />}</span>
                  </span>
                </button>
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: activeIndex === index ? 'auto' : 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-4 py-3 text-gray-600" style={{fontFamily:'Clash Grotesk', fontWeight:'400'}}>
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Image */}
      <div className="absolute bottom-0 left-0 transform translate-y-1/2 sm:translate-y-0 lg:left-[-50px] w-44 sm:w-44 lg:w-64">
        <Image
          src="/LandingPage/layer.png"
          alt="Decorative Element"
          width={256}
          height={256}
          className="object-contain"
        />
      </div>

    </section>
  );
}
