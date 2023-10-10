import React from 'react'

function Contact ()  {
  return (

    <section id="contact">
        <div>
        <h1 className=' number-heading get-in-touch section-list-item before:[content:"04."] '>
        What's Next? 
        </h1>
        </div>
        

        <div className='mt-10 flex flex-col items-center'>
            <h1 className='text-Cyan text-[50px]'>Get In Touch</h1>
            <p className='sm:p-0 sm:text-center mt-10 px-[100px]'>
            Thank you for visiting my portfolio! If you're interested in discussing a project, have a question, or simply want to say hello, I'd love to hear from you. Feel free to reach out using the button below, and I'll get back to you as soon as possible.
          
            </p>
            <a
                  
                  className='
                  btn-3d block text-Cyan 
                   border border-Cyan 
                   py-[1rem] px-[2rem] rounded-[4px] mt-[50px] 
                   
                   cursor-pointer
                   hover:shadow-custom-cyan  hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300
                   '

                   href='mailto:sebasrm2000@gmail.com?subject=Job%20Offer&body=Hello%20there%2C%20we%20contacted%20you%20from%20your%20website'
                   >Hire me
            </a>

        </div>


        </section>


  )
}

export default Contact