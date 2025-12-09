import { Poppins } from "next/font/google";
import { SpiralArrow } from "./SpiralArrow";

const pop = Poppins({
    weight: '600',
    subsets: ['latin'],
    display: 'swap',
  })

  const popp = Poppins({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
  })
export default function HeroSectionLead() {
  return (
    <section className="w-full py-24 lg:py-24">
      <div className=" lg:ml-48 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="max-w-7xl">
            <h1 className={`text-2xl lg:text-3xl xl:text-5xl font-bold tracking-tight leading-relaxed ${pop.className}`} style={{lineHeight: 1.2}}>
              Meet Our Team of{" "}
              <span className="italic">Visionaries</span>,{" "}
              <span className="italic">Innovators</span>, and world-class{" "}
              <span className="italic">Problem Solvers</span>
            </h1>
            <p className={`mt-6 text-sm md:text-lg text-gray-600 leading-relaxed ${popp.className}`}>
              Our leaders are committed to pushing boundaries, creating lasting impact,
              and delivering transformative solutions through innovation and collaboration.
            </p>
          </div>
          
          <div className="hidden lg:flex relative aspect-square max-w-lg mx-auto lg:ml-auto">
            <SpiralArrow />
          </div>
        </div>
      </div>
    </section>
  )
}

