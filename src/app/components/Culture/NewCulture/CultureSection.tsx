'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { Autoplay, Pagination } from 'swiper/modules'
import { Button } from "@/components/ui/button"
import { Poppins } from 'next/font/google'

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

const images = ['/Culture/mcansey-group.webp']

export default function CultureSection() {
    return (
        <section className="relative bg-[#FAFAFA] overflow-hidden">
            {/* Background Layers */}
            <div
                className="absolute inset-x-0 top-0 h-[70%]"
                style={{
                    backgroundImage: 'url("/Culture/bg.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
                {/* Culture Button */}
                <div className="flex justify-center mb-8">
                    <Button
                        variant="outline"
                        className="rounded-full px-8 text-xs h-6 md:text-sm font-medium border-[#185FFC] text-[#185FFC] bg-[#EEF6FF] hover:bg-gray-50"
                    >
                        Culture
                    </Button>
                </div>

                {/* Heading */}
                <div className="max-w-4xl mx-auto text-center mb-8">
                    <h2
                        className={`text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight lg:leading-tight mb-6 ${pop.className}`}
                    >
                        Where Innovation Meets{' '}
                        <span className="block lg:inline">
                            <span className="text-blue-600 italic">
                                Collaboration
                            </span>{' '}
                            and Growth Thrives
                        </span>
                    </h2>
                    <p
                        className={`text-gray-600 text-sm md:text-lg ${popp.className}`}
                    >
                        At MCANSEY, we cultivate a culture that empowers
                        creativity, celebrates diversity, and drives excellence
                        in everything we do.
                    </p>
                </div>

                {/* Carousel */}
                <div className="mt-16">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        autoplay={{ delay: 3000 }}
                        loop={true}
                        pagination={{ clickable: true }}
                        slidesPerView={1}
                    >
                        {images.map((src, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative aspect-[16/9] mx-4">
                                    <img
                                        src={src}
                                        alt={`Culture slide ${index + 1}`}
                                        className="rounded-2xl object-cover w-full h-full"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Carousel Dots (Swiper Pagination handles this) */}
                </div>
            </div>
        </section>
    )
}
