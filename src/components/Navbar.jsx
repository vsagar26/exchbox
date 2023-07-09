import React from 'react'
import { logo } from '../assets'

const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
            <div className='xs:flex xs:justify-center xs:items-center lg:block '><a href="/"><img src={logo} alt="" className='logo px-28 '/></a></div>
        </nav>
    </div>
  )
}

export default Navbar