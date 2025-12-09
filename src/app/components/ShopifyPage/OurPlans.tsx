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
    name: "Essential Shopify Package",
    price: "₹29,000",
    description: "Perfect for new Shopify store owners",
    features: [
      { text: "Shopify Store Setup & Configuration" },
      { text: "Pre-Built OS 2.0 Theme Customization" },
      { text: "Up to 5 Categories / 50 Products" },
      { text: "Payment Gateway Integration" },
      { text: "General Pages Setup" },
      { text: "Social Media Integration & Instagram Feed" },
      { text: "Basic SEO Optimization & Mobile Responsiveness" },
      { text: "Tracking Code Deployment" },
      { text: "1 Week Post-Launch Support" }
    ],
  },
  {
    name: "Professional Shopify Package",
    price: "₹49,000",
    description: "For growing businesses needing advanced features",
    features: [
      { text: "Everything in the Essential Package" },
      { text: "Up to 10 Categories / 100 Products" },
      { text: "Custom Shopify Theme (Up to 2 Iterations)" },
      { text: "Blog Setup, Contact Form, Newsletter Sign-up" },
      { text: "Multi-Currency & Multi-Language Setup" },
      { text: "Advanced App Integrations" },
      { text: "Advanced SEO Optimization" },
      { text: "Automated Email & SMS Notifications" },
      { text: "1 Month Post-Launch Support" }
    ],
  },
  {
    name: "Custom Shopify Package",
    price: "Get A Quote",
    description: "Tailored solutions for enterprise businesses",
    features: [
      { text: "Fully Tailored Shopify Development" },
      { text: "Unlimited Products & Categories" },
      { text: "Custom Integrations with Third-Party Apps" },
      { text: "AI-Powered Product Recommendations" },
      { text: "Enterprise-Level Security & Performance" },
      { text: "Shopify Plus Setup (if required)" },
      { text: "Dedicated Account Manager" },
      { text: "Custom Feature Development" },
      { text: "Priority Support & Maintenance" }
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
      className={`p-6 rounded-2xl border-b-4 border-black transition-all duration-300 ${isHovered ? "bg-[#00785A] text-white" : "bg-white text-black"}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="space-y-6">
        {/* Logo */}
        <div
          className={`lg:w-12 w-8 h-8 lg:h-12 rounded-lg ${isHovered ? "bg-white text-[#00785A]" : "bg-[#00785A] border-2 text-[white]"} flex items-center justify-center`}
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
                className={`flex items-center justify-center w-5 h-5 rounded-full ${isHovered ? "bg-[white] text-[#00785A]" : "bg-[#00785A] text-[white]"}`}
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
        <Button className={`w-full mt-2 hover:bg-white tracking-wide ${isHovered ? "bg-white text-[#00785A]" : "bg-[#00785A] text-white"}`} style={{fontFamily:'Clash Grotesk', fontWeight:'700'}}>
          Get Free Enquiry Now
        </Button>
        </Link>
      </div>
    </Card>
  )
}

// OurPlans component
export default function OurPlans() {
  return (
    <section
      className="relative w-full"
      
     id="pricing">
      <div className="relative rounded-xl lg:max-w-[90%] xl:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24" style={{backgroundImage: "url('/landing-page/background.webp')",backgroundColor: "#FBF7ED", backgroundSize: "cover", backgroundPosition: "center", }}>
        
        <div className="flex justify-center mb-12">
            <div className="space-y-4 text-center">
                <Button
                    variant="outline"
                    className="rounded-full border h-h-6 lg:h-7 px-6 border-black text-[black] hover:bgtransparent"
                >
                    Our Plans
                </Button>
                <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wider text-black    `} style={{fontFamily:'Clash Grotesk', fontWeight:'700'}}>
                    Plans That Fit Your  Business Goals
                </h2>
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
