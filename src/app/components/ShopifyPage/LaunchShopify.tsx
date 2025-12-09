import Image from 'next/image'
import { Button } from "@/components/ui/button"
import shopify from '../../../../public/landing-page/shopify-store.webp'
import Link from 'next/link'

export default function LaunchShopify() {
  return (
    <section
      className="py-16 lg:py-24  relative"
      style={{
        backgroundImage: 'url("/landing-page/background-pattern.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="mx-auto w-full px-4 lg:w-[90%] xl:w-[80%] bg-[#F1F5FF] p-4 lg:p-12 rounded-lg shadow-md">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Right Column - Content */}
          <div className="flex flex-col items-start justify-center space-y-6 lg:pl-8 order-1 lg:order-2">
            <h2
              className="font-bold tracking-normal text-gray-900 text-2xl lg:text-3xl xl:text-[55px]"
              style={{ lineHeight: "1.3" }}
            >
              Launch Your{' '}
              <span className="block">Shopify Store</span>
            </h2>

            <p className="text-[16px] md:text-lg leading-relaxed text-gray-600 lg:w-[60%]">
              Experience our Shopify design & development services with no commitment. 
              We'll create a personalized homepage concept for your store absolutely free.
            </p>

           <Link href={'#contact-us'}>
           <Button
              size="lg"
              className="rounded-md bg-emerald-600 px-4 py-4 text-sm md:px-8 md:py-6 md:text-lg font-semibold text-white hover:bg-emerald-700"
            >
              Book Your Free Consultation
            </Button></Link>
          </div>

          {/* Left Column - Image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-xl order-2 lg:order-1">
            <Image
              src={shopify}
              alt="Shopify Store Design Preview"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
