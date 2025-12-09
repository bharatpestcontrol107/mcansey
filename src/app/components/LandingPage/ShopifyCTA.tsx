import Image from 'next/image'
import Link from 'next/link'
import banner from "../../../../public/landing-page/Shopifycta.png"
import banner2 from "../../../../public/landing-page/shopifycta2.png"
export default function ShopifyCTA() {
  return (
    <section className="md:pb-0 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:py-24">
        <div className="border border-black rounded-[18px] bg-[#D1B7FF] shadow-[9px_8px_0px_0px_#000000] w-full h-[400px] md:h-[300px] lg:h-[230px] mx-auto overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center h-full">
            {/* Left Column */}
            <div className="flex items-center justify-start md:justify-center lg:justify-start h-full px-4 md:px-0">
              <div className="pl-4 md:pl-0 lg:pl-8 max-w-[450px] space-y-3 md:space-y-4 pt-2 md:pt-8 lg:pt-0">
                <h2 className="text-left md:text-center lg:text-left text-[20px] md:text-2xl lg:text-3xl font-[900] leading-tight text-[#0B314E]">
                  Want a ECommerce Store?
                </h2>
                <p className="text-left md:text-center lg:text-left text-[14px] md:text-base font-[500] text-[#0B314E]">
                  Custom design & development to scale your business. Explore our main website for more!
                </p>
                <div className="flex justify-start md:justify-center lg:justify-start">
                  <Link href="/mcansey-shopify/">
                    <div className="px-6 md:px-8 py-2 md:py-2.5 text-[15px] md:text-[16px] bg-[#0B314E] text-white rounded-[209px] hover:opacity-90 transition-all">
                      Click Here to Know the Price
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="relative h-[200px] md:h-[280px] lg:h-full w-full -mt-4 -mb-10 md:-mb-20 lg:mb-0">
              <Image
                src={banner2}
                alt="Shopify Development"
                fill
                className="object-cover object-top scale-125 -ml-4 md:-ml-8 block lg:hidden -mt-10 md:-mt-32"
                priority
              />
              <Image
                src={banner}
                alt="Shopify Development"
                fill
                className="object-cover object-center scale-110 hidden lg:block"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}