'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { AiFillClockCircle, AiOutlineGlobal } from 'react-icons/ai';
import { FaBriefcase, FaList } from 'react-icons/fa';
import { jobs } from './jobs';
import { Job } from './jobs'
import { filters } from './jobs';
import notfound from '../../../../../public/JobList/NoFound.png'
import left from '../../../../../public/JobList/left-job-head.15bb41c5.svg';
import right from '../../../../../public/JobList/right-job-head.20bf0a8a.svg';
import Link from 'next/link';
import { TfiLayoutGrid3Alt } from 'react-icons/tfi';
import { MdWork } from 'react-icons/md';



const JobFilter = () => {
  const [jobCount, setJobCount] = useState(0);
  const [viewMode, setViewMode] = useState('list');


  const [locationSearchInput, setLocationSearchInput] = useState('');

  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [skillsSearchInput, setSkillsSearchInput] = useState('');
  const [filteredSkills, setFilteredSkills] = useState<string[]>([]);
  const [isSkillsDropdownOpen, setSkillsDropdownOpen] = useState(false);
  const industryDropdownRef = useRef<HTMLDivElement | null>(null);
  const locationDropdownRef = useRef<HTMLDivElement | null>(null);

  const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobs);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);

  const [isLocationDropdownOpen, setLocationDropdownOpen] = useState<boolean>(false);


  const [selectedAllLocations, setSelectedAllLocations] = useState<string[]>([]);


  const [filteredLocations, setFilteredLocations] = useState<string[]>(filters.locations);

  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [selectedSalaries, setSelectedSalaries] = useState<string[]>([]);
  const [selectedExperience, setSelectedExperience] = useState<string[]>([]);
  const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>([]);
  const [selectedOnSites, setSelectedOnSites] = useState<string[]>([]);
  const [selectedEducation, setSelectedEducation] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const filterDrawerRef = useRef<HTMLDivElement | null>(null);
  const [currentPage, setCurrentPage] = useState(1);


  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {

      if (filterDrawerRef.current && !filterDrawerRef.current.contains(event.target as Node)) {
        setShowMobileFilter(false);
      }
    }

    if (showMobileFilter) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMobileFilter]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (industryDropdownRef.current && !industryDropdownRef.current.contains(event.target as Node)) {
        setSkillsDropdownOpen(false);
      }
      if (locationDropdownRef.current && !locationDropdownRef.current.contains(event.target as Node)) {
        setLocationDropdownOpen(false);
      }

    };

    document.addEventListener('mousedown', handleClickOutside);


    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const jobsPerPage = 8;
  const maxPageButtons = 5;




  useEffect(() => {
    if (locationSearchInput) {
      const locationSuggestions = Array.from(
        new Set(
          jobs
            .map((job) => job.location)
            .filter((location) => location && location.toLowerCase().includes(locationSearchInput.toLowerCase()))
        )
      ).slice(0, 5);
      setFilteredLocations(locationSuggestions);
    } else {
      setFilteredLocations([]);
    }
  }, [locationSearchInput, jobs]);


  useEffect(() => {
    if (skillsSearchInput) {
      const skillsSuggestions = Array.from(
        new Set(
          jobs
            .flatMap((job) => job.skills)
            .filter((skill) => skill.toLowerCase().includes(skillsSearchInput.toLowerCase()))
        )
      ).slice(0, 5);
      setFilteredSkills(skillsSuggestions);
    } else {
      setFilteredSkills([]);
    }
  }, [skillsSearchInput, jobs]);



  const applyFiltersSearch = () => {
    setLoading(true);
    let filtered = jobs;


    if (selectedAllLocations.length > 0) {
      filtered = filtered.filter((job) =>
        selectedAllLocations.includes(job.location)
      );
    }
    if (selectedSkills.length > 0) {
      filtered = filtered.filter((job) =>
        selectedSkills.some((skill) => job.skills.includes(skill))
      );
    }


    setTimeout(() => {
      setFilteredJobs(filtered);
      setJobCount(filtered.length);
      setCurrentPage(1);
      setLoading(false);
    }, 300);
  };

  const renderSelectedSkills = () => {
    return selectedSkills.length > 0
      ? selectedSkills.join(', ') + (skillsSearchInput ? `, ${skillsSearchInput}` : '')
      : skillsSearchInput;
  };

  const renderSelectedLocations = () => {

    return selectedAllLocations.length > 0
      ? selectedAllLocations.join(', ') + (locationSearchInput ? `, ${locationSearchInput}` : '')
      : locationSearchInput;
  };



  const handleSkillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSkillsSearchInput(e.target.value);
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocationSearchInput(e.target.value);
  };




  const handleSkillsSuggestionClick = (skill: string) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills((prevSkills) => [...prevSkills, skill]);
    }
    setSkillsSearchInput('');
    setSkillsDropdownOpen(false);
  };




  const handleLocationSuggestionClick = (location: string) => {
    if (!selectedAllLocations.includes(location)) {
      setSelectedAllLocations((prevLocations) => [...prevLocations, location]);
    }
    setLocationSearchInput('');
    setLocationDropdownOpen(false);
  };



  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, type: 'skills' | 'location') => {
    if (e.key === 'Backspace') {
      if (type === 'skills' && skillsSearchInput === '') {

        setSelectedSkills([]);
      } else if (type === 'location' && locationSearchInput === '') {

        setSelectedAllLocations([]);
      }

    }
  };

  useEffect(() => {
    setLoading(true);

    let filtered = jobs;

    const filterBySelected = <T extends keyof Job>(items: string[], key: T) => {
      if (items.length > 0) {
        filtered = filtered.filter((job) => {
          const value = job[key];
          return typeof value === 'string' && items.includes(value);
        });
      }
    };

    filterBySelected(selectedLocations, 'location');
    filterBySelected(selectedIndustries, 'industry');
    filterBySelected(selectedSalaries, 'salary');
    filterBySelected(selectedJobTypes, 'jobType');
    filterBySelected(selectedOnSites, 'onSiteRemote');
    filterBySelected(selectedExperience, 'experience');
    filterBySelected(selectedEducation, 'education');

    setTimeout(() => {
      setFilteredJobs(filtered);
      setJobCount(filtered.length);
      setCurrentPage(1);
      setLoading(false);
    }, 300);

  }, [
    selectedLocations,
    selectedIndustries,
    selectedSalaries,
    selectedJobTypes,
    selectedExperience,
    selectedOnSites,
    selectedEducation,

  ]);

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedLocations, selectedIndustries, selectedSalaries, selectedJobTypes, selectedExperience, selectedOnSites, selectedEducation,]);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const handlePrevNextChange = (direction: "prev" | "next") => {
    if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (direction === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };




  return (
    <>
      <div className="white rounded-md mt-3  pb-16 px-4 sm:px-6 md:max-w-7xl mx-auto relative pt-[80px]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 sm:text-2xl">
            <span className="text-blue-600">{jobCount} Jobs</span> Available Now
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">

          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center relative z-10">
            <div className="bg-white p-6 shadow-lg rounded-2xl flex flex-col sm:flex-row items-center justify-between w-full max-w-4xl space-y-4 sm:space-y-0 sm:space-x-4 border">


              <div className="relative w-full flex items-center" ref={industryDropdownRef}>
                <input
                  type="text"
                  placeholder="Search Skills..."
                  className="block w-full py-2 px-3 border text-[12px] sm:text-[14px] border-gray-300 text-gray-600 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition"
                  value={renderSelectedSkills()}
                  onFocus={() => setSkillsDropdownOpen(true)}
                  onChange={handleSkillsChange}
                  onKeyDown={(e) => handleKeyDown(e, 'skills')}
                />
                {isSkillsDropdownOpen && (
                  <ul className="absolute top-full left-0 w-full bg-white text-[12px] sm:text-[14px] text-left border border-gray-300 rounded-md shadow-lg z-10 max-h-48 overflow-y-auto scroll-smooth transition-all">
                    {filteredSkills.length > 0 ? (
                      filteredSkills.map((skill, index) => (
                        <li
                          key={index}
                          className="py-2 px-4 hover:bg-blue-500 hover:text-white cursor-pointer"
                          onClick={() => handleSkillsSuggestionClick(skill)}
                        >
                          {skill}
                        </li>
                      ))
                    ) : (
                      Array.from(new Set(jobs.flatMap((job) => job.skills))).map((skill, index) => (
                        <li
                          key={index}
                          className="py-2 px-4 hover:bg-blue-500 hover:text-white cursor-pointer"
                          onClick={() => handleSkillsSuggestionClick(skill)}
                        >
                          {skill}
                        </li>
                      ))
                    )}
                  </ul>
                )}
              </div>

              <div className="relative w-full flex items-center" ref={locationDropdownRef}>
                <input
                  type="text"
                  placeholder="Search Location..."
                  className="block w-full py-2 px-3 border border-gray-300 text-gray-600 text-[12px] sm:text-[14px] rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition"
                  value={renderSelectedLocations()}
                  onFocus={() => setLocationDropdownOpen(true)}
                  onChange={handleLocationChange}
                  onKeyDown={(e) => handleKeyDown(e, 'location')}
                />
                {isLocationDropdownOpen && (
                  <ul className="absolute top-full left-0 w-full bg-white border text-left text-[12px] sm:text-[14px] border-gray-300 rounded-md shadow-lg z-10 max-h-48 overflow-y-auto">
                    {filteredLocations.length > 0 ? (
                      filteredLocations.map((location, index) => (
                        <li
                          key={index}
                          className="py-2 px-4 hover:bg-blue-500 hover:text-white cursor-pointer"
                          onClick={() => handleLocationSuggestionClick(location)}
                        >
                          {location}
                        </li>
                      ))
                    ) : (
                      Array.from(new Set(jobs.map((job) => job.location))).map((location, index) => (
                        <li
                          key={index}
                          className="py-2 px-4 hover:bg-blue-500 hover:text-white cursor-pointer"
                          onClick={() => handleLocationSuggestionClick(location)}
                        >
                          {location}
                        </li>
                      ))
                    )}
                  </ul>
                )}
              </div>

              <button
                className="bg-blue-600 text-white py-1 px-3 text-[13px] sm:py-2 sm:px-5 rounded-md shadow-md hover:bg-blue-700 transition duration-400 focus:outline-none"
                onClick={applyFiltersSearch}
              >
                Search
              </button>

            </div>
          </div>
          <div className="absolute bottom-0 left-0 z-0  hidden md:block bg">
            <Image src={left} alt="Left Illustration" width={200} height={200} className="w-48 h-auto" />
          </div>
          <div className="absolute bottom-0 right-0 z-0 hidden md:block">
            <Image src={right} alt="Right Illustration" width={200} height={200} className="w-48 h-auto" />
          </div>
        </div>
      </div>
      <div className="bg-white  mt-3 pt-5 pb-16 px-4 sm:px-6 md:max-w-7xl mx-auto relative">





        <div className="lg:flex lg:space-x-6">


          <div className="w-full lg:w-3/3">
            {loading ? (
              <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-4`}>
                {[...Array(6)].map((_, idx) => (
                  <div key={idx} className="job-card shimmer"></div>
                ))}
              </div>
            ) : (
              <div className="flex-1">
                <div className="flex justify-between items-center mb-6">
                  <p className='text-[13px]'>Showing {filteredJobs.length} of {jobs.length} jobs</p>
                  <div className="view hidden lg:flex space-x-4">
                    <button onClick={() => setViewMode('list')} className={viewMode === 'list' ? 'text-blue-600' : ''}>
                      <FaList />
                    </button>
                    <button onClick={() => setViewMode('grid')} className={viewMode === 'grid' ? 'text-blue-600' : ''}>
                      <TfiLayoutGrid3Alt />
                    </button>
                  </div>
                </div>

                {filteredJobs.length === 0 ? (
                  <div className="flex flex-col items-center space-y-4">
                    <Image src={notfound} alt="No results found" width={300} height={300} />
                    <h2 className="text-[16px] sm:text-2xl font-semibold text-gray-800">Oops, no jobs match your search!</h2>
                    <p className="text-gray-600 text-[14px]">Try adjusting your filters or check back later for new job postings.</p>
                    <button onClick={() => {
                      setSelectedLocations([]);
                      setSelectedIndustries([]);
                      setSelectedSalaries([]);
                      setSelectedJobTypes([]);
                      setSelectedExperience([]);
                      setSelectedOnSites([]);
                      setSelectedEducation([]);
                    }} className="bg-blue-600 m-2 text-white py-1 px-2 text-[14px] sm:px-6 sm:py-2 rounded-md hover:bg-blue-700">
                      Clear Filters
                    </button>
                  </div>
                ) : (
                  <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'} gap-4`}>
                    {currentJobs.map((job) => (
                      <div key={job.id} className="bg-white shadow-lg border p-6 rounded-lg flex flex-col justify-between space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                          <div className="flex items-center space-x-4">
                            <Image src={job.logo} alt={job.company} width={50} height={50} className="rounded-md" />
                            <div>
                             {job.link && <Link href={job.link} passHref> <h3 className="text-[14px] md:text-[16px] font-semibold text-gray-800">{job.title}</h3></Link>}
                              <div className="flex items-center text-gray-500 text-sm">
                                <AiOutlineGlobal className="mr-1" />
                                {job.location}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Link href={'/contact-us'} passHref>

                          </Link>
                          <div className="flex items-center space-x-2 text-[13px]  text-gray-400 whitespace-nowrap">
                            <FaBriefcase />
                            <span>{job.jobType}</span>
                            <AiFillClockCircle className="ml-4" />
                            <span>{job.postedTime}</span>
                            <MdWork />
                            <span>{job.experience}</span>
                          </div>
                        </div>


                        <div className="flex flex-wrap gap-2 mt-2">
                          {job.skills.map((skill, index) => (
                            <span key={index} className="bg-blue-100 text-blue-600 text-[12px] px-2 py-1 rounded-md">
                              {skill}
                            </span>
                          ))}
                        </div>

                        <div className="flex justify-between items-center mt-2">
                          <span className="text-blue-600 font-semibold text-[15px] md:text-[14px] whitespace-nowrap">{job.salary}</span>
                          {job.link && (
                            <div className="flex gap-1">
                              <Link href={job.link} passHref>
                                <button className="bg-blue-100 text-blue-600 font-medium py-1 text-[12px] px-2 rounded-md hover:bg-blue-200 whitespace-nowrap">
                                  View Details
                                </button>
                              </Link>
                              <Link href="/jobs/apply-now" passHref>
                                <button className="bg-blue-100 text-blue-600 font-medium py-1 text-[12px] px-2 rounded-md hover:bg-blue-200 whitespace-nowrap">
                                  Apply Now
                                </button>
                              </Link>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            <div className="container mx-auto px-4 mt-5">
              <nav className="flex flex-row sm:flex-wrap justify-center items-center" aria-label="Pagination">

                <button
                  onClick={() => handlePrevNextChange('prev')}
                  disabled={currentPage === 1}
                  className="flex items-center justify-center h-8 px-3 mx-1 text-[13px] rounded border border-gray-200 bg-white text-black hover:border-gray-300 disabled:opacity-50 transition"
                  title="Previous Page"
                >
                  <span className="mr-1 hidden md:inline">Previous</span>
                  <svg className="block w-4 h-4 fill-current" viewBox="0 0 256 512" aria-hidden="true" role="presentation">
                    <path d="M238.475 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L50.053 256 245.546 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L10.454 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"></path>
                  </svg>
                </button>
                {currentPage > 3 && (
                  <>
                    <button
                      onClick={() => handlePageChange(1)}
                      className="hidden md:flex w-8 h-8  mx-1  text-[13px] justify-center items-center rounded border border-gray-200 bg-white text-black hover:border-gray-300"
                      title="Page 1"
                    >
                      1
                    </button>
                    {currentPage > 4 && (
                      <span className="hidden md:flex w-8 h-8 text-[13px] mx-1  items-center justify-center text-gray-700">...</span>
                    )}
                  </>
                )}

                {Array.from({ length: Math.min(maxPageButtons, totalPages) }, (_, index) => {
                  const pageNumber = index + Math.max(2, currentPage - Math.floor(maxPageButtons / 2));
                  return (
                    pageNumber <= totalPages && (
                      <button
                        key={pageNumber}
                        onClick={() => handlePageChange(pageNumber)}
                        className={`mx-1 w-8 h-8  flex items-center justify-center rounded border ${currentPage === pageNumber ? 'border-black bg-black text-white pointer-events-none' : 'border-gray-200 bg-white text-black hover:border-gray-300'
                          }`}
                        title={`Page ${pageNumber}`}
                      >
                        {pageNumber}
                      </button>
                    )
                  );
                })}

                {currentPage < totalPages - 2 && (
                  <>
                    {currentPage < totalPages - 3 && (
                      <span className="hidden md:flex w-8 h-8 mx-1 text-[13px]  items-center justify-center text-gray-700">...</span>
                    )}
                    <button
                      onClick={() => handlePageChange(totalPages)}
                      className="hidden md:flex w-8 h-8 mx-1 justify-center  items-center rounded border border-gray-200 bg-white text-black hover:border-gray-300"
                      title={`Page ${totalPages}`}
                    >
                      {totalPages}
                    </button>
                  </>
                )}

                <button
                  onClick={() => handlePrevNextChange('next')}
                  disabled={currentPage === totalPages}
                  className="flex items-center justify-center h-8 px-3 mx-1 text-[13px] rounded border border-gray-200 bg-white text-black hover:border-gray-300 disabled:opacity-50 transition"
                  title="Next Page"
                >
                  <span className="mr-1 hidden md:inline">Next</span>
                  <svg className="block w-4 h-4 fill-current" viewBox="0 0 256 512" aria-hidden="true" role="presentation">
                    <path d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path>
                  </svg>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div></>
  );
};

export default JobFilter;
