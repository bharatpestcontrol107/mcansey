import React, { useEffect, useRef } from "react"
import Image, { StaticImageData } from "next/image"

interface ScrollingImagesProps {
  images: StaticImageData[]
  direction: "up" | "down"
}

export function ScrollingImages({ images, direction }: ScrollingImagesProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = direction === "down" ? 0 : scrollContainer.scrollHeight / 2

    const scroll = () => {
      scrollPosition += direction === "up" ? 1 : -1
      if (scrollPosition > scrollContainer.scrollHeight / 2) {
        scrollPosition = 0
      } else if (scrollPosition < 0) {
        scrollPosition = scrollContainer.scrollHeight / 2
      }
      scrollContainer.scrollTop = scrollPosition
      animationFrameId = requestAnimationFrame(scroll)
    }

    
    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [direction])

  return (
    <div ref={scrollRef} className="scrolling-container h-full overflow-hidden">
      <div className="scrolling-content">
        {[...images, ...images].map((src, index) => (
          <div key={index} className="relative h-[35vh] mb-4 overflow-hidden rounded-2xl">
            <Image src={src || "/placeholder.svg"} alt={`Scrolling image ${index + 1}`} fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}

