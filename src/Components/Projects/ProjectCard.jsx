import React from 'react'
import {Github} from 'lucide-react'
import {Link} from 'lucide-react'
const ProjectCard = ({projectName, deployURL, githubURL, logo, projectDesc}) => {
  return (
    <div className='rounded-lg p-2 w-72 h-108 flex flex-col gap-3 justify-between items-center border border-sky-600 bg-teal-50 shadow-md hover:bg-teal-100 transition-colors duration-300'>
      <img src={logo} className='rounded-xl w-56 h-56 object-cover'></img>
      <div className='flex-grow'>
      <h1 className='text-xl text-center'>{projectName}</h1>
      <h1 className='text-md text-center'>{projectDesc}</h1>
      </div>
      <div className='flex justify-between w-full px-2'>
        <a className='cursor-pointer' href={deployURL} target="_blank" rel="noopener noreferrer"><Link size={34}/></a>
        <a className='cursor-pointer' href={githubURL} target="_blank" rel="noopener noreferrer"><Github size={34}/></a>
      </div>
    </div>
  )
}

export default ProjectCard
