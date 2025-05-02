import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AboutPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className=" mb-10 flex flex-col items-center justify-start px-6 ">
      {/* Glassmorphism Background Section */}
      <div className="w-[98vw] max-w-8xl  bg-gradient-to-b from-purple-900/60 via-violet-950/60 to-gray-950/60 
      rounded-3xl p-10 shadow-[0_8px_100px_0_rgba(0,0,0,5)] backdrop-blur-md border border-white/70 z-10">

        <motion.h1
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[80px] md:text-[130px] font-normal text-gray-100 mb-12 text-center custom-SFPRODISPLAYBOLD"
        >
          About Me
        </motion.h1>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10 items-center">

        <div className="flex justify-center mb-6 md:mb-0">
            <img
              src="/Portfolio_about_img.jpeg"
              alt="Your Name"
              className="w-60 h-90 sm:w-60 sm:h-60 md:w-[520px] md:h-[700px] rounded-full shadow-lg object-cover"

            />
          </div>

          <div className="w-full md:w-[90%] lg:w-full bg-indigo-900/60 bg-opacity-30 backdrop-blur-lg p-4 sm:p-6 rounded-xl shadow-lg border border-white/50">
            <p className="text-white text-base sm:text-lg md:text-2xl mb-6 leading-relaxed  custom-SFPRODISPLAYMEDIUM">
              Hi, I'm Mithesh — a passionate Full Stack Web Developer who loves turning ideas into interactive digital experiences.

              With hands-on experience building scalable web apps , I specialize in crafting both frontend and backend solutions. Some of my notable projects include a Twitter Clone, where I implemented real-time posts, likes, and user auth  and Ammari Shoes, a sleek eCommerce site showcasing  product listings and various other UI features

              From pixel-perfect UIs to robust APIs, I enjoy bringing full-fledged applications to life using technologies like React, Node.js,Express Js, MongoDB, and Tailwind CSS.

              I’m always exploring new tech, solving real-world problems, and pushing the boundaries of what I can build on the web.


            </p>

            <a
              href="./src/assets/pdf/Mithesh Portfolio.pdf" 
              download
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
            >
              Download Resume
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;