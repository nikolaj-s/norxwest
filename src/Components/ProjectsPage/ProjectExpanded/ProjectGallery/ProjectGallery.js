import React from 'react'

import {Image} from "../../../Hooks/Image";

import "./ProjectGallery.css";

export const ProjectGallery = ({project}) => {
  return (
    <div className='project-gallery-container'>
        {project.desktopPreviews !== false ? 
        <div className='desktop-prev expanded-project-image-container'>
            <Image image={project.desktopPreviews[0]} />
        </div> : null}
        {project.desktopPreviews.mobilePreviews !== false ? 
        <div className='mobile-prev'>
            {project.mobilePreviews.map((image, key) => {
                return (
                    <div key={key} className='mobile-image-contaienr expanded-project-image-container'>
                        <Image objectFit='fit' image={image} />
                    </div>
                    )
                })}
        </div> : null}
        {(project.desktopPreviews !== false && project.desktopPreviews.length > 1) ? 
        <div className='desktop-prev expanded-project-image-container'>
            <Image image={project.desktopPreviews[1]} />
        </div> : null}
    </div>
  )
}
