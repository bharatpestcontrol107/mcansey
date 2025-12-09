'use client';
import Link from 'next/link';
import Navbar from './USNavbar';
import { FaArrowRight } from 'react-icons/fa'; 

export default function Homes() {
  return (
    <div className="relative">
      <Navbar />
      <header className="relative h-[70vh] md:h-[80vh]">
        <video
          autoPlay
          loop
          muted
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ objectFit: 'cover'}} 
        >
          <source src="/Home/Video/newvideo.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

        <div className="relative z-20 flex items-center justify-start h-full md:w-[90vw] mx-auto px-4 sm:px-8">
          <div className="text-white lg:w-1/1">
            <h1 className="text-3xl  md:text-4xl  xl:text-5xl font-bold mb-4 text-left">
            Transforming Business Potential <br />with Innovative Technology
            </h1>
            <p className="text-sm sm:text-md md:text-lg mb-6 text-left lg:w-[60%]" >
            Bring your ideas to life with high-performance software, websites, and applications that deliver exceptional reliability. Our expertise ensures smooth execution and scalable solutions, built to grow with your business needs.

            </p>
            <Link href="/contact-us" passHref className="bg-blue-600 text-white text-xs md:text-sm px-4 py-2 rounded-lg inline-flex items-center">
              Consult Our Experts <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
