import FormSection from "../components/Home/FormSection";
import Homedd from "../components/Header";
import IndustryGrid from "../components/Home/IndustryGrid";
import StrategicPartnerships from "../components/Home/StrategicPartnerships";
import TechCapabilities from "../components/Home/TechCapabilities";

import ProductIdeationServices from "../components/ProductIdeation/ProductIdeationServices";
import Whywe from "../components/ProductIdeation/Whywe";
import ProductSliderData from "../components/ProductIdeation/ProductSliderData";
import ProductIdeationFAQ from "../components/ProductIdeation/ProductIdeationFAQ";
import { Metadata } from "next";
import AllHome from "../components/common/AllHome";



export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Product Development & Ideation Services | MCANSEY",
    description: "Mcansey offers product ideation & conceptualization services, helping transform innovative ideas into actionable, market-ready solutions for your business.",
    keywords: "product conceptualization, product ideation, Product Ideation and Conceptualization, Product Ideation and Conceptualization services",
    alternates: {
      canonical: 'https://www.mcansey.com/product-ideation-and-conceptulization',
      languages: {
        'en-US': 'https://www.mcansey.com/product-ideation-and-conceptulization',
      },
    },
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    openGraph: {
      type: 'article',
      locale: 'en_US',
      url: 'https://www.mcansey.com/product-ideation-and-conceptulization',
      siteName: 'MCANSEY IT Services & Consulting Pvt LTD',
      images: 'https://www.mcansey.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMcanseylogowhite.a1d397f4.png&w=1920&q=75',
    },
    icons: [
      { rel: "icon", url: "https://www.mcansey.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMcanseylogowhite.a1d397f4.png&w=1920&q=75" },
      { rel: "apple-touch-icon", url: 'https://www.mcansey.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMcanseylogowhite.a1d397f4.png&w=1920&q=75' }
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
      <AllHome title="Product Ideation & Conceptualization "
        subtitle="Our ideation and conceptualization services provide a clear roadmap from initial idea to actionable strategy."
        videoSrc="/ProductIdeation/mcansey-ui-ux-designing-video (1).mp4" />

      <Homedd />
      <ProductIdeationServices />
      <Whywe />
      <ProductSliderData />
      <IndustryGrid />
      <TechCapabilities />
      <StrategicPartnerships />
      <FormSection />
      <ProductIdeationFAQ />
    </>
  );
}
