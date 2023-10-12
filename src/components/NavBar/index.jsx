import './navbar.css';
import { Link, useLocation,  } from 'react-router-dom';
import {BiMenuAltRight} from "react-icons/bi"

function Header() {
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      
      // // Actualiza la ruta según la sección actual
      // history.push(`#${sectionId}`);
    }
  };

  return (
    <nav className='sm:px-[26px] sm:pr-[24px] px-[56px] bg-Very-dark-blue-main flex pt-[24px] justify-between items-center sticky z-10'>
      <div className='logo'>
      <img width="64" height="64" src="https://img.icons8.com/nolan/64/console.png" alt="console"/>     
        </div>

        <BiMenuAltRight className='sm:flex hidden text-[var(--Cyan)] w-12 h-12 opacity-[80%]'/>

      <div className='sm:hidden navbar-right'>
        <ol className="marker:text-Cyan flex gap-16 list-[decimal-leading-zero]">
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