

import React from "react";

const SuccessStory: React.FC = () => {
  return (
    <div className="relative h-[40vh] mt-20  bg-cover bg-center bg-[url('/portfolio/Main-Banner_1-16.webp')]">
      <div className="absolute inset-0  flex items-center max-w-7xl mx-auto">
        <div className=" px-4 md:px-10 lg:px-20">
          <h2 className="text-xl md:text-2xl xl:text-3xl  font-bold text-white mb-4">
            Success Story
          </h2>
          <p className="text-white text-xs md:text-xl lg:text-2  xl mb-6">
            Developing an AI-driven diet management platform for a leading European healthcare provider
          </p>
          <button className="bg-black text-xs md:text-lg text-white font-semibold py-1 px-6 md:py-3 md:px-8 lg:py-4 lg:px-10 rounded hover:bg-yellow-600 transition-colors">
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;
