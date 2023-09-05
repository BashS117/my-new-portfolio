import React from 'react'
import {AiFillGithub} from "react-icons/ai"
import {BiLinkExternal} from "react-icons/bi"



function ProjectCard  ({
  type,
    name,
    description,
    imageSrc,
    features,
    contentClassName,
    directLink,
    repositoryLink
})  {

  return (
    <div className="p-4 rounded-lg shadow-md bg-[#112240] w-[450px] hover:-translate-y-1.5 transition-all duration-300 ">
   
   
      <div className='relative cursor-pointer'> 
      <figure>
        <a href={directLink}>
            <img className='h-[220px] w-[460px] object-cover rounded-md ' src={imageSrc} alt={name} />
            <div className=" before:absolute before:bg-navy before:rounded-[5px]  before:inset-0 before:w-full before:h-full  before:opacity-[0.50] before:transition-opacity before:duration-300 before:hover:opacity-0">
            <div className=" before:absolute before:bg-Cyan before:rounded-[5px]  before:inset-0 before:w-full before:h-full  before:opacity-[0.45] before:transition-opacity before:duration-300 before:hover:opacity-0"></div>



            </div></a>
        </figure>
          </div>
       

      <p className='mt-[8px] mb-0 text-Cyan text-[0.9rem]'>{type}</p>
      <h2 className=''>
        <a className='text-3xl' href={directLink}>{name}</a>
      </h2>
      <ul className={`contentClassName flex-col mb-[10px]`}> {/* Aplicar la clase de estilo de contenido específica */}
        <p className='text-[0.9rem]'>{description}</p>
       <div className='flex justify-evenly text-[0.8rem]'>
       {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
       </div>

      </ul>
      <a href={repositoryLink} className="pb-[0px] mr-[10px]">
        <AiFillGithub className="h-7 w-7  inline-block transform transition-transform duration-200 ease-in hover:-translate-y-[6px] " />
      </a>
      <a href={directLink} className="pb-[0px]">
        <BiLinkExternal className="h-7 w-7  inline-block transform transition-transform duration-200 ease-in hover:-translate-y-[6px] " />
      </a>


    </div>
  );
}

export default ProjectCard