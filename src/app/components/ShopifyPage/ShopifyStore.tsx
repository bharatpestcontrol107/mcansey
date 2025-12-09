'use client'
import { Button } from "@/components/ui/button"
import { FaCircleDot } from "react-icons/fa6"
import { ScrollingImages } from "./ScrollingImages"
import shopify1 from "../../../../public/landing-page/shopify-1.webp"
import shopify2 from "../../../../public/landing-page/shopify-2.webp"
import shopify3 from "../../../../public/landing-page/shopify-3.webp"
import shopify4 from "../../../../public/landing-page/shopify-4 (2).webp"
import shopify5 from "../../../../public/landing-page/shopify-4n.webp"
import shopify6 from "../../../../public/landing-page/shopify-6.webp"
import shopify7 from "../../../../public/landing-page/shopify-7.webp"
import shopify8 from "../../../../public/landing-page/shopify-8.webp"

const column1Images = [
  shopify2,
 shopify1,
  shopify3,
  shopify4,
]

const column2Images = [
 shopify5,
  shopify6,
 shopify7,
  shopify8,
]

const column3Images = [
 shopify3,
  shopify8,
  shopify1,
 shopify5,
]

export default function ShopifyStore() {
  return (
    <div className="md:h-[1250px] lg:h-[850px]  py-10 px-2">
      <main
        className="container mx-auto px-4 lg:max-w-[90%] xl:max-w-[80%] bg-[#F1F5FF] rounded-lg"
        style={{
          backgroundImage: "url('/landing-page/background.webp')",
          backgroundColor: "#F1F5FF",
          backgroundSize: "",
          backgroundPosition: "center",
        }}
      >
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column */}
          <div className="flex flex-col justify-between space-y-12 py-12  md:pl-14">
            <div className="space-y-12">
              <h1
                className="text-[26px] leading-tight tracking-wider xl:w-[450px] lg:text-[40px]"
                style={{ lineHeight: "1.6" }}
              >
                Let&apos;s <span className="font-bold">Collaborate</span> to Build or Elevate Your{" "}
                <span className="font-bold">Shopify Store</span>
              </h1>

              <div className="grid gap-8 sm:grid-cols-2">
                {[
                  { title: "1,000+", description: "Shopify Stores Served" },
                  { title: "$2B+", description: "Clients Generated" },
                  { title: "30+", description: "Design & Dev Awards" },
                  { title: "6000+", description: "5-Star Reviews" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="bg-white rounded-lg border-2 border-emerald-600 p-4 md:p-5">
                      <FaCircleDot className="h-8 lg:h-10 font-bold w-8 lg:w-10 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold">{item.title}</h3>
                      <p className=" font-bold">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-fit bg-white rounded-lg border-2 border-emerald-600 bg-transparent px-8 py-6 text-sm md:text-lg font-semibold text-emerald-600 hover:bg-emerald-600 hover:text-white">
                Book Your Free Consultation
              </Button>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-3 gap-2 md:gap-2 px-0 lg:px-0 ">
            {/* First Column */}
            <div className="h-[70vh] overflow-hidden">
              <ScrollingImages images={column1Images} direction="down" />
            </div>

            {/* Second Column */}
            <div className="h-[70vh] overflow-hidden">
              <ScrollingImages images={column2Images} direction="up" />
            </div>

            {/* Third Column */}
            <div className="h-[70vh] overflow-hidden">
              <ScrollingImages images={column3Images} direction="down" />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

