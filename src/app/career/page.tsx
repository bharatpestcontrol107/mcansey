
import React from 'react';
import JobFilter from '../components/Career/JobFilter';
import { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Start Your Career at MCANSEY - Join Our Innovative Team",
    description: "Explore rewarding career opportunities at MCANSEY. Join our innovative team and help shape the future with exciting projects.",
    keywords: "Career at MCANSEY, Join MCANSEY team, MCANSEY careers, Innovative career opportunities, Work at MCANSEY, MCANSEY job openings, Career growth MCANSEY, Join our team MCANSEY, MCANSEY employment, Start career MCANSEY, MCANSEY recruitment, Innovation jobs MCANSEY, Build career at MCANSEY, Job opportunities MCANSEY",
    alternates: {
      canonical: 'https://www.mcansey.com/career',
      languages: {
        'en-US': 'https://www.mcansey.com/career',
      },
    },
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    openGraph: {
      type: 'article',
      locale: 'en_US',
      url: 'https://www.mcansey.com/career',
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
  <JobFilter/>
   <Footer/>
    </>
  );
}

export default Page;
