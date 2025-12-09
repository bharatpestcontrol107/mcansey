
import React from 'react';
import ServiceCardCommon from '../common/ServiceCardCommon';



const services = [
  {
    image: '/IndustriesModal/Software/mcansey-software-1.jpg',
    title: 'Discover and frame workshop',
    description:
      "'Mcansey's 'Discover & Frame Workshop' offers an efficient method for turning your product idea into a reality. This program is designed to thoroughly understand your concept, define your target audience, analyze competitors, and most importantly, mitigate both business and technical risks.'",
    link: '/contact-us',
    linkText: 'Develop custom EHR/EMR software →',
  },
  {
    image: '/IndustriesModal/Software/mcansey-software-2.jpg',
    title: 'UI/UX design services',
    description:
      'Elevate your digital products with our UI/UX design services. Our team is committed to creating intuitive and captivating interfaces that connect with users. We focus on user-centric design principles to deliver visually attractive layouts that enhance navigation and boost user engagement across your applications.',
    link: '/contact-us',
    linkText: 'Develop custom PMS →',
  },
  {
    image: '/IndustriesModal/Software/mcansey-software-3.jpg',
    title: 'DevOps services',
    description:
      'Accelerate your software development and deployment processes with our DevOps solutions. We help optimize collaboration between development and operations teams by implementing automation for CI/CD pipelines, ensuring quicker and more reliable releases. By following best industry practices, we enable your business to achieve greater flexibility, improve efficiency, reduce time-to-market, and boost overall performance.',
    link: '/contact-us',
    linkText: 'Know-More →',
  },
  {
    image: '/IndustriesModal/Software/mcansey-software-4.jpg',
    title: 'Mobile application development services',
    description:
      'Transform your ideas into effective solutions with our custom mobile app development services tailored to meet your business needs on both iOS and Android platforms. From ideation and design to development, testing, and launch, we guide you through every phase. Our focus is on creating intuitive, high-performance apps that leverage the latest technologies to enhance user experience and interaction.',
    link: '/contact-us',
    linkText: 'Know-More →',
  },
  {
    image: '/IndustriesModal/Software/mcansey-software-5.jpg',
    title: 'Team augmentation services',
    description:
      'By tapping into our team of skilled professionals, you can effortlessly enhance your existing workforce with specialized expertise, enabling you to meet project demands and achieve objectives without the complexities of long-term hiring. This approach allows you to scale your team flexibly as project needs evolve.',
    link: '/contact-us',
    linkText: 'Know-More →',
  },
  {
    image: '/IndustriesModal/Software/mcansey-software-6.jpg',
    title: 'Cloud application development',
    description:
      'Enhance your app’s performance by adopting a cloud-native approach that maximizes scalability and operational flexibility. Leverage our strategic partnerships with top cloud service providers like AWS, GCP, Microsoft, and others to elevate your application’s functionality, adaptability, and performance through robust cloud infrastructure. This ensures your apps can handle large data volumes, provide smooth user experiences, and seamlessly adjust to evolving workloads.',
    link: '/contact-us',
    linkText: 'Know-More →',
  },
  {
    image: '/IndustriesModal/Software/mcansey-software-7.jpg',
    title: 'Application support & maintenance',
    description:
      'We provide continuous application support and maintenance to ensure your software runs efficiently after launch. Our team is dedicated to resolving issues, applying updates, and enhancing features based on user input. We prioritize quick responses and effective solutions to minimize disruptions and boost overall productivity.',
    link: '/contact-us',
    linkText: 'Know-More →',
  },
  {
    image: '/IndustriesModal/Software/mcansey-software-8.jpg',
    title: 'IT consulting services',
    description:
      'Boost your competitive advantage with our IT consulting services. We collaborate with you to assess your technology needs and craft strategic plans. Our consultants specialize in areas like infrastructure management, IT governance, and digital transformation, ensuring your technology investments deliver optimal returns. With our expertise and insights, you can leverage technology to streamline operations and achieve your business objectives more effectively.',
    link: '/contact-us',
    linkText: 'Know-More →',
  },
  {
    image: '/IndustriesModal/Software/mcansey-software-9.jpg',
    title: 'Software testing services',
    description:
      'Guarantee the quality and dependability of your software with our thorough software testing services. We utilize a variety of testing approaches, including functional, performance, and security testing, to ensure your applications adhere to the highest standards. Our meticulous testing process helps reduce risks and fosters greater user confidence in your products.',
    link: '/contact-us',
    linkText: 'Know-More →',
  },
  {
    image: '/IndustriesModal/Software/mcansey-software-11.jpg',
    title: 'Legacy system modernization',
    description:
      "'If you're struggling with outdated systems that hinder your business operations, our legacy system modernization services can help upgrade your infrastructure. We transform legacy systems into agile, efficient solutions that align with today’s business needs. Our expert team conducts thorough assessments of your existing applications to identify areas for improvement and implements customized modernization strategies, such as migrating to cloud-based platforms or integrating advanced technologies into your setup.'",
    link: '/contact-us',
    linkText: 'Know-More →',
  },
  {
    image: '/IndustriesModal/Software/mcansey-software-12.jpg',
    title: 'SaaS application development',
    description:
      "'Unlock the potential of cloud technology with our SaaS application development services, crafted to provide scalable and secure solutions. We specialize in developing powerful, multi-tenant SaaS applications that grow with your business. Whether you're looking to optimize operations or deliver a seamless user experience, our expertise in cloud architecture guarantees high availability, improved performance, and effortless scalability.'",
    link: '/contact-us',
    linkText: 'Know-More →',
  },
  {
    image: '/IndustriesModal/Software/mcansey-software-13.jpg',
    title: 'System integration services',
    description:
      'Enhance your organizational efficiency with our system integration solutions. We focus on creating customized integrations that streamline data exchange and optimize workflows, promoting collaboration and ensuring your technology ecosystem operates seamlessly to support your business goals.',
    link: '/contact-us',
    linkText: 'Know-More →',
  },
];

const SoftwareServices: React.FC = () => {
  return (
    <section className="py-12 px-4 md:px-8 ">
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

export default SoftwareServices;
