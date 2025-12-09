'use client';
import Image from "next/image";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaEnvelope, FaInstagram } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import { IoCallOutline } from "react-icons/io5";

const USFooter: FC = () => {
  const socialLinks = [
    { href: "https://www.facebook.com/mcanseycompany/", icon: FaFacebookF },
    { href: "https://www.instagram.com/mcansey_company/", icon: FaInstagram },
    { href: "https://www.linkedin.com/company/mcansey-it-services/", icon: FaLinkedinIn },
    
  ];

  const sections = [
    {
      title: "Overview",
      items: [
        { name: "Home", href: "/" },
        { name: "About Mcansey", href: "/about" },
        { name: "Leadership", href: "/leadership" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Culture", href: "/culture" },
      ],
    },
    {
      title: "Resources",
      items: [
        { name: "Blog", href: "/resources" },
        { name: "Career", href: "/career" },
        { name: "Internships", href: "/career" },
        { name: "Contact", href: "/contact-us" },
      ],
    },
  ];

  const services = [
    { name: "Product Ideation & Conceptualization", href: "/product-ideation-and-conceptulization" },
    { name: "Website Design & Development", href: "/website-design-company" },
    { name: "Mobile App Development", href: "/mobile-app-development-company" },
    { name: "Software Development", href: "/software-development-company" },
    { name: "DevOps", href: "/contact-us" },
    { name: "Cloud Managed Services", href: "/cloud-application-development" },
    { name: "Digital Marketing", href: "/digital-marketing-company" },
    { name: "Artificial Intelligence", href: "/contact-us" },
    { name: "Generative AI", href: "/contact-us" },
    { name: "Machine Learning", href: "/contact-us" },
    { name: "Computer Vision", href: "/contact-us" },
    { name: "Cloud Services", href: "/cloud-application-development" },
    { name: "IoT", href: "/contact-us" },
    { name: "AR/VR", href: "/contact-us" },
    { name: "Blockchain", href: "/contact-us" },
    { name: "Business Intelligence", href: "/contact-us" },
  ];

  const footerBottomLinks = [
    { name: "SiteMap", href: "/sitemap.xml" },
    { name: "Privacy Policy", href: "#" },
  ];

  const splitIndex = 7;
  const servicesPart1 = services.slice(0, splitIndex);
  const servicesPart2 = services.slice(splitIndex);

  const [email, setEmail] = useState<string>("");

  const handleEmailSubmit = async () => {
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();
      if (response.ok) {
        toast.success('Email sent successfully');
      } else {
        toast.error(result.error || 'Error sending email');
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('An error occurred. Please try again later.');
    }
  };

 

  return (
    <footer className="bg-gray-900 text-white py-8 relative">
      <div className="container mx-auto px-4 xl:w-[85%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 xl:gap-3 2xl:grid-cols-6 gap-6 md:gap-8 lg:gap-12 text-center sm:text-left">
          <div className="sm:col-span-1 lg:col-span-auto">
            <Image
              src="/Home/Mcansey white logo - 1.png"
              alt="logo"
              height={180}
              width={180}
              className="mx-auto sm:mx-0 mb-4 w-44"
            />
            <p className="mb-4 w-full text-sm sm:w-56 lg:w-36 xl:w-48 text-center sm:text-left">
              Full stack mobile (iOS, Android) and web app design and development agency specializing in creating innovative solutions.
            </p>
            <div className="flex justify-center sm:justify-start space-x-4">
              {socialLinks.map(({ href, icon: Icon }, index) => (
                <Link key={index} href={href} target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                  <Icon size={24} />
                </Link>
              ))}
            </div>
          </div>

          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="sm:col-span-1 lg:col-span-auto">
              <h2 className="text-lg font-semibold mb-4">{section.title}</h2>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-center text-sm sm:text-left">
                    <Link href={item.href} className="block hover:underline">{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="sm:col-span-1 lg:col-span-2 md:col-span-3">
            <h2 className="text-lg font-semibold mb-4">Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 lg:gap-x-12">
              {[servicesPart1, servicesPart2].map((part, index) => (
                <ul key={index} className="space-y-2">
                  {part.map((service, idx) => (
                    <li key={idx} className="text-center text-sm sm:text-left">
                      <Link href={service.href} className="block hover:underline">{service.name}</Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          <div className="sm:col-span-1 lg:col-span-auto">
            <h2 className="text-lg font-semibold mb-4">Newsletter</h2>
            <div className="flex flex-col items-center sm:items-start">
              <div className="relative mb-4 w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="bg-gray-800 text-white border border-gray-600 rounded py-2 pl-4 pr-12 focus:outline-none focus:ring focus:ring-blue-500 w-full"
                />
                <button
                  onClick={handleEmailSubmit}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-yellow-500 p-2 rounded-full"
                >
                  <FaEnvelope className="text-white" />
                </button>
              </div>
              <p className="text-sm text-center sm:text-left">
                Sign up for our latest news & articles. We won’t give you spam mails.
              </p>
              {/* <div className="flex items-center space-x-2 mt-2 pt-3">
                <IoCallOutline className="text-white" />
                <a href="tel:+919323170652" className="text-sm font-bold">+91 9323170652</a>
              </div> */}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-4">
          <div className="flex items-center justify-center md:justify-start mb-4 md:mb-0">
            <p className="text-sm">2024-2025 (c) Mcansey. All rights reserved.</p>
          </div>
          <div className="flex justify-center md:justify-end items-center space-x-4">
            {footerBottomLinks.map((item, index) => (
              <Link key={index} href={item.href} className="hover:underline text-sm">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default USFooter;
