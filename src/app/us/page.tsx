import FAQ from "./components/Home/FAQItem";
import FormSection from "./components/Home/FormSection";
import Homedd from "./components/Header";
import Homes from "./components/Home";
import IndustryGrid from "./components/Home/IndustryGrid";
import Office from "./components/Home/Office";
import Services from "./components/Home/Services";
import StatsSection from "./components/Home/StatSection";
import StrategicPartnerships from "./components/Home/StrategicPartnerships";
import TechCapabilities from "./components/Home/TechCapabilities";
import Testimonials from "./components/Home/Testimonials";
import BrandLogos from "./components/Home/BrandLogos";
import Accolades from "./components/Home/Accolades";
import Technology from "./components/Home/Tech/Technology";
import OurWork from "./components/Home/OurWork";




export default function Home() {
  return (
    <>
      <Homes />
      <Homedd />
      <StatsSection />
      <Services />
      <Technology />
      <OurWork/>
      <BrandLogos />
      <Accolades />
      <Testimonials />
      <IndustryGrid />
      <TechCapabilities />
      <StrategicPartnerships />
      <FormSection />
      <FAQ />
      <Office />
    </>
  );
}
