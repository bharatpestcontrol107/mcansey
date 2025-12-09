'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../../../public/Home/Mcanseylogowhite.png';
import logoScrollDown from '../../../../public/Home/mcanseydarklogo.png';
import AboutModal from './modals/Modal';
import ServicesModal from './modals/ServicesModal';
import IndustriesModal from './modals/IndustriesModal';
import PortfolioModal from './modals/PortfolioModal';
import { usePathname } from 'next/navigation';
import { links } from './common/Navbar/LinkData';
import { IoCallOutline } from 'react-icons/io5';

const modalComponents: { [key: string]: React.FC } = {
  about: AboutModal,
  services: ServicesModal,
  industries: IndustriesModal,
  portfolio: PortfolioModal,
};



const USNavbar: React.FC = () => {
  const pathname = usePathname();
  const [bgColor, setBgColor] = useState<string>('');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [logoState, setLogoState] = useState(logo);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);



  const handleMouseEnter = (modal: string) => {
    if (timeoutId) clearTimeout(timeoutId);
    setActiveModal(modal);
  };

  const handleMouseLeave = () => {
    const newTimeoutId = setTimeout(() => {
      setActiveModal(null);
    }, 100);
    setTimeoutId(newTimeoutId);
  };

  const handleModalMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
  };

  const handleModalMouseLeave = () => {
    const newTimeoutId = setTimeout(() => {
      setActiveModal(null);
    }, 100);
    setTimeoutId(newTimeoutId);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const updateBgColor = () => {

      const pathsWithBg = [
        '/portfolio/',
        '/resources/',
        '/about/',
        '/services/',
        '/leadership/',
        '/career/',
        '/mcansey-portfolio/',
        '/healthcare-software-development-services/',
        '/software-development-services/',
        '/it-solutions-for-public-sector/',
        '/industrial-and-manufacturing-development-services/',
        '/banking-it-services/',
        '/travel-application-development-services/',
        '/education-software-development-services/',
        '/media-and-entertainment-software-solutions/',
        '/real-estate-software-development-services/',
        '/fintech-software-development/',
        '/not-found/',
        '/culture/',
      ];


      const shouldApplyBg = pathsWithBg.includes(pathname);


      if (
        shouldApplyBg ||
        (pathname !== '/' && pathname !== '/contact-us/' && pathname !== '/website-design-company/' &&
          pathname !== '/product-ideation-and-conceptulization/' && pathname !== '/mobile-app-development-company/' &&
          pathname !== '/software-development-company/' && pathname !== '/data-analytics-company/' &&
          pathname !== '/cyber-security-services/' && pathname !== '/it-consulting-services-company/' &&
          pathname !== '/digital-marketing-company/' && pathname !== '/cloud-application-development/')
      ) {
        setBgColor('bg-gradient-to-l from-blue-900 via-blue-800 to-blue-600 shadow-md');
      } else if (window.scrollY > 80) {
        setBgColor('bg-gradient-to-l from-blue-900 via-blue-800 to-blue-600 shadow-md');
        setIsScrolled(true);
        setLogoState(logoScrollDown);
      } else {
        setBgColor('bg-transparent');
        setIsScrolled(false);
        setLogoState(logo);
      }
    };

    updateBgColor();
    window.addEventListener('scroll', updateBgColor);
    return () => {
      window.removeEventListener('scroll', updateBgColor);
    };
  }, [pathname]);



  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const displayedLogo = isMenuOpen ? logo : logoState;
  const toggleDropdown = (linkName: string) => {
    setActiveDropdown(activeDropdown === linkName ? null : linkName);
  };

  const toggleSubDropdown = (subLinkName: string) => {
    setActiveSubDropdown(activeSubDropdown === subLinkName ? null : subLinkName);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${bgColor}`}>
      <div className={`${isScrolled ? '' : 'mx-auto'} xl:w-[90vw]`}>
        <div className="flex justify-between items-center pr-3">
          <div
            className={`relative flex items-center ${isScrolled ? 'bg-white rounded-r-full' : ''}`}
            style={{ transition: 'all 0.3s ease-in-out' }}
          >
            <div className={`p-2 ${isScrolled ? 'bg-white rounded-r-full' : ''}`}>
              <Link href={'/'} prefetch>
                <Image src={logoState} alt="Logo" className="w-[230px] h-[45px]" />
              </Link>
            </div>
          </div>

          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>

          <div className="hidden lg:flex space-x-8 items-center">
            {links.map((link, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(link.modal!)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={link.href}
                  className={`text-white ${link.isButton ? 'bg-[#2150FD] px-4 py-2 rounded-lg whitespace-nowrap' : 'hover:text-white'}`}
                >
                  {link.name}
                </Link>

                {activeModal === link.modal && link.modal in modalComponents && (
                  <div
                    onMouseEnter={handleModalMouseEnter}
                    onMouseLeave={handleModalMouseLeave}
                    className="absolute top-full mb-5 w-64 bg-white shadow-lg rounded-md z-10"
                  >
                    {React.createElement(modalComponents[link.modal])}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-gradient-to-l from-blue-900 via-blue-800 to-blue-600 z-50 p-8 flex flex-col items-center justify-start">
            <div className="w-full flex justify-between items-center mb-4">
              <Link href={'/'} passHref onClick={() => setIsMenuOpen(false)} >
                <Image src={displayedLogo} alt="Logo" className="w-[180px] h-[45px]" />
              </Link>
              <button onClick={toggleMenu} className="text-white">
                <FaTimes className="h-6 w-6" />
              </button>
            </div>

            <ul className="w-full overflow-y-auto text-center space-y-8 px-4 py-2 max-h-[calc(100vh-100px)]">
              {links.map((link, index) => (
                <li key={index} className="flex flex-col items-center space-y-4">
                  <div className="flex justify-between w-full items-center border-b border-gray-200 py-4">
                    <Link href={link.href} className="text-white text-lg">
                      {link.name}
                    </Link>

                    {link.options.length > 0 && (
                      <button
                        className="text-white"
                        onClick={() => toggleDropdown(link.name)}
                      >
                        {activeDropdown === link.name ? '-' : '+'}
                      </button>
                    )}
                  </div>

                  {activeDropdown === link.name && link.options.length > 0 && (
                    <div className="w-full mt-4 space-y-2">
                      {link.options.map((option, idx) => (
                        <div key={idx} className="w-full">
                          <div className="flex justify-between items-center">
                            <Link
                              href={option.href}
                              className="block py-2 px-4 text-white text-left rounded-lg"
                            >
                              {option.name}
                            </Link>

                            {option.subOptions && option.subOptions.length > 0 && (
                              <button
                                className="text-white"
                                onClick={() => toggleSubDropdown(option.name)}
                              >
                                {activeSubDropdown === option.name ? '-' : '+'}
                              </button>
                            )}
                          </div>

                          {activeSubDropdown === option.name && (
                            <div className="ml-8 mt-2 space-y-1">
                              {option.subOptions && option.subOptions.map((subOption, subIdx) => (
                                <div key={subIdx} className="flex justify-between items-center">
                                  <Link
                                    href={subOption.href}
                                    className="block py-2 px-4 text-white text-left rounded-lg"
                                  >
                                    {subOption.name}
                                  </Link>

                                  {subOption.subOptions && (
                                    <button
                                      className="text-white"
                                      onClick={() => toggleSubDropdown(subOption.name)}
                                    >
                                      {activeSubDropdown === subOption.name ? '-' : '+'}
                                    </button>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-center w-full mt-6 bg-blue-700 rounded-lg py-4 px-3 shadow-lg">
              <div className="flex items-center space-x-3">

                <div className="bg-white p-3 rounded-full shadow-md">
                  <IoCallOutline className="text-blue-700 text-lg" />
                </div>

                {/* <div className="text-white">
                  <p className="text-sm font-semibold uppercase">Call Us</p>
                  <a href="tel:+919323170652" className="text-base font-bold">+91 9323170652</a>
                </div> */}
              </div>
            </div>


          </div>
        )}

      </div>
    </nav>
  );
};

export default USNavbar;
