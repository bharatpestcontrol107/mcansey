'use client';
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Hanken_Grotesk } from "next/font/google";
import { FaQuoteLeft } from "react-icons/fa";
import test1 from '../../../../public/Testimonials/user.png'
import test2 from '../../../../public/Testimonials/sunil.jpeg'
import test3 from '../../../../public/Testimonials/akhilesh.jpeg'
import test4 from '../../../../public/Testimonials/amit.png'
import star from '../../../../public/LandingPage/StarLayer.png'
const pop = Hanken_Grotesk({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

const pops = Hanken_Grotesk({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const testimonials = [
  {
    quote: "MCANSEY IT Services & Consulting Pvt Ltd has been an incredible partner for our website and digital marketing needs in the USA. Their expertise, timely execution, and commitment to delivering results have been instrumental in helping us expand our digital presence. We couldn’t be more satisfied with the results!",
    name: "Mrs. Jyotsana",
    role: "Director, Reddington Global",
    image: test1,
  },
  {
    quote: "Working with MCANSEY IT Services on our real estate website and mobile app has been a game changer. Their team delivered a seamless and user-friendly platform that has helped us elevate our business to the next level. Their attention to detail and ability to meet our specific needs is unmatched.",
    name: "Sunil",
    role: "Founder, Nesto Hub",
    image: test2,
  },
  {
    quote: "MCANSEY’s work on the JSPL website and Jindal Arogya mobile app exceeded our expectations. Their technical expertise and ability to manage complex projects made the entire process smooth. The final product is a testament to their dedication and skill.",
    name: "Mr. Akhilesh",
    role: "DGM Web, JSPL",
    image: test3,
  },
  {
    quote: "We collaborated with MCANSEY IT Services for the development of our internal team management app, and they delivered a solution that perfectly matched our needs. The app has streamlined our processes, improved communication, and made team management more efficient. Their professionalism and technical acumen are top-notch.",
    name: "Mr. Amit",
    role: "CTO, Intech Organic Limited",
    image: test4,
  },
];

const colors = ["#FFB700", "#0B314E", "#D1B7FF", "#0B314E",]; 
const quoteColors = ["#000000", "#FFFFFF", "#000000","#FFFFFF",]; 
const descriptionColors = ["#000000", "#FFFFFF", "#000000","#FFFFFF",]; 
const nameColors = ["#000000", "#FFFFFF", "#000000","#FFFFFF",]; 
const roleColors = ["#000000", "#FFFFFF", "#000000","#FFFFFF",]; 

const ShopifyTestimonial = () => {
  return (
    <section className="w-full   lg:py-16 relative" id="shopifytest">
      <div className="absolute top-6 right-6 lg:top-12 lg:right-12">
        <Image
          src={star}
          alt="Star"
          width={50}
          height={50}
          className="lg:w-[80px] lg:h-[80px]"
        />
      </div>

      <div className="lg:max-w-[90%] bg-[#FBF7ED] py-12 p-4 md:p-12 xl:max-w-[80%] mx-auto px-4 sm:px-8" id="shopifytest" style={{backgroundImage: "url('/landing-page/background.webp')",backgroundColor: "#FBF7ED", backgroundSize: "cover", backgroundPosition: "center", }}>
        <div className="flex flex-col lg:flex-row items-center justify-center text-center overflow-hidden">
          <div className="space-y-4">
            <button className="text-red-600 bg-white border border-black px-6 py-1 rounded-lg text-sm">
              Client Testimonials
            </button>
            <h1 className={`text-2xl lg:text-4xl font-bold text-black`} style={{ fontFamily: 'Clash Grotesk', fontWeight: '700' }}>
              Hear What Our Clients Say
            </h1>
          </div>
        </div>
        <div className="mt-12 px-2 sm:px-4 xl:px-0 border-none">
        <Swiper
          spaceBetween={20}
          loop={true}
          breakpoints={{
            373: { slidesPerView: 1.1 },
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3.5 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative rounded-2xl border-b-4 border-black p-6 h-96 md:h-80 lg:h-96  w-full flex flex-col border-none justify-between"
                style={{ backgroundColor: colors[index % colors.length] }}
              >
                {/* Top Clip Path Overlay */}
                <div
                  className="absolute -top-1 left-[15%] w-8 h-10"
                  style={{
                    clipPath: "polygon(83% 0, 0 0%, 95% 89%)",
                    backgroundColor: "#FBF7ED", // Adjust color as needed
                  }}
                ></div>

                {/* Quote */}
                <div>
                  <span className="text-2xl lg:text-3xl font-bold" style={{ color: quoteColors[index % quoteColors.length] }}><FaQuoteLeft /></span>
                  <p className={`text-md font-medium mt-2 `} style={{ color: descriptionColors[index % descriptionColors.length],fontFamily:'Clash Grotesk', fontWeight:'400' }}>
                    {testimonial.quote}
                  </p>
                </div>

                {/* Name and Role */}
                <div className="flex items-center" >
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div className="ml-4">
                    <p className={`font-bold ${pop.className}`} style={{ color: nameColors[index % nameColors.length],fontFamily:'Clash Grotesk', fontWeight:'600' }}  >
                      {testimonial.name}
                    </p>
                    <p className={`text-gray-500 text-sm ${pops.className}`} style={{ color: roleColors[index % roleColors.length], fontFamily:'Clash Grotesk', fontWeight:'400' }}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      </div>

    
    </section>
  );
};

export default ShopifyTestimonial;
