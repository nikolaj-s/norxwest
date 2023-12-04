import { createSlice } from "@reduxjs/toolkit";

const NavigationFeature = createSlice({
    name: "NavigationFeature",
    initialState: {
        mobileNavigationOpen: false,
        navTop: false,
        currentPage: "",
        links: ["Home", "Portfolio", "Projects", "Reviews", "Contact"]
        
    },
    reducers: {
        toggleMobileNavigation: (state, action) => {
            state.mobileNavigationOpen = action.payload;
        },
        setNavTop: (state, action) => {
            state.navTop = action.payload;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        }
    }
})

// navigation selection
export const selectMobileNavigationState = state => state.NavigationFeature.mobileNavigationOpen;
export const selectLinks = state => state.NavigationFeature.links;
export const selectNavTop = state => state.NavigationFeature.navTop;
export const selectCurrentPage = state => state.NavigationFeature.currentPage;

// navigation actions

export const {toggleMobileNavigation, setNavTop, setCurrentPage} = NavigationFeature.actions;

export default NavigationFeature.reducer;