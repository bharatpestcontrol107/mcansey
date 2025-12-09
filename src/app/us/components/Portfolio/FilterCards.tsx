'use client';
import React, { useState } from 'react';
import { industryCards } from './data/industryData';
import { expertiseCards } from './data/expertiseData';
import FilterSection from './FilterSection';
import CardGrid from './CardGrid';
import { Industry } from './data/types';
import { Expertise } from './data/types';
import { combinedCards } from './data/combinedcards';



export default function FilterCards() {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry>('All Industries');
  const [selectedExpertise, setSelectedExpertise] = useState<Expertise>('All Expertise Types');
  const [showAll, setShowAll] = useState(true);

  const allIndustryCards = Object.values(industryCards).flat();
  const allExpertiseCards = Object.values(expertiseCards).flat();


  const filteredIndustryCards =
    selectedIndustry !== 'All Industries' ? industryCards[selectedIndustry] || [] : allIndustryCards;

  const filteredExpertiseCards =
    selectedExpertise !== 'All Expertise Types' ? expertiseCards[selectedExpertise] || [] : allExpertiseCards;


  const clearFilters = () => {
    setSelectedIndustry('All Industries');
    setSelectedExpertise('All Expertise Types');
    setShowAll(true);
  };

  return (
    <div>
      <h1 className="text-3xl md:text-6xl font-bold text-center mb-8 pt-28">Portfolio</h1>
      <div className="flex flex-col lg:flex-row min-h-screen">
        <FilterSection
          selectedIndustry={selectedIndustry}
          selectedExpertise={selectedExpertise}
          onIndustryChange={(industry) => {
            setSelectedIndustry(industry);
            setShowAll(false); 
          }}
          onExpertiseChange={(expertise) => {
            setSelectedExpertise(expertise);
            setShowAll(false); 
          }}
        />

        <div className="flex-1 p-4 max-h-[100vh] overflow-y-auto no-scrollbar">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-medium text-gray-700">
              {showAll
                ? 'Showing all case studies'
                : `Showing case studies from ${selectedIndustry === 'All Industries' ? '' : selectedIndustry} ${selectedExpertise === 'All Expertise Types' ? '' : selectedExpertise}`}
            </h2>
            <div className='flex w-52 mx-auto text-nowrap'>
              <button
                onClick={() => setShowAll(true)}
                className={`hidden w-full p-2 mb-4 text-white rounded-lg shadow ${showAll ? 'bg-blue-600' : 'bg-gray-500 hover:bg-blue-600'}`}
              >
                Show All Case Studies
              </button>
            </div>
            <button
              onClick={clearFilters}
              className="px-4 py-2 text-sm font-semibold text-gray-600 border border-gray-300 rounded hover:bg-gray-100"
            >
              Clear Filters
            </button>
          </div>

          <div className="grid gap-6 mb-6">
            {/* Show all case studies */}
            {showAll && (
              <div>
                <h3 className=" text-xl font-semibold mb-4">All Case Studies</h3>
                <CardGrid cards={combinedCards} />
              </div>
            )}

            {/* Display expertise cards */}
            {!showAll && selectedIndustry === 'All Industries' && selectedExpertise === 'All Expertise Types' && (
              <div>
                <h3 className="text-xl font-semibold mb-4">All Expertise</h3>
                <CardGrid cards={allExpertiseCards} />
              </div>
            )}

            {/* Display industry-specific cards */}
            {!showAll && selectedIndustry !== 'All Industries' && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Industry: {selectedIndustry}</h3>
                <CardGrid cards={filteredIndustryCards} />
              </div>
            )}

            {/* Display expertise-specific cards */}
            {!showAll && selectedExpertise !== 'All Expertise Types' && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Expertise: {selectedExpertise}</h3>
                <CardGrid cards={filteredExpertiseCards} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
