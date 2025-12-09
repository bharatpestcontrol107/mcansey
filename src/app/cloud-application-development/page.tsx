import FormSection from "../components/Home/FormSection";
import Homedd from "../components/Header";
import IndustryGrid from "../components/Home/IndustryGrid";
import Office from "../components/Home/Office";
import StrategicPartnerships from "../components/Home/StrategicPartnerships";
import TechCapabilities from "../components/Home/TechCapabilities";
import ServicesCloud from "../components/Cloud-UI/ServicesCloud";
import AboutCloud from "../components/Cloud-UI/AboutCloud";
import CardCloudDev from "../components/Cloud-UI/CardCloudDev";
import FAQCloud from "../components/Cloud-UI/FAQCloud";
import AllHome from "../components/common/AllHome";
import { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Cloud Application Development Company & Services | MCANSEY",
    description: "Mcansey a trusted cloud application development company delivers top-notch cloud application development services to transform your business digitally.",
    keywords: "cloud application development, cloud application services, cloud development, cloud application software developers, cloud application software development, cloud application development company, cloud application development services, custom cloud application development services company, Best Cloud App Development Company, Cloud App Development, Cloud Application Development Company, cloud native app development services",
    alternates: {
      canonical: 'https://www.mcansey.com/cloud-application-development',
      languages: {
        'en-IN': 'https://www.mcansey.com/cloud-application-development',
      },
    },
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    openGraph: {
      type: 'article',
      locale: 'en_IN',
      url: 'https://www.mcansey.com/cloud-application-development',
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

export default function Cloud() {
  return (
    <>
    <Navbar/>
      <AllHome title="Empowering Your Business with Scalable Cloud Solutions"
        subtitle="Unlock the Power of the Cloud for Innovation and Growth"
        videoSrc="/Cloud/mcansy-cloud-services.mp4" />
      <Homedd />
      <ServicesCloud />
      <AboutCloud />
      <CardCloudDev />
      <IndustryGrid />
      <TechCapabilities />
      <StrategicPartnerships />
      <FormSection />
      <FAQCloud />
      <Office />
      <Footer/>
    </>
  );
}
