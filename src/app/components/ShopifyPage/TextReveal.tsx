'use client'
import { motion } from 'framer-motion';

const textVariant = {
  hidden: { y: "100%", opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } },
};

export default function TextReveal() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <motion.h1
        className="text-4xl font-bold text-white"
        initial="hidden"
        animate="visible"
        variants={textVariant}
      >
        Hello, World!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab a nostrum blanditiis rem veniam tenetur enim nisi commodi nulla repellat! Fugit minus quam libero ut illum nemo, ratione assumenda! Aspernatur necessitatibus hic maxime autem quasi. A, quas optio aut architecto eaque vero eum sequi ipsam. Illo quod odio et.
      </motion.h1>
    </div>
  );
}
