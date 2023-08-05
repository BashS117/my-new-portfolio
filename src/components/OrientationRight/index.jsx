
function OrientationRight(){
    return(
        <div className='orientation-right flex flex-col items-center w-[40px] fixed left-[auto] right-4 top-0 z-[-1] text-light-slate before:content:"" before:block before:w-[1px] before:h-[130px] before:bg-light-slate'>
            <div className='email-style  relative cursor-pointer hover:text-Cyan'>
                <a className="pt-[25px] pl-[7px] [writing-mode:vertical-lr]">sebasrm2000@gmail.com</a>
            </div>
        </div>
    )
}

export default OrientationRight;