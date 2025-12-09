'use client'
import React from 'react';
import SliderLayout from '../common/SliderLayout';
import { FaCheckCircle, FaCloudUploadAlt, FaCodeBranch, FaCogs, FaMobileAlt, FaPaintBrush, FaProjectDiagram, FaServer, FaUserCheck } from 'react-icons/fa';
const AEMProcess: React.FC = () => {
  return (
    <>
      <div className="w-full bg-black text-white">
  <div className="xl:w-[100%] mx-auto px-4 xl:px-0"> 
  <SliderLayout
  title="Our Proven AEM Development Process: Turning Ideas into Scalable Digital Experiences"
  description="At MCANSEY, an AEM development company in India, our AEM development process is designed to deliver customized, scalable, and high-performance digital solutions. From Adobe Experience Manager development to AEM web development and AEM application development, we follow a structured approach to ensure seamless execution. Our team of AEM experts works closely with you to understand your needs and provide AEM custom solutions that align with your business objectives. As a trusted AEM company, we offer comprehensive AEM development services in India, helping you hire AEM developers and implement scalable AEM solutions for successful AEM website development and beyond."
  cards={[
    {
      icon: <FaUserCheck className="w-8 h-8" />,
      title: 'Initial Consultation & Requirement Gathering',
      description:
        'We begin with a deep consultation to understand your business objectives, target audience, and specific requirements for the AEM platform. This stage involves identifying pain points, outlining the scope, and aligning our approach with your vision and goals.',
    },
    {
      icon: <FaProjectDiagram className="w-8 h-8" />,
      title: 'AEM Solution Architecture & Design',
      description:
        'Once we have a clear understanding of your requirements, we design the architecture of your AEM solution. This includes defining the content structure, workflows, and user journeys. We ensure scalability and flexibility to accommodate your business’s future growth.',
    },
    {
      icon: <FaPaintBrush className="w-8 h-8" />,
      title: 'UI/UX Design for AEM',
      description:
        'Our UI/UX design process focuses on creating a visually engaging and user-friendly experience. We create intuitive interfaces, optimize navigation, and ensure responsiveness across all devices, making sure your AEM platform delivers an outstanding user experience.',
    },
    {
      icon: <FaCodeBranch className="w-8 h-8" />,
      title: 'Custom AEM Development & Component Creation',
      description:
        'In this phase, we build custom components, templates, and workflows tailored to your business needs. Our development process involves integrating AEM with other enterprise systems like CRM, ERP, and marketing tools, creating a unified platform that streamlines your digital experience.',
    },
    {
      icon: <FaServer className="w-8 h-8" />,
      title: 'Platform Configuration & Integration',
      description:
        'We configure the AEM platform for optimal performance, security, and content management. This includes setting up the content repositories, configuring digital asset management (DAM), and ensuring smooth integration with your existing systems, ensuring your AEM instance is ready for production.',
    },
    {
      icon: <FaMobileAlt className="w-8 h-8" />,
      title: 'Mobile Optimization & AEM Mobile Solutions',
      description:
        'With AEM’s mobile-first capabilities, we ensure that your platform is optimized for mobile devices, providing a seamless and fast experience for users on any screen. We implement responsive design and mobile optimizations to ensure performance across all devices.',
    },
    {
      icon: <FaCheckCircle className="w-8 h-8" />,
      title: 'Testing & Quality Assurance',
      description:
        'Before going live, we conduct extensive testing to ensure that all components function as intended. This includes functional testing, security assessments, load testing, and user acceptance testing (UAT) to guarantee the quality, security, and performance of your AEM solution.',
    },
    {
      icon: <FaCloudUploadAlt className="w-8 h-8" />,
      title: 'Deployment & Go-Live',
      description:
        'Once everything is tested and approved, we deploy your AEM solution to the production environment. Our team ensures that the go-live process is smooth, with minimal disruption, and that the platform is ready for users to engage with it.',
    },
    {
      icon: <FaCogs className="w-8 h-8" />,
      title: 'Ongoing Support & Optimization',
      description:
        'Our commitment doesn’t end at launch. We offer continuous support and optimization to ensure your AEM platform remains secure, up-to-date, and performs at its best. We provide monitoring, regular updates, and feature enhancements to align with your evolving business needs.',
    },
  ]}
/>
  </div>
</div>

    </>
  );
}

export default AEMProcess;
