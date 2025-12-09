

import React from 'react';
import ServiceCardCommon from '../common/ServiceCardCommon';



const services = [
  {
    image: '/IndustriesModal/Travel/mcansey-travel-1.webp',
    title: 'Travel App Consulting Services',
    description:
      'Our team performs in-depth market research and analysis to deliver the most effective solutions, features, and technologies tailored to your needs. We address a broad range of enterprise requirements, ensuring a comprehensive approach to the development of your platform from the outset.',
    link: '/contact-us',
    linkText: 'More Info →',
  },
  {
    image: '/IndustriesModal/Travel/mcansey-travel-2.webp',
    title: 'Travel App UI/UX Design & Development',
    description:
      'We specialize in creating visually appealing interfaces that captivate travelers, enhance their experience, and encourage them to engage with your services. Our focus is on delivering user satisfaction through designs that are not only intuitive and functional but also engaging and easy to navigate.',
    link: '/contact-us',
    linkText: 'More Info →',
  },
  {
    image: '/IndustriesModal/Travel/mcansey-travel-3.webp',
    title: 'Custom Travel App Development',
    description:
      'We specialize in creating customized travel applications for both web and mobile platforms. Whether you need a personalized travel portal, an e-ticketing system, an on-demand booking app, or a GPS middleware solution, our team is equipped to bring your vision to life with seamless and scalable solutions.',
    link: '/contact-us',
    linkText: 'More Info →',
  },
  {
    image: '/IndustriesModal/Travel/mcansey-travel-4.webp',
    title: 'On-Demand Travel App Development',
    description:
      'Empower your customers to customize their travel experiences with on-demand travel applications. Integrate features like seamless ticket booking, navigation, language translation, secure payment options, weather forecasting, live tracking, social media connectivity, real-time notifications, and more, to enhance convenience and elevate their journey every step of the way.',
    link: '/contact-us',
    linkText: 'More Info →',
  },
  {
    image: '/IndustriesModal/Travel/mcansey-travel-5.webp',
    title: 'B2B Travel Portal Development',
    description:
      'We empower travel businesses to expand through advanced B2B travel portal development. Our responsive platforms facilitate seamless booking of flights, hotels, car rentals, and more, while offering additional features such as travel API integrations, personalized search options, content management, and much more to enhance the user experience and operational efficiency.',
    link: '/contact-us',
    linkText: 'More Info →',
  },
  {
    image: '/IndustriesModal/Travel/mcansey-travel-6.webp',
    title: 'Legacy Modernization Services',
    description:
      "'Transform your outdated travel application into a more agile and efficient platform with our legacy modernization services. Our experts will integrate advanced features such as AI-powered chatbots, virtual travel assistants, personalized travel recommendations, and more to enhance user engagement and improve overall functionality. Explore how we can elevate your travel platform's performance and capabilities'",
    link: '/contact-us',
    linkText: 'More Info →',
  },
  {
    image: '/IndustriesModal/Travel/mcansey-travel-7.webp',
    title: 'Support & maintenance services',
    description:
      'We provide comprehensive maintenance and support services to ensure the continuous optimal performance of your travel applications. Our team is dedicated to resolving any post-launch issues and implementing future enhancements and updates, ensuring that your platform remains up-to-date and functions smoothly.',
    link: '/contact-us',
    linkText: 'More Info →',
  },
 
];

const TravelTransportServices: React.FC = () => {
  return (
    <section className="py-12 px-4 md:px-8 ">
      <h2 className="text-xl lg:text-2xl font-bold text-center text-gray-800 mb-8 capitalize">
      Tailored services to transform user journeys:
      </h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:max-w-[85%] mx-auto">
        {services.map((service, index) => (
          <ServiceCardCommon key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default TravelTransportServices;
