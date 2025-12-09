import JobLayoutExecutive from "@/app/components/Career/IT-SalesExecutive/JobLayoutExecutive";
import SalesExcecutiveJobs from "@/app/components/Career/IT-SalesExecutive/SalesExcecutiveJob";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    return {
      title: "IT Sales Executive Job – LinkedIn Lead Generation & Global Sales",
      description: "Apply for the IT Sales Executive role at MCANSEY IT Services. Leverage your expertise in LinkedIn lead generation and global sales to close deals and achieve targets. Join a dynamic team specializing in IT solutions for global customers. ",
      keywords: "IT Sales Executive Job, LinkedIn Lead Generation, Global Sales Specialist, IT Sales Job, Target-Based Sales Job, IT Sales Jobs India, IT Sales Executive Jobs, IT Solutions Sales, Global Customer Sales, IT Sales Careers, LinkedIn Sales Jobs, MCANSEY IT Services Careers",
      alternates: {
        canonical: 'https://www.mcansey.com/jobs/it-sales-executive-job/',
        languages: {
          'en-US': 'https://www.mcansey.com/jobs/it-sales-executive-job/',
        },
      },
      robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      openGraph: {
        type: 'article',
        locale: 'en_US',
        url: 'https://www.mcansey.com/jobs/it-sales-executive-job/',
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
  <SalesExcecutiveJobs/>
  <JobLayoutExecutive/>
  <Footer/>
    </>
  );
}
