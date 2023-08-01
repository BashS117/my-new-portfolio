
function Hello(){
    return(
        <section className='flex justify-center flex-col items-start min-h-[80vh]; h-[82vh] min-w-full'>
            <div className='' style={{ transitionDelay: '100ms' }}>
                <h1 className="text-green mb-[18px] font-normal ">Hi, my name is</h1>
            </div>

            <div className='fadeup2' style={{ transitionDelay: '200ms' }}>
                <h2 className='text-clamp font-[600] m-0'>Sebastian Rodriguez. </h2>
            </div>

            <div className='fadeup3' style={{ transitionDelay: '300ms' }}>
                <h3 className='text-clamp mt-[5px] text-Soft-blue leading-[0.9] '>I like making interactive things whit code</h3>
            </div>
            <div className='fadeup4' style={{ transitionDelay: '400ms' }}>
                <p>
                "I am a passionate web developer with skills in HTML, CSS, JavaScript, ReactJs, Git, GitHub, and NPM. I enjoy using my creativity to design dynamic and attractive user interfaces. I constantly work on improving my techniques and skills because there are always new tools and technologies to explore in web development."  </p>
            </div>

            <div className='fadeup5' style={{ transitionDelay: '500ms' }}>
                <a
                  
                className='
                btn-3d block text-Cyan 
                 border border-Cyan 
                 py-[1rem] px-[2rem] rounded-[4px] mt-[50px] 
                 
                 cursor-pointer
                 hover:shadow-custom-cyan  hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300
                 '>Resume
                 </a>
            </div>
            

        </section>
    )
}

export default Hello;