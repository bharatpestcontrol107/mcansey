import React from 'react';
import Image from 'next/image';
import bannerImage from '../../../../public/ServiceModal/talk-to-us-banner.webp';
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
          { text: 'Ideation & Feasibility Study', link: '/product-ideation-and-conceptulization' },
          { text: 'Prototyping & MVP Development', link: '/product-ideation-and-conceptulization' },
          { text: 'Product Lifecycle Management', link: '/product-ideation-and-conceptulization' },
        ],
        link: '/product-ideation-and-conceptulization',
      },
      {
        title: 'Website Design & Development',
        text: 'Create responsive, engaging websites that align with your business goals.',
        subPoints: [
          { text: 'Custom Web Development', link: '/website-design-company' },
          { text: 'CMS Website Solutions', link: '/website-design-company' },
          { text: 'eCommerce Development', link: '/website-design-company' },
          { text: 'Responsive & Adaptive Design', link: '/website-design-company' },
          { text: 'Progressive Web Apps (PWA)', link: '/website-design-company' },
          { text: 'Website Maintenance & Support', link: '/website-design-company' },
          { text: 'Website Redesign & Revamp', link: '/website-design-company' },
          { text: 'Performance Optimization', link: '/website-design-company' },
        ],
        link: '/website-design-company',
      },
    ],
    [
      {
        title: 'Mobile App Development',
        text: 'Build feature-rich mobile applications that engage users and drive business growth.',
        subPoints: [
          { text: 'iOS App Development', link: '/mobile-app-development-company' },
          { text: 'Android App Development', link: '/mobile-app-development-company' },
          { text: 'Cross-Platform Apps', link: '/mobile-app-development-company' },
          { text: 'Progressive Web Apps (PWA)', link: '/mobile-app-development-company' },
          { text: 'App Maintenance & Updates', link: '/mobile-app-development-company' },
          { text: 'Mobile App UI/UX Design', link: '/mobile-app-development-company' },
          { text: 'App Store Optimization (ASO)', link: '/mobile-app-development-company' },
        ],
        link: '/mobile-app-development-company',
      },
      {
        title: 'Cloud and DevOps',
        text: 'Accelerate software delivery and optimize infrastructure with cloud and DevOps practices.',
        link: '/cloud-application-development',
      },
      {
        title: 'Data & Analytics',
        text: 'Transform data into valuable insights to drive decision-making.',
        link: '/data-analytics-company',
      },
      {
        title: 'Cyber security',
        text: 'Keep your business safe from digital threats with our advanced cybersecurity solutions.',
        link: '/cyber-security-services',
      },
    ],
    [
      {
        title: 'Software Development',
        text: 'Develop tailored software that addresses your business challenges.',
        subPoints: [
          { text: 'Enterprise Software Development', link: '/software-development-company' },
          { text: 'SaaS Development', link: '/software-development-company' },
          { text: 'Custom CRM Development', link: '/software-development-company' },
          { text: 'ERP Solutions', link: '/software-development-company' },
          { text: 'API Development & Integration', link: '/software-development-company' },
          { text: 'Legacy Software Modernization', link: '/software-development-company' },
          { text: 'AI & Machine Learning Solutions', link: '/software-development-company' },
          { text: 'Quality Assurance & Testing', link: '/software-development-company' },
        ],
        link: '/software-development-company',
      },
      {
        title: 'AEM Development',
        text: 'Create engaging digital experiences with Adobe Experience Manager (AEM).',
        link: '/aem-development-company',
      },
      {
        title: 'IT Staff Augmentation',
        text: 'Hire top tech talent to drive innovation and growth within your organization.',
        link: '/it-staff-augmentation',
      },
    ],
  ];

const quickLinks: ContentItem = {
    title: 'IT Consulting',
    text: 'Explore our other services and solutions to accelerate your business growth.',
    link: '/it-consulting-services-company',
  };
const DigitalLinks: ContentItem = {
  title: 'Digital Marketing',
  text: 'Drive measurable growth with data-driven digital marketing strategies.',
  link: '/digital-marketing-company',

  };

  const BlockChainLinks: ContentItem = {
    title: 'Blockchain Development',
    text: 'Leverage blockchain technology to enhance security and transparency in your business operations.',
    link: '/software-development-company',
    };



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
            Ready to <span className="text-blue-500 font-bold">Evolve</span>
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
          {/* Quick Links Section */}
          <ContentSection content={quickLinks} />
          <ContentSection content={DigitalLinks} />
          <ContentSection content={BlockChainLinks} />
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
