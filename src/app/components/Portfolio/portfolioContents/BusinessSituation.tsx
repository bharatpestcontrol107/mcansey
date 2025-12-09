
import React from 'react';
import { bulletPoints, paragraphs } from '../data/data';


const BusinessSituation: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8 border-t-2">
      <h2 className="text-xl md:text-2xl xl:text-3xl font-semibold text-gray-800 mb-4">Business Situation</h2>
      {paragraphs.map((text, index) => (
        <p key={index} className="text-sm text-gray-700 leading-relaxed mb-4">
          {text}
        </p>
      ))}
      <h3 className="text-lg font-semibold text-gray-800 mb-2 md:py-2">
        Some of the primary requirements the client needed us to address were:
      </h3>
      <ul className="space-y-3">
        {bulletPoints.map((point, index) => (
          <li key={index} className="flex items-start">
            <span className="text-black mr-2">✔️</span>
            <p className="text-sm text-gray-700 leading-relaxed">{point}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BusinessSituation;
