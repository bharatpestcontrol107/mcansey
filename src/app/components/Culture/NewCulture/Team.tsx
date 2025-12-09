import { Button } from '@/components/ui/button'
import { TeamCarousel } from './TeamCarousel'
import Link from 'next/link';


export default function Team() {
    return (
      <section className="bg-black h-auto lg:h-[800px]">
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 ">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Left Column */}
            <div className="lg:col-span-2 max-w-xl">
              <div className="inline-flex items-center rounded-full border border-white px-4 py-1">
                <span className="text-sm text-white">Team Moments</span>
              </div>
  
              <h1 className="mt-6 text-xl lg:text-3xl font-bold text-white leading-tight">
                Celebrations That <br /> Truly Unite Us All
              </h1>
  
              <p className="mt-4 text-sm md:text-lg text-neutral-400">
                Celebrating every success, milestone, and <br /> festive occasion together as one big family.
              </p>
  
              <Link href={"/career"}><Button
                className="mt-8 rounded-full bg-white text-black hover:bg-neutral-100 text-xs md:text-sm"
                size="sm"
              >
                Explore Career
              </Button></Link>
            </div>
  
            {/* Right Column */}
            <div className="lg:col-span-3">
              <TeamCarousel />
            </div>
          </div>
        </div>
      </section>
    );
  }
  

