import React from 'react';
import bgImg from '../../../../../public/IndustriesModal/banners/mcansey-public-banner.webp';
import TrustedByCommon from '../common/TrustedByCommon';
import { Logos } from '../Banking/TrustedByBanking';



const TrustedByPublicSector: React.FC = () => {
  return (
    <TrustedByCommon
      title="Software Solutions for Public Sector"
      description="Empowering public sector organizations to embrace cutting-edge digital technologies that enhance service delivery, improve citizen engagement, and provide valuable insights. Our solutions help drive digital transformation, fostering efficiency, transparency, and a more connected public sector experience."
      buttonText="Talk to our experts"
      bgImage={bgImg.src}
      logos={Logos}
    />
  );
};

export default TrustedByPublicSector;
