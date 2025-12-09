import React from "react";
import AllHome from "../components/common/AllHome";
import AboutAEM from "../components/AEM/AboutAEM";
import AEMServices from "../components/AEM/AEMServices";
import AEMProcess from "../components/AEM/AEMProcess";
import AEMFAQ from "../components/AEM/AEMFAQ";
import AwardsCarousel from "../components/Header";
import IndustryGrid from "../components/Home/IndustryGrid";
import TechCapabilities from "../components/Home/TechCapabilities";
import  StrategicPartnerships from "../components/Home/StrategicPartnerships";
import FormSection from "../components/Home/FormSection";
import { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export async function generateMetadata(): Promise<Metadata> {
    return {
      title: "AEM Development Company In India | MCANSEY",
      description: "MCANSEY offers professional AEM development services, delivering responsive websites, applications, and digital solutions tailored to your business. Our certified AEM developers ensure robust, scalable, and high-performance results. Get started today!",
      keywords: "AEM development, AEM Company In India, AEM Company, AEM Development Company, AEM Development Company in India, AEM Development Services, AEM Development Services in India,  Adobe Experience Manager development, AEM web development, AEM application development, hire AEM developers, AEM custom solutions, AEM development services, scalable AEM solutions, AEM website development, AEM experts",
      alternates: {
        canonical: 'https://www.mcansey.com/aem-development-company',
        languages: {
          'en-US': 'https://www.mcansey.com/aem-development-company',
        },
      },
      robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      openGraph: {
        type: 'article',
        locale: 'en_US',
        url: 'https://www.mcansey.com/aem-development-company',
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

export default function AEMDevelopment(){
    return(
    <>
    <Navbar/>
       <AllHome title="AEM Development Company"
               subtitle="We are a leading AEM development company that offers end-to-end Adobe Experience Manager development services to help you create, manage, and optimize digital experiences."
               backgroundImage="/Banners/mcansey-it-consulting-company.webp"
               mobileBackgroundImage="/Banners/mcansey-it-services.webp"
               /> 
        <AwardsCarousel/>
        <AEMServices/>
        <AboutAEM/>
        <AEMProcess/>
        <IndustryGrid/>
        <TechCapabilities/>
        <StrategicPartnerships/>
        <FormSection/>
        <AEMFAQ/>
        <Footer/>
    </>
    )
}

