
import React from 'react';
import ServiceCardCommon from '../common/ServiceCardCommon';



const services = [
  {
    image: '/IndustriesModal/Real-Estate/mcansey-real-estate-3.webp',
    title: 'Real estate CRM solutions',
    description:
      'Our cloud-based CRM software leverages intelligent algorithms to streamline pipeline management, automate marketing tasks, and deliver rule-based notifications integrated with SMS and email services. Enhance customer engagement and improve operational efficiency with a powerful, all-in-one solution.',
    link: '/contact-us',
    linkText: 'More Info →',
  },
  {
    image: '/IndustriesModal/Real-Estate/mcansey-real-estate-1.webp',
    title: 'Demand-based applications',
    description:
      'Create on-demand property booking applications with a tailored marketplace platform, intuitive front-end user interface, and advanced business logic. Our solutions include sophisticated admin dashboards and virtual tour capabilities, ensuring scalability and robustness to meet the evolving needs of your business.',
    link: '/contact-us',
    linkText: 'More Info →',
  },
  {
    image: '/IndustriesModal/Real-Estate/mcansey-real-estate-2.webp',
    title: 'Auction/Reverse auction applications',
    description:
      'Develop cloud-based, robust applications for conducting both offline and online auctions or reverse auctions of properties. Our solutions facilitate seamless collaboration between all parties involved—individuals, real estate agents, and institutions—ensuring a smooth and efficient auction experience.',
    link: '/contact-us',
    linkText: 'More Info →',
  },
  {
    image: '/IndustriesModal/Real-Estate/mcansey-real-estate-12.webp',
  
    title: 'Mortgage applications',
    description:
      'Create customized mortgage solutions with features such as mortgage servicing, amortization, loan origination, online application submission, decision support, and comprehensive risk assessments. Our tailored solutions streamline the entire mortgage process, enhancing efficiency and supporting informed decision-making at every stage.',
    link: '/contact-us',
    linkText: 'More Info →',
  },
  {
    image: '/IndustriesModal/Real-Estate/mcansey-real-estate-4.webp',
    title: 'Real estate ERP solutions',
    description:
      'Achieve greater adaptability to dynamic market conditions with our ERP solutions, designed to manage both residential and commercial property data. Our system provides enhanced cash flow visibility, seamless inventory management, and streamlined online leasing, ensuring smooth operations and continuous business growth.',
    link: '/contact-us',
    linkText: 'More Info →',
  },
  {
    image: '/IndustriesModal/Real-Estate/mcansey-real-estate-5.webp',
    title: 'Property management solutions',
    description:
      'Create tailored property management solutions that simplify the monitoring, administration, and oversight of properties. Our solutions include task automation tools and intuitive interfaces, allowing for efficient management of multiple properties while enhancing operational productivity and reducing manual effort.',
    link: '/contact-us',
    linkText: 'More Info →',
  },
  {
    image: '/IndustriesModal/Real-Estate/mcansey-real-estate-7.webp',
    title: 'Security management systems',
    description:
      'Our real estate software solutions address a wide range of property security challenges. Our team implements role-based access control systems for continuous property protection and integrates advanced video surveillance features, ensuring comprehensive security through adherence to the highest industry standards and best practices.',
    link: '/contact-us',
    linkText: 'More Info →',
  },
  {
    image: '/IndustriesModal/Real-Estate/mcansey-real-estate-6.webp',
    title: 'Cloud-enabled solutions',
    description:
      'As the demand for interoperability and efficient data processing in real estate software grows, cloud technologies have become essential. Our real estate software solutions have a proven history of delivering cloud-based platforms that enable seamless integration, support scalability, and drive business expansion.',
    link: '/contact-us',
    linkText: 'More Info →',
  },
  {
    image: '/IndustriesModal/Real-Estate/mcansey-real-estate-8.webp',
    title: 'Robotic process automation in real estate',
    description:
      'Leverage Robotic Process Automation (RPA) with our real estate software solutions to automate key tasks such as credit checks, background checks, and property listings. Our experts will help streamline these processes, enhancing scalability and enabling your business to efficiently manage larger workloads with minimal manual intervention.',
    link: '/contact-us',
    linkText: 'More Info →',
  },
  {
    image: '/IndustriesModal/Real-Estate/mcansey-real-estate-9.webp',
    title: 'Real estate MLS services',
    description:
      'Empower your real estate operations with real-time property data, interactive interfaces, detailed property descriptions, and advanced search capabilities. Our experts provide data-driven MLS analytics and ensure robust security measures, helping you offer an enhanced, secure, and efficient user experience.',
    link: '/contact-us',
    linkText: 'More Info →',
  },
  {
    image: '/IndustriesModal/Real-Estate/mcansey-real-estate-10.webp',
    title: 'IDX/MLS integration & development services',
    description:
      'Create a tailored Internet Data Exchange (IDX) real estate system with our innovative software solutions to seamlessly integrate MLS listings into CRM systems, email marketing platforms, company websites, mobile apps, and beyond. Enhance your real estate operations with real-time data synchronization and improved lead management.',
    link: '/contact-us',
    linkText: 'More Info →',
  },
  {
    image: '/IndustriesModal/Real-Estate/mcansey-real-esate-11.webp',
    title: 'RETS integration software development',
    description:
      'Ensure seamless and accurate data transmission with our custom RETS integration solutions, designed to meet the strict Real Estate Transaction Standard (RETS) for efficient uploading and downloading of MLS data. Our experts provide tailored tools that enable real-time data exchange, enhancing the accuracy and speed of your real estate operations.',
    link: '/contact-us',
    linkText: 'More Info →',
  },
];

const RealEstateServices: React.FC = () => {
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

export default RealEstateServices;
