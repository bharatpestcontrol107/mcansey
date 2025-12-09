import React from 'react';
import bgImg from '../../../../../public/IndustriesModal/banners/mcansey-fintech-banner.webp';
import TrustedByCommon from '../common/TrustedByCommon';
import { Logos } from '../Banking/TrustedByBanking';



const TrustedByFintech: React.FC = () => {
  return (
    <TrustedByCommon
      title="Fintech Software Development Services"
      description="Harnessing advanced financial software development expertise to transform the financial landscape. We assist brands in building user-friendly solutions that empower individuals to achieve financial security. Enjoy your first Fintech consulting session with us, absolutely free!"
      buttonText="Talk to our experts"
      bgImage={bgImg.src}
      logos={Logos}
    />
  );
};

export default TrustedByFintech;
