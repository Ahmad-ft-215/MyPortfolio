import React from "react";
// import ANTHRO from '../assets/Anthro.png';
// import DINO from '../assets/dino.png';
import GROWW from '../assets/groww.png';
import SHOPBOP from '../assets/shopbop.png';
import INTERN from '../assets/intern.png';
//import TXTUTILS from '../assets/txtutils.png';

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen bg-[#0a192f] text-gray-300 ">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-800">
            Work
          </p>
          <p className="py-6">Check some of my recent work</p>
        </div>

{/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

        {/* grid item */}

        <div
            style={{ backgroundImage: `url(${SHOPBOP})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Shopbop Clone
              </span>
              <div className="pt-8 text-center">
                <a href="https://shopbop-clone-project.netlify.app/" target='_blank' rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Ahmad-ft-215/Shopbop-Clone-Project" target='_blank' rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${GROWW})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                E-commerce Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://astounding-empanada-72ca7f.netlify.app/" target='_blank' rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Parth-Bisht/Team-GROWW" target='_blank' rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${INTERN})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Intern Theory
               </span>
              <div className="pt-8 text-center">
                <a href="https://www.interntheory.com/" target='_blank' rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Ahmad-ft-215/Intern-Theroy" target='_blank' rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Work;
