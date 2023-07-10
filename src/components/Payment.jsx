import React from 'react'
import { icons } from "../constants";

const Payment = () => {
  return (
    <section className={`flex flex-col mt-8 pb-8 w-[550px] sm:w-full`} id='payment'>
      <div>
        <h2 className="max-lg:text-[26px] text-[40px] text-center pt-5 w-full">
          AVAILABLE PAYMENT METHODS
        </h2>
      </div>
      <div className={`bg-white mt-2`}>
        <div className={` w-full mt-10 flex flex-col md:flex-row sm:w-[150px] items-center max-[550px]:w-[180px] `}>
          {icons.map((icons, index) => (
            <img src={icons.img} key={icons.id} alt="img" className={` max-[lg]:ml-1 ${index===icons.length-1?"mb-0":"mb-12 sm:mb-0"} flex flex-row justify-between items-center xs:ml-2 sm:ml-12 md:ml-32 lg:${index===0?"ml-[120px]":"ml-[120px]"} xs:h-[80px] xs:mt-20 sm:mt-0`} />
          ))}
        </div>
      </div>
    </section>
  )
}


// sm:py-16 max-[lg]:ml-1  pt-16 sm:pt-0 ${index===icons.length-1?"mb-0":"mb-12 sm:mb-0"} xs:ml-2 sm:flex md:ml-24 lg:${index===0?"ml-[120px]":"ml-[150px]"} sm:mt-10 xs:h-[130px] sm:h-[120px] lg:h-[150px]
export default Payment