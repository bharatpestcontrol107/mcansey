'use client'

import { useState } from 'react'
import { FilterButton } from './FilterButton'
import { InfiniteScroll } from './InfiniteScroll'
import { Poppins } from 'next/font/google'


const pop = Poppins({
    weight: '700',
    subsets: ['latin'],
    display: 'swap',
  })

const filters = [
 
  'Employee Recognition',
 
] as const

type Filter = typeof filters[number]

const imagesByFilter: Record<Filter, { row1: { src: string; alt: string }[], row2: { src: string; alt: string }[] }> = {
  'Employee Recognition': {
    row1: [
      { src: '/Culture/filter/slide1.webp?height=300&width=400&text=Cultural+Event+1', alt: 'Office celebration' },
      { src: '/Culture/filter/slide2.webp?height=300&width=400&text=Cultural+Event+2', alt: 'Team lunch' },
      { src: '/Culture/filter/slide3.webp?height=300&width=400&text=Cultural+Event+3', alt: 'Festival celebration' },
      { src: '/Culture/filter/slide4.webp?height=300&width=400&text=Cultural+Event+4', alt: 'Office party' },
    ],
    row2: [
      { src: '/Culture/filter/slide1.webp?height=300&width=400&text=Cultural+Event+5', alt: 'Holiday celebration' },
      { src: '/Culture/filter/slide5.webp?height=300&width=400&text=Cultural+Event+6', alt: 'Cultural workshop' },
      { src: '/Culture/filter/slide6.webp?height=300&width=400&text=Cultural+Event+7', alt: 'Diversity day' },
      { src: '/Culture/filter/slide4.webp?height=300&width=400&text=Cultural+Event+8', alt: 'International food festival' },
    ]
  },
 
}

export default function CultureFilter() {
  const [activeFilter, setActiveFilter] = useState<Filter>('Employee Recognition')

  return (
    <section className="w-full bg-[#FAFAFA] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className={`text-center text-2xl md:text-3xl xl::text-4xl font-bold mb-8 ${pop.className}`}>
          Explore Life at <span className="text-blue-600">Mcansey</span>
        </h1>

        <div className="flex flex-wrap justify-center gap-3 mb-12 text-xs">
          {filters.map((filter) => (
            <FilterButton
              key={filter}
              active={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </FilterButton>
          ))}
        </div>

        <div className="space-y-4">
          <InfiniteScroll 
            images={imagesByFilter[activeFilter].row1} 
            offset={false}
          />
          <InfiniteScroll 
            images={imagesByFilter[activeFilter].row2} 
            reverse 
            offset={true}
          />
        </div>
      </div>
    </section>
  )
}

