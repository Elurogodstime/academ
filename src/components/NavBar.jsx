import React, { use } from 'react'
import { useState } from 'react'
import logo from "../assets/logo.png"

export const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const [isHover, setIsHover] = useState(false);

  const [isShow,setIsShow] = useState(false);
  
    const Logo = [
        {
            
          

        }
    ]

    const [navShow, setNavShow] = useState(false)


  return (
    <>

    
   
    <div className='nav flex justify-between nav-bar'>

    {Logo.map(logos=>
            <h1 className='flex text-2xl list-none font-bold px-15 ' >{logos.Logo}
            <img src={logo} alt=""
            className='w-70 max-sm:-mx-15'
            />
            </h1>
        )}


       
          <ul className=' nav-bar flex gap-10 mx-10 justify-around flex-wrap align-center space-x-1.5 max-sm:text-amber-200  max-sm:hidden'>
           <a href="#"> <li className=''>Home</li></a>
            <li className=' relative max-sm:text-2xl' 
            onMouseEnter={()=> setIsHover(true)} onMouseLeave={()=>setIsHover(false)}
            >
              <a href="#lesson"><span className='nav-Bar'>Lessons</span></a>

              {isHover && (
                <di className='lesson absolute nav-Bar top-6 left-0 p-5 rounded-2xl uppercase text-black bg-amber-600 cursor-pointer' >
                <a href="#lesson"> <li>HTML TUTORIAL</li></a>
                <li>CSS TUTORIAL</li>
                <li>JAVASCRIPT TUTORIAL</li>
                <li>REACT TUTORIAL</li>
              </di>
              )}
            </li>
            <li className='projects relative max-sm:text-2xl' onMouseEnter={()=> setIsOpen(true)} onMouseLeave={()=> setIsOpen(false)}
               
            >
              <span className='cursor-pointer'>Projects</span>
             {isOpen && (
              <div className='project-hover nav-Bar uppercase font-medium text-black bg-amber-600 p-5 cursor-pointer absolute top-7 rounded-2xl  left-0'>
              <a href="https://www.google.com" target='blank'><li > ESTATE WEBSITE</li></a>
              <a href="https://www.google.com" target='blank'><li > BURGER WEBSITE</li></a>
               <a href="https://www.goggle.com" target='blank'><li >SCHOOL WEBSITE</li></a>
              </div>
             )}

            </li>


           <li className='resource'  onMouseEnter={()=> setIsShow(true)} onMouseLeave={()=> setIsShow(false)}>
            <span>Resources</span>
            {isShow && (
              <div className='absolute nav-Bar p-5 uppercase text-black font-medium bg-amber-500 rounded-2xl '>
                <a href="https://www.google.com" target='blank'></a><li>Html links</li><a/>
              <li>Css links</li>
              <li>Javascript links</li>
              <li>React links</li>
              <li>Ui/Ux links</li>
              </div>
            )}
            </li>
           <a href="#About"> <li>About</li></a>
            <a href="#contact"><li>Contact</li></a>

          </ul>
            <button className='bg-blue-400 text-blue-900 rounded-2xl max-sm:hidden'>Get Started</button>







             {/* HAMBURGER */}
          
          <div className='hidden max-sm:block '>

            <button className='border rounded-2xl' onClick={()=> setNavShow(!navShow)} >
             <span  className='text-3xl text-amber-300'> {navShow ? "✖" : "☰"}</span> 
            </button>

          

              <ul className={`${
              navShow? "block" : "hidden"
            }`}>

              <span className='hambuger border absolute p-2 left-0 w-99 rounded-2xl h-99 '>
                 <a href="#"> <li className='rest '>Home</li></a>
            <li className='rest relative' 
            onMouseEnter={()=> setIsHover(true)} onMouseLeave={()=>setIsHover(false)}
            >
              <a href="#lesson"><span>Lessons</span></a>

              {isHover && (
                <di className=' rest drop lesson absolute top-4 left-20 p-5 rounded-2xl uppercase text-black bg-blue-100 cursor-pointer' >
                <a href="#lesson"> <li>HTML TUTORIAL</li></a>
                <li>CSS TUTORIAL</li>
                <li>JAVASCRIPT TUTORIAL</li>
                <li>REACT TUTORIAL</li>
              </di>
              )}
            </li>
            <li className=' rest drop projects relative' onMouseEnter={()=> setIsOpen(true)} onMouseLeave={()=> setIsOpen(false)}
               
            >
              <span className='cursor-pointer'>Projects</span>
             {isOpen && (
              <div className='project-hover drop uppercase font-medium text-black bg-amber-100 p-5 cursor-pointer absolute top-4 rounded-2xl  left-20'>
              <a href="https://www.google.com" target='blank'><li > ESTATE WEBSITE</li></a>
              <a href="https://www.google.com" target='blank'><li > BURGER WEBSITE</li></a>
               <a href="https://www.goggle.com" target='blank'><li >SCHOOL WEBSITE</li></a>
              </div>
             )}

            </li>


           <li className='rest resource'  onMouseEnter={()=> setIsShow(true)} onMouseLeave={()=> setIsShow(false)}>
            <span>Resources</span>
            {isShow && (
              <div className='absolute p-5 uppercase text-black font-medium top-20 left-23 bg-amber-100 rounded-2xl '>
                <a href="https://www.google.com" target='blank'></a><li>Html links</li><a/>
              <li>Css links</li>
              <li>Javascript links</li>
              <li>React links</li>
              <li>Ui/Ux links</li>
              </div>
            )}
            </li>
           <a href="#About"> <li className='rest'>About</li></a>
            <a href="#contact"><li className='rest'>Contact</li></a>
              </span>

            </ul>
          
          </div>
           
       


    </div>
 
    
    
    
    
    
    
    
    
    </>
  )
}
