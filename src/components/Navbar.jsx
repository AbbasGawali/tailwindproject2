import React, { useContext } from "react";
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { BsFiletypeDoc } from "react-icons/bs";
import { MdDownloadForOffline } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoDiamond } from "react-icons/io5";
import { NavContext } from "../App";
import SmallNav from "./SmallNav";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
  const { toggleNav, setToggleNav } = useContext(NavContext);

  return (
    <div className="flex z-20 justify-between px-6 w-full top-0 bg-white sticky py-6 font-bold  text-[0.9rem] my-box-shadow">
      <div className="logo cursor-pointer ">TAILWIND STARTER KIT</div>
      <div className="flex md:hidden">
        {toggleNav ? (
          <RxCross2
            onClick={
              toggleNav ? () => setToggleNav(false) : () => setToggleNav(true)
            }
            size={20}
          />
        ) : (
          <RxHamburgerMenu
            onClick={
              toggleNav ? () => setToggleNav(false) : () => setToggleNav(true)
            }
            size={20}
          />
        )}
      </div>

      <div className="links  hidden md:flex md:gap-4 lg:gap-6 text-[0.8rem]">
        <a className="flex cursor-pointer hover:text-[#94a3b8] justify-center items-center text-[#334155]">
          <span className="pr-2">
            <FaFacebookSquare color="#94a3b8" size={20} />
          </span>
          SHARE
        </a>
        <a className="flex justify-center items-center cursor-pointer hover:text-[#94a3b8]">
          <span className="pr-2">
            <FaTwitter size={20} color="#94a3b8" />
          </span>
          TWEET
        </a>
        <a className="flex justify-center items-center cursor-pointer hover:text-[#94a3b8]">
          <span className="pr-2">
            <BsFiletypeDoc size={20} color="#94a3b8" />
          </span>
          DOCS
        </a>
        <a className="flex justify-center items-center cursor-pointer hover:text-[#94a3b8]">
          <span className="pr-2">
            <MdDownloadForOffline size={20} color="#94a3b8" />
          </span>
          DOWNLOAD
        </a>
        <a className="flex justify-center items-center cursor-pointer hover:text-[#94a3b8]">
          <span className="pr-2">
            <IoDiamond size={20} color="#94a3b8" />
          </span>
          DOWNLOAD DESIGNER
        </a>
      </div>
    </div>
  );
};

export default Navbar;
