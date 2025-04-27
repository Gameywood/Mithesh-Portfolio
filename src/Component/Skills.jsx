import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Array of gradients
const gradients = [
  "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500",
  "bg-gradient-to-r from-green-400 via-blue-500 to-purple-600",
  "bg-gradient-to-r from-indigo-500 via-blue-500 to-blue-700",
  "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
  "bg-gradient-to-r from-yellow-200 via-green-500 to-green-500",
  "bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600",
];

// Array of skills with image filenames
const skills = [
  { name: "HTML", img: "html.jpg" },
  { name: "Tailwind CSS", img: "TailwindCSS.jpg" },
  { name: "React.js", img: "react.jpg" },
  { name: "Node.js", img: "nodejs.jpg" },
  { name: "MongoDB", img: "MongoDB.jpg" },
  { name: "JavaScript", img: "JavaScript.jpg" },
];

const Skill = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="flex flex-col items-center justify-start min-h-screen pt-20 px-6">
   
      <div className="w-[98vw] max-w-8xl bg-gradient-to-b from-purple-900/20 via-violet-950/10 to-gray-950/60 
        rounded-3xl p-10 shadow-[0_8px_100px_0_rgba(0,0,0,5)] 
        backdrop-blur-xs border border-white/70 z-10"
      >
   
        <motion.h1
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[80px] md:text-[130px] font-normal text-gray-100 mb-12 text-center"
        >
          Skills
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-8xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              className={`flex flex-col items-center ${gradients[index % gradients.length]} backdrop-blur-md rounded-2xl shadow-xl overflow-hidden hover:scale-[1.03] transition-transform duration-300`}
            >
              <img
                src={`/public/${skill.img}`}
                alt={skill.name}
                className="w-100% h-fix  p-3 m-1   rounded-[40px]"
              />
              <div className="p-4 text-white text-center font-semibold text-xl">
                {skill.name}
              </div>
            </motion.div>
          ))}
        </div>

        
        <p className="mt-12 text-[50px] text-gray-300 text-lg text-center">More to add...</p>
      </div>
    </div>
  );
};

export default Skill;
