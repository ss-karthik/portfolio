import React from 'react'
import photo from '../../assets/photo.jpg'
const Home = () => {
  return (
    <div className='md:pl-16 pl-14 bg-emerald-900 min-h-screen h-full w-full flex flex-col items-center py-10 gap-5'>
    <img src={photo} className='rounded-full max-w-64'/>
      <h1 className='text-6xl text-white'>Karthik</h1>
      <h1 className='text-xl text-white text-center '> 
        Hey there fellow humans! I am Karthik. 
        <br/><br/>
        I am a CompSci student and I have a great fascination for tech. I also make videos on my YouTube channel.
        I am a noob (if I say so myself) in the software development space. This is one of my attempts to put myself and my code out in the open and learn in public. 
        <br/><br/>
        This is my personal space where I display to you at a glance my projects, skills and the best parts of myself to you.
        <br/><br/>
        Feel free to reach me by dropping an e-mail at maniac.sskarthik@gmail.com or drop a DM on my Instagram.
        <br/><br/>
        oh btw, I use linux.
    </h1>
    </div>
  )
}

export default Home
