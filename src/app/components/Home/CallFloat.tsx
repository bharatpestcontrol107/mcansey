import React, { FC } from "react";
import Link from "next/link";
import { IoCallOutline } from "react-icons/io5";

const CallFloat: FC = () => {
  return (
    <>
   <div className="fixed  bottom-10 left-10 flex flex-col space-y-4">
      
    
      <Link
        href="tel:+919323170652"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 text-white z-50 w-12 h-12 lg:w-16 lg:h-16  rounded-full flex items-center justify-center shadow-lg hover:bg-blue-400 transition duration-300"
      >
        <IoCallOutline  className="text-3xl" />
      </Link>
    </div>


    
    </>
  );
};

export default CallFloat;
