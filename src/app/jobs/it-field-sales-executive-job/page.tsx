import FieldSalesCard from "@/app/components/Career/Field-Sales-Specialist/FieldSalesCard";
import FieldSalesLayout from "@/app/components/Career/Field-Sales-Specialist/FieldSalesLayout";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    return {
      title: "IT Sales Executive Job in Mumbai – Field Sales Specialist",
      description: "Join MCANSEY IT Services as an IT Sales Executive in Mumbai. Leverage your field sales expertise and corporate connections to promote website design, mobile app development, and software services. Target-based role with attractive incentives.",
      keywords: "IT Sales Executive Mumbai, Field Sales IT Jobs, IT Sales Job in Mumbai, Corporate IT Sales Jobs, IT Field Sales Mumbai, Website Design Sales, Mobile App Development Sales, IT Services Sales Mumbai, IT Sales Career India, Target-Based IT Sales Jobs, Software Development Sales Jobs",
      alternates: {
        canonical: 'https://www.mcansey.com/jobs/it-field-sales-executive-job',
        languages: {
          'en-US': 'https://www.mcansey.com/jobs/it-field-sales-executive-job',
        },
      },
      robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      openGraph: {
        type: 'article',
        locale: 'en_US',
        url: 'https://www.mcansey.com/jobs/it-field-sales-executive-job',
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
export default function page() {
  return (
    <>
    <Navbar/>
  <FieldSalesCard/>
 <FieldSalesLayout/>
 <Footer/>
    </>
  );
}
