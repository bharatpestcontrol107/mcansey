'use client'


import { ArrowUpRight} from 'lucide-react'
import { Button } from "@/components/ui/button"

interface CoreValue {
  id: number
  title: string
  description: string
}

const coreValues: CoreValue[] = [
  {
    id: 1,
    title: "Innovation",
    description: "We encourage creativity and out-of-the-box thinking. We thrive on pushing boundaries and using innovative solutions."
  },
  {
    id: 2,
    title: "Collaboration",
    description: "We are a team that believes in the power of collective effort. Collaboration across teams and with clients."
  },
  {
    id: 3,
    title: "Integrity",
    description: "Honesty and transparency drive us. We take pride in our work and our relationships."
  },
  {
    id: 4,
    title: "Growth & Learning",
    description: "We support personal and professional growth. Continuous learning is a key part of our culture."
  }
]

export default function CoreValues() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left Column */}
        <div className="space-y-8 flex flex-col justify-between">
          <h2 className="text-2xl md:text-3xl xl:text-[35px] font-bold">Our Core Values</h2>
          <div className="relative flex-1 bg-gray-100 rounded-2xl overflow-hidden">
            <img
              src="/Culture/business-concept-with-team-close-up.jpg"
              alt="Team meeting"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

       
        <div className="flex flex-col">
          <div className="flex justify-end mb-8">
            <Button
              variant="ghost"
              className="group hover:bg-blue-700 bg-blue-700 text-white hover:text-white p-3"
            >
              <ArrowUpRight className="w-8 h-8 " />
            </Button>
          </div>

          <div className="space-y-8">
            {coreValues.map((value, index) => (
              <div
                key={value.id}
                className={`flex gap-6 pb-8 ${
                  index !== coreValues.length - 1 ? 'border-b border-gray-200' : ''
                }`}
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold">
                    {value.id}
                  </div>
                </div>
                <div>
                  <h3 className="text-base md:text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
