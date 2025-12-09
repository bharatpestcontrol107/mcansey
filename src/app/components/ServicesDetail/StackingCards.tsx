"use client"
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Settings } from 'lucide-react';
const StackingCardsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const textRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const cards = cardsRef.current.filter(Boolean);
    const spacer = window.innerWidth < 768 ? 20 : 30; 
    
    const totalHeight = cards.length * spacer + 400;
   
    if (sectionRef.current) {
      sectionRef.current.style.paddingBottom = `${totalHeight}px`;
    }
    const setupScrollTriggers = () => {
      
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      
      const mobileStart = textRef.current ? textRef.current.offsetHeight : 0;
      
      ScrollTrigger.create({
      trigger: textRef.current,
      start: window.innerWidth < 768 ? `top+=${mobileStart}px` : "top 10",
      endTrigger: sectionRef.current,
      end: `bottom bottom-=${window.innerHeight / 2}`,
      pin: true,
      pinSpacing: false,
      markers: false,
      invalidateOnRefresh: true
      });
     
      cards.forEach((card, index) => {
      ScrollTrigger.create({
        trigger: card,
        start: `top-=${index * spacer} top+=10px`,
        endTrigger: sectionRef.current,
        end: `bottom top+=${totalHeight}`,
        pin: true,
        pinSpacing: false,
        markers: false,
        id: `card-pin-${index}`,
        invalidateOnRefresh: true
      });
      });
    };
   
    setupScrollTriggers();
    
    const handleResize = () => {
      setupScrollTriggers();
    };
    window.addEventListener('resize', handleResize);
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const cardData = [
    {
      title: "Understanding Business Requirements",
      content: "As a leading cloud ERP solutions company, we start by understanding your current business requirements and future goals. This vital first step enables us to develop a deep understanding of what exactly you expect from the design and deployment of the ERP software solution. "
    },
    {
      title: "Detailed Planning and Analysis",
      content: "Our team conducts a thorough analysis of your business processes and workflows. We identify areas for improvement and create a detailed plan that outlines the steps needed to achieve your goals. This phase ensures that we have a clear roadmap for the development process."
    },
    {
      title: "Custom ERP Development",
      content: "We leverage our expertise in ERP software development to create a custom solution tailored to your business needs. Our developers use the latest technologies and best practices to ensure that your ERP system is robust, scalable, and secure."
    },
    {
      title: "Integration with Existing Systems",
      content: "We ensure seamless integration of the new ERP system with your existing software and hardware infrastructure. This minimizes disruptions to your business operations and ensures a smooth transition to the new system."
    },
    {
      title: "User Training and Support",
      content: "Our team provides comprehensive training to your staff to ensure they are comfortable using the new ERP system. We also offer ongoing support to address any issues that may arise and to help you get the most out of your investment."
    },
    {
      title: "Continuous Improvement",
      content: "We continuously monitor and optimize the ERP system's performance, implementing updates and improvements based on your feedback and evolving business needs to ensure long-term success and ROI."
    },
  ];
  return (
    <section
      ref={sectionRef}
      className="relative px-4 md:px-8 bg-white text-black pt-5 min-h-screen "
    >
      <div className="flex flex-col md:flex-row gap-8  xl:w-[85%] mx-auto">
        <div
          className="w-full md:w-1/2 lg:w-2/5 md:sticky top-0"
          ref={textRef}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            Experience Our Best-In-Class ERP Software Development Process
          </h2>
          <p className="text-base md:text-lg mb-4">
            Our team is dedicated to ensuring that the final product meets the needs of your business, and we pride ourselves on our ability to communicate effectively with stakeholders throughout the <span className="text-blue-400">agile development process</span>. With our expertise and attention to detail, we guarantee that your ERP software is delivered on time and with the desired performance and functionalities.
          </p>
        </div>
        <div className="w-full md:w-1/2 lg:w-3/5">
          <div className="space-y-4 md:space-y-8">
            {cardData.map((card, index) => (
              <div
                key={index}
                ref={el => { cardsRef.current[index] = el; }}
                className="bg-gray-800 rounded-2xl p-4 md:p-5 shadow-lg w-full md:w-[calc(100%-2rem)] lg:w-[calc(100%-4rem)] flex flex-col justify-between border-white border-2 min-h-[200px] md:min-h-[250px]"
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="bg-blue-500 p-2 rounded-lg shrink-0">
                    <Settings className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">
                      {card.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-300">
                      {card.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default StackingCardsSection;