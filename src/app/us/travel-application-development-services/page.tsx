import React from "react";
import TrustedByTravel from "../components/IndustriesUI/Travel-Transportation/TrustedByTravel";
import TravelTransportServices from "../components/IndustriesUI/Travel-Transportation/TravelTransportServices";
import BrandLogos from "../components/Home/BrandLogos";
import TestimonialsSlider from "../components/Home/Testimonials";
import IndustryGrid from "../components/Home/IndustryGrid";
import TechCapabilities from "../components/Home/TechCapabilities";
import StrategicPartnerships from "../components/Home/StrategicPartnerships";
import FormSection from "../components/Home/FormSection";
import FAQ from "../components/Home/FAQItem";
import { Metadata } from "next";





export async function generateMetadata(): Promise<Metadata> {
    return {
      title: "Travel App Development Company Trusted Globally | MCANSEY",
      description: "Travel App Development Company delivering cutting-edge, user-centric travel apps. Custom app to enhance booking, navigation, and management.",
      keywords:  "Travel App Development, Travel App Development Company, Travel App Development Services, Travel App Development Company, Travel Services, Travel  ",
      alternates: {
        canonical: 'https://www.mcansey.com/travel-application-development-services',
        languages: {
          'en-IN': 'https://www.mcansey.com/travel-application-development-services',
        },
      },
      robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      openGraph: {
        type: 'article',
        locale: 'en_IN',
        url: 'https://www.mcansey.com/travel-application-development-services',
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
export default function TravelPage(){
    return(
        <>
       <TrustedByTravel/>
       <TravelTransportServices/>
       <BrandLogos/>
        <TestimonialsSlider/>
        <IndustryGrid hiddenIndustry="Travel"/>
        <TechCapabilities/>
        <StrategicPartnerships/>
        <FormSection/>
        <FAQ/>
        </>
    )
}

