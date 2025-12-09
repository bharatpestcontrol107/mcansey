import React from 'react';
import ServiceCardCommon from '../common/ServiceCardCommon';
const services = [
  {
    image: '/IndustriesModal/Public/software.webp',
    title: 'Custom Software Engineering',
    description:
      'Transform your ideas into a market-ready product, delivered on schedule and within your budget. Our expert team ensures your vision becomes a reality with a focus on quality, efficiency, and scalability.',
    link: '/contact-us',
    linkText: 'More Info →',
  },
  {
    image: '/IndustriesModal/Public/mcansey-smart-team.webp',
    title: 'Smart Teams',
    description:
      'Hire dedicated full-stack developers to speed up your project development and fill skill gaps efficiently. Our experts bring a versatile range of technologies to ensure your project’s success from start to finish.',
    link: '/contact-us',
    linkText: 'More Info →',
  },
  {
    image: '/IndustriesModal/Public/mcansey-digital-transformation.webp',
    title: 'Digital Transformation',
    description:
      'Adopt a digital-first business strategy to enhance your operational efficiency, improve customer experience (CX), and drive revenue growth. Leverage the latest technologies to stay ahead of market trends and deliver seamless, impactful solutions to your customers.',
    link: '/contact-us',
    linkText: 'More Info →',
  },
  
];

const PublicSectorServices: React.FC = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16">
      <h2 className="text-xl lg:text-2xl font-bold text-center text-gray-800 mb-8 capitalize">
      Services That Set You Up for Success
      </h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:max-w-[85%] mx-auto">
        {services.map((service, index) => (
          <ServiceCardCommon key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default PublicSectorServices;
