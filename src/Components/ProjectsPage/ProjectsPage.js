import React from 'react'

import "./Projects.css"
import { ProjectCard } from './ProjectCard/ProjectCard'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPage, setNavTop } from '../Navigation/NavigationFeature'
import { selectProjects } from './ProjectsPageFeature'

import {motion} from 'framer-motion'
import { Route, Routes } from 'react-router-dom'
import { ProjectExpanded } from './ProjectExpanded/ProjectExpanded'

export const ProjectsPage = (props) => {

    const projects = useSelector(selectProjects);

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(setNavTop(true))
        dispatch(setCurrentPage("Projects"))
        window.scrollTo(0, 0)
    }, [])

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className="projects-container">
            <div style={{height: '130px', flexShrink: '0', width: "100%"}}></div>
            <div className='projects-inner-container'>
                {
                projects.map((data, i) => {
                    
                    return <ProjectCard key={data.title} data={data} style={Number(i) % 2 === 0 ? "row" : 'row-reverse'} />
                })}
            </div>
            <Routes>
                <Route path={':id'} element={<ProjectExpanded />} />
            </Routes>
        </motion.div>
    )
}
