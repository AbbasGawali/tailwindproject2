import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
const Hero8 = () => {
  return (
    <div className="bg-cgray2 pt-8">
      <div className="flex bg-white items-center flex-col py-20  shadow-[6px_25px_61px_20px_#e2e8f0] mx-4 md:mx-0  rounded-xl  ">
        <h2 className="text-3xl md:text-4xl ">😍</h2>
        <h2 className="text-2xl md:text-3xl text-center md:text-left font-semibold">
          Do you love this Starter Kit?
        </h2>
        <p className="w-[90%] md:w-[55%] text-center text-[1.2rem] text-cgray py-4">
          Cause if you do, it can be yours now. Hit the buttons below to
          navigate to get the Free version for your next project. Build a new
          web app or give an old project a new look!
        </p>
        <div className="btns mt-4 flex flex-col md:flex-row gap-4">
          <button className="uppercase bg-cred rounded-md duration-200 hover:shadow-cgray hover:shadow-lg text-white font-bold px-6 py-2 ">
            Get Started
          </button>
          <button className="uppercase flex justify-center gap-2 items-center bg-cblack rounded-md duration-200 hover:shadow-cgray hover:shadow-lg text-white font-bold px-6 py-2">
            <AiOutlineGithub size={30} />
            <p>HELP WITH A STAR</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero8;
