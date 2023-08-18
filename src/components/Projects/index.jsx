import React from 'react'
import ProjectCard from '../ProjectCard'

const Projects = () => {
    const myProjects=[
        {   
          name: "Sol y Luna",
          imageSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a01f3e177918813.64dec35daf90d.png",
          features: ["char 11", "char 2", "char 3"],
          contentClassName: "text-lightest-slate", // Clase para estilos de contenido del proyecto 2
        },
        {
          name: "Proyecto 2",
          imageSrc: "ruta/imagen-proyecto-2.jpg",
          features: ["char 1", "char 2", "char 3"],
          contentClassName: "text-lightest-slate", // Clase para estilos de contenido del proyecto 2
       
        },
        {
          name: "Proyecto 3",
          imageSrc: "ruta/imagen-proyecto-2.jpg",
          features: ["char 1", "char 2", "char 3"],
          contentClassName: "text-lightest-slate", // Clase para estilos de contenido del proyecto 2
        },
    
        
      ]
  return (
    <section className=' '>
     <h2 className='number-heading before:[content:"02."] '>  Some Things I´ve Built</h2>
<div className='grid grid-cols-2 gap-4 min-w-[330px]'>
        {myProjects.map((project,index)=>(
         <ProjectCard
         key={index}
         name={project.name}
         imageSrc={project.imageSrc}
         features={project.features}
         contentClassName={project.contentClassName}
      />
    ))}
    </div>
    </section>
  )
}

export default Projects