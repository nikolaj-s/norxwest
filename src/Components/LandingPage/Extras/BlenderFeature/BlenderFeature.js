
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBlenderImage } from '../../LandingPageFeature'

import {Image} from '../../../Hooks/Image'

import "./BlenderFeature.css"

export const BlenderFeature = () => {

    const blenderImage = useSelector(selectBlenderImage);

    return (
        <div className='blender-feature-container'>
            <div className='blender-feature-tag'>
                <h3>3D Feature</h3>
            </div>
            <div className='blender-feature-image-container'>
                <Image image={blenderImage} objectFit="container" />
            </div>
            
        </div>
    )
}

