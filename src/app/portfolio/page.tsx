import React from 'react';

import { Metadata } from 'next';

import Portfolio from '../components/Portfolio/NewPortfolio/Portfolio';
import ThankYou from '../components/ThankYouPage/ThankYou';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "MCANSEY Portfolio: providing top-notch services to clients",
    description: "check out our portfolio of projects and services we have delivered to our clients. We have worked with clients from various industries and have delivered top-notch services.",
    keywords: "Portfolio, MCANSEY Portfolio, Portfolio of projects, Portfolio of services, Portfolio of clients, Portfolio of industries, Portfolio of top-notch services",
    alternates: {
      canonical: 'https://www.mcansey.com/portfolio',
      languages: {
        'en-IN': 'https://www.mcansey.com/portfolio',
      },
    },
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    openGraph: {
      type: 'article',
      locale: 'en_IN',
      url: 'https://www.mcansey.com/portfolio',
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
function Page() {

  return (
    <>  
  <Navbar/>
    <Portfolio/>
  <Footer/>
    </>
  );
}

export default Page;
