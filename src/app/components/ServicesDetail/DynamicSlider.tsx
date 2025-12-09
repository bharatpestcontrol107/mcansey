'use client'
import { useRef, useState } from 'react';
import img from '../../../../public/DynamicSlider/ms-sql.svg'
import img1 from '../../../../public/DynamicSlider/mysql.svg'
import img2 from '../../../../public/DynamicSlider/postgre_sql.svg'
import img3 from '../../../../public/DynamicSlider/oracle-icon.svg'
import img4 from '../../../../public/DynamicSlider/hbase-logo.svg'
import img5 from '../../../../public/DynamicSlider/nifi-logo.svg'
import img6 from '../../../../public/DynamicSlider/cassandra.svg'
import img7 from '../../../../public/DynamicSlider/hive-logo.svg'
import img8 from '../../../../public/DynamicSlider/mongodb-logo.svg'

import Image from 'next/image';
import Slider from 'react-slick';
type SliderOption = {
  label: string;
  id: string;
  content: JSX.Element;
};

const DynamicSlider = () => {
 
  const [activeOption, setActiveOption] = useState<string>('databases');
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleClick = (id: string) => setActiveOption(id);

  const handleMouseDown = (e: React.MouseEvent) => {
    const slider = sliderRef.current;
    if (!slider) return;

    let isDragging = true;
    const startX = e.pageX - slider.offsetLeft;
    const scrollLeft = slider.scrollLeft;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2; // scroll-fast
      slider.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      isDragging = false;
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };
  
  const sliderOptions: SliderOption[] = [
    {
      label: 'Databases / Data Storages',
      id: 'databases',
      content: (
        <div className="grid gap-4">
         
          <div className="text-left text-gray-600 mb-2">SQL</div>
          <div className="grid grid-cols-5 gap-6">
            <Image src={img} alt="SQL Server" className="h-16" />
            <Image src={img1} alt="MySQL" className="h-16" />
            <Image src={img2} alt="PostgreSQL" className="h-16" />
            <Image src={img3} alt="Oracle" className="h-16" />
          </div>

         
          <div className="text-left text-gray-600 mt-8 mb-2">NoSQL</div>
          <div className="grid grid-cols-5 gap-6">
            <Image src={img4} alt="HBase" className="h-16" />
            <Image src={img5} alt="Nifi" className="h-16" />
            <Image src={img6} alt="Cassandra" className="h-16" />
            <Image src={img7} alt="Hive" className="h-16" />
            <Image src={img8} alt="MongoDB" className="h-16" />
          </div>
        </div>
      ),
    },
    {
        label: 'Big Data',
        id: 'bigdata',
        content: (
          <div className="grid grid-cols-4 gap-4">
            <Image src="/DynamicSlider/kafka-streams.svg" alt="Kafka Streams" width={80} height={80} />
            <Image src="/DynamicSlider/hive-logo.svg" alt="Hive" width={80} height={80} />
            <Image src="/DynamicSlider/spark_streaming.svg" alt="Spark" width={80} height={80} />
            <Image src="/DynamicSlider/hbase-logo.svg" alt="Hadoop" width={80} height={80} />
          </div>
        ),
      },
      {
        label: 'mobile',
        id: 'Apps',
        content: (
            <div className="grid grid-cols-4 gap-4">
            <Image src="/DynamicSlider/android-tech.svg" alt="Kafka Streams" width={80} height={80} />
            <Image src="/DynamicSlider/cordova-tech.svg" alt="Hive" width={80} height={80} />
            <Image src="/DynamicSlider/pwa-tech.svg" alt="Spark" width={80} height={80} />
            <Image src="/DynamicSlider/ios-tech.svg" alt="Hadoop" width={80} height={80} />
          </div>
        ),
      },
      {
        label: 'Frontend Technologies',
        id: 'frontend',
        content: (
            <div className="grid grid-cols-4 gap-12">
            <Image src="/TechCapa/css-logo.svg" alt="css" width={60} height={60} />
            <Image src="/TechCapa/html-logo.svg" alt="html" width={60} height={60} />
            <Image src="/TechCapa/javascript-lg.svg" alt="javascript" width={60} height={60} />
            <Image src="/TechCapa/react-logo-icon.svg" alt="react" width={60} height={60} />
            <Image src="/TechCapa/vuejs-logo.svg" alt="vue" width={60} height={60} />
            <Image src="/TechCapa/ember-logo.svg" alt="ember" width={80} height={80} />
            <Image src="/TechCapa/meteor.svg" alt="react" width={80} height={80} />
            <Image src="/TechCapa/nextlogo.svg" alt="react" width={80} height={80} />
          </div>
        ),
      },
      {
        label: 'Backend Technologies',
        id: 'backend',
        content: (
          <div className="grid grid-cols-4 gap-10">
            <Image src="/DynamicSlider/backend/dot-net-lang.svg" alt="Kafka Streams" width={80} height={80} />
            <Image src="/DynamicSlider/backend/java_lang.svg" alt="Hive" width={60} height={60} />
            <Image src="/DynamicSlider/backend/php-lang.svg" alt="Spark" width={80} height={80} />
            <Image src="/DynamicSlider/backend/python-lang.svg" alt="Hadoop" width={80} height={80} />
            <Image src="/DynamicSlider/backend/node_js-lang.svg" alt="Hadoop" width={80} height={80} />
            <Image src="/DynamicSlider/backend/go-lang.svg" alt="Hadoop" width={80} height={80} />
          </div>
        ),
      },
      {
        label: 'Cloud Databases, Warehouses and Storage',
        id: 'cloud',
        content: (
          <div className="grid grid-cols-4 gap-4">
            <Image src="/DynamicSlider/kafka-streams.svg" alt="Kafka Streams" width={80} height={80} />
            <Image src="/DynamicSlider/kafka-streams.svg" alt="Hive" width={80} height={80} />
            <Image src="/DynamicSlider/kafka-streams.svg" alt="Spark" width={80} height={80} />
            <Image src="/DynamicSlider/kafka-streams.svg" alt="Hadoop" width={80} height={80} />
          </div>
        ),
      },
      {
        label: 'Devops',
        id: 'Dev',
        content: (
          <div className="grid grid-cols-4 gap-4">
            <Image src="/DynamicSlider/kafka-streams.svg" alt="Kafka Streams" width={80} height={80} />
            <Image src="/DynamicSlider/kafka-streams.svg" alt="Hive" width={80} height={80} />
            <Image src="/DynamicSlider/kafka-streams.svg" alt="Spark" width={80} height={80} />
            <Image src="/DynamicSlider/kafka-streams.svg" alt="Hadoop" width={80} height={80} />
          </div>
        ),
      },
      {
        label: 'Platfroms',
        id: 'platfrom',
        content: (
          <div className="grid grid-cols-4 gap-4">
            <Image src="/DynamicSlider/kafka-streams.svg" alt="Kafka Streams" width={80} height={80} />
            <Image src="/DynamicSlider/kafka-streams.svg" alt="Hive" width={80} height={80} />
            <Image src="/DynamicSlider/kafka-streams.svg" alt="Spark" width={80} height={80} />
            <Image src="/DynamicSlider/kafka-streams.svg" alt="Hadoop" width={80} height={80} />
          </div>
        ),
      },
  ];

  

 

  return (
    <div className="w-full">
      <div
        ref={sliderRef}
        className="flex overflow-x-auto pb-2 border-b border-gray-300 no-scrollbar mt-3 whitespace-nowrap"
        onMouseDown={handleMouseDown}
      >
        {sliderOptions.map((option) => (
          <button
            key={option.id}
            className={`px-6 py-3 border text-[13px] md:text-xl xl:text-2xl rounded-lg font-semibold focus:outline-none mx-2 ${
              activeOption === option.id
                ? 'bg-blue-600 text-white border-blue-600'
                : 'text-black border-black'
            }`}
            onClick={() => handleClick(option.id)}
          >
            {option.label}
          </button>
        ))}
      </div>
      <div className="mt-6">
        {sliderOptions.find((option) => option.id === activeOption)?.content || <p>No content available</p>}
      </div>
    </div>
  );
};

  


export default DynamicSlider;
