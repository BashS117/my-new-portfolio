
// import myfoto from '../assets/myfoto.png'

function AboutMe  ()  {
  return (
    <section className='section-about max-w-[900px] ' id="about">
        <h2 className='sm:text-[1.5rem] number-heading section-list-item before:[content:"02."]'>About Me</h2>
        <div className='sm:flex sm:flex-col sm:items-center grid grid-cols-[3fr,2fr] gap-[50px]'>
            <div className='about   '>
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
                <ul className='tech-list grid grid-cols-2 gap-y-[10px] mt-[20px] list-[disclosure-closed] pl-6 marker:text-Cyan text-sm'>
                    <li>Next.js</li>
                    <li>JavaScript (ES6+)</li>
                    <li>React.js</li>
                    <li>npm</li>


                </ul>

            </div>

              <div className='about-picture group relative 
              h-[min-content] w-[min-content]
              '>
                    <div className='wrapper absolute z-[1]  '>
                        <figure className="                          
                        hover:-translate-x-1.5 hover:-translate-y-1.5 transition-all duration-300
                            ">
                            <img className=" 
                                h-[350px] w-[300px] object-cover rounded-[5px]" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/049411176699705.64c96d3db707b.jpeg" alt="" />
                                {/* filtro */}
                            <div className=" before:absolute before:bg-Cyan before:rounded-[5px] before:inset-0 before:w-full before:h-full  before:opacity-[0.35] before:transition-opacity before:duration-300 before:hover:opacity-0"></div>
                        </figure>
                    </div>


                  <div className="
                         after:relative t-[10px] w-[300px] h-[350px]
                         after:content-[''] after:border-Cyan
                         after:block  after:w-[100%] after:h-[100%] 
                         after:rounded-[5px] after:border-[2px] 
                         after:inset-[14px]

                         group-hover:after:-translate-x-[-5px]
                         group-hover:after:-translate-y-[-5px] group-hover:after:transition-all duration-300
                  "></div>
              </div>
            
        </div>
        
    </section>
  )
}

export default AboutMe