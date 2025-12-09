import { Poppins } from "next/font/google";
import React from "react";


const pop = Poppins({
    weight: '600',
    subsets: ['latin'],
    display: 'swap',
  })

  const popp = Poppins({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
  })
const DiversitySection: React.FC = () => {
  return (
    <section className="w-full bg-white py-8 mb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="border-t border-[#A7A7A7] pb-[100px] max-w-7xl mx-auto h-2"></div>
        <div className="border border-gray-200 rounded-lg bg-blue-50 p-6 sm:p-8">
          <h2 className={`text-center text-lg sm:text-xl font-semibold text-gray-900 my-6 ${pop.className}`}>
            A Leadership That Embraces Diversity
          </h2>
          <p className={`text-justify md:text-center text-sm sm:text-base text-gray-700 leading-relaxed md:max-w-3xl mx-auto ${popp.className}`}>
            At McAnsey, we recognize that a diverse and inclusive leadership team
            leads to better decision-making and more innovative solutions. Our
            leaders are committed to fostering a culture of respect, inclusivity,
            and equal opportunity for all. We believe that diverse perspectives
            empower us to drive change and create more impactful solutions for
            our clients and communities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DiversitySection;
