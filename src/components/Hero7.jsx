import React from "react";
import { GoRepoForked } from "react-icons/go";

import landing from "../assets/img/landing.jpg";
import login from "../assets/img/login.jpg";
import profile from "../assets/img/profile.jpg";

const Hero7 = () => {
  return (
    <div className="w-full bg-cblack2 px-4 md:px-16  min-h-full md:min-h-screen ">
      <div className="flex flex-col md:flex-row gap-8 -translate-y-24">
        <div className="cards  flex flex-col items-center text-[1.2rem] text-cgray font-semibold  pt-8 rounded-lg">
          <h3>Login Page</h3>
          <img
            className=" duration-300 mt-4 hover:translate-y-[-1rem] rounded-xl  "
            src={login}
            alt=""
          />
        </div>
        <div className="cards flex flex-col items-center text-[1.2rem] text-cgray font-semibold  pt-8 rounded-lg">
          <h3>Profile Page</h3>
          <img
            className=" duration-300 mt-4 hover:translate-y-[-1rem] rounded-xl  "
            src={profile}
            alt=""
          />
        </div>
        <div className="cards flex flex-col items-center text-[1.2rem] text-cgray font-semibold  pt-8 rounded-lg">
          <h3>Landing Page</h3>
          <img
            className=" duration-300 mt-4 hover:translate-y-[-1rem] rounded-xl  "
            src={landing}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex flex-col">
          <div className="w-full mb-16 md:w-[70%] mt-40">
            <GoRepoForked
              size={55}
              className="bg-white p-4 text-cgray  rounded-full"
            />
            <h2 className="py-4 text-3xl  font-semibold text-white">
              Open Source
            </h2>
            <p className="font-light text-[1.2rem] pb-4 text-cgray2 w-full  md:w-[60%]">
              Since TailwindCSS is an open source project we wanted to continue
              this movement too. You can give this version a try to feel the
              design and also test the quality of the code!
            </p>
            <p className="font-light text-[1.2rem] pb-4  text-cgray2 w-full  md:w-[60%]">
              Get it free on Github and please help us spread the news with a
              Star!
            </p>

            <button className="uppercase mt-4 bg-cblack rounded-md duration-200 hover:shadow-cgray hover:shadow-lg text-white font-bold px-6 py-4">
              github star
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero7;
