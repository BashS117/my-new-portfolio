import React from 'react'

function ProjectCard  ({
    name,
    imageSrc,
    features,
    contentClassName
})  {

  return (
    <div className="p-4 rounded-lg shadow-md bg-white">
      <img src={imageSrc} alt={name} />
      <h2>{name}</h2>
      <ul className={contentClassName}> {/* Aplicar la clase de estilo de contenido específica */}
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectCard