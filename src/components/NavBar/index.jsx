
import './navbar.css'
function Header  ()  {
  return (
   
      <nav
      className=' px-[50px] bg-Very-dark-blue-main flex mt-[22px] justify-between items-center'>
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