import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/footer/Contact'
import MiddleSpinner from './components/middle-spinner'
import KindWords from './components/kind-words'

import {Routes, Route} from 'react-router-dom'
import ProjectDashboard from './components/admin/ProjectDashboard'
import { useRef } from 'react'


const App = () => {
  const projectsRef = useRef(null);
  const scrolltoProject = ()=>{
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const heroRef = useRef(null);
  const contactRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const scrollToAbout = () => {
    if (heroRef.current) {
      heroRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const scrollToSkills = () => {
    if (skillsRef.current) {
      skillsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const scrollToExperience = () => {
    if (experienceRef.current) {
      experienceRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div>
      <Navbar 
        onClick={scrolltoProject} 
        onClickAbout={scrollToAbout} 
        onClickContact={scrollToContact} 
        onClickSkills={scrollToSkills} 
        onClickExperience={scrollToExperience}
      />
      <Hero ref={heroRef} onClickContact={scrollToContact} />
      <Projects ref={projectsRef} />
      <Skills ref={skillsRef} />
      <Experience ref={experienceRef} />
      <MiddleSpinner />
      <KindWords />
      <Contact ref={contactRef} />

      {/* Other components can be added here */}
    </div>
  )
}

export default App
