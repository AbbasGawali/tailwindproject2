import React, { useContext } from "react";
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { BsFiletypeDoc } from "react-icons/bs";
import { MdDownloadForOffline } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoDiamond } from "react-icons/io5";
import { NavContext } from "../App";

const SmallNav = () => {
  const { toggleNav, setToggleNav } = useContext(NavContext);

  return (
    <>
      {toggleNav ? (
        <div className="md:hidden duration-500">
          <div className="links flex flex-col pt-4 px-6 gap-y-4  text-[0.8rem]">
            <a className="flex cursor-pointer hover:text-[#94a3b8]  text-[#334155]">
              <span className="pr-2">
                <FaFacebookSquare color="#94a3b8" size={20} />
              </span>
              SHARE
            </a>
            <a className="flex  cursor-pointer hover:text-[#94a3b8]">
              <span className="pr-2">
                <FaTwitter size={20} color="#94a3b8" />
              </span>
              TWEET
            </a>
            <a className="flex   cursor-pointer hover:text-[#94a3b8]">
              <span className="pr-2">
                <BsFiletypeDoc size={20} color="#94a3b8" />
              </span>
              DOCS
            </a>
            <a className="flex   cursor-pointer hover:text-[#94a3b8]">
              <span className="pr-2">
                <MdDownloadForOffline size={20} color="#94a3b8" />
              </span>
              DOWNLOAD
            </a>
            <a className="flex   cursor-pointer hover:text-[#94a3b8]">
              <span className="pr-2">
                <IoDiamond size={20} color="#94a3b8" />
              </span>
              DOWNLOAD DESIGNER
            </a>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default SmallNav;
