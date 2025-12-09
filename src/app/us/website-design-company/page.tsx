import FormSection from "../components/Home/FormSection";
import Homedd from "../components/Header";
import IndustryGrid from "../components/Home/IndustryGrid";
import Office from "../components/Home/Office";
import StrategicPartnerships from "../components/Home/StrategicPartnerships";
import TechCapabilities from "../components/Home/TechCapabilities";
import Stat from "../components/Development/Stat";
import Customsection from "../components/Development/CustomSection";
import Technologies from "../components/Development/Technologies";
import WebsiteDesignFAQ from "../components/Development/WebsiteDesignFAQ";
import { Metadata } from "next";
import AllHome from "../components/common/AllHome";
import OurWebsites from "../components/Development/OurWebsites";


export async function generateMetadata(): Promise<Metadata> {
  return {
      title: "Best Website Design Company & Services | MCANSEY",
      description: "Mcansey is the best website design company in worldwide. Deliver high quality, cost effective & engaging websites design services for your businesses.",
      keywords: "website design company, website design services, best website design company, best website design services, best website design agency",
      alternates: {
          canonical: 'https://www.mcansey.com/website-design-company',
          languages: {
              'en-US': 'https://www.mcansey.com/website-design-company',
          },
      },
      robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      openGraph: {
          type: 'article',
          locale: 'en_US',
          url: 'https://www.mcansey.com/website-design-company',
          siteName: 'MCANSEY IT Services & Consulting Pvt LTD',
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

export default function Development() {
  return (
    <>
    <AllHome title="Website Design & Development Services"
        subtitle="Our website design & development services create visually engaging and high-performance websites tailored to your business needs. From user-friendly interfaces to seamless functionality, we ensure your website delivers an exceptional experience for every visitor."
        videoSrc="/Development/6804109-sd_960_506_25fps.mp4" />
      <Homedd />
      <Stat />
      <Technologies />
      <Customsection/>
      <OurWebsites/>
      <IndustryGrid />
      <TechCapabilities />
      <StrategicPartnerships />
      <FormSection />
      <WebsiteDesignFAQ/>
      <Office />
    </>
  );
}
