import React from 'react';


import Sidebar from './Component/Sidebar';
import Work from './Component/Work';
import Skills from './Component/Skills';
import About from './Component/About';
import Contact from './Component/Contact';

function App() {
  return (  

   
    <div
      className="App text-white overflow-y-scroll h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/Portfolio_bg.jpeg')" }}
    >

      <Sidebar />

      <div  id='home-section' className="pt-10">

        <section className="min-h-screen custom-SFPRODISPLAYBOLD font-light flex flex-col justify-end px-4 pt-16 pb-16 sm:px-10 md:px-20 sm:pt-24 sm:pb-32 md:pb-40">
          <h1 className="text-[15px]  sm:text-[40px] md:text-[40px] font-semibold ">
            Hello, Myself
          </h1>

          <h1 className="text-[50px] sm:text-[100px]    md:text-[130px] font-semibold leading-none -mb-2 sm:-mb-6 md:-mb-10 ">
            MITHESH
          </h1>

          <h1 className="text-[80px] custom-SFPRODISPLAYBLACKITALIC  sm:text-[120px] md:text-[200px]  font-extrabold   bg-gradient-to-r from-pink-500 to-indigo-400 bg-clip-text text-transparent leading-none">
            SHETTY
          </h1>

          <h1 className="text-[18px] custom-SFPRODISPLAYBOLD font-sans sm:text-[28px] md:text-[35px]  pl-1 sm:pl-2 md:pl-3 text-green-300">
            A Passionate &lt;Full Stack Web Developer/&gt;
          </h1>

          <div className="mt-10 flex flex-col sm:flex-row sm:space-x-10 space-y-4 sm:space-y-0 items-center">
            <a href="#about-section">
              <button
                className="bg-gradient-to-r from-pink-500 to-indigo-400 text-white cursor-pointer rounded-2xl h-11 w-32 text-base font-semibold
                  transition-all duration-300
                  hover:bg-white hover:text-transparent hover:bg-clip-text 
                  hover:from-pink-500 hover:to-indigo-400 
                  hover:bg-[length:100%] hover:bg-no-repeat
                  border border-gray-300 shadow-mdl
                  sm:h-12 sm:w-36 sm:text-lg
                  md:h-13 md:w-40 md:text-2xl">

                About me
              </button>
            </a>

            <a href="#contact-section">
              <button
                className="bg-gradient-to-r from-pink-500 to-indigo-400 text-white cursor-pointer rounded-2xl h-11 w-32 text-base font-semibold
                transition-all duration-300
                hover:bg-white hover:text-transparent hover:bg-clip-text 
                hover:from-pink-500 hover:to-indigo-400 
                hover:bg-[length:100%] hover:bg-no-repeat
                border border-gray-300 shadow-mdl
                sm:h-12 sm:w-36 sm:text-lg
                md:h-13 md:w-40 md:text-2xl">

                Contact me
              </button>
            </a>
          </div>

        </section>





        <section id="skills-section" className="min-h-screen px-4 py-10 custom-SFPRODISPLAYBOLD">
          <Skills />
        </section>


        <section id="work-section" className="min-h-screen px-4 py-10 custom-SFPRODISPLAYBOLD">
          <Work />
        </section>
        <section id="about-section" className="min-h-screen px-4 py-0 ">
          <About />
        </section>
        <section id="contact-section" className='min-h-screen  custom-SFPRODISPLAYBOLD'>

          <Contact />
        </section>
       


      </div>



    </div>
  );
}

export default App;
