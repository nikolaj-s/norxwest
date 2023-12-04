import React from 'react'

import "./Graph.css"
import {GraphData} from './Data/GraphData'
import { GraphBar } from './GraphBar/GraphBar'

export const Graph = (props) => {

    const closeBars = (e) => {
        
        const bars = document.getElementsByClassName('graph-bar')
        const bar_info = document.getElementsByClassName('graph-info')
        for (let i = 0; i < bars.length; i++) {
            bars[i].style.minWidth = ""
            bars[i].style.minHeight = ""
            bar_info[i].style.display = ""
        }
    }

    const openBar = (e) => {
        try {
            e.stopPropagation()
            closeBars()

            e.target.firstChild.style.display = 'flex'
            
            if (e.target.tagName === 'svg') {
                closeBars()
            }else if (window.innerHeight > window.innerWidth) {
                e.target.style.minWidth = "250px"
                e.target.style.minHeight = "380px"
            } else {
                e.target.style.minWidth = "400px"
                e.target.style.minHeight = "100%"
            }
            
            
        } catch(e) {
            return
        }
        
    }



    return (
        <div className="graph-outer-container">
            <div onClick={closeBars} className="graph-inner-container">
                {GraphData.map((data, i) => {
                    return (
                       <GraphBar close={closeBars} key={i} delay={Number(i)} open={openBar} data={data} />
                    )
                })}
            </div>
        </div>
    )
}
