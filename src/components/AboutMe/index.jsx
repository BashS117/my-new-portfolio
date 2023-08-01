
// import myfoto from '../assets/myfoto.png'

function AboutMe  ()  {
  return (
    <section className='section-about max-w-[900px]  mx-12'>
        <h2 className='number-heading'>About Me</h2>
        <div className='inner grid grid-cols-2 gap-[50px]'>
            <div className='about visible opacity-[1] min-w-[510px]  '>
                <div>
                    <p>
                    From childhood, I had access to a computer, and my desire for video games led me to download them illegally from the internet. This experience made me realize the potential of knowledge and sparked my interest in understanding how things worked, eventually leading me to discover programming.
                    </p>
                    <p>
 I pursued Systems Engineering at the University of Santiago de Cali but had to drop out due to COVID-19. Later, I discovered Web Development on Platzi, it attracted me because it allowed me to use my creativity to problem-solving. My prior programming knowledge made it easy for me to learn HTML, CSS, and JS. </p> 
 
                    <p>
                        My main goal is to learn advanced techniques of React.js and
                         Next.js. I'm willing to learn
                          and improve constantly to keep creating amazing things. Thanks for reading
                           about me!
                    </p>
                    <p>
                        Here are a few technologies i've been working whit recently:

                    </p>
                </div>
                <ul className='tech-list grid grid-cols-2 gap-y-[10px] mt-[20px] '>
                    <li>Next.js</li>
                    <li>JavaScript (ES6+)</li>
                    <li>React.js</li>
                    <li>npm</li>


                </ul>

            </div>
            <div className='about-picture'>
                <div className='wrapper'>
                    <div>
                        <img src="myfoto" alt="" />
                    </div>
                    <div>
                        <picture>

                        </picture>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default AboutMe