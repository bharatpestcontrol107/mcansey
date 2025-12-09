
import React from 'react';

const OutcomesContent: React.FC = () => {
  const paragraphs = [
    "The AI-driven diet management platform proved to be a game-changer for both the client and its users, delivering personalized meal plans that incorporate location and personal health data to support well-informed nutritional decisions. With over 15 diet types, including vegan, gluten-free, ketogenic, and heart-healthy, the platform caters to a diverse range of dietary needs. Covering more than 50 countries, it provided location-based meal suggestions using locally sourced ingredients, making diet plans practical and sustainable.",
    "In its first three months, the platform experienced considerable growth, achieving a 50% increase in active users. Users expressed positive feedback, particularly highlighting the ability to adapt meal plans based on locally available foods as a key feature that enhanced adherence and long-term success. The real-time, AI-driven recommendations, powered by GPT-4o mini, enabled the platform to scale while maintaining high performance and personalization, helping the client stand out in a competitive market.",
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-0 py-12">
      <h1 className="text-xl md:text-2xl font-semibold text-gray-800  mb-8">
      Outcomes from the Customized AI-driven Diet Management Platform
      </h1>
      
      <div className="space-y-6 text-gray-700 leading-relaxed">
        {paragraphs.map((paragraph, index) => (
          <p className='text-sm' key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
};

export default OutcomesContent;
