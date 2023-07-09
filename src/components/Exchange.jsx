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
          className={`bg-[#ffffff] border-[3px] border-[#F41CB2] text-[#F41CB2] font-poppins px-10 py-2  my-2  hover:bg-[#F41CB2] hover:text-[#ffffff] hover:border-[#F41CB2] active:bg-[#F41CB2] active:text-[#F41CB2] active:border-[#F41CB2] rounded-3xl`}
          onClick={() => setItems(exchanges)}
        >
          All Types
        </button>
        <button
          className={`bg-[#ffffff] border-[3px] border-[#F41CB2] text-[#F41CB2] font-poppins px-10 py-2  my-2 hover:bg-[#F41CB2] hover:text-[#ffffff] hover:border-[#F41CB2] active:bg-[#F41CB2] active:text-[#F41CB2] active:border-[#F41CB2] rounded-3xl`}
          onClick={() => filterItem("skyexchange")}
        >
          SKY VERSION
        </button>
        <button
          className={`bg-[#ffffff] border-[3px] border-[#F41CB2] text-[#F41CB2] font-poppins px-10 py-2  my-2 hover:bg-[#F41CB2] hover:text-[#ffffff] hover:border-[#F41CB2] active:bg-[#F41CB2] active:text-[#F41CB2] active:border-[#F41CB2] rounded-3xl`}
          onClick={() => filterItem("diamondversion")}
        >
          DIAMOND VERSION
        </button>
        <button
          className={`bg-[#ffffff] border-[3px] border-[#F41CB2] text-[#F41CB2] font-poppins px-10 py-2  my-2 hover:bg-[#F41CB2] hover:text-[#ffffff] hover:border-[#F41CB2] active:bg-[#F41CB2] active:text-[#F41CB2] active:border-[#F41CB2] rounded-3xl`}
          onClick={() => filterItem("d247version")}
        >
          D247 VERSION
        </button>
        <button
          className={`bg-[#ffffff] border-[3px] border-[#F41CB2] text-[#F41CB2] font-poppins px-10 py-2  my-2 hover:bg-[#F41CB2] hover:text-[#ffffff] hover:border-[#F41CB2] active:bg-[#F41CB2] active:text-[#F41CB2] active:border-[#F41CB2] rounded-3xl`}
          onClick={() => filterItem("99exchversion")}
        >
          99EXCH VERSION
        </button>
        <button
          className={`bg-[#ffffff] border-[3px] border-[#F41CB2] text-[#F41CB2] font-poppins px-10 py-2  my-2 hover:bg-[#F41CB2] hover:text-[#ffffff] hover:border-[#F41CB2] active:bg-[#F41CB2] active:text-[#F41CB2] active:border-[#F41CB2] rounded-3xl`}
          onClick={() => filterItem("exchboxversion")}
        >
          EXCHBOX VERSION
        </button>
      </div>

      <div className={`flex flex-col justify-center items-center`}>
        {items.map((exchange) => (
          <section className={`flex flex-col `}>
            <div className={`flex flex-row gap-4`}>
              <li
                key={exchange.id}
                className={`list-none sm:px-12 py-4 bg-[#F41CB2] w-[160px] sm:w-[300px] mt-4 text-center text-[16px] text-white font-normal rounded-3xl`}
              >
                {exchange.title}
              </li>
              <div
                key={2 * exchange.id}
                className={`list-none px-4 py-4 bg-[#F41CB2] w-[100px] mt-4 text-center text-[16px] text-white font-normal rounded-3xl`}
              >
                {exchange.rate}
              </div>
              <img
                src={exchange.img}
                alt={exchange.site}
                key={exchange.site}
                className={`w-[50px] text-white mt-6 hover:bg-[#F41CB2] hover:cursor-pointer hover:rounded-full `}
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
