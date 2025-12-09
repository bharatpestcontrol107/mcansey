import React from 'react';
import bgImg from '../../../../../public/IndustriesModal/banners/mcansey-industries-banner.webp';
import TrustedByCommon from '../common/TrustedByCommon';
import { Logos } from '../Banking/TrustedByBanking';


const TrustedByIndustrial: React.FC = () => {
  return (
    <TrustedByCommon
      title="Software Solutions for Smarter Manufacturing."
      description="With many years of experience in custom software development, combined with mature processes and deep domain expertise, we deliver innovative, reliable, and robust solutions tailored to the unique demands of the industrial and manufacturing sectors. As a trusted partner for industrial innovation, we leverage cutting-edge technologies to streamline operations, enhance productivity, and drive digital transformation across the manufacturing landscape."
      buttonText="Talk to our experts"
      bgImage={bgImg.src}
      logos={Logos}
    />
  );
};

export default TrustedByIndustrial;
