import React, { useState } from "react";
import { exchanges } from "../constants";
import { coin } from "../assets";

const Exchange = () => {
  const [items, setItems] = useState(exchanges);

  const filterItem = (categoryItem) => {
    const updatedItems = exchanges.filter((currentItem) => {
      return currentItem.category === categoryItem;
    });
    setItems(updatedItems);


  };

  return (
    <>
    <section className=" pb-20">
      <div className="pb-8"><img src={coin} alt="coin" className="relative"/></div><h2 className="absolute text-[70px] text-[#fff] left-[35%] top-[200px] pb-5 z-10 ">EXCHANGES</h2>
      <div
        className={`flex flex-row flex-wrap justify-around items-center px-20 pb-12`}
      >
        <button
          className={`bg-[#ffffff] border-[3px] border-[#FE6602] text-[#FE6602] font-poppins px-10 py-2  my-2  hover:bg-[#FE6602] hover:text-[#ffffff] hover:border-[#FE6602] active:bg-[#FE6602] active:text-[#FE6602] active:border-[#FE6602] rounded-3xl`}
          onClick={() => setItems(exchanges)} data-aos="fade-right" data-aos-duration="1000"
        >
          All Types
        </button>
        <button
          className={`bg-[#ffffff] border-[3px] border-[#FE6602] text-[#FE6602] font-poppins px-10 py-2  my-2 hover:bg-[#FE6602] hover:text-[#ffffff] hover:border-[#FE6602] active:bg-[#FE6602] active:text-[#FE6602] active:border-[#FE6602] rounded-3xl`}
          onClick={() => filterItem("skyexchange")} data-aos="fade-right" data-aos-duration="1000"
        >
          SKY VERSION
        </button>
        <button
          className={`bg-[#ffffff] border-[3px] border-[#FE6602] text-[#FE6602] font-poppins px-10 py-2  my-2 hover:bg-[#FE6602] hover:text-[#ffffff] hover:border-[#FE6602] active:bg-[#FE6602] active:text-[#FE6602] active:border-[#FE6602] rounded-3xl`}
          onClick={() => filterItem("diamondversion")} data-aos="fade-right" data-aos-duration="1000"
        >
          DIAMOND VERSION
        </button>
        <button
          className={`bg-[#ffffff] border-[3px] border-[#FE6602] text-[#FE6602] font-poppins px-10 py-2  my-2 hover:bg-[#FE6602] hover:text-[#ffffff] hover:border-[#FE6602] active:bg-[#FE6602] active:text-[#FE6602] active:border-[#FE6602] rounded-3xl`}
          onClick={() => filterItem("d247version")} data-aos="fade-left" data-aos-duration="1000"
        >
          D247 VERSION
        </button>
        <button
          className={`bg-[#ffffff] border-[3px] border-[#FE6602] text-[#FE6602] font-poppins px-10 py-2  my-2 hover:bg-[#FE6602] hover:text-[#ffffff] hover:border-[#FE6602] active:bg-[#FE6602] active:text-[#FE6602] active:border-[#FE6602] rounded-3xl`}
          onClick={() => filterItem("99exchversion")} data-aos="fade-left" data-aos-duration="1000"
        >
          99EXCH VERSION
        </button>
        <button
          className={`bg-[#ffffff] border-[3px] border-[#FE6602] text-[#FE6602] font-poppins px-10 py-2  my-2 hover:bg-[#FE6602] hover:text-[#ffffff] hover:border-[#FE6602] active:bg-[#FE6602] active:text-[#FE6602] active:border-[#FE6602] rounded-3xl`}
          onClick={() => filterItem("exchboxversion")} data-aos="fade-left" data-aos-duration="1000"
        >
          EXCHBOX VERSION
        </button>
      </div>

      <div className={`flex flex-col justify-center items-center`}>
        {items.map((exchange) => (
          <section className={`flex flex-col `}>
            <div className={`flex flex-row gap-4`} >
              <li
                key={exchange.id}
                className={`list-none sm:px-12 py-4 bg-[#FE6602] w-[160px] sm:w-[300px] mt-4 text-center text-[16px] text-white font-normal rounded-3xl`} data-aos="fade-right" data-aos-duration="1500"
              >
                {exchange.title}
              </li>
              <div
                key={2 * exchange.id}
                className={`list-none px-4 py-4 bg-[#FE6602] w-[100px] mt-4 text-center text-[16px] text-white font-normal rounded-3xl`} data-aos="fade-left" data-aos-duration="1500"
              >
                {exchange.rate}
              </div>
              <img
                src={exchange.img}
                alt={exchange.site}
                key={exchange.site}
                className={`w-[50px] text-white mt-6 hover:bg-[#FE6602] hover:cursor-pointer hover:rounded-full `}
                onClick={() => window.open(exchange.site)}
              />
            </div>
          </section>
        ))}
      </div>
    </section>
    </>
  );
};

export default Exchange;
