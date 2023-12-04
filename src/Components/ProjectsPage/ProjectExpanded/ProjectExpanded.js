import React from 'react'

import {motion, useAnimation} from 'framer-motion'

import "./ProjectExpanded.css";
import { useSelector } from 'react-redux';
import { selectProject } from '../ProjectsPageFeature';
import { ProjectInfo } from './ProjectInfo/ProjectInfo';
import { ProjectGallery } from './ProjectGallery/ProjectGallery';
import { SourceCodePrev } from './SourceCodePrev/SourceCodePrev';

export const ProjectExpanded = () => {

    const expandedProjectAnimationState = useAnimation();

    React.useEffect(() => {
        // animates the page opening on component mount
        expandedProjectAnimationState.start({
            scale: 1
        })
        // sets body overflow to hidden to prevent double scroll bars
        document.body.style.overflowY = 'hidden'

        // on compount unmount set animation state to scale 0, and
        // return the overflow to y on the body element
        return () => {

            expandedProjectAnimationState.start({
                scale: 0
            })

            document.body.style.overflowY = 'auto'
        }

    }, [])

    // selects the project from the ProjectsPageFeature
    const project = useSelector(selectProject);
    // function to handle opening site link in a new tab
    const visitSite = () => {
        window.open(project.link, "_blank");
    }

    return (
        <motion.div initial={{scale: 0}} animate={expandedProjectAnimationState} className='outer-expanded-project-container'>
            
            <div className='inner-expanded-project-container'>
                {project.type === 'website' ? <ProjectGallery project={project} /> : null}
                {project.type === 'website' ? <ProjectInfo visitSite={visitSite} project={project} /> : null}

                {project.type === 'code' ? <SourceCodePrev /> : null}
            </div>
        </motion.div>
    )
}
