'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { ProjectCard } from './ProjectCard'
import { Hanken_Grotesk } from 'next/font/google'
import { Autoplay } from 'swiper/modules'
import img1 from '../../../../public/landing-page/project1.webp'
import img2 from '../../../../public/landing-page/project2.webp'
import img3 from '../../../../public/landing-page/project3.webp'
import img4 from '../../../../public/landing-page/project4.webp'
import img5 from '../../../../public/landing-page/project5.webp'
import img6 from '../../../../public/landing-page/project6.webp'
import img7 from '../../../../public/landing-page/project7.webp'
import img8 from '../../../../public/landing-page/project8.webp'

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
    url: 'https://www.bluestone.com/',
  },
  {
    id: 2,
    title: 'Data Analytics Platform',
    image: img2,
    url: 'https://us.ehesas.com/?srsltid=AfmBOooJqqbAgw28d2YFAJnqEdbhqrcPaRJYQ63PWjSA5TFy7U3E7VtN',
  },
  {
    id: 3,
    title: 'Blockchain Interface',
    image: img3,
    url: 'https://yellowverandah.in/?srsltid=AfmBOopkVTaIdhSBhBYDsdaHRg4ccuwzPdijp9gMSB_6PmGpz4C1liPT',
  },
  {
    id: 4,
    title: 'Smart Contract Manager',
    image: img4,
    url: 'https://shopnishba.com/',
  },
  {
    id: 5,
    title: 'Portfolio Tracker',
    image: img5,
    url: 'https://www.cbazaar.com/in/',
  },
  {
    id: 6,
    title: 'Financial Dashboard',
    image: img6,
    url: 'https://naturenuskha.com/',
  },
  {
    id: 7,
    title: 'Data Analytics Platform',
    image: img7,
    url: 'https://folklorecollections.com/',
  },
  {
    id: 8,
    title: 'Blockchain Interface',
    image: img8,
    url: 'https://www.noosh.co.in/?srsltid=AfmBOorgkXci5B4lWKnXfOPy6l9TdZ9rxmQg-KTggvU29LbhQGbtllSt ',
  },
 
]

export function OurProject() {
  return (
    <section className="relative w-full overflow-hidden py-8 lg:py-7" id='projects'>
      {/* Background with both color and image */}
     
      <div className="relative mx-auto p-4 py-6 lg:py-12 lg:p-12 lg:max-w-[90%] xl:max-w-[80%]" style={{backgroundImage: "url('/landing-page/background.webp')",backgroundColor: "#F1F5FF", backgroundSize: "cover", backgroundPosition: "center", }}>
      

        <div className="relative  mb-16 flex flex-col gap-8 md:flex-row items-center md:items-start md:justify-between md:gap-12 xl:px-0">
            <div className="flex flex-col pt-4 lg:pt-0 items-center gap-4 md:items-start">
            <button className="w-fit rounded-full bg-white px-4 py-1 text-sm font-medium text-black">
              Our Projects
            </button>
            <h2
              className={`max-w-md text-2xl 2xl:text-4xl font-bold tracking-wide text-black lg:text-4xl`}
              style={{ fontFamily: 'Clash Grotesk', fontWeight: '600' }}
            >
              Proven Results
              <br />
              Across Industries
            </h2>
            </div>
          <p
            className={`max-w-2xl text-center  tracking-wide md:text-left md:w-[40%] text-gray-600 `}
            style={{fontFamily:'Clash Grotesk', fontWeight:'400'}}>
            Explore our portfolio of transformative websites that drive
            engagement and deliver measurable growth. 
          </p>
        </div>
        <div className="relative">
        <div className="flex justify-end px-4 lg:px-0 ">
          <div className="w-[calc(100%+16px)] max-w-none  lg:w-full ">
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
                  <div className="pl-0">
                    <ProjectCard project={project} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      </div>

      {/* Carousel container */}
    
    </section>
  )
}
