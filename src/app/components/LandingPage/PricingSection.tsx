'use client'
import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { Card } from "@/components/ui/card"

import { MdCircle } from "react-icons/md"
import Link from "next/link"

// Interfaces
interface PricingFeature {
  text: string
}

interface PricingPlan {
  name: string
  price: string
  description: string
  features: PricingFeature[]
}

// Plans data with unique features
const plans: PricingPlan[] = [
  {
    name: "Standard",
    price: "₹ 7,999",
    description: "Perfect For Small Businesses And Startups",
    features: [
      { text: "5 pages Website" },
      { text: "1 Year Free Hosting " },
      { text: "Dynamic Website (Premium Design) " },
      { text: "Admin Access​" },
      { text: "Images & Videos Upload" },
      { text: "Free SSL Certificates" },
      { text: "SEO Friendly Website" },
      { text: "100% Responsive Website" },
      { text: "Live Chat Integration" },
      { text: "Social Media Integration" },
      { text: "Call Button Integration" },
      { text: "WhatsApp Button Integration" },
      { text: "Inquiry Form​" },
      { text: "1 Year Free Technical Support For Website" },
      { text: "Annual Renewal For Hosting Rs.3000." },
     
    ],
  },
  {
    name: "Premium",
    price: "₹ 14,999",
    description: "Growing Businesses With Advanced Needs",
    features: [
      { text: "12 pages Website" },
      { text: "1 Year Free Hosting " },
    
      { text: "Dynamic Website (Premium Design)" },
      { text: "Admin Access​" },
      { text: "Google Search Console Setup" },
    
     
      { text: "Images & Videos Upload" },
      { text: "Free SSL Certificates" },
      { text: "1 Free Email Id" },
      
      { text: "SEO Friendly Website" },
      { text: "100% Responsive Website" },
      { text: "Live Chat Integration" },
     
      { text: "Social Media Integration" },
      { text: "Call Button Integration" },
      { text: "WhatsApp Button Integration" },
      { text: "Inquiry Form​" },
     
      { text: "1 Year Free Technical Support For Website" },
      { text: "Annual Renewal For Hosting Rs.3000." },
    ],
  },
  {
    name: "Custom Plan",
    price: "₹ ???",
    description: "Tailored Solutions For Large-Scale Enterprises",
    features: [
      { text: "Pages: According to the requirements" },
      
      { text: "1 Year Free Hosting " },
      { text: "Dynamic Website (Premium Design)" },
      { text: "Admin Access​" },
      { text: "Google Search Console Setup" },
     
      { text: "Lifetime 24/7 Free Hosting Support" },
      { text: "Images & Videos Upload" },
      { text: "Free SSL Certificates" },
      { text: "Unlimited Free Email Id" },
      
      { text: "SEO Friendly Website" },
      { text: "100% Responsive Website" },
      { text: "Live Chat Integration" },
     
      { text: "Social Media Integration" },
      { text: "Call Button Integration" },
      { text: "WhatsApp Button Integration" },
      { text: "Inquiry Form​" },
      { text: "Woocommerce Features" },
      { text: "1 Year 24/7 Free Support For Website" },
      { text: "Annual Renewal For Hosting Rs.4000." },
    ],
  },
]

function PricingCard({ plan, defaultActive }: { plan: PricingPlan; defaultActive?: boolean }) {
  const [isHovered, setIsHovered] = useState(defaultActive || false)
  const [showMore, setShowMore] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const toggleShowMore = () => setShowMore(!showMore)

  return (
    <Card
      className={`p-6 rounded-2xl border-b-4 border-black transition-all duration-300 ${isHovered ? "bg-[#A10040] text-white" : "bg-white text-black"}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="space-y-6">
        {/* Logo */}
        <div
          className={`lg:w-12 w-8 h-8 lg:h-12 rounded-lg ${isHovered ? "bg-white text-[#A10040]" : "bg-[#A10040] text-white"} flex items-center justify-center`}
        >
          <MdCircle className="lg:w-8 w-6 h-6 lg:h-8" />
        </div>

        {/* Plan Details */}
        <div className="space-y-2">
          <h3 className={`text-xl 2xl:text-2xl tracking-wider `} style={{fontFamily:'Clash Grotesk', fontWeight:'600'}}>{plan.name}</h3>
          <div className={`text-2xl lg:text-4xl font-bold `} style={{fontFamily:'Clash Grotesk', fontWeight:'600'}}>{plan.price}</div>
          <p className={`text-sm lg:text-base ${isHovered ? "text-white" : "text-neutral-600"} `} style={{fontFamily:'Clash Grotesk', fontWeight:'400'}}>
            {plan.description}
          </p>
        </div>

        {/* Divider */}
        <div className={`h-px ${isHovered ? "bg-white" : "bg-neutral-200"}`} />

        {/* Features List */}
        <ul className="space-y-4">
          {(showMore ? plan.features : plan.features.slice(0, 6)).map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <div
                className={`flex items-center justify-center w-5 h-5 rounded-full ${isHovered ? "bg-white text-[#A10040]" : "bg-[#A10040] text-white"}`}
              >
                <Check className="w-3 h-3" />
              </div>
              <span className={`${isHovered ? "text-white" : "text-neutral-700"} `} style={{fontFamily:'Clash Grotesk', fontWeight:'420'}}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>

        {/* "Show More" or "Show Less" Button */}
        <button
          className={`text-sm underline ${isHovered ? "text-white" : "text-neutral-600"}`}
          onClick={toggleShowMore}
        >
          {showMore ? "Show Less" : "See More"}
        </button>

        {/* CTA Button */}
        <Link href="#about-us">
        <Button className={`w-full mt-2 hover:bg-white tracking-wide ${isHovered ? "bg-white text-[#A10040]" : "bg-[#A10040] text-white"}`} style={{fontFamily:'Clash Grotesk', fontWeight:'700'}}>
          Get Free Enquiry Now
        </Button>
        </Link>
      </div>
    </Card>
  )
}

// PricingSection component
export default function PricingSection() {
  return (
    <section
      className="relative w-full"
      style={{
        backgroundColor: "rgba(255, 252, 241, 0.9)",
        backgroundImage: "url('/LandingPage/background.png')",
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
     id="pricing">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12 items-center">
          <div className="space-y-4 text-center md:text-left">
            <Button
              variant="outline"
              className="rounded-full border h-h-6 lg:h-7 px-6 border-black text-[#FF2A00] hover:bg-transparent"
            >
              Our Plans
            </Button>
            <h2 className={`text-3xl text-center md:text-left sm:text-4xl font-bold tracking-wider text-[#572D29]`} style={{fontFamily:'Clash Grotesk', fontWeight:'700'}}>
              Website Plans  That Fit Your <br /> Business Goals
            </h2>
          </div>
          <div>
            <p className={`text-lg text-center md:text-left text-neutral-600 max-w-lg lg:ml-auto `} style={{fontFamily:'Clash Grotesk', fontWeight:'400'}}>
              Choose a plan tailored to your needs and budget, with everything you need to create a stunning, high-performing
              website.
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} defaultActive={index === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
