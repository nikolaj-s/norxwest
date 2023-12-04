import { configureStore } from "@reduxjs/toolkit";
import LandingPageFeature from "../Components/LandingPage/LandingPageFeature";
import NavigationFeature from "../Components/Navigation/NavigationFeature";
import ProjectsPageFeature from "../Components/ProjectsPage/ProjectsPageFeature";
import ReviewsFeature from "../Components/ReviewsPage/ReviewsFeature";


const Store = configureStore({
    reducer: {
        LandingPageFeature: LandingPageFeature,
        NavigationFeature: NavigationFeature,
        ProjectsPageFeature: ProjectsPageFeature,
        ReviewsFeature: ReviewsFeature
    }
})

export default Store;