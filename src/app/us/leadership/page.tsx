import React from 'react';
import TeamGrid from '../components/Leadership/TeamMembers';
import LeadershipBanner from '../components/Leadership/LeadershipBanner';
import TeamGallery from '../components/Leadership/TeamGallery';
import Lead from '../components/Leadership/Lead';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "MCANSEY Leadership: leading with vision and expertise",
    description: "Meet the leadership team at MCANSEY, a team of experts with a vision to drive innovation and growth. Learn about our leadership team.",
    keywords: "MCANSEY Leadership, Leadership team, Leadership at MCANSEY, Leadership vision, Leadership innovation, Leadership growth, Leadership experts, Leadership team at MCANSEY, Leadership team vision, Leadership team innovation, Leadership team growth",
    alternates: {
      canonical: 'https://www.mcansey.com/leadership',
      languages: {
        'en-IN': 'https://www.mcansey.com/leadership',
      },
    },
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    openGraph: {
      type: 'article',
      locale: 'en_IN',
      url: 'https://www.mcansey.com/leadership',
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
    <LeadershipBanner/>
    <Lead/>
    <TeamGrid/>
    <TeamGallery/>
    </>
  );
}

export default Page;
