
import React from 'react';

const SolutionProvided: React.FC = () => {
  const paragraphs = [
    "The development process for the personalized diet management platform began with an extensive product discovery phase. During this stage, we worked closely with the client to understand their vision and the specific needs of their users. Our Discover & Frame Workshop, designed to align user needs with project goals, helped outline the platform’s key features to ensure it catered to individual requirements and offered real-time, AI-driven diet recommendations. This phase also involved the creation of detailed user stories and personas, guiding the development team in building a product that meets the market’s expectations.",
    "Following product discovery, the team moved to the technical architecture and planning phase. The platform’s architecture was built using modern web technologies, ensuring scalability, performance, and security. React.js was selected for the front end because of its component-based architecture, which allowed for a responsive and interactive user experience. The backend was developed using Node.js and Express, chosen for their efficiency in handling user data and processing it quickly. The database was structured using MongoDB, which provided the flexibility needed to store semi-structured user data, including health records and preferences. The critical component of the platform, GPT-4o mini, a lightweight version of GPT, was integrated into the backend. This was essential for generating AI-driven personalized diet plans based on user input.",
    "The backend development played a central role in managing data flow. User inputs such as location, user specifications, health goals, and dietary restrictions were processed and sent to the GPT-4o mini AI model, which would then generate personalized diet recommendations. The backend was designed to securely handle sensitive user data, ensuring seamless integration with the AI model and real-time data processing."
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-0 py-12">
      <h1 className="text-xl md:text-3xl font-semibold text-gray-800  mb-8">
        The Solution We Provided
      </h1>
      
      <div className="space-y-6 text-gray-700 leading-relaxed">
        {paragraphs.map((paragraph, index) => (
          <p className='text-sm' key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
};

export default SolutionProvided;
