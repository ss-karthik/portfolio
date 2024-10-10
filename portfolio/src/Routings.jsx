import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Navbar from './Components/Navbar/Navbar';

const Routings = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/skills' element={<Skills/>}/>
    </Routes>
    </>
  )
}

export default Routings
