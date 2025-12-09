import React from "react";
import Image from "next/image";

const people = [
  { id: 1, name: "", image: "/Leadership/mcansey-team-1 (1).png", description: '"Permanent member of the overtime gang!"' },
  { id: 2, name: "Anurag Gupta", image: "/Leadership/mcansey-team-6 (1).png", description: '"Deadlines and I are in a complicated relationship."' },
  { id: 3, name: "Mohit Pandey", image: "/Leadership/mcansey-team-15.png", description: "Her answer to every question, 'Yes Boss'!" },
  // Other team members...
];

const backSideIndices = new Set([0, 13, 16, 23, 24]);

const TeamGalleries: React.FC = () => {
  return (
    <>
      <h2 className="text-xl xl:text-3xl font-bold text-center mb-6 text-gray-800">Our Team</h2>
      <div className="grid gap-6 p-4 md:p-8 mx-auto grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:max-w-7xl">
        {people.map((person, index) => {
          const showBackside = backSideIndices.has(index);
          return (
            <div key={person.id} className="relative group w-full h-48 sm:h-64 md:w-56 md:h-60 overflow-hidden">
              <div
                className={`absolute inset-0 transition-transform duration-[1300ms] ease-in-out [transform-style:preserve-3d] ${
                  showBackside ? "rotate-y-180" : "group-hover:[transform:rotateY(180deg)]"
                }`}
              >
                {/* Front Side */}
                <Image
                  src={person.image}
                  alt={person.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg border border-[#000000]"
                />
              </div>
              {/* Back Side */}
              <div
                className={`absolute inset-0 flex flex-col justify-between items-center bg-[#185FFC] bg-cover bg-center text-white p-4 sm:p-6 rounded-lg shadow-lg ${
                  showBackside ? "opacity-100 rotate-y-0" : "rotate-y-180 opacity-0 group-hover:opacity-100"
                } transition-opacity duration-[2000ms] ease-in-out`}
                style={{
                  backgroundImage: `url('/path/to/background-image.png')`, // Replace with your actual background image path
                }}
              >
                <p className="text-center text-sm sm:text-base font-medium tracking-wide mb-2 sm:mb-4 italic">
                  {person.description}
                </p>
                <Image
                  src="/path/to/downward-arrow.png" // Replace with your actual arrow image path
                  alt="Downward Arrow"
                  width={24}
                  height={24}
                  className="mb-2"
                />
                <h3 className="text-base sm:text-lg font-semibold tracking-wide mt-auto capitalize">
                  {person.name}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TeamGalleries;
