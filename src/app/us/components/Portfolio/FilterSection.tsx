import React, { useState, useEffect } from 'react';
import { Industry } from './data/types';
import { Expertise } from './data/types';
import { FaFilter, FaCheck } from 'react-icons/fa';

interface FilterSectionProps {
  selectedIndustry: Industry;
  selectedExpertise: Expertise;
  onIndustryChange: (industry: Industry) => void;
  onExpertiseChange: (expertise: Expertise) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  selectedIndustry,
  selectedExpertise,
  onIndustryChange,
  onExpertiseChange,
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const industries: Industry[] = [
    'All Industries',
    'Industrial & Manufacturing',
    'Real Estate',
    'Education',
    'Media & Entertainment',
    'Finance & Accounting',
    'Staffing & Recruitment',
    'Travel & Transportation',
  ];
  const expertiseTypes: Expertise[] = [
    'All Expertise Types',
    'Website UI_UX',
    'Ecommerce',
    'Mobile App',
    'Software',
    'Digital Marketing',
  ];

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 768);

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleFilter = () => setIsFilterOpen((prev) => !prev);

  return (
    <div className="filter lg:w-1/4 p-4 bg-white border border-gray-200 shadow-lg rounded-lg max-h-[100vh] overflow-y-auto no-scrollbar scroll-smooth">
      <button
        className="flex items-center p-2 bg-blue-600 text-white rounded-lg md:hidden shadow"
        onClick={toggleFilter}
      >
        <FaFilter className="mr-2" /> Filter Options
      </button>

      {(isFilterOpen || isLargeScreen) && (
        <div className="mt-4 md:block space-y-8">
          {/* Expertise Filter */}
          <div>
            <h2 className="text-base md:text-lg font-semibold text-gray-800 border-b pb-2 mb-4">
              Filter by Expertise Type
            </h2>
            <ul className="space-y-3">
              {expertiseTypes.map((expertise) => (
                <li
                  key={expertise}
                  onClick={() => {
                    onExpertiseChange(expertise);
                    setIsFilterOpen(false);
                  }}
                  className={`flex items-center cursor-pointer px-3 text-sm lg:text-base py-2 rounded-lg hover:bg-blue-600 hover:text-white transition ${selectedExpertise === expertise
                      ? 'bg-blue-600 text-white font-semibold'
                      : 'text-gray-700'
                    }`}
                >
                  {selectedExpertise === expertise && <FaCheck className="mr-2" />}
                  {expertise}
                </li>
              ))}
            </ul>
          </div>

          {/* Conditionally Render Industry Filter */}
          {selectedExpertise === 'Website UI_UX' && (
            <div>
              <h2 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4">
                Filter by Industry
              </h2>
              <ul className="space-y-3">
                {industries.map((industry) => (
                  <li
                    key={industry}
                    onClick={() => {
                      onIndustryChange(industry);
                      setIsFilterOpen(false);
                    }}
                    className={`flex items-center cursor-pointer px-3 text-sm lg:text-base py-2 rounded-lg hover:bg-blue-600 hover:text-white transition ${selectedIndustry === industry
                        ? 'bg-blue-600 text-white font-semibold'
                        : 'text-gray-700'
                      }`}
                  >
                    {selectedIndustry === industry && <FaCheck className="mr-2" />}
                    {industry}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FilterSection;
