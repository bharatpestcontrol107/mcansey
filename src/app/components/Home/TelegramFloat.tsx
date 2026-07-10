import React, { FC } from "react";
import { IoCallOutline } from "react-icons/io5";
import Link from "next/link";

const TelegramFloat: FC = () => {
  return (
    <>
   <div className="fixed bottom-10 left-10 flex flex-col space-y-4">
      
      <Link
        href="tel:+919323170652"
        className="bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-400 transition duration-300"
      >
        <IoCallOutline className="text-3xl" />
      </Link>
    </div>


    
    </>
  );
};

export default TelegramFloat;
