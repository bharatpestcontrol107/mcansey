import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NotFoundPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-6 bg-gray-100 text-gray-800 p-4">
      <div className="relative w-72 h-72">
        <Image
          src="/Home/mcansey-404-notFound.jpg" 
          alt="404 Not Found"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <h1 className="text-5xl font-bold">404 - Page Not Found</h1>
      <p className="text-lg text-center">Oops! The page you're looking for does not exist. It might have been moved or deleted.</p>
      <Link href="/" passHref>
        <button className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;


