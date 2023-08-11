import {AiFillGithub} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"
import {SiFrontendmentor} from "react-icons/si"


function OrientationLeft () {
    return (
        <div className='orientation-left fixed left-4 bottom-0 z-10 text-light-slate '>
            <ul className='social-style flex flex-col items-center after:content:" " after:bg-light-slate after:w-[1px] after:block after:h-[100px]'>
                <li className=''>
                    <a href="">
                        <AiFillGithub className="h-7 w-7 mb-5"/>
                    </a>
                </li>
                <li className=''>
                    <a href="">
                        <AiFillLinkedin className="h-7 w-7  mb-5"/>
                    </a>
                </li>
                <li className=' '>
                    <a href="">
                        <SiFrontendmentor className="h-7 w-7  mb-5"/>
                    </a>
                </li>
              
            </ul>
        </div>
    );
}

export default OrientationLeft;