import './navbar.css';
import { useState } from 'react';
import { Link, useLocation,  } from 'react-router-dom';
import {BiMenuAltRight} from "react-icons/bi"
import {TfiClose} from "react-icons/tfi"

function Header() {
  const location = useLocation();

  const scrollToSection = (sectionId) => {

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      
      // // Actualiza la ruta según la sección actual
      // history.push(`#${sectionId}`);
    }
    
    setIsMenuOpen(false)
  };


  const [isMenuOpen,setIsMenuOpen]=useState(false);

  const openMenuMobile =()=>{
    setIsMenuOpen(true)
  }
  const closeMenuMobile =()=>{
    setIsMenuOpen(false)
  }



  return (
    <nav className='sm:px-[26px] sm:pr-[24px] px-[56px] bg-Very-dark-blue-main flex pt-[24px] justify-between items-center sticky z-10'>
      <div className='logo'>
      <img width="64" height="64" src="https://img.icons8.com/nolan/64/console.png" alt="console"/>     
        </div>

        <BiMenuAltRight
        onClick={openMenuMobile}
          className='sm:flex hidden text-[var(--Cyan)] w-12 h-12 opacity-[80%]'/>

      <div className={`${isMenuOpen? 'flex' : 'sm:hidden'} sm:items-center sm:absolute sm:justify-center sm:top-0 sm:bg-Very-dark-blue-menu-mobile sm:h-[100vh] sm:w-[65vw] sm:right-0  navbar-right`}>
      
      <TfiClose
      onClick={closeMenuMobile}
      className='sm:absolute sm:top-[40px] sm:right-[30px] sm:flex hidden text-[var(--Cyan)] w-8 h-8 opacity-[80%]'
      />
        <ol className="sm:flex-col sm marker:text-Cyan flex gap-16 list-[decimal-leading-zero]">
          <li>
            <Link to="#about" onClick={() => scrollToSection('projects')}>Projects</Link>
          </li>
          <li>
            <Link to="#skills" onClick={() => scrollToSection('about')}>About</Link>
          </li>
          <li>
            <Link to="#projects" onClick={() => scrollToSection('skills')}>Skills</Link>
          </li>
          <li>
            <Link to="#contact" onClick={() => scrollToSection('contact')}>Contact</Link>
          </li>
        </ol>
      </div>

    </nav>
  );
}

export default Header;