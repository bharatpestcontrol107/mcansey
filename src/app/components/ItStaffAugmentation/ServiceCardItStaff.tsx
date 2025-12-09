import React from 'react';

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
};

export default function ServiceCardItStaff({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="rounded-2xl p-6 flex flex-col h-[60%] border border-zinc-300 hover:bg-gradient-to-r transform transition-all duration-300">
      <div className="bg-blue-600 h-10 w-10 md:w-12 md:h-12 xl:w-14 xl:h-14 rounded-lg flex items-center justify-center mb-6 hover:bg-blue-200">
        {icon}
      </div>
      <h2 className="text-2xl] font-semibold mb-4 line-clamp-2">
        {title}
      </h2>
      <p className="flex-grow text-sm">{description}</p>
    </div>
  );
}
