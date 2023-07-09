import React from 'react'
import { skyexch , crexbet , d247 , diamondexch , exchangebox , } from '../assets'
import { Link } from 'react-router-dom'

const Carousel = () => {
  return (
    <div>
        <div className='carousel h-[130px] w-full'>
            <Link to="/exchange"><div className='flex flex-col justify-center items-center px-5 '><img src={skyexch} alt="img" className='h-[90px]'/><h2 className='font-medium hover:text-[#000] ease-in-out duration-300'>SKY VERSION</h2></div></Link>
            <Link to="/exchange"><div className='flex flex-col justify-center items-center px-5'><img src={diamondexch} alt="img" className='h-[90px]'/><h2 className='font-medium hover:text-[#000] ease-in-out duration-300'>DIAMOND VERSION</h2></div></Link>
            <Link to="/exchange"><div className='flex flex-col justify-center items-center px-5'><img src={d247} alt="img" className='h-[90px]'/><h2 className='font-medium hover:text-[#000] ease-in-out duration-300'>D247 VERSION</h2></div></Link>
            <Link to="/exchange"><div className='flex flex-col justify-center items-center px-5'><img src={crexbet} alt="img" className='h-[90px]'/><h2 className='font-medium hover:text-[#000] ease-in-out duration-300'>99EXCH VERSION</h2></div></Link>
            <Link to="/exchange"><div className='flex flex-col justify-center items-center px-5'><img src={exchangebox} alt="img" className='h-[90px]'/><h2 className='font-medium hover:text-[#000] ease-in-out duration-300'>EXCHBOX VERSION</h2></div></Link>
        </div>
    </div>
  )
}

export default Carousel