
import React from 'react';
import { FaBrain, FaRobot, FaCogs, FaPaperPlane, FaTools, FaRocket, FaShieldAlt, FaRegCalendarCheck, FaRegCaretSquareLeft, FaInnosoft, FaNeuter } from 'react-icons/fa';
import AboutCommon from '../common/ScrollingSection/AboutCommon';
import { SiHiveBlockchain } from 'react-icons/si';



const technologies = [
  {
    Icon: SiHiveBlockchain,
    title: 'Hire Blockchain Developers:',
    description: (<>Hire experienced <strong>Blockchain Developers</strong> who specialize in creating decentralized applications (DApps) and smart contracts using <strong> Ethereum, Solidity, Hyperledger, and Web3.js.</strong> These developers provide innovative solutions for secure, transparent, and distributed ledger technology across various industries.
</>),
    
  },
  {
    Icon: FaRobot,
    title: 'Hire AI Developers:',
    description: (<>Hire talented <strong> AI Developers</strong> proficient in <strong>TensorFlow, PyTorch, Keras, Scikit-learn, OpenCV, and Natural Language Processing (NLP)</strong> to create intelligent systems capable of automating tasks, recognizing patterns, and making data-driven predictions, ensuring you stay ahead in a competitive market.</>),
    
  },
  {
    Icon: FaTools,
    title: 'Hire Generative AI Developers:',
    description: (<>Hire expert <strong> Generative AI Developers </strong> who specialize in <strong>Deep Learning, GANs (Generative Adversarial Networks), GPT, OpenAI API, and NLP (Natural Language Processing).</strong> They create advanced AI models capable of generating text, images, audio, and other content, helping your business leverage AI for innovation, creativity, and automation in various applications.
</>),
    
  },
  {
    Icon: FaRocket,
    title: 'Hire Machine Learning Engineers:',
    description: (<>Hire talented <strong> Machine Learning </strong> Engineers skilled in <strong> TensorFlow, Keras, PyTorch, Scikit-learn, Python, R, and ML algorithms.</strong> These engineers specialize in building intelligent systems capable of making predictions, recognizing patterns, and automating processes by applying advanced machine learning techniques to real-world business problems.
</>),
   
  },
  {
    Icon: FaShieldAlt,
    title: 'Hire BI Developers:',
    description: (<>Hire experienced <strong> BI (Business Intelligence) Developers</strong> proficient in <strong> Power BI, Tableau, QlikView, SQL, Python, DAX,</strong> and <strong>ETL tools</strong> like <strong> Apache NiFi. </strong> These experts help organizations turn complex data into actionable insights by designing and developing interactive dashboards, reports, and data visualization solutions, enabling informed decision-making</>),
    
  },
  {
    Icon: FaCogs,
    title: 'Hire Big Data Developers:',
    description: (<>Hire expert <strong>Big Data Developers </strong> with proficiency in <strong> Hadoop, Spark, Kafka, MapReduce,</strong> and <strong>NoSQL databases like MongoDB and Cassandra.</strong> These developers specialize in processing, analyzing, and managing large datasets, providing powerful insights and driving data-driven decisions for your business.</>),
   
  },{
    Icon: FaRegCalendarCheck ,
    title: 'Hire Cybersecurity Experts:',
    description: (<>Hire skilled <strong> Cybersecurity Experts </strong> proficient in technologies such as <strong> Firewall Management, SIEM, IDS/IPS, Penetration Testing, and Encryption protocols.</strong> They ensure that your systems are safe from cyber threats, vulnerabilities, and data breaches through continuous monitoring and security audits.</>),
   
  },
  {
    Icon: FaRegCaretSquareLeft,
    title: 'Hire Salesforce Developers:',
    description: (<>Hire expert <strong> Salesforce Developers </strong> with experience in building customized solutions on the <strong> Salesforce Lightning, Salesforce Apex, and Visualforce platforms.</strong> These developers specialize in creating tailored CRM solutions, automating business processes, and ensuring optimal integration with third-party services.</>),
   
  },
  {
    Icon: FaInnosoft,
    title: 'Hire AEM Developers:',
    description: (<>Hire skilled <strong> AEM Developers</strong> to design and implement robust <strong> Adobe Experience Manager (AEM) solutions.</strong> They specialize in content management, digital asset management, and creating seamless multi-channel experiences for your website, ensuring high performance and scalability.</>),
   
  },
  {
    Icon: FaNeuter,
    title: 'Hire Magento Developers:',
    description: (<>Hire skilled <strong> Magento Developers</strong> with expertise in <strong> Magento 2, PHP, MySQL, JavaScript, and HTML/CSS. </strong> They specialize in developing, customizing, and maintaining high-performance, feature-rich e-commerce websites, optimizing your online store for speed, scalability, and user experience</>),
   
  },
];

const WhyITStaff: React.FC = () => {
  return (
    <AboutCommon
    title="Empower Your Business with Cutting-Edge Emerging Technologies Engineers."
    description="Hire top-notch Emerging Technologies Engineers skilled in the latest innovations like Blockchain, AI, Machine Learning, IoT, AR/VR, Quantum Computing, and Robotic Process Automation (RPA). These engineers are proficient in developing groundbreaking solutions that drive business transformation, enhance automation, and unlock new growth opportunities. With expertise in next-gen technologies, they help you stay ahead of the competition and lead the way in digital innovation."
    technologies={technologies}
    buttonText="Innovate With Us"
    buttonLink="#"
    bgImage="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/appinventiv-mask-new.svg"
  />
  
  );
};

export default WhyITStaff;
