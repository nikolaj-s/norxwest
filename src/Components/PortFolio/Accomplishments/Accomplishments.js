import React from 'react'

import "./Accomplishments.css"
import { PhotoShop } from './PhotoShop/PhotoShop'

export const Accomplishments = () => {
    
    
    return (
        <div className="accomplishments-outer-container">
            <div className="photography-container">
                <br />
                <h2>
                    Dabble's in photoshop and photography
                </h2>
                <br />
                <PhotoShop />
            </div>
            <div className="accomplishments-text-container">
                <br />
                <h2>My Biggest Accomplishment</h2>
                <br />
                <p>My biggest accomplishment has been working on a desktop application called Bubble for the past year, which rivals Discord in its features and functionality. This project has required extensive dedication, ingenuity, and skill, as I have striven to create a user-friendly and innovative platform. I am proud of the progress and impact Bubble has made thus far and excited to see how it continues to evolve and empower users in the future.</p>
                <p>Check out the download page and Github page <a target='_blank' rel='noopener' href='https://temp-bubble-download-page.netlify.app/'>here</a></p>
            </div>
        </div>
    )
}
