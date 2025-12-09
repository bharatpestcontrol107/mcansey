import React from 'react';
import ServiceCardCommon from '../common/ServiceCardCommon';

const services = [
  {
    image: '/IndustriesModal/Industrial/mcaney-industry-1.webp',
    title: 'From Vision to Execution: Industrial Innovation Workshop',
    description:
      'Streamline workflows, enhance patient care, and ensure seamless integration with other 3rd party tools and platforms with tailored EMR/EHR software. We help you develop custom EHR/EMR solutions with personalized features, robust security, and intuitive designs that adapt to your healthcare facility’s evolving demands.',
    link: '/contact-us',
    linkText: 'More Info →',
  },
  {
    image: '/IndustriesModal/Industrial/mcaney-industry-2.webp',
    title: 'Smart Factory Solutions',
    description:
      'Transform your manufacturing operations with cutting-edge smart factory solutions, enabling seamless connectivity between machines, systems, and processes for enhanced productivity and efficiency.',
    link: '/contact-us',
    linkText: 'More Info →',
  },
  {
    image: '/IndustriesModal/Industrial/mcaney-industry-3.webp',
    title: 'IoT Integration for Industrial Automation',
    description:
      'Harness the power of IoT to automate industrial processes, monitor assets in real-time, and achieve higher precision in manufacturing workflows.',
    link: '/contact-us',
    linkText: 'More Info →',
  },
  {
    image: '/IndustriesModal/Industrial/mcaney-industry-4.webp',
    title: 'Predictive Maintenance and Analytics',
    description:
      'Reduce downtime and maintenance costs with AI-driven predictive analytics that identify potential equipment failures before they occur, ensuring uninterrupted operations.',
    link: '/contact-us',
    linkText: 'More Info →',
  },
  {
    image: '/IndustriesModal/Industrial/mcaney-industry-5.webp',
    title: 'Supply Chain Optimization and Management',
    description:
      'Optimize your supply chain with advanced software solutions that provide end-to-end visibility, reduce bottlenecks, and enhance logistics efficiency.',
    link: '/contact-us',
    linkText: 'More Info →',
  },
  {
    image: '/IndustriesModal/Industrial/mcaney-industry-6.webp',
    title: 'AI-Powered Production Planning and Scheduling',
    description:
      'Leverage AI and machine learning to create optimized production schedules, improve resource utilization, and adapt to changing demands with ease.',
    link: '/contact-us',
    linkText: 'More Info →',
  },
  {
    image: '/IndustriesModal/Industrial/mcaney-industry-7.webp',
    title: 'Industrial Equipment Monitoring and Control Systems',
    description:
      'Develop robust monitoring and control systems that provide real-time insights into equipment performance, improving operational accuracy and reducing errors.',
    link: '/contact-us',
    linkText: 'More Info →',
  },
  {
    image: '/IndustriesModal/Industrial/mcaney-industry-8.webp',
    title: 'Digital Twin Technology Implementation',
    description:
      'Simulate and optimize manufacturing processes using digital twin technology, enabling data-driven decisions and improving overall production efficiency.',
    link: '/contact-us',
    linkText: 'More Info →',
  },
  {
    image: '/IndustriesModal/Industrial/mcaney-industry-9.webp',
    title: 'Energy Efficiency and Sustainability Software',
    description:
      'Implement intelligent energy management systems to monitor usage, reduce waste, and promote sustainable practices in your manufacturing operations.',
    link: '/contact-us',
    linkText: 'More Info →',
  },
];

const IndustrialServices: React.FC = () => {
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

export default IndustrialServices;
