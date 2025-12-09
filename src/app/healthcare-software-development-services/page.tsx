import React from "react";
import TrustedBySection from "../components/IndustriesUI/TrustedBy";
import HealthServices from "../components/IndustriesUI/HealthServices";
import BrandLogos from "../components/Home/BrandLogos";
import TestimonialsSlider from "../components/Home/Testimonials";
import IndustryGrid from "../components/Home/IndustryGrid";
import TechCapabilities from "../components/Home/TechCapabilities";
import StrategicPartnerships from "../components/Home/StrategicPartnerships";
import FormSection from "../components/Home/FormSection";
import FAQ from "../components/Home/FAQItem";
import { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export async function generateMetadata(): Promise<Metadata> {
    return {
      title: "Healthcare Software Development Services - | MCANSEY",
      description: "Transform healthcare operations and enhance patient care with our custom healthcare software development services. Empowering healthcare providers to deliver exceptional outcomes.",
      keywords: "healthcare software development services, healthcare software development, Mcansey for healthcare software development, healthcare software development company,",
      alternates: {
        canonical: 'https://www.mcansey.com/healthcare-software-development-services',
        languages: {
          'en-IN': 'https://www.mcansey.com/healthcare-software-development-services',
        },
      },
      robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      openGraph: {
        type: 'article',
        locale: 'en_IN',
        url: 'https://www.mcansey.com/healthcare-software-development-services',
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
export default function HealthCarePage(){
    return(
        <>
        <Navbar/>
        <TrustedBySection/>
        <HealthServices/>
        <BrandLogos/>
        <TestimonialsSlider/>
        <IndustryGrid hiddenIndustry="Healthcare"/>
        <TechCapabilities/>
        <StrategicPartnerships/>
        <FormSection/>
        <FAQ/>
        <Footer/>
        </>
    )
}

