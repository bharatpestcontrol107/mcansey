import React from "react";
import TrustedByMedia from "../components/IndustriesUI/Media/TrustedByMedia";
import MediaServices from "../components/IndustriesUI/Media/MediaServices";
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
      title: "Media &amp; Entertainment Software Solutions | MCANSEY",
      description: "Mcansey offers the media &amp; entertainment software solutions which enables you to provide an omni-channel and engaging experience to your viewers. Know More.",
      keywords: " Media and Entertainment software solutions, Media and Entertainment software development, Media and Entertainment software development services, Media software solutions, Entertainment software solutions",
      alternates: {
        canonical: 'https://www.mcansey.com/media-and-entertainment-software-solutions',
        languages: {
          'en-IN': 'https://www.mcansey.com/media-and-entertainment-software-solutions',
        },
      },
      robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      openGraph: {
        type: 'article',
        locale: 'en_IN',
        url: 'https://www.mcansey.com/media-and-entertainment-software-solutions',
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
export default function MediaPage(){
    return(
        <>
        <TrustedByMedia/>
        <MediaServices/>
        <BrandLogos/>
        <TestimonialsSlider/>
        <IndustryGrid hiddenIndustry="Entertainment"/>
        <TechCapabilities/>
        <StrategicPartnerships/>
        <FormSection/>
        <FAQ/>
        </>
    )
}

