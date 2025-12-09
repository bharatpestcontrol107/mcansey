
import React from 'react';
import ServiceCardCommon from '../common/ServiceCardCommon';



const services = [
  {
    image: '/IndustriesModal/Fintech/mcansey-fintech-1.jpg',
    title: 'Tailored Fintech Application Development',
    description:
      'We create comprehensive fintech solutions for both web and mobile platforms. Our team collaborates with you to thoroughly understand your challenges and deliver tailored solutions, covering architecture, design, and deployment. These solutions feature real-time data interactions, secure payment gateways, customized reporting, and advanced analytical models to meet your specific needs.',
    link: '/contact-us',
    linkText: 'More Info →',
  },
  {
    image: '/IndustriesModal/Fintech/mcansey-fintech-2.jpg',
    title: 'Custom Accounting Information Systems Development',
    description:
      'We develop custom cloud-based accounting information systems integrated with advanced business intelligence applications, ERP solutions, and remote generation modules. These systems are designed to efficiently collect, store, and process financial and accounting data, all while ensuring compliance with financial regulations and standards.',
    link: '/contact-us',
    linkText: 'More Info →',
  },
  {
    image: '/IndustriesModal/Fintech/mcansey-fintech-3.jpg',
    title: 'Insurance management software Solutions',
    description:
      'Our custom insurance software development services enable insurance automation that drives success and boosts productivity for insurance companies. We create intuitive insurance management systems seamlessly integrated with banking and credit institutions, allowing secure monitoring and reconciliation of accounts through our robust financial solutions.',
    link: '/contact-us',
    linkText: 'More Info →',
  },
  {
    image: '/IndustriesModal/Fintech/mcansey-fintech-6.jpg',
    title: 'Stock trading software',
    description:
      'Leverage our fintech software development services to build fast, reliable, and secure stock trading solutions. Empower your users to make informed investment decisions with advanced fundamental and technical analysis tools. Minimize trading delays with real-time market tracking, seamless stock trading, and rapid transaction processing capabilities.',
    link: '/contact-us',
    linkText: 'More Info →',
  },
  {
    image: '/IndustriesModal/Fintech/mcansey-fintech-5.jpg',
    title: 'Wealth management software',
    description:
      'Our wealth management software solutions are designed to help wealth managers streamline their entire business cycle within one integrated suite. From front office to back office, all critical information is readily accessible. Our services are fully customizable to meet the unique needs of different client segments, whether serving high-net-worth individuals or single/multi-family businesses.',
    link: '/contact-us',
    linkText: 'More Info →',
  },
  {
    image: '/IndustriesModal/Fintech/mcansey-fintech-4.jpg',
    title: 'Payment processing software',
    description:
      'Mcansey provides payment processing software development that enables seamless one-click payment transfers for customers online, while ensuring top-tier security. We create scalable payment solutions and offer tailored integrations with payment gateways. Enhance trust and security as your unique selling point with our expert financial software development services.',
    link: '/contact-us',
    linkText: 'More Info →',
  },
  
];

const FintechServices: React.FC = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16">
      <h2 className="text-xl lg:text-2xl font-bold text-center text-gray-800 mb-8 capitalize">
      Software development services we offer:
      </h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:max-w-[85%] mx-auto">
        {services.map((service, index) => (
          <ServiceCardCommon key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default FintechServices;
