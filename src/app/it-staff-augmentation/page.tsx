import Homedd from "../components/Header";
import IndustryGrid from "../components/Home/IndustryGrid";
import StrategicPartnerships from "../components/Home/StrategicPartnerships";
import TechCapabilities from "../components/Home/TechCapabilities";
import WhyweSoftware from "../components/SoftwareDevelopment/WhyweSoftware";



import { Metadata } from "next";
import ServicesSoftwareOne from "../components/SoftwareDevelopment/ServiceSoftwareOne";
import HomeItStaff from "../components/SoftwareDevelopment/HomeItStaff";
import OfficeITAugmentation from "../components/SoftwareDevelopment/OfficeITAugmentation";
import StatsSection from "../components/Home/StatSection";

import StaffSliderData from "../components/SoftwareDevelopment/StaffSliderData";
import EnquiryForm from "../components/ItStaffAugmentation/EnquiryForm";
import ITStaffFAQ from "../components/ItStaffAugmentation/ITStaffFAQ";
import WhyITStaff from "../components/ItStaffAugmentation/WhyITStaff";
import AllHome from "../components/common/AllHome";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "IT Staff Augmentation - Hire Top Software Developer on Contract Basis",
    description: " Hire top software developers on a contract basis with our IT staff augmentation services. Flexible, efficient, and cost-effective solutions tailored to your business needs.",
    keywords: "IT staff augmentation, hire software developers, software developers on contract, IT contract staffing, IT staffing solutions, top software developers, software developer augmentation, contract-based IT professionals, IT team scaling, flexible staffing solutions.",
    alternates: {
      canonical: 'https://www.mcansey.com/it-staff-augmentation',
      languages: {
        'en-US': 'https://www.mcansey.com/it-staff-augmentation',
      },
    },
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    openGraph: {
      type: 'article',
      locale: 'en_US',
      url: 'https://www.mcansey.com/it-staff-augmentation',
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

export default function ItStaffAugmentation() {
  return (
    <>
    <Navbar/>
    <AllHome title={<>IT Staff Augmentation - Hire Top <br/> Software Developer on Contract Basis</>}
        subtitle="MCANSEY provides Software Development resources on contract to over 100+ clients."
        backgroundImage="/Banners/It-staff-augmentation.webp"
        mobileBackgroundImage="/Banners/mcansey-it-services.webp" />
      
      <Homedd />
      <ServicesSoftwareOne />
      <StatsSection/>
      <WhyITStaff/>
      <StaffSliderData />
      <IndustryGrid />
      <TechCapabilities />
      <StrategicPartnerships />
      <EnquiryForm/>
      <ITStaffFAQ/>
      <OfficeITAugmentation />
      <Footer/>
    </>
  );
}
