import React from 'react';
import bgImg from '../../../../../public/IndustriesModal/banners/mcansy-media-banner.webp';
import TrustedByCommon from '../common/TrustedByCommon';
import { Logos } from '../Banking/TrustedByBanking';



const TrustedByMedia: React.FC = () => {
  return (
    <TrustedByCommon
      title="Media & Entertainment Software Solutions"
      description="Empowering you to deliver a seamless, omni-channel experience to your audience across a variety of devices including web, mobile, TV, wearables, and connected devices. This ensures consistent engagement and enhances user satisfaction, regardless of the platform they choose to interact with."
      buttonText="Talk to our experts"
      bgImage={bgImg.src}
      logos={Logos}
    />
  );
};

export default TrustedByMedia;
