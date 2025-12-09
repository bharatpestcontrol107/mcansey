import JobCard from "@/app/components/Career/React-Native/JobCard";
import JobLayout from "@/app/components/Career/React-Native/JobLayout";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "React Native Developer Jobs | MCANSEY",
    description: " MCANSEY is hiring React Native Developer. Apply for React Native Jobs in Mumbai, India. MCANSEY is a leading IT company in India. ",
    keywords: "React Native Developer Jobs, React Native Developer,",
    alternates: {
      canonical: 'https://www.mcansey.com/jobs/react-native-developer/',
      languages: {
        'en-US': 'https://www.mcansey.com/jobs/react-native-developer/',
      },
    },
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    openGraph: {
      type: 'article',
      locale: 'en_US',
      url: 'https://www.mcansey.com/jobs/react-native-developer/',
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
