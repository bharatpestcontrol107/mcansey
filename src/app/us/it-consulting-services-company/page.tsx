import FormSection from "../components/Home/FormSection";
import Homedd from "../components/Header";
import IndustryGrid from "../components/Home/IndustryGrid";
import Office from "../components/Home/Office";
import StrategicPartnerships from "../components/Home/StrategicPartnerships";
import TechCapabilities from "../components/Home/TechCapabilities";
import ServicesIT from "../components/ItConsulting/ServicesIT";
import AboutItConsulting from "../components/ItConsulting/AboutItConsulting";
import CardIT from "../components/ItConsulting/CardIT";
import FAQIt from "../components/ItConsulting/FAQIt";
import { Metadata } from "next";
import AllHome from "../components/common/AllHome";




export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Information Technology Consulting Services & Company | MCANSEY",
    description: "Mcansey: Trusted IT services & consulting company. We help implement the right tech solution & provide software consulting service to simplify workflows.",
    keywords: "IT consulting services, IT consulting company, IT consulting firm, IT services and IT consulting, IT services company, IT consulting services company, Information Technology (IT) Consulting Services, it consultant company, it services company, it consulting companies near me, it consulting firms near me, top it consulting firms, it consulting firms, it services and it consulting companies, best it consulting firms, largest it consulting firms, it strategy consultant, best it consulting, it solution consulting",
    alternates: {
      canonical: 'https://www.mcansey.com/it-consulting-services-company',
      languages: {
        'en-IN': 'https://www.mcansey.com/it-consulting-services-company',
      },
    },
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    openGraph: {
      type: 'article',
      locale: 'en_IN',
      url: 'https://www.mcansey.com/it-consulting-services-company',
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

export default function Itconsulting() {
  return (
    <>
    <AllHome title="Stay Ahead of Threats with Advanced Cyber Security Solutions. "
        subtitle="  Comprehensive Cyber Security Services to Safeguard Your Digital Assets"
        videoSrc="/Itconsulting/mcansey-it-consulting.mp4" />
    
      <Homedd />
      <ServicesIT />
      <AboutItConsulting />
      <CardIT />
      <IndustryGrid />
      <TechCapabilities />
      <StrategicPartnerships />
      <FormSection />
      <FAQIt />
      <Office />
    </>
  );
}
