import React from 'react';
import ServiceCardCommon from './common/ServiceCardCommon';


const services = [
  {
    image: '/IndustriesModal/Healthcare/mcansey-healthcare-2.jpg',
    title: 'EHR/EMR software development',
    description:
      'Optimize workflows, improve patient care, and enable smooth integration with third-party tools and platforms using customized EMR/EHR software. We specialize in building tailored EHR/EMR solutions featuring advanced security, intuitive interfaces, and personalized functionalities designed to meet the growing needs of your healthcare facility.',
    link: '/contact-us',
    linkText: 'More Info →',
  },
  {
    image: '/IndustriesModal/Healthcare/mcansey-healthcare1.jpg',
    title: 'Medical practice management software',
    description:
      'Let us simplify your administrative and clinical tasks, allowing you to focus on delivering exceptional patient care. With our tailored practice management software, your operations can run seamlessly, helping your practice function effortlessly and efficiently.',
    link: '/contact-us',
    linkText: 'More Info →',
  },
  {
    image: '/IndustriesModal/Healthcare/mcansey-healthcare-3.jpg',
    title: 'Patient engagement solutions',
    description:
      'Create personalized patient engagement solutions or portals that enable seamless interaction with your patients anytime, anywhere, through tailored communication and healthcare data interoperability. Our healthcare software development services prioritize trust and reliability, forming the foundation of your healthcare practice. ',
    link: '/contact-us',
    linkText: 'More Info →',
  },
  {
    image: '/IndustriesModal/Healthcare/mcansey-healthcare-4.jpg',
    title: 'Patient portal development',
    description:
      'Develop secure and user-friendly patient portals that integrate data from various source systems, offering 24/7 access to PHI and features like telehealth, EHR, HIE, PMS, and more. These portals enhance patient engagement and streamline communication for improved healthcare delivery.',
    link: '/contact-us',
    linkText: 'More Info →',
  },
  {
    image: '/IndustriesModal/Healthcare/mcansey-healthcare-5.jpg',
    title: 'Healthcare app development',
    description:
      'Leverage our healthcare software development services to create custom healthcare apps tailored to your unique needs and business objectives. From telemedicine platforms and remote patient monitoring systems to medical billing software and health tracking apps, we deliver solutions with advanced features, cutting-edge technology, and exceptional usability.',
    link: '/contact-us',
    linkText: 'More Info →',
  },
  {
    image: '/IndustriesModal/Healthcare/mcansey-healthcare-6.jpg',
    title: 'Healthcare IT consulting services',
    description:
      'Harness our expertise in crafting customized, secure, and high-performing healthcare IT solutions. We offer comprehensive services, including custom healthcare IT development, digital front-door applications, and in-depth cybersecurity and compliance assessments. Our end-to-end healthcare IT consulting empowers organizations to enhance patient outcomes and accelerate growth.',
    link: '/contact-us',
    linkText: 'More Info →',
  },
  {
    image: '/IndustriesModal/Healthcare/mcansey-healthcare-7.png',
    title: 'Remote patient monitoring solutions',
    description:
      'Enhance patient outcomes by empowering your patients to take control of their health from the comfort of their own homes with our healthcare software development services. Let’s work together to create remote patient monitoring solutions that your patients will truly appreciate and benefit from.',
    link: '/contact-us',
    linkText: 'More Info →',
  },
  {
    image: '/IndustriesModal/Healthcare/mcansey-healthcare-8.png',
    title: 'Telemedicine software development',
    description:
      'Expand your customer base by developing on-demand healthcare software that enables remote delivery of medical services, reducing the workload for doctors. This allows you to free up valuable resources and focus on patients who require more specialized care.',
    link: '/contact-us',
    linkText: 'More Info →',
  },
  {
    image: '/IndustriesModal/Healthcare/mcansey-healthcare-9.png',
    title: 'Medical device software development',
    description:
      'Create custom software for medical devices through a comprehensive process that includes requirement analysis, design, implementation, verification, and validation. Our approach is supported by robust risk management and quality assurance practices to ensure compliance, safety, and reliability in every step of development.',
    link: '/contact-us',
    linkText: 'More Info →',
  },
  {
    image: '/IndustriesModal/Healthcare/mcansey-healthcare-10.png',
    title: 'Homecare software Development',
    description:
      'Our tailored home care software development services optimize operations for home care agencies, boosting efficiency in scheduling, client and caregiver management, billing, and reporting. By prioritizing your unique needs and adhering to healthcare regulations, we deliver a secure, intuitive interface that enhances user experience and ensures seamless operations.   ',
    link: '/contact-us',
    linkText: 'More Info →',
  },
  {
    image: '/IndustriesModal/Healthcare/mcansey-healthcare-11.jpg',
    title: 'Mental Health App Development',
    description:
      'Design custom mental health management apps, including solutions for anxiety, depression, mood regulation, addiction recovery, mental health disorders, sleep management, and beyond. We work with you to create comprehensive and impactful applications that deeply connect with users while promoting their mental well-being.',
    link: '/contact-us',
    linkText: 'More Info →',
  },
  {
    image: '/IndustriesModal/Healthcare/mcansey-healthcare-12.jpg',
    title: 'Healthcare software testing',
    description:
      'Guarantee the optimal performance of your healthcare software with our full range of testing services. This includes functional testing, interoperability checks, compliance assessments, and more. Our approach ensures adherence to healthcare standards, boosts provider efficiency, and drives operational success.',
    link: '/contact-us',
    linkText: 'More Info →',
  },
];

const HealthServices: React.FC = () => {
  return (
    <section className="py-12 px-4 md:px-8 ">
      <h2 className="text-xl lg:text-2xl font-bold text-center text-gray-800 mb-8 capitalize">
        Our healthcare software development services include
      </h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:max-w-[85%] mx-auto">
        {services.map((service, index) => (
          <ServiceCardCommon key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default HealthServices;
