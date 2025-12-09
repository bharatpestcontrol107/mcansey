'use client'
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';


const timelineData = [
    { year: "2015", text: "Company formed" },
    { year: "2016", text: "Launched dedicated Managed Staffing Program (MSP) Support Model" },
    { year: "2017", text: "Talent offering beyond Information Technology, Expanded into Small Business Accounting, Content Writing" },
    { year: "2019", text: "Expanded to India" },
    { year: "2022", text: "Added Data Analytics to the services" },
    { year: "Rapid", text: "Working towards broader horizons" },
];


const Timeline = () => {
   
    const isSmallScreen = useMediaQuery({ maxWidth: 767 });

    return (
        <div className="flex flex-col items-center py-16 bg-white text-black px-4 sm:px-6 md:px-8 lg:px-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">Everyone Has A Story. Here Is Ours.</h2>
            <p className="text-center max-w-2xl mb-12 text-gray-400">
                Our journey reflects resilience, learning, and growth. We've faced challenges, celebrated wins, and built strong connections. Fueled by our determination and passion, it drives us to explore the unknown and strive for excellence.
            </p>
            <div className="relative w-full max-w-3xl">
                
                {isSmallScreen ? <SmallScreenTimeline /> : <LargeScreenTimeline />}
            </div>
        </div>
    );
};


const SmallScreenTimeline = () => (
    <>
       
        <div className="absolute right-[2.25rem] top-0 h-full border-l-2 border-blue-600"></div>
        {timelineData.map((item, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative mb-16 w-full flex flex-col items-start"
            >
                
                <div className="absolute right-4  top-[-1rem] w-12 h-12  bg-gray-900 rounded-full flex items-center justify-center text-white font-semibold border-2 border-white z-10">
                    {item.year}
                </div>
               
                <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg text-xs mt-8 mx-4 max-w-xs">
                    {item.text}
                </div>
            </motion.div>
        ))}
    </>
);




const LargeScreenTimeline = () => (
    <>
        
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-blue-600"></div>
        {timelineData.map((item, index) => (
            <TimelineItem key={index} year={item.year} text={item.text} isLeft={index % 2 === 0} />
        ))}
    </>
);

interface TimelineItemProps {
    year: string;
    text: string;
    isLeft: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, text, isLeft }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`relative mb-16 w-full flex ${isLeft ? 'justify-start' : 'justify-end'} sm:flex-row flex-col`}
    >
        <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-white font-semibold border-2 border-white z-10">
            {year}
        </div>
        <div className={`w-1/2 flex ${isLeft ? 'justify-end pr-12' : 'justify-start pl-12'}`}>
            <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg text-sm mt-6 mx-4 max-w-xs">
                {text}
            </div>
        </div>
    </motion.div>
);

export default Timeline;
