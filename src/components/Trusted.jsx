import React from 'react'
import { trusted } from '../assets'

const Trusted = () => {
  return (
    <div>
        <div className='bg-[#F41CB2] flex flex-row justify-center items-center gap-x-[180px]'>
            <div className='px-32 py-8' data-aos="fade-right" data-aos-duration="2000">
                <h3 className='text-[#fff] font-bold py-3 text-[30px]'>MOST TRUSTED & SECURE SITE</h3>
                <div className='text-[#fff]'>
                    <h4 className='text-black my-1 uppercase'>This is most SECURE site among its competitors</h4>
                    <p>We provide various betting exchanges with more than 30 platforms<br/> to play on different types of sports , games , casino and binary<br/> markets We provide all the levels of Agency and client IDs Admin ,<br/> Senior super ,Super Master Master , Player ID . <br/>We provide white label of all websites</p>
                </div>
            </div>
            <div data-aos="fade-left" data-aos-duration="2000">
                <img src={trusted} alt="trusted" className='h-[350px] mt-3'/>
            </div>
        </div>
    </div>
  )
}

export default Trusted