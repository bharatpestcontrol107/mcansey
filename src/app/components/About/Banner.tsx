import React from 'react';

const Banner: React.FC = () => {
  return (
    <>
      <div className="pt-[70px] flex flex-col items-center h-auto max-w-7xl rounded-lg overflow-hidden mt-3 mx-auto py-2">
        <h1 className="text-lg sm:text-xl xl:text-5xl font-bold text-center mb-2 xl:p-5 pt-3 py-3">
          People-centric Culture Driven by Innovation, Learning, & Result-orientation
        </h1>
        
        <div className="w-full sm:w-[90%] h-auto aspect-video rounded-xl px-2 md:px-0">
          <video
            className="w-full h-full object-cover rounded-xl"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/About/Video/mcansey-about-us-page-video.mp4" type="video/mp4"  />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="text-center mt-4 max-w-7xl mx-auto text-black space-y-4 p-3">
        <p className="text-left text-sm xl:text-lg lg:text-center">
          At MCANSEY, we embrace the belief that "Possibility is a Mindset." This drives us to cultivate a workplace culture centered around passion, innovation, continuous learning, and a results-driven approach. We prioritize employee experience, fostering skill development, personal growth, and a healthy work-life balance.
        </p>
      </div>
    </>
  );
};

export default Banner;
