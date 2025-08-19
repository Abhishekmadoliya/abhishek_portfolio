import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/footer/Contact'

import {Routes, Route} from 'react-router-dom'
import ProjectDashboard from './components/admin/ProjectDashboard'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Projects />
      <Contact />
      
      {/* Other components can be added here */}
    </div>
  )
}

export default App
