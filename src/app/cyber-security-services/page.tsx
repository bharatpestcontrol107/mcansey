import FormSection from "../components/Home/FormSection";
import Homedd from "../components/Header";
import IndustryGrid from "../components/Home/IndustryGrid";
import StrategicPartnerships from "../components/Home/StrategicPartnerships";
import TechCapabilities from "../components/Home/TechCapabilities";
import ServicesCyberSecurity from "../components/CyberSecurity/ServicesCyberSecurity";
import AboutCyberSecurity from "../components/CyberSecurity/AboutCyberSecurity";
import CardCyberSecurity from "../components/CyberSecurity/CardCyberSecurity";
import FAQCyber from "../components/CyberSecurity/FAQCyber";
import { Metadata } from "next";
import AllHome from "../components/common/AllHome";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Cyber Security Consulting Services & Solution | MCANSEY",
    description: "Mcansey provides expert cyber security consulting services & solutions to protect your data, prevent breaches & enhance business security. Call today.",
    keywords: "Cyber Security Consulting Services & Solution, cyber security company, cyber security services, cyber security solution, network firewall security, cybersecurity assessment, cybersecurity risk management, managed cyber security services",
    alternates: {
      canonical: 'https://www.mcansey.com/cyber-security-services',
      languages: {
        'en-IN': 'https://www.mcansey.com/cyber-security-services',
      },
    },
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    openGraph: {
      type: 'article',
      locale: 'en_IN',
      url: 'https://www.mcansey.com/cyber-security-services',
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

export default function cybersecurity() {
  return (
    <>
    <Navbar/>
      <AllHome title="Stay Ahead of Threats with Advanced Cyber Security Solutions. "
        subtitle=" Comprehensive Cyber Security Services to Safeguard Your Digital Assets"
        videoSrc="/Cybersecurity/mcansey-cyber-security-video.mp4" />
      <Homedd />
      <ServicesCyberSecurity />
      <AboutCyberSecurity />
      <CardCyberSecurity />
      <IndustryGrid />
      <TechCapabilities />
      <StrategicPartnerships />
      <FormSection />
      <FAQCyber />
      <Footer/>
    </>
  );
}
