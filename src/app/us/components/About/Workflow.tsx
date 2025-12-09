'use client'
import { useEffect, useRef, useState } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import Image from 'next/image';
import styles from './HorizontalScroll.module.css'; // Optional custom CSS

const images = [
  '/path/to/your/first-image.jpg',
  '/path/to/your/second-image.jpg'
];

const HorizontalScroll: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const x = useTransform(scrollYProgress, [0, 1], [0, -500]); // Adjust range as needed

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      <motion.div
        className="flex space-x-4"
        style={{ x }}
      >
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Scroll image ${index + 1}`}
            width={800} // Adjust dimensions as needed
            height={500}
            className="rounded-lg shadow-lg"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default HorizontalScroll;
