'use client';
import Link from 'next/link';
import Navbar from '../USNavbar';
import { FaArrowRight } from 'react-icons/fa';

interface HomeCloudProps {
  title: string;
  subtitle: string;
  videoSrc: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function AllHome({
  title,
  subtitle,
  videoSrc,
  buttonText = "Consult Our Experts",
  buttonLink = "/contact-us",
}: HomeCloudProps) {
  return (
    <div className="relative">
      <Navbar />
      <header className="relative h-[70vh] md:h-[80vh]">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

        <div className="relative z-20 flex items-center justify-start h-full md:w-[90vw] mx-auto px-4 sm:px-8">
          <div className="text-white lg:w-1/1">
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4 text-left">
              {title}
            </h1>
            <p className="text-sm sm:text-md md:text-lg mb-6 text-left lg:w-[60%]">
              {subtitle}
            </p>
            <Link
              href={buttonLink}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg inline-flex items-center"
            >
              {buttonText} <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
