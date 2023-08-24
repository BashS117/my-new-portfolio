import React from 'react'
import {AiFillGithub} from "react-icons/ai"
import {BiLinkExternal} from "react-icons/bi"



function ProjectCard  ({
    name,
    imageSrc,
    features,
    contentClassName
})  {

  return (
    <div className="p-4 rounded-lg shadow-md bg-[#112240] w-[450px] ">
   
   
      <div className='relative cursor-pointer'> 
      <figure>
            <img className='h-[220px] w-[460px] object-cover rounded-md ' src={imageSrc} alt={name} />
            <div className=" before:absolute before:bg-navy before:rounded-[5px]  before:inset-0 before:w-full before:h-full  before:opacity-[0.50] before:transition-opacity before:duration-300 before:hover:opacity-0">
            <div className=" before:absolute before:bg-Cyan before:rounded-[5px]  before:inset-0 before:w-full before:h-full  before:opacity-[0.45] before:transition-opacity before:duration-300 before:hover:opacity-0"></div>

            </div>
        </figure>
          </div>
       
    
      <h2 className='text-Cyan'>{name}</h2>
      <ul className={`contentClassName flex mb-[10px]`}> {/* Aplicar la clase de estilo de contenido específica */}
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <a href="" className="pb-[0px] mr-[10px]">
         <AiFillGithub className="h-7 w-7  inline-block transform transition-transform duration-200 ease-in hover:-translate-y-[6px] "/>
      </a>
      <a href="" className="pb-[0px]">
         <BiLinkExternal className="h-7 w-7  inline-block transform transition-transform duration-200 ease-in hover:-translate-y-[6px] "/>
      </a>
      

    </div>
  );
}

export default ProjectCard