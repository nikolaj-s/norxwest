import React from 'react'
import { useSelector } from 'react-redux';
import { selectSplashScreenImage, selectSplashScreenSubTitle, selectSplashScreenTitle } from '../LandingPageFeature';

import "./SplashScreen.css";

export const SplashScreen = () => {

    const title = useSelector(selectSplashScreenTitle);

    const splashScreenImage = useSelector(selectSplashScreenImage);

    const splashScreenSubTitle = useSelector(selectSplashScreenSubTitle);

    const jumpScrollFunc = () => {
        window.scrollTo(0, 800)
    }

    return (
        <div className="splash-screen-container">
            <div className="inner-splash-screen-container">
                <h1 id="first-content-wrapper">{title}</h1>
                <p>{splashScreenSubTitle}</p>
            </div>
            <div className="back-splash-container">
                <img src={splashScreenImage} alt="back-splash" />
            </div>
            <div onClick={jumpScrollFunc} className='flashing-arrow-container'>
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M45.5958 11.5333C45.419 11.1968 45.1536 10.9149 44.8283 10.7181C44.5031 10.5213 44.1302 10.4171 43.75 10.4167H6.25C5.87051 10.4182 5.49862 10.5232 5.17433 10.7203C4.85005 10.9174 4.58563 11.1992 4.40952 11.5354C4.23341 11.8715 4.15226 12.2494 4.17481 12.6282C4.19736 13.007 4.32275 13.3725 4.5375 13.6854L23.2875 40.7687C23.4786 41.0463 23.7344 41.2733 24.0327 41.4301C24.331 41.5869 24.663 41.6688 25 41.6688C25.337 41.6688 25.669 41.5869 25.9673 41.4301C26.2656 41.2733 26.5214 41.0463 26.7125 40.7687L45.4625 13.6854C45.6793 13.3732 45.8064 13.0074 45.8299 12.628C45.8535 12.2486 45.7725 11.87 45.5958 11.5333ZM25 35.9229L10.225 14.5833H39.775L25 35.9229Z" fill="black"/>
                </svg>
            </div>
        </div>
    )
}


