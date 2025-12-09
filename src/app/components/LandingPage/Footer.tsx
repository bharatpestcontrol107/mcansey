import { Hanken_Grotesk, Open_Sans, Sora } from "next/font/google";
import Link from "next/link";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

import CallFloat from "../Home/CallFloat";
import WhatsAppFloat from "../ShopifyPage/WhatsAppFloat";

const OpenSans = Open_Sans({
    weight: '500',
    subsets: ['latin'],
    display: 'swap',
})
const sora = Sora({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
})


export default function Footer() {
    return (
      <footer className="bg-[#0B314E] pt-[20%] -mt-[15%] md:pt-[10%] md:-mt-[7%]">
      <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-12">
          {/* Left Section */}
          <div className="lg:col-span-4">
            <div className="mb-4">
              <h2 className={`text-2xl font-bold text-white  ${sora.className}`} >Mcansey</h2>
              <p className={`text-white  ${sora.className}`}>(Earlier known as Bizzeonline)</p>
            </div>
            <p className={`text-sm text-gray-300 ${OpenSans.className}`}>
            MCANSEY IT Services & Consulting Pvt Ltd delivers innovative website design solutions, blending creativity with functionality to elevate your online presence. Let's build your digital success together.

            </p>
          </div>
  
          {/* Right Section (Explore, Important Pages & Connect) */}
          <div className="flex flex-col gap-8 lg:col-span-8 lg:flex-row lg:gap-16">
            {/* Explore Section */}
            <div className="w-full lg:w-48 tracking-wider" style={{ fontFamily: "Clash Grotesk", fontWeight: "400" }}>
              <h3 className={`mb-6 text-sm font-semibold uppercase text-white `} style={{ fontFamily: "Clash Grotesk", fontWeight: "700" }}>Explore</h3>
              <ul className={`space-y-4 text-sm`} style={{ fontFamily: "Clash Grotesk", fontWeight: "400" }}>
                <li>
                  <Link href="#portfolio" className="text-gray-300 hover:text-white">
                    Our Projects
                  </Link>
                </li>
                <li>
                  <Link href="#why-choose-us" className="text-gray-300 hover:text-white">
                    Why Mcansey
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-gray-300 hover:text-white">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="text-gray-300 hover:text-white">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
  
            {/* Important Pages Section */}
            <div className="w-full lg:w-48 tracking-wider"  style={{ fontFamily: "Clash Grotesk", fontWeight: "400" }}>
              <h3 className={`mb-6 text-sm  uppercase text-white `} style={{ fontFamily: "Clash Grotesk", fontWeight: "700" }}>Important Pages</h3>
              <ul className={`space-y-4 text-sm `}>
                <li>
                  <Link href="/product-ideation-and-conceptulization" className="text-gray-300 hover:text-white">
                  Product Ideation & Conceptualization
                  </Link>
                </li>
                <li>
                  <Link href="/website-design-company" className="text-gray-300 hover:text-white">
                  Website Design & Development
                  </Link>
                </li>
                <li>
                  <Link href="/mobile-app-development-company" className="text-gray-300 hover:text-white">
                  Mobile App Development
                  </Link>
                </li>
                <li>
                  <Link href="/software-development-company" className="text-gray-300 hover:text-white">
                  Software Development
                  </Link>
                </li>
                <li>
                  <Link href="/cloud-application-development" className="text-gray-300 hover:text-white">
                  Cloud Managed Services
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect Section */}
            <div className="w-full lg:w-auto lg:flex-grow text-gray-300 tracking-wider" style={{ fontFamily: "Clash Grotesk", fontWeight: "400" }}>
              <h3 className={`mb-6 text-sm font-semibold uppercase text-white `}  style={{ fontFamily: "Clash Grotesk", fontWeight: "700" }}>Connect</h3>
              <ul className="space-y-6 " style={{ fontFamily: "Clash Grotesk", fontWeight: "400" }}>
                {/* Sales Enquiry */}
                <li>
                  <h4 className="text-sm font-semibold mb-2">Sales Enquiry</h4>
                  <div className="flex items-start space-x-2 text-sm">
                    <FaPhoneAlt className="text-base mt-1" />
                    <p>
                      <a href="tel:+919323170652" className="hover:text-white">+91 9323170652</a><br />
                      <a href="tel:+919324442227" className="hover:text-white">+91 9324442227</a>
                    </p>
                  </div>
                </li>

                {/* HR Enquiry */}
                <li>
                  <h4 className="text-sm font-semibold mb-2">HR Enquiry</h4>
                  <div className="flex items-start space-x-2 text-sm">
                    <FaPhoneAlt className="text-base mt-1" />
                    <p><a href="tel:+919082722403" className="hover:text-white">+91 9082722403</a></p>
                  </div>
                  <div className="border-b border-gray-600 mt-2 w-full"></div>
                </li>

                {/* Email */}
                <li>
                  <h4 className="text-sm font-semibold mb-2">Email</h4>
                  <div className="flex items-start space-x-2 text-sm">
                    <FaEnvelope className="text-base mt-1" />
                    <Link
                      href="mailto:info@mcaney.com"
                      className="hover:underline hover:text-white"
                    >
                      info@mcaney.com
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
  
        {/* Bottom Section with Copyright */}
        <div className="mt-12 border-t border-gray-600 pt-8">
          <p className={`text-sm text-gray-300 ${OpenSans.className}`}>© Mcansey 2025. All rights reserved.</p>
        </div>
        <WhatsAppFloat/>
        <CallFloat/>
      </div>
    </footer>
    );
  }
  
  
  