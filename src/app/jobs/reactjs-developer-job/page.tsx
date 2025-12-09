import JobCard from "@/app/components/Career/React-Developer/JobCard";
import JobLayout from "@/app/components/Career/React-Developer/JobLayout";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "React Js Developer | MCANSEY",
    description: " MCANSEY is hiring React Js Developers. Apply for React Js Developer Jobs in Mumbai, India. ",
    keywords: "React Js Developer Jobs, React Js Developer, ",
    alternates: {
      canonical: 'https://www.mcansey.com/jobs/reactjs-developer/',
      languages: {
        'en-US': 'https://www.mcansey.com/jobs/reactjs-developer/',
      },
    },
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    openGraph: {
      type: 'article',
      locale: 'en_US',
      url: 'https://www.mcansey.com/jobs/reactjs-developer/',
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
export default function JobMain() {
  return (
    <>
    <Navbar/>
    <JobCard/>
    <JobLayout/>
  <Footer/>
    </>
  );
}
