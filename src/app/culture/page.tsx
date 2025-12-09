
import React from 'react';

import { Metadata } from 'next';
import CultureSection from '../components/Culture/NewCulture/CultureSection';
import CoreValues from '../components/Culture/NewCulture/CoreValues';
import Team from '../components/Culture/NewCulture/Team';
import CultureFilter from '../components/Culture/NewCulture/CultureFilter';
import TestimonialCarousel from '../components/Culture/NewCulture/TestimonialCarousel';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "MCANSEY Culture: Valuing Team, Driving Innovation & Growth",
    description: "At MCANSEY, we believe in a workplace where everyone feels valued & inspired. Learn about our values, inspiring innovation and a culture of growth.",
    keywords: "MCANSEY Culture, Teamwork values, Innovation and growth, Company culture, Team collaboration, Workplace innovation, Growth-driven culture, Employee values, Organizational culture, Innovation in teams, Team-driven success, Workplace growth",
    alternates: {
      canonical: 'https://www.mcansey.com/culture',
      languages: {
        'en-US': 'https://www.mcansey.com/culture',
      },
    },
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    openGraph: {
      type: 'article',
      locale: 'en_US',
      url: 'https://www.mcansey.com/culture',
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
    },
  };
}
function Page() {

  return (
    <>
    <Navbar/>
      <CultureSection />
      <CoreValues />
      <Team />
      <CultureFilter />
      <TestimonialCarousel />
      <Footer/>
    </>
  );
}

export default Page;
