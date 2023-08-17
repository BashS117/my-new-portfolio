import React from 'react'
import ProjectCard from '../ProjectCard'

const Projects = () => {
    const myProjects=[
        {   
          name: "Proyecto 1",
          imageSrc: "ruta/imagen-proyecto-2.jpg",
          features: ["Característica 1", "Característica 2", "Característica 3"],
          contentClassName: "text-lightest-slate", // Clase para estilos de contenido del proyecto 2
        },
        {
          name: "Proyecto 2",
          imageSrc: "ruta/imagen-proyecto-2.jpg",
          features: ["Característica 1", "Característica 2", "Característica 3"],
          contentClassName: "text-lightest-slate", // Clase para estilos de contenido del proyecto 2
       
        },
        {
          name: "Proyecto 3",
          imageSrc: "ruta/imagen-proyecto-2.jpg",
          features: ["Característica 1", "Característica 2", "Característica 3"],
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
         imageSrc={project.name}
         features={project.features}
         contentClassName={project.contentClassName}
      />
    ))}
    </div>
    </section>
  )
}

export default Projects