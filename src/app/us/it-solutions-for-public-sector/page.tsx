import React from "react";

import TrustedByPublicSector from "../components/IndustriesUI/PublicSector/TrustedByPublicSector";
import PublicSectorServices from "../components/IndustriesUI/PublicSector/PublicSectorServices";
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
      title: "Software solutions for Public Sector | MCANSEY",
      description: "Enabling public sector organizations to deploy smart governance and empower citizens with automation and modern technology. Know more here.",
      keywords: " Public Sector Software Solutions, Public Sector Software Development, Public Sector Software Development Services, Mcansey for public sector",
      alternates: {
        canonical: 'https://www.mcansey.com/it-solutions-for-public-sector',
        languages: {
          'en-IN': 'https://www.mcansey.com/it-solutions-for-public-sector',
        },
      },
      robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      openGraph: {
        type: 'article',
        locale: 'en_IN',
        url: 'https://www.mcansey.com/it-solutions-for-public-sector',
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
export default function PublicSectorPage(){
    return(
        <>
        <TrustedByPublicSector/>
        <PublicSectorServices/>
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

