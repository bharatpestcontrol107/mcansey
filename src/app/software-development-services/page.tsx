import React from "react";
import TrustedBySoft from "../components/IndustriesUI/software&tech/TrustedBySoft";
import SoftwareServices from "../components/IndustriesUI/software&tech/SoftwareServices";
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
      title: "Software Development Services | MCANSEY",
      description: "Trusted Software Development Services focused on quality and innovation. Transform your operations with custom-built, scalable solutions.",
      keywords: "",
      alternates: {
        canonical: 'https://www.mcansey.com/software-development-services',
        languages: {
          'en-IN': 'https://www.mcansey.com/software-development-services',
        },
      },
      robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      openGraph: {
        type: 'article',
        locale: 'en_IN',
        url: 'https://www.mcansey.com/software-development-services',
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
export default function SoftwarePage(){
    return(
        <>
        <Navbar/>
        <TrustedBySoft/>
       <SoftwareServices/>
       <BrandLogos/>
        <TestimonialsSlider/>
        <IndustryGrid/>
        <TechCapabilities/>
        <StrategicPartnerships/>
        <FormSection/>
        <FAQ/>
        <Footer/>
        </>
    )
}

