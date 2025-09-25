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
import tempchatLogo from '../../assets/projects/tempchat.png'
import habitopiaLogo from '../../assets/projects/Habitopia.jpeg'
import pratibimbLogo from '../../assets/projects/Pratibimb.png'
import theDiaryLogo from '../../assets/projects/thediary.png'
import rinonLogo from '../../assets/projects/rinon.png';



const Projects = () => {
  return (
    <div className='md:pl-16 pl-14 bg-emerald-900 min-h-screen h-full w-full flex flex-col items-center py-10 gap-5'>
      <h1 className='text-6xl text-white'>Projects</h1>
      <div className='md:m-10 flex justify-center items-center flex-wrap gap-5'>
        <ProjectCard 
        projectName={"Rinon"}
        projectDesc={"AI Based Kidney Health Analyser. Risk of Stone and Identification of Stone, it's Size and Location."}
        deployURL={"https://rinon-z4kl.vercel.app/"}
        githubURL={"https://github.com/Proudprogamer/Rinon/commits/main/?author=ss-karthik"}
        logo={rinonLogo}
      />
        <ProjectCard 
        projectName={"The Diary"}
        projectDesc={"A barebones digital diary where you can stash your thoughts. Habits and Todos too."}
        deployURL={"https://the-diary-omega.vercel.app/"}
        githubURL={"https://github.com/ss-karthik/the-diary"}
        logo={theDiaryLogo}
      />
        <ProjectCard 
        projectName={"Pratibimb"}
        projectDesc={"A Health Tracking system based on BMI measurements from an IOT Device + AI medical report analysis"}
        deployURL={"https://www.mypratibimb.in/"}
        githubURL={"https://github.com/ss-karthik/pratibimb"}
        logo={pratibimbLogo}
      />
        <ProjectCard 
        projectName={"Habitopia (Team Project)"}
        projectDesc={"A Habit-Tracking webapp that uses streaks to motivate. Built the data visualizations."}
        deployURL={"https://habitopia-sdg.vercel.app/"}
        githubURL={"https://github.com/Sathya-reddy1658/Habitopia/commits?author=ss-karthik"}
        logo={habitopiaLogo}
      />
      <ProjectCard 
        projectName={"Tempchat"}
        projectDesc={"A Websocket based Temporary Chatroom with chat export and room generation"}
        deployURL={"https://tempchat-one.vercel.app/"}
        githubURL={"https://github.com/ss-karthik/tempchat"}
        logo={tempchatLogo}
      />
      <ProjectCard 
        projectName={"Typetester"}
        projectDesc={"A simple typing speed tester - 20 words, 5 letters each. Built in react in a boring class"}
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
        projectDesc={"A Free Advice generator. The cat can be a bit scary and direct. Sorry."}
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
        projectDesc={"A Simple Calculator app. Try dividing by 0."}
        deployURL={"https://ss-karthik.github.io/calculator/"}
        githubURL={"https://github.com/ss-karthik/calculator"}
        logo={calkulateLogo}
      />
      <ProjectCard 
        projectName={"Drum Machine"}
        projectDesc={"A Drum Machine, click and drum go bang bang. Self explanatory"}
        deployURL={"https://drummer-ssk.netlify.app/"}
        githubURL={"https://github.com/ss-karthik/drum-machine"}
        logo={drummerLogo}
      />
    </div>
    </div>
  )
}

export default Projects
