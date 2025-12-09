
import React from 'react';
import {  FaBuromobelexperte, FaRegUser } from 'react-icons/fa';
import { CiStreamOn } from 'react-icons/ci';
import { FcCollaboration } from 'react-icons/fc';

import AboutCommon from '../common/ScrollingSection/AboutCommon';
import { BiAnchor } from 'react-icons/bi';
import { PiGitCommitThin, PiStrategyDuotone } from 'react-icons/pi';


const technologies = [
  {
    Icon: FaBuromobelexperte,
    title: 'Expert-Led Innovation',
    description: 'At MCANSEY, our experienced team combines industry expertise and creative thinking to guide you from idea inception to a viable product concept. We leverage our knowledge to ensure your product stands out in a competitive market.',
    
  },
  {
    Icon: FcCollaboration,
    title: 'Collaborative Approach',
    description: 'We work closely with your team throughout the ideation process, fostering open communication and incorporating your vision into every step. This ensures that the final concept aligns perfectly with your business goals and expectations.',
    
  },
  {
    Icon: BiAnchor ,
    title: 'Comprehensive Market Insights',
    description: "'Our process includes thorough market research and analysis to validate your idea and identify trends, opportunities, and potential challenges. This data-driven approach helps reduce risk and boosts the likelihood of market success.'",
    
  },
  {
    Icon: FaRegUser,
    title: 'User-Centric Design',
    description: 'We prioritize creating product concepts that resonate with target users by developing detailed user personas and collecting real-world feedback. This user-first methodology ensures the final product meets customer needs effectively.',
   
  },
  {
    Icon: CiStreamOn ,
    title: 'Streamlined Prototyping & Visualization',
    description: 'We offer rapid prototyping services to turn ideas into visual representations quickly. This helps stakeholders visualize the product early, facilitating feedback and iterative improvements.',
    
  },
  {
    Icon: PiStrategyDuotone,
    title: 'Strategic Roadmap Planning',
    description: 'Our team crafts a clear, actionable product roadmap, complete with timelines and milestones, to set a path for smooth product development and launch. We make sure your product concept is poised for long-term growth and sustainability.',
   
  },{
    Icon: PiGitCommitThin,
    title: 'Commitment to Quality & Excellence',
    description: 'MCANSEY is dedicated to delivering high-quality, innovative solutions. Our rigorous process, from idea generation to final approval, reflects our commitment to excellence and your success',
   
  },
];

const Whywe: React.FC = () => {
  return (
    <AboutCommon
    title="Partner with Experts to Bring Your Product Vision to Life: Why Choose Us for Ideation & Conceptualization"
    description="We are committed to transforming your ideas into innovative, market-ready products. Our team of experts brings a wealth of experience in product ideation, market research, and user-centered design to ensure your concept not only stands out but meets the real needs of your target audience. By choosing us, you gain a trusted partner who works closely with you through every stage of ideation, refining concepts and making strategic decisions that align with your business goals for long-term success."
    technologies={technologies}
    buttonText="Innovate With Us"
    buttonLink="#"
    bgImage="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/appinventiv-mask-new.svg"
  />
  
  );
};

export default Whywe;
