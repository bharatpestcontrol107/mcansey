'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import { Francois_One, Fredoka } from "next/font/google";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import Link from "next/link"; 
const francois = Francois_One({ weight: '400', subsets: ['latin'] });
const fredoka = Fredoka({ weight: '700', subsets: ['latin'] });

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="">
      {/* Announcement Bar */}
      <div className="h-10 w-full bg-[#572D29] text-white text-base flex items-center tracking-widest justify-center overflow-hidden" style={{fontFamily:'Clash Grotesk' , fontWeight:"400"}} >
        <motion.div
          className="whitespace-nowrap"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          <p>Grab Our Exclusive Website Design Packages Today! Tailored solutions starting at unbeatable prices – Contact us now! </p>
        </motion.div>
      </div>

      {/* Navbar */}
      <nav className="w-full bg-[#FFF8ED] px-4 py-3 md:px-10 2xl:px-20 flex items-center justify-between  md:h-24">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#572D29]">Mcansey</div>

        {/* Hamburger Icon */}
        <div className="lg:hidden text-3xl text-[#572D29] cursor-pointer" onClick={() => setIsMenuOpen(true)}>
          <HiOutlineMenuAlt3 />
        </div>

        {/* Nav Items for larger screens */}
        <div className="hidden lg:flex items-center gap-8">
          <motion.div
            key="Home"
            className="relative group"
            onClick={() => setActive("Home")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Dynamic Background Image */}
            <motion.div
              className="absolute -inset-2 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out"
              style={{
                zIndex: -1,
                width: "calc(100% + 20px)",
                height: "calc(100% + 20px)",
                backgroundColor: "#F7C948",
              }}
            >
              <img
                src="/LandingPage/Vector.svg"
                alt="Hover Effect"
                className="w-full h-full object-contain"
              />
            </motion.div>
            {/* Link */}
            <Link href="#home">
              
                <p
                  className={`cursor-pointer text-lg relative z-10 ${francois.className} ${
                    active === "Home" ? "font-bold text-black" : ""
                  }`}
                >
                  Home
                </p>
             
            </Link>
          </motion.div>

          <motion.div
            key="#Why-choose-us"
            className="relative group"
            onClick={() => setActive("Why choose us")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Dynamic Background Image */}
            <motion.div
              className="absolute -inset-2 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out"
              style={{
                zIndex: -1,
                width: "calc(100% + 20px)",
                height: "calc(100% + 20px)",
                backgroundColor: "#F7C948",
              }}
            >
              <img
                src="/LandingPage/Vector.svg"
                alt="Hover Effect"
                className="w-full h-full object-contain"
              />
            </motion.div>
            {/* Link */}
            <Link href="#why-choose-us">
                <p
                  className={`cursor-pointer text-lg relative z-10 ${francois.className} ${
                    active === "Why choose us" ? "font-bold text-black" : ""
                  }`}
                >
                  Why choose us
                </p>
             
            </Link>
          </motion.div>

          <motion.div
            key="#pricing"
            className="relative group"
            onClick={() => setActive("Packages")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Dynamic Background Image */}
            <motion.div
              className="absolute -inset-2 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out"
              style={{
                zIndex: -1,
                width: "calc(100% + 20px)",
                height: "calc(100% + 20px)",
                backgroundColor: "#F7C948",
              }}
            >
              <img
                src="/LandingPage/Vector.svg"
                alt="Hover Effect"
                className="w-full h-full object-contain"
              />
            </motion.div>
            {/* Link */}
            <Link href="#pricing">
                <p
                  className={`cursor-pointer text-lg relative z-10 ${francois.className} ${
                    active === "Packages" ? "font-bold text-black" : ""
                  }`}
                >
                  Packages
                </p>
             
            </Link>
          </motion.div>

          <motion.div
            key="Portfolio"
            className="relative group"
            onClick={() => setActive("Portfolio")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Dynamic Background Image */}
            <motion.div
              className="absolute -inset-2 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out"
              style={{
                zIndex: -1,
                width: "calc(100% + 20px)",
                height: "calc(100% + 20px)",
                backgroundColor: "#F7C948",
              }}
            >
              <img
                src="/LandingPage/Vector.svg"
                alt="Hover Effect"
                className="w-full h-full object-contain"
              />
            </motion.div>
            {/* Link */}
            <Link href="#portfolio">
              
                <p
                  className={`cursor-pointer text-lg relative z-10 ${francois.className} ${
                    active === "Portfolio" ? "font-bold text-black" : ""
                  }`}
                >
                  Portfolio
                </p>
              
            </Link>
          </motion.div>

          <motion.div
            key="Team"
            className="relative group"
            onClick={() => setActive("Team")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Dynamic Background Image */}
            <motion.div
              className="absolute -inset-2 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out"
              style={{
                zIndex: -1,
                width: "calc(100% + 20px)",
                height: "calc(100% + 20px)",
                backgroundColor: "#F7C948",
              }}
            >
              <img
                src="/LandingPage/Vector.svg"
                alt="Hover Effect"
                className="w-full h-full object-contain"
              />
            </motion.div>
            {/* Link */}
            <Link href="#team">
              
                <p
                  className={`cursor-pointer text-lg relative z-10 ${francois.className} ${
                    active === "Team" ? "font-bold text-black" : ""
                  }`}
                >
                  Team
                </p>
              
            </Link>
          </motion.div>

          <motion.div
            key="Contact us"
            className="relative group"
            onClick={() => setActive("Contact us")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Dynamic Background Image */}
            <motion.div
              className="absolute -inset-2 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out"
              style={{
                zIndex: -1,
                width: "calc(100% + 20px)",
                height: "calc(100% + 20px)",
                backgroundColor: "#F7C948",
              }}
            >
              <img
                src="/LandingPage/Vector.svg"
                alt="Hover Effect"
                className="w-full h-full object-contain"
              />
            </motion.div>
            {/* Link */}
            <Link href="#about-us">
              
                <p
                  className={`cursor-pointer text-lg relative z-10 ${francois.className} ${
                    active === "Contact Us" ? "font-bold text-black" : ""
                  }`}
                >
                  Contact Us
                </p>
              
            </Link>
          </motion.div>
        </div>

        {/* Button */}
        <motion.button
          whileHover={{
            scale: 1.1,
            rotate: [0, -2, 2, -2, 2, 0],
            transition: { duration: 0.4 },
          }}
          className={`hidden lg:block bg-[#FFB700] text-black font-extrabold py-2 px-8 text-[22px] text-nowrap shadow-lg flex items-center gap-2 xl:h-[48px] xl:w-[173px] relative overflow-hidden rounded-[106px] border-b-4 border-black transition duration-300 ${fredoka.className}`}
        >
            <a href="tel:+919323170652">
              <span>Book a Call</span>
            </a>
        </motion.button>
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

          {/* Nav Items in Column */}
          <div className="flex flex-col items-center gap-8">
            <motion.div
              key="Home"
              className={`relative group hover:bg-[#F7C948] rounded-3xl px-4 py-2 ${francois.className}`}
              onClick={() => {
                setActive("Home");
                setIsMenuOpen(false);
              }}
            >
              <Link href="#home">
                
                  <p
                    className={`cursor-pointer text-lg ${
                      active === "Home" ? "font-bold text-black" : "text-gray-600"
                    }`}
                  >
                    Home
                  </p>
                
              </Link>
            </motion.div>

            <motion.div
              key="Why choose us"
              className={`relative group hover:bg-[#F7C948] rounded-3xl px-4 py-2 ${francois.className}`}
              onClick={() => {
                setActive("Why choose us");
                setIsMenuOpen(false);
              }}
            >
              <Link href="#why-choose-us">
              
                  <p
                    className={`cursor-pointer text-lg ${
                      active === "Why choose us" ? "font-bold text-black" : "text-gray-600"
                    }`}
                  >
                    Why choose us
                  </p>
               
              </Link>
            </motion.div>

            <motion.div
              key="pricing"
              className={`relative group hover:bg-[#F7C948] rounded-3xl px-4 py-2 ${francois.className}`}
              onClick={() => {
                setActive("Packages");
                setIsMenuOpen(false);
              }}
            >
              <Link href="#pricing">
               
                  <p
                    className={`cursor-pointer text-lg ${
                      active === "Packages" ? "font-bold text-black" : "text-gray-600"
                    }`}
                  >
                    Packages
                  </p>
                
              </Link>
            </motion.div>

            <motion.div
              key="Portfolio"
              className={`relative group hover:bg-[#F7C948] rounded-3xl px-4 py-2 ${francois.className}`}
              onClick={() => {
                setActive("Portfolio");
                setIsMenuOpen(false);
              }}
            >
              <Link href="#portfolio">
               
                  <p
                    className={`cursor-pointer text-lg ${
                      active === "Portfolio" ? "font-bold text-black" : "text-gray-600"
                    }`}
                  >
                    Portfolio
                  </p>
                
              </Link>
            </motion.div>

            <motion.div
              key="Team"
              className={`relative group hover:bg-[#F7C948] rounded-3xl px-4 py-2 ${francois.className}`}
              onClick={() => {
                setActive("Team");
                setIsMenuOpen(false);
              }}
            >
              <Link href="#team">
               
                  <p
                    className={`cursor-pointer text-lg ${
                      active === "Team" ? "font-bold text-black" : "text-gray-600"
                    }`}
                  >
                    Team
                  </p>
                
              </Link>
            </motion.div>

            <motion.div
              key="Contact Us"
              className={`relative group hover:bg-[#F7C948] rounded-3xl px-4 py-2 ${francois.className}`}
              onClick={() => {
                setActive("Contact Us");
                setIsMenuOpen(false);
              }}
            >
              <Link href="#about-us">
               
                  <p
                    className={`cursor-pointer text-lg ${
                      active === "Contact Us" ? "font-bold text-black" : "text-gray-600"
                    }`}
                  >
                    Contact Us
                  </p>
               
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
