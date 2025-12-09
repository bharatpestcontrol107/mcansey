// components/ProductFeatures.tsx
import Image from 'next/image';
import React from 'react';

const ProductFeatures: React.FC = () => {
  const features = [
    {
      titles: ["User Profile", "Customizable Recommendations"],
      descriptions: [
        "We employed a user profile feature specific to gender to make sure that the platform provides tailored diet suggestions that align with the differences between men and women. We included age, height and weight in the platform to evaluate the individualized caloric requirements and nutritional needs.",
        "By considering these inputs, the platform provides personalized recommendations that adjust to each user’s body composition and support their specific health goals."
      ],
      imageUrl: "/portfolio/1-7.png.webp",
      reverse: false,
    },
    {
      titles: ["Location", "Localized Diet Plans"],
      descriptions: [
        "We integrated capturing the location of the user to provide practical and realistic meal plans. Not all foods are universally available, so by accounting for geographical data, the platform recommends diets based on locally accessible ingredients.",
        "This improves adherence to the diet plan and also ensures that users can easily employ the suggestions in their daily routine to make the diet more sustainable."
      ],
      imageUrl: "/portfolio/7.png.webp",
      reverse: true,
    },
    {
      titles: ["Customization", "Personalized Diets"],
      descriptions: [
        "By focusing on personalized customization, the platform adapts to each user’s specific dietary needs, whether based on fitness goals, allergies, or preferences.",
        "This approach provides practical recommendations that align with long-term health objectives, ensuring that users receive a holistic and effective diet plan."
      ],
      imageUrl: "/portfolio/3-4.png.webp",
      reverse: false,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-12">
        <h2 className="text-[14px]  text-xl md:text-2xl font-semibold text-black mb-6  xl:max-w-[50%]">
          Here’s how we helped the client amplify their product's features & capabilities:
        </h2>
      </div>
      
      {features.map((feature, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${feature.reverse ? 'md:flex-row-reverse' : ''} items-center mb-12`}
        >
          <div className="md:w-1/2 p-4">
            {feature.titles.map((title, i) => (
              <div key={i} className="mb-4">
                <h3 className="text-xl font-semibold text-black mb-2">{title}</h3>
                <p className= "text-sm text-gray-700 leading-relaxed">{feature.descriptions[i]}</p>
              </div>
            ))}
          </div>
          <div className="md:w-1/2 p-4">
            <Image src={feature.imageUrl} alt={feature.titles[0]} width={600} height={400} className="rounded-lg" />
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductFeatures;
