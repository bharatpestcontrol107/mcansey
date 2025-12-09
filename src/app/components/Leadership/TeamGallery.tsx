import React from 'react';
import Image from 'next/image';

const people = [
    { id: 1, name: '', image: "/Leadership/mcansey-team-1 (1).png", description: '"Permanent member of the overtime gang!"' },
    { id: 2, name: 'Anurag Gupta', image: "/Leadership/mcansey-team-6 (1).png", description: '"Deadlines and I are in a complicated relationship."' },
    { id: 3, name: 'Mohit Pandey', image: "/Leadership/mcansey-team-15.png", description: "Her answer to every question, 'Yes Boss'!" },
    { id: 4, name: 'Sonali Jadhav', image: "/Leadership/mcansey-team-20.png", description: '"Mein tees, mera dimaag bees!"' },
    { id: 5, name: 'Roshani Tribhuvan', image: "/Leadership/mcansey-team-5 (1).png", description: '"8:48 ki last local."' },
    { id: 6, name: 'Sagar Sarohi', image: "/Leadership/mcansey-team-7 (1).png", description: '"Chai pe charcha"' },
    { id: 7, name: 'Rahul Mourya', image: "/Leadership/mcansey-team-8 (1).png", description: "Her answer to every question, 'Yes Boss'!" },
    { id: 8, name: 'Saroj Shelar', image: "/Leadership/mcansey-team-4 (1).png", description: '"Mein tees, mera dimaag bees!"' },
    { id: 9, name: 'Yasmeen Khan', image: "/Leadership/mcansey-team-17.png", description: '"8:48 ki last local."' },
    { id: 10, name: 'Aditya Mishra', image: "/Leadership/mcansey-team-9 (1).png", description: '"Permanent member of the overtime gang!"' },
    { id: 11, name: 'Sneha Pillai ', image: "/Leadership/mcansey-team-10 (1).png", description: '"Permanent member of the overtime gang!"' },
    { id: 12, name: 'Vinesh Gupta', image: "/Leadership/mcansey-team-12.png", description: '"Can fix anything, except my sleep schedule."' },
    { id: 13, name: 'Vikas Sharma', image: "/Leadership/mcansey-team-13.png", description: "The first one in, last one out, and always ready for a challenge." },
    { id: 14, name: 'Priya Singh', image: "/Leadership/mcansey-team-14.png", description: '"Turning complex problems into simple solutions, one day at a time."' },
    { id: 15, name: 'Pratiksha More', image: "/Leadership/mcansey-team-2 (1).png", description: '"The coffee machine’s best friend."' },
    { id: 16, name: 'Sakshi Salvi', image: "/Leadership/mcansey-team-3 (1).png", description: '"Permanent member of the overtime gang!"' },
    { id: 17, name: 'Sneha', image: "/Leadership/mcansey-team-12.png", description: '"Mein tees, mera dimaag bees!"' },
    { id: 18, name: 'Aman Verma', image: "/Leadership/mcansey-team-11.png", description: "The first one in, last one out, and always ready for a challenge." },
    { id: 19, name: 'Suraj Singh', image: "/Leadership/mcansey-team-14.png", description: '"Turning complex problems into simple solutions, one day at a time."' },
    { id: 20, name: 'Manju Gupta', image: "/Leadership/mcansey-team-32.png", description: '"The coffee machine’s best friend."' },
    { id: 21, name: 'Rohan Mehta', image: "/Leadership/mcansey-team-16.png", description: '"The coffee machine’s best friend."' },
    { id: 22, name: 'Anjali Dubey', image: "/Leadership/mcansey-team-1.png", description: '"Permanent member of the overtime gang!"' },
    { id: 23, name: 'Ashish Chavan', image: "/Leadership/mcansey-team-26.png", description: '"Mein tees, mera dimaag bees!"' },
    { id: 24, name: 'Raj Tripathi', image: "/Leadership/mcansey-team-11.png", description: "The first one in, last one out, and always ready for a challenge." },
    { id: 25, name: 'Priya Singh', image: "/Leadership/mcansey-team-28.png", description: '""' },
    { id: 26, name: 'Ashee Lamba', image: "/Leadership/mcansey-team-28.png", description: '""' },
    { id: 27, name: 'Siddhesh Haryan', image: "/Leadership/mcansey-team-30.png", description: '""' },
    { id: 28, name: 'Achal Gupta', image: "/Leadership/mcansey-team-29.png", description: '""' },
    { id: 29, name: 'Rinki Gaud', image: "/Leadership/mcansey-team-31.png", description: '""' },
    { id: 30, name: 'Saroj Shelar', image: "/Leadership/mcansey-team-27.png", description: '""' },
  
];

const backSideIndices = new Set([0, 13,16,23,24,]);

const TeamGallery: React.FC = () => {
    return (
        <>
            <h2 className="text-xl xl:text-3xl font-bold text-center mb-6 text-gray-800">Our Team</h2>
            <div className="grid gap-6 p-4 md:p-8 mx-auto grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:max-w-7xl">
                {people.map((person, index) => {
                    const showBackside = backSideIndices.has(index);
                    return (
                        <div key={person.id} className="relative group w-full h-48 sm:h-64 md:w-56 md:h-64 overflow-hidden">
                            <div
                                className={`absolute inset-0 transition-transform duration-[1300ms] ease-in-out [transform-style:preserve-3d] ${
                                    showBackside ? 'rotate-y-180' : 'group-hover:[transform:rotateY(180deg)]'
                                }`}
                            >
                                <Image
                                    src={person.image}
                                    alt={person.name}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                />
                            </div>
                            <div
                                className={`absolute inset-0 flex flex-col justify-between items-center bg-black text-white p-4 sm:p-6 rounded-lg shadow-lg ${
                                    showBackside ? 'opacity-100 rotate-y-0' : 'rotate-y-180 opacity-0 group-hover:opacity-100'
                                } transition-opacity duration-[2000ms] ease-in-out`}
                            >
                                <p className="text-center text-sm sm:text-base font-medium tracking-wide mb-2 sm:mb-4 italic text-white">
                                    {person.description}
                                </p>
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

export default TeamGallery;
