'use client'
import Image from 'next/image'
import girl from "../../../../public/landing-page/Group 1597884422 (1).png"
import line from "../../../../public/landing-page/line.png"
import { Poppins } from 'next/font/google';
import Link from 'next/link'
const pop =Poppins({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export default function ShopifyBanner() {
  return (
    <main className="relative w-full overflow-hidden h-[540px] lg:h-[640px]"
    style={{backgroundImage: "url('/landing-page/background.webp')",backgroundColor: "#FAF1E3", backgroundSize: "cover", backgroundPosition: "center", }} id='home'>
      {/* Main content container */}
      <div className="container px-3  md:px-4  mx-auto lg:max-w-[95%]  xl:max-w-[80%] py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-4 md:space-y-8 lg:pb-32 mt-4 md:mt-0"> {/* Reduced gap on mobile */}
          <h1 className={`text-center lead md:text-left text-[28px] md:text-4xl lg:text-5xl lg:max-w-xl tracking-wider ${pop.className}`} 
              style={{lineHeight:"1.3"}}>
            <span className="block">Empowering Your</span>
            <span className="block">
              <span className="relative inline-block">
                ECommerce
                <span className="absolute left-0 right-0 -bottom-1"> 
                  <Image 
                    src={line} 
                    alt="" 
                    height={35}
                    width={150}
                    className="w-[150px] md:w-[200px]"
                  />
                </span>
              </span>
              {' '}Dreams
            </span>
          </h1>
            
            <p className="text-[#6C6C6C] text-center md:text-left xl:w-[75%] text-[15px] md:text-xl mt-2 md:mt-4">
              Shopify website design and development for brands that want to scale.
            </p>
            
            <div className="flex items-center justify-center md:justify-normal md:flex-wrap gap-3 md:gap-4 mt-4 md:mt-6">
                <button className="px-7 md:px-10 text-nowrap py-2.5 text-[15px] md:py-3 bg-[#00785A] text-white rounded-md hover:bg-emerald-700 transition-colors border-2 border-[#00785A]">
                Book a Free Call
                </button>
              <Link href={'#contact-us'}>
                <button className="px-7 md:px-10 text-nowrap py-2.5 text-[15px] md:py-3 border-2 border-[#00785A] text-[#00785A] rounded-md hover:bg-emerald-50 transition-colors">
                  Get Started
                </button>
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative h-[280px] lg:h-[600px]">
            <Image
              src={girl}
              alt="Professional woman"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain object-bottom scale-[1.05] md:scale-100 -ml-6 md:ml-0"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  )
}

