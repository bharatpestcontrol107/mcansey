import React from 'react';
import bgImg from '../../../../../public/IndustriesModal/banners/mcansey-software-banner.webp';
import TrustedByCommon from '../common/TrustedByCommon';
import { Logos } from '../Banking/TrustedByBanking';



const TrustedBySoft: React.FC = () => {
  return (
    <TrustedByCommon
      title="Software Development Services"
      description="With extensive experience in custom software development and a proven track record of excellence, we deliver innovative, reliable, and scalable software solutions tailored to your specific needs. As a leading custom software development company, Mcansey Software has acquired valuable expertise across multiple sectors, including healthcare, digital commerce, finance, retail, education, media, and entertainment."
      buttonText="Talk to our experts"
      bgImage={bgImg.src}
      logos={Logos}
    />
  );
};

export default TrustedBySoft;
