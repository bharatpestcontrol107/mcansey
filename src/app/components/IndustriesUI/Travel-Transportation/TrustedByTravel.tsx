import React from 'react';
import bgImg from '../../../../../public/IndustriesModal/banners/mcansey-travel-banner.webp';
import TrustedByCommon from '../common/TrustedByCommon';
import { Logos } from '../Banking/TrustedByBanking';



const TrustedByTravel: React.FC = () => {
  return (
    <TrustedByCommon
      title="Travel App Development Company"
      description="As a leading travel app development company, our expertise lies in building stand-out travel applications that capture user attention, drive engagement & deliver immersive experiences to your customers. Connect with our experts to develop high-performing, engaging and intuitive travel applications from scratch or update your existing app with next-gen features with us!"
      buttonText="Talk to our experts"
      bgImage={bgImg.src}
      logos={Logos}
    />
  );
};

export default TrustedByTravel;
