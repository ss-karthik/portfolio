import React from 'react'
import { Link } from 'react-router-dom'
import { HomeIcon, GalleryVerticalEnd, ScrollText, Instagram, Github, Youtube, Sparkle } from 'lucide-react';

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 h-full md:w-14 w-12 z-50 bg-gradient-to-b from-cyan-300 to-indigo-300 flex flex-col items-center justify-between py-5 gap-5'>
        <div className='flex flex-col items-center gap-5'>
            <Link to="/"><HomeIcon size={40}/></Link>
            <Link to="/projects"><GalleryVerticalEnd size={40}/></Link>
            <Link to="/skills"><Sparkle size={40}/></Link>
        </div>
        <div className='flex flex-col items-center gap-5'>
        <a className='cursor-pointer' href='https://karthikss.netlify.app/' target="_blank" rel="noopener noreferrer"><ScrollText size={40}/></a>
            <a className='cursor-pointer' href='https://github.com/ss-karthik' target="_blank" rel="noopener noreferrer"><Github size={40}/></a>
            <a className='cursor-pointer' href='https://www.youtube.com/@Maniakss' target="_blank" rel="noopener noreferrer"><Youtube size={40}/></a>        
            <a className='cursor-pointer' href='https://www.instagram.com/karthiks_ig/' target="_blank" rel="noopener noreferrer"><Instagram size={40}/></a>
        </div>
    </div>
  )
}

export default Navbar
