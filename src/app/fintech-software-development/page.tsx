import React from "react";
import TrustedByFintech from "../components/IndustriesUI/Fintech/TrustedByFintech";
import FintechServices from "../components/IndustriesUI/Fintech/FintechServices";
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
      title: "Fintech Software Development Services | MCANSEY",
      description: "Fintech Software Development Services, Transform your financial operations with customized, secure, and scalable software solutions.",
      keywords: "fintech software development services, fintech software development, fintech software development company, Mcansey for fintech software development",
      alternates: {
        canonical: 'https://www.mcansey.com/fintech-software-development-services',
        languages: {
          'en-IN': 'https://www.mcansey.com/fintech-software-development-services',
        },
      },
      robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      openGraph: {
        type: 'article',
        locale: 'en_IN',
        url: 'https://www.mcansey.com/fintech-software-development-services',
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
export default function FintechPage(){
    return(
        <>
        <Navbar/>
        <TrustedByFintech/>
        <FintechServices/>
        <BrandLogos/>
        <TestimonialsSlider/>
        <IndustryGrid hiddenIndustry="Finance"/>
        <TechCapabilities/>
        <StrategicPartnerships/>
        <FormSection/>
        <FAQ/>
        <Footer/>
        </>
    )
}

