/* eslint-disable jsx-a11y/img-redundant-alt */

import React from "react";
import ANTHRO from "../assets/Shopbop.png";
import DINO from "../assets/frazzo.png";
import STREAMLINE from "../assets/intern.png";
import QUIZZ from "../assets/groww.png";
import MAGIC from "../assets/Max.png";
import { FaEye, FaGithub } from "react-icons/fa";

const Work = () => {
  return (
    <div
      name="work"
      className="w-full  sm:h-[1600px] md:h-[1300px] bg-[#0a192f] text-gray-300 "
    >
      <div className="sm:max-w-[720px] md:max-w-[1000px] lg:max-w-[1250px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-800">
            Projects
          </p>
          <p className="py-6">Check some of my recent work</p>
        </div>

        {/* Container */}

        <div className=" w-full grid grid-cols-1 place-content-center sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          <div className=" bg-[#dce0ee] rounded-2xl shadow-md shadow-gray-400 hover:scale-110 duration-500">
            <img
              className=" rounded-tr-2xl  rounded-tl-2xl mx-auto my-auto"
              src={STREAMLINE}
              alt="Intern Theory"
            />
            <div className="px-3 my-4">
              <p className="font-bold  text-left text-gray-600">Intern Theory (Clone)</p>
              <p className="my-2 text-sm text-left text-gray-500">
              Inspiration from online purchasing courses to Upgrade skills and also find Internships in different cities.
              </p>
              <p className="my-2 text-sm text-lef text-gray-500 inline">
                <span className=" text-sm text-left  mr-2 font-bold text-[#0a192f] ">
                  Tech Stack:
                </span>{" "}
                HTML | CSS | Javascript | Bootstrap
              </p>
              <div className="flex flex-row pt-8 pb-4 justify-between w-full text-gray-500">
                <a href="https://elated-shaw-64a95c.netlify.app" target="_blank" rel="noreferrer">
                  <button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#1b3050] rounded-xl bg-[#0a192f] ">
                    <span className="text-white text-lg ">Live</span>
                    <FaEye className="mt-[6px] mb-[6px] " />
                  </button>
                </a>
                <a
                  href="https://github.com/Ahmad-ft-215/Intern-Theroy"
                  target="_blank" rel="noreferrer"
                >
                  <button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#1b3050] rounded-xl bg-[#0a192f] ">
                    <span className="text-white text-lg ">Repo</span>
                    <FaGithub className="mt-[6px] mb-[6px] " />
                  </button>
                </a>
              </div>
            </div>
          </div>


          <div className=" bg-[#dce0ee] rounded-2xl shadow-md shadow-gray-400 hover:scale-110 duration-500">
            <img
              className=" rounded-tr-2xl  rounded-tl-2xl mx-auto my-auto"
              src={QUIZZ}
              alt="Sugar Cosmetics image"
            />
            <div className="px-3 my-4">
              <p className="font-bold  text-left text-gray-600">Groww (Clone)</p>
              <p className="my-2 text-sm text-left text-gray-500">
              Inspiration from a stock purchasing web-application where you can buy and sell stocks.
              </p>
              <p className="my-2 text-sm text-lef text-gray-500 inline">
                <span className=" text-sm text-left  mr-2 font-bold text-[#0a192f] ">
                  Tech Stack:
                </span>{" "}
                HTML | CSS | Javascript | Node.js{" "}
              </p>
              <div className="flex flex-row pt-8 pb-4 justify-between w-full text-gray-500">
                <a href="https://astounding-empanada-72ca7f.netlify.app/" target="_blank" rel="noreferrer">
                  <button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#1b3050] rounded-xl bg-[#0a192f] ">
                    <span className="text-white text-lg ">Live</span>
                    <FaEye className="mt-[6px] mb-[6px] " />
                  </button>
                </a>
                <a href="https://github.com/Ahmad-ft-215/Team-GROWW" target="_blank" rel="noreferrer">
                  <button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#1b3050] rounded-xl bg-[#0a192f] ">
                    <span className="text-white text-lg ">Repo</span>
                    <FaGithub className="mt-[6px] mb-[6px] " />
                  </button>
                </a>
              </div>
            </div>
          </div>



          <div className=" bg-[#dce0ee] rounded-2xl shadow-md shadow-gray-400 hover:scale-110 duration-500">
            <img
              className=" rounded-tr-2xl  rounded-tl-2xl mx-auto my-auto"
              src={MAGIC}
              alt="kimaye image"
            />
            <div className="px-3 my-4">
              <p className="font-bold  text-left text-gray-600">Max Fashion (Clone)</p>
              <p className="my-2 text-sm text-left text-gray-500">
              Inspiration from an e-commerce website where you can buy different varities of clothes and accessories.
              </p>
              <p className="my-2 text-sm text-lef text-gray-500 inline">
                <span className=" text-sm text-left  mr-2 font-bold text-[#0a192f] ">
                  Tech Stack:
                </span>{" "}
                NextJS | Bootstrap | Rest API | ExpressJS | MongoDB | NodeJS{" "}
              </p>
              <div className="flex flex-row pt-8 pb-4 justify-between w-full text-gray-500">
                <a
                  href="https://clone-of-maxfashion-rushig777.vercel.app/"
                  target="_blank" rel="noreferrer"
                >
                  <button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#1b3050] rounded-xl bg-[#0a192f] ">
                    <span className="text-white text-lg ">Live</span>
                    <FaEye className="mt-[6px] mb-[6px] " />
                  </button>
                </a>
                <a
                  href="https://github.com/Ahmad-ft-215/festive-crayon-1023"
                  target="_blank" rel="noreferrer"
                >
                  <button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#1b3050] rounded-xl bg-[#0a192f] ">
                    <span className="text-white text-lg ">Repo</span>
                    <FaGithub className="mt-[6px] mb-[6px] " />
                  </button>
                </a>
              </div>
            </div>
          </div>


          <div className=" bg-[#dce0ee] rounded-2xl shadow-md shadow-gray-400 hover:scale-110 duration-500">
            <img
              className=" rounded-tr-2xl  rounded-tl-2xl mx-auto my-auto"
              src={ANTHRO}
              alt="AnthroPologie"
            />
            <div className="px-3 my-4">
              <p className="font-bold  text-left text-gray-600">
                Shopbop Clone (Clone)
              </p>
              <p className="my-2 text-sm text-left text-gray-500">
              Inspiration from an International e-commerce website where you can buy different products.
              </p>
              <p className="my-2 text-sm text-lef text-gray-500 inline">
                <span className=" text-sm text-left  mr-2 font-bold text-[#0a192f] ">
                  Tech Stack:
                </span>
                ReactJS | Redux Toolkit | Bootstrap | Rest API | NodeJS
              </p>
              <div className="flex flex-row pt-8 pb-4 justify-between w-full text-gray-500">
                <a
                  href="https://shopbop-clone-project.netlify.app/"
                  target="_blank" rel="noreferrer"
                >
                  <button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#1b3050] rounded-xl bg-[#0a192f] ">
                    <span className="text-white text-lg ">Live</span>
                    <FaEye className="mt-[6px] mb-[6px] " />
                  </button>
                </a>
                <a
                  href="https://github.com/Ahmad-ft-215/Shopbop-Clone-Project"
                  target="_blank" rel="noreferrer"
                >
                  <button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#1b3050] rounded-xl bg-[#0a192f] ">
                    <span className="text-white text-lg ">Repo</span>
                    <FaGithub className="mt-[6px] mb-[6px] " />
                  </button>
                </a>
              </div>
            </div>
          </div>



          <div className="bg-[#dce0ee] rounded-2xl shadow-md shadow-gray-400 hover:scale-110 duration-500">
            <img
              className=" rounded-tr-2xl  rounded-tl-2xl mx-auto my-auto"
              src={DINO}
              alt="frazzo"
            />
            <div className="px-3 my-4">
              <p className=" font-bold  text-left text-gray-600">Frazzo Clone (Clone)</p>
              <p className="my-2 text-sm text-left  text-gray-500">
              Inspiration from an online platform that allows customer to get farm fresh produce directly from farmers. With Fraazo you can get it delivered at your doorstep!
              </p>
              <p className="my-2 text-sm text-left   text-gray-500 inline">
                <span className=" text-sm text-left  mr-2 font-bold text-[#0a192f] ">
                  Tech Stack:
                </span>
                React | Redux Toolkit | Chakra UI | MongoDB | Rest Api | NodeJS{" "}
              </p>
              <div className="flex flex-row pt-8 pb-4 justify-between w-full text-gray-500">
                <a
                  href="https://fraazo-website-clone.netlify.app/"
                  target="_blank" rel="noreferrer"
                >
                  <button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#1b3050] rounded-xl bg-[#0a192f] ">
                    <span className="text-white text-lg ">Live</span>
                    <FaEye className="mt-[6px] mb-[6px] " />
                  </button>
                </a>
                <a
                  href="https://github.com/Ahmad-ft-215/cruel-statement-6938"
                  target="_blank" rel="noreferrer"
                >
                  <button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#1b3050] rounded-xl bg-[#0a192f] ">
                    <span className="text-white text-lg ">Repo</span>
                    <FaGithub className="mt-[6px] mb-[6px] " />
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
