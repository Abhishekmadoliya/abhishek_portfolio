import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/footer/Contact'

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

  return (
    <div>
      <Navbar onClick={scrolltoProject} onClickAbout={scrollToAbout} onClickContact={scrollToContact}   />
      <Hero ref={heroRef} onClickContact={scrollToContact} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />

      {/* Other components can be added here */}
    </div>
  )
}

export default App
