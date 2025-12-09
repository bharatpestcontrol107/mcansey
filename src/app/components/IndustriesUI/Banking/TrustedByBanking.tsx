import React from 'react';
import bgImg from '../../../../../public/IndustriesModal/banners/mcansey-banking-banner.webp';
import TrustedByCommon from '../common/TrustedByCommon';

export const Logos = [
  { src: '/logos/jindal-steel.png', alt: 'jindal' },
  { src: '/logos/c1-india.png', alt: 'c1' },
  { src: '/logos/rsm.png', alt: 'rsm' },
  { src: '/logos/expert-buddy.png', alt: 'Expert-Budddy' },
  { src: '/logos/intech-logo.png', alt: 'intech' },
  { src: '/logos/lords-logo.png', alt: 'Lords' },
];

const TrustedByBanking: React.FC = () => {
  return (
    <TrustedByCommon
      title="Banking IT Services"
      description="Mcansey’s banking IT services allow you to automate business practices and provide easy access to banking services from anywhere and on any device. Strengthen relationships with existing clients, create new business opportunities and stay competitive in the digital era with our banking IT solutionsYour first banking IT services session is on us! "
      buttonText="Talk to our experts"
      bgImage={bgImg.src}
      logos={Logos}
    />
  );
};

export default TrustedByBanking;
