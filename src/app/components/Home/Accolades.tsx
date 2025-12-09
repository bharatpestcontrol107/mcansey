'use client'
import React, { useRef } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface AwardData {
    title: string;
    year: string;
    imageUrl: string;
    name: string;
    testimonial: string;
    designation: string;
}

const awards: AwardData[] = [
    {
        title: 'App Development Company of the Year',
        year: '2020',
        imageUrl: '/persons/technical-industry-experts.jpg',
        name: 'Jignesh Mehta',
        testimonial: 'Jignesh Mehta leads 22 Years in fintech innovations, creating digital finance solutions that streamline transactions and enhance user experience, making financial services more accessible and secure.',
        designation: '22 Yrs In Fintech Innovations',
    },
    {
        title: 'Top Mobile App Developers',
        year: '2020',
        imageUrl: '/persons/istockphoto-1410375100-640x640.jpg',
        name: 'Sandeep Rao',
        testimonial: 'With over 30 years of expertise in digital transformation, Sanjeev leads Business Development in the manufacturing sector, building strong, cohesive teams. Known for his industry insights, he is a respected name in digital innovation forums.',
        designation: '30 Yrs In Digital Transformation',
    },
    {
        title: 'Best Place to Work',
        year: '2022',
        imageUrl: '/persons/ecommerce-industry-expert-m.jpg',
        name: 'Ritu Shah',
        testimonial: 'Ritu Shah oversees strategic growth and client relations in global markets. Her expertise in cross-border partnerships drives sustainable expansion, strengthening our international presence.',
        designation: '25 Years In Global Business',
    },
    {
        title: 'India’s Growth Champions in IT',
        year: '2023',
        imageUrl: '/persons/Blockchain-industry-experts.jpg',
        name: 'Sandeep Rao’s',
        testimonial: 'Sandeep Rao manages operations across Southern India, bringing exceptional technical and business acumen. A certified Business Architect, he excels in delivering solutions tailored to various technologies and client needs.',
        designation: '18 Yrs In IT Services',
    },
    {
        title: 'Tech Company of the Year',
        year: '2023',
        imageUrl: '/persons/intech-industry-experts.jpg',
        name: 'Hemant Chadha',
        testimonial: 'Hemant Chadha specializes in accelerating startup growth, providing emerging businesses with resources and mentorship at ScaleHub Incubator to turn concepts into market-ready products.',
        designation: '20 Years In Product Innovation',
    },
];

const AwardCard: React.FC<AwardData> = ({ title, imageUrl, name, testimonial, designation }) => (
    <div className="Accolades p-3 text-center border-2 border-gray-400 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out mx-2 flex flex-col h-[520px]">
        <div className="flex justify-center mb-4 ">
            <div className="w-full h-[180px]  sm:h-[200px] overflow-hidden rounded-xl border border-gray-300 shadow-sm">
                <Image
                    src={imageUrl}
                    alt={title}
                    width={300}
                    height={200}
                    className="object-cover w-full h-full rounded-lg"
                />
            </div>
        </div>
        <div className="flex flex-col flex-grow xl:px-2 space-y-2">
            <p className="text-sm md:text-[15px] font-semibold mt-1 text-left">{name}</p>
            <div className="text-sm italic text-left flex-grow">
                {testimonial}
            </div>
            <p className="text-xs text-gray-600 text-right mt-2">{designation}</p>
        </div>
    </div>
);


const Accolades: React.FC = () => {
    const sliderRef = useRef<Slider | null>(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1486,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="carousel-container max-w-full mx-auto p-4 mt-4 relative overflow-hidden md:max-w-[85%]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 space-y-4 md:space-y-0">
                <h2 className="text-xl capatalize xl:text-2xl font-bold text-black text-left leading-snug md:leading-normal py-3 max-w-full md:max-w-[80%]">
                Our industry experts bring a wealth of knowledge and hands-on experience, guiding businesses through impactful digital transformations
                </h2>
                <div className="hidden md:flex space-x-4 justify-center md:justify-start">
                    <div
                        className="bg-blue-600 p-2 md:p-3 rounded-full flex items-center justify-center cursor-pointer text-white hover:bg-blue-500"
                        onClick={() => sliderRef.current?.slickPrev()}
                    >
                       <FaArrowLeft size={20} />
                    </div>
                    <div
                        className="bg-blue-600 p-2 md:p-3 rounded-full flex items-center justify-center cursor-pointer text-white hover:bg-blue-500"
                        onClick={() => sliderRef.current?.slickNext()}
                    >
                       <FaArrowRight size={20} />
                    </div>
                </div>
                
            </div>
            
            <Slider ref={sliderRef} {...settings}>
                {awards.map((award, index) => (
                    <AwardCard key={index} {...award} />
                ))}
            </Slider>
            <div className="flex space-x-4 justify-center py-4 md:hidden">
                    <div
                        className="bg-blue-600 p-2 md:p-3 rounded-full flex items-center justify-center cursor-pointer text-white hover:bg-blue-500"
                        onClick={() => sliderRef.current?.slickPrev()}
                    >
                       <FaArrowLeft size={20} />
                    </div>
                    <div
                        className="bg-blue-600 p-2 md:p-3 rounded-full flex items-center justify-center cursor-pointer text-white hover:bg-blue-500"
                        onClick={() => sliderRef.current?.slickNext()}
                    >
                       <FaArrowRight size={20} />
                    </div>
                </div>
        </div>
    );
};

export default Accolades;
