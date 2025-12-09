'use client'

import { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { FaQuoteLeft } from 'react-icons/fa'
import { Poppins } from 'next/font/google'


const pop = Poppins({
    weight: '700',
    subsets: ['latin'],
    display: 'swap',
  }) 

  const pops = Poppins({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
  }) 

interface Testimonial {
  text: string
  author: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    text: 'At McAnsey, I feel like my ideas truly matter. The collaborative environment and the constant encouragement to innovate have helped me grow both personally and professionally.',
    author: 'Deven ',
    image: '/Leadership/senior/mcansey-sr-1.png'
  },
  {
    text: 'Being part of McAnsey has been a game changer for my career. I appreciate the opportunities to lead projects and collaborate with such a talented team.',
    author: 'Ramakant Kumawat',
    image: '/Leadership/senior/mcansey-sr-11.png'
  }
]

export default function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <section className="w-full py-16 ">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Section Title */}
        <h2 className={`text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12 ${pop.className}`}>
          What Our Team Says
        </h2>

        {/* Carousel */}
        <div className="relative">
          {/* Embla Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full lg:w-[100%] flex flex-col lg:flex-row items-center gap-8 bg-[#E0E7ED] rounded-lg shadow-md p-6 lg:p-8 mx-auto"
                >
                  {/* Left Content */}
                  <div className="flex-1 flex flex-col justify-center">
                    {/* Big Text */}
                    <h3 className="text-4xl font-bold text-gray-900 mb-4">
                    <FaQuoteLeft     />
                    </h3>
                    <p className={`md:text-lg font-medium text-gray-800 mb-4 ${pops.className}` }>
                      “{testimonial.text}”
                    </p>
                    <p className={`font-semibold text-[#1F1F1F] ${pop.className}`}>- {testimonial.author}</p>
                  </div>
                  {/* Right Image */}
                  <div className="flex-1 flex justify-center items-center">
                    <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-[-16px] top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
          >
            <ChevronLeft className="h-6 w-6 text-gray-800" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-[-16px] top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
          >
            <ChevronRight className="h-6 w-6 text-gray-800" />
          </button>
        </div>
      </div>
    </section>
  )
}
