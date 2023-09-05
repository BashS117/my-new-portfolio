import {AiFillGithub} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"
import {SiFrontendmentor} from "react-icons/si"


function OrientationLeft () {
    return (
        <div className='orientation-left fixed left-10 bottom-0 z-10 text-light-slate '>
            <ul className='social-style flex flex-col items-center after:content:" " after:bg-light-slate after:w-[1px] after:block after:h-[100px]'>
                <li className='pb-[17px]'>
                    <a href="https://github.com/BashS117" className="pb-[0px]">
                        <AiFillGithub className="h-7 w-7  inline-block transform transition-transform duration-200 ease-in hover:-translate-y-[6px] "/>
                    </a>
                </li>
                <li className='pb-[17px]'>
                    <a href="https://www.linkedin.com/in/sebastian-rodriguez-mosquera-1549a4265" className="">
                        <AiFillLinkedin className="h-7 w-7    inline-block transform transition-transform duration-200 ease-in hover:-translate-y-[6px]"/>
                    </a>
                </li>
                <li className='pb-[30px]'>
                    <a href="https://www.frontendmentor.io/profile/BashS117" >
                        <SiFrontendmentor className="h-7 w-7    inline-block transform transition-transform duration-200 ease-in hover:-translate-y-[6px] "/>
                    </a>
                </li>
              
            </ul>
        </div>
    );
}

export default OrientationLeft;