import React from "react";

import TrustedByBanking from "../components/IndustriesUI/Banking/TrustedByBanking";
import BankingServices from "../components/IndustriesUI/Banking/BankingServices";
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
    title: "Banking IT Services | MCANSEY",
    description: "With Mcansey industry-leading Banking IT Services, Shield your banking systems from evolving cyber threats . Our experienced team will help you develop and maintain secure and reliable IT systems that meet your specific needs.",
    keywords: "Banking IT Services, Banking Software Solutions, Banking IT Solutions, Banking software development company, ",
    alternates: {
      canonical: 'https://www.mcansey.com/banking-it-services',
      languages: {
        'en-IN': 'https://www.mcansey.com/banking-it-services',
      },
    },
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    openGraph: {
      type: 'article',
      locale: 'en_IN',
      url: 'https://www.mcansey.com/banking-it-services',
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
export default function BankingPage(){
    return(
      <>
        <TrustedByBanking/>
        <BankingServices/>
        <BrandLogos/>
        <TestimonialsSlider/>
        <IndustryGrid/>
        <TechCapabilities/>
        <StrategicPartnerships/>
        <FormSection/>
        <FAQ/>
        </>
    )
}

