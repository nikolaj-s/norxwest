import React from 'react'
import { Link } from 'react-router-dom'

import {Image} from "../../Hooks/Image"

import "./Bio.css"

export const Bio = () => {
    return (
        <div className="bio-outer-container">
            
            <div className="bio-text-container">
                <h2 className="bio-welcome">Welcome</h2>
                
                <p className="first-para-bio">
                Welcome! As a full stack developer, I have the unique ability to work on both the front-end and back-end of a website, allowing me to create dynamic and interactive web applications. Whether it's designing eye-catching user interfaces or building robust server-side functionality, I am ready to dive into every aspect of web development. Let's embark on this journey together and create innovative and seamless web experiences!
                </p>
                
                <h2>Bio</h2>
               
                <p>
                Hi there! I'm Niko, an easy-going full stack web developer on a constant quest to learn something new every day. I have a passion for creating innovative and user-friendly web solutions that make a difference. With a knack for problem-solving and a love for clean code, I enjoy tackling new challenges head-on. My journey in web development has been exhilarating, and I'm excited to continue expanding my skill set and making a positive impact in the industry. Let's build something awesome together!
                </p>
                <h2>Services</h2>
                <p>
                I specialize in mainly applications built with the MERN stack, which stands for MongoDB, Express.js, React.js, and Node.js.  Which provides a comprehensive set of web development services. These services include developing robust and scalable web applications using MongoDB as the database, Express.js as the web application framework, React.js as the user interface library, and Node.js as the server-side JavaScript runtime. The MERN stack enables developers to build full-stack JavaScript applications that leverage the advantages of each component, offering efficient and dynamic web development services with a modern and seamless user experience.
                </p>
                
                <p>I believe having a truly unique presence to your website is everything, this means the sites I create do not use templaters (wordpress, wix) and are written out from scratch.</p>
                <p>If you are looking for a truly unique and special online presence, you have come to the right place, feel free to contact me <Link to="/contact" >here.</Link></p>
            </div>
        </div>
    )
}
