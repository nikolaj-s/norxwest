import { createSlice } from "@reduxjs/toolkit";


const ProjectsPageFeature = createSlice({
    name: "ProjectsPageFeature",
    initialState: {
        projects: [
            {
                name: "Bubble",
                description: "Bubble is a social communication platform currently available as a desktop application that I have been working on over the past year and a half.  Main features include video streaming, voice chat, messaging, watch youtube media together ad free, and media recommendation features.",
                image: "https://res.cloudinary.com/drlkgoter/image/upload/v1701195274/Screenshot_2023-11-28_094916_rlnxbh.png",
                type: 'website',
                gridArea: 'bubble',
                expanded: 'bubble',
                expandedDescription: "Bubble is a desktop social app that allows users to create and join servers called bubbles. These bubbles serve as dedicated spaces for chatting and streaming with friends. The app aims to provide a seamless and interactive experience for users to connect and engage with their friends in a personalized environment, fostering a sense of community and collaboration.",
                technologies: ["React.js", "Electron", "MongoDB", "Mediasoup", "Express", "Node", "Redux", "Python", "Socket.io"],
                desktopPreviews: ["https://res.cloudinary.com/drlkgoter/image/upload/v1701195274/Screenshot_2023-11-28_094916_rlnxbh.png"],
                mobilePreviews: [],
                link: "https://github.com/nikolaj-s/bubble-voice/releases",
                futurePlans: "I plan to bring bubble to the web and mobile, currently i just need to work out some complexities and cover costs to bring the app to more platforms."
            },
            {
                name: "OLD.The Bubble Network",
                description: "The Bubble is an open independent social media platform that is built as a progessive web application.  The foundation of The Bubble Network is built using react.js, express.js, and socket.io.",
                image: "https://res.cloudinary.com/drlkgoter/image/upload/v1616188826/Nor.%20X%20west/Bubblead_pba7et.jpg",
                type: "website",
                gridArea: "bubble",
                link: "https://github.com/nikolaj-s/OLD.Bubble",
                git: false,
                expanded: 'thebubblenetwork',
                desktopPreviews: [
                    "https://res.cloudinary.com/drlkgoter/image/upload/v1651776604/Nor.%20X%20west/Screenshot_2022-05-01_204046_qabn4r.png",
                    "https://res.cloudinary.com/drlkgoter/image/upload/v1651775625/Nor.%20X%20west/Screenshot_2022-05-01_203716_jwqinz.png"
                ],
                mobilePreviews: [
                    "https://res.cloudinary.com/drlkgoter/image/upload/v1651775620/Nor.%20X%20west/Screenshot_2022-05-01_205123_ztlz8v.png",
                    "https://res.cloudinary.com/drlkgoter/image/upload/v1651775620/Nor.%20X%20west/Screenshot_2022-05-01_205347_irjcbl.png",
                    "https://res.cloudinary.com/drlkgoter/image/upload/v1651775620/Nor.%20X%20west/Screenshot_2022-05-01_212806_qyetdh.png",
                ],
                expandedDescription: "The Bubble Network is an open social media platform focused on sharing content and building mini communities (like a personal bubble).  Focused on simple design, open content, and is always improving.",
                technologies: ["React.js", "Axios", "Socket.io", "Express.js", "Node", "Mongoose"],
                futurePlans: "Future plans for The Bubble include a rebuild of the front end with implementation of Redux, Framer Motion, rebuilt AUTH, and content algorithm implementation.",
            },
            {
                name: "Memer",
                description: "The meme web app is a user-friendly platform that allows users to browse and discover a wide variety of memes. It offers a seamless and intuitive interface where users can easily scroll through a vast collection of memes, categorized by themes, popularity, and trends. Users can also engage with the memes by liking, sharing, or commenting on them. With regular updates and a continuous stream of new memes, the app ensures an endless source of humor and entertainment for its users.",
                image: "https://res.cloudinary.com/drlkgoter/image/upload/v1701728340/Screenshot_2023-12-04_142150_tdnefj.png",
                type: "website",
                gridArea: "bubble",
                git: false,
                expanded: "memer",
                link: "https://memer-beta.netlify.app/",
                desktopPreviews: ["https://res.cloudinary.com/drlkgoter/image/upload/v1701729784/Screenshot_2023-12-04_144615_jswdew.png"],
                mobilePreviews: [],
                expandedDescription: "The simple meme web app would provide users with an intuitive interface to browse a wide variety of memes. Simple search bar and categories for easy navigation.",
                technologies: ["React.js", "Redux", "Axios"],
            },
            {
                name: "Eye Candy Wallpapers",
                description: "Eye Candy is a wallpaper site utilizing the power of web scraping, to collect images based on user search queries, and then by attaching images to descriptive tags found while scraping.",
                image: "https://res.cloudinary.com/drlkgoter/image/upload/v1649955627/Nor.%20X%20west/Eyecandy_tkmctf.jpg",
                type: "website",
                gridArea: "eyecandy",
                link: "https://eye-candy.netlify.app/?nsfw=false&height=0&width=0&gte=true&sorting=true&query=",
                git: false,
                expanded: 'eyecandywallpapers',
                gallery: [],
                direct_link: true
            
            },
            {
                name: "Rise N Grind Kombucha",
                description: "Rise N’ Grind Kombucha is a template example of a basic animated 1 page website as a starter for someone's small business.",
                image: "https://res.cloudinary.com/drlkgoter/image/upload/v1649955627/Nor.%20X%20west/risengrindbuch_haatb3.jpg",
                type: "website",
                gridArea: "risengrind",
                link: "https://risengrindkombucha.netlify.app",
                git: "https://github.com/nikolaj-s/RiseNGrindKombucha",
                expanded: 'risengrind',
                gallery: [],
                direct_link: true
            },
            {
                name: "One Man Crew",
                description: "One Man Crew is an intermediate site option with the function of an independent reviews system, and multiple animated pages.",
                image: "https://res.cloudinary.com/drlkgoter/image/upload/v1649955627/Nor.%20X%20west/onemancrew_ncnqmf.jpg",
                type: "website",
                gridArea: "onemancrew",
                link: "https://wuweiinteriors.com/",
                git: false,
                expanded: 'onemancrew',
                direct_link: true,
                gallery: []
            },
            {
                name: "Vibe Music Bot",
                description: "Music bot built with python to use within discord while you chat and play games with your friends.  Source code available for viewing at the git hub button, site coming soon.",
                image: "https://res.cloudinary.com/drlkgoter/image/upload/v1649955627/Nor.%20X%20west/Vibe_Music_Bot_jg5h8i.png",
                type: "code",
                gridArea: "guide",
                link: true,
                git: "https://github.com/nikolaj-s/VibeMusic",
                expanded: 'vibemusicbot',
                gallery: []
            },
            {
                name: "Model Sword",
                description: "3D Modeled sword using blender, downloadable assets coming soon",
                image: "https://res.cloudinary.com/drlkgoter/image/upload/v1649955627/Nor.%20X%20west/sword_yjftm3.jpg",
                type: "3D Model",
                gridArea: "sword",
                link: false,
                git: false,
                expanded: 'modelsword',
                gallery: []
            },
            {
                name: "Beach Sprite",
                description: "3D Modeled beach sprite using blender, downloadable assets coming soon",
                image: "https://res.cloudinary.com/drlkgoter/image/upload/v1649955627/Nor.%20X%20west/beach3d_sis9aa.jpg",
                type: "3D Model",
                gridArea: "beach",
                link: false,
                git: false,
                expanded: 'beachsprite',
                gallery: []
            }
    
        ]
    },
    reducers: {
       
    },
    
})

export const selectProjects = state => state.ProjectsPageFeature.projects;

// selects specific project based on the selected pathname for the expanded projects page
export const selectProject = state => {

    const id = window.location.pathname.split('/')[2]

    return state.ProjectsPageFeature.projects.filter(project => project.expanded === id)[0];
}

export default ProjectsPageFeature.reducer;