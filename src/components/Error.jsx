import React from 'react'
import { error } from '../assets'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
        <div className='flex flex-col justify-center items-center pb-12'>
            <img src={error} alt="error" className='h-[500px] mt-[-30px]'/>
            <Link to="/"><button className='px-12 py-4 bg-[#FE6602] text-[#fff] mt-[-30px] rounded-3xl'>Return to Homepage</button></Link>
        </div>
    </div>
  )
}

export default Error