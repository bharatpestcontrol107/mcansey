import Image from 'next/image'
import { Button } from "@/components/ui/button"
import img1 from "../../../../public/landing-page/partner_logo_1.svg.png"
import img2 from "../../../../public/landing-page/nature-nuskha.png"
import img3 from "../../../../public/landing-page/Folklore-small-3 2.webp"
import img4 from "../../../../public/landing-page/cbazaar_logo 2.webp"
import img5 from "../../../../public/landing-page/gempundit.webp"
import img6 from "../../../../public/landing-page/ehesas.webp"
import img7 from "../../../../public/landing-page/noosh.webp"
import img8 from "../../../../public/landing-page/8e4ea00fac32a053fa46a89b41db5439.png"
import img9 from "../../../../public/landing-page/6d041c6f380e2c2a8954274e9afb4c8c.png"
import img10 from "../../../../public/landing-page/nishba.webp"
import img11 from "../../../../public/landing-page/cbazaar_logo 3.webp"
import img12 from "../../../../public/landing-page/mcansey-logo (2).webp"
import img13 from "../../../../public/landing-page/kazuki-official 2 (1).webp"
import img14 from "../../../../public/landing-page/bs-logo-2x 2.webp"
import img15 from "../../../../public/landing-page/labx_logo_2018.webp"
import img16 from "../../../../public/landing-page/logo-light 1.webp"
import img17 from "../../../../public/landing-page/carritos 1.webp"
import img18 from "../../../../public/landing-page/coal-giene 1.webp"
import img19 from "../../../../public/landing-page/logo 3.png"

export default function Brands() {
  const brands = [
    // Row 1
    { name: 'Shopify Plus', src: img1 },
    { name: 'Nature Nuskha', src: img2 },
    { name: 'Folklore', src: img3 },
    { name: 'Bazaar', src: img4 },
    { name: 'GemPundit', src: img5 },
    // Row 2
    { name: 'Ehesas', src: img6 },
    { name: 'Noosh', src: img7 },
    { name: 'Get My Bugs', src: img8 },
    { name: 'Yellow Verandah', src: img9 },
    { name: 'Bluestone 2', src: img14 },
    
    // Row 3
    { name: 'Lakha', src: img10 },
    { name: 'Bazaar 2', src: img11 },
    { name: 'Kazuki', src: img13 },
    { name: 'Bluestone', src: img14 },
    { name: 'Ehesas 2', src: img6 },
   
    // Row 4
    { name: 'F&F', src: img19 },
    { name: 'Folklore 2', src: img3 },
    { name: 'Noosh 2', src: img7 },
    { name: 'LabX', src: img15 },
    { name: 'Rose N Cakes', src: img16 },
    // Row 5
    { name: 'Carritos', src: img17 },
    { name: 'Coal & Candle', src: img18 },
    { name: 'Bazaar 3', src: img4 },
  
    { name: 'F&F', src: img19 },
    { name: 'GemPundit', src: img5 },
  ]

  return (
    <section className="bg-white py-8 lg:py-24">
      <div className="mx-auto w-full px-4 lg:w-[90%] xl:w-[80%]">
        <div className="flex flex-col items-center space-y-8 lg:space-y-12">
          <Button
            variant="outline"
            className="rounded-full border border-black"
          >
            Our Process
          </Button>

          <h2 className="text-center text-2xl font-bold md:text-4xl lg:text-[40px]">
            Trusted By the Worlds Most Innovative Brands
          </h2>

          <div className="relative w-full">
            {/* Grid of brand logos */}
            <div className="grid grid-cols-3 gap-px border rounded-md bg-gray-200 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {brands.map((brand, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-center bg-white p-8 ${index >= brands.length - 1 ? 'hidden sm:flex' : ''}`}
                >
                  <Image
                    src={brand.src || "/placeholder.svg"}
                    alt={brand.name}
                    width={140}
                    height={60}
                    className="h-12 w-auto hover:scale-105 transform transition-all object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Centered overlay */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative overflow-hidden rounded-2xl bg-black p-8">
                <Image
                  src={img12}
                  alt="Mcansey"
                  width={160}
                  height={90}
                  className="h-auto w-auto object-contain"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
