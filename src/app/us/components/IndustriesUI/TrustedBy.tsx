import React from 'react';
import bgImg from '../../../../../public/IndustriesModal/banners/mcansey-health-banner.webp';

import TrustedByCommon from './common/TrustedByCommon';
import { Logos } from './Banking/TrustedByBanking';


const TrustedBy: React.FC = () => {
  return (
    <TrustedByCommon
      title="Healthcare Software Development Services"
      description="We design smart, user-friendly, and resilient healthcare applications to meet the dynamic needs of the rapidly changing healthcare sector. Collaborating with healthcare organizations of all sizes—from innovative start-ups and growing businesses to established mid-market and global enterprises—we develop bespoke healthcare solutions tailored to their unique requirements."
      buttonText="Talk to our experts"
      bgImage={bgImg.src}
      logos={Logos}
    />
  );
};

export default TrustedBy;
