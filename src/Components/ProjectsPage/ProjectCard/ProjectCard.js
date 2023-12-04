import React from 'react'
import { Link } from 'react-router-dom';
import { Image } from '../../Hooks/Image';

import "./ProjectCard.css"

export const ProjectCard = (props) => {
    
    const followLink = () => {
        window.open(props.data.link, '_blank');
    }

    const openGit = () => {
        window.open(props.data.git, '_blank');
    }

    return (
            <div className="project-card-container" style={window.innerHeight > window.innerWidth ? null : {flexDirection: props.style}}>
                <div className="project-image-container">
                    <Image image={props.data.image} objectFit='contain' />
                </div>
                <div className="project-text-container">
                    <h2>{props.data.name}</h2> 
                    <p>{props.data.description}</p>
                    <div className='project-links-container'>
                        {props.data.link === false ? null : props?.data?.direct_link ?
                        <div onClick={followLink} className='check-it-out-button'>
                            <h3>Check It Out</h3>
                        </div>
                        :
                        <Link to={`/projects/${props.data.expanded}`} className='check-it-out-button'>
                            <h3>Check It Out</h3>
                        </Link>}
                        {props.data.git === false ? null :
                        <div onClick={openGit} className='git-button-wrapper'>
                            <svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M54.957 8.19629C28.3916 8.18555 6.875 29.6914 6.875 56.2354C6.875 77.2256 20.335 95.0684 39.0801 101.621C41.6045 102.255 41.2178 100.461 41.2178 99.2363V90.9111C26.6406 92.6191 26.0498 82.9727 25.0723 81.3613C23.0957 77.9883 18.4229 77.1289 19.8193 75.5176C23.1387 73.8096 26.5225 75.9473 30.4434 81.7373C33.2793 85.9375 38.8115 85.2285 41.6152 84.5303C42.2275 82.0059 43.5381 79.75 45.3428 77.999C30.2393 75.292 23.9443 66.0752 23.9443 55.1182C23.9443 49.8008 25.6953 44.9131 29.1328 40.9707C26.9414 34.4717 29.3369 28.9072 29.6592 28.0801C35.9004 27.5215 42.3887 32.5488 42.8936 32.9463C46.4385 31.9902 50.4883 31.4854 55.0215 31.4854C59.5762 31.4854 63.6367 32.0117 67.2139 32.9785C68.4277 32.0547 74.4434 27.7363 80.2441 28.2627C80.5557 29.0898 82.8975 34.5254 80.835 40.9385C84.3154 44.8916 86.0879 49.8223 86.0879 55.1504C86.0879 66.1289 79.75 75.3564 64.6035 78.0205C65.9009 79.2963 66.931 80.8179 67.6337 82.4963C68.3364 84.1747 68.6976 85.9763 68.6963 87.7959V99.8809C68.7822 100.848 68.6963 101.804 70.3076 101.804C89.332 95.3906 103.028 77.4189 103.028 56.2461C103.028 29.6914 81.501 8.19629 54.957 8.19629Z" fill="black"/>
                            </svg>
                        </div>
                        }
                    </div>
                </div>
            </div>
    )
}
