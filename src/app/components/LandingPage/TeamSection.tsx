// components/TeamSection.tsx
import { Hanken_Grotesk } from 'next/font/google';
import Image from 'next/image';
import team from '../../../../public/Culture/mcansey-group.webp'
import sr1 from '../../../../public/Leadership/senior/mcansey-sr-2.png'
import sr2 from '../../../../public/Leadership/senior/mcansey-sr-1.png'
import sr3 from '../../../../public/Leadership/senior/mcansey-111.png'
import sr4 from '../../../../public/Leadership/senior/mcansey-sr-team-7.png'
import cube from '../../../../public/LandingPage/cube.webp'

const teamData = [
  { name: "Viveka Mandal", designation: "Founder & CEO", img: "/Leadership/senior/mcansey-sr-2.png" },
  { name: "Viveka Mandal", designation: "Co-Founder & CEO", img: sr1 },
  { name: "Deven", designation: "Founder & CMO", img: "/images/person3.png" },
  { name: "Ramakant Kumawat", designation: "Founder & CEO", img: sr2 },
  { name: "Ramakant Kumawat", designation: "Sales Director", img: "/Leadership/senior/mcansey-sr-11.png" },
  { name: "Viveka Mandal", designation: "Founder & CEO", img: sr3 },
  { name: "Suresh Nair", designation: "CTO (Chief Technology Officer)", img: "/images/person3.png" },
  { name: "Viveka Mandal", designation: "Founder & COO", img:sr4 },
];

const pop = Hanken_Grotesk({
    weight: '700',
    subsets: ['latin'],
    display: 'swap',
})

const pops = Hanken_Grotesk({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})
const TeamSection = () => {
  return (
    <section className="w-full bg-[#FFFCF1] py-24 overflow-x-hidden" id="team">
        <div
    className="absolute inset-0"
    style={{
      backgroundImage: 'url("/LandingPage/background.png")',
      opacity: 0.15,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundBlendMode: "multiply",
      
      zIndex: -1,
    }}
  ></div>
    <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between px-4 sm:px-8">
      {/* Left Section */}
      <div className="lg:w-1/2 space-y-4 text-center md:text-left">
        <button className="text-red-600 bg-white border border-black px-6 py-1 rounded-lg text-sm">
          Our Team
        </button>
        <h1
          className={`text-2xl md:text-4xl font-bold text-[#572D29] tracking-widest`}
          style={{ fontFamily: "Clash Grotesk", fontWeight: "600" }}
        >
          Meet the Experts <br className='hidden lg:flex' /> Behind our Success
        </h1>
      </div>
      {/* Right Section */}
      <div className="lg:w-1/3 mt-6 lg:mt-0 items-center">
        <p
          className={`text-gray-600 text-center md:text-left text-lg`}
          style={{ fontFamily: "Clash Grotesk", fontWeight: "400" }}
        >
          At the heart of our success is a passionate and talented team of professionals
          dedicated to bringing your vision to life.
        </p>
      </div>
    </div>
  
    {/* Full-Width Image */}
    <div className="mt-12  max-w-7xl mx-auto">
      <Image
        src={team}
        alt="Team Banner"
        className="w-full h-auto p-3 rounded-3xl"
      />
    </div>
  
    {/* Grid Section */}
    <div className="relative">
      {/* Cube Image */}
      <div className="absolute hidden lg:block top-1/1 right-0 transform -translate-y-1/4 translate-x-1/4">
        <Image src={cube} alt="Cube" width={80} height={80} className='w-10 lg:w-20 lg:h-20' />
      </div>
  
      <div className="grid mt-12 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 sm:px-8">
        {teamData.map((member, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center ${
              index % 2 === 0
                ? "bg-gray-100 hover:scale-105 border-b-4 translate-x-0 transition-all"
                : "bg-red-100 border-b-4"
            } p-4 rounded-lg`}
          >
            {index % 2 === 0 ? (
              <>
                <p
                  className={`text-center font-bold tracking-wider text-gray-800`}
                  style={{ fontFamily: "Clash Grotesk", fontWeight: "700" }}
                >
                  {member.name}
                </p>
                <p
                  className={`text-center text-gray-600 tracking-wide text-sm`}
                  style={{ fontFamily: "Clash Grotesk", fontWeight: "400" }}
                >
                  {member.designation}
                </p>
              </>
            ) : (
              <Image
                src={member.img}
                alt={member.name}
                width={150}
                height={150}
                className="rounded-full"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
  
  
  );
};

export default TeamSection;
