import React from 'react'
import ProjectCard from '../ProjectCard'

const Projects = () => {
    const myProjects=[
        { 
          type: "Personal Project", 
          description:"An online perfume store's web app provides a shopping platform enabling users to choose between two perfume sizes and add selections to a virtual cart. Its direct WhatsApp integration, enabling customers to send orders to the seller via WhatsApp.", 
          name: "Sol y Luna",
          imageSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/280354177918813.64e3be891cc84.png",
          features: ["React.js", "TailwindCSS", "Vite.js","React Router DOM"],
          contentClassName: "text-lightest-slate", // Clase para estilos de contenido del proyecto 2
          projectLink: "https://sol-y-luna-23.netlify.app",
          repositoryLink: "https://github.com/BashS117/solyluna"
        },
        {
          type: "Personal Project",  
          name: "E-commerce product page",
          description: "I put my JS skills to the test with a lightbox product gallery and cart functionality!. In my gitHub repositories you'll find this challenge build whit React.js and whit some other features (named as React-eshop), I hope you check it out.",
          imageSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/821ddc177918813.64e3be891d77a.png",
          features: ["VanillaJS", "DOM", "Css", "GitHub Pages"],
          contentClassName: "text-lightest-slate", // Clase para estilos de contenido del proyecto 2
          projectLink: "https://bashs117.github.io/react-eshop/",
          repositoryLink: "https://github.com/BashS117/react-eshop"
       
        },
        {
          type: "Personal Project",  
          name: "Todo app",
          description:"The classic todo app with a few twists! This app includes a dark/light theme toggle and drag & drop reordering for anyone wanting an extra test.",
          imageSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/cfe686177918813.64dfd24fc92fa.png",
          features: ["React.js", "Local Storage", "Custom Hooks" ],
          contentClassName: "text-lightest-slate", // Clase para estilos de contenido del proyecto 2
          projectLink: "https://bashs117.github.io/todoapp/",
          repositoryLink: "https://github.com/BashS117/todoapp"
        },
    
        
      ]
  return (
    <section id='projects'>
     <h2 className='number-heading before:[content:"02."] '>  Some Things I´ve Built</h2>
<div className='grid grid-cols-2 gap-4 min-w-[330px]'>
        {myProjects.map((project,index)=>(
         <ProjectCard
         key={index}
         description={project.description}
         type={project.type}
         name={project.name}
         imageSrc={project.imageSrc}
         features={project.features}
         contentClassName={project.contentClassName}
         directLink={project.projectLink}
         repositoryLink={project.repositoryLink}
      />
    ))}
    </div>
    </section>
  )
}

export default Projects