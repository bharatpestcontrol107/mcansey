'use client'
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Hanken_Grotesk } from "next/font/google";

import icon from "../../../../public/landing-page/process-icon.png"
import Image, { StaticImageData } from "next/image";


interface ProcessStep {
  icon: StaticImageData;
  title: string;
  description: string;
}

const pop = Hanken_Grotesk({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const processSteps: ProcessStep[] = [
  {
    icon: icon,
    title: "Discovery & Strategy",
    description:
      "We dive deep into understanding your goals, target audience, and market to create a solid strategic foundation for your project.",
  },
  {
    icon: icon,
    title: "Web Design Creation",
    description:
      "We design unique, visually compelling experiences that resonate with your brand and captivate your audience.",
  },
  {
    icon: icon,
    title: "Website Development",
    description:
      "We develop a responsive, high-performance website, focusing on functionality, speed, and seamless user experience.",
  },
  {
    icon: icon,
    title: "Launch & Optimize",
    description:
      "We ensure a smooth launch and continuously optimize your site to maintain peak performance and drive long-term growth.",
  },
 
];

export default function OurProcess() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDescription = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="w-full md:min-h-screen relative px-3 py-8 md:pb-20 "
     
    >
      <div className="lg:max-w-[90%] xl:max-w-[80%] mx-auto p-6 md:p-12 rounded-2xl"  style={{backgroundImage: "url('/landing-page/background.webp')",backgroundColor: "#FBF7ED", backgroundSize: "cover", backgroundPosition: "center", }} id="ourprocess">
        {/* Top Arrow Image */}
      

        {/* Header Section */}
        <div className="grid gap-8 md:grid-cols-1 mb-12 md:mb-20 text-center md:text-center">
          <div className="space-y-6 ">
            <Button
              variant="secondary"
              className="bg-white text-center border-black border text-black hover:bg-white/90 rounded-full text-sm px-6"
            >
              Our Process
            </Button>
            <h2
              className={`text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-tight tracking-wide`}
           style={{fontFamily:'Clash Grotesk', fontWeight:'700'}}>
              How we drive your Brand to New Height
            </h2>
          </div>
          
        </div>

        {/* Process Steps */}
        <div className="space-y-4">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`group relative  border-b-4 border-black overflow-hidden rounded-2xl transition-all duration-300 ${pop.className} ${
                index % 2 === 0
                  ? "bg-[#FFFFFF] border"
                  : "bg-[#FFFFFF] border"
              } md:hover:bg-transparent`}
            >
              {/* Mobile-specific behavior */}
              <div
                className="md:hidden p-4 flex items-center justify-between cursor-pointer"
                onClick={() => toggleDescription(index)}
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={step.icon}
                    alt={`${step.title} icon`}
                    className="w-6 h-6"
                  />
                  <h3 className="text-xl 2xl:text-3xl font-bold text-[#00785A]" style={{fontFamily:'Clash Grotesk', fontWeight:'600'}}>
                    {step.title}
                  </h3>
                </div>
                <div className="h-10 w-10 rounded-full bg-[#00785A] flex items-center justify-center">
                  <ArrowUpRight className="w-6 h-6 text-white rotate-45" />
                </div>
              </div>
              <div
                className={`md:hidden text-[#00785A]  text-sm p-2 px-6 ${
                  openIndex === index ? "block" : "hidden"
                } ${hanken.className}`}
                style={{fontFamily:'Clash Grotesk', fontWeight:'400'}}>
                {step.description}
              </div>

              {/* Large screen behavior (unchanged) */}
              <div className="hidden md:flex items-start gap-8 p-6 md:p-8">
                <Image
                  src={step.icon}
                  alt={`${step.title} icon`}
                  className="w-10 h-10 my-2 md:my-0 mt-1 hover:bg-[#FBF7ED]"
                />
                <div className="flex-1 md:flex min-w-0">
                  <h3 className="text-xl md:text-2xl 2xl:text-3xl md:w-[20%] font-bold text-[#00785A] group-hover:text-[#00785A] mb-2" style={{fontFamily:'Clash Grotesk', fontWeight:'600'}}>
                    {step.title}
                  </h3>
                  <p
                    className={`text-[#00785A] md:w-[70%] md:pl-24 lg:pl-16 lg:w-[65%] 2xl:w-[75%] pr-12 lg:pr-24 group-hover:text-[#00785A] tracking-wider ` }
                    style={{fontFamily:'Clash Grotesk', fontWeight:'400'}}>
                    {step.description}
                  </p>
                </div>
                <div className="absolute right-6 md:right-8 top-1/2 -translate-y-1/2">
                  <div className="h-12 w-12 rounded-full bg-[#00785A] flex items-center justify-center transition-all duration-300 group-hover:bg-[#00785A]">
                    <ArrowUpRight
                      className="w-6 h-6 text-white rotate-45 transition-all duration-300 group-hover:rotate-0 group-hover:text-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
