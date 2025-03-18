import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



import { Navbar } from './components/navbar'
import { Home } from './components/home'
import { About } from './components/about'
import { Skills } from './components/skills'
import { Project } from './components/projects'
import { Contact } from './components/contact'
import { Footer } from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>

    </>
  )
}

export default App
