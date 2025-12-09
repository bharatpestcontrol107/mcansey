
import React from 'react';

import Banner from '../components/About/Banner';

import StatsSection from '../components/Home/StatSection';
import FeatureSection from '../components/About/FeatureSection';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "MCANSEY: Tech for a Brighter Future",
    description: "As technologists, we believe in the power of technology to improve society. Learn about MCANSEY's mission to advocate for positive change and create a brighter future for all.",
    keywords: "MCANSEY, Mcansey, MCANSEY IT Services, Mcansey company, Mcansey Software Development Company, Mcansey Mobile App Development Company, Mcansey Website Development Company, It service company, it consulting company, Mcansey Website Design Company, MCANSEY Technology for a brighter future, MCANSEY Mission-driven technology",
    alternates: {
      canonical: 'https://www.mcansey.com/about',
      languages: {
        'en-US': 'https://www.mcansey.com/about',
      },
    },
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    openGraph: {
      type: 'article',
      locale: 'en_US',
      title: 'MCANSEY: Tech for a Brighter Future',
      description: "'As technologists, we believe in the power of technology to improve society. Learn about MCANSEY's mission to advocate for positive change and create a brighter future for all.'",
      url: 'https://www.mcansey.com/about',
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

      <Banner />
      {/* <Timeline/> */}
      <StatsSection />
      <FeatureSection />

    </>
  );
}

export default Page;
