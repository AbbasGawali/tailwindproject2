import React from "react";
import hero2 from "../assets/img/hero2.jpg";
import { CgComponents } from "react-icons/cg";
import { RiPagesLine } from "react-icons/ri";
import { MdOutlineArchitecture } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
const Hero2 = () => {
  return (
    <div className="w-full min-h-full md:minh-h-screen flex items-center  flex-col lg:flex-row px-2 md:px-16 pb-20 mt-24 md:my-clip bg-cgray2 ">
      <div className="flex flex-col items-center justify-center  ">
        <div className=" w-[90%] md:w-[28rem] ">
          <div className="rounded-t-xl mt-8 md:mt-0 ">
            <img className="rounded-t-xl " src={hero2} alt="" />
            <div className="p-8 my-clip rounded-b-xl bg-card z-30 pt-20 text-white mt-[-4rem]">
              <h3 className="font-bold  text-[1.2rem]  ">
                Great for your awesome project
              </h3>
              <p className="pt-4">
                Putting together a page has never been easier than matching
                together pre-made components. From landing pages presentation to
                login areas, you can easily customise and built your pages.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col items-center    justify-center mt-8  lg:mt-10 xl:mt-0 lg:pl-40 ">
        <div className="flex     gap-y-4 md:gap-y-0 flex-col md:flex-row  items-center lg:justify-normal ">
          <div className="data w-[80%] md:w-[40%] md:mr-8">
            <CgComponents size={40} className="bg-white mx-auto  md:mx-0 p-2   rounded-full" />

            <h3 className="font-semibold text-center md:text-left text-card text-[1.4rem] pt-4">
              CSS Components
            </h3>
            <p className="text-center md:text-left">
              Tailwind Starter Kit comes with a huge number of Fully Coded CSS
              components.
            </p>
          </div>
          <div className="data  w-[80%] md:w-[40%] ">
            <RiPagesLine size={40} className="bg-white p-2 mx-auto  md:mx-0  rounded-full" />

            <h3 className="font-semibold text-center md:text-left text-card text-[1.4rem] pt-4">
              CSS Components
            </h3>
            <p className="text-center md:text-left">
              Tailwind Starter Kit comes with a huge number of Fully Coded CSS
              components.
            </p>
          </div>
        </div>
        <div className="flex gap-y-4 md:gap-y-0 flex-col md:flex-row mt-8 items-center lg:justify-normal">
          <div className="data w-[80%] md:w-[40%] md:mr-8">
            <MdOutlineArchitecture
              size={40}
              className="bg-white p-2 mx-auto  md:mx-0  rounded-full"
            />

            <h3 className="font-semibold text-center md:text-left text-card text-[1.4rem] pt-4">
              CSS Components
            </h3>
            <p className="text-center md:text-left">
              Tailwind Starter Kit comes with a huge number of Fully Coded CSS
              components.
            </p>
          </div>
          <div className="data w-[80%] md:w-[40%] ">
            <IoDocumentText size={40} className="bg-white mx-auto  md:mx-0 p-2  rounded-full" />

            <h3 className="font-semibold text-center md:text-left text-card text-[1.4rem] pt-4">
              CSS Components
            </h3>
            <p className="text-center md:text-left">
              Tailwind Starter Kit comes with a huge number of Fully Coded CSS
              components.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
