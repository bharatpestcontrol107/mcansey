'use client'

import { useState, useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface CarouselImage {
  src: string
  alt: string
  caption: string
}

const images: CarouselImage[] = [
  {
    src: '/Culture/team1.webp',
    alt: 'Team celebration moment 1',
    caption: 'Annual Team Celebration 2025'
  },
  {
    src: '/Culture/team2.webp',
    alt: 'Team celebration moment 2',
    caption: 'Summer Office Party'
  },
  {
    src: '/Culture/mcansey-group-one.jpg',
    alt: 'Team celebration moment 2',
    caption: 'Celebration'
  },
  {
    src: '/Culture/mcansey-group-two.jpg',
    alt: 'Team celebration moment 2',
    caption: 'Team '
  },
  {
    src: '/Culture/team3.webp',
    alt: 'Team celebration moment 2',
    caption: 'Celebration'
  },
  {
    src: '/Culture/mcansey-group-three.jpg',
    alt: 'Team celebration moment 2',
    caption: 'Team '
  },
  {
    src: '/Culture/team4.webp',
    alt: 'Team celebration moment 2',
    caption: 'Celebration'
  },
  {
    src: '/Culture/team5.webp',
    alt: 'Team celebration moment 2',
    caption: 'Team '
  },
  {
    src: '/Culture/team7.jpg',
    alt: 'Team celebration moment 2',
    caption: 'Team'
  },
  {
    src: '/Culture/team8.jpg',
    alt: 'Team celebration moment 2',
    caption: 'Team '
  },
  {
    src: '/Culture/team9.jpg',
    alt: 'Team celebration moment 2',
    caption: 'Team'
  },
  {
    src: '/Culture/team10.jpg',
    alt: 'Team celebration moment 2',
    caption: 'Team '
  },
  
]

export function TeamCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    const updateSlidesToScroll = () => {
      if (window.innerWidth < 768) {
        emblaApi.reInit({ loop: true, slidesToScroll: 1 })
      } else {
        emblaApi.reInit({ loop: true, slidesToScroll: 2 })
      }
    }

    // Initialize slidesToScroll based on current window width
    updateSlidesToScroll()

    // Update on window resize
    window.addEventListener('resize', updateSlidesToScroll)

    return () => {
      window.removeEventListener('resize', updateSlidesToScroll)
    }
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    onSelect()
    emblaApi.on('select', onSelect)

    
    const autoplay = setInterval(() => {
      emblaApi.scrollNext()
    }, 5000)

    return () => {
      emblaApi.off('select', onSelect)
      clearInterval(autoplay)
    }
  }, [emblaApi, onSelect])

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
        <div className="flex gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-full sm:w-[90%] md:w-[50%]" 
            >
              <div className="relative w-full h-[400px] md:h-[500px] lg:h-[400px]  rounded-xl overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full h-full rounded-2xl"
                  loading="lazy" 
                />
                <div className="absolute inset-x-0 bottom-0 h-20 sm:h-24 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="absolute bottom-4 left-8 text-white text-xs sm:text-sm">
                    {image.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Next Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full shadow-lg"
        onClick={scrollNext}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next slide</span>
      </Button>

      {/* Dots */}
      <div className="absolute bottom-4 left-4 flex gap-1">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === selectedIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
