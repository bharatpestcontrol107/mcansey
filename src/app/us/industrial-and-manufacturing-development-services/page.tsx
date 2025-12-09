import React from "react";
import TrustedByIndustrial from "../components/IndustriesUI/IndustrialManufacturing/TrustedByIndustrial";
import IndustrialServices from "../components/IndustriesUI/IndustrialManufacturing/IndustrialServices";
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
      title: "Industrial & Manufacturing Development Services - | MCANSEY",
      description: "Mcansey offers the best Industrial & Manufacturing Development Services to help you achieve operational excellence and drive business growth. Know more.",
      keywords: " Indsutrial and Manufacturing Development Services,  Industrial and Manufacturing Development Services in India, Industrial and Manufacturing Development, Mcansey for Industrial services, Mcansey for Manufacturing services",
      alternates: {
        canonical: 'https://www.mcansey.com/industrial-and-manufacturing-development-services',
        languages: {
          'en-IN': 'https://www.mcansey.com/industrial-and-manufacturing-development-services',
        },
      },
      robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      openGraph: {
        type: 'article',
        locale: 'en_IN',
        url: 'https://www.mcansey.com/industrial-and-manufacturing-development-services',
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
export default function IndustryManufacturingPage(){
    return(
        <>
       <TrustedByIndustrial/>
       <IndustrialServices/>
       <BrandLogos/>
        <TestimonialsSlider/>
        <IndustryGrid hiddenIndustry="Manufacturing"/>
        <TechCapabilities/>
        <StrategicPartnerships/>
        <FormSection/>
        <FAQ/>
        </>
    )
}

