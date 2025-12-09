import React, { ReactNode } from 'react';

type CardProps = {
  icon: ReactNode;
  title: string;
  subtitle: string;
  buttonLabel: string;
  onButtonClick: () => void;
};

type ListItemProps = {
  Icon: ReactNode;
  title: string;
  description: string;
};

type CommonInfoSectionProps = {
  title: string;
  subtitle: string;
  card: CardProps;
  listItems: ListItemProps[];
};

const CommonInfoSection: React.FC<CommonInfoSectionProps> = ({
  title,
  subtitle,
  card,
  listItems,
}) => {
  return (
    <div className="w-full bg-white py-4 xl:py-16">
      <div className="text-center mb-8 w-[85%] mx-auto">
        <h2 className="text-2xl md:text-4xl font-semibold text-black text-left">
          {title}
        </h2>
      </div>

     
      <div className="w-[85%] mx-auto flex flex-col lg:flex-row gap-10">
     <div className="lg:w-1/2">
          <h2 className="text-[14px] md:text-[15px] lg:text-[17px] text-black mb-6">
            {subtitle}
          </h2>
          <div
            className="p-6 rounded-lg text-white lg:w-[50%] relative bg-slate-600"
            style={{
              backgroundImage:
                "url('https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/appinventiv-mask-new.svg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="text-4xl mb-4">{card.icon}</div>
            <h3 className="text-xl lg:text-xl font-bold mb-2">{card.title}</h3>
            <p className="text-sm mb-4">{card.subtitle}</p>
            <button
              className="bg-blue-600 text-xs xl:text-[15px] px-4 py-2 my-5 rounded-md text-white hover:bg-blue-700 transition"
              onClick={card.onButtonClick}
            >
              {card.buttonLabel}
            </button>
          </div>
        </div>

        <div className="lg:w-1/2 overflow-hidden border-b-2">
          <div className="space-y-4 max-h-[500px] overflow-y-scroll custom-scroll">
            {listItems.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="text-2xl">{item.Icon}</div>
                <div>
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonInfoSection;
