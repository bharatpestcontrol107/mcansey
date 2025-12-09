'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { cn } from "@/lib/utils"

interface ScrollerProps {
  images: { src: string; alt: string }[]
  reverse?: boolean
  offset?: boolean
}

export function InfiniteScroll({ images, reverse, offset }: ScrollerProps) {
  const scrollerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return

    const scrollContent = () => {
      if (reverse) {
        if (scroller.scrollLeft <= 0) {
          scroller.scrollLeft = scroller.scrollWidth / 2
        } else {
          scroller.scrollLeft -= 1
        }
      } else {
        if (scroller.scrollLeft >= scroller.scrollWidth / 2) {
          scroller.scrollLeft = 0
        } else {
          scroller.scrollLeft += 1
        }
      }
    }

    const animation = setInterval(scrollContent, 30)
    return () => clearInterval(animation)
  }, [reverse])

  // Duplicate images to create seamless loop
  const duplicatedImages = [...images, ...images]

  return (
    <div
      ref={scrollerRef}
      className="flex gap-4 overflow-hidden hover:[&>*]:pause"
    >
      {duplicatedImages.map((image, index) => (
        <div
          key={index}
          className={cn(
            "relative shrink-0",
            offset ? "w-[60%] first:w-[30%] lg:w-[40%] lg:first:w-[20%]" : "w-[60%] last:w-[30%] lg:w-[40%] lg:last:w-[20%]"
          )}
        >
          <div className="relative aspect-[4/3]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

