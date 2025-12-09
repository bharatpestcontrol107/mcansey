'use client';
import Link from 'next/link';
import Navbar from '../Navbar';
import { FaArrowRight } from 'react-icons/fa';

interface HomeCloudProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  videoSrc?: string;
  backgroundImage?: string;
  mobileBackgroundImage?: string;  
  buttonText?: string;
  buttonLink?: string;
}

export default function AllHome({
  title,
  subtitle,
  videoSrc,
  backgroundImage,
  mobileBackgroundImage,  
  buttonText = "Consult Our Experts",
  buttonLink = "/contact-us",
}: HomeCloudProps) {
  return (
    <div className="relative">
      <Navbar />
      <header className="relative h-[70vh] md:h-[80vh]">
        {videoSrc ? (
          <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          <>
            {/* Mobile-specific background image */}
            {mobileBackgroundImage && (
              <div
                className="absolute top-0 left-0 w-full h-full block md:hidden"
                style={{
                  backgroundImage: `url(${mobileBackgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            )}

            {/* Large screen background image */}
            {backgroundImage && (
              <div
                className="absolute top-0 left-0 w-full h-full hidden md:block"
                style={{
                  backgroundImage: `url(${backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            )}
          </>
        )}

        <div className="relative z-20 flex items-center justify-start h-full md:w-[90vw] mx-auto px-4 sm:px-8">
          <div className="text-white lg:w-1/1">
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4 text-left " style={{lineHeight: '1.2'}}>
              {title}
            </h1>
            <p className="text-sm sm:text-md md:text-lg mb-6 text-left lg:w-[60%] sm:block">
              {subtitle}
            </p>
            <Link
              href={buttonLink}
              className="bg-blue-600 text-white px-4 py-2 text-xs lg:text-sm rounded-lg inline-flex items-center"
            >
              {buttonText} <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
