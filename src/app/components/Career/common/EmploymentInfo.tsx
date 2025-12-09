import React from 'react';

interface EmploymentInfoProps {
  data: {
    icon: React.ReactNode;
    label: string;
    value: string;
  }[];
}

const EmploymentInfo: React.FC<EmploymentInfoProps> = ({ data }) => (
  <div className="p-3 sm:p-5 rounded-lg shadow-lg mb-6 sm:mb-8 border border-blue-200">
    <h2 className="text-sm sm:text-[16px] font-semibold mb-2 sm:mb-4 pb-2 border-b-2 border-blue-400 text-blue-700">
      Employment Information
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {data.map((info, index) => (
        <div className="flex items-center p-2" key={index}>
          <div className="text-blue-500 text-sm sm:text-[10px] mr-4">{info.icon}</div>
          <div>
            <span className="font-semibold text-gray-800 text-[14px]">{info.label} </span>
            <span className="text-gray-600 text-[13px]">{info.value}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default EmploymentInfo;
