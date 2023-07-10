import React from "react";
import { AiFillHome } from "react-icons/ai";
import {SiExpertsexchange} from "react-icons/si"
import {RiBankFill} from "react-icons/ri"
import {HiDocumentCheck} from "react-icons/hi2"
import {IoMdCall} from "react-icons/io"
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu-wrapper relative bottom-0 h-[100px] w-[550px] sm:w-full lg:w-[700px] sm:ml-[26%]  rounded-t-3xl mt-[125px] sm:mt-0">
      <div className="menu gap-[30px] sm:gap-[50px] fixed py-2 h-[100px] flex justify-center items-center w-auto">
        <div className="">
          <Link to="/" className="flex flex-col justify-center items-center hover:cursor-pointer  ease-in-out duration-300"><AiFillHome className="text-[30px] text-white" />
          <h3 >HOME</h3></Link>
        </div>
        <div className="">
          <Link to="/exchange" className="flex flex-col justify-center items-center hover:cursor-pointer  ease-in-out duration-300"><SiExpertsexchange className="text-[30px] text-white" />
          <h3>EXCHANGES</h3></Link>
        </div>
        <div className="">
          <a href="/#payment" className="flex flex-col justify-center items-center hover:cursor-pointer"><RiBankFill className="text-[33px] text-white" />
          <h3 className="text-center">PAYMENT</h3></a>
        </div>
        <div className="">
          <a href={"https://wa.me/917779996639?text=I%20want%20to%20know%20terms%20and%20conditions%20for%20betting%20account"} className="flex flex-col justify-center items-center hover:cursor-pointer"><HiDocumentCheck className="text-[30px] text-white" />
          <h3 className="text-center">T&C</h3></a>
        </div>
        <div className="">
          <a href={"https://wa.me/917779996639?text=I'm%20intrested%20to%20buy%20betting%20account"} className="flex flex-col justify-center items-center hover:cursor-pointer"><IoMdCall className="text-[30px] text-white" />
          <h3 className="text-center">CONTACT</h3></a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
