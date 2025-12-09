
import React from 'react';
import ShopifyNavbar from '../components/ShopifyPage/ShopifyNavbar';
import ShopifyBanner from '../components/ShopifyPage/ShopifyBanner';
import ShopifyStore from '../components/ShopifyPage/ShopifyStore';
import ShopifyCards from '../components/ShopifyPage/ShopifyCards';
import FeaturesCard from '../components/ShopifyPage/FeaturedCard';
import LaunchShopify from '../components/ShopifyPage/LaunchShopify';
import OurProcess from '../components/ShopifyPage/OurProcess';
import { OurProject } from '../components/ShopifyPage/Ourproject';
import Brands from '../components/ShopifyPage/Brands';
import OurPlans from '../components/ShopifyPage/OurPlans';
import ShopifyFooter from '../components/ShopifyPage/ShopifyFooter';
import FAQShopify from '../components/ShopifyPage/FAQShopify';
import ShopifyTestimonial from '../components/ShopifyPage/ShopifyTestimonial';
import TeamSection from '../components/ShopifyPage/TeamSection';
import { Poppins } from 'next/font/google';
const inter = Poppins({
  weight:"400",
  subsets: ['latin'],
  display: 'swap',
})

function Page() {

  return (
    <>
    <div className={`${inter.className}`}>
     <ShopifyNavbar/>
     <ShopifyBanner />
     <ShopifyCards/>
     <ShopifyStore/>
     <FeaturesCard/>
     <LaunchShopify/>
     <OurProcess  />
     <OurProject/>
     <Brands/>
     <OurPlans/>
     <FAQShopify/>
     <ShopifyTestimonial/>
     <TeamSection/>
     <ShopifyFooter/>
     </div>
    </>
  );
}

export default Page;
