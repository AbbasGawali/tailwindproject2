import React from "react";
import heroimg1 from "../assets/img/hero1.png";
const Hero1 = () => {
  return (
    <div>
      <div className="px-6 flex w-full min-h-[90vh] relative ">
        <img
          className="absolute top-0 right-0 xsm:w-[30%] md:w-[50%]  "
          src={heroimg1}
          alt=""
        />
        <div className="xsm:w-full md:w-[60%]  flex flex-col   justify-center bg-green-300">
          <h2 className="text-4xl mt-8 md:mt-0 text-left md:text-left font-semibold">
            A beautiful extension for TailwindCSS.
          </h2>
          <p className="text-cgray w-[90%] md:w-[70%]   text-[1.1rem]  my-4">
            Tailwind Starter Kit is Free and Open Source. It does not change or
            add any CSS to the already one from TailwindCSS. It features
            multiple HTML elements and it comes with dynamic components for
            ReactJS, Vue and Angular.
          </p>
          <div className="btns mt-4 flex gap-2 md:gap-4">
            <button className="uppercase bg-cred rounded-md duration-200 hover:shadow-cgray hover:shadow-lg text-white font-bold px-2 py-2  md:px-6 md:py-4 ">
              Get Started
            </button>
            <button className="uppercase bg-cblack rounded-md duration-200 hover:shadow-cgray hover:shadow-lg text-white font-bold px-6 py-2">
              github star
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
