import React from 'react'
import { instant } from '../assets'

const Instant = () => {
  return (
    <div>
        <div className='bg-[#FE6602] flex flex-col sm:flex-row justify-center items-center gap-x-[200px] sm:gap-x-[10px] mt-16'>
            <div className='px-32 py-8 ' data-aos="fade-right" data-aos-duration="2000">
                <h3 className='text-[#fff] font-bold py-3 text-[30px]'>INSTANT SERVICES</h3>
                <ul className='text-[#fff]'>
                    <li className='py-1'>24X7 Instant Withdrawal & Deposit</li>
                    <li className='py-1'>Live Stream Of Popular Events</li>
                    <li className='py-1'>Trusted International Casinos available</li>
                    <li className='py-1'>Surety of Winning Rate</li>
                    <li className='py-1'>24X7 Customer Support</li>
                </ul>
            </div>
            <div data-aos="fade-left" data-aos-duration="2000">
                <img src={instant} alt="instant" className='h-[350px] mt-3'/>
            </div>
        </div>
    </div>
  )
}

export default Instant