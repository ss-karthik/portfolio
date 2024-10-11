import React from 'react'
import ProjectCard from './ProjectCard'
import typtesterLogo from '../../assets/projects/tt.png'
import kozyLogo from '../../assets/projects/kozy.png'
import kwordleLogo from '../../assets/projects/kwordle.png'
import freedviceLogo from '../../assets/projects/freedvice.png'
import doitLogo from '../../assets/projects/doit.png'
import f1timerLogo from '../../assets/projects/f1timer.png'
import calkulateLogo from '../../assets/projects/calkulate.png'
import drummerLogo from '../../assets/projects/drummer.png'




const Projects = () => {
  return (
    <div className='md:pl-16 pl-14 bg-emerald-900 min-h-screen h-full w-full flex flex-col items-center py-10 gap-5'>
      <h1 className='text-6xl text-white'>Projects</h1>
      <div className='md:m-10 flex justify-center items-center flex-wrap gap-5'>
      <ProjectCard 
        projectName={"Typetester"}
        projectDesc={"A simple typing speed tester - 20 words, 5 letters each"}
        deployURL={"https://typetester-mocha.vercel.app/"}
        githubURL={"https://github.com/ss-karthik/typetester"}
        logo={typtesterLogo}
      />
      <ProjectCard 
        projectName={"Kozy"}
        projectDesc={"A calming soundboard with natural sounds + custom audio playback"}
        deployURL={"https://kozykalm.netlify.app/"}
        githubURL={"https://github.com/ss-karthik/kozy"}
        logo={kozyLogo}
      />
      <ProjectCard 
        projectName={"Kwordle"}
        projectDesc={"A clone of the popular Wordle game - with added difficulty levels"}
        deployURL={"https://kwoordle.netlify.app/"}
        githubURL={"https://github.com/ss-karthik/kwordle"}
        logo={kwordleLogo}
      />
      <ProjectCard 
        projectName={"Freedvice"}
        projectDesc={"A Free Advice generator"}
        deployURL={"https://freedvice.onrender.com/"}
        githubURL={"https://github.com/ss-karthik/freedvice"}
        logo={freedviceLogo}
      />
      <ProjectCard 
        projectName={"Do It!"}
        projectDesc={"A productivity tool that combines a Timer, To Do list, Audio Player."}
        deployURL={"https://doitfocus.netlify.app/"}
        githubURL={"https://github.com/ss-karthik/doit"}
        logo={doitLogo}
      />
      <ProjectCard 
        projectName={"Reaction Timer"}
        projectDesc={"A website that times your reflexes to the Race Lights."}
        deployURL={"https://f1-reaction-timer.netlify.app/"}
        githubURL={"https://github.com/ss-karthik/f1-reaction-timer"}
        logo={f1timerLogo}
      />
      <ProjectCard 
        projectName={"Calkulate"}
        projectDesc={"A Simple Calculator app."}
        deployURL={"https://ss-karthik.github.io/calculator/"}
        githubURL={"https://github.com/ss-karthik/calculator"}
        logo={calkulateLogo}
      />
      <ProjectCard 
        projectName={"Drum Machine"}
        projectDesc={"A Drum Machine."}
        deployURL={"https://drummer-ssk.netlify.app/"}
        githubURL={"https://github.com/ss-karthik/drum-machine"}
        logo={drummerLogo}
      />
    </div>
    </div>
  )
}

export default Projects
