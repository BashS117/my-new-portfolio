import React from 'react'
import Hello from '../../components/Hello'
import OrientationLeft from '../../components/OrientationLeft'
import OrientationRight from '../../components/OrientationRight'
import AboutMe from '../../components/AboutMe'
import Projects from '../../components/Projects'
import Skills from '../../components/Skills'
import Contact from '../../components/Contact'
 function Home  ()  {
  
  return (
   <div className='px-[180px] pt-[50px]'>

    <OrientationLeft/>
    <OrientationRight/>
    

    <Hello/>
    <AboutMe/>
    <Projects/>
    <Skills/>
    <Contact/>



   </div>
  )
}
export {Home}
