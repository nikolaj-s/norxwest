import { createSlice } from "@reduxjs/toolkit";


const LandingPageFeature = createSlice({
    name: "LandingPageFeature",
    initialState: {
        // splash screen state
        splashScreenTitle: "Nor. X West Designs",
        splashScreenBackDrop: "https://res.cloudinary.com/drlkgoter/image/upload/v1639683439/Nor.%20X%20west/Rectangle_3_chitqz.png",
        splashScreenSubTitle: "Developer Focused on Truly Unique Designs",
        // featured state
        featuredSlides: [{
            image: "https://res.cloudinary.com/drlkgoter/image/upload/v1616188826/Nor.%20X%20west/Bubblead_pba7et.jpg",
            name: "The Bubble",
            link: "https://thebubble.network/"
        }],
        currentFeaturedSlideIndex: 0,

        // blender feature
        blenderImage: "https://res.cloudinary.com/drlkgoter/image/upload/v1639692674/Nor.%20X%20west/Rectangle_14_y7kplq.png",

        // intro text state

        intro: "Hello, Looking for a skilled full stack web developer located on Salt Spring Island? Look no further! I am a highly experienced developer with expertise in the MERN stack. From designing eye-catching user interfaces to building robust backend systems, I can handle it all. With a strong track record of delivering successful web projects, I am confident in my ability to bring your ideas to life. Let's collaborate and create something amazing together.",
    
    }
})

// splash screen selectors
export const selectSplashScreenTitle = state => state.LandingPageFeature.splashScreenTitle;

export const selectSplashScreenImage = state => state.LandingPageFeature.splashScreenBackDrop;

export const selectSplashScreenSubTitle = state => state.LandingPageFeature.splashScreenSubTitle;

// featured selectors
export const selectFeaturedSlides = state => state.LandingPageFeature.featuredSlides;

export const selectFeaturedSlideIndex = state => state.LandingPageFeature.currentFeaturedSlideIndex;

// blender feature selector
export const selectBlenderImage = state => state.LandingPageFeature.blenderImage;

// intro text state
export const selectIntroTextState = state => state.LandingPageFeature.intro;

export default LandingPageFeature.reducer;