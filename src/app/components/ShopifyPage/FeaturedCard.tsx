'use client';
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Monitor, TrendingUp, Settings, Cog, Smartphone, BarChart3 } from "lucide-react";
import Link from "next/link";
import { FaStore } from "react-icons/fa";
import { GrIntegration } from "react-icons/gr";
import { HiChartBar, HiMap } from "react-icons/hi";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isActive?: boolean;
}
function FeatureCard({ icon, title, description, isActive = false }: FeatureCardProps) {
  return (
    <div
      className={`group relative rounded-2xl p-6 md:p-8 min-h-[220px] md:min-h-[240px] lg:min-h-[260px] transition-all border duration-300 hover:bg-[#FBF7ED] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] 
      ${isActive ? 'bg-white text-[#00785A] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]' : ''}`}
    >
      <div className="flex flex-col gap-4 h-full">
        <div className={`mt-1 ${isActive ? 'text-[#00785A]' : 'text-white'} group-hover:text-[#00785A]`}>
          {icon}
        </div>
        <div className="space-y-2 text-left flex-grow">
          <h3
            className={`text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-semibold ${
              isActive ? 'text-[#00785A]' : 'text-white'
            } group-hover:text-[#00785A]`}
          >
            {title}
          </h3>
          <p
            className={`text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] ${
              isActive ? 'text-green-700' : 'text-emerald-50'
            } group-hover:text-[#00785A]`}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FeaturesCard() {
  const [showAll, setShowAll] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const features = [
    {
      icon: <FaStore className="h-6 w-6 lg:h-8 lg:w-8" />,
      title: "Custom Shopify Store Design",
      description: "We create unique and visually stunning Shopify stores tailored to showcase your brand's identity, ensuring your business stands out in a competitive market."
    },
    {
      icon: <HiMap className="h-6 w-6 lg:h-8 lg:w-8" />,
      title: "Optimized for Conversions",
      description: "Our designs aren't just beautiful—they're smart. Every element is crafted to guide your customers seamlessly from browsing to checkout."
    },
    {
      icon: <Settings className="h-6 w-6 lg:h-8 lg:w-8" />,
      title: "Scalable Development Solutions",
      description: "Whether you're a startup or an enterprise, our flexible solutions grow with your business. From basic setups to advanced functionalities, we've got you covered."
    },
    {
      icon: <GrIntegration className="h-6 w-6 lg:h-8 lg:w-8" />,
      title: "Seamless Integrations",
      description: "Effortlessly integrate essential tools like ERP, CRM, marketing automation, payment gateways, and more to streamline your operations."
    },
    {
      icon: <Smartphone className="h-6 w-6 lg:h-8 lg:w-8" />,
      title: "Mobile-First Approach",
      description: "With most shoppers using mobile devices, we prioritize responsive, fast-loading designs that deliver a flawless shopping experience on every screen."
    },
    {
      icon: <HiChartBar  className="h-6 w-6 lg:h-8 lg:w-8" />,
      title: "Data-Driven Strategy",
      description: "We analyze your audience and business needs to implement a data-backed approach, ensuring your Shopify store aligns with your goals."
    }
  ];

  const visibleFeatures = showAll || isLargeScreen ? features : features.slice(0, 3);


  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); 
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="py-12 lg:py-16 rounded-t-3xl"
      id="features"
      style={{
        backgroundImage: "url('/landing-page/background.webp')",
        backgroundColor: "#00785A",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="mx-auto w-full px-4 lg:w-[90%] xl:w-[80%]">
        
        <div className="flex flex-col items-center space-y-8 lg:space-y-12">
          <Button
            variant="outline"
            className="rounded-full border-white bg-transparent text-white hover:bg-white hover:text-[#00785A]"
          >
            Why Choose Us
          </Button>

          <h2 className="text-center text-2xl font-bold text-white lg:text-[40px] xl:text-[45px]">
            Why Mcansey Standout
          </h2>


          {/* Display Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visibleFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                isActive={index === 1}
              />
            ))}
          </div>

          {/* View More Button */}
          {!showAll && !isLargeScreen && (
            <Button
              size="lg"
              className="rounded-md bg-white px-6 text-[#00785A] hover:bg-emerald-50 hover:scale-105 transform transition-transform"
              onClick={() => setShowAll(true)}
            >
              View More
            </Button>
          )}

         
          {(showAll || isLargeScreen) && (
            <Link href="#contact-us">
              <Button
                size="lg"
                className="rounded-md  bg-white px-8 text-[#00785A] hover:bg-emerald-50 hover:scale-105 transform transition-transform"
              >
                Schedule a Call Now
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
