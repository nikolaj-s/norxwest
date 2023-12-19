
import React from 'react'
import { useSelector } from 'react-redux'
import { Image } from '../../Hooks/Image'
import { selectFeaturedSlideIndex, selectFeaturedSlides } from '../LandingPageFeature'

import "./Featured.css"

export const Featured = () => {

    const featuredSlides = useSelector(selectFeaturedSlides);

    const featuredSlideIndex = useSelector(selectFeaturedSlideIndex);

    const currentSlide = featuredSlides[featuredSlideIndex];

    const goToFeature = () => {
        window.location.pathname = '/projects/bubble'
    }

    return (
        <div className='featured-cards-container'>
            <div className='inner-featured-cards-container'>
                <div className='featured-tag'>
                    <h3>Featured</h3>
                </div>
                <div className='card-image-container'>
                    <Image objectFit='contain' image={"https://res.cloudinary.com/drlkgoter/image/upload/v1703015460/Screenshot_2023-12-19_115414_m5wyzh.png"} />
                </div>
                
                <div onClick={goToFeature} className='featured-button'>
                    <h3>Bubble</h3>
                    <svg width="64" height="62" viewBox="0 0 64 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M60 7.75C60 6.72229 59.5786 5.73666 58.8284 5.00996C58.0783 4.28326 57.0609 3.875 56 3.875H8C6.93913 3.875 5.92172 4.28326 5.17157 5.00996C4.42143 5.73666 4 6.72229 4 7.75V54.25C4 55.2777 4.42143 56.2633 5.17157 56.99C5.92172 57.7167 6.93913 58.125 8 58.125H56C57.0609 58.125 58.0783 57.7167 58.8284 56.99C59.5786 56.2633 60 55.2777 60 54.25V7.75ZM0 7.75C0 5.69457 0.842855 3.72333 2.34315 2.26992C3.84344 0.816516 5.87827 0 8 0L56 0C58.1217 0 60.1566 0.816516 61.6569 2.26992C63.1571 3.72333 64 5.69457 64 7.75V54.25C64 56.3054 63.1571 58.2767 61.6569 59.7301C60.1566 61.1835 58.1217 62 56 62H8C5.87827 62 3.84344 61.1835 2.34315 59.7301C0.842855 58.2767 0 56.3054 0 54.25V7.75ZM18 29.0625C17.4696 29.0625 16.9609 29.2666 16.5858 29.63C16.2107 29.9933 16 30.4861 16 31C16 31.5139 16.2107 32.0067 16.5858 32.37C16.9609 32.7334 17.4696 32.9375 18 32.9375H41.172L32.584 41.2533C32.398 41.4334 32.2505 41.6472 32.1499 41.8826C32.0493 42.118 31.9975 42.3702 31.9975 42.625C31.9975 42.8798 32.0493 43.132 32.1499 43.3674C32.2505 43.6028 32.398 43.8166 32.584 43.9967C32.77 44.1769 32.9907 44.3198 33.2337 44.4173C33.4766 44.5148 33.737 44.5649 34 44.5649C34.263 44.5649 34.5234 44.5148 34.7663 44.4173C35.0093 44.3198 35.23 44.1769 35.416 43.9967L47.416 32.3717C47.6023 32.1918 47.75 31.978 47.8508 31.7426C47.9517 31.5072 48.0036 31.2548 48.0036 31C48.0036 30.7452 47.9517 30.4928 47.8508 30.2574C47.75 30.022 47.6023 29.8082 47.416 29.6283L35.416 18.0033C35.23 17.8231 35.0093 17.6802 34.7663 17.5827C34.5234 17.4852 34.263 17.4351 34 17.4351C33.737 17.4351 33.4766 17.4852 33.2337 17.5827C32.9907 17.6802 32.77 17.8231 32.584 18.0033C32.398 18.1834 32.2505 18.3972 32.1499 18.6326C32.0493 18.868 31.9975 19.1202 31.9975 19.375C31.9975 19.6298 32.0493 19.882 32.1499 20.1174C32.2505 20.3528 32.398 20.5666 32.584 20.7467L41.172 29.0625H18Z" fill="white"/>
                    </svg>
                </div>
            </div>
            
        </div>
    )
}
