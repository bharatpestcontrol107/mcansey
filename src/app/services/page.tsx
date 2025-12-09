
import React from 'react';
import CardSlider from '../components/ServicesDetail/CardSlider';
import {  BarChart, FileText, Users } from 'lucide-react';
import ChartSlider from '../components/ServicesDetail/ChartSlider';
import RightSectionScrollable from '../components/ServicesDetail/RightSectionScrollable';
import StackingCards from '../components/ServicesDetail/StackingCards';
import FAQ from '../components/ServicesDetail/FaqSection';
import RelatedBlogs from '../components/ServicesDetail/RelatedBlogs';
import Services from '../components/ServicesDetail/Services';
import ButtonWithArrow from '../components/ServicesDetail/ButtonWithArrow';
import Image from 'next/image';
import Banner from '../components/ServicesDetail/Banner';
import LogoSlider from '../components/ServicesDetail/LogoSlider';
import CompanyStats from '../components/ServicesDetail/CompanyStats';
import ikea from '../../../public/images/ikea-banner.webp'
import DynamicSlider from '../components/ServicesDetail/DynamicSlider';
import { Metadata } from 'next';




 

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "MCANSEY Services: website development, mobile app development, digital marketing, and more",
    description: "MCANSEY offers a wide range of services including website development, mobile app development, ui/ux design.contact us for more information.",
    keywords: "MCANSEY services, website development, mobile app development, web design, services provided by MCANSEY",
    alternates: {
      canonical: 'https://www.mcansey.com/services',
      languages: {
        'en-IN': 'https://www.mcansey.com/services',
      },
    },
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    openGraph: {
      type: 'article',
      locale: 'en_IN',
      url: 'https://www.mcansey.com/services',
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

function Page() {

  return (
    <>
        <Banner />
        <div className="max-w-7xl mx-auto">
          <LogoSlider />
        </div>
      <div className="xl:w-[85%] mx-auto">
        <CardSlider
          cards={[
            {
              icon: <Users className="w-8 h-8" />,
              title: 'ERP Consulting Services',
              description:
                'Our ERP consulting team analyzes your current business environment and understands your strategic business needs and desired outcomes. Our ERP implementation consultants work as your trusted advisors and help you formulate the best strategies to implement critical ERP software.',
            },
            {
              icon: <FileText className="w-8 h-8" />,
              title: 'Custom ERP Solutions',
              description:
                'We offer custom ERP software development services for businesses of all sizes and industries. We develop robust and scalable business ERP systems that offer key data insights across multiple platforms - web, mobile, and on-premise.',
            },
            {
              icon: <BarChart className="w-8 h-8" />,
              title: 'ERP Implementation Services',
              description:
                'The best ERP business software solutions count for nothing if they are not implemented properly. Our ERP implementation consulting service team is uniquely equipped to take care of the complete deployment of your custom networks, servers, and data management solutions while maintaining data integrity.',
            },
            {
              icon: <BarChart className="w-8 h-8" />,
              title: 'ERP Implementation Services',
              description:
                'The best ERP business software solutions count for nothing if they are not implemented properly. Our ERP implementation consulting service team is uniquely equipped to take care of the complete deployment of your custom networks, servers, and data management solutions while maintaining data integrity.',
            },
          ]}
        />
       
        <CompanyStats />
        <ChartSlider />
        <div className="h-full max-w-7xl mx-auto">
          <RightSectionScrollable />
        </div>
        <div className="h-auto flex items-center justify-center p-4">
            <div className="w-full mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-8 p-8">
                <div className="lg:w-1/2 w-full">
                <h2 className="text-2xl md:text-4xl font-bold leading-tight">
                    We built a custom ERP solution for the world's largest furniture
                    retailer, IKEA, leading to
                </h2>
                <p className="text-lg md:text-xl my-4">
                    Solution's adoption in 
                    <span className="text-yellow-600"> 7+ stores</span>
                </p>
                <p className="text-lg md:text-xl my-4">
                    Discovery of the 
                    <span className="text-yellow-600"> Biggest source of RoI </span>
                    for the client
                </p>
                <div className='border-2 hover:border-blue-700 border-gray-400 max-w-max rounded-xl whitespace-nowrap'><ButtonWithArrow  href="/">View Success Story</ButtonWithArrow></div>
                </div>
                <div className="lg:w-1/2 w-full">
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                    <Image
                    src={ikea}
                    alt="IKEA storefront with people walking"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                    />
                    <div className="absolute flex items-center justify-center"></div>
                </div>
                </div>
            </div>
        </div>
        
        {/* <StackingCards /> */}
        <div className="container mx-auto p-6 ">
    
     
      <div className="text-center p-6 ">
        <h1 className="text-3xl xl:text-5xl font-bold pt-4 md:pt-20 p-3">ERP Technology Stack We Use</h1>
        <p className="mt-2 text-2xl text-gray-600">
          Our experts are proficient in all the cutting-edge technologies required to build the most
          effective ERP system.
        </p>
      </div>

      
      <DynamicSlider />
    </div>
        <Services />
        <FAQ />
        <RelatedBlogs />
        <StackingCards/>
      </div>
    </>
  );
}

export default Page;
