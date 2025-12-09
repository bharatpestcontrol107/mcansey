'use client'

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import dynamic from 'next/dynamic';
import { Anton, Fredoka, Hanken_Grotesk, Sora } from "next/font/google";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Image from 'next/image';
import img1 from '../../../../public/LandingPage/background.png'
import think from '../../../../public/LandingPage/think.png'
import cursor from '../../../../public/cursor.svg'
import arrow from '../../../../public/LandingPage/Layer_1.png'
import layer from '../../../../public/LandingPage/yellow.svg'
import blub from '../../../../public/LandingPage/bulb.png'

const pop = Hanken_Grotesk({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
})
const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
const sora = Sora({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
})
const sora1 = Sora({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
const fredoka = Fredoka({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
})

const HeroCarousel = dynamic(() => import('./HeroCarousel'), { ssr: false });

const HeroSection = () => {
  const [hoveredSection, setHoveredSection] = useState<string>("left");
  const [isMobile, setIsMobile] = useState<boolean | null>(null);;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  if (isMobile === null) {

    return null;
  }

  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about-us');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="transition-all duration-300 ease-in-out" onMouseLeave={() => setHoveredSection("left")} id="home">
      {isMobile ? (
        <HeroCarousel index={0} />
      ) : (
        <div className="h-[617px] w-full flex overflow-hidden">
          {/* Left Column */}
          <motion.div
            className="relative flex flex-col justify-between items-center text-white"
            onMouseEnter={() => setHoveredSection("left")}
            animate={{
              width: hoveredSection === "left" ? "45%" : "27.5%",
              transition: { duration: 0.5 },
            }}
            style={{
              backgroundColor: "#A10040",
            }}
          >
            {/* Background Layer */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "url('/LandingPage/background.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundBlendMode: "multiply",
                opacity: '15%',
                zIndex: 0,
              }}
            ></div>
            {/* Content */}
            <div className=" relative z-10 text-left pt-[65px] pl-[5%] w-full max-w-[670px] xl:space-y-6">
              <div className="w-full max-w-[500px] flex h-[40%] xl:h-[62px]">
                <h3 className={`font-bold uppercase text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl p-2 ${anton.className}`}>Build</h3>
                <h1 className={`text-base sm:text-lg md:text-xl 2xl:text-3xl font-extrabold my-2 ${sora.className}`}>
                  Website that Drives Growth and Results
                </h1>
              </div>
              <p className={`text-xs sm:text-sm my-4 tracking-widest text-[32px] ${sora1.className}`} style={{ lineHeight: "30.72px" }}>
                5+ Years Of Proven <span className="font-bold">Industry Experience </span> <br />
                150+ Projects Developed And <span className="font-bold">Delivered</span> <br />
                Trusted By <span className="font-bold">100+ Leading</span> Brands Worldwide <br />
                100% Client <span className="font-bold">Satisfaction Guarantee</span> Offered
              </p>
              <a href="tel:+919323170652">
                <button 
                className={`bg-white text-black border py-2 px-4 sm:px-6 text-sm sm:text-base font-bold hover:scale-105 rounded-[106px] border-b-4 border-black tracking-wider transition duration-300 ${fredoka.className}`}
                onClick={scrollToAbout}
                >
                Book a Call
                </button>
               </a>
            </div>

            
            <div className="absolute left-2 bottom-12 lg:bottom-5 xl:bottom-40 2xl:bottom-52 xl:left-auto 2xl:right-[340px]">
              <motion.div className="h-[40px] w-[38px] xl:h-[70px] xl:w-[68px] rounded-full">
                <Image src={cursor} alt="Cursor Icon" className="w-full h-full" />
              </motion.div>
            </div>
            <div className="absolute xl:bottom-1/3 right-1/4 bottom-20 lg:bottom-28 xl:right-32">
              <motion.div className="h-[52px] w-[69px] xl:h-[72px] xl:w-[89px]  2xl:w-[99px] 2xl:h-[96px] rounded-full">
                <Image src={arrow} alt="Layer Icon" className="w-full h-full" />
              </motion.div>
            </div>
            <div className="absolute bottom-0 right-0">
              <motion.div className="w-full md:w-[250px] lg:w-[233px] xl:w-[455px] 2xl:w-[555px]  pl-4 md:pl-16">
                <Image src={layer} alt="Yellow Decoration" className="w-full" />
              </motion.div>
            </div>
          </motion.div>

          {/* Middle Column */}
          <motion.div
            className="relative flex flex-col justify-between items-center text-black"
            onMouseEnter={() => setHoveredSection("middle")}
            animate={{
              width: hoveredSection === "middle" ? "45%" : "27.5%",
              transition: { duration: 0.5 },
            }}
            style={{
              backgroundColor: "#FFB700", // Background color stays on the parent
            }}
          >
            {/* Background Layer */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "url('/LandingPage/background.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundBlendMode: "multiply",
                opacity: '15%', 
                zIndex: 0, 
              }}
            ></div>
            {/* Content */}
            <div className="relative z-10 items-center text-left pt-[65px]  md:pl-[15%] lg:pl-[20%] 2xl:pl-[25%] w-full 2xl:space-y-3">
              <h3 className={`text-xs sm:text-sm font-bold tracking-wider uppercase text-white 2xl:text-2xl ${fredoka.className}`}>Bring Ideas Into a</h3>
              <h1 className={`text-xl sm:text-2xl md:text-3xl text-[#572D29] 2xl:text-5xl font-extrabold uppercase my-2 ${anton.className}`}>
                Top Website
              </h1>
              <div style={{ lineHeight: "30.72px" }}>
                <p className={`${sora1.className}`}>Unique Designs That Stand Out</p>
                <p className={`${sora1.className}`}>Ready to Scale with Your Business</p>
              </div>
              <button className={`bg-white text-black border py-2 px-4 tracking-wider sm:px-6 text-sm sm:text-base font-bold hover:scale-105 rounded-[106px] border-b-4 border-black transition duration-300 ${fredoka.className}`}  onClick={scrollToAbout}>
                Hire Now
              </button>
            </div>

            {/* Image */}
            <Image
              src={think}
              alt="Illustration"
              className="mt-6 pl-16 xl:w-[790px] h-[700px] md:max-w-[550px] lg:max-w-[600px] xl:max-w-[850px] object-contain"

            />
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="relative flex flex-col justify-between items-center text-white"
            onMouseEnter={() => setHoveredSection("right")}
            animate={{
              width: hoveredSection === "right" ? "45%" : "27.5%",
              transition: { duration: 0.5 },
            }}
            style={{
              backgroundColor: "#0B314E", 
            }}
          >
            {/* Background Layer */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "url('/LandingPage/background.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundBlendMode: "multiply",
                opacity: "15%", 
                zIndex: 0, 
              }}
            ></div>
            {/* Content */}
            <div className="relative z-10 text-left pt-[65px] md:pl-[15%] lg:pl-[20%] 2xl:pl-[25%] w-full 2xl:space-y-3">
              <h3 className={`text-xs sm:text-sm font-bold tracking-wider 2xl:text-2xl uppercase ${fredoka.className}`}>Stand Out With</h3>
              <h1 className={`text-xl sm:text-2xl md:text-3xl font-extrabold 2xl:text-5xl uppercase my-2 ${anton.className} `}>
                Unique Design!
              </h1>
              <div style={{ lineHeight: "30.72px" }}>
                <p className={`${sora1.className} `}>Ready to Elevate Your Business?</p>
                <p className={`${sora1.className}`}>Transform Your Ideas into Reality</p>
              </div>
              <button className={`bg-white text-black border py-2 px-4 tracking-wider sm:px-6 text-sm sm:text-base font-bold hover:scale-105 rounded-[106px] border-b-4 border-black transition duration-300 ${fredoka.className}`}  onClick={scrollToAbout}>
                Hire Now
              </button>
            </div>

            {/* Image */}
            <Image
              src={blub}
              alt="Illustration"
              className=" mt-6 2xl:max-w-[600px] md:max-w-[300px] lg:max-w-[400px] md:w-[650px] xl:w-[590px] 2xl:w-[590px] h-auto object-contain"

            />
          </motion.div>
        </div>



      )}
    </div>
  );
};

export default HeroSection;

