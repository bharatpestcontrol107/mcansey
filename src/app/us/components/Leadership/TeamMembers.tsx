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
    name: 'Suresh Nair',
    title: 'Chief Technology Officer',
    location: 'Gurugram',
    description: "Suresh drives MCANSEY’s technological direction with a commitment to innovation and development. His expertise in cloud architecture and digital transformation guides the tech roadmap of the company.",
    imageUrl: '/Leadership/senior/mcansey-sr-team-7.png',
  },
  {
    name: 'Maya Kapoor',
    title: 'Finance Director',
    location: 'Mumbai',
    description: "Maya manages the financial health and strategic investments of MCANSEY. Her analytical expertise and fiscal planning ensure sustainable growth and profitability for the company.",
    imageUrl: '/Leadership/senior/mcansey-sr-team-5.png',
  },
  {
    name: 'Ramakant Kumawat',
    title: 'Director of Business Development',
    location: 'Mumbai',
    description: "Ramakant leads the business development team, leveraging his experience in client relations to drive partnerships and expand MCANSEY’s market presence.",
    imageUrl: '/Leadership/senior/mcansey-sr-11.png',
  },
  {
    name: 'Rajiv Khanna',
    title: 'Marketing Director',
    location: 'Mumbai',
    description: "Rajiv is at the helm of marketing strategies, leading campaigns that enhance the company’s brand visibility and positioning in competitive markets.",
    imageUrl: '/Leadership/senior/mcansey-sr-team-6.png',
  },

  // {
  //   name: 'Neha Gupta',
  //   title: 'HR Director',
  //   location: 'Gurugram',
  //   description: "Neha ensures that MCANSEY’s people-centric culture thrives, focusing on employee engagement, talent acquisition, and professional growth programs.",
  //   imageUrl: '/Leadership/senior/mcansey-sr-team-2.png',
  // },
  // {
  //   name: 'Ananya Roy',
  //   title: 'Product Development Manager',
  //   location: 'Mumbai',
  //   description: "Ananya spearheads the product team, translating client needs into impactful solutions and overseeing the end-to-end development lifecycle.",
  //   imageUrl: '/Leadership/senior/mcansey-sr-team-3.png',
  // },
  // {
  //   name: 'Priya Sharma ',
  //   title: 'Head of Operations',
  //   location: 'Mumbai',
  //   description: "Priya oversees day-to-day operations, ensuring smooth project execution and maintaining high-quality standards across all teams. Her proactive approach keeps the company efficient and client-focused.",
  //   imageUrl: '/Leadership/senior/mcansey-sr-team-1.png',
  // },
  // {
  //   name: 'Swati Reddy',
  //   title: 'Client Success Manager',
  //   location: 'Mumbai',
  //   description: "Swati leads the client success initiatives, ensuring client satisfaction and long-term partnerships. Her strong communication skills and proactive problem-solving drive excellent client experiences and retention.",
  //   imageUrl: '/Leadership/senior/mcansey-sr-team-8.png',
  // },
];

const TeamGrid = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-xl xl:text-3xl font-bold text-center mb-6 text-gray-800">Management Team</h2>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:w-[85%] mx-auto py-3">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-6 text-center border hover:scale-105 transition-transform duration-500 cursor-pointer overflow-hidden"
          >
            <div className="mb-4">
              <Image
                src={member.imageUrl}
                alt={member.name}
                width={180}
                height={180}
                className="rounded-full mx-auto"
              />
            </div>
            <h2 className="text-lg font-bold text-gray-800">{member.name}</h2>
            <p className="text-sm font-semibold text-gray-600">
              {member.title}
            </p>
            <p className="text-gray-600 mt-2 text-sm">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamGrid;
