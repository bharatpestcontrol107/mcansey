import FormSection from "../components/Home/FormSection";
import Homedd from "../components/Header";
import IndustryGrid from "../components/Home/IndustryGrid";
import Office from "../components/Home/Office";
import StrategicPartnerships from "../components/Home/StrategicPartnerships";
import TechCapabilities from "../components/Home/TechCapabilities";

import ServicesMobile from "../components/MobileApp/ServicesMobile";
import AboutMobile from "../components/MobileApp/AboutMobile";
import CardMobileData from "../components/MobileApp/CardMobileData";
import FAQMobile from "../components/MobileApp/FAQMobile";
import { Metadata } from "next";
import AllHome from "../components/common/AllHome";



export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Mobile App Development Company & Services | MCANSEY",
        description: "Mcansey, a leading mobile app development company, Offering custom mobile app development services for 35+ industries on iOS and Android platforms.",
        keywords: "mobile app development services, mobile app development company, app development, mobile app development, app development company, best mobile app development companies, mobile app development near me, app development agency near me, mobile app development company near me, ",
        alternates: {
            canonical: 'https://www.mcansey.com/mobile-app-development-company',
            languages: {
                'en-US': 'https://www.mcansey.com/mobile-app-development-company',
            },
        },
        robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
        openGraph: {
            type: 'article',
            locale: 'en_US',
            url: 'https://www.mcansey.com/mobile-app-development-company',
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
export default function ProductIdeation() {
    return (
        <>

<AllHome title="Innovative Mobile Apps That Drive Success"
        subtitle="Build the Future of Your Business with Our Custom Mobile Apps"
        videoSrc="/MobileDevelopment/mcansey-mobile-app-development.mp4" />
           
            <Homedd />
            <ServicesMobile />
            <AboutMobile />
            <CardMobileData />
            <IndustryGrid />
            <TechCapabilities />
            <StrategicPartnerships />
            <FormSection />
            <FAQMobile />
            <Office />
        </>
    );
}