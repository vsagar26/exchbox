import React from "react";
import { home, tnc, contact, paymentmode, exchange } from "../assets";
import { AiFillHome } from "react-icons/ai";
import {SiExpertsexchange} from "react-icons/si"
import {RiBankFill} from "react-icons/ri"
import {HiDocumentCheck} from "react-icons/hi2"
import {IoMdCall} from "react-icons/io"
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu-wrapper bottom-0 h-[100px] w-full lg:w-[700px] sm:ml-[26%] flex justify-center items-center rounded-t-3xl mt-[125px] sm:mt-0">
      <div className="menu py-2 h-[100px] flex justify-center items-center w-auto">
        <div >
          <Link to="/" className="flex flex-col justify-center items-center hover:cursor-pointer  ease-in-out duration-300"><AiFillHome className="text-[30px] text-white" />
          <h3 >HOME</h3></Link>
        </div>
        <div>
          <Link to="/exchange" className="flex flex-col justify-center items-center hover:cursor-pointer  ease-in-out duration-300"><SiExpertsexchange className="text-[30px] text-white" />
          <h3>EXCHANGES</h3></Link>
        </div>
        <div >
          <a href="/#payment" className="flex flex-col justify-center items-center hover:cursor-pointer"><RiBankFill className="text-[33px] text-white" />
          <h3 className="text-center">PAYMENT</h3></a>
        </div>
        <div >
          <a href="" className="flex flex-col justify-center items-center hover:cursor-pointer"><HiDocumentCheck className="text-[30px] text-white" />
          <h3 className="text-center">T&C</h3></a>
        </div>
        <div >
          <a href={"https://wa.me/917779996639?text=I'm%20intrested%20to%20buy%20betting%20account"} className="flex flex-col justify-center items-center hover:cursor-pointer"><IoMdCall className="text-[30px] text-white" />
          <h3 className="text-center">CONTACT</h3></a>
        </div>
      </div>
    </div>
  );
};

export default Menu;