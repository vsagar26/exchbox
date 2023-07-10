import React from 'react'
import { logo } from '../assets'
import {HiOutlineArrowNarrowRight} from "react-icons/hi"

const Navbar = () => {
  return (
    <div>
        <nav className='flex flex-row justify-center items-center gap-4 ss:gap-[200px] sm:gap-[320px] md:gap-[400px] lg:gap-[550px] py-3'>
            <div className=' '><a href="/"><img src={logo} alt="logo" className='logo md:lg-20 lg:px-2 h-[40px] md:h-[55px] lg:h-[70px]'/></a></div>
            <a href={"https://wa.me/917779996639?text=Send%20me%20Demo%20IDs%20and%20Passwords%20of%20betting%20account%20I'm%20intrested%20to%20buy"}><div className='lg:px-36'><button className=' px-5 ss:px-10 md:px-12 py-2 bg-[#FE6602] text-[#ffffff] rounded-3xl hover:text-[#FE6602] border-2 border-[#FE6602] hover:bg-[#ffffff] ease-in-out duration-300 flex flex-row items-center justify-center gap-2'>Get Demo IDs<HiOutlineArrowNarrowRight/></button></div></a>
        </nav>
    </div>
  )
}

export default Navbar