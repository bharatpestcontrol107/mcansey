'use client'
import Image from "next/image";
import React, { useState, useEffect } from "react";

interface ClientData {
  id: number;
  image: string;
}

const clientsData: ClientData[] = [
  { id: 1, image: "/logos/jindal-steel.png" },
  { id: 2, image: "/logos/c1-india.png" },
  { id: 3, image: "/logos/rsm.png" },
  { id: 4, image: "/logos/discovery-land.png" },
  { id: 5, image: "/logos/dancewala-studio.png" },
  { id: 6, image: "/logos/ehesas.png" },
  { id: 7, image: "/logos/expert-buddy.png" },
  { id: 8, image: "/logos/ezzy.png" },
  { id: 9, image: "/logos/flexi-world.png" },
  { id: 10, image: "/logos/mr-furniture.png" },
  { id: 11, image: "/logos/grande-arte.png" },
  { id: 12, image: "/logos/i2v.png" },
  { id: 13, image: "/logos/insaano-health.png" },
  { id: 14, image: "/logos/intech-logo.png" },
  { id: 15, image: "/logos/jindal-arogya.png" },
  { id: 16, image: "/logos/kazuki-official.png" },
  { id: 17, image: "/logos/lords-logo.png" },
  { id: 18, image: "/logos/milestone.png" },
  { id: 19, image: "/logos/Nesto-Hub.png" },
  { id: 20, image: "/logos/peptone-logo.png" },
  { id: 21, image: "/logos/plumber-babu.png" },
  { id: 22, image: "/logos/pplacd.png" },
  { id: 23, image: "/logos/rg-consultancy.png" },
  { id: 24, image: "/logos/ripik-ai.png" },
  { id: 25, image: "/logos/simran.png" },
  { id: 26, image: "/logos/toir.png" },
  { id: 27, image: "/logos/wonderland.png" },
  { id: 28, image: "/logos/xposure.png" },
  { id: 29, image: "/logos/carritos.png" },
  { id: 30, image: "/logos/coal-giene.png" },
  { id: 31, image: "/logos/greenupmyspaces.png" },
  { id: 32, image: "/logos/sanjh.png" },
  { id: 33, image: "/logos/payments-pro.png" },
  { id: 34, image: "/logos/vivo.png" },
  { id: 35, image: "/logos/incoin.png" },
  { id: 36, image: "/logos/itdi.png" },
];

const BrandLogos: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth >= 320 && window.innerWidth <= 475);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const visibleLogos = isMobile && !showAll ? clientsData.slice(0, 8) : clientsData;

  return (
    <div className="container-ack md:px-3 xl:px-0 px-5 md:pt-0 pt-6 md:w-[85%] mx-auto ">
      <div className="md:grid md:grid-cols-1 items-center md:pt-12">
        <div className="flex flex-col items-center md:items-start">
          <div className="text-xl lg:text-2xl   relative z-10 md:bottom-[34px] md:text-left text-center font-bold max-w-xl">
            Customer Delight
          </div>
          <div className="load-wrapp relative bottom-[44px] md:ml-0">
            <div className="load">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
        </div>
        <p className="pt-1 text-sm md:text-base text-textcolor text-left md:text-left mt-4 md:mt-0 ">
          Our commitment to excellence is reflected in the diverse range of clients we are proud to serve. From startups to global enterprises, each client represents a valued partnership built on trust, innovation, and a shared drive for success. We are honored to collaborate with industry leaders across various sectors, working hand-in-hand to create impactful solutions that propel their digital journeys. Each client’s success story inspires us to continually raise the bar, ensuring we deliver value, expertise, and meaningful results with every project.
        </p>
      </div>

      <div className="md:pb-16">
        <ul className="clients-grid grid-6 nobottommargin clearfix">
          {visibleLogos.map((item) => (
            <li key={item.id} className="clientzoom">
              <Image
                src={item.image}
                width={150}
                height={100}
                alt="Client Logo"
                className="rounded-lg w-[50%] md:w-[70%] mx-auto zoom-client"
              />
            </li>
          ))}
        </ul>
        {isMobile && !showAll && (
          <div className="text-center mt-4">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-500 transition text-[13px] md:text-[15px]"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandLogos;
