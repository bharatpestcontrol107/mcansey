import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import logo from '../../../../../public/Home/Mcansey 100X100 L.png';
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { RxTrackNext, RxTrackPrevious } from "react-icons/rx";

interface Job {
  company: string;
  title: string;
  price: string;
  location: string;
  time: string;
  description: string;
  tags: string[];
  image: StaticImageData;
  employmentType: string;
}


const jobs: Job[] = [
  {
    company: "Dailymotion",
    title: "Frontend Developer",
    price: "$250/Hour",
    location: "New York, US",
    time: "6 minutes ago",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["Typescript", "Java"],
    image: logo,
    employmentType: "Full time",
  },
  {
    company: "Quora JSC",
    title: "Senior System Engineer",
    price: "$800/Hour",
    location: "New York, US",
    time: "5 minutes ago",
    description: "Recusandae architecto eveniet, dolor quo repellendus pariatur.",
    tags: ["PHP", "Android"],
    image: logo,
    employmentType: "Part time",
  },
  {
    company: "Quora JSC",
    title: "Senior System Engineer",
    price: "$800/Hour",
    location: "New York, US",
    time: "5 minutes ago",
    description: "Recusandae architecto eveniet, dolor quo repellendus pariatur.",
    tags: ["PHP", "Android"],
    image: logo,
    employmentType: "Part time",
  },
  {
    company: "Periscope",
    title: "Lead Quality Control QA",
    price: "$800/Hour",
    location: "New York, US",
    time: "5 minutes ago",
    description: "Recusandae architecto eveniet, dolor quo repellendus pariatur.",
    tags: ["IOS", "Laravel", "Golang"],
    image:logo,
    employmentType: "Part time",
  },
 
];

export default function FeaturedJobs() {
  const settings = {
   
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <section className="py-8  md:max-w-7xl mx-auto">
      <div className="container mx-auto ">
        <h2 className="text-3xl font-semibold text-gray-800 text-[18px] p-3">Featured Jobs</h2>
        <p className="text-lg text-gray-500 mb-6 px-3 text-[17px]">Get the latest news, updates and tips</p>

        <Slider {...settings}>
          {jobs.map((job, index) => (
            <div key={index} className="p-4">
              <div className="bg-white shadow-md rounded-lg p-8 border">
                <div className="flex items-center mb-3">
                  <Image src={job.image} alt={job.company} className="h-12 w-12 rounded-md" />
                  <div className="ml-3">
                    <h3 className="text-lg font-bold text-gray-800 text-[13px]">{job.company}</h3>
                    <p className="text-sm text-gray-500">{job.location}</p>
                  </div>
                  <span className="ml-auto text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m1-3a9 9 0 11-2.824 6.351" />
                    </svg>
                  </span>
                </div>
               <Link href={""} passHref><h4 className="text-xl font-semibold text-gray-900 whitespace-nowrap text-[14px]">{job.title}</h4></Link> 
                <div className="text-sm text-gray-500 mb-4 flex items-center">
                  <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 7h16v10H2V7zm10 6h-4v-2h4v2z" />
                  </svg>
                  {job.employmentType} · {job.time}
                </div>
                <p className="text-gray-600 text-sm mb-4 text-[12px]">{job.description}</p>
                <div className="flex space-x-2 mb-4">
                  {job.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs text-gray-700 bg-gray-200 rounded-md px-2 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[13px] font-semibold text-blue-600 ">{job.price}</span>
                  <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg whitespace-nowrap  text-[12px]">Apply Now</button>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div className="text-center mt-6">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-[12px]">Load more posts</button>
        </div>
      </div>
    </section>
  );
}




function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="custom-arrow bg-blue-600 rounded-full flex justify-center  items-center shadow-lg hover:bg-blue-800 transition duration-300 ease-in-out"
      style={{
        right: "10px", 
        top: "50%", 
        transform: "translateY(-50%)", 
        zIndex: 10,
        width: "35px",
        height: "35px",
        display: "flex",
        cursor: "pointer",  
        position: "absolute", 
      }}
      onClick={onClick}
    >
      <RxTrackNext className="w-5 h-5 text-white" />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="custom-arrow bg-blue-600 rounded-full flex justify-center items-center shadow-lg hover:bg-blue-800 transition duration-300 ease-in-out"
      style={{
        left: "10px", 
        top: "50%", 
        transform: "translateY(-50%)", 
        zIndex: 10,
        width: "35px",
        height: "35px",
        display: "flex",
        cursor: "pointer",
        position: "absolute", 
      }}
      onClick={onClick}
    >
      <RxTrackPrevious className="w-5 h-5 text-white" />
    </div>
  );
}







export { SampleNextArrow, SamplePrevArrow };
