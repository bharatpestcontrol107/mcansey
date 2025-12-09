import React, { FC } from "react";
import {  FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const WhatsAppFloat: FC = () => {
  return (
    <>
    <div className="fixed animate-in bottom-10 right-10 flex flex-col space-y-4">
      {/* WhatsApp Button */}
      <Link
        href="https://wa.me/+919323170652"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-green-400 transition duration-300"
      >
        <FaWhatsapp className="text-3xl" />
      </Link>
    </div>
    </>
  );
};

export default WhatsAppFloat;
