import React from 'react'
import { Image } from '../../../Hooks/Image'

import "./PhotoShop.css"

export const PhotoShop = () => {
    
    const images = [
        "https://res.cloudinary.com/drlkgoter/image/upload/v1616175103/Nor.%20X%20west/20161228_135654_ufqazh.jpg",
        "https://res.cloudinary.com/drlkgoter/image/upload/v1616175106/Nor.%20X%20west/Snapchat-4260713_fgpilc.jpg",
        "https://res.cloudinary.com/drlkgoter/image/upload/v1616175101/Nor.%20X%20west/2021-02-13_11.36.55_mxsugn.jpg",
        "https://res.cloudinary.com/drlkgoter/image/upload/v1616175100/Nor.%20X%20west/20170115_163311_zmh6e2.jpg",
        "https://res.cloudinary.com/drlkgoter/image/upload/v1616175101/Nor.%20X%20west/20161228_140100_gaam55.jpg",
        "https://res.cloudinary.com/drlkgoter/image/upload/v1616175110/Nor.%20X%20west/splice72_i6ihy4.jpg",
        "https://res.cloudinary.com/drlkgoter/image/upload/v1616175115/Nor.%20X%20west/splice92_snfxnb.jpg",
        "https://res.cloudinary.com/drlkgoter/image/upload/v1616175100/Nor.%20X%20west/20161228_164720_qwvrkq.jpg",
        "https://res.cloudinary.com/drlkgoter/image/upload/v1616176250/Nor.%20X%20west/Snapchat-2110890466_xq1r9o.jpg"
    ]


    return (
        <div className="photo-shop-display-container">
            {images.map(image => {
                return (
                    <div  key={image} className="image-container">
                        <Image image={image} />
                    </div>
                )
            })}
        </div>
    )
}
