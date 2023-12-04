import React from 'react'
import { Accomplishments } from './Accomplishments/Accomplishments'
import { Bio } from './Bio/Bio'
import { Graph } from './Graph/Graph'


import { Skills } from './Skills/Skills'
import {motion} from 'framer-motion'
import { Upcoming } from './Upcoming/Upcoming'
import { useDispatch } from 'react-redux'
import { setCurrentPage, setNavTop } from '../Navigation/NavigationFeature'

import "./PortFolio.css"

export const PortFolio = (props) => {

    const dispatch = useDispatch();

    React.useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(setNavTop(true));
        dispatch(setCurrentPage("Portfolio"));
    })


    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className="outer-portfolio-container">
            <div style={{height: '90px', flexShrink: '0', width: "100%"}}></div>
            <Bio />
            <Accomplishments />
            <Skills />
            <Graph />
            <Upcoming />
        </motion.div>
    )
}
