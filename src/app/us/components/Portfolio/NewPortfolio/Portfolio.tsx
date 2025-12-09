'use client';
import { useState } from "react";
import { FiFilter } from "react-icons/fi";
import { categories, data } from "../data/datas";

type Category = keyof typeof data;

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState<Category>("All");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const combinedData = Object.keys(data)
        .filter((key) => key !== "All")
        .flatMap((key) => data[key as Category]);

    const filteredData = activeCategory === "All" ? combinedData : data[activeCategory];

    return (
        <div className="min-h-screen bg-gray-50 px-2 lg:px-8 mx-auto mt-24">
           
            <div className="flex flex-col md:flex-row justify-between md:justify-center items-center gap-4 py-6 bg-white px-4">
              
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 md:hidden"
                >
                    <FiFilter size={24} />
                    <span className="font-medium text-sm">Our Recent Projects</span>
                </button>

                {/* Filter Categories */}
                <div
                    className={`flex flex-col md:flex-row gap-4 md:gap-8 ${
                        isMenuOpen ? "block" : "hidden"
                    } md:block md:max-h-full scrollbar-hide`}
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => {
                                setActiveCategory(category as Category);
                                setIsMenuOpen(false); // Close menu after selection
                            }}
                            className={`relative px-4 py-2 text-base lg:text-lg font-bold border-b-2 ${
                                activeCategory === category
                                    ? "text-black border-orange-400"
                                    : "text-gray-600 border-transparent"
                            } hover:text-black hover:border-orange-400`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
                {filteredData.map((item) => (
                    <a
                        key={item.id}
                        href={item.link}
                        className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="h-62 w-full object-cover"
                        />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
