
import React from 'react';
import ServiceCardCommon from '../common/ServiceCardCommon';



const services = [
  {
    image: '/IndustriesModal/Media/mcansey-media-1.webp',
    title: 'OTT Platfroms',
    description:
      'A complete range of services designed to help you manage, deliver, and monetize your OTT content, ensuring an engaging and seamless viewing experience across all devices, including web, mobile, smart TVs, and other media streaming platforms.',
    link: '/contact-us',
    linkText: 'More Info →',
  },
  {
    image: '/IndustriesModal/Media/mcansey-media-2.webp',
    title: 'Live Streaming Platfroms',
    description:
      'Empowering you to deliver an interactive and seamless video and audio streaming experience to your users, optimized for any device, resolution, or bandwidth, ensuring consistent quality across platforms.',
    link: '/contact-us',
    linkText: 'More Info →',
  },
  {
    image: '/IndustriesModal/Media/mcansey-media-3.webp',
    title: 'Custom CMS Solutions',
    description:
      'A complete range of services to help you efficiently manage, deliver, and monetize your content while ensuring security and a seamless user experience.',
    link: '/contact-us',
    linkText: 'More Info →',
  },
  {
    image: '/IndustriesModal/Media/mcansey-media-4.webp',
    title: 'Media Streaming Applications',
    description:
      'Comprehensive development of custom media streaming applications for web and mobile platforms, enabling multi-platform broadcasting for live delivery and cloud-based streaming of audio and video content.',
    link: '/contact-us',
    linkText: 'More Info →',
  },
  {
    image: '/IndustriesModal/Media/mcansey-media-5.webp',
    title: 'Software Maintenance & Support',
    description:
      'Ensure top-tier performance for your media streaming and CMS applications by utilizing advanced caching techniques, CDN optimization, Ajax modules, and optimizing key metrics to enhance speed and responsiveness.',
    link: '/contact-us',
    linkText: 'More Info →',
  },
  
];

const MediaServices: React.FC = () => {
  return (
    <section className="py-12 px-4 md:px-8 ">
      <h2 className="text-xl lg:text-2xl font-bold text-center text-gray-800 mb-8 capitalize">
      Our Media & Entertainment Solutions Include:
      </h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:max-w-[85%] mx-auto">
        {services.map((service, index) => (
          <ServiceCardCommon key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default MediaServices;
