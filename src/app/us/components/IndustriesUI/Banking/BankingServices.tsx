
import React from 'react';
import ServiceCardCommon from '../common/ServiceCardCommon';



const services = [
  {
    image: '/IndustriesModal/Banking/mcansey-banking-1.jpg',
    title: 'CORE banking software solutions',
    description:
      'Our CORE banking software solutions unify all essential data for smooth daily banking operations, including processes, channels, products, customer details, and management tools, through a centralized database. With our banking IT services, you can broaden your reach, cut operational costs, and enhance efficiency using a single interface that provides you with greater control over your banking activities.',
    link: '/contact-us',
    linkText: 'Know More →',
  },
  {
    image: '/IndustriesModal/Banking/mcansey-banking-2.jpg',
    title: 'Mobile banking',
    description:
      'Empower customers to manage their banking activities anytime, anywhere, directly from their mobile devices. Enhance or expand the functionalities of your current features with our tailored mobile banking IT services. Provide your customers with a seamless, secure, and convenient banking experience that meets their needs on the go.',
    link: '/contact-us',
    linkText: 'Know More →',
  },
  {
    image: '/IndustriesModal/Banking/mcansey-banking-3.jpg',
    title: 'Cloud banking software solutions',
    description:
      'Accelerate innovation, scale your business, and drive faster growth with our cloud banking solutions. Our cloud banking software offers personalized customer experiences and opens new digital distribution channels, helping financial institutions boost revenue while introducing innovative services that optimize business operations.',
    link: '/contact-us',
    linkText: 'Know More →',
  },
  {
    image: '/IndustriesModal/Banking/mcansey-banking-4.jpg',
    title: 'Loan management software',
    description:
      'Our lending solutions offer comprehensive management of the entire loan lifecycle, including loan origination, risk management, audits, reporting, and regulatory compliance. Deliver a consistent, seamless digital borrowing experience for your customers. Our banking IT services for lending also simplify customer onboarding, enhance transparency, and streamline back-office operations, ensuring greater efficiency and smoother processes.',
    link: '/contact-us',
    linkText: 'Know More →',
  },
 
];

const BankingServices: React.FC = () => {
  return (
    <section className="py-12 px-4  md:px-8 ">
      <h2 className="text-xl lg:text-2xl font-bold text-center text-gray-800 mb-8 capitalize">
      The banking IT services we offer
      </h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:max-w-[85%] mx-auto">
        {services.map((service, index) => (
          <ServiceCardCommon key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default BankingServices;
