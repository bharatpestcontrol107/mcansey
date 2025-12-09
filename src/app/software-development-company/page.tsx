import FormSection from "../components/Home/FormSection";
import Homedd from "../components/Header";
import IndustryGrid from "../components/Home/IndustryGrid";
import StrategicPartnerships from "../components/Home/StrategicPartnerships";
import TechCapabilities from "../components/Home/TechCapabilities";

import ServicesSoftware from "../components/SoftwareDevelopment/ServicesSoftware";
import WhyweSoftware from "../components/SoftwareDevelopment/WhyweSoftware";
import SoftwareSliderData from "../components/SoftwareDevelopment/SoftwareSliderData";
import FAQSoftware from "../components/SoftwareDevelopment/FAQSoftware";
import { Metadata } from "next";
import AllHome from "../components/common/AllHome";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Software Development Company & Services | MCANSEY",
    description: "Mcansey, a leading software development company worldwide, offers the best software development services with expertise in coding, design, and testing.",
    keywords: "software development company, software development service, app development software, nearshore software development services, software development outsourcing companies, software outsourcing companies, custom software development companies, outsourcing software development, custom software development, software development companies near me, best software development companies, software development agency, top software development company",
    alternates: {
      canonical: 'https://www.mcansey.com/software-development-company',
      languages: {
        'en-US': 'https://www.mcansey.com/software-development-company',
      },
    },
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    openGraph: {
      type: 'article',
      locale: 'en_US',
      url: 'https://www.mcansey.com/software-development-company',
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

export default function SoftwareDevelopment() {
  return (
    <>
    <Navbar/>
    <AllHome title={(<>Transforming Ideas into <br/> Powerful, Scalable Software</>)}
        subtitle=" Unlock the Full Potential of Your Business with Our Expert Software Solutions"
        backgroundImage="/Banners/mcansey-software-development-company.webp" 
        mobileBackgroundImage="/Banners/mcansey-software-mobile.webp"
        />
      
      <Homedd />
      <ServicesSoftware />
      <WhyweSoftware />
      <SoftwareSliderData />
      <IndustryGrid />
      <TechCapabilities />
      <StrategicPartnerships />
      <FormSection />
      <FAQSoftware />
      <Footer/>
    </>
  );
}
