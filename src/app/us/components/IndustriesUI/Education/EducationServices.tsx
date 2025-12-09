
import React from 'react';
import ServiceCardCommon from '../common/ServiceCardCommon';



const services = [
    {
      image: '/IndustriesModal/Education/mcansey-education-1.webp',
      title: 'Comprehensive Education Management Software Solutions',
      description:
        'We offer end-to-end software solutions tailored for educational institutions to manage student records, grades, attendance, schedules, and administrative tasks. Our systems streamline operations, improving efficiency and enhancing the overall educational experience.',
      link: '/contact-us',
      linkText: 'Know More →',
    },
    {
      image: '/IndustriesModal/Education/mcansey-education-2.webp',
      title: 'Custom Learning Management Systems (LMS) Development',
      description:
        'We specialize in developing bespoke Learning Management Systems (LMS) that enable educational organizations to deliver and track e-learning courses. Our LMS solutions are customizable, scalable, and equipped with features like content delivery, assessments, and analytics to improve learning outcomes.',
      link: '/contact-us',
      linkText: 'Know More →',
    },
    {
      image: '/IndustriesModal/Education/mcansey-education-3.webp',
      title: 'Smart Campus Solutions for Enhanced Student Engagement',
      description:
        'We provide smart campus solutions that integrate IoT and advanced technologies to create an engaging and connected campus environment. From real-time location tracking to seamless communication between students and faculty, our solutions elevate the campus experience.',
      link: '/contact-us',
      linkText: 'Know More →',
    },
    {
      image: '/IndustriesModal/Education/mcansey-education-4.webp',
      title: 'Cloud-Based Education Platform Development',
      description:
        'Our cloud-based education platforms offer flexibility, scalability, and accessibility for both students and educators. These platforms enable seamless collaboration, content sharing, and real-time updates, ensuring a superior digital learning environment accessible from any device.',
      link: '/contact-us',
      linkText: 'Know More →',
    },
    {
      image: '/IndustriesModal/Education/mcansey-education-5.webp',
      title: 'Data-Driven Student Performance and Analytics Tools',
      description:
        'We provide advanced analytics tools that allow educators and administrators to track and analyze student performance data. Our solutions empower institutions to make data-driven decisions to improve academic outcomes and identify areas for improvement.',
      link: '/contact-us',
      linkText: 'Know More →',
    },
    {
      image: '/IndustriesModal/Education/mcansey-education-6.webp',
      title: 'Integrated School Administration and Management Systems',
      description:
        'We help educational institutions streamline administrative tasks such as admissions, scheduling, fee management, and reporting. Our integrated management systems ensure smooth and efficient operations across various departments within the institution.',
      link: '/contact-us',
      linkText: 'Know More →',
    },
    {
      image: '/IndustriesModal/Education/mcansey-education-7.webp',
      title: 'Mobile Learning and E-Learning Solutions for Schools',
      description:
        'Our mobile learning solutions allow students to access educational content on-the-go, making learning more flexible and interactive. We design custom mobile apps and e-learning platforms that are user-friendly, engaging, and optimized for all mobile devices.',
      link: '/contact-us',
      linkText: 'Know More →',
    },
    {
      image: '/IndustriesModal/Education/mcansey-education-8.webp',
      title: 'Advanced Virtual Classroom and Collaboration Tools',
      description:
        'We offer virtual classroom solutions that provide live streaming, interactive sessions, and collaborative features to enhance the online learning experience. Our tools help educators facilitate engaging and productive lessons, with features like video conferencing, breakout rooms, and real-time assessments.',
      link: '/contact-us',
      linkText: 'Know More →',
    },
   
  ];

const EducationServices: React.FC = () => {
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

export default EducationServices;
