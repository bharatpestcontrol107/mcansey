'use client';
import React from 'react';
import { DiGoogleAnalytics, DiMootoolsBadge } from "react-icons/di";
import { FaMobileAlt, FaCode, FaSync, FaLightbulb, FaServer, FaCogs, FaCloud, FaDeaf, FaDev, FaBusinessTime, FaProjectDiagram } from 'react-icons/fa';
import ServicesCommon from '../common/ServicesCommon';
import ServiceCard from '../Home/ServiceCard';
import Link from 'next/link';
import { SiCodesignal, SiQase } from 'react-icons/si';
import { GrTechnology } from 'react-icons/gr';
import { MdEngineering } from 'react-icons/md';

interface StatItem {
  number: string;
  title: string;
  description: React.ReactNode;
}

const services = [
    {
      Icon: SiCodesignal ,
      title: 'Hire UI/UX Designers',
      description: (<>
      Hire talented <strong>UI/UX Designers</strong> who specialize in <strong>user-centered design, wireframing, prototyping,</strong> and tools like <strong>Sketch, Figma, Adobe XD, InVision,</strong> and <strong>Zeplin.</strong> They focus on creating intuitive, aesthetically pleasing interfaces and improving the user experience by understanding user behavior and aligning design solutions with business objectives.
     
      </>),
    },
    {
      Icon: FaCode,
      title: 'Hire Frontend Developers',
      description: (<> Hire skilled <strong> Frontend Developers </strong> proficient in <strong>React.js, Angular, Vue.js, Next.js, HTML5, CSS3, JavaScript,</strong> and <strong>TypeScript</strong> to build intuitive, responsive, and dynamic user interfaces. These developers ensure an excellent user experience and seamless interaction with backend services across web and mobile platforms.
</>),
    },
    {
      Icon: FaCode,
      title: 'Hire Backend Developers',
      description: (<>Hire experienced <strong> Backend Developers</strong> proficient in various technologies such as <strong> Node.js, Express.js, Ruby on Rails, Java, Python, .NET, PHP,</strong> and <strong>Django</strong> to build scalable, secure, and high-performance server-side applications. These experts ensure that your backend infrastructure is robust, optimized, and ready to handle large-scale operations.</>),
    },
    {
      Icon: FaMobileAlt,
      title: 'Hire Mobile App Developers',
      description: (<>Hire talented <strong> Mobile App Developers </strong> skilled in <strong>React Native, Flutter, Swift, Kotlin, Java, Android,</strong> and <strong> iOS </strong> to develop high-performing, feature-rich mobile applications for both Android and iOS platforms. These developers ensure a smooth user experience, reliable functionality, and seamless integration with backend services.</>),
    },
    {
      Icon: FaServer,
      title: 'Hire Database Experts',
      description: (<>Hire proficient <strong> Database Experts </strong> skilled in <strong>MySQL, PostgreSQL, MongoDB, Oracle, SQL Server, Redis,</strong> and <strong>Cassandra.</strong> These professionals specialize in designing, optimizing, and managing databases, ensuring high performance, security, and availability of your critical business data.</>),
    },
   
    {
      Icon: SiQase ,
      title: 'Hire Quality Analysts (QA)',
      description: (<>Hire experienced <strong>Quality Analysts (QA)</strong> who specialize in manual and automated testing using tools like <strong>Selenium, JUnit, TestNG, Appium, Postman, and Jira.</strong> They ensure that your applications are free from bugs, meet performance standards, and offer a seamless user experience through thorough testing and quality control.</>),
    },
    {
      Icon: FaBusinessTime,
      title: 'Hire Business Analysts',
      description: (<>Hire skilled <strong>Business Analysts</strong> proficient in <strong>requirements gathering, process mapping, data analysis, Agile methodologies, and project management.</strong> They bridge the gap between business stakeholders and the development team, ensuring that the final product aligns with business goals and objectives.
</>),
    },
    {
      Icon: DiMootoolsBadge,
      title: 'Hire Testing Engineers',
      description: (<>Hire skilled <strong> Testing Engineers </strong> proficient in <strong> manual testing, automated testing,</strong> and tools like <strong>Selenium, Appium, JUnit, TestNG, Postman, LoadRunner, and Jira.</strong> These engineers ensure the quality and performance of your software by identifying bugs, optimizing application performance, and ensuring a seamless user experience across all platforms.</>),
    },
    {
      Icon: FaDev,
      title: 'Hire DevOps Engineers',
      description: (<>Hire skilled <strong>DevOps Engineers</strong> experienced in tools like <strong> Docker, Kubernetes, Jenkins, GitLab, and Ansible.</strong> These experts automate workflows, manage CI/CD pipelines, and ensure faster deployments, scalability, and reliability of your software applications across various environments.</>),
    },
    {
        Icon: FaCloud,
        title: 'Hire Cloud Engineers',
        description: (<>Hire skilled Cloud Engineers to design, implement, and manage cloud infrastructures using platforms like <strong>AWS, Microsoft Azure, Google Cloud, and IBM Cloud.</strong> These experts are proficient in cloud computing technologies such as <strong> Docker, Kubernetes, and Terraform,</strong> enabling seamless deployment, scalability, and high availability for your applications.</>),
      },
      {
        Icon: FaDeaf,
        title: 'Hire Data Architects',
        description: (<>Hire experienced <strong> Data Architects</strong> who specialize in designing scalable and secure data systems using technologies like <strong> SQL, NoSQL, Hadoop, Apache Kafka, and ETL tools.</strong> They create efficient data models, ensure data integrity, and build high-performance data pipelines to support business intelligence and analytics.</>),
      },
      {
        Icon: FaProjectDiagram,
        title: 'Hire Project Architects',
        description: (<>Hire skilled <strong>Project Architects</strong> proficient in <strong> system design, project planning, architecture frameworks, and cloud technologies.</strong> They ensure that your project’s technical architecture aligns with business needs and provides a scalable, efficient, and reliable solution for long-term success.</>),
      },
      {
        Icon: GrTechnology,
        title: 'Hire Tech Leads',
        description: (<>Hire experienced <strong>Tech Leads </strong>who specialize in <strong> software architecture, system design, project management, and Agile methodology.</strong> They guide development teams, ensure code quality, and make critical decisions about the technical direction of your projects, ensuring smooth delivery and alignment with business objectives.</>),
      },
      {
        Icon: DiGoogleAnalytics,
        title: 'Hire Project Managers',
        description: (<>Hire experienced <strong> Project Managers</strong> with expertise in <strong> Agile, Scrum, Waterfall,</strong> and <strong>project management tools like Jira, Asana, and Trello.</strong> They ensure smooth project execution, manage resources effectively, and maintain timelines, ensuring your projects are delivered on time and within budget.</>),
      },
      {
        Icon: MdEngineering,
        title: 'Hire Release Engineers',
        description: (<>Hire skilled <strong> Release Engineers</strong> experienced in  <strong>CI/CD pipelines, Jenkins, Git, Docker, Kubernetes, and Ansible.</strong> They manage code releases, automate build and deployment processes, and ensure that software is delivered seamlessly with high quality and minimal downtime.</>),
      },
      
  ];

const ServicesSoftwareOne: React.FC = () => {
  return (
    <ServicesCommon
    title="Empower Your Team with Expert IT Professionals"
    description="Elevate your projects with top-tier IT talent through our staff augmentation services. Whether you need developers, analysts, engineers, or tech leads, we provide highly skilled professionals to seamlessly integrate with your team. Accelerate delivery, enhance performance, and achieve your business goals with our dedicated experts.">
    {services.map((service, index) => (
      <ServiceCard
        key={index}
        Icon={service.Icon}
        title={<Link href="#enquiry-form">{service.title}</Link>}
        description={service.description}
      />
    ))}
  </ServicesCommon>
  );
};

export default ServicesSoftwareOne;
