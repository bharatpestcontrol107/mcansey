'use client';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../../styles/HeroCarousel.module.css';
import { Anton, Fredoka, Sora } from 'next/font/google';
import Image from 'next/image';
import img1 from '../../../../public/LandingPage/background.png'
import think from '../../../../public/LandingPage/think.png'
import cursor from '../../../../public/cursor.svg'
import arrow from '../../../../public/LandingPage/Layer_1.png'
import layer from '../../../../public/LandingPage/yellow.svg'
import blub from '../../../../public/LandingPage/bulb.png'

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});
const sora = Sora({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
});
const sora1 = Sora({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});
const fredoka = Fredoka({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
});

interface HeroCarouselProps {
  index: number;
}

const HeroCarousel = ({ index }: HeroCarouselProps) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <div className="overflow-x-hidden w-full">
      <Slider {...settings} className={`w-full ${styles.heroCarousel}`}>
        {/* Slide 1 */}
        <div className="relative flex flex-col justify-between items-center text-white h-[507px] w-full">
          <div className="absolute inset-0">
            {/* Using Next.js Image for the background */}
            <Image
              src={img1}
              alt="Background"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-[#A10040] opacity-80"></div>
          <div className="relative z-10 text-left pt-10 px-[3%] h-full w-full max-w-[100%]">
            <div className="w-full flex items-center h-[80px]">
              <h3 className={`font-bold uppercase text-5xl p-2 ${anton.className}`}>Build</h3>
              <h1 className={`text-lg md:text-xl 2xl:text-3xl font-extrabold my-2 ${sora.className}`}>
                Website that Drives Growth and Results
              </h1>
            </div>
            <p className="text-sm my-4 tracking-wider leading-[2.3]">
              5+ Years Of Proven <span className="font-bold">Industry Experience</span> <br />
              150+ Projects Developed And <span className="font-bold">Delivered</span> <br />
              Trusted By <span className="font-bold">100+ Leading</span> Brands Worldwide <br />
              100% Client <span className="font-bold">Satisfaction Guarantee</span> Offered
            </p>
            <button
              className={`bg-white text-black border py-2 px-4 tracking-wider sm:px-6 text-sm sm:text-base font-bold hover:scale-105 rounded-[106px] border-b-4 border-black transition duration-300 ${fredoka.className}`} onClick={() => window.location.href = 'tel:+91 9323170652'}>
              Hire Now
            </button>
          </div>
          <div className="absolute bottom-28 left-32 z-10">
            <div className="h-[40px] w-[38px] rounded-full">
              <Image src={cursor} alt="Cursor Icon" />
            </div>
          </div>
          <div className="absolute bottom-32 right-20 z-10">
            <div className="h-[47px] w-[52px]">
              <Image src={arrow} alt="Layer Icon" />
            </div>
          </div>
          <div className="absolute bottom-0 right-0 z-10">
            <div className="w-[300px]">
              <Image src={layer} alt="Yellow Decoration" className="w-full" />
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative flex flex-col justify-between items-center text-black h-[507px] w-full">
          <div className="absolute inset-0">
            <Image
              src={img1}
              alt="Background"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL="/LandingPage/background-blur.png"
            />
          </div>
          <div className="absolute inset-0 bg-[#FFB700] opacity-80 h-[517px]"></div>
          <div className="relative z-10 text-left pt-12 pl-[10%] w-full max-w-[90%] space-y-4">
            <h3 className="text-xl font-bold uppercase">Bring Ideas Into a</h3>
            <h1
              className={`text-4xl text-[#572D29] font-extrabold uppercase my-2 ${anton.className}`}
            >
              Top Website
            </h1>
            <div style={{ lineHeight: '30.72px' }}>
              <p className={`${sora1.className}`}>Unique Designs That Stand Out</p>
              <p className={`${sora1.className}`}>Ready to Scale with Your Business</p>
            </div>
            <button
              className={`bg-white text-black border py-2 px-4 tracking-wider sm:px-6 text-sm sm:text-base font-bold hover:scale-105 rounded-[106px] border-b-4 border-black transition duration-300 ${fredoka.className}`}
              onClick={() => window.location.href = 'tel:+91 9323170652'}>
              Hire Now
            </button>
          </div>
          <Image
            src={think}
            alt="Illustration"
            className="relative z-10 mt-6 max-w-[400px] object-contain"
            width={400}
            height={400}
          />
        </div>

        {/* Slide 3 */}
        <div className="relative flex flex-col justify-between items-center text-white h-[507px] w-full ">
          <div className="absolute inset-0">
            <Image
              src={img1}
              alt="Background"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL="/LandingPage/background-blur.png"
            />
          </div>
          <div className="absolute inset-0 bg-[#0B314E] opacity-80"></div>
          <div className="relative z-10 text-left pt-12 pl-[10%] w-full max-w-[90%] space-y-3">
            <h3 className="text-xl font-bold uppercase">Stand Out With</h3>
            <h1 className={`text-4xl font-extrabold uppercase my-2 ${anton.className}`}>
              Unique Design!
            </h1>
            <div style={{ lineHeight: '30.72px' }}>
              <p className={`${sora1.className} `}>Ready to Elevate Your Business?</p>
              <p className={`${sora1.className}`}>Transform Your Ideas into Reality</p>
            </div>
            <button className="bg-white text-sm text-black py-2 px-6 font-bold hover:scale-105 rounded-[106px] border-b-4 border-black transition duration-300" onClick={() => window.location.href = 'tel:+91 9323170652'}>
              Hire Now
            </button>
          </div>
          <Image
            src={blub}
            alt="Illustration"
            className="relative z-10 w-full mt-6 max-w-[300px] object-contain"
            width={300}
            height={300}
          />
        </div>
      </Slider>
    </div>
  );
};

export default HeroCarousel;
