import React from 'react'

import {motion, useAnimation} from 'framer-motion';

export const Image = ({image, key = 'one', objectFit = 'cover'}) => {

    const [loading, toggleLoading] = React.useState(true);

    const imageAnimation = useAnimation();

    const handleImageLoad = () => {
        toggleLoading(false);

        imageAnimation.start({
            opacity: 1
        })
    }

    return (
        <div style={{position: 'relative', objectFit: objectFit, width: '100%', height: '100%'}}>
            {loading ?
            <motion.div 
            style={{
                background: 'linear-gradient(270deg, rgba(0, 0, 0, 0.85), rgba(98, 98, 98, 0.85), rgba(0, 0, 0, 0.85))',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundSize: '600% 600%'
            }}
            initial={{backgroundPosition: '0% 50%'}}
            animate={{backgroundPosition: ['0% 50%', '300% 50%']}}
            transition={{ease: 'linear', duration: 3, repeat: Infinity}}
            ></motion.div>         
            : null}
            <motion.img style={{width: '100%', height: '100%', objectFit: objectFit}} initial={{opacity: 0}} animate={imageAnimation} onLoad={handleImageLoad} src={image} alt="Error Loading" />
        </div>
    )
}
