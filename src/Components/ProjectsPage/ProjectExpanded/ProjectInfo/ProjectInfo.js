import React from 'react'

import "./ProjectInfo.css";

export const ProjectInfo = ({project, visitSite}) => {
  return (
    <div className='project-info-container'>
        <h1>{project.name}</h1>
        <p>{project.expandedDescription}</p>
        <h2>{project.name} Is Built Using The Following Technologies</h2>
        {project.technologies.map((tech, i) => {
           return (<li ley={i} >{tech}</li>)
        })}
        <h2>Future Plans</h2>
        <p>{project.futurePlans}</p>
        {project.link !== false ? 
        <div onClick={visitSite} className='check-it-out-button'>
            <h3>Visit Project</h3>
        </div> : null}
    </div>
  )
}
