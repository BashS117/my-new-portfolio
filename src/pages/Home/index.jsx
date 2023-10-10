import React from 'react'
import Hello from '../../components/Hello'
import OrientationLeft from '../../components/OrientationLeft'
import OrientationRight from '../../components/OrientationRight'
import AboutMe from '../../components/AboutMe'
import Projects from '../../components/Projects'
import Skills from '../../components/Skills'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'
 function Home  ()  {
  
  return (
   <div className='sm:px-[30px] px-[180px] pt-[50px]'>

    <OrientationLeft/>
    <OrientationRight/>
    

    <Hello/>
    
    <Projects/>
    
    <AboutMe/>
    <Skills/>
    <Contact/>
    <Footer/>
    



   </div>
  )
}
export {Home}
