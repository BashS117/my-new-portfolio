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
          description:"A web application allows users to shorten valid URLs and manage a list of their shortened links. It supports easy link copying and provides error messages for empty input submissions. The interface is responsive, adapting to different screen sizes, and includes hover and focus states for interactive elements.", 
          name: "Url-Shortening",
          imageSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/b2aee1177918813.6525838f60a78.png",
          features: ["React.js", "TailwindCSS", "API","Fetch"],
          contentClassName: "text-lightest-slate", // Clase para estilos de contenido del proyecto 2
          projectLink: "https://urlshorteninglinks.netlify.app/",
          repositoryLink: "https://github.com/BashS117/url-shortening-landing-page"
        },
        { 
          type: "Personal Project", 
          description:"An anonymous question submission web app allows users send questions, questions persist on page reload, enabling viewing of other users. Each question has a dedicated route and a share button for shares on social media as a open-graph image.", 
          name: "Anonimous Questions",
          imageSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/b28e33177918813.65259eb0c34e3.png",
          features: ["Next.js", "TailwindCSS", "Client/Server Component", "Supabase"],
          contentClassName: "text-lightest-slate", // Clase para estilos de contenido del proyecto 2
          projectLink: "https://anonimous-questions.vercel.app/",
          repositoryLink: "https://github.com/BashS117/anonimous-questions"
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
        {
          type: "Personal Project",  
          name: "News Homepage",
          description:"This was an excellent project to practice my CSS Grid skills. There were a couple of tricky decisions that I had to make.",
          imageSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/ff740d177918813.65256d2b00db7.png",
          features: ["Next.js", "TailwindCSS", "Grid Areas" ],
          contentClassName: "text-lightest-slate", // Clase para estilos de contenido del proyecto 2
          projectLink: "https://news-homepage-by-bashcode.netlify.app/",
          repositoryLink: "https://github.com/BashS117/news-homepage"
        },
    
        
      ]
  return (
    <section id='projects'>
     <h2 className='number-heading before:[content:"01."] '>  Some Things I´ve Built</h2>
<div className='sm:min-w-[375px] sm:flex sm:flex-col sm:items-center grid grid-cols-2 gap-4 min-w-[330px]'>
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