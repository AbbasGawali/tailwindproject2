import React from "react";
import { CgComponents } from "react-icons/cg";
import hero3 from "../assets/img/hero3.png";

const Hero3 = () => {
  return (
    <div className="w-full min-h-full md:min-h-screen items-center bg-cgray2 px-4 md:px-16 flex flex-col md:flex-row">
      <div className=" w-full md:w-[50%]">
        <CgComponents
          size={50}
          className="bg-white p-2 text-cgray  rounded-full"
        />
        <h2 className="py-4 text-3xl  font-semibold ">CSS Components</h2>
        <p className="font-light text-[1.2rem] pb-4 w-[90%]  md:w-[70%]">
          Every element that you need in a product comes built in as a
          component. All components fit perfectly with each other and can have
          different colours.
        </p>
        <div className="btns py-2 flex gap-2 w-[90%] md:w-[80%] flex-wrap gap-y-4">
          <button className="text-cgray bg-white font-bold text-[0.8rem] px-2 rounded-xl">
            BUTTONS
          </button>
          <button className="text-cgray bg-white font-bold text-[0.8rem] px-2 rounded-xl">
            INPUTS
          </button>
          <button className="text-cgray bg-white font-bold text-[0.8rem] px-2 rounded-xl">
            LABELS
          </button>
          <button className="text-cgray bg-white font-bold text-[0.8rem] px-2 rounded-xl">
            MENUS
          </button>
          <button className="text-cgray bg-white font-bold text-[0.8rem] px-2 rounded-xl">
            NAVBARS
          </button>
          <button className="text-cgray bg-white font-bold text-[0.8rem] px-2 rounded-xl">
            PAGINATION
          </button>

          <button className="text-cgray bg-white font-bold text-[0.8rem] px-2 rounded-xl">
            PROGRESSBARS
          </button>
          <button className="text-cgray bg-white font-bold text-[0.8rem] px-2 rounded-xl">
            TYPOGRAPHY
          </button>
        </div>
        <button className="text-cgray  pt-4 md:pt-0   font-bold  cursor-pointer">
          View All {">>"}
        </button>
      </div>
      <div className="pb-16  pt-8 md:pt-0   w-full md:w-[50%]">
        <img className="w-[90%]" src={hero3} alt="" />
      </div>
    </div>
  );
};

export default Hero3;
