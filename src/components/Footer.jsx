import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { logo, responsible } from "../assets";
import { icons } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-[#fff] w-full pt-12">
       
      <div className="text-[#F41CB2]">
        <div className="pt-5 pb-5 flex flex-row justify-center items-center">
          <div className="row flex flex-row gap-x-[120px]">
            <div className="mb-2">
              <div className="flex flex-row gap-x-[100px]">
                <div >
                  <a href="index.html">
                    <img src={logo} className="h-[70px] my-5" alt="logo" />
                  </a>
                  <h3>
                    This site is most trusted and secure
                    <br />
                    exchange site in the world.
                  </h3>
                </div>
                
                <div>
                  <h3 className="text-[25px] text-black pb-3">Games</h3>
                  <ul>
                    <li className="py-1 hover:text-black">
                      <a href="#">Cricket</a>
                    </li>
                    <li className="py-1 hover:text-black">
                      <a href="#">Football</a>
                    </li>
                    <li className="py-1 hover:text-black">
                      <a href="#">Tennis</a>
                    </li>
                    <li className="py-1 hover:text-black">
                      <a href="#">Horse Racing</a>
                    </li>
                    <li className="py-1 hover:text-black">
                      <a href="#">Live Casino</a>
                    </li>
                  </ul>
                </div>
                <div >
                  <h3 className="text-[25px] text-black pb-3">
                    Payment Partners
                  </h3>
                  <div
                    className={` mt-3 flex flex-col sm:flex-col items-center  `}
                  >
                    {icons.map((icons, index) => (
                      <img
                        src={icons.img}
                        key={icons.id}
                        alt="img"
                        className={`sm:py-3 ml-[200px] sm:ml-3 pt-3 sm:pt-0 ${
                          index === icons.length - 1 ? "mb-0" : "mb-12 sm:mb-0"
                        } sm:mt-4 h-[50px]`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-30">
              <div>
                <h3 className="text-[22px] text-black pb-5">
                  Security & Game Integrity
                </h3>
                <img src={responsible} alt="img" className="h-[50px]" />
              </div>
              <div className="py-2 ">
                <div>
                  <span className="text-[22px] text-black pt-8 pb-12">
                    Follow us
                  </span>
                </div>
                <div className="flex flex-row mt-4">
                  <a href="#">
                    <BsFacebook className="mr-2 text-[25px]" />
                  </a>
                  <a href="#">
                    <AiFillTwitterCircle className=" mx-2 text-[25px]" />
                  </a>
                  <a href="#">
                    <AiFillInstagram className=" mx-2 text-[25px]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <div className="copyright-area pb-28 flex flex-col justify-center items-center pt-6">
        <div>
          <ul className="flex flex-row gap-x-5 ">
            <li>
              <a href="#" className="hover:text-[#F41CB2]">
                Home |{" "}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#F41CB2]">
                Exchanges |{" "}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#F41CB2]">
                Payment Modes |{" "}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#F41CB2]">
                Terms & Conditions |{" "}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#F41CB2]">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center mt-3">
          <p>
            Copyright &copy; 2023, All Right Reserved{" "}
            <a href="https://www.google.com/">VS Digital</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
