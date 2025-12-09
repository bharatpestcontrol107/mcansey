import FormSection from "../components/Home/FormSection";
import Homedd from "../components/Header";
import IndustryGrid from "../components/Home/IndustryGrid";
import StrategicPartnerships from "../components/Home/StrategicPartnerships";
import TechCapabilities from "../components/Home/TechCapabilities";

import ServicesDM from "../components/DigitalMarketingUI/ServicesDM";
import AboutDM from "../components/DigitalMarketingUI/AboutDM";
import CardDMarketing from "../components/DigitalMarketingUI/CardDMarketing";
import FAQDM from "../components/DigitalMarketingUI/FAQDM";
import { Metadata } from "next";
import AllHome from "../components/common/AllHome";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "MCANSEY: Best Digital Marketing Agency & Services Company",
    description: "Mcansey is the best digital marketing company & agency offering professional digital marketing services with proven results. Contact us today.",
    keywords: "digital marketing services, digital marketing service company, digital marketing company, digital marketing agency, top digital marketing company, best digital marketing company, best digital marketing services, best digital marketing agency, marketing agency near me, digital marketing near me, digital marketing strategy, marketing agency for small business, digital marketing consultant, performance marketing agencies",
    alternates: {
      canonical: 'https://mcansey.com/digital-marketing-company',
      languages: {
        'en-IN': 'https://mcansey.com/digital-marketing-company',
      },
    },
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    openGraph: {
      type: 'article',
      locale: 'en_IN',
      url: 'https://mcansey.com/digital-marketing-company',
      siteName: 'mcansey',
      images: 'https://www.mcansey.com/_next/static/media/Mcansey%20100X100.c2291536.svg',
    },
    icons: [
      { rel: "icon", url: "https://www.mcansey.com/_next/static/media/Mcansey%20100X100.c2291536.svg" },
      { rel: "apple-touch-icon", url: 'https://www.mcansey.com/_next/static/media/Mcansey%20100X100.c2291536.svg' }
    ],
    other: {
      'geo.country': 'India',
      'geo.state': 'Maharashtra',
      'geo.placename': 'Mcansey',
      'geo.position': '19.286494085066657, 72.88160862883541',
      'geo.region': 'Mumbai',
      'google-site-verification': '3oCiYOOuCAKrcnIig2rwlsdhlcHG0-inkEO_qMd1PPo',
    },
  };
}
export default function ProductIdeation() {
  return (
    <>
    <AllHome title="Amplify Your Brand’s Reach with Proven Digital Strategies.  "
        subtitle="  Unlock the Full Potential of Your Brand with Our Digital Marketing Services"
        videoSrc="/DigitalMarketing/mcansey-digital-marketing-2.mp4" />
   
      <Homedd />
    <ServicesDM/>
    <AboutDM/>
   <CardDMarketing/>
      <IndustryGrid />
      <TechCapabilities />
      <StrategicPartnerships />
      <FormSection />
      <FAQDM />
    </>
  );
}
