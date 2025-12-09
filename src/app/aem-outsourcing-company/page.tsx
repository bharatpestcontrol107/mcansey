import Homedd from "../components/Header";
import IndustryGrid from "../components/Home/IndustryGrid";
import StrategicPartnerships from "../components/Home/StrategicPartnerships";
import TechCapabilities from "../components/Home/TechCapabilities";
import { Metadata } from "next";


import AllHome from "../components/common/AllHome";

import AEMOutSourcingFAQ from "../components/AEMOutsourcing/AEMOutSourcingFAQ";
import AEMOutSourcingServices from "../components/AEMOutsourcing/AEMOutSourcingServices";
import ProcessOutsourcing from "../components/AEMOutsourcing/ProcessOutsourcing";
import WhyAEM from "../components/AEMOutsourcing/WhyAEM";
import FormSection from "../components/Home/FormSection";
import StatsSection from "../components/Home/StatSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "AEM Outsourcing Company In India | MCANSEY",
    description: "MCANSEY is leading AEM Outsourcing Company in India. We provide AEM Outsourcing services to clients across the globe. Hire Best AEM Resources from MCANSEY on Contract and Remote basis. ",
    keywords: "AEM outsourcing, hire AEM developers, AEM experts, AEM resource outsourcing, AEM solutions, AEM consultants, AEM outsourcing services, AEM development outsourcing, AEM specialists, Adobe Experience Manager outsourcing, AEM Outsourcing Company In India, AEM Services in India, AEM Outsourcing Services in India, Hire AEM Resources, Hire AEM Developers, Top AEM Outsourcing Company, Top AEM Outsourcing Company in India, Best AEM Outsourcing Company in India, Hire AEM Resources from India, AEM Staffing Solution India, AEM Resource Outsourcing company india.",
    alternates: {
      canonical: 'https://www.mcansey.com/aem-outsourcing-company',
      languages: {
        'en-US': 'https://www.mcansey.com/aem-outsourcing-company',
      },
    },
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    openGraph: {
      type: 'article',
      locale: 'en_US',
      url: 'https://www.mcansey.com/aem-outsourcing-company',
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

export default function AEMOutSourcingCompany() {
  return (
    <>
    <Navbar/>
    <AllHome title={<>Leading AEM Outsourcing <br /> Company In India</>}
        subtitle="MCANSEY specializes in Adobe Experience Manager (AEM) outsourcing services, delivering secure, scalable, and tailored solutions. Collaborate with us to enhance your digital presence with expert AEM development and seamless project execution."
        backgroundImage="/Banners/It-staff-augmentation.webp"
        mobileBackgroundImage="/Banners/mcansey-it-services.webp" />
      <Homedd />
    <AEMOutSourcingServices/>
    <StatsSection/>
    <WhyAEM/>
      <ProcessOutsourcing />
      <IndustryGrid />
      <TechCapabilities />
      <StrategicPartnerships />
      <FormSection/>
      <AEMOutSourcingFAQ/>
      <Footer/>
    </>
  );
}
