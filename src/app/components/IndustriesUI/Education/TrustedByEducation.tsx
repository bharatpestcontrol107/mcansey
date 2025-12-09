import React from 'react';
import bgImg from '../../../../../public/IndustriesModal/banners/mcaney-education-banner.webp';
import TrustedByCommon from '../common/TrustedByCommon';
import { Logos } from '../Banking/TrustedByBanking';



const TrustedByEducation: React.FC = () => {
  return (
    <TrustedByCommon
      title=" Education Software Solutions"
      description="Empowering educational institutions to embrace innovative digital technologies that enhance learning experiences, improve student engagement, and provide valuable insights. Our solutions drive digital transformation in education, fostering efficiency, personalized learning, and a more connected academic environment."
      buttonText="Talk to our experts"
      bgImage={bgImg.src}
      logos={Logos}
    />
  );
};

export default TrustedByEducation;
