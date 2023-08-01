import React from "react";
import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiOutlineDribbble,
  AiOutlineGithub,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="px-4 md:px-16 bg-[#e2e8f0]  pt-36">
      <div className="flex flex-col md:flex-row">
        <div className=" flex-1">
          <h1 className="text-3xl font-semibold">Let's keep in touch!</h1>
          <p className="text-[1.2rem] text-footer">
            Find us on any of these platforms, we respond 1-2 business days.
          </p>
          <div className="links py-4 flex gap-2">
            <AiOutlineTwitter
              color="#38bdf8"
              className="p-2 bg-white rounded-full"
              size={40}
            />
            <AiFillFacebook
              className="p-2 bg-white rounded-full"
              size={40}
              color="#0299d5"
            />
            <AiOutlineDribbble
              className="p-2 bg-white rounded-full"
              size={40}
              color="#f58ac4"
            />
            <AiOutlineGithub className="p-2 bg-white rounded-full" size={40} />
          </div>
          <p className="text-footer font-semibold">
            Currently v1.1.0. Code licensed MIT, docs CC BY 4.0.
          </p>
        </div>
        <div className="flex mt-8 md:mt-0 flex-col md:flex-row flex-1 font-semibold">
          <div className="flex-1 text-footer">
            <h6 className="text-footer">USEFUL LINKS</h6>
            <p>About Us</p>
            <p>Blog</p>
            <p>Github</p>
            <p>Free Products</p>
          </div>
          <div className="flex-1 mt-8 md:mt-0 text-footer">
            <h6 className="text-footer">OTHER RESOURCES</h6>

            <p> MIT License</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact Us</p>
          </div>
        </div>
      </div>
      <p className="text-center mt-8 md:mt-4 font-semibold border-t-2 border-t-footer py-6 text-footer">
        Copyright © 2023 Tailwind Starter Kit by Creative Tim cloned by Abbas
        Gawali.
      </p>
    </div>
  );
};

export default Footer;
