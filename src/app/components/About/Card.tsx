// components/Card.tsx
'use client'
import { motion } from "framer-motion";



interface CardProps {
    title: string;
    subtitle: string;
    stats: string[];
    buttonText: string;
    bgColor: string;
    expandDirection: 'right' | 'left' |any;
  }
  
const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  stats,
  buttonText,
  bgColor,
  expandDirection
}) => {
  return (
    <motion.div
      className={`relative h-full ${bgColor} p-8 rounded-2xl transition-all duration-500`}
      whileHover={{ 
        scale: 1.05,
        zIndex: 20,
        flex: 2 
      }}
    >
      <div className="flex flex-col h-full justify-between">
        <div>
          <h2 className="text-4xl font-bold text-white mb-2">{title}</h2>
          <p className="text-xl text-white/90 mb-8">{subtitle}</p>
          
          <div className="space-y-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-white/80"
              >
                {stat}
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 bg-white text-black px-6 py-3 rounded-full font-semibold 
                   hover:shadow-lg transition-all duration-300"
        >
          {buttonText}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Card;
