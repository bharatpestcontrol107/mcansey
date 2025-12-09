
import React from 'react';
import ContactBanner from '../components/Contact/ContactBanner';
import TestimonialSlider from '../components/Contact/TestimonialSlider';
import IconSlider from '../components/Contact/IconSlider';
import Locations from '../components/Contact/Locations';
import { Metadata } from 'next';



export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contact Us | MCANSEY It Services & Consulting company",
    description: "Call MCANSEY +91 9324442227 for Software Development, App Development, UI/UX Designing, Website Design & Development and other IT Services.",
    keywords: "MCANSEY Contact Us, MCANSEY It Services & Consulting company, Call MCANSEY, Digital Marketing Contact",
    alternates: {
      canonical: 'https://www.mcansey.com/contact-us',
      languages: {
        'en-IN': 'https://www.mcansey.com/contact-us',
      },
    },
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    openGraph: {
      type: 'article',
      locale: 'en_IN',
      url: 'https://www.mcansey.com/contact-us',
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
      <ContactBanner />
      <IconSlider />
      <TestimonialSlider />
      <Locations />
    </>
  );
}

export default Page;
