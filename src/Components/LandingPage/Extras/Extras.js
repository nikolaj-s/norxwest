import React from 'react'
import { BlenderFeature } from './BlenderFeature/BlenderFeature'

import "./Extras.css"
import { Intro } from './Intro/Intro'

export const Extras = () => {
    return (
        <div className='extras-outer-container'>
            <div className='inner-extras-container'>
                <BlenderFeature />
                <Intro />
            </div>
        </div>
    )
}
