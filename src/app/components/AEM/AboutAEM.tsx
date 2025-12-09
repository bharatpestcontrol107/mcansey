
import React from 'react';
import { FaRegHandshake, FaRegBookmark, FaRegClone } from 'react-icons/fa';
import AboutCommon from '../common/ScrollingSection/AboutCommon';
import { GrSecure, GrUserExpert } from 'react-icons/gr';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { VscDebugContinue } from 'react-icons/vsc';

const technologies = [
    {
      Icon: FaRegHandshake,
      title: 'Comprehensive AEM Solutions:',
      description: 'We offer end-to-end AEM development services, from initial setup to ongoing management, ensuring your digital presence is seamless and scalable.',
    },
    {
      Icon: GrSecure,
      title: 'Proactive Content Management:',
      description: 'Our team focuses on optimizing AEM instances, ensuring smooth content delivery, and identifying potential issues before they impact your website performance.',
    },
    {
      Icon: GrUserExpert,
      title: 'AEM Expertise and Experience:',
      description: 'With years of experience in Adobe Experience Manager (AEM), our experts deliver high-quality, scalable, and robust solutions tailored to your business needs.',
    },
    {
      Icon: MdOutlineDashboardCustomize,
      title: 'Customized AEM Development:',
      description: 'Every business has unique needs, which is why we tailor our AEM solutions to your requirements, ensuring maximum performance, user experience, and flexibility.',
    },
    {
      Icon: VscDebugContinue,
      title: 'Continuous Monitoring and Support:',
      description: 'We provide ongoing monitoring and support to ensure your AEM implementation stays secure, optimized, and updated, helping you stay ahead of any technical challenges.',
    },
    {
      Icon: FaRegBookmark,
      title: 'AEM Integrations and Compliance:',
      description: 'Our services ensure seamless integration with your existing systems and compliance with industry standards, helping you maintain consistency and security across your digital platforms.',
    },
    {
      Icon: FaRegClone,
      title: 'Rapid AEM Issue Resolution:',
      description: 'In case of any performance or technical issues, our team provides quick resolution, ensuring minimal disruption to your content management and website operations.',
    },
  ];
  

const AboutAEM: React.FC = () => {
  return (
    <AboutCommon
      title="Get the Best AEM Development Services for Your Business."
      description="Experience seamless digital transformation with our Adobe Experience Manager (AEM) development services. Our team of experts offers end-to-end AEM solutions to help you create, manage, and optimize digital experiences that drive growth and success."
      technologies={technologies}
      buttonText="Innovate With Us"
      buttonLink="#"
      bgImage="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/appinventiv-mask-new.svg"
    />
  );
};

export default AboutAEM;
