import React from 'react'
import SkillCard from './SkillCard'
import jslogo from '../../assets/logos/JS.png'
import reactlogo from '../../assets/logos/React.png'
import nodelogo from '../../assets/logos/Nodejs.png'
import expresslogo from '../../assets/logos/Expressjs.png'
import tailwindlogo from '../../assets/logos/Tailwind.png'
import clogo from '../../assets/logos/C.png'
import javalogo from '../../assets/logos/Java.png'
import pylogo from '../../assets/logos/Python.png'



const Skills = () => {
  return (
    <div className='md:pl-16 pl-14 bg-emerald-900 min-h-screen h-full w-full flex flex-col items-center py-10 gap-5'>
      <h1 className='text-6xl text-white'>Skills</h1>
      <div className='md:m-10 flex justify-center items-center flex-wrap gap-5'>
      <SkillCard logo={jslogo} skill={'Javascript'}/>
      <SkillCard logo={reactlogo} skill={'React'}/>
      <SkillCard logo={nodelogo} skill={'NodeJS'}/>
      <SkillCard logo={expresslogo} skill={'Express'}/>
      <SkillCard logo={tailwindlogo} skill={'TailwindCSS'}/>
      <SkillCard logo={clogo} skill={'C'}/>
      <SkillCard logo={pylogo} skill={'Python'}/>
      <SkillCard logo={javalogo} skill={'Java'}/>
      </div>
    </div>
  )
}

export default Skills
