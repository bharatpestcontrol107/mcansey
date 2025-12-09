import React, { FC } from "react";
import { FaTelegram, } from "react-icons/fa";
import Link from "next/link";

const TelegramFloat: FC = () => {
  return (
    <>
   <div className="fixed bottom-10 left-10 flex flex-col space-y-4">
      
      {/* Telegram Button */}
      <Link
        href="https://t.me/mcansey"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-400 transition duration-300"
      >
        <FaTelegram className="text-3xl" />
      </Link>
    </div>


    
    </>
  );
};

export default TelegramFloat;
