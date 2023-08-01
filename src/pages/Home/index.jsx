import React from 'react'
import Hello from '../../components/Hello'
import OrientationLeft from '../../components/OrientationLeft'
import OrientationRight from '../../components/OrientationRight'
import AboutMe from '../../components/AboutMe'
 function Home  ()  {
  return (
   <div className='px-[180px] pt-[50px]'>

    <OrientationLeft/>
    <OrientationRight/>

    <Hello/>
    <AboutMe/>




   </div>
  )
}
export {Home}
