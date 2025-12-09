import FormSection from "../components/Home/FormSection";
import Homedd from "../components/Header";
import IndustryGrid from "../components/Home/IndustryGrid";
import StrategicPartnerships from "../components/Home/StrategicPartnerships";
import TechCapabilities from "../components/Home/TechCapabilities";
import ServicesDataAnalytics from "../components/DataAnalytics/ServicesDataAnalytics";
import AboutDAnalytics from "../components/DataAnalytics/AboutDAnayltics";
import CardDAnalytics from "../components/DataAnalytics/CardDAnalytics";
import FAQDAnalytics from "../components/DataAnalytics/FAQDAnalytics";
import { Metadata } from "next";
import AllHome from "../components/common/AllHome";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Data Analytics Company & Services | MCANSEY",
    description: "Mcansey is the best data analytics company, offering top-notch data analytics services to help businesses make data-driven decisions and boost growth.",
    keywords: "data analytics company, data analytics service, data analytics services & solutions, top data analytics company, best data analytics company",
    alternates: {
      canonical: 'https://www.mcansey.com/data-analytics-company',
      languages: {
        'en-IN': 'https://www.mcansey.com/data-analytics-company',
      },
    },
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    openGraph: {
      type: 'article',
      locale: 'en_IN',
      url: 'https://www.mcansey.com/data-analytics-company',
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


export default function ProductIdeation() {
  return (
    <>
    <Navbar/>
    <AllHome title="Empower Your Business Decisions with Data-Driven Insights."
        subtitle="Drive Growth with Comprehensive Data & Analytics Solutions."
        videoSrc="/DataAnalytics/mcansey-data-analytics.mp4" />
      <Homedd />
      <ServicesDataAnalytics />
      <AboutDAnalytics />
      <CardDAnalytics />
      <IndustryGrid />
      <TechCapabilities />
      <StrategicPartnerships />
      <FormSection />
      <FAQDAnalytics />
      <Footer/>
    </>
  );
}
