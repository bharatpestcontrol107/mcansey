import React from "react";
import TrustedByRealEstate from "../components/IndustriesUI/Real-Estate/TrustedByRealEstate";
import RealEstateServices from "../components/IndustriesUI/Real-Estate/RealEstateServices";
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
      title: "Real Estate Software Solutions | MCANSEY",
      description: "Scalable real estate software solutions to bridge the gap between buyers and real estate businesses through technology. Know more.",
      keywords: "Real Estate Software Solutions, Real Estate Software Development, Real Estate Software Development Services, Real Estate Software Development Company, Real Estate Software Development Solutions, ",
      alternates: {
        canonical: 'https://www.mcansey.com/real-estate-software-development-services',
        languages: {
          'en-IN': 'https://www.mcansey.com/real-estate-software-development-services',
        },
      },
      robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      openGraph: {
        type: 'article',
        locale: 'en_IN',
        url: 'https://www.mcansey.com/real-estate-software-development-services',
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
export default function RealEstatePage(){
    return(
        <>
       <TrustedByRealEstate/>
       <RealEstateServices/>
       <BrandLogos/>
        <TestimonialsSlider/>
        <IndustryGrid hiddenIndustry="Real Estate"/>
        <TechCapabilities/>
        <StrategicPartnerships/>
        <FormSection/>
        <FAQ/>
        </>
    )
}

