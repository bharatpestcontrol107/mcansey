'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import img1 from '../../../../public/Testimonials/amit.png';
import img2 from '../../../../public/Testimonials/akhilesh.jpeg';
import img3 from '../../../../public/Testimonials/sunil.jpeg';
import img4 from '../../../../public/Testimonials/user.png';
import jspl from '../../../../public/logos/jindal-steel.png';
import cto from '../../../../public/logos/intech-logo.png';
import rglogo from '../../../../public/Testimonials/rglogo4.webp';
import nesto from '../../../../public/logos/Nesto-Hub.png';
import Image from "next/image";

const TestimonialsSlider = () => {
  const testimonials = [
    {
      name: "Mrs. Jyotsana",
      position: "Director",
      company: "Reddington Global",
      image: img4,
      feedback:
        "MCANSEY IT Services & Consulting Pvt Ltd has been an incredible partner for our website and digital marketing needs in the USA. Their expertise, timely execution, and commitment to delivering results have been instrumental in helping us expand our digital presence. We couldn’t be more satisfied with the results!",
      companyLogo: rglogo,
    },
    {
      name: "Sunil",
      position: "Founder",
      company: "Nesto Hub",
      image: img3,
      feedback:
        "Working with MCANSEY IT Services on our real estate website and mobile app has been a game changer. Their team delivered a seamless and user-friendly platform that has helped us elevate our business to the next level. Their attention to detail and ability to meet our specific needs is unmatched.",
      companyLogo: nesto,
    },
    {
      name: "Mr. Akhilesh",
      position: "DGM Web",
      company: "JSPL",
      image: img2,
      feedback:
        "MCANSEY’s work on the JSPL website and Jindal Arogya mobile app exceeded our expectations. Their technical expertise and ability to manage complex projects made the entire process smooth. The final product is a testament to their dedication and skill.",
      companyLogo: jspl,
    },
    {
      name: "Mr. Amit",
      position: "CTO",
      company: "Intech Organic Limited",
      image: img1,
      feedback:
        "We collaborated with MCANSEY IT Services for the development of our internal team management app, and they delivered a solution that perfectly matched our needs. The app has streamlined our processes, improved communication, and made team management more efficient. Their professionalism and technical acumen are top-notch.",
      companyLogo: cto,
    },
  ];

  return (
    <div className="testimonials-swiper bg-white text-black py-4 xl:py-12 px-4">
      <div className="w-full mx-auto">
      <div className="mb-10 md:w-[85%] mx-auto md:flex md:justify-between">
  <div className="text-left max-w-2xl">
    <h2 className="text-xl md:text-xl xl:2xl font-bold mb-2">
      Insights from Our Clients on Their Collaborative Journey
    </h2>
    <p className="text-sm  text-black">
      At MCANSEY IT Services & Consulting Pvt Ltd, we specialize in software and mobile application development, committed to fostering productive and growth-focused partnerships with our clients. Our expertise ensures that we not only meet but exceed expectations, driving success together.
    </p>
  </div>

  
 

<div>
  <div className="hidden md:flex space-x-4 text-white">
    <div
      className="swiper-button-prev-custom bg-blue-600 p-2 md:p-3 rounded-full cursor-pointer hover:bg-blue-500"
      role="button"
    >
      <FaArrowLeft size={20} />
    </div>
    <div
      className="swiper-button-next-custom bg-blue-600 p-2 md:p-3 rounded-full cursor-pointer hover:bg-blue-500"
      role="button"
    >
      <FaArrowRight size={20} />
    </div>
  </div>
</div></div>


        <Swiper
          spaceBetween={30}
          slidesPerView={1.6}
          centeredSlides={true}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          autoplay={{
            delay: 2500, 
            disableOnInteraction: false, 
          }}
          modules={[Navigation, Autoplay]} 
          breakpoints={{
            0: {
              slidesPerView: 1,
              centeredSlides: true,
            },
            1024: {
              slidesPerView: 1,
              centeredSlides: true,
            },
            1280: {
              slidesPerView: 1.6,
              centeredSlides: true,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white text-black p-6 md:p-14 rounded-lg shadow-lg border-2 border-brown w-full max-w-[600] mx-auto transition-all duration-300">
                <p className="mb-6 text-sm leading-relaxed text-black">
                  {testimonial.feedback}
                </p>
                <hr className="border-gray-700 mb-6" />
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6 ">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-1w-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className=" text-base font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-400">{testimonial.position}</p>
                      <p className="text-sm text-gray-400">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="ml-auto">
                    <Image
                      src={testimonial.companyLogo}
                      alt={testimonial.company}
                      className="h-16 w-16"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center space-x-4 text-white mt-4 md:hidden pb-3">
    <div
      className="swiper-button-prev-custom bg-blue-600 p-2 rounded-full cursor-pointer hover:bg-blue-500"
      role="button"
    >
      <FaArrowLeft size={20} />
    </div>
    <div
      className="swiper-button-next-custom bg-blue-600 p-2 rounded-full cursor-pointer hover:bg-blue-500"
      role="button"
    >
      <FaArrowRight size={20} />
    </div>
  </div>
      </div>
      
    </div>
  );
};

export default TestimonialsSlider;
