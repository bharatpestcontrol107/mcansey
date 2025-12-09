import React from 'react';
import bgImg from '../../../../../../public/IndustriesModal/banners/mcansey-real-estate.webp';
import TrustedByCommon from '../common/TrustedByCommon';
import { Logos } from '../Banking/TrustedByBanking';


const TrustedByRealEstate: React.FC = () => {
  return (
    <TrustedByCommon
      title="Real Estate Software Solutions"
      description="Bridging the gap between buyers and real estate businesses through technology.Your first real estate software solutions consulting session is on us!"
      buttonText="Talk to our experts"
      bgImage={bgImg.src}
      logos={Logos}
    />
  );
};

export default TrustedByRealEstate;
