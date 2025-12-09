import React from 'react';
import { IconType } from 'react-icons';

interface ServiceCardProps {
  Icon: IconType;
  title: React.ReactNode;
  description: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ Icon, title, description }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-white flex flex-col space-y-4">
      <Icon className="text-2xl text-white" />
      <h3 className= "text-base lg:text-xl font-semibold">{title}</h3>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  );
};

export default ServiceCard;
