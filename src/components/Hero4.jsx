import React from "react";
import reactimg from "../assets/img/react.jpg";
import vue from "../assets/img/vue.jpg";
import angular from "../assets/img/angular.jpg";
import js from "../assets/img/js.png";

import { MdOutlineArchitecture } from "react-icons/md";
const Hero4 = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-full pt-8 md:pt-0 md:min-h-screen md:items-center px-4 md:px-16 w-full   bg-cgray2">
      <div className="flex flex-col md:flex-row gap-6">
        <div className=" ">
          <div className="cards w-full md:w-[12rem] xl:w-[20rem] rounded-xl h-[15rem] md:h-[23rem]  xl:h-[16rem] flex flex-col items-center justify-center bg-[#0ea5e9]">
            <img className="w-[4rem] rounded-full" src={reactimg} alt="" />
            <h2 className="text-[1.2rem] text-white font-semibold py-2">
              ReactJs
            </h2>
            <p className="text-center text-cgray2 w-[80%] ">
              A JavaScript library for building user interfaces maintaned by
              Facebook and community of developers.
            </p>
          </div>
          <div className="cards w-full md:w-[12rem] xl:w-[20rem] rounded-xl h-[15rem] md:h-[23rem]  xl:h-[16rem] mt-6 flex flex-col items-center justify-center bg-[#10b981] ">
            <img className="w-[4rem] rounded-full" src={vue} alt="" />
            <h2 className="text-[1.2rem] text-white font-semibold py-2">
              View.Js
            </h2>
            <p className="text-center text-cgray2 w-[80%]">
              An open-source Model–view–viewmodel JavaScript framework for
              building user interfaces.
            </p>
          </div>
        </div>
        <div className="mt-2 md:mt-8">
          <div className="cards w-full md:w-[12rem] xl:w-[20rem] rounded-xl h-[15rem] md:h-[23rem]  xl:h-[16rem]  flex flex-col items-center justify-center bg-[#f97316] ">
            <img className="w-[4rem] rounded-full" src={js} alt="" />
            <h2 className="text-[1.2rem] text-white font-semibold py-2">
              Javascript
            </h2>
            <p className="text-center text-cgray2 w-[80%]">
              Object-oriented programming language that conforms to the
              ECMAScript specification.
            </p>
          </div>
          <div className="cards w-full md:w-[12rem] xl:w-[20rem] rounded-xl h-[15rem] md:h-[23rem]  xl:h-[16rem] mt-6 flex flex-col items-center justify-center bg-[#dc2626]">
            <img className="w-[4rem] rounded-full" src={angular} alt="" />
            <h2 className="text-[1.2rem] text-white font-semibold py-2">
              Angular
            </h2>
            <p className="text-center text-cgray2 w-[80%]">
              a JavaScript-based open-source front-end web framework mainly
              maintained by Google.
            </p>
          </div>
        </div>
      </div>
      <div className="md:ml-20 py-24 md:py-0">
        <MdOutlineArchitecture
          size={50}
          className="bg-white p-2 text-cgray  rounded-full"
        />
        <h2 className="py-4 text-3xl  font-semibold ">Javascript Components</h2>
        <p className="font-light text-[1.2rem] pb-4  w-[90%]">
          In order to create a great User Experience some components require
          JavaScript. In this way you can manipulate the elements on the page
          and give more options to your users.
        </p>
        <p className="font-light text-[1.2rem] pb-4  w-[90%]">
          We created a set of Components that are dynamic and come to help you.{" "}
        </p>
        <div className="btns py-2 flex gap-2 flex-wrap  w-[90%] md:w-[80%] gap-y-4">
          <button className="text-cgray bg-white font-bold text-[0.8rem] px-2 rounded-xl">
            ALERTS
          </button>
          <button className="text-cgray bg-white font-bold text-[0.8rem] px-2 rounded-xl">
            DROPDOWNS
          </button>
          <button className="text-cgray bg-white font-bold text-[0.8rem] px-2 rounded-xl">
            MENUS
          </button>
          <button className="text-cgray bg-white font-bold text-[0.8rem] px-2 rounded-xl">
            MODALS
          </button>
          <button className="text-cgray bg-white font-bold text-[0.8rem] px-2 rounded-xl">
            NAVBARS
          </button>
          <button className="text-cgray bg-white font-bold text-[0.8rem] px-2 rounded-xl">
            POPOVERS
          </button>
          <button className="text-cgray bg-white font-bold text-[0.8rem] px-2 rounded-xl">
            TABS
          </button>
          <button className="text-cgray bg-white font-bold text-[0.8rem] px-2 rounded-xl">
            TOOLTIPS
          </button>
        </div>
        <button className="text-cgray     font-bold  cursor-pointer">
          View All {">>"}
        </button>
      </div>
      {/* <div className="btns py-2 flex gap-2 pb-4 "> */}
      {/* </div> */}
    </div>
  );
};

export default Hero4;
