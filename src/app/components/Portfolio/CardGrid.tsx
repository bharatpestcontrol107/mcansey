import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Card {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

interface CardGridProps {
  cards: Card[];
}

const CardGrid: React.FC<CardGridProps> = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 px-4 p-4">
      {cards.map((card) => (
        <div
          key={card.id}
          className="bg-white shadow-md overflow-hidden hover:scale-105 transition-all delay-200 scroll-smooth relative group"
        > <Link href={card.link}>
          <div className="relative w-full">
            <Image
              src={card.imageUrl}
              alt={card.title}
              height={390}
              width={396}
              className="w-full h-full object-contain  transition-opacity group-hover:opacity-70"
            />

            <div className="absolute inset-0  opacity-0 group-hover:opacity-40 transition-opacity"></div>
          </div>

         
            <div className="p-4 relative z-10">

              <div className="absolute inset-0  opacity-0 group-hover:opacity-40 transition-opacity"></div>
              <h3 className="text-sm lg:text-lg font-semibold group-hover:text-black transition-colors">
                {card.title}
              </h3>

              <p className="text-gray-600 text-xs lg:text-sm group-hover:text-black transition-colors">
                {card.description}
              </p>
            </div></Link>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
