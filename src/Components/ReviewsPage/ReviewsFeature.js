
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import Axios from "axios";


export const fetchReviews = createAsyncThunk(
    'Applice/fetchReviews',
    async (DATA, thunkAPI) => {
        const response = await Axios({
            method: "GET",
            url: "https://reviewsbackend.herokuapp.com/norxwest/get"
        }).then(res => {
            return res.data;
        })
        return response;
    }
)

export const postReview = createAsyncThunk(
    'ReviewsFeature/postReview',
    async (reviewForm, thunkAPI) => {
        console.log(reviewForm)
        const response = await Axios({
            method: "POST",
            url: "https://reviewsbackend.herokuapp.com/norxwest/post",
            data: {form: reviewForm}
        }).then(res => {
            return res.data;
        })

        return response;
    }
)

const ReviewsFeature = createSlice({
    name: "ReviewsFeature",
    initialState: {
        reviewMenuState: false,
        reviews: [],
        loadingReviews: true,
        reviewForm: {
            name: "",
            review: "",
            reviewCode: "",
            rating: 0
        },
        reviewErrorState: false,
        reviewErrorMessage: "",
        postingReviewLoadingState: false,
        failedToPostReview: false,
        failedToPostReviewMessage: "",
    },
    reducers: {
        toggleReviewMenu: (state, action) => {
            state.reviewMenuState = action.payload;
            state.failedToPostReview = false;
            state.failedToPostReviewMessage = "";
        },
        setRating: (state, action) => {
            state.reviewForm.rating = action.payload;
        },
        setName: (state, action) => {
            state.reviewForm.name = action.payload;
        },
        setReview: (state, action) => {
            state.reviewForm.review = action.payload;
        },
        setReviewCode: (state, action) => {
            state.reviewForm.reviewCode = action.payload;
        },
        closeReviewError: (state, action) => {
            state.failedToPostReview = false;
            state.failedToPostReviewMessage = "";
        }
    },
    extraReducers: {
        [fetchReviews.pending]: (state, action) => {
            state.loadingReviews = true;
            state.reviews = [];
            state.reviewErrorState = false;
            state.reviewErrorMessage = "";
        },
        [fetchReviews.rejected]: (state, action) => {
            state.loadingReviews = false;
            state.reviewErrorState = true;
        },
        [fetchReviews.fulfilled]: (state, action) => {
            state.loadingReviews = false;
            state.reviewErrorMessage = "";
            state.reviewErrorState = false;
            state.reviews = action.payload.reviews;
        },

        [postReview.pending]: (state, action) => {
            state.postingReviewLoadingState = true;
            state.failedToPostReview = false;
            state.failedToPostReviewMessage = "";
        },
        [postReview.rejected]: (state, action) => {
            state.postingReviewLoadingState = false;
            state.failedToPostReview = true;
        },
        [postReview.fulfilled]: (state, action) => {
            
            if (action.payload.error) {
                state.failedToPostReview = true;
                state.failedToPostReviewMessage = action.payload.error;
            } else {
                state.failedToPostReview = true;
                state.failedToPostReviewMessage = "Thank You For Submitting A Review !";
                state.reviewForm = {name: "", review: "", reviewCode: "", rating: 0}
            }

            state.postingReviewLoadingState = false;
            
        }
    }
})

export const selectReviews = state => state.ReviewsFeature.reviews;

export const selectLoadingReviews = state => state.ReviewsFeature.loadingReviews;

export const selectReviewMenuState = state => state.ReviewsFeature.reviewMenuState;

export const selectReviewForm = state => state.ReviewsFeature.reviewForm;

export const selectPostingReviewErrorStatus = state => state.ReviewsFeature.failedToPostReview;

export const selectPostingReviewErrorMessage = state => state.ReviewsFeature.failedToPostReviewMessage;

export const selectPostingReviewLoadingState = state => state.ReviewsFeature.postingReviewLoadingState;

export const {toggleReviewMenu, setRating, setName, setReview, setReviewCode, closeReviewError} = ReviewsFeature.actions;

export default ReviewsFeature.reducer;

