import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectLoadingReviews, selectReviewMenuState, selectReviews, toggleReviewMenu } from './ReviewsFeature'
import { Loading } from './Loading/Loading'
import { Menu } from './Menu/Menu'
import { Review } from './Review/Review'
import {motion} from 'framer-motion'

import "./Reviews.css"
import { setCurrentPage, setNavTop } from '../Navigation/NavigationFeature'

export const Reviews = () => {

    const dispatch = useDispatch()

    const reviews = useSelector(selectReviews);

    const loading = useSelector(selectLoadingReviews);

    const reviewMenuState = useSelector(selectReviewMenuState);
    
    React.useEffect(() => {
        dispatch(setNavTop(true))
        dispatch(setCurrentPage("Reviews"))
        window.scrollTo(0, 0)
    }, [])
    
    const handleReviewMenu = () => {
        if (reviewMenuState) {
            dispatch(toggleReviewMenu(false))
            document.getElementsByTagName('body')[0].style.overflowY = 'auto'
        } else {
            dispatch(toggleReviewMenu(true))
            document.getElementsByTagName('body')[0].style.overflowY = 'hidden'
        }
    }

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className="reviews-outer-container">
            <div className="subtitle-reviews-title">
                <div></div>
                <div onClick={handleReviewMenu} className="post-review-container">
                    <svg width="85" height="85" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M74.375 5.3125C75.784 5.3125 77.1352 5.87221 78.1315 6.86849C79.1278 7.86478 79.6875 9.21604 79.6875 10.625V74.375C79.6875 75.784 79.1278 77.1352 78.1315 78.1315C77.1352 79.1278 75.784 79.6875 74.375 79.6875H10.625C9.21604 79.6875 7.86478 79.1278 6.86849 78.1315C5.87221 77.1352 5.3125 75.784 5.3125 74.375V10.625C5.3125 9.21604 5.87221 7.86478 6.86849 6.86849C7.86478 5.87221 9.21604 5.3125 10.625 5.3125H74.375ZM10.625 0C7.80707 0 5.10456 1.11942 3.11199 3.11199C1.11942 5.10456 0 7.80707 0 10.625L0 74.375C0 77.1929 1.11942 79.8954 3.11199 81.888C5.10456 83.8806 7.80707 85 10.625 85H74.375C77.1929 85 79.8954 83.8806 81.888 81.888C83.8806 79.8954 85 77.1929 85 74.375V10.625C85 7.80707 83.8806 5.10456 81.888 3.11199C79.8954 1.11942 77.1929 0 74.375 0L10.625 0Z" fill="black"/>
                    <path d="M42.5 21.25C43.2045 21.25 43.8801 21.5299 44.3783 22.028C44.8764 22.5261 45.1562 23.2018 45.1562 23.9062V39.8438H61.0938C61.7982 39.8438 62.4739 40.1236 62.972 40.6217C63.4701 41.1199 63.75 41.7955 63.75 42.5C63.75 43.2045 63.4701 43.8801 62.972 44.3783C62.4739 44.8764 61.7982 45.1562 61.0938 45.1562H45.1562V61.0938C45.1562 61.7982 44.8764 62.4739 44.3783 62.972C43.8801 63.4701 43.2045 63.75 42.5 63.75C41.7955 63.75 41.1199 63.4701 40.6217 62.972C40.1236 62.4739 39.8438 61.7982 39.8438 61.0938V45.1562H23.9062C23.2018 45.1562 22.5261 44.8764 22.028 44.3783C21.5299 43.8801 21.25 43.2045 21.25 42.5C21.25 41.7955 21.5299 41.1199 22.028 40.6217C22.5261 40.1236 23.2018 39.8438 23.9062 39.8438H39.8438V23.9062C39.8438 23.2018 40.1236 22.5261 40.6217 22.028C41.1199 21.5299 41.7955 21.25 42.5 21.25Z" fill="black"/>
                    </svg>
                </div>
            </div>
            <div className="reviews-inner-wrapper">
                {loading ? 
                <Loading status={"Loading Reviews"} />
                :
                reviews.map((review, i) => {
                    return <Review review={review} key={i} />
                })
                }
            </div>
            {reviewMenuState ? <Menu toggle={handleReviewMenu} /> : null}
        </motion.div>
    )
}
