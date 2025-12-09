
import React from 'react';
import Navbar from '../components/About/Navbar';
import HeroSection from '../components/About/HeroSection';
import PartnerSection from '../components/About/PartnerSection';
import StandoutSection from '../components/LandingPage/StandoutSection';
import ProcessSection from '../components/LandingPage/ProcessSection';
import { ProjectsSection } from '../components/LandingPage/ProjectSection';
import IndustrySection from '../components/LandingPage/IndustrySection';
import PricingSection from '../components/LandingPage/PricingSection';
import FAQSection from '../components/LandingPage/FAQSection';
import TeamSection from '../components/LandingPage/TeamSection';
import TestimonialsSection from '../components/LandingPage/TestimonialSection';
import ContactFooter from '../components/LandingPage/ContactFooter';
import { Metadata } from 'next';
import ShopifyCTA from '../components/LandingPage/ShopifyCTA';
import OurPlansPromotional from '../components/ShopifyPage/OurPlansPromotional';



export async function generateMetadata(): Promise<Metadata> {
  return {
      title: "Best Website Design Company & Services | MCANSEY",
      description: "Mcansey is the best website design company in worldwide. Deliver high quality, cost effective & engaging websites design services for your businesses.",
      keywords: "website design company, website design services, best website design company, best website design services, best website design agency",
      alternates: {
          canonical: 'https://www.mcansey.com/website-design-promotional-page',
          languages: {
              'en-US': 'https://www.mcansey.com/website-design-promotional-page',
          },
      },
      robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      openGraph: {
          type: 'article',
          locale: 'en_US',
          url: 'https://www.mcansey.com/website-design-promotional-page',
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

function Page() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <PartnerSection />
      <StandoutSection/>
      <ProcessSection/>
      <ProjectsSection/>
      <IndustrySection/>
      <PricingSection/>
      <ShopifyCTA />
      <OurPlansPromotional />
      <FAQSection/>
      <TeamSection/>
      <TestimonialsSection/>
      <ContactFooter/>
    </>
  );
}

export default Page;
