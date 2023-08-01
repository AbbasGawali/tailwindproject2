import React from "react";
import hero5 from "../assets/img/documentation.png";
import { AiFillHtml5 } from "react-icons/ai";
import { GiPaperPlane } from "react-icons/gi";
import { PiFingerprintLight } from "react-icons/pi";
import { IoDocumentText } from "react-icons/io5";
const Hero5 = () => {
  return (
    <div className="w-full min-h-full md:min-h-screen flex-col md:flex-row md:items-center bg-cgray2 px-4 md:px-16 flex">
      <div className="w-full md:w-[50%]">
        <IoDocumentText
          size={50}
          className="bg-white p-2 text-cgray  rounded-full"
        />
        <h2 className="py-4 text-3xl  font-semibold ">Complex Documentation</h2>
        <p className="font-light text-[1.2rem] pb-4 w-[90%] md:w-[70%]">
          This extension comes a lot of fully coded examples that help you get
          started faster. You can adjust the colors and also the programming
          language. You can change the text and images and you're good to go.
        </p>

        <div className="details flex items-center gap-2">
          <PiFingerprintLight
            size={30}
            className="bg-white p-[4px]  text-cgray  rounded-full"
          />
          <p>Built by Developers for Developers</p>
        </div>
        <div className="details flex items-center gap-2 my-4">
          <AiFillHtml5
            size={30}
            className="bg-white p-[4px]  text-cgray  rounded-full"
          />
          <p>Carefully crafted code for Components</p>
        </div>
        <div className="details flex items-center  gap-2">
          <GiPaperPlane
            size={30}
            className="bg-white p-[4px]  text-cgray  rounded-full"
          />
          <p>Dynamic Javascript Components</p>
        </div>
        <button className="text-cgray   mt-4  font-bold  cursor-pointer">
          View All {">>"}
        </button>
      </div>
      <div className="mt-8 md:mt-0 w-full md:w-[55%]">
        <img className="w-[90%] rotated my-box-shadow " src={hero5} alt="" />
      </div>
    </div>
  );
};

export default Hero5;
