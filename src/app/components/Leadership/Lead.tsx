import Image from 'next/image';

interface TeamMember {
  name: string;
  title: string;
  location: string;
  description: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Viveka Mandal',
    title: 'Founder & CEO',
    location: 'Gurugram',
    description: "Viveka brings over a decade of experience in strategic management and business development. His vision has been integral in shaping MCANSEY's long-term strategy and fostering a culture of excellence.",
    imageUrl: '/Leadership/senior/mcansey-sr-2.png',
  },
  
  {
    name: 'Deven',
    title: 'Co- Founder & CMO',
    location: 'Mumbai',
    description: "Deven's extensive experience in global market expansion and operational efficiency ensures MCANSEY stays ahead of the curve. He is known for his dedication to strategic partnerships and high-impact results.",
    imageUrl: '/Leadership/senior/mcansey-sr-1.png',
  },
  {
    name: 'Siddnath Verma',
    title: 'Co-Founder & COO',
    location: 'Mumbai',
    description: "With a strong background in technology and innovation, Siddnath leads MCANSEY with a focus on growth and cutting-edge solutions. Her passion for transformative tech has guided the company to become a leader in the industry.",
    imageUrl: '/Leadership/senior/Siddnath Verma.jpeg',
  },
];

const Lead = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-xl xl:text-3xl font-bold text-center mb-6 text-gray-800">Board Members</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:max-w-5xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
          >
            <div className="w-full">
              <Image
                src={member.imageUrl}
                alt={member.name}
                width={300}
                height={300}
                className={`w-full h-52 ${index === 2 ? 'object-cover' : 'object-contain'}`}
              />
            </div>
            <div className="p-4 flex flex-col items-center text-center">
              <h2 className="text-lg font-bold text-gray-800 mb-2">{member.name}</h2>
              <p className="text-sm font-semibold text-gray-600 mb-2">
                {member.title}
              </p>
              <p className="text-gray-600 text-sm">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lead;
