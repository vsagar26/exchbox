import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
import Exchange from "../components/Exchange"
import Error from '../components/Error'

const AllRoutes = () => {
  return (
    <Routes> 
        <Route path='/' element={<Home/>}/>
        <Route path='/exchange' element={<Exchange/>}/>
        <Route path='*' element={<Error/>}/>
    </Routes>
  )
}

export default AllRoutes