'use client'
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Hanken_Grotesk } from "next/font/google";
import icon1 from "../../../../public/landing-page/Icon.png"
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
    icon: icon1,
    title: "Discovery & Planning",
    description:
      "We begin by understanding your business goals, target audience, and design preferences. Through detailed research and collaboration, we create a comprehensive roadmap to ensure your website aligns perfectly with your objectives.",
  },
  {
    icon: icon1,
    title: " UI/UX Designing",
    description:
      "Our skilled designers craft visually stunning and user-friendly interfaces that offer seamless navigation. We focus on enhancing user experience by combining creativity with intuitive design elements.",
  },
  {
    icon: icon1,
    title: "Website Development",
    description:
      "Our expert developers bring your vision to life using modern frameworks and technologies. We ensure your website is responsive, fast, and scalable to meet current and future needs.",
  },
  {
    icon: icon1,
    title: "Testing & Finalization",
    description:
      "Every detail is meticulously tested for performance, compatibility, and usability. We fix any issues to deliver a flawless product that exceeds expectations.",
  },
  {
    icon: icon1,
    title: " Deployment & Live",
    description:
      "Once approved, we deploy your website on a secure hosting platform. Your brand-new website is now live and ready to leave a lasting impression on your audience.",
  },
];

export default function ProcessSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDescription = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="w-full min-h-screen relative px-4 py-12 md:py-20"
      style={{
        backgroundImage: "/LandingPage/background.png",
        backgroundColor: "#9D1156",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Arrow Image */}
        <img
          src="/arrow.svg?height=100&width=100"
          alt="Curved arrow"
          className="absolute top-0 left-[60%] md:left-[30%] w-32 h-32 md:w-40 md:h-40"
        />

        {/* Header Section */}
        <div className="grid gap-8 md:grid-cols-2 mb-12 md:mb-20 text-center md:text-left">
          <div className="space-y-6">
            <Button
              variant="secondary"
              className="bg-white text-[#9D1156] hover:bg-white/90 rounded-full text-sm px-6"
            >
              Our Process
            </Button>
            <h2
              className={`text-3xl md:text-3xl font-bold text-white leading-tight tracking-wide`}
           style={{fontFamily:'Clash Grotesk', fontWeight:'700'}}>
              How we drive your <br /> Brand to New Height
            </h2>
          </div>
          <div className="flex items-center justify-center md:justify-end lg:pl-32">
            <p className={`text-white/90 text-lg 2xl:text-[22px] `}   style={{fontFamily:'Clash Grotesk', fontWeight:'400'}}>
              Our proven process ensures seamless execution from start to finish,
              creating websites that are not only beautiful but highly effective.
            </p>
          </div>
        </div>

        {/* Process Steps */}
        <div className="space-y-4">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`group relative  border-b-4 overflow-hidden rounded-2xl transition-all duration-300 ${pop.className} ${
                index % 2 === 0
                  ? "bg-[#FFD9D9] border"
                  : "bg-[#FFD9D9] border"
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
                    
                    className="w-10 h-10"
                  />
                  <h3 className="text-xl 2xl:text-3xl font-bold text-[#A10040]" style={{fontFamily:'Clash Grotesk', fontWeight:'600'}}>
                    {step.title}
                  </h3>
                </div>
                <div className="h-10 w-10 rounded-full bg-[#A10040] flex items-center justify-center">
                  <ArrowUpRight className="w-6 h-6 text-white rotate-45" />
                </div>
              </div>
              <div
                className={`md:hidden text-[#A10040]  text-sm p-2 px-6 ${
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
                  className="w-10 h-10 my-2 md:my-0 mt-1 hover:bg-white"
                />
                <div className="flex-1 md:flex min-w-0">
                  <h3 className="text-xl md:text-2xl 2xl:text-3xl md:w-[20%] font-bold text-[#A10040] group-hover:text-white mb-2" style={{fontFamily:'Clash Grotesk', fontWeight:'600'}}>
                    {step.title}
                  </h3>
                  <p
                    className={`text-[#A10040] md:w-[70%] md:pl-24 lg:pl-16 lg:w-[65%] 2xl:w-[75%] pr-12 lg:pr-24 group-hover:text-white tracking-wider ` }
                    style={{fontFamily:'Clash Grotesk', fontWeight:'400'}}>
                    {step.description}
                  </p>
                </div>
                <div className="absolute right-6 md:right-8 top-1/2 -translate-y-1/2">
                  <div className="h-12 w-12 rounded-full bg-[#A10040] flex items-center justify-center transition-all duration-300 group-hover:bg-white">
                    <ArrowUpRight
                      className="w-6 h-6 text-white rotate-45 transition-all duration-300 group-hover:rotate-0 group-hover:text-[#9D1156]"
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
