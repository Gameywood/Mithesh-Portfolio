import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const Work = () => {
  return (
    <div className="w-full px-6 py-1 text-white flex flex-col items-center">
      <div className="w-[98vw] max-w-9xl bg-gradient-to-b from-purple-900/60 via-violet-950/60 to-gray-950/60 
        rounded-3xl p-10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] 
        backdrop-blur-md border border-white/10px z-10">

        <h1 className="text-[80px] md:text-[130px] font-normal text-gray-100 mb-12 text-center">My Work</h1>

        <div className="grid gap-8 md:grid-cols-2">

          <motion.div
            className="p-6 bg-black/30 rounded-xl shadow-md backdrop-blur-sm border border-white/10"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              src="Twitter_clone.png"
              alt="Twitter Clone"
              className="w-full h-fix object-cover rounded-lg mb-4"
            />
            <a href='https://twitter-clone-xb1j.onrender.com/' target="_blank" rel="noopener noreferrer">
              <h2 className="text-5xl font-semibold mb-2 text-white hover:text-purple-800 cursor-pointer">Twitter clone</h2>
            </a>
            <p className="text-gray-300">Twitter clone is cloned version of twitter.com,It include both backend and frontend logic. Features like userAuthentication,Hashing password,Creating account,storing userData,Editing profile,etc are build using MERN stack,This project is basically for my learning and i had taken youtube tutorial support to develop it,To learn how file actually build and manage in IT industry</p>
          </motion.div>


          <motion.div
            className="p-6 bg-black/30 rounded-xl shadow-md backdrop-blur-sm border border-white/10"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              src="Ammari_shoe_web.png"
              alt="Ammari Website"
              className="w-full h-fix object-cover rounded-lg mb-4"
            />
            <a href='https://ammari-shoe-website.vercel.app/' target="_blank" rel="noopener noreferrer">

              <h2 className="text-5xl font-semibold mb-2 text-white hover:text-purple-800 cursor-pointer">Ammari shoe website</h2>

            </a>
            <p className="text-gray-300">Ammari shoe website, is an UI based Ecommerce website,Mainly include Frontend related stuff.This project helped to enhance my frontend knowledge.</p>
          </motion.div>

         
        </div>
        <p className="mt-12 text-[50px] text-gray-300 text-lg text-center">More to add...</p>
      </div>
    </div>
  );
};

export default Work;
