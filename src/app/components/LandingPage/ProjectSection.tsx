'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { ProjectCard } from './ProjectCard'
import { Hanken_Grotesk } from 'next/font/google'
import { Autoplay } from 'swiper/modules'
import img1 from "../../../../public/landing-page/mcansey-project-1.png"
import img2 from "../../../../public/landing-page/mcansey-project-2.png"
import img3 from "../../../../public/landing-page/mcansey-project-3.png"
import img4 from "../../../../public/landing-page/mcansey-project-4.png"
import img5 from "../../../../public/landing-page/mcansey-project-5.png"
import img6 from "../../../../public/landing-page/mcansey-project-6.png"
import img7 from "../../../../public/landing-page/mcansey-project-7.png"
import img8 from "../../../../public/landing-page/mcansey-project-8.png"
import img9 from "../../../../public/landing-page/mcansey-project-9.png"
import img10 from "../../../../public/landing-page/mcansey-project-10.png"
import img11 from "../../../../public/landing-page/mcansey-project-11.png"
const pop = Hanken_Grotesk({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
})
const hanken = Hanken_Grotesk({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const projects = [
  {
    id: 1,
    title: 'Financial Dashboard',
    image: img1,
    url: 'https://www.jindalsteel.com/',
  },
  {
    id: 2,
    title: 'Data Analytics Platform',
    image: img2,
    url: 'https://c1india.com/',
  },
  {
    id: 3,
    title: 'Blockchain Interface',
    image: img3,
    url: 'https://tutorbin.com/',
  },
  {
    id: 4,
    title: 'Smart Contract Manager',
    image: img4,
    url: 'https://expertbuddy.com/',
  },
  {
    id: 5,
    title: 'Portfolio Tracker',
    image: img5,
    url: 'https://theflique.com/',
  },
  {
    id: 6,
    title: 'Financial Dashboard',
    image: img6,
    url: 'https://www.newzcover.com/',
  },
  {
    id: 7,
    title: 'Data Analytics Platform',
    image: img7,
    url: 'https://ncswizards.com/',
  },
  {
    id: 8,
    title: 'Blockchain Interface',
    image: img8,
    url: 'https://www.shipease.in/',
  },
  {
    id: 9,
    title: 'Smart Contract Manager',
    image: img9,
    url: 'https://milestone.tech/',
  },
  {
    id: 10,
    title: 'Portfolio Tracker',
    image: img10,
    url: 'https://wasalt.sa/en',
  },
  {
    id: 11,
    title: 'Portfolio Tracker',
    image: img11,
    url: 'https://simran.actor/awards/',
  },
]

export function ProjectsSection() {
  return (
    <section className="relative w-full overflow-hidden py-24" id='portfolio'>
      {/* Background with both color and image */}
      <div
        className="absolute inset-0 bg-[#FFFCF1]"
        style={{
          backgroundImage: `url("/LandingPage/background.png")`,
          backgroundBlendMode: 'overlay',
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col gap-8 md:flex-row items-center md:items-start md:justify-between md:gap-12 px-4 xl:px-0">
          <div className="flex flex-col  gap-4">
            <button className="w-fit rounded-full  bg-red-100 px-4 py-1 text-sm font-medium text-red-600">
              Our Projects
            </button>
            <h2
              className={`max-w-md text-3xl 2xl:text-4xl font-bold tracking-wide text-[#572D29] lg:text-4xl `}
              style={{fontFamily:'Clash Grotesk', fontWeight:'600'}} >
              Proven Results
              <br />
              Across Industries
            </h2>
          </div>
          <p
            className={`max-w-2xl text-center tracking-wide md:text-left md:w-[40%] text-gray-600 `}
            style={{fontFamily:'Clash Grotesk', fontWeight:'400'}}>
            Explore our portfolio of transformative websites that drive
            engagement and deliver measurable growth. We&apos;ve helped
            businesses across various industries build a strong online presence
            and achieve their digital goals.
          </p>
        </div>
      </div>

      {/* Carousel container */}
      <div className="relative">
        <div className="flex justify-end pl-2 lg:pl-0">
          <div className="w-[calc(100%+16px)] max-w-none lg:w-full lg:max-w-[85%] ">
            <Swiper
              spaceBetween={16}
              slidesPerView={3.5}
              autoplay={{ delay: 3000 }}
              breakpoints={{
                1280: { slidesPerView: 3.5 },
                1024: { slidesPerView: 2.5 },
                768: { slidesPerView: 1.5 },
                640: { slidesPerView: 1.2 },
                320: { slidesPerView: 1.2 },
              }}
              loop={true}
              modules={[Autoplay]}
            >
              {projects.map((project) => (
                <SwiperSlide key={project.id}>
                  <div className="pl-4">
                    <ProjectCard project={project} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}
