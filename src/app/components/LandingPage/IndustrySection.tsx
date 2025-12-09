'use client'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ShoppingCart,
  Heart,
  Building2,
  GraduationCap,
  Hotel,
  Wallet,
  HeartIcon,
} from "lucide-react";
import { Hanken_Grotesk, Sora } from "next/font/google";
import Image from "next/image";

interface IndustryCardProps {
  icon: React.ReactNode;
  title: string;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const sora = Sora({
  weight: "600",
  subsets: ["latin"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

function IndustryCard({
  icon,
  title,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}: IndustryCardProps) {
  return (
    <div
      className={`relative p-4 md:p-4 rounded-lg shadow-sm border-b-4 border border-black transition-all duration-300 cursor-pointer
        ${
          isHovered
            ? "bg-[#A10040] rotate-3 text-white translate-x-1 translate-y-1 border-primary/20"
            : "bg-white hover:bg-[#A10040] hover:rotate-3 hover:text-white hover:translate-x-1 hover:translate-y-1 hover:border-primary/20"
        }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex items-center gap-3">
        <div
          className={`flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-lg ${
            isHovered ? "bg-white text-[#A10040]" : "bg-[#C41E3A]/10 text-[#C41E3A]"
          }`}
        >
          {icon}
        </div>
        <h3
          className={`font-medium text-sm md:text-lg ${
            isHovered ? "text-white" : "text-gray-900"
          }`}
        >
          {title}
        </h3>
      </div>
    </div>
  );
}

export default function IndustriesSection() {
  const firstRowIndustries = [
    { icon: <ShoppingCart size={20} />, title: "Industrial" },
    { icon: <Building2 size={20} />, title: "Real Estate" },
    { icon: <GraduationCap size={20} />, title: "Education" },
  ];

  const secondRowIndustries = [
    { icon: <Heart size={20} />, title: "Healthcare" },
    { icon: <ShoppingCart size={20} />, title: "E-commerce" },
    { icon: <Wallet size={20} />, title: "Finance" },
    { icon: <HeartIcon size={20} />, title: "Entertainment" },
  ];

  // State to track hovered card index
  const [hoveredCard, setHoveredCard] = useState<number | null>(1); 
  return (
    <section
      className="relative"
      style={{
        background:
          "linear-gradient(rgba(251, 246, 230, 0.9), rgba(251, 246, 230, 0.9)), url(/LandingPage/background.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Top Left Image */}
      <div className="absolute top-1 left-0">
        <Image
          src="/LandingPage/corner-animation.webp?height=130&width=320"
          alt="Decorative balloon and star"
          width={130}
          height={140}
          className="w-36 h-36 md:w-40 md:h-40 lg:w-48 lg:h-48"
        />
      </div>

      {/* Main Content */}
      <div className="py-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Center Content */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <Button
            variant="outline"
            className={`mb-6 rounded-full text-xs md:text-sm px-6 py-1 border text-[#FF2A00] border-black ${hanken.className}`}
          >
            Industries We Serve
          </Button>
          <h2
            className={`text-2xl md:text-3xl tracking-wider lg:text-4xl font-bold text-[#572D29] max-w-3xl `}
            style={{ fontFamily: "Clash Grotesk", fontWeight: "700" }}
          >
            Tailored Solutions for Every Industry
          </h2>
        </div>

        {/* Responsive Industry Cards Grid */}
        <div className="hidden lg:block space-y-6 md:space-y-8 lg:max-w-5xl mx-auto">
          {/* Large Screen Layout */}
          <div className={`grid grid-cols-3 gap-6 ${sora.className}`}>
            {firstRowIndustries.map((industry, index) => (
              <IndustryCard
                key={index}
                icon={industry.icon}
                title={industry.title}
                isHovered={hoveredCard === index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              />
            ))}
          </div>
          <div className={`grid grid-cols-4 gap-6 ${sora.className}`}>
            {secondRowIndustries.map((industry, index) => (
              <IndustryCard
                key={index + firstRowIndustries.length}
                icon={industry.icon}
                title={industry.title}
                isHovered={hoveredCard === index + firstRowIndustries.length}
                onMouseEnter={() =>
                  setHoveredCard(index + firstRowIndustries.length)
                }
                onMouseLeave={() => setHoveredCard(null)}
              />
            ))}
          </div>
        </div>

        {/* Small Screen Layout */}
        <div className="lg:hidden grid grid-cols-2 gap-4 md:gap-6 sm:grid-cols-2 mx-auto">
          {[...firstRowIndustries, ...secondRowIndustries].map(
            (industry, index) => (
              <IndustryCard
                key={index}
                icon={industry.icon}
                title={industry.title}
                isHovered={hoveredCard === index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
