import { useState } from 'react'
import './index.css'
import { NavBar } from './components/NavBar'
import { Home } from './Pages/Home'
import { LessonCard } from './components/LessonCard'
import { Form } from './components/Form'
import { Contact } from './Pages/Contact'
import { AboutUs } from './Pages/AboutUs'
import { Footer } from './components/Footer'




function App() {

    

  return (
    <>
    
    <div >
      <NavBar/>
    <Home/>
    <LessonCard/> 
    <AboutUs/> 
    <Contact/>
    <Footer/>


    </div>





    </>
  )
}

export default App
