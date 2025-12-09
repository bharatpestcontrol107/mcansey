'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import { Fredoka } from "next/font/google";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import Image from "next/image";
import  icon from '../../../../public/landing-page/Clip path group.png'
import Link from "next/link";
const fredoka = Fredoka({ weight: '400', subsets: ['latin'] });

const ShopifyNavbar = () => {
  const [active, setActive] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Why Choose Us", href: "#features" },
    { name: "Process", href: "#ourprocess" },
    { name: "Projects", href: "#projects" },
    { name: "Contact Us", href: "#contact-us" },
  ];

  return (
    <>
      {/* Announcement Bar */}
      <div className="h-10 w-full bg-[#000000] text-white overflow-hidden relative">
        <div className="absolute w-full h-full flex items-center justify-center whitespace-nowrap animate-scroll-navbar-shopify">
          <p className="mx-4">Over 550+ five-star reviews</p>
          <Image
            src={icon}
            alt="icon"
            width={20}
            height={20}
            className="mx-2"
          />
          
        </div>
      </div>

      {/* Navbar */}
      <nav className="w-full bg-[#FFFFFF] h-[60px] md:h-24">
        <div className="container px-3 md:px-4 mx-auto lg:max-w-[95%] xl:max-w-[80%] h-full flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-[#00785A]">Mcansey</div>

          {/* Hamburger Icon for Mobile */}
          <div className="lg:hidden text-3xl text-[#572D29] cursor-pointer" onClick={() => setIsMenuOpen(true)}>
            <HiOutlineMenuAlt3 />
          </div>

          {/* Nav Items for Larger Screens */}
          <div className="hidden lg:flex mx-auto items-center gap-8">
            {navLinks.map((item) => (
              <motion.div
                key={item.name}
                className={`relative group hover: rounded-3xl px-2`}
                onClick={() => setActive(item.name)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  href={item.href}
                  className={`cursor-pointer text-lg ${active === item.name ? "text-black" : "text-gray-600"}`}
                >
                  {item.name}
                </Link>
                {active === item.name && (
                  <motion.div
                    className="absolute left-0 top-full mt-1 w-full h-1 bg-[#FF0000] rounded-full"
                    layoutId="underline"
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Button for Larger Screens */}
          <motion.button
            whileHover={{
              scale: 1.1,
              rotate: [0, -2, 2, -2, 2, 0],
              transition: { duration: 0.4 },
            }}
            className={`hidden lg:block bg-[#00785A] text-white font-normal py-2 px-8 text-[20px] shadow-lg flex items-center gap-2 xl:h-[48px] xl:w-[173px] relative overflow-hidden rounded-[106px] border-b-4 border-black transition duration-300 ${fredoka.className}`}
            onClick={() => window.location.href = 'tel:+91 9323170652'}>
            <span>Book a Call</span>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-[#FFF8ED] z-50 flex flex-col items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Close Icon */}
          <div className="absolute top-6 right-6 text-3xl text-[#572D29] cursor-pointer" onClick={() => setIsMenuOpen(false)}>
            <HiOutlineX />
          </div>

          {/* Nav Items for Mobile */}
          <div className="flex flex-col items-center gap-8">
            {navLinks.map((item) => (
              <motion.div
                key={item.name}
                className={`relative group hover:bg-[#F7C948] rounded-3xl px-4 py-2`}
                onClick={() => {
                  setActive(item.name);
                  setIsMenuOpen(false);
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  href={item.href}
                  className={`cursor-pointer text-lg ${active === item.name ? "text-black" : "text-gray-600"}`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ShopifyNavbar;
