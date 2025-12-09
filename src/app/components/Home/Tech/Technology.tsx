
import React from 'react';
import { FaBrain, FaRobot, FaPaperPlane, FaAccusoft, FaDesktop } from 'react-icons/fa';
import TechCard from './Techcard';
import { AiOutlineCloudServer } from 'react-icons/ai';
import { Si365Datascience, SiAudiotechnica, SiBlockchaindotcom, SiFoundryvirtualtabletop } from 'react-icons/si';
import { IoBusinessOutline } from 'react-icons/io5';

const technologies = [
  {
    Icon: FaBrain,
    title: 'Artificial Intelligence',
    description: 'We harness AI to develop intelligent systems that optimize workflows and enhance decision-making, improving overall business efficiency.',
  },
  {
    Icon: FaRobot,
    title: 'Generative AI',
    description: 'Our expertise in Generative AI allows us to create innovative solutions that generate fresh content, automate creative processes, and elevate user experiences.',
  },
  {
    Icon: FaAccusoft,
    title: 'Machine Learning',
    description: 'By leveraging Machine Learning, we build smart systems that analyze data, predict outcomes, and continuously improve operational performance.',
  },
  {
    Icon: FaDesktop,
    title: 'Computer Vision',
    description: 'We utilize computer vision technology to process and interpret visual data, enhancing the speed and accuracy of automated recognition tasks.',
  },
  {
    Icon: AiOutlineCloudServer,
    title: 'Cloud Services',
    description: 'Our cloud consulting services provide secure, scalable solutions that reduce IT costs and increase flexibility, allowing your team to focus on growth.',
  },
  {
    Icon: Si365Datascience,
    title: 'Data Science and Analytics',
    description: 'We turn raw data into actionable insights, helping your business make informed decisions and optimize operations for better outcomes.',
  }, {
    Icon: SiAudiotechnica,
    title: 'IoT',
    description: 'We develop IoT applications that connect devices seamlessly, enabling automation, improved monitoring, and enhanced operational efficiency.',
  }, {
    Icon: SiFoundryvirtualtabletop,
    title: 'AR/VR',
    description: 'Our team designs immersive AR and VR experiences that engage users, offering interactive solutions for training, marketing, and entertainment.',
  },
  {
    Icon: SiBlockchaindotcom,
    title: 'Blockchain',
    description: 'We build blockchain solutions that ensure transparency, security, and efficiency across various industries, including finance, healthcare, and retail.',
  },
  {
    Icon: IoBusinessOutline,
    title: 'Business Intelligence',
    description: 'Our BI tools offer clear and actionable data visualizations, empowering your team to spot trends and make data-driven decisions that boost performance.',
  },
];

const Technology: React.FC = () => {
  return (
    <div className="w-full bg-white py-4 xl:py-16">
      <div className="w-[85%] mx-auto flex flex-col lg:flex-row gap-10">

        <div className="lg:w-1/2">
          <h2 className=" text-lg md:text-xl xl:2xl text-black  mb-6">
            Innovative Solutions and Modernize Existing Systems with Technologies That Surpass Industry-Standard Timelines

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
            <h3 className="text-xs lg:text-xl font-bold mb-2">Fuel Your Digital-First Idea</h3>
            <p className="text-sm mb-4">With 1600+ Transformation Experts</p>
            <button className="text-xs md:text-sm bg-blue-600 px-4 py-2 my-5 rounded-md text-white hover:bg-blue-700 transition">
              Innovate With Us
            </button>
          </div>
        </div>


        <div className="lg:w-1/2 overflow-hidden border-b-2">
          <div className="space-y-4 max-h-[500px] overflow-y-scroll custom-scroll">
            {technologies.map((tech, index) => (
              <TechCard key={index} Icon={tech.Icon} title={tech.title} description={tech.description} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
