
import React from 'react';
import {  FaPaperPlane, FaConnectdevelop, FaJsfiddle } from 'react-icons/fa';
import { RiCompassDiscoverLine } from 'react-icons/ri';
import AboutScroller from '../common/ScrollingSection/AboutScroller';
import { GiWireframeGlobe } from 'react-icons/gi';
import { PiProjectorScreenThin, PiSignpostLight } from 'react-icons/pi';
import { SiAltiumdesigner } from 'react-icons/si';
import { MdContentCopy, MdOutlineRocketLaunch } from 'react-icons/md';

const technologies = [
  {
    Icon: RiCompassDiscoverLine,
    title: 'Discovery & Planning',
    description: 'The first step in the website design process is understanding your goals, target audience, and unique business needs. During this phase, we conduct thorough research, gather requirements, and outline the objectives of your website. This includes:',
    points: [
      'Client Interviews & Research: Understanding your vision, goals, and competitors.',
      'Defining the Target Audience: Identifying the ideal users of your site.',
      'Website Strategy: Setting clear goals, including user experience and business objectives.',
      'Site Map Creation: Mapping out the structure and navigation flow of the site.',
    ],
  },
  {
    Icon: GiWireframeGlobe,
    title: 'Wireframing & Prototyping',
    description: 'Once we’ve defined the project goals, we move into creating wireframes and prototypes to visualize the website layout and functionality. These are blueprints that ensure the design and structure align with your needs.',
    points: [
      'Wireframes: Basic visual guide showing layout structure without design details.',
      'Prototypes: Interactive mockups that give a feel of the website’s functionality.',
     
    ],
  },
  {
    Icon: PiProjectorScreenThin,
    title: 'Project Architecture',
    description: "'This phase focuses on organizing the technical structure of the website, ensuring it is scalable, secure, and efficient. We define the site's backend architecture, including server setup, database management, and security protocols. The focus is on creating a robust framework that supports the website's goals and is easy to maintain as the site evolves.'",
    points: [
      'Database Structure & Integration: Defining how data will be stored, retrieved, and displayed.',
      'Server Configuration & Hosting Plan: Choosing the right server environment (shared hosting, dedicated, or cloud) and ensuring optimal performance and security.',
      'Security Architecture: Implementing essential security protocols to protect user data and the website from potential threats.',
    ],
  },
  {
    Icon: SiAltiumdesigner,
    title: 'UI/UX Design',
    description: 'With the wireframe and architecture in place, our designers bring the website to life. The design phase is where the website starts to take shape, incorporating your brand identity, color schemes, typography, and content. We focus on:',
    points: [
      'Visual Design: Crafting the look and feel of your website, using your brand guidelines.',
      'UI/UX Design: Ensuring that user interface design (UI) and user experience (UX) are prioritized for easy navigation and accessibility.',
      'Design Feedback & Revisions: Presenting designs for review and making any necessary changes based on your feedback.',
    ],
  },
  {
    Icon: FaConnectdevelop,
    title: 'Development',
    description: 'Once the design is finalized, the development phase begins. Our developers code the website, turning the design into a fully functional website.',
    points: [
      'Frontend Development: Creating the visible components of the website (HTML, CSS, JavaScript).',
      'Backend Development: Developing the server-side components, database integration, and functionalities.',
      'CMS Integration: If needed, we integrate the site with a CMS like WordPress, Shopify, etc., allowing you to manage content easily.',
    ],
  },
  {
    Icon: MdContentCopy,
    title: 'Content Integration',
    description: 'At this stage, we integrate your content, including text, images, videos, and other multimedia elements into the website. We ensure that your content aligns with SEO best practices to boost visibility on search engines.',
   
  },{
    Icon: FaJsfiddle,
    title: 'Testing & Quality Assurance',
    description: 'Before the website goes live, we conduct thorough testing to ensure everything functions as intended. This includes:',
    points: [
      'Cross-Browser Testing: Ensuring your site works across all browsers (Chrome, Safari, Firefox, etc.).',
      'Device Compatibility Testing: Checking responsiveness on all devices (mobile, tablet, desktop).',
      'Performance Testing: Evaluating site speed and loading times.',
      'Bug Fixes: Identifying and fixing any technical issues that may arise.',
    ],
  },{
    Icon: MdOutlineRocketLaunch,
    title: 'Launch',
    description: 'After testing and final approval, we prepare the website for launch. This involves:',
    points: [
      'Deployment: Publishing the website to the live server.',
      'Final Review: Conducting a last review to ensure everything is perfect.',
      'Go Live: Making the site available to the public.',
    ],
  },
  {
    Icon: PiSignpostLight,
    title: 'Post-Launch & Maintenance',
    description: "'After the website is live, our work doesn't stop there. We provide continuous support and website maintenance to ensure your site stays up-to-date, secure, and optimized.'",
    points: [
      'Ongoing Monitoring: Tracking performance and uptime.',
      'SEO & Content Updates: Keeping the website content fresh and optimized for search engines.',
      'Security Updates: Regular updates to safeguard against vulnerabilities.',
    ],
  },
  
];

const Technologies: React.FC = () => {
  return (
    <div className="w-full bg-white py-4 xl:py-16">
    <div className="text-center mb-8 w-[85%] mx-auto">
      <h1 className="text-xl md:text-2xl  font-semibold text-black text-left">The Seamless Website Design Process: <span className='text-blue-600'>From Concept to Conversion</span></h1>
    </div>
    
    <div className="w-[85%] mx-auto flex flex-col lg:flex-row gap-10">
      <div className="lg:w-1/2">
        <h2 className=" text-sm text-black mb-6">
          Our website design process is a seamless journey from ideation to execution. We start by understanding your goals and target audience, followed by creating wireframes and prototypes to visualize the layout. With a focus on user experience and design, we ensure that your site is both visually appealing and functional. After solidifying the architecture and backend, our developers bring the design to life, testing for performance and quality across all devices. Finally, we launch your website, providing ongoing support to ensure it remains secure, up-to-date, and optimized for success.
        </h2>
        <div
          className="p-6 rounded-lg text-white lg:w-[50%] relative bg-slate-600"
          style={{
            backgroundImage: "url('https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/appinventiv-mask-new.svg')", 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <FaPaperPlane className="text-4xl mb-4 " />
          <h3 className="text-xl lg:text-xl font-bold mb-2">Fuel Your Digital-First Idea</h3>
          <p className="text-sm mb-4">With 1600+ Transformation Experts</p>
          <button className="bg-blue-600 text-xs xl:text-[15px] px-4 py-2 my-5 rounded-md text-white hover:bg-blue-700 transition">
            Innovate With Us
          </button>
        </div>
      </div>
  
      <div className="lg:w-1/2 overflow-hidden border-b-2">
        <div className="space-y-4 max-h-[500px] overflow-y-scroll custom-scroll">
          {technologies.map((tech, index) => (
            <AboutScroller
              key={index}
              Icon={tech.Icon}
              title={tech.title}
              description={tech.description}
              points={tech.points} 
            />
          ))}
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Technologies;
