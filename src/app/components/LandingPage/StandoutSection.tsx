import { Button } from "@/components/ui/button"
import {  Hanken_Grotesk, Sora } from "next/font/google"
import blue from "../../../../public/blue.svg"
import Image from "next/image"

const pop = Hanken_Grotesk({
    weight: '700',
    subsets: ['latin'],
    display: 'swap',
})
const sora = Sora({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})
export default function StandoutSection() {
  return (
    <section
    className="relative overflow-hidden px-4 py-24 md:px-8"
    style={{
      backgroundColor: "#FBF6E6",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundBlendMode: "overlay",
    }}
  >
    {/* Background Pattern */}
    <div className="absolute top-0 right-0 w-40 h-40 md:h-44 lg:w-80 md:w-44 lg:h-80" id="why-choose-us">
      <Image src={blue} alt="" />
    </div>
  
    {/* Background Image with Opacity */}
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: 'url("/LandingPage/background.png")',
        opacity: "15%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "multiply",
        zIndex: -1,
      }}
    ></div>
  
    <div className="relative max-w-7xl mx-auto">
      {/* Top Section */}
      <div className={`text-center mb-16 ${sora.className}`}>
        <Button variant="outline" className="mb-6 text-red-600">
          why Choose us
        </Button>
        <h2
          className={`text-2xl md:text-5xl font-bold text-[#572D29]`}
          style={{ fontFamily: "Clash Grotesk", fontWeight: "700" }}
        >
          Why Mcansey Standout
        </h2>
      </div>
  
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto border-none">
        {cards.map((card, index) => (
          <div
            key={card.title}
            className={`relative p-8 rounded-2xl border-black border-b-4 transition-all duration-300 hover:rotate-3 overflow-hidden ${
              index % 2 === 0 ? "bg-[#1A2B3B]" : "bg-[#D1B7FF]"
            }`}
          >
            {/* Reversed Triangle Shape */}
            <div
              className="absolute -top-2 right-10 w-20 h-10 bg-[#FBF6E6] border-none"
              style={{
                clipPath: "polygon(64% 100%, 0 0, 100% 0)",
              }}
            />
  
            {/* White Circle */}
            <div className="absolute top-6 right-4 w-6 h-6 rounded-full bg-white z-10" />
  
            <h3
              className={`text-xl md:text-2xl lg:w-50 2xl:text-[40px] 2xl:leading-[50px] mb-4 ${
                index % 2 === 0 ? "text-white" : "text-[#1A2B3B]"
              }`}
              style={{ fontFamily: "Clash Grotesk", fontWeight: "450" }}
            >
              {card.title}
            </h3>
            <p
              className={`${
                index % 2 === 0 ? "text-gray-300" : "text-gray-700"
              }`}
              style={{ fontFamily: "Clash Grotesk", fontWeight: "400" }}
            >
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
  
  )
}

const cards = [
  {
    title: "Modern Web Design",
    description: "Our team specializes in creating cutting-edge websites that captivate visitors and drive results. With expertise in the latest technologies, we ensure your website stands out."
  },
  {
    title: "Custom Solutions",
    description: "We believe every business is unique. That’s why we design and develop websites that reflect your brand identity and cater to your specific needs."
  },
  {
    title: " User Experience",
    description: "Our designs prioritize user satisfaction with intuitive layouts and seamless navigation. We ensure your audience enjoys an engaging and hassle-free online experience."
  },
  {
    title: " End-to-End Service",
    description: "From initial planning to post-launch support, we offer a complete range of services. You can count on us to handle every aspect of your website design journey."
  },
  {
    title: "Quality Focused",
    description: "We deliver high-quality websites that are visually appealing, functional, and optimized for performance. Your satisfaction is our top priority."
  },
  {
    title: "Timely Delivery",
    description: "We maintain clear communication at every step and stick to deadlines. You’ll always know where your project stands and can trust us to deliver on time."
  },
]

