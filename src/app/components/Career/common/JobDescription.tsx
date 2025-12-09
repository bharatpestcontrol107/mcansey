import React from 'react';

interface JobDescriptionProps {
  welcomeMessage: string;
  description: string;
  essentialKnowledge: string[];
  preferredExperience: string[];
  productDesignerRole: { title: string; description: string }[];
}

const JobDescription: React.FC<JobDescriptionProps> = ({
  welcomeMessage,
  description,
  essentialKnowledge,
  preferredExperience,
  productDesignerRole,
}) => (
  <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md">
    <h1 className="text-[18px] sm:text-xl font-bold mb-4 sm:mb-6 text-gray-800">{welcomeMessage}</h1>
    <p className="text-[14px] sm:text-[14px] text-gray-700 mb-4 sm:mb-6 leading-relaxed">{description}</p>

    <h2 className="text-[15px] sm:text-[16px] font-semibold mb-3 sm:mb-4 text-blue-700">Essential Knowledge</h2>
    <ul className="list-disc pl-4 sm:pl-6 text-[14px] sm:text-[14px] mb-4 sm:mb-6">
      {essentialKnowledge.map((item, index) => (
        <li key={index} className="mb-2">{item}</li>
      ))}
    </ul>

    <h2 className="text-[15px] sm:text-[16px] font-semibold mb-3 sm:mb-4 text-blue-700">Preferred Experience</h2>
    <ul className="list-disc pl-4 sm:pl-6 text-[14px] sm:text-[14px] mb-4 sm:mb-6">
      {preferredExperience.map((item, index) => (
        <li key={index} className="mb-2">{item}</li>
      ))}
    </ul>

    <h2 className="text-[15px] sm:text-[16px] font-semibold mb-3 sm:mb-4 text-blue-700">Product Designer Role</h2>
    <ul className="text-[13px] sm:text-lg text-gray-700 mb-4 sm:text-[14px] sm:mb-6">
      {productDesignerRole.map((item, index) => (
        <li key={index} className="mb-4">
          <span className="font-bold text-gray-800">{item.title}:</span> {item.description}
        </li>
      ))}
    </ul>
  </div>
);

export default JobDescription;
