import React from 'react'

const SkillCard = ({skill, logo}) => {
  return (
    <div className='rounded-lg p-4 md:w-48 md:h-60 w-32 h-44 flex flex-col gap-2 justify-between items-center border border-sky-600 bg-teal-50 shadow-md hover:bg-teal-100 transition-colors duration-300'>
      <img src={logo} className='rounded-xl md:max-w-40 md:max-h-40 max-w-24 max-h-24'></img>
      <h1 className='md:text-3xl text-xl'>{skill}</h1>
    </div>
  )
}

export default SkillCard
