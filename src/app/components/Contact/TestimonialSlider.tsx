'use client'
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';



const testimonials = [
  {
    client: "Jindal Steel",
    text: `When we approached Mcansey, what we had was a jindal steel app and website whose conversion rate was dwindling for quite some time. We weren’t able to identify the issue, but we needed quick help. The time and effort that the team spent behind our application, not just identified the issue but also eradicated it from scratch.`,
  },
  {
    client: "ExpertBuddy",
    text: `When we approached Mcansey, what we had was a ExpertBuddy  app and website whose conversion rate was dwindling for quite some time. We weren’t able to identify the issue, but we needed quick help. The time and effort that the team spent behind our application, not just identified the issue but also eradicated it from scratch.`,
  },
  {
    client: "Nesto-Hub",
    text: `When we approached Mcansey, what we had was a Nesto-Hub app and website whose conversion rate was dwindling for quite some time. We weren’t able to identify the issue, but we needed quick help. The time and effort that the team spent behind our application, not just identified the issue but also eradicated it from scratch.`,
  },
];

const TestimonialSlider = () => {
  const swiperRef = useRef<any>(null); 

  return (
    <div className="w-full bg-gray-50 py-10 px-4 md:px-10 lg:px-20 lg:mt-32 2xl:mt-4 flex justify-center items-center flex-col">
    
      <h2 className="text-center text-xl md:text-2xl  font-bold mb-8 xl:max-w-[50%] tracking-wider">
        We are helping Global Leaders with Digital Engineering
      </h2>

      <div className="w-full lg:w-[85%] flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0 text-center lg:text-left">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            Become the next big story
          </h2>
         
         {/* <button className="mt-4 py-2 px-4 text-sm bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
            Talk to our Experts
          </button> */}
       
        </div>

        <div className="w-full lg:w-2/3 relative bg-white p-6 rounded-lg shadow-lg">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            onInit={(swiper) => (swiperRef.current = swiper)} 
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="relative p-6 bg-white rounded-lg shadow-md text-left">
                  <h4 className="text-lg  font-bold mb-2 text-blue-600">
                    {testimonial.client}
                  </h4>
                  <p className="text-gray-700 text-sm md:text-base relative">
                    <span className="text-4xl text-gray-300 absolute -top-4 left-0">“</span>
                    {testimonial.text}
                    <span className="text-4xl text-gray-300 absolute -bottom-4 right-0">”</span>
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="absolute bottom-4 right-4 flex space-x-4">
            <button
              className="swiper-custom-button p-2 bg-gray-200 rounded-full hover:bg-blue-600 hover:text-white transition z-10"
              onClick={() => swiperRef.current?.slidePrev()} 
            >
              <FaArrowLeft />
            </button>
            <button
              className="swiper-custom-button p-2 bg-gray-200 rounded-full hover:bg-blue-600 hover:text-white transition z-10"
              onClick={() => swiperRef.current?.slideNext()} 
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
