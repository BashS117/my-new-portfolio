
import './navbar.css'
function Header  ()  {
  return (
   
      <nav
      className=' px-[56px] bg-Very-dark-blue-main flex pt-[24px] justify-between items-center sticky z-10 '>
        <div className='logo'>
          LOGO

        </div>

        <div className='navbar-right'>
          <ol className="marker:text-Cyan flex gap-16 list-[decimal-leading-zero]">
            <li className=''>
              <a>About</a>
            </li>
            <li>
              <a>Skills</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ol>

        </div>

      </nav>
  )
}

export default Header