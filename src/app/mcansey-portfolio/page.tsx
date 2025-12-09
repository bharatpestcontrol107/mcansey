
import React from 'react';
import SuccessStory from '../components/Portfolio/portfolioContents/SuccessStory';
import AboutClient from '../components/Portfolio/portfolioContents/AboutClient';
import BusinessSituation from '../components/Portfolio/portfolioContents/BusinessSituation';
import ProductFeatures from '../components/Portfolio/portfolioContents/ProductFeactures';
import SolutionProvided from '../components/Portfolio/portfolioContents/SolutionProvided';
import OutcomesContent from '../components/Portfolio/portfolioContents/OutcomesContent';
import FormSection from '../components/Home/FormSection';
import RelatedCasestudies from '../components/Portfolio/portfolioContents/RelatedCasestudies';
import { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';





export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "MCANSEY Portfolio | MCANSEY",
    description: "Explore MCANSEY's professional portfolio showcasing cutting-edge digital solutions, design innovation, and strategic development for modern businesses.",
    keywords: "MCANSEY portfolio, digital solutions, web design, innovation, digital marketing, strategic development, cutting-edge technology, creative agency, business growth",
    alternates: {
      canonical: 'https://www.mcansey.com/mcansey-portfolio',
      languages: {
        'en-IN': 'https://www.mcansey.com/mcansey-portfolio',
      },
    },
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    openGraph: {
      type: 'article',
      locale: 'en_IN',
      url: 'https://www.mcansey.com/mcansey-portfolio',
      siteName: 'MCANSEY',
      images: 'https://www.mcansey.com/_next/static/media/Mcansey%20100X100.c2291536.svg',
    },
    icons: [
      { rel: "icon", url: "https://www.mcansey.com/_next/static/media/Mcansey%20100X100.c2291536.svg" },
      { rel: "apple-touch-icon", url: 'https://www.mcansey.com/_next/static/media/Mcansey%20100X100.c2291536.svg' }
    ],
    other: {
      'geo.country': 'India',
      'geo.state': 'Maharashtra',
      'geo.placename': 'MCANSEY',
      'geo.position': '19.286494085066657, 72.88160862883541',
      'geo.region': 'Mumbai',
      'google-site-verification': '3oCiYOOuCAKrcnIig2rwlsdhlcHG0-inkEO_qMd1PPo',
    },
  };
}

function Page() {

  return (
    <>
    <Navbar/>
   <div className='max-w-7xl mx-auto px-2'>
  <SuccessStory/>
  <AboutClient
      country="India"
      industry="Healthcare"
      services={["Healthcare Software Development", "AI Development Services", "UI/UX Design Services"]}
      description="The client is a Europe-based healthcare company focused on simplifying meal planning. It creates customized meal plans that cater to users' dietary preferences, goals, and schedules to make healthy eating accessible and convenient. Through an emphasis on empowering users, the client assists individuals in achieving their nutritional goals by offering personalized assistance tailored to their lifestyles."
      imageUrl="/images/Banner.webp"
    />
    <BusinessSituation/>
    <SolutionProvided/>
    <ProductFeatures/>
    <OutcomesContent/>
    <RelatedCasestudies/>
    <FormSection/>
   </div>
   <Footer/></>
   
  );
}

export default Page;