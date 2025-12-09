import React from 'react';
import Image from 'next/image';
import bannerImage from '../../../../../public/ServiceModal/talk-to-us-banner.webp';
import Link from 'next/link';

interface SubPoint {
  text: string;
  link?: string; 
}
interface ContentItem {
  title: string;
  text?: string;
  subPoints?: SubPoint[];
  link?: string; 
}

const ContentSection: React.FC<{ content: ContentItem }> = ({ content }) => {
  
  return (
    <div className="mb-6">
      {content.link ? (
        <Link href={content.link} passHref>
          <h4 className="font-bold mb-1 text-sm xl:text-[15px] cursor-pointer text-gray-800 hover:text-blue-500 hover:underline">
            {content.title}
          </h4>
        </Link>
      ) : (
        <h4 className="font-bold mb-1 text-sm xl:text-[15px]">
          {content.title}
        </h4>
      )}
      {content.text && <p className="mb-1 text-[12px] xl:text-sm space-y-4">{content.text}</p>}
      {content.subPoints && (
        <ul className="list-disc pl-4 text-[12px] xl:text-sm space-y-3">
          {content.subPoints.map((point, index) => (
            <li key={index}>
              {point.link ? (
                <Link href={point.link} passHref>
                  <span className="text-blue-900 hover:text-blue-600 hover:underline cursor-pointer">{point.text}</span>
                </Link>
              ) : (
                <span>{point.text}</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>  
  );
};

const ServicesModal: React.FC = () => {
  const contentData: ContentItem[][] = [
    [
      {
        title: 'Product Ideation & Conceptualization',
        text: 'From ideation to launch, turn your vision into a successful product.',
        subPoints: [
          { text: 'Ideation & Feasibility Study', link: '/us/product-ideation-and-conceptulization' },
          { text: 'Prototyping & MVP Development', link: '/us/product-ideation-and-conceptulization' },
          { text: 'Product Lifecycle Management', link: '/us/product-ideation-and-conceptulization' },
        ],
        link: '/us/product-ideation-and-conceptulization',
      },
      {
        title: 'Website Design & Development',
        text: 'Create responsive, engaging websites that align with your business goals.',
        subPoints: [
          { text: 'Custom Web Development', link: '/us/website-design-company' },
          { text: 'CMS Website Solutions', link: '/us/website-design-company' },
          { text: 'eCommerce Development', link: '/us/website-design-company' },
          { text: 'Responsive & Adaptive Design', link: '/us/website-design-company' },
          { text: 'Progressive Web Apps (PWA)', link: '/us/website-design-company' },
          { text: 'Website Maintenance & Support', link: '/us/website-design-company' },  
          { text: 'Website Redesign & Revamp', link: '/us/website-design-company' },
          { text: 'Performance Optimization', link: '/us/website-design-company' },
         
          
        ],
        link: '/us/website-design-company',
      },
    ],
    [
      {
        title: 'Mobile App Development',
        text: 'Build feature-rich mobile applications that engage users and drive business growth.',
        subPoints: [
          { text: 'iOS App Development', link: '/us/mobile-app-development-company' },
          { text: 'Android App Development', link: '/us/mobile-app-development-company' },
          { text: 'Cross-Platform Apps', link: '/us/mobile-app-development-company' },
          { text: 'Progressive Web Apps (PWA)', link: '/us/mobile-app-development-company' },
          { text: 'App Maintenance & Updates', link: '/us/mobile-app-development-company' }, 
           { text: 'Mobile App UI/UX Design', link: '/us/mobile-app-development-company' },
           { text: 'App Store Optimization (ASO)', link: '/us/mobile-app-development-company' },
          
          
         
        ],
        link:'/us/mobile-app-development-company'
      },

      {
        title: 'Cloud and DevOps',
        text: ' Accelerate software delivery and optimize infrastructure with cloud and DevOps practices.',
        link:'/us/cloud-application-development',
      },
      {
        title: 'Data & Analytics',
        text: ' Transform data into valuable insights to drive decision-making.',
        link:'/us/data-analytics-company',
      },
      {
        title: 'Cyber security',
        text: ' Keep your business safe from digital threats with our advanced cybersecurity solutions.',
        link:'/us/cyber-security-services',
      },
      
    ],
    [
      {
        title: 'Software Development',
        text: 'Develop tailored software that addresses your business challenges.',
        subPoints: [
          { text: 'Enterprise Software Development', link: '/us/software-development-company' },
          { text: 'SaaS Development', link: '/us/software-development-company' },
          { text: 'Custom CRM Development', link: '/us/software-development-company' },
          { text: 'ERP Solutions', link: '/us/software-development-company' },
          { text: 'API Development & Integration', link: '/us/software-development-company' },
          { text: 'Legacy Software Modernization', link: '/us/software-development-company' },
          { text: 'AI & Machine Learning Solutions', link: '/us/software-development-company' },
          { text: 'Blockchain Development', link: '/us/software-development-company' },
          { text: 'Quality Assurance & Testing', link: '/us/software-development-company' },
         
        ],
         link:'/us/software-development-company'
      },
      
      {
        title: 'IT Consulting',
        text: ' Strategic advice to help you maximize your technology investments.',
        link:'/us/it-consulting-services-company',
      },
      {
        title: 'Digital Marketing',
        text: ' Drive measurable growth with data-driven digital marketing strategies.',
        link:'/us/digital-marketing-company',
      },    
    ],
    [
      //empty array for left div
    ],
  ];

  return (
    <div
      className="fixed top-16 left-1/2 transform -translate-x-1/2 mt-2 w-[90vw] xl:w-[80vw] max-h-[90vh] xl:max-h-[80vh] bg-white shadow-lg rounded-lg p-4 overflow-auto z-50"
      role="dialog"
      aria-labelledby="services-modal-title"
      aria-describedby="services-modal-description"
    >
      <div className="grid grid-cols-4 gap-6 px-3 h-full">
        <div className="flex flex-col justify-start h-full col-span-1">
          <h2 id="services-modal-title" className="text-2xl xl:text-3xl py-2 font-bold">
          Ready to  <span className="text-blue-500 font-bold">Evolve</span>
          </h2>
          <p id="services-modal-description" className="py-1 text-[12px] xl:text-[15px]">
          Innovative IT solutions structured to adapt and grow alongside your business needs.
          </p>

          <div className="relative mb-4 h-32 overflow-hidden">
            <Image
              src={bannerImage}
              alt="About Modal Image"
              className="rounded-md w-full h-full object-cover"
              height={128}
              style={{ objectFit: 'cover' }}
              priority 
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 p-2">
              <p className="text-white text-center text-sm font-semibold line-clamp-2">
              Experience how we inspire, energize, and value each other's time.
              </p>
            </div>
          </div>
        </div>

        {contentData.map((column, columnIndex) => (
          <div key={columnIndex} className="flex flex-col space-y-2">
            {column.map((content, index) => (
              <ContentSection content={content} key={index} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesModal;
