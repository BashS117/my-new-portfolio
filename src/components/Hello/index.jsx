
function Hello(){
    return(
        <section className='sm:pt-14 flex justify-center flex-col items-start min-h-[80vh];  min-w-full'>
            <div className='' style={{ transitionDelay: '100ms' }}>
                <h1 className="sm:text-[1rem] text-green mb-[18px] font-normal ">Hi, my name is</h1>
            </div>

            <div className='fadeup2' style={{ transitionDelay: '200ms' }}>
                <h2 className='sm:text-[2rem] text-clamp font-[600] m-0'>
                    Sebastian Rodriguez. 
                </h2>
            </div>

            <div className='fadeup3' style={{ transitionDelay: '300ms' }}>
                <h3 className='sm:text-[1.8rem] text-clamp mt-[5px] text-Soft-blue leading-[0.9] '>
                    I like making interactive things whit code</h3>
            </div>
            <div className='sm:text-[1rem] fadeup4' style={{ transitionDelay: '400ms' }}>
                <p>
                "I am a passionate web developer with skills in HTML, CSS, JavaScript, ReactJs, Git, GitHub, and NPM. I enjoy using my creativity to design dynamic and attractive user interfaces. I constantly work on improving my techniques and skills because there are always new tools and technologies to explore in web development."  </p>
            </div>

            <div className='fadeup5' style={{ transitionDelay: '500ms' }}>
                <a
                href="/Sebastian-Rodriguez-CV-newResume.pdf"

                download
                  
                className='
                btn-3d block text-Cyan 
                 border border-Cyan 
                 py-[1rem] px-[2rem] rounded-[4px] mt-[50px] 
                 
                 cursor-pointer
                 hover:shadow-custom-cyan  hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300'

                 >Resume
                 </a>
            </div>
            

        </section>
    )
}

export default Hello;