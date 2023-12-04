import React from 'react'
import { useDispatch } from 'react-redux';
import { setCurrentPage, setNavTop } from '../Navigation/NavigationFeature';


import { ContactWidget } from './ContactWidget/ContactWidget';
import { Form } from './Form/Form';

import {motion} from 'framer-motion';

import "./ContactPage.css";

export const ContactPage = () => {

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(setNavTop(true));
        dispatch(setCurrentPage("Contact"));
        window.scrollTo(0, 0)
    }, [])

   
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className="contact-page">
            
            <div className="contact-page-wrapper">
                <ContactWidget />
                <div className="contact-form-container">
                    <div className="inner-contact-form-container">
                        <Form />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
