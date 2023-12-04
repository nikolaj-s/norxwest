import React from 'react'
import { useDispatch } from 'react-redux'
import { ContentDivider } from '../ContentDivider/ContentDivider'
import { setCurrentPage, setNavTop } from '../Navigation/NavigationFeature'
import { Extras } from './Extras/Extras'
import { Featured } from './Featured/Featured'


import { SplashScreen } from './SplashScreen/SplashScreen'


import "./LandingPage.css"

export const LandingPage = () => {

    const dispatch = useDispatch();


    React.useEffect(() => {
        dispatch(setNavTop(false))
        dispatch(setCurrentPage(""))
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='landing-page-outer-container'>
            <SplashScreen />
            <Extras />
            <ContentDivider />
            <Featured />
            
        </div>
    )
}
