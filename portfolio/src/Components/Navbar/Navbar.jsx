import React from 'react'
import { Link } from 'react-router-dom'
import { HomeIcon, GalleryVerticalEnd, ScrollText } from 'lucide-react'
const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 h-full w-14 z-50 bg-amber-600 flex flex-col items-center py-5 gap-5'>
        <Link to="/"><HomeIcon size={40}/></Link>
        <Link to="/projects"><GalleryVerticalEnd size={40}/></Link>
        <Link to="/skills"><ScrollText size={40}/></Link>
    </div>
  )
}

export default Navbar
